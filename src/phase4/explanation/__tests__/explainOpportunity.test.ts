import { explainOpportunity } from '../explainOpportunity.js';

describe('explainOpportunity (synthesis)', () => {
  it('synthesizes HIGH confidence and no risks', () => {
    const result = explainOpportunity({
      symbol: 'AAPL',
      confidence: 'HIGH',
      risks: [],
      signals: ['EARNINGS'],
    });

    expect(result.summary).toContain('AAPL');
    expect(result.confidenceNote).toContain('strong alignment');
    expect(result.riskNote).toContain('No material risk');
  });

  it('synthesizes MEDIUM confidence with single risk', () => {
    const result = explainOpportunity({
      symbol: 'TSLA',
      confidence: 'MEDIUM',
      risks: ['VOLATILITY'],
      signals: [],
    });

    expect(result.confidenceNote).toContain('partial alignment');
    expect(result.riskNote).toContain('Primary risk factor');
  });

  it('handles multiple risks gracefully', () => {
    const result = explainOpportunity({
      symbol: 'COIN',
      confidence: 'LOW',
      risks: ['REGULATORY', 'LIQUIDITY'],
      signals: [],
    });

    expect(result.confidenceNote).toContain('weak or inconsistent');
    expect(result.riskNote).toContain('Multiple risk factors');
  });
});
