import { OpportunityQualification } from '../models/OpportunityQualification.js';

interface OpportunityLike {
  confidence: string;
  risks: string[];
}

export function qualifyOpportunity(
  opportunity: OpportunityLike
): OpportunityQualification {
  if (opportunity.risks.length >= 2) {
    return 'HIGH_RISK';
  }

  if (opportunity.confidence === 'HIGH') {
    return 'STRONG';
  }

  if (opportunity.confidence === 'MEDIUM') {
    return 'MODERATE';
  }

  return 'SPECULATIVE';
}
