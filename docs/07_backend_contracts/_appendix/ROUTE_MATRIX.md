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
# ROUTE MATRIX (LOCKED)

| Method | Path                         | Exists | Notes |
|------|------------------------------|--------|------|
| GET  | /api/health                  | ✅ | Simple status |
| GET  | /api/opportunities           | ✅ | Empty valid |
| GET  | /api/diagnostics             | ❌ | 404 by design |
| GET  | /api/diagnostics/ingestion   | ✅ | Wrapped response |
| POST | /api/ingest/run-all          | ✅ | Fire-and-forget |
| POST | /api/brain/full-cycle        | ❌ | Removed |

No other routes are guaranteed.

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

