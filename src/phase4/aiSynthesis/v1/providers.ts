export type AISynthesisInput = {
  candidates: unknown[];
  context?: Record<string, unknown>;
};

export type AISynthesisResult = {
  prompt: string;
  result?: unknown; // disabled for now
};

export interface AISynthesisProvider {
  name: string;
  synthesize(input: AISynthesisInput): Promise<AISynthesisResult>;
}
