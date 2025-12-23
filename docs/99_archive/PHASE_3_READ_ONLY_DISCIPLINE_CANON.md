# PHASE 3 READ-ONLY DISCIPLINE — CANON

Phase 3 is INTERPRETATION ONLY.

It reads existing data and produces intelligence outputs without modifying ingestion, schema, or registries.

---

## 1. ALLOWED IN PHASE 3

Phase 3 may:
- read from existing Phase 1–2 data stores
- evaluate signals using canonical signal states
- apply calendar decay and contextual weighting
- tolerate partial/stale datasets
- produce explainable opportunities OR explainable silence
- emit diagnostics and reason codes

---

## 2. FORBIDDEN IN PHASE 3 (HARD BLOCK)

Phase 3 must NEVER:
- change ingestion modules or semantics
- add new ingestion sources
- modify registry paths or runtime loading rules
- change database schemas
- add “temporary” tables or columns
- refactor code “for cleanliness”
- reinterpret Phase 2 data contracts

If any of the above is needed, Phase 3 must STOP and request explicit user unlock.

---

## 3. ZERO-TOLERANCE DRIFT PHRASES

If implementation discussions include:
- “quick cleanup”
- “minor refactor”
- “small schema tweak”
- “just add a column”
- “let’s adjust ingestion order”

Then Phase 3 must HALT: this violates discipline.

---

## 4. READ-ONLY MEANING

Read-only means:
- No writes to ingestion-owned tables
- No edits to pipeline structure
- No contract changes disguised as fixes
- No refactors justified by style

Phase 3 outputs are intelligence artifacts only.
