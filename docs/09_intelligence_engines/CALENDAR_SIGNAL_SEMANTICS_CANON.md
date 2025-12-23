# CALENDAR SIGNAL SEMANTICS — CANON (PHASE 3)

This document defines how ALL calendar-based signals must be interpreted.

Calendars are **contextual**, not continuous.

---

## 1. CANONICAL CALENDAR TYPES

Calendar signals include (non-exhaustive):
- Earnings events
- Dividend events
- IPO events
- Economic releases
- Government / political events with dates

They are episodic by nature.

---

## 2. CONTEXTUAL ROLE

Calendar signals:
- Provide **temporal context**
- Do NOT represent persistent state
- Do NOT imply directional bias alone

A calendar event is a **modifier**, not a driver.

---

## 3. TIME-DECAY REQUIREMENT

All calendar signals MUST be time-decayed.

Conceptual decay states:
- **PRE_EVENT** (anticipatory context)
- **EVENT_WINDOW** (short-lived relevance)
- **POST_EVENT_DECAY** (rapidly diminishing relevance)
- **EXPIRED** (no longer contributes)

Expired signals must not influence scoring.

---

## 4. FORBIDDEN INTERPRETATIONS

Calendar signals must NEVER:
- Be treated as continuous signals
- Be overweighted due to recency alone
- Be assumed positive or negative without corroboration
- Substitute for non-calendar evidence

---

## 5. SIGNAL STATE INTERACTION

Calendar signals MUST still resolve to:
- NO_DATA
- DATA_PRESENT_BUT_NEUTRAL
- DATA_PRESENT_AND_POSITIVE
- DATA_PRESENT_AND_NEGATIVE

Calendar presence alone often resolves to NEUTRAL.

---

## 6. VALIDATION RULE

Any calendar signal contributing without decay context is INVALID.

---

## Reference Status

This document is **subordinate to ENGINE_TAXONOMY_AND_LIFECYCLE.md**.

Rules:
- MUST NOT enable or disable engines
- MUST NOT redefine lifecycle order
- MUST NOT contradict phase locks

Serves as structural, semantic, or scoring reference only.

