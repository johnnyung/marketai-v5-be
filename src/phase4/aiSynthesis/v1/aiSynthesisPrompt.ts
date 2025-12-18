import type { CorrelationCandidate } from "./types.js";

export function buildAISynthesisPrompt(candidates: CorrelationCandidate[]): string {
  const header = [
    "SYSTEM ROLE",
    "You are a financial intelligence analyst.",
    "",
    "MISSION",
    "Interpret correlation candidates produced by deterministic engines.",
    "You do NOT generate trades or recommendations.",
    "You explain possible relationships with appropriate uncertainty.",
    "",
    "HARD RULES (DO NOT VIOLATE)",
    "- Do NOT invent facts not present in the input.",
    "- Do NOT assume causation from correlation.",
    "- Do NOT speculate beyond provided evidence.",
    "- If evidence is weak or uniform, explicitly say so.",
    "- It is acceptable to conclude: \"No meaningful insight.\"",
    "",
    "OUTPUT FORMAT (STRICT)",
    "Return a JSON object with:",
    "{",
    "  \"summary\": string,",
    "  \"confidence\": number,",
    "  \"rationale\": string[],",
    "  \"risks\": string[]",
    "}",
    "",
    "FAIL SAFE",
    "If inputs lack diversity or depth, return:",
    "- summary: \"No meaningful correlations beyond expected recurrence.\"",
    "- confidence: <= 0.3",
    ""
  ].join("\n");

  const body = [
    "Candidates:",
    JSON.stringify(candidates, null, 2)
  ].join("\n");

  return [header, body].join("\n");
}
