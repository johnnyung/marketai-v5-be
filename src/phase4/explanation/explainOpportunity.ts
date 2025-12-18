import { OpportunityExplanation, ConfidenceBand } from '../models/OpportunityExplanation.js';

interface OpportunityLike {
  symbol: string;
  confidence: string;
  risks: string[];
  signals: string[];
}

function synthesizeConfidence(
  confidence: string
): { note: string; score: number; band: ConfidenceBand } {
  switch (confidence) {
    case 'HIGH':
      return {
        note: 'Signals show strong alignment and historical reliability.',
        score: 0.85,
        band: 'HIGH',
      };
    case 'MEDIUM':
      return {
        note: 'Signals show partial alignment with moderate conviction.',
        score: 0.55,
        band: 'MEDIUM',
      };
    case 'LOW':
      return {
        note: 'Signals are weak or inconsistent.',
        score: 0.25,
        band: 'LOW',
      };
    default:
      return {
        note: 'Confidence level is undefined due to limited data.',
        score: 0.0,
        band: 'LOW',
      };
  }
}

function synthesizeRisk(risks: string[]): string {
  if (risks.length === 0) return 'No material risk factors were detected.';
  if (risks.length === 1) return `Primary risk factor identified: ${risks[0]}.`;
  return `Multiple risk factors identified: ${risks.join(', ')}.`;
}

export function explainOpportunity(o: OpportunityLike): OpportunityExplanation {
  const c = synthesizeConfidence(o.confidence);

  return {
    summary: `Opportunity detected for ${o.symbol}`,
    confidenceNote: c.note,
    confidenceScore: c.score,
    confidenceBand: c.band,
    riskNote: synthesizeRisk(o.risks),
    signals: o.signals,
  };
}
