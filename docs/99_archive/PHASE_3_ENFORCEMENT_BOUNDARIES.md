# PHASE 3 ENFORCEMENT BOUNDARIES

Defines how to prevent discipline violations during Phase 3.

---

## 1. BOUNDARY CHECKLIST (MANDATORY)

Before any Phase 3 change is accepted, confirm:
- It does not alter ingestion
- It does not alter schemas
- It does not alter registries
- It does not require frontend edits
- It preserves signal state canon and silence reason codes
- It preserves calendar semantics and decay rules
- It preserves order-independence guarantees

---

## 2. ESCALATION RULE

If a Phase 3 task appears to require:
- ingestion changes
- schema changes
- refactors

Then the correct output is:
- STOP
- REQUEST UNLOCK
- DOCUMENT JUSTIFICATION

No workaround inside Phase 3 is allowed.

---

## 3. VALIDATION CHAT COORDINATION

A separate validation-only authority may cross-check:
- scope discipline
- drift
- signal semantics compliance

This is expected and required.
