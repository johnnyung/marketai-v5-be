# MARKETAI V5 — AI INGESTION BOOTSTRAP (MANDATORY)

THIS DOCUMENT IS FOR AI SYSTEMS (ChatGPT / Claude / Gemini).
READ THIS BEFORE TOUCHING INGESTION CODE.

---

## 1. SINGLE SOURCE OF TRUTH

Authoritative ingestion registry:
backend/src/ingestion/registry.ts

The registry controls:
- Execution
- Enable/Disable state
- Runtime imports
- UI visibility

NO OTHER FILE DEFINES INGESTION STATE.

---

## 2. INGESTION MODULE REQUIREMENTS

Every ENABLED ingestion module MUST:

- Exist at exact registry.path
- Export: async function run()
- Use NodeNext-safe imports
- Use explicit relative paths
- Include .js extensions in imports
- Be additive only (Phase 2)

If ANY of these fail → module will be SKIPPED or FAIL.

---

## 3. ENABLED ≠ DATA INSERTION

Phase 2 allows:
- ENABLED modules
- Dry-run or stub logic
- Zero-row writes

SUCCESS means:
- Module loads
- run() executes
- No runtime errors

DO NOT FORCE DATA INSERTION unless instructed.

---

## 4. DATABASE REALITY

- Prisma is authoritative
- Tables MUST exist before expecting rows
- Hosted DB: Railway PostgreSQL
- Local DB assumptions are INVALID unless explicitly stated

Required order:
1. Prisma model
2. Migration
3. Build
4. Ingestion

---

## 5. ADDING A NEW INGESTION SOURCE (REQUIRED ORDER)

1. Create module at registry.path
2. Export async run()
3. Add Prisma model
4. Run prisma migrate
5. npm run build
6. node dist/ingestion/runIngestionDryRun.js
7. node dist/ingestion/scheduler.js
8. Verify table existence (row count may be 0)

Skipping steps is forbidden.

---

## 6. COMMON FAILURE MODES (DO NOT REPEAT)

- Guessing import paths
- Creating duplicate registry files
- Missing run() export
- ENABLED without migration
- Assuming AI sees files without being told
- Editing registry partially instead of atomically

---

## 7. NON-NEGOTIABLE RULE

If this document is not read first,
ANY ingestion work is considered INVALID.


## 🧱 C-STYLE DROP-IN SCRIPT STANDARD (MANDATORY)

All operational instructions MUST be delivered as **C-style drop-in scripts**.

### Definition
A valid instruction MUST:
- Be fully executable when pasted into terminal
- Start with `#!/usr/bin/env bash`
- Use `set -e`
- Use absolute or resolved paths
- Contain NO conversational steps
- Contain NO partial snippets
- Contain NO inline explanations

### Prohibited
- Markdown-only instructions
- Multi-step prose without code
- “Run this, then that” explanations
- Broken or segmented copy blocks

### Workflow Contract
1. AI emits ONE drop-in script
2. User pastes + runs
3. User pastes output
4. AI emits NEXT drop-in script

Any response violating this is INVALID.

— Locked after repeated execution and copy-failure incidents



## 🧹 AI SWEEP-FIRST RULE (MANDATORY)

When ANY of the following occur, AI MUST STOP incremental fixes and perform a full sweep:

### Sweep Triggers
- Repeated TypeScript errors across multiple files
- Missing or phantom imports
- Provider or interface type mismatch
- ESM / CJS resolution conflicts
- Prisma model reference failures
- Errors reappearing after multiple patches

### Required Sweep Actions
1. Identify ALL files involved in the error surface
2. Request or generate a scanner script
3. Produce a consolidated snapshot for review
4. Apply ONE coordinated drop-in patch
5. Rebuild and validate before proceeding

### Forbidden Behavior
- One-file-at-a-time patching
- Guessing import paths
- Introducing placeholder types
- Creating new abstractions mid-fix

### Principle
**Sweeps fix systems. Patches fix symptoms.**

— Codified after repeated recovery events in MarketAI V5


---

## Documentation Authority

This system follows a **hierarchical documentation authority model**.

Before modifying code, contracts, or build behavior, consult:

→ DOCUMENTATION_SYSTEM_CANON.md

This file defines:
- Documentation layers
- Canonical authority boundaries
- Where lessons learned must be recorded
- How new AI sessions must navigate existing docs

