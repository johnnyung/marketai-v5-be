# FILESYSTEM_CANON — MARKETAI V5 (AUTHORITATIVE)

This document defines the **canonical filesystem** for MarketAI V5.
If a file exists, it is REAL — even if empty or a stub.

Creating parallel, duplicate, or “cleaned up” files is forbidden.

---

## GLOBAL RULES

- **DO NOT RECREATE** any listed file or directory
- **STUB ≠ MISSING**
- Empty files are intentional
- Disabled modules are still canonical
- Scripts represent historical and operational truth

---

## ROOT

\`~/Desktop/marketai-v5/\`

- \`backend/\` — **Authoritative system of record**
- \`frontend/\` — UI + client integration
- \`scripts/\` — legacy + cross-phase utilities
- \`_ai_scans/\` — forensic / audit artifacts

---

## BACKEND (AUTHORITATIVE)

\`backend/\`

### Core
- \`.env\`
- \`.marketai_locked\`
- \`PHASE_LOCK.txt\`

### Docs
\`backend/docs/\`
- AI_BOOTSTRAP.md
- AI_READ_ORDER.md
- PHASE_4_*.md (all Phase 4 canon)
- FILESYSTEM_CANON.md (this file)

### Source
\`backend/src/\`
- phase3/ (locked, canonical)
- phase4/
  - diagnostics/
  - qualification/
  - explanation/
  - models/
- test-globals.d.ts (intentional, required)

### Prisma
\`backend/prisma/\`
- schema.prisma
- migrations/ (all historical migrations preserved)

### Ingestion
- Registries and adapters referenced by scripts
- DISABLED and STUB ingestion modules are canonical
- Absence of data ≠ failure

### Scripts
\`backend/scripts/\`
- phase2_* (ingestion)
- phase3_* (intelligence)
- phase4_* (monitoring, qualification, explanation)
- repair_*, reset_*, scan_*, register_* scripts
- **DO NOT DELETE OR MERGE**

### Archives
\`backend/archives/\`
- phase3_* (immutable snapshots)
- phase4_* (immutable snapshots)

---

## FRONTEND (CANONICAL UI)

\`frontend/\`

### App Router
\`frontend/src/app/\`
- page.ts
- layout.ts
- diagnostics/
- ingestion/
- opportunities/
- portfolio/
- admin/

### Components
\`frontend/src/components/\`
- Sidebar.tsx
- widgets/
- placeholders/

### Hooks
\`frontend/src/hooks/\`
- useOpportunities.ts
- useOpportunity.ts
- usePortfolioLive.ts
- useDiagnostics.ts
- useIngestionStatus.ts
- others (all canonical)

### Lib
\`frontend/src/lib/\`
- api/ (client contracts)
- utils.ts

### Types
\`frontend/src/types/\`
- api.ts
- opportunity.ts
- portfolio.ts

### Docs
\`frontend/docs/\`
- FRONTEND_ARCHITECTURE_OVERVIEW.md
- UI_SURFACE_SPEC.md
- ROUTING_AND_PAGES.md
- WIDGET_CONTRACTS.md
- INDEX.md

### Scripts
\`frontend/scripts/\`
- LOCK_*.sh
- diagnostics_*.sh
- portfolio_*.sh
- opportunity_*.sh
(All are canonical. Many are one-time locks.)

---

## DO NOT RECREATE RULES (CRITICAL)

- Never create “v2”, “new”, “clean”, or “refactor” copies
- Never assume a missing feature means missing file
- Always search filesystem canon before adding anything
- When in doubt: **STOP AND ASK**

---

## STUB ≠ MISSING

A stub means:
- Reserved contract
- Locked interface
- Intentional no-op

Do not replace without explicit authorization.

---

## FINAL NOTE

This file is **system memory**.
Violations cause irreversible drift.

END.
