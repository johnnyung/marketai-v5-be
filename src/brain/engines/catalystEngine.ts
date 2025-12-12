import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

export const catalystEngine: BrainEngine = {
  name: "catalyst",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    const recent = ctx.sentiment.length;
    const score = recent > 3 ? 80 : 30;
    return { engine: "catalyst", tickerId: ctx.tickerId, score, bias: score > 50 ? "bullish" : "neutral", missing: false, metadata: { newsCount: recent } };
  }
};
