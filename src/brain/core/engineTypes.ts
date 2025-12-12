import { BrainTickerContext, EngineSignalResult } from "../schema/types.js";

export interface BrainEngine {
  name: string;
  run(ctx: BrainTickerContext): Promise<EngineSignalResult>;
}
