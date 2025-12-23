> ⚠️ **REFERENCE DOCUMENT — NOT AUTHORITATIVE**
>
> This document explains **how parts of the system work**.
> It does **NOT** define what is allowed, locked, or executable.
>
> **Authority is defined in:** `DOC_AUTHORITY_MAP.md`
> If any conflict exists → **Tier-1 Canon wins**.
>
> AI MUST NOT infer rules or permissions from this document.
>
---
# ⚠️ AUTHORITATIVE SYSTEM CONTRACT — MUST READ FIRST

This document defines frontend behavior.
UI must never hide missingness.

---

## Core UI Principles

- Empty > Fake
- Offline > Silent
- Missing > Invented

If data is missing, UI must show it explicitly.

---

## Primary Views

- Opportunity Dashboard
- Ticker Detail Page
- Diagnostics / Ingestion Health

---

## Forbidden UI Behaviors

- Placeholder charts
- Fake sample data
- Synthetic demo tickers
- “Temporary” mock numbers

If data does not exist, UI must reflect that.

---

## AI-Generated Content

- Must cite underlying data
- Must reflect confidence and missingness
- Must never invent facts

---

## Diagnostics as First-Class UI

Users must see:
- ingestion freshness
- failed modules
- stale data

Trust comes from transparency.

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

