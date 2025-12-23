# MARKETAI V5 — PHASE 7 ENGINE ACTIVATION PLAN
🔒 Planning Only — No Runtime Changes

## Objective
Safely activate analysis engines **incrementally** using DRY-RUN gates.
No engine writes data until explicitly unlocked.

---

## Activation Order (Strict)

### Phase 7.1 — Correlation Hunter (DRY-RUN)
- Input: intelligenceBundle
- Output: correlationArtifacts (memory only)
- No DB writes
- Metrics only

### Phase 7.2 — Catalyst Hunter (DRY-RUN)
- Input: correlationArtifacts
- Output: catalystSignals (memory only)
- No DB writes

### Phase 7.3 — AI Synthesis (DRY-RUN)
- Input: correlation + catalyst signals
- Output: opportunityDraft (memory only)
- No Opportunity writes

### Phase 7.4 — Risk Context (DRY-RUN)
- Input: opportunityDraft
- Output: riskAdjustedDraft
- No DB writes

### Phase 7.5 — Lifecycle Engine (DRY-RUN)
- Tracks hypothetical lifecycle
- Metrics + logs only

---

## Safety Gates
Each engine requires:
- ENABLED = false
- DRY_RUN = true
- WRITE_ENABLED = false

All three must be flipped to activate.

---

## Promotion Criteria
An engine may move from DRY-RUN → LIVE only if:
- ≥ 7 days stable execution
- Metrics logged
- No schema violations
- Manual approval

---

## Non-Goals
- No mock data
- No placeholders
- No automatic promotion

---

## Canon Lock
This plan governs all Phase 7 work.
Additive only.

