import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

// Basic market beta estimation using price deltas (still deterministic)
export const correlationEngine: BrainEngine = {
  name: "correlation",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (ctx.priceData.length < 10)
      return { engine: "correlation", tickerId: ctx.tickerId, score: null, bias: "unknown", missing: true, metadata: {} };

    const closes = ctx.priceData.slice(0, 10).map(p => Number(p.close));
    const moves = closes.slice(0, -1).map((c, i) => c - closes[i+1]);
    const avgMove = moves.reduce((a,b)=>a+b,0) / moves.length;
    const volatility = Math.abs(avgMove);

    const score = volatility < 2 ? 70 : 40;

    return {
      engine: "correlation",
      tickerId: ctx.tickerId,
      score,
      bias: score > 50 ? "bullish" : "bearish",
      missing: false,
      metadata: { volatility }
    };
  }
};
