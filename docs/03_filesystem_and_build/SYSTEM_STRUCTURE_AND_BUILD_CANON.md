# SYSTEM STRUCTURE & BUILD — CANONICAL

This document is the **single authoritative reference** for:
- Filesystem structure
- Build & release rules
- Runtime existence vs non-existence

## Filesystem Canon
(merged from FILESYSTEM_INDEX.md)

## Build & Release Rules
(merged from BUILD_AND_RELEASE_RULES.md)

## Runtime Reality vs Conceptual Design
(merged from ARCHITECTURE_OVERVIEW.md — selected sections only)

## What Does NOT Exist (By Design)
(merged from ARCHITECTURE_OVERVIEW.md)

## Execution Ownership Boundaries
(merged from ARCHITECTURE_OVERVIEW.md)



---

## Backend Structural Reorg Canon (Build-Validated)

This section records **durable structural truths** established during a backend reorganization.
Validation in that session was **build + guard only** (no runtime execution).

### Canonical Source Layout (Backend)

- **Phase folders MUST NOT exist**
  - Any directory matching `backend/src/phase*` is legacy and invalid.
- **Engines live here**
  - `backend/src/brain/engines/**`
  - Engine directories contain **logic only** (no orchestration, no CLI, no runners).
- **Runners live here**
  - `backend/src/brain/runners/**`
  - Runners are the **only executable entrypoints** for workflows/orchestration.
- **Ingestion system lives here**
  - `backend/src/ingestion/**`
  - Ingestion registry + modules are bounded inside ingestion (not phase folders).

### Structural Constraints (Durable)

- Engines and runners must live in **separate directory trees**.
- Engine directories must not contain:
  - CLI logic
  - DB orchestration
  - Pipeline execution
  - Scheduling/registry/orchestration code
- Deleting execution layers without removing callers will break build:
  - Structural refactors must be **all-or-nothing**, never partial.
- Imports must not reference deleted structural eras (e.g. `phase*` paths).

### Validation Rules

- `npm run build` is the mandatory structural validator (TypeScript import graph truth).
- A green build does **not** imply semantic correctness; guards enforce rules the compiler cannot.
- Build failures surface incrementally; repeated rebuild cycles are expected during refactors.

### Source of Structural Truth

- **`backend/src/**` is the sole structural authority.**
- `dist/**` is output only (not edited for structure).

### Duplicate Basenames

- Duplicate filenames across directories can exist without build failure.
- This is allowed by explicit import paths, but increases confusion risk for humans/AI.

### Runtime Disclaimer

- Runtime correctness was **not** validated during the reorg session.
- Structural correctness does not imply runtime correctness.
