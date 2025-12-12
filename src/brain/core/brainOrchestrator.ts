import { prisma } from "../../db/prisma.js";
import { Prisma } from "@prisma/client";
import crypto from "crypto";
import { buildTickerContext } from "./tickerContextBuilder.js";
import { engineRegistry } from "./engineRegistry.js";
import { FusionEngine } from "../fusion/fusionEngine.js";
import { TradeArchitect } from "../trade/phfa.js";
import { ModelRouter } from "../../ai/modelRouter.js";
import { Prompts } from "../../ai/prompts/basePrompts.js";
import { MetaOrchestrator } from "../meta/metaOrchestrator.js";
import { logger } from "../../utils/logger.js";
import { EngineSignalResult } from "../schema/types.js";

// prisma singleton imported

export interface BrainOptions {
  mode: "full" | "ticker";
  tickerSymbol?: string;
  force?: boolean;
  dryRun?: boolean;
}

export class BrainOrchestrator {
  private static generateRunHash(tickerId: string): string {
    const now = new Date();
    const minutes = Math.floor(now.getMinutes() / 15) * 15;
    const timeWindow = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${minutes}`;
    return crypto
      .createHash("sha256")
      .update(`${tickerId}-${timeWindow}-v5`)
      .digest("hex");
  }

  /**
   * Ensures a value is Prisma-JSON-safe by round-tripping through JSON.
   * This strips out non-serializable values and converts `unknown` metadata
   * into plain JSON objects/arrays.
   */
  private static toJsonValue<T>(value: T): Prisma.InputJsonValue {
    return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
  }

  static async runCycle(options: BrainOptions) {
    const config = options;

    logger.info(`🧠 Brain Cycle Started: ${config.mode}`, config);

    const where = config.tickerSymbol
      ? { symbol: config.tickerSymbol }
      : { isActive: true };

    const tickers = await prisma.ticker.findMany({ where });

    for (const t of tickers) {
      try {
        const runHash = this.generateRunHash(t.id);

        if (!config.force && !config.dryRun) {
          const existing = await prisma.intelligenceBundle.findFirst({
            where: { tickerId: t.id, runHash }
          });
          if (existing) {
            logger.info(`Skipping ${t.symbol}: already computed.`);
            continue;
          }
        }

        const ctx = await buildTickerContext(t.id);

        const signals: EngineSignalResult[] = [];
        for (const key in engineRegistry) {
          try {
            const res = await engineRegistry[key].run(ctx);
            if (res && typeof res === "object") signals.push(res);
          } catch (e) {
            logger.warn(`Engine ${key} failed`, e);
          }
        }

        const fusion = FusionEngine.fuse(t.id, signals);
        const price = Number(ctx.priceData?.[0]?.close ?? 0);
        const plan = TradeArchitect.generatePlan(fusion.compositeScore, price);

        let aiRationale = "";
        if (plan.action === "BUY" && fusion.compositeScore > 80 && !config.dryRun) {
          try {
            const bullish = signals.filter(s => s.bias === "bullish").map(s => s.engine);
            const ai = await ModelRouter.call({
              prompt: Prompts.buyNarrative(t.symbol, fusion.compositeScore, bullish)
            });
            aiRationale = ai.content;
          } catch {}
        }

        if (!config.dryRun) {
          // Signals -> JSON-safe map
          const signalMap: Record<string, any> = {};
          signals.forEach(s => {
            if (s.engine) {
              signalMap[s.engine] = {
                engine: s.engine,
                score: s.score,
                bias: s.bias,
                missing: s.missing,
                metadata: s.metadata ?? {}
              };
            }
          });

          const bundle = await prisma.intelligenceBundle.create({
            data: {
              tickerId: t.id,
              runHash,
              compositeScore: fusion.compositeScore,
              riskScore: fusion.riskScore,
              signals: this.toJsonValue(signalMap),
              summary: JSON.stringify(plan)
            }
          });

          if (plan.action === "BUY") {
            // Catalysts -> JSON-safe array (IMPORTANT for Prisma typing)
            const activeCatalysts = signals
              .filter(s => s.engine === "catalyst" && s.bias === "bullish")
              .map(s => ({
                engine: s.engine,
                score: s.score,
                bias: s.bias,
                metadata: s.metadata ?? {}
              }));

            await prisma.opportunity.create({
              data: {
                tickerId: t.id,
                intelligenceBundleId: bundle.id,
                score: fusion.compositeScore,
                category: "top_pick",
                rationale: aiRationale || plan.rationale,
                catalysts: this.toJsonValue(activeCatalysts)
              }
            });
          }
        } else {
          logger.info(`[Dry Run] ${t.symbol} Score: ${fusion.compositeScore} Plan: ${plan.action}`);
        }

      } catch (e: any) {
        logger.error(`Brain failed for ${t.symbol}`, e);
      }
    }

    if (config.mode === "full" && !config.dryRun) {
      MetaOrchestrator.runSelfImprovementCycle().catch(() => {});
    }

    logger.info("✅ Brain Cycle Complete");
  }
}
