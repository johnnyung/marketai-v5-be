Phase 4 MUST NOT:
- Modify ingestion
- Modify schemas
- Rank or suppress opportunities
- Persist new data
- Touch UI

<!-- PHASE_4_SPARSE_INPUT_RULE_START -->
## Sparse Input Tolerance (Enforced)

Phase-4 must tolerate incomplete upstream context.

Valid states include:
- Missing or empty `risks`
- Missing pricing (`entry`, `target`, `stopLoss`)
- No final decision

Explanation and diagnostics layers **must never throw** on missing data.

Crashes at this layer are considered system faults.

<!-- PHASE_4_SPARSE_INPUT_RULE_END -->

