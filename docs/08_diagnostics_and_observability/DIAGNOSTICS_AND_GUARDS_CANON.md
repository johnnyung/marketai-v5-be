# DIAGNOSTICS & GUARDS — CANONICAL
Failure modes, guardrails, observability rules.

---

## Diagnostics & Guardrails Authority

This document (**DIAGNOSTICS_AND_GUARDS_CANON.md**) is the **sole authoritative source** for:

- Failure classification
- Guardrail philosophy
- Observability expectations
- Risk handling principles

Rules:
- All diagnostics behavior derives from this document
- No other file may redefine guardrail rules
- Canonical failure meaning is defined here

Supporting, non-authoritative documents live in:
`backend/docs/08_diagnostics_and_observability/_appendix/`


---

## Diagnostics & Guardrails Authority

This document (**DIAGNOSTICS_AND_GUARDS_CANON.md**) is the **sole authoritative source** for:

- Failure classification
- Guardrail philosophy
- Observability expectations
- Risk handling principles

Rules:
- All diagnostics behavior derives from this document
- No other file may redefine guardrail rules
- Canonical failure meaning is defined here

Supporting, non-authoritative documents live in:
`backend/docs/08_diagnostics_and_observability/_appendix/`


---

## Canon Hygiene Notice — Duplicate Authority Block

This document may contain a duplicated "Diagnostics & Guardrails Authority" section above.
This duplication is **non-semantic**.

Rules:
- Treat the authority declaration as a single statement of truth
- Duplicated text does not create multiple tiers or multiple authorities
- If any inconsistency exists elsewhere, this canon still wins


---

## Ingestion Type Safety as Guardrail (Enforced)

TypeScript build failures in ingestion modules are intentional safeguards.

They prevent:
- Ambiguous ingestion outcomes
- Silent schema corruption
- Invalid status propagation

A module that fails to type-check:
- MUST NOT reach runtime
- MUST be corrected before ingestion resumes

Type safety is a guardrail, not friction.


---

## Engine Safety & Guardrails

- Expected analytical failures resolve to silence
- Structural contract violations hard-stop that engine only
- Synthetic or placeholder signals are forbidden
- Kill-switch and shadow modes prevent mutation
- Duplicate artifacts are suppressed deterministically
- Promotion gates act as overconfidence guards



---

## Structural Refactor Guardrails

These guardrails cover backend structural refactors where build correctness alone is insufficient.

### Build vs Guard Separation

- **Build (tsc) enforces:**
  - Import validity
  - Module resolution
  - Compile-time types
- **Guards enforce:**
  - Forbidden artifacts (disabled/backup/restore files)
  - Forbidden markers (PLACEHOLDER / STUB / disabled markers)
  - Structural boundary rules that TypeScript cannot detect

### Forbidden Artifacts Under src

Under `backend/src/**`, the following artifact types are invalid and must not exist:

- `*.bak*`
- `*.DISABLED*`
- `*.restore*`
- `*.pre_restore*`
- ad-hoc shadow/backup duplicates created during edits

### Intentional Placeholders

- Placeholder code is invalid unless explicitly documented/allowlisted.
- Guard behavior may fail repeatedly (one file per run) until allowlist coverage is complete.
- A clean build does not override guard failures.

### Structural Refactor Discipline

- Structural refactors must be all-or-nothing:
  - Never partially delete a structural era (e.g. phase folders) while callers remain.
- After any destructive change (delete/move), **re-run build** until clean.

### Runtime Disclaimer

- Passing build + guard does not prove runtime correctness.
- Runtime validation must be performed separately after structural changes.


<!-- CANON:PASS4_MANIFEST_REFACTOR_DIAGNOSTICS -->
## Registry Layer Failure Taxonomy (Post-manifestFull.ts Refactor)

### 1) Build-Blocking Registry Failures (Detected by tsc)
- **Bad import paths** in category registry files or `registry/index.ts`
- **Missing exports / symbol mismatches** (e.g., code expecting named exports that no longer exist)
- **Invalid module resolution** after file moves

**Observed outcome:** build fails; runtime ingestion does not proceed.

### 2) Silent Runtime Failures (Not Logged)
- **Missing registry entry** (module exists on disk but is not included in any category registry array or not spread into `registry/index.ts`)

**Observed outcome:** no execution log, no skip log, no error. Detected only by absence in runtime logs and missing downstream data.

### 3) Logged Runtime Outcomes (Registry-visible)
- **Skipped by filters**: `[INGESTION][SKIPPED] <name>`
- **Executed**: `[INGESTION] executing module: <name>`
- **Executed but no persistence**: execution log present, but DB writes may be zero (requires table-correct verification)
- **Runtime error (module-level)**: logged error, pipeline continues (non-fatal by design)

### 4) Observer False Negatives (Verification Errors)
- Querying the **wrong Prisma model/table** can make successful ingestion appear to have produced “no data.”
- Registry does **not** validate storage destination; diagnostics must pair module → expected Prisma model/table.

### 5) Runtime Authority Check
- Runtime behavior is governed by **compiled output** (dist), especially `dist/ingestion/registry/index.js`.
- Audits (e.g., `audit_latest_ingestion.js`) are accepted as runtime truth signals confirming registry-driven ingestion activity.
