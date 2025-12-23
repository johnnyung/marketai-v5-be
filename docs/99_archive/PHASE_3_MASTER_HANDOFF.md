# PHASE 3 — MASTER HANDOFF (AUTHORITATIVE)

This document is the **single entry point** for Phase 3 execution.

No Phase 3 work may begin unless this document is understood and accepted.

---

## 1. CURRENT CANONICAL STATE

- Phase 1: LOCKED
- Phase 2: LOCKED (Ingestion complete and immutable)
- Phase 3: PLANNED, NOT YET IMPLEMENTED

Phase 3 introduces **intelligence only**.

---

## 2. WHAT PHASE 3 IS

Phase 3 is the **interpretation layer** of MarketAI.

It:
- Reads existing data
- Evaluates signals
- Detects catalysts
- Scores confidence
- Applies risk logic
- Produces explainable opportunities

Phase 3 does NOT collect data.

---

## 3. WHAT PHASE 3 IS NOT

Phase 3 must NEVER:
- Add ingestion sources
- Modify ingestion pipelines
- Change schemas
- Add frontend logic
- Optimize prematurely
- Guess when data is missing

---

## 4. REQUIRED DOCUMENTS (MUST BE READ)

Before writing any Phase 3 code, the following documents are mandatory:

- PHASE_3_INTELLIGENCE_OVERVIEW.md
- INTELLIGENCE_ENGINE_TAXONOMY.md
- OPPORTUNITY_OBJECT_CANON.md
- SIGNAL_SCORING_MODEL.md
- RISK_AND_GUARDRAILS.md
- PHASE_3_EXECUTION_FLOW.md
- PHASE_3_NON_GOALS.md
- PHASE_3_READINESS_CHECKLIST.md
- PHASE_3_EXECUTION_GATES.md
- PHASE_3_SUCCESS_CRITERIA.md
- PHASE_3_FAILURE_MODES.md

If any conflict exists, **this handoff defers to those docs**.

---

## 5. EXECUTION PHILOSOPHY

Phase 3 must prefer:
- Conservative intelligence
- Explicit uncertainty
- Explainability over cleverness
- Empty output over false confidence

A silent system is acceptable.
A misleading system is not.

---

## 6. AUTHORIZED START CONDITION

Phase 3 implementation may begin ONLY after:

- PHASE_3_READINESS_CHECKLIST.md is explicitly approved
- Execution begins at **Gate 1 only**
- All work respects gate boundaries

Skipping gates is forbidden.

---

## 7. FAILURE CLAUSE

Any Phase 3 work that:
- Reopens Phase 2
- Alters ingestion semantics
- Introduces unexplainable scores
- Leaks UI concerns

Is considered INVALID and must be reverted.

---

## 8. FINAL NOTE TO FUTURE AI / ENGINEERS

If you feel the urge to:
> “Just quickly add…”

Stop.

Re-read this document and the Phase 3 Non-Goals.

Phase discipline is more important than speed.
