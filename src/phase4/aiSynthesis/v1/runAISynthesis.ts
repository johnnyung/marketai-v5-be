// Phase-4 AI Synthesis is intentionally decoupled from Phase-3 internals.
// Minimal contract only — do NOT import engine types.

export type CorrelationCandidate = {
  type: string;
  description: string;
  count: number;
};

export type AISynthesisProvider = (input: {
  candidates: CorrelationCandidate[];
  context?: Record<string, unknown>;
}) => Promise<{
  prompt: string;
  result?: unknown;
}>;

export async function runAISynthesis(opts: {
  provider: AISynthesisProvider;
  candidates: CorrelationCandidate[];
  context?: Record<string, unknown>;
}) {
  const { provider, candidates, context } = opts;

  if (!candidates || candidates.length === 0) {
    return {
      prompt: "",
      result: null
    };
  }

  return provider({
    candidates,
    context
  });
}
