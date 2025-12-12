#!/bin/bash
# ==============================================================================
# SCRIPT: fix_brain_orchestrator_types.sh (Script 2C-B)
# PURPOSE: Fix EngineName typing + logger error field in BrainOrchestrator
# LOCATION: ~/Desktop/marketai-v5
# ==============================================================================

set -e

PROJECT_ROOT="$HOME/Desktop/marketai-v5"
TARGET_FILE="$PROJECT_ROOT/backend/src/brain/core/brainOrchestrator.ts"

echo "🛠 Fixing BrainOrchestrator typing issues…"

if [ ! -f "$TARGET_FILE" ]; then
  echo "❌ File not found: $TARGET_FILE"
  exit 1
fi

cat << 'EOF' > "$TARGET_FILE"
import { PrismaClient } from "@prisma/client";
import { buildTickerContext } from "./tickerContextBuilder.js";
import { engineRegistry } from "./engineRegistry.js";
import { FusionEngine } from "../fusion/fusionEngine.js";
import { TradeArchitect } from "../trade/phfa.js";
import { ModelRouter } from "../../ai/modelRouter.js";
import { Prompts } from "../../ai/prompts/basePrompts.js";
import { MetaOrchestrator } from "../meta/metaOrchestrator.js";
import { logger } from "../../utils/logger.js";
import { EngineSignalResult, EngineName } from "../schema/types.js";

const prisma = new PrismaClient();

export class BrainOrchestrator {
  static async runCycle(mode: "full" | "ticker", tickerSymbol?: string) {
    logger.info(`🧠 Brain Cycle Started: ${mode}`);
    
    const where = tickerSymbol ? { symbol: tickerSymbol } : { isActive: true };
    const tickers = await prisma.ticker.findMany({ where });

    for (const t of tickers) {
      try {
        const ctx = await buildTickerContext(t.id);

        const signals: EngineSignalResult[] = [];

        for (const key of Object.keys(engineRegistry) as EngineName[]) {
          const engine = engineRegistry[key];
          const result = await engine.run(ctx);
          signals.push(result);
        }

        const fusion = FusionEngine.fuse(t.id, signals);

        const price = ctx.priceData[0]?.close ? Number(ctx.priceData[0].close) : 0;
        const plan = TradeArchitect.generatePlan(fusion.compositeScore, price);

        let aiRationale = "";
        if (plan.action === "BUY") {
          const bullishEngines = signals.filter(s => s.bias === "bullish").map(s => s.engine);
          const aiRes = await ModelRouter.call({
            prompt: Prompts.buyNarrative(t.symbol, fusion.compositeScore, bullishEngines)
          });
          aiRationale = aiRes.content;
        }

        const signalMap: Record<string, any> = {};
        signals.forEach(s => (signalMap[s.engine] = s));

        await prisma.intelligenceBundle.create({
          data: {
            tickerId: t.id,
            runAt: new Date(),
            compositeScore: fusion.compositeScore,
            signals: signalMap,
            summary: JSON.stringify(plan)
          }
        });

        if (plan.action === "BUY") {
          await prisma.opportunity.create({
            data: {
              tickerId: t.id,
              score: fusion.compositeScore,
              category: "top_pick",
              rationale: aiRationale || plan.rationale,
              catalysts: []
            }
          });
        }

      } catch (e: any) {
        logger.error(`Brain Cycle Error for ${t.symbol}`, {
          error: String(e?.message || e)
        });
      }
    }

    if (mode === "full") {
      await MetaOrchestrator.runSelfImprovementCycle();
    }
    
    logger.info("✅ Brain Cycle Complete.");
  }
}
EOF

echo "✅ Fix Script 2C-B applied successfully."
echo "Run the following to verify:"
echo "cd $PROJECT_ROOT/backend"
echo "npm run build"
