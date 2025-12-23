# MARKETAI V5 — BACKEND CONTRACT (LOCKED)

⚠️ THIS DOCUMENT IS CANONICAL  
⚠️ ANY DEVIATION IS A BUG  
⚠️ DO NOT REINTERPRET

## LIVE ROUTES

### Health
GET /api/health
Response:
{
  "status": "ok"
}

---

### Opportunities
GET /api/opportunities

Response:
Array<{
  id: string
  tickerId: string
  score: number
  createdAt: ISO string
  rationale: string | null
  category: string | null
  intelligenceBundleId: string | null
}>

Rules:
- Empty array is VALID
- Objects always include all keys
- No pagination
- No derived fields

---

### Diagnostics — Ingestion
GET /api/diagnostics/ingestion

Response:
{
  success: true
  status: "ok"
  data: Array<{
    id: string
    module: string
    status: string
    startedAt: string | null
    endedAt: string | null
    error: string | null
    itemsFetched: number | null
    itemsWritten: number | null
    category: string | null
  }>
  meta: {
    fetchedAt: ISO string
  }
}

Rules:
- endedAt ONLY (never finishedAt)
- meta exists ONLY at wrapper level

---

### Ingest Trigger
POST /api/ingest/run-all

Response:
{
  "status": "running"
}

Fire-and-forget.
No polling contract.
No success/message wrapper.

---

## ROUTES THAT DO NOT EXIST (404 BY DESIGN)

❌ GET /api/diagnostics  
❌ POST /api/brain/full-cycle

These must NEVER be called.

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

