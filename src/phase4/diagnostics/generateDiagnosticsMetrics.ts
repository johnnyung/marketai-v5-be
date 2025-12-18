import { DiagnosticsMetrics } from '../models/DiagnosticsMetrics.js';

interface OpportunityLike {
  explanation?: {
    confidenceScore?: number;
    confidenceBand?: 'LOW' | 'MEDIUM' | 'HIGH';
    riskNote?: string;
    signals?: unknown[];
  };
  explanationSummary?: string;
}

interface DiagnosticsInput {
  symbolsEvaluated: number;
  opportunities: OpportunityLike[];
  silenceEmitted: number;
  totalSignals: number;
}

export function generateDiagnosticsMetrics(input: DiagnosticsInput): DiagnosticsMetrics {
  const bandCounts = { LOW: 0, MEDIUM: 0, HIGH: 0 };
  let incomplete = 0;
  let summaryPresent = 0;

  for (const o of input.opportunities) {
    if (o.explanationSummary) summaryPresent++;

    const e = o.explanation;
    if (!e ||
        e.confidenceScore === undefined ||
        !e.confidenceBand ||
        !e.riskNote ||
        !e.signals) {
      incomplete++;
    } else {
      bandCounts[e.confidenceBand]++;
    }
  }

  const explanationCoverage =
    input.opportunities.length === 0
      ? 0
      : input.opportunities.filter(o => Boolean(o.explanation)).length /
        input.opportunities.length;

  const explanationSummaryCoverage =
    input.opportunities.length === 0
      ? 0
      : summaryPresent / input.opportunities.length;

  const incompleteRate =
    input.opportunities.length === 0
      ? 0
      : incomplete / input.opportunities.length;

  const warnings: string[] = [];

  if (explanationCoverage < 0.5) warnings.push('LOW_EXPLANATION_COVERAGE');
  if (explanationSummaryCoverage < 0.5) warnings.push('LOW_SUMMARY_COVERAGE');
  if (incompleteRate > 0.3) warnings.push('HIGH_INCOMPLETE_RATE');

  return {
    symbolsEvaluated: input.symbolsEvaluated,
    opportunitiesEmitted: input.opportunities.length,
    silenceEmitted: input.silenceEmitted,
    silenceRate:
      input.symbolsEvaluated === 0
        ? 0
        : input.silenceEmitted / input.symbolsEvaluated,
    averageSignalsPerSymbol:
      input.symbolsEvaluated === 0
        ? 0
        : input.totalSignals / input.symbolsEvaluated,

    explanationCoverage,
    explanationSummaryCoverage,
    explanationIncompleteCount: incomplete,
    confidenceBandCounts: bandCounts,
    warnings,
  };
}
