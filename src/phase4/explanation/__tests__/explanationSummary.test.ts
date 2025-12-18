import { explanationSummary } from '../explanationSummary.js';

describe('explanationSummary', () => {
  it('summarizes confidence band and score', () => {
    const s = explanationSummary({
      confidenceBand: 'HIGH',
      confidenceScore: 0.83,
      riskNote: 'None',
    });

    expect(s).toContain('HIGH');
    expect(s).toContain('0.83');
  });

  it('handles missing explanation safely', () => {
    const s = explanationSummary(undefined);
    expect(s).toContain('No explanation');
  });
});
