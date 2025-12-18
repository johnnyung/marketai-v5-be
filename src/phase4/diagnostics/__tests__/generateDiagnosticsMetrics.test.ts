import { generateDiagnosticsMetrics } from '../generateDiagnosticsMetrics.js';

describe('generateDiagnosticsMetrics (warnings)', () => {
  it('emits warnings when coverage is low', () => {
    const metrics = generateDiagnosticsMetrics({
      symbolsEvaluated: 2,
      silenceEmitted: 0,
      totalSignals: 1,
      opportunities: [
        { explanation: undefined },
        { explanation: undefined },
      ],
    });

    expect(metrics.warnings).toContain('LOW_EXPLANATION_COVERAGE');
    expect(metrics.warnings).toContain('LOW_SUMMARY_COVERAGE');
  });

  it('emits incomplete rate warning', () => {
    const metrics = generateDiagnosticsMetrics({
      symbolsEvaluated: 3,
      silenceEmitted: 0,
      totalSignals: 3,
      opportunities: [
        { explanation: { confidenceScore: 0.8 } },
        { explanation: { confidenceScore: 0.6 } },
        {
          explanation: {
            confidenceScore: 0.9,
            confidenceBand: 'HIGH',
            riskNote: 'None',
            signals: ['A'],
          },
        },
      ],
    });

    expect(metrics.warnings).toContain('HIGH_INCOMPLETE_RATE');
  });
});
