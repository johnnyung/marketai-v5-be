import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

export const fundamentalsEngine: BrainEngine = {
  name: "fundamentals",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (!ctx.fundamentals) return { engine: "fundamentals", tickerId: ctx.tickerId, score: null, bias: "unknown", missing: true, metadata: {} };
    
    const ni = Number(ctx.fundamentals.netIncome || 0);
    const equity = Number(ctx.fundamentals.totalEquity || 1);
    const roe = equity > 0 ? ni / equity : 0;
    
    let score = 50;
    if (roe > 0.15) score += 20;
    else if (roe > 0.05) score += 10;
    if (ni > 0) score += 10;
    
    score = Math.min(Math.max(score, 0), 100);

    return {
      engine: "fundamentals",
      tickerId: ctx.tickerId,
      score,
      bias: score > 60 ? "bullish" : score < 40 ? "bearish" : "neutral",
      missing: false,
      metadata: { roe, netIncome: ni }
    };
  }
};
