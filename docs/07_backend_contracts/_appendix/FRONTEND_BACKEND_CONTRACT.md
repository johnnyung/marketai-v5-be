# MARKETAI V5 — FRONTEND ↔ BACKEND CONTRACT (AUTHORITATIVE)

This document is the **single source of truth** for how the frontend
communicates with the backend in MarketAI V5.

Any AI or human modifying frontend or backend MUST follow this contract.
Violations will cause runtime crashes, prerender failures, or silent data corruption.

---

## 1️⃣ CORE ARCHITECTURE

### Frontend
- Framework: **Next.js 14+ App Router**
- Rendering model:
  - Client Components ONLY for data-backed pages
  - Dynamic rendering enforced
- Data access:
  - Via React Query hooks
  - Via `/lib/api/*` helpers ONLY

### Backend
- Framework: **Express (ESM)**
- API prefix: `/api`
- JSON-only responses
- No HTML responses for API routes

---

## 2️⃣ ABSOLUTE FRONTEND RULES (NON-NEGOTIABLE)

### A. Client Directive
Every data-backed page MUST begin with:

```ts
"use client";
This MUST be the first line in the file.

B. Dynamic Rendering Lock
Every data-backed page MUST include:

ts
Copy code
export const dynamic = "force-dynamic";
This prevents Next.js prerender crashes caused by async data.

C. No Direct Fetch Calls
❌ FORBIDDEN:

ts
Copy code
fetch("/api/brain/portfolio/run")
✅ REQUIRED:

ts
Copy code
import { runPortfolioBrain } from "@/lib/api/brain";
All backend calls must be wrapped in API helpers.

3️⃣ API HELPER LAYER (REQUIRED PATTERN)
Location
swift
Copy code
frontend/src/lib/api/
Example: Brain API
ts
Copy code
// frontend/src/lib/api/brain.ts
export async function runPortfolioBrain() {
  const res = await fetch("/api/brain/portfolio/run", { method: "POST" });
  if (!res.ok) throw new Error("Brain run failed");
  return res.json();
}
Rules:

Always throw on non-200

Always return parsed JSON

No UI logic inside API helpers

4️⃣ REACT QUERY HOOKS (REQUIRED PATTERN)
Location
bash
Copy code
frontend/src/hooks/
Example: useBrainRuns
ts
Copy code
export function useBrainRuns(scope: string) {
  return useQuery({
    queryKey: ["brainRuns", scope],
    queryFn: () => getBrainRuns(scope),
  });
}
Rules:

Hooks return { data, loading } or React Query result

Frontend must guard data before use

No assumptions about meta or shape

5️⃣ NULL-SAFETY & GUARDING (CRITICAL)
Every page MUST guard async data:

tsx
Copy code
if (!brainRunsQ?.data) {
  return <div>Loading…</div>;
}
❌ Never assume:

data exists

meta exists

arrays are non-empty

6️⃣ ROUTE ↔ PAGE ALIGNMENT (LOCKED)
Backend Routes
Backend RouteFrontend Usage
/api/brain/portfolio/runPortfolio Run Button
/api/brain/runs?scope=portfolioPortfolio + Diagnostics
/api/brain/meta/latestDiagnostics
/api/brain/autopilotDiagnostics (read-only)

Frontend MUST mirror backend paths exactly.

7️⃣ COMMON FAILURE MODES (LEARNED IN THIS CHAT)
❌ Missing "use client"
→ Causes runtime + prerender crashes

❌ Static rendering on async pages
→ Causes build failures

❌ Direct backend calls in pages
→ Breaks encapsulation, causes drift

❌ Unguarded null access
→ Production-only crashes

❌ AI guessing API shapes
→ Silent data mismatches

8️⃣ CLAUDE UI RECOVERY RULE
Claude is allowed to:

Modify layout

Restore widgets

Match visual mockups

Claude is NOT allowed to:

Touch /lib/api

Touch /hooks

Touch backend

Modify this contract

All Claude output must respect this document.

9️⃣ ENFORCEMENT
If frontend or backend changes violate this contract:

The change must be reverted

Phase freeze must be reasserted

Documentation must be updated

This contract exists to prevent repeat failures.

END OF CONTRACT.

## Diagnostics Endpoints

Purpose: Read-only endpoints for system health and ingestion visibility.
Audience: Internal diagnostics UI only.
Guarantees: Non-mutating, safe to poll.

### GET /api/health
Returns backend liveness and basic dependency checks.

Response (example):
  {
    "status": "ok",
    "service": "marketai-v5-backend",
    "time": "ISO-8601"
  }

### GET /api/ingestion/status
Returns current ingestion registry state and last-run metadata.

Response (example):
  {
    "registry": [
      {
        "key": "sp500Universe",
        "status": "ENABLED",
        "lastRun": "ISO-8601",
        "lastResult": "SUCCESS"
      }
    ]
  }

Notes:
- These endpoints are diagnostics-only.
- They must not write to the database.
- Frontend must treat them as best-effort observability.

---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine backend contracts
- MUST NOT conflict with BACKEND_CONTRACT_CANON.md
- Serves as integration guidance, snapshots, or UI references only

If discrepancies exist, this document is outdated.

