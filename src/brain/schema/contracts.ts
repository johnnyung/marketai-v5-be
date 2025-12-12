import { EngineName, SignalBias } from "./types.js";

/**
 * Represents the raw output of a specific engine.
 * Stored in IntelligenceBundle.signals (JSONB).
 */
export interface EngineResult {
  engine: EngineName;
  tickerId: string;
  score: number; // 0-100
  bias: SignalBias;
  missing: boolean;
  metadata: Record<string, unknown>;
}

/**
 * Represents the calculated Trade Plan from PHFA.
 * Stored in IntelligenceBundle.summary (JSON string) or Opportunity.rationale.
 */
export interface TradePlan {
  action: "BUY" | "SELL" | "HOLD" | "AVOID";
  entry: number;
  target: number;
  stop: number;
  rationale: string;
  riskRewardRatio?: number;
}

/**
 * The aggregated intelligence payload sent to Frontend.
 */
export interface IntelligencePayload {
  compositeScore: number;
  riskScore: number;
  regime: string;
  signals: Record<EngineName, EngineResult>;
  tradePlan: TradePlan;
}
