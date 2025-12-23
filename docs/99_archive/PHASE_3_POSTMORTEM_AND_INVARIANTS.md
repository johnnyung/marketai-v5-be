# PHASE 3 — POST-MORTEM VALIDATION & INVARIANTS (AUTHORITATIVE)

This document records **why Phase 3 is correct**, what **must never regress**, and how to **detect drift**.
It applies to all future work unless explicitly overridden.

---

## 1. SNAPSHOT BASELINE

Canonical archived snapshot:
- Path: `backend/archives/phase3_20251217_111657`
- Status: Gate 1–3 APPROVED
- Phase 3: COMPLETE

All comparisons and validations reference this snapshot.

---

## 2. CORE INVARIANTS (NON-NEGOTIABLE)

### 2.1 Signal State Semantics
- Signals MUST resolve to exactly one:
  - NO_DATA
  - DATA_PRESENT_BUT_NEUTRAL
  - DATA_PRESENT_AND_POSITIVE
  - DATA_PRESENT_AND_NEGATIVE
- Ambiguity MUST coerce to NO_DATA.
- NO_DATA MUST NOT be collapsed into NEUTRAL.

### 2.2 Calendar Semantics
- Calendars are episodic and contextual only.
- Mandatory time decay; expired events contribute nothing.
- Recency alone MUST NOT imply importance or direction.
- Calendars MUST NOT be treated as continuous signals.

### 2.3 Explainable Silence
- Zero opportunities is a valid outcome.
- Silence MUST emit explicit reason codes.
- Silent silence is forbidden and indicates failure.

### 2.4 Order Independence
- Outputs MUST be invariant to:
  - Ingestion order
  - Engine execution order
  - Partial or uneven datasets
- No implied universe completeness.

### 2.5 Read-Only Discipline
- Phase 3 is interpretation only.
- No ingestion changes, schema changes, or refactors.
- Any deviation requires explicit user unlock.

---

## 3. ACCEPTABLE FAILURE MODES

The following are VALID and expected:
- All signals resolve to NO_DATA
- All signals resolve to NEUTRAL
- Zero opportunities emitted with reasons
- High frequency of silence under sparse data

These are not errors.

---

## 4. DRIFT RED FLAGS (IMMEDIATE INVESTIGATION)

Investigate immediately if any occur:
- NEUTRAL used as a fallback for uncertainty
- Silence emitted without reason codes
- Calendar events treated as continuous
- Outputs change based on execution order
- “Small cleanup” or “minor refactor” proposed in Phase 3
- Confidence increases due to sparse or calendar-only signals

---

## 5. REVALIDATION CHECKLIST (FUTURE)

Before advancing beyond Phase 3 or modifying adjacent phases:
- [ ] Archived snapshot referenced
- [ ] All invariants above still hold
- [ ] Silence semantics unchanged
- [ ] No Phase 3 boundary violations introduced
- [ ] Validation review completed

---

## 6. FINAL NOTE

Phase 3 correctness is defined by **conservatism, explainability, and discipline**.
Utility comes later. Trust comes first.

Any future work must preserve these invariants unless explicitly overridden.
