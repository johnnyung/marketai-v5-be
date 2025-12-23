>
>
> **Authority is defined in:** `DOC_AUTHORITY_MAP.md`
>
>
# ⚠️ AUTHORITATIVE SYSTEM CONTRACT — MUST READ FIRST

This document defines how data enters MarketAI.
It is authoritative over assumptions about ingestion triggers or APIs.


## Ingestion Philosophy

MarketAI prefers:
- missing data over fake data
- silence over lies
- explicit failure over silent fallback

Every ingestion module must be:
- deterministic
- idempotent
- auditable
- verifiable


## Ingestion Ordering (LOCKED)

1) Universe (tickers) — NOT FMP
2) Price History (Polygon)
3) Fundamentals (FMP Stable)
4) Key Metrics (FMP Stable)
5) Macro Data (FMP Stable)
6) Insider Trades (FMP Stable)
7) News (future expansion)
8) Institutional Ownership (FMP Stable)
9) Options Flow (Polygon)
10) Intelligence Bundles
11) Opportunity Engine

Downstream ingestion MUST NOT run without upstream data.


## Execution Model (Runtime Reality)

- Ingestion is NOT REST-driven per module.
- Ingestion is triggered via:
  - scheduler
  - explicit force scripts

There is NO dynamic per-module API trigger.


## Source Governance

### Polygon.io
- Universe seeding
- Price history
- Options flow

### Financial Modeling Prep (FMP)
- Stable API ONLY
- Fundamentals
- Key metrics
- Macro
- Insider / institutional

Forbidden:
- FMP S&P500 endpoints
- Legacy FMP endpoints
- Random axios calls outside ingestion modules


## Idempotency & Safety

All ingestion must:
- upsert, not insert blindly
- dedupe via deterministic keys
- log itemsFetched vs itemsWritten
- record failures explicitly

If ingestion fails:
- log it
- do NOT fabricate substitutes


## Verification First

Every write script must have:
- a verify_* companion
- visible row counts
- explicit PASS / FAIL output

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT define source guarantees
- MUST NOT redefine source scope
- MUST NOT conflict with DATA_SOURCES_CANON.md

If discrepancies exist, this document is outdated.

