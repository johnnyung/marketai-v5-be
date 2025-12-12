import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

export const optionsEngine: BrainEngine = {
  name: "options",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (ctx.options.length === 0) return { engine: "options", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
    
    let calls = 0;
    let puts = 0;
    ctx.options.forEach(o => {
        if (o.putCall === "CALL") calls += (Number(o.volume) || 0);
        else puts += (Number(o.volume) || 0);
    });

    const pcr = calls > 0 ? puts / calls : 1.0;
    const score = pcr < 0.7 ? 75 : pcr > 1.0 ? 25 : 50;

    return { engine: "options", tickerId: ctx.tickerId, score, bias: score > 50 ? "bullish" : "bearish", missing: false, metadata: { pcr } };
  }
};
