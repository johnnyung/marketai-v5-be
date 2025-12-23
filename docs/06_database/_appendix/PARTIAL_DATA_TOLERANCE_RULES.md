# PARTIAL DATA TOLERANCE RULES (PHASE 3)

Defines how engines must behave under incomplete, stale, or uneven datasets.

---

## 1. ACCEPTABLE INPUT CONDITIONS

Engines must work (without crashing conceptually) when:
- only some sources exist
- only some symbols have data
- data freshness varies by source
- some modules return empty sets
- calendars are sparse/episodic

---

## 2. REQUIRED OUTPUT BEHAVIOR

Engines must:
- emit explicit NO_DATA states where appropriate
- avoid false certainty
- allow "no opportunities" outcomes
- provide explainable silence reason codes when output is zero

---

## 3. CONFIDENCE MUST TRACK COMPLETENESS

Confidence scoring must reflect:
- signal count present
- signal quality
- cross-confirmation

Confidence must NOT rise due to:
- sparse but recent events
- over-weighted single sources

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine database guarantees
- MUST NOT conflict with DATABASE_SYSTEM_CANON.md
- Serves as historical context or scoped rules only

If discrepancies exist, this document is outdated.

