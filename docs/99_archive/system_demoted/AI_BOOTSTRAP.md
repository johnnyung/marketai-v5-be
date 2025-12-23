# AI BOOTSTRAP — READ FIRST (MANDATORY)

If you are an AI (ChatGPT, Claude, Gemini, etc.) working on MarketAI V5:

## YOU MUST DO THIS FIRST
1. Read this file
2. Read AI_READ_ORDER.md
3. Acknowledge Phase status before coding

## ABSOLUTE RULES
- Docs are system memory
- If unsure, ASK FOR DOCS
- Do NOT invent files
- Do NOT refactor registry
- Do NOT change ingestion pipeline semantics

## PHASE STATUS
- Phase 1: LOCKED
- Phase 2: INGESTION ONLY (calendar + political + gov)
- Phase 3: NOT STARTED

## CRITICAL KNOWLEDGE
- Pipeline SUCCESS does NOT mean data present
- Calendars are 404-safe by design
- Registry paths must match dist runtime paths

## FAILURE MODE TO AVOID
Creating new files because you didn’t know one already existed.

If you did not read the docs, STOP.



## 🧠 AI SWEEP RULE (CANONICAL — DO NOT IGNORE)

### When to Trigger a Sweep
If ANY of the following occur:
- Cascading TypeScript errors across files
- ESM import / provider identity mismatches
- Prisma model assumptions failing
- “Phantom” imports (files assumed to exist but do not)
- More than 3 sequential patch scripts attempted

### Mandatory Sweep Procedure
1. STOP incremental fixes
2. Identify the logical module boundary (Phase / Engine / Provider)
3. DELETE or fully replace the implementation with:
   - Stateless
   - No DB writes
   - No AI calls
   - Contract-safe types only
4. Restore build to GREEN
5. Re-introduce features one-by-one

### Why This Rule Exists
This pattern was rediscovered in live development and
reduced resolution time from ~20 prompts to ~3.

### Enforcement
If an AI continues incremental patching instead of sweeping,
its output is considered INVALID.

— Learned and locked via live Phase-4 → Phase-6 development



## 📁 CANONICAL DOCS LOCATION (LOCKED)

**All canonical project documentation lives here and ONLY here:**

backend/docs/

### Rules
- Never assume repo root for canonical MD files
- All scanners, sweep scripts, and AI bootstrap logic MUST target backend/docs/
- If a file is not found here, it is considered NON-CANONICAL

### Enforcement
Any script or AI output that:
- Assumes root-level MDs, or
- Scans without an explicit backend/docs base path

is INVALID.

— Locked after repeated path-resolution failures during Phase-4 → Phase-6



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



## 🚀 NEW CHAT BOOTSTRAP (MANDATORY)

Every new AI chat MUST begin with this instruction:

> **Read the following canonical documents in full before responding:**
> - AI_CONTEXT.md
> - AI_BOOTSTRAP.md
> - AI_INGESTION_BOOTSTRAP.md
> - PHASE_STATUS.md
> - MARKETAI_V5_CANONICAL_STATE.md
> - FRONTEND_BACKEND_CONTRACT.md
> - ENGINE_TAXONOMY_AND_LIFECYCLE.md
>
> **Operating Rules**
> - All fixes must be delivered as C-style drop-in scripts
> - Use absolute paths only (~/Desktop/marketai-v5/…)
> - No incremental guessing — apply AI Sweep-First Rule
> - One coordinated patch per fix cycle
> - Respect current phase boundaries
> - Dry-run by default, live only when explicitly requested
>
> **If errors cascade:** STOP → SCAN → SNAPSHOT → PATCH

Failure to follow this invalidates the response.

— MarketAI V5 Canonical Bootstrap


## Documentation System Canon (Required)\n- Canon for doc authority + where to update lessons learned:\n  - ../../docs/DOCUMENTATION_SYSTEM_CANON.md\n
