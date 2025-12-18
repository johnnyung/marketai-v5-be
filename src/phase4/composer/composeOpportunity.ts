import { qualifyOpportunity } from '../qualification/qualifyOpportunity.js';
import { explainOpportunity } from '../explanation/explainOpportunity.js';
import { explanationSummary } from '../explanation/explanationSummary.js';

interface OpportunityLike {
  symbol: string;
  confidence: string;
  risks: string[];
  signals: string[];
}

export function composeOpportunity(o: OpportunityLike) {
  const explanation = explainOpportunity(o);

  return {
    symbol: o.symbol,
    qualification: qualifyOpportunity(o),
    explanation,
    confidenceScore: explanation.confidenceScore,
    confidenceBand: explanation.confidenceBand,
    explanationSummary: explanationSummary(explanation),
  };
}
