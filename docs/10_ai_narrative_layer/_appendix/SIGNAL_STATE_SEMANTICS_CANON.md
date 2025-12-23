# SIGNAL STATE SEMANTICS — CANON (PHASE 3)

This document defines the ONLY valid signal states in Phase 3.

No engine may invent additional states or collapse these distinctions.

---

## 1. SIGNAL STATE ENUM (CONCEPTUAL)

Every signal evaluation MUST resolve to exactly ONE of:

- **NO_DATA**
- **DATA_PRESENT_BUT_NEUTRAL**
- **DATA_PRESENT_AND_NEGATIVE**
- **DATA_PRESENT_AND_POSITIVE**

Absence of resolution is INVALID.

---

## 2. STATE DEFINITIONS

### NO_DATA
- Required data inputs are missing, stale, incomplete, or unavailable
- No inference may be drawn
- This state must NEVER affect scoring directly

### DATA_PRESENT_BUT_NEUTRAL
- Data exists
- Data does not meaningfully support or contradict the hypothesis
- Neutrality is an affirmative conclusion, not a fallback

### DATA_PRESENT_AND_NEGATIVE
- Data exists
- Data explicitly weakens or contradicts the hypothesis
- Must be explainable

### DATA_PRESENT_AND_POSITIVE
- Data exists
- Data explicitly supports the hypothesis
- Must be explainable

---

## 3. FORBIDDEN COLLAPSES

The following are explicitly forbidden:

- Treating NO_DATA as NEUTRAL
- Treating NO_DATA as NEGATIVE
- Treating NEUTRAL as absence
- Defaulting to NEUTRAL due to uncertainty

Uncertainty resolves to **NO_DATA**, not NEUTRAL.

---

## 4. SCORING INTERACTION (CONCEPTUAL)

- NO_DATA → excluded from score contribution
- NEUTRAL → included with zero directional weight
- NEGATIVE → subtractive weight
- POSITIVE → additive weight

Exact math is defined elsewhere; semantics are fixed here.

---

## 5. VALIDATION REQUIREMENT

Any engine that does not emit an explicit signal state is INVALID.
