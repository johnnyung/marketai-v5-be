# ENGINE ORDER INDEPENDENCE — CANON (PHASE 3)

Phase 3 engines MUST NOT assume ingestion order, recency priority, or a complete universe.

---

## 1. ORDER INDEPENDENCE PRINCIPLE

Engine outputs must be invariant to:
- module run order
- ingestion time ordering
- partial module completion

If an engine behaves differently due to ordering alone, it is INVALID.

---

## 2. FORBIDDEN ASSUMPTIONS

Engines must NEVER assume:
- "latest data is always present"
- "all tickers exist"
- "all sources ran"
- "calendar presence implies continuity"
- "missing rows imply neutral"

Missing data must resolve to **NO_DATA** per signal canon.

---

## 3. RECENCY IS A FEATURE, NOT A DEFAULT

Recency may be used ONLY when:
- explicitly available
- explicitly bounded (time windows)
- accompanied by decay semantics

Otherwise, treat data as contextless or NO_DATA.

---

## 4. UNIVERSE COMPLETENESS

Engines must tolerate:
- uneven symbol coverage
- sparse coverage by sector/industry
- sources that are empty by design

Universe completeness is never implied.

---

## Reference Status

This document is **subordinate to ENGINE_TAXONOMY_AND_LIFECYCLE.md**.

Rules:
- MUST NOT enable or disable engines
- MUST NOT redefine lifecycle order
- MUST NOT contradict phase locks

Serves as structural, semantic, or scoring reference only.

