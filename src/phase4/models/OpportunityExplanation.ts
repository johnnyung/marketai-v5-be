export type ConfidenceBand = 'LOW' | 'MEDIUM' | 'HIGH';

export interface OpportunityExplanation {
  summary: string;
  confidenceNote: string;
  riskNote: string;
  signals: string[];
  confidenceScore: number; // 0..1
  confidenceBand: ConfidenceBand;
}
