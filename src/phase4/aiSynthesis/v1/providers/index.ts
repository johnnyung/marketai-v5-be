import type { AISynthesisProvider } from "../runAISynthesis.js";

export const claudeProvider: AISynthesisProvider = async ({ candidates, context }) => {
  const prompt = "CLAUDE_STUB\\nCandidates: " + JSON.stringify(candidates).slice(0, 1000);
  return { prompt };
};

export const openAIProvider: AISynthesisProvider = async ({ candidates, context }) => {
  const prompt = "OPENAI_STUB\\nCandidates: " + JSON.stringify(candidates).slice(0, 1000);
  return { prompt };
};

// Claude-first fallback
export const defaultProvider: AISynthesisProvider = async (input) => {
  try {
    return await claudeProvider(input);
  } catch {
    return await openAIProvider(input);
  }
};
