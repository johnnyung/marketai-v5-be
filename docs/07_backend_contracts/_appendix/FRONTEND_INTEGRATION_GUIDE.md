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
# FRONTEND ↔ BACKEND INTEGRATION GUIDE (AUTHORITATIVE)

## Core Rules
- App Router only (Next.js 14+)
- All data-backed pages:
  - "use client" FIRST LINE
  - export const dynamic = "force-dynamic"
- No direct fetch calls inside pages
- All API calls via /lib/api/* helpers

## Approved Hooks
- useBrainRuns(scope)
- useMetaBrain(scope)
- useAutopilotStatus()

## Failure Modes (Observed)
- Prerender crashes
- Null data access
- Missing client directive
- Incorrect dynamic placement
- TypeScript Set iteration errors

## Required Guards
- Always guard data before access
- Never assume meta objects exist
- Treat arrays as source of truth

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

