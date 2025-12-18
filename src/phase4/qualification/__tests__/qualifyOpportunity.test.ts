import { qualifyOpportunity } from '../qualifyOpportunity.js';

describe('qualifyOpportunity', () => {
  it('returns STRONG for high confidence and low risk', () => {
    const q = qualifyOpportunity({ confidence: 'HIGH', risks: [] });
    expect(q).toBe('STRONG');
  });

  it('returns MODERATE for medium confidence', () => {
    const q = qualifyOpportunity({ confidence: 'MEDIUM', risks: [] });
    expect(q).toBe('MODERATE');
  });

  it('returns HIGH_RISK when multiple risks exist', () => {
    const q = qualifyOpportunity({ confidence: 'HIGH', risks: ['R1', 'R2'] });
    expect(q).toBe('HIGH_RISK');
  });

  it('defaults to SPECULATIVE', () => {
    const q = qualifyOpportunity({ confidence: 'LOW', risks: [] });
    expect(q).toBe('SPECULATIVE');
  });
});
