import { defaultProvider } from "../aiSynthesis/v1/index.js";

export async function runAISynthesisDiagnostic() {
  console.log("[Diag] AI Synthesis Diagnostic");

  const result = await defaultProvider.synthesize({
    candidates: [],
  });

  console.log("[Diag] Prompt preview:");
  console.log(result.prompt.slice(0, 500));
}

runAISynthesisDiagnostic().catch(console.error);
