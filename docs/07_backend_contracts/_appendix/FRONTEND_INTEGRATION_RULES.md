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
# FRONTEND INTEGRATION RULES (LOCKED)

- Backend is the source of truth
- Empty arrays are VALID
- Null fields must be rendered safely
- No assumptions about timing or volume
- No pagination assumptions
- All API calls go through a centralized client

## MOCK DATA POLICY

Mock data is allowed ONLY for:
- AI self-evaluation
- Portfolio
- Catalyst Hunter
- Correlation Hunter

Mock layer MUST:
- Be toggleable by env flag
- Be documented
- Be removable with one switch

No mock data for live endpoints.

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

