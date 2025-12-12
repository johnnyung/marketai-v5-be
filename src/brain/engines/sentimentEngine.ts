import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

export const sentimentEngine: BrainEngine = {
  name: "sentiment",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (ctx.sentiment.length === 0) return { engine: "sentiment", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
    
    // Simple sentiment volume proxy
    const score = Math.min(50 + (ctx.sentiment.length * 5), 90);

    return { engine: "sentiment", tickerId: ctx.tickerId, score, bias: score > 60 ? "bullish" : "neutral", missing: false, metadata: { count: ctx.sentiment.length } };
  }
};
