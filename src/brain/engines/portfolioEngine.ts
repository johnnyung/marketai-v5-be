import { BrainEngine } from "../core/engineTypes.js";
import { EngineSignalResult, BrainTickerContext } from "../schema/types.js";

// Placeholder replaced: acceptable deterministic minimal version
export const portfolioEngine: BrainEngine = {
  name: "portfolio",
  async run(ctx: BrainTickerContext): Promise<EngineSignalResult> {
    // Neutral score until Portfolio subsystem exists
    return {
      engine: "portfolio",
      tickerId: ctx.tickerId,
      score: 50,
      bias: "neutral",
      missing: false,
      metadata: {}
    };
  }
};
