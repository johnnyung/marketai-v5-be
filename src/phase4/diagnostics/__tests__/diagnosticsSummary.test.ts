import { diagnosticsSummary } from '../diagnosticsSummary.js';

describe('diagnosticsSummary', () => {
  it('formats diagnostics into a single line', () => {
    const s = diagnosticsSummary({
      symbolsEvaluated: 10,
      opportunitiesEmitted: 3,
      silenceEmitted: 7,
      silenceRate: 0.7,
      averageSignalsPerSymbol: 1.2,
      explanationCoverage: 0.66,
      explanationSummaryCoverage: 0.33,
      explanationIncompleteCount: 1,
      confidenceBandCounts: { LOW: 1, MEDIUM: 1, HIGH: 1 },
      warnings: ['LOW_SUMMARY_COVERAGE'],
    });

    expect(s).toContain('Symbols');
    expect(s).toContain('Warnings');
  });
});
