# MARKETAI V5 — DOCUMENTATION MAP (BACKEND)

## 01_bootstrap
- AI_CONTEXT.md

## 02_phase_and_state
- PHASE_STATUS.md
- MARKETAI_V5_CANONICAL_STATE.md

## 03_filesystem_and_build
- FILESYSTEM_CANON.md
- BUILD_AND_RELEASE_RULES.md

## 04_ingestion
- INGESTION_SYSTEM_CANON.md
- INGESTION_CANON.md
- INGESTION_REGISTRY_RUNTIME_SEMANTICS.md
- INGESTION_STATUS_CANON.md

## 05_data_sources
- DATA_SOURCES_AND_INGESTION.md

## 06_database
- DATABASE_CANON.md

## 07_backend_contracts
- BACKEND_CONTRACT_LOCKED.md
- FRONTEND_BACKEND_CONTRACT.md

## 08_diagnostics_and_observability
- FAILURE_MODES_AND_GUARDS.md
- FAILURE_PLAYBOOK.md
- RISK_AND_GUARDRAILS.md

## 09_intelligence_engines
- ENGINE_TAXONOMY_AND_LIFECYCLE.md
- ENGINE_ORDER_INDEPENDENCE_CANON.md

## 10_ai_narrative_layer
- OPPORTUNITY_OBJECT_CANON.md
- SIGNAL_STATE_SEMANTICS_CANON.md

## 11_execution_and_roadmap
- ROADMAP_AND_APB_RULES.md
- NEXT_EXECUTION_PLAN.md

Notes:
- `_archive/` contains historical or source-specific canon
- Do not infer absence from filesystem scans

## Expanded Ingestion Documentation Coverage

Backend ingestion documentation now explicitly covers:
- Source expansion governance
- Runtime ingestion semantics
- Failure-driven canon updates
- Schema-first enforcement

Any future ingestion work must reference this section.

---

# 🔒 Documentation Routing & Authority Rules (ENFORCED)

This section defines **explicit routing rules** for all backend documentation updates.
All AI and human contributors MUST follow these rules.

## GLOBAL RULES

- ❌ Creating new documentation files is forbidden by default
- ✅ All updates MUST target an existing canonical file
- ✅ Updates MUST be additive only
- ✅ Canonical files own truth; archived files are read-only references
- ❌ Do NOT infer authority from filenames alone — use this map

Failure to follow these rules invalidates the update.

---

## 1️⃣ INGESTION SYSTEM

### Canonical Update File
- backend/docs/04_ingestion/INGESTION_SYSTEM_CANON.md

### Supporting (Scoped, Read-Only)
- INGESTION_STATUS_CANON.md → status + enablement only
- INGESTION_REGISTRY_RUNTIME_SEMANTICS.md → runtime + registry behavior
- INGESTION_CANON.md → execution order + high-level rules
- _archive/* → historical reference only

### Routing Rules
- Runtime failures → RUNTIME_SEMANTICS
- Status changes → STATUS_CANON
- New rules or learnings → SYSTEM_CANON
- ❌ Do NOT create new ingestion canon files

---

## 2️⃣ DATABASE / SCHEMA

### Canonical Update File
- backend/docs/06_database/DATABASE_CANON.md

### Routing Rules
- Schema rules → DATABASE_CANON
- Prisma runtime behavior → DATABASE_CANON
- ❌ No schema rules belong in ingestion docs

---

## 3️⃣ PHASE & SYSTEM STATE

### Canonical Update Files
- backend/docs/02_phase_and_state/PHASE_STATUS.md
- backend/docs/02_phase_and_state/MARKETAI_V5_CANONICAL_STATE.md

### Routing Rules
- Phase locks or permissions → PHASE_STATUS
- Material system capability changes → CANONICAL_STATE
- ❌ Do NOT redefine phase rules elsewhere

---

## 4️⃣ INTELLIGENCE / ENGINES

### Canonical Update Files
- backend/docs/09_intelligence_engines/* (per-engine canon only)

### Routing Rules
- Engine behavior → engine-specific canon
- Engine lifecycle → ENGINE_TAXONOMY_AND_LIFECYCLE.md
- ❌ Do NOT update engines during Source Expansion phase

---

## 5️⃣ FRONTEND ↔ BACKEND CONTRACTS

### Canonical Update File
- backend/docs/07_backend_contracts/FRONTEND_BACKEND_CONTRACT.md

### Routing Rules
- API shape changes → CONTRACT
- UI behavior → frontend docs only
- ❌ Backend docs MUST NOT redefine frontend behavior

---

## 6️⃣ FAILURE & GUARDS

### Canonical Update File
- backend/docs/08_diagnostics_and_observability/FAILURE_MODES_AND_GUARDS.md

### Routing Rules
- Known failure patterns → FAILURE_MODES
- Guardrail philosophy → FAILURE_MODES
- ❌ Do NOT duplicate failure rules in system canon

---

## ENFORCEMENT DIRECTIVE

Before proposing any documentation update, the contributor MUST:

1. Identify the subsystem involved
2. Locate the canonical file in this map
3. Justify why the update belongs there
4. Receive approval before execution

Any update that bypasses this map is invalid.

---

