interface ExplanationLike {
  confidenceBand?: 'LOW' | 'MEDIUM' | 'HIGH';
  confidenceScore?: number;
  riskNote?: string;
}

export function explanationSummary(e?: ExplanationLike): string {
  if (!e) return 'No explanation available';

  const band = e.confidenceBand ?? 'UNKNOWN';
  const score =
    typeof e.confidenceScore === 'number'
      ? e.confidenceScore.toFixed(2)
      : 'NA';

  return `Confidence ${band} (${score})`;
}
