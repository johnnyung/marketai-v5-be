export interface DiagnosticsMetrics {
  symbolsEvaluated: number;
  opportunitiesEmitted: number;
  silenceEmitted: number;
  silenceRate: number;
  averageSignalsPerSymbol: number;

  explanationCoverage: number;
  explanationSummaryCoverage: number;
  explanationIncompleteCount: number;

  confidenceBandCounts: {
    LOW: number;
    MEDIUM: number;
    HIGH: number;
  };

  warnings: string[];
}
