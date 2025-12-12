export type EngineName =
  | "fundamentals" | "technical" | "sentiment" | "macro"
  | "insider" | "institutional" | "options" | "crypto"
  | "opportunity" | "risk" | "correlation" | "anomaly"
  | "catalyst" | "gamma" | "divergence" | "portfolio"
  | "valuation" | "momentum";

export type SignalBias = "bullish" | "bearish" | "neutral" | "unknown";

export interface EngineSignalResult {
  engine: EngineName;
  tickerId: string;
  score: number | null;
  bias: SignalBias;
  missing: boolean;
  metadata: Record<string, unknown>;
}

export interface BrainTickerContext {
  tickerId: string;
  symbol: string;
  assetClass: string;
  priceData: any[];
  fundamentals: any | null;
  insider: any[];
  sentiment: any[];
  institutional: any[];
  options: any[];
  macro: any[];
}
