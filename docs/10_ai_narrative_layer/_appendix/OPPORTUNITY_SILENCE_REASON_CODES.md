# OPPORTUNITY SILENCE — REASON CODES (CANON)

Zero opportunities is a VALID system outcome.

Silence MUST be explainable.

---

## 1. SILENCE EMISSION RULE

If zero opportunities are emitted, the system MUST emit:
- A silence flag
- One or more reason codes

Silent silence is forbidden.

---

## 2. CANONICAL SILENCE REASON CODES

### DATA_INSUFFICIENT
- Too many NO_DATA signals to form confidence

### SIGNALS_NEUTRAL_ONLY
- Signals present but exclusively neutral

### RISK_GUARD_BLOCKED
- Opportunities suppressed by risk rules

### CONFLICTING_SIGNALS
- Positive and negative signals cancel meaningfully

### TIME_CONTEXT_EXPIRED
- Signals exist but are outside valid time windows

### VALIDATION_GUARD_HALT
- System halted output due to invariant violation

---

## 3. MULTI-REASON SUPPORT

Multiple reason codes MAY be emitted.
At least one is REQUIRED.

---

## 4. DIAGNOSTIC INTENT

Silence reasons exist for:
- Validation
- Debugging
- Trust calibration

They are NOT user-facing language.
