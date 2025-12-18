import { defaultProvider } from "../aiSynthesis/v1/index.js";

export async function runAISynthesisManual(candidates: unknown[]) {
  console.log("[Manual] AI Synthesis Run");

  const result = await defaultProvider.synthesize({
    candidates,
  });

  console.log("[Manual] Prompt preview:");
  console.log(result.prompt.slice(0, 500));
}
