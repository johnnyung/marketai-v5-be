import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

// Deterministic valuation rule using P/E proxy
export const valuationEngine: BrainEngine = {
  name: "valuation",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (!ctx.fundamentals)
      return { engine: "valuation", tickerId: ctx.tickerId, score: null, bias: "unknown", missing: true, metadata: {} };

    const eps = Number(ctx.fundamentals.eps || 0);
    const price = Number(ctx.priceData?.[0]?.close || 0);
    const pe = eps > 0 ? price / eps : 0;

    const score = pe > 0 && pe < 20 ? 75 : pe < 40 ? 55 : 30;

    return {
      engine: "valuation",
      tickerId: ctx.tickerId,
      score,
      bias: score > 55 ? "bullish" : score < 45 ? "bearish" : "neutral",
      missing: false,
      metadata: { pe }
    };
  }
};
