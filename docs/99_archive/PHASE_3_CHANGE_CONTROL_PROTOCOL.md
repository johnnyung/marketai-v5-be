# PHASE 3 CHANGE CONTROL PROTOCOL

This protocol prevents accidental Phase boundary violations.

---

## 1. CHANGE CLASSIFICATION

Every proposed Phase 3 change must be labeled as one of:
- INTERPRETATION_ONLY (allowed)
- PIPELINE_TOUCH (forbidden)
- SCHEMA_TOUCH (forbidden)
- REFACTOR_TOUCH (forbidden)
- FRONTEND_TOUCH (forbidden)

Only INTERPRETATION_ONLY is permissible in Phase 3.

---

## 2. UNLOCK REQUIREMENT

Any forbidden change class requires explicit user directive to unlock.

Acceptable unlock format (example):
- "UNLOCK PHASE 2 — <reason>"
- "AUTHORIZE SCHEMA CHANGE — <reason>"

Without explicit unlock wording, the change is rejected.

---

## 3. AUDIT NOTE

Phase 3 documentation must record:
- any proposed boundary violations
- the decision (blocked or unlocked)
- rationale

Silence is not allowed in change control.
