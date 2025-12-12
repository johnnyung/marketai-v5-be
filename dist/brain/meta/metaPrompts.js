export const MetaPrompts = {
    selfImprovement: (metrics) => `
--- META-AI REQUEST START ---
SYSTEM PERFORMANCE REPORT:
${JSON.stringify(metrics)}

TASKS:
1. Identify the 3 weakest deterministic engines.
2. Recommend new weights (0.5 → 3.0).
3. Explain WHY each engine is weak.
4. Detect drift or deterioration patterns.
5. Recommend ingestion or engine calibration.
6. Output JSON exactly in this format:
{
  "weakEngines": [],
  "recommendedWeights": {},
  "driftDetected": false,
  "notes": "..."
}
--- META-AI REQUEST END ---
`
};
