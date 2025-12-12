import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

export const riskEngine: BrainEngine = {
  name: "risk",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    if (ctx.priceData.length < 20) return { engine: "risk", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
    
    const changes = ctx.priceData.slice(0, 10).map((p, i) => Math.abs(Number(p.close) - Number(ctx.priceData[i+1]?.close || p.close)));
    const avgChange = changes.reduce((a,b)=>a+b,0) / changes.length;
    const price = Number(ctx.priceData[0].close);
    const volatilityPct = avgChange / price;

    const score = Math.max(0, 100 - (volatilityPct * 1000));

    return { engine: "risk", tickerId: ctx.tickerId, score, bias: "neutral", missing: false, metadata: { volatilityPct } };
  }
};
