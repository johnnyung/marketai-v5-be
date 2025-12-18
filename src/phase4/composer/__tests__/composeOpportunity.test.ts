import { composeOpportunity } from '../composeOpportunity.js';

describe('composeOpportunity (explanation summary)', () => {
  it('exposes explanation summary alongside confidence data', () => {
    const result = composeOpportunity({
      symbol: 'AAPL',
      confidence: 'HIGH',
      risks: [],
      signals: ['EARNINGS'],
    });

    expect(result.symbol).toBe('AAPL');
    expect(result.explanation).toBeDefined();
    expect(result.confidenceScore).toBeDefined();
    expect(result.confidenceBand).toBeDefined();
    expect(result.explanationSummary).toContain('Confidence');
  });
});
