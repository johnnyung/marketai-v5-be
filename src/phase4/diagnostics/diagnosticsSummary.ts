import { DiagnosticsMetrics } from '../models/DiagnosticsMetrics.js';

export function diagnosticsSummary(m: DiagnosticsMetrics): string {
  const parts: string[] = [];

  parts.push(`Symbols: ${m.symbolsEvaluated}`);
  parts.push(`Opportunities: ${m.opportunitiesEmitted}`);
  parts.push(`Silence rate: ${(m.silenceRate * 100).toFixed(1)}%`);
  parts.push(
    `Explanation coverage: ${(m.explanationCoverage * 100).toFixed(1)}%`
  );
  parts.push(
    `Summary coverage: ${(m.explanationSummaryCoverage * 100).toFixed(1)}%`
  );

  if (m.warnings.length > 0) {
    parts.push(`Warnings: ${m.warnings.join(', ')}`);
  }

  return parts.join(' | ');
}
