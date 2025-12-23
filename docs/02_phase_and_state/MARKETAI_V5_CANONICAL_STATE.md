# MARKETAI V5 — CANONICAL SYSTEM STATE

## SYSTEM GOAL
A long-lived AI market intelligence platform that:
- Continuously ingests structured data
- Produces explainable intelligence
- Can self-evaluate and later self-improve
- Never requires rewrites

---

## PHASE 1 — COMPLETE (LOCKED)

### Backend
- V5 Brain operational
- Meta-Brain operational (read-only)
- Autopilot stub present, disabled
- Deterministic JSON APIs only
- ESM / NodeNext compliant

### Frontend
- Fully wired to backend APIs
- Client-only pages
- force-dynamic rendering
- Guarded against null / empty data

---

## PHASE 2 — INGESTION EXPANSION (ACTIVE)

### Enabled Modules
- sp500Universe
- polygonPrices
- fmpFundamentals
- fmpKeyMetrics
- fmpInsider
- fmpInstitutional
- fmpMacro
- fmpNews
- fmpGovernmentContracts

### Disabled (Intentionally)
- polygonOptionsFlow
- polygonCrypto
- intelligenceBundles
- opportunityEngine
- fmpPoliticalTrades
- fmpLobbyingDisclosures

### Rules
- Additive only
- No behavior changes
- Registry keys immutable
- UI untouched

---

## AI GOVERNANCE
- No self-mutation
- No auto-execution
- All intelligence append-only
- All failures logged and reviewable



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


## Canonical System Emphasis — Ingestion First

The system is currently optimized for:
- Expanding raw data coverage
- Identifying ingestion failure modes
- Hardening schema assumptions
- Preserving replayable ingestion semantics

All higher-order reasoning layers depend on the completeness and correctness of this phase.

---

## Backend Canon Scope Clarification (Enforced)

This document defines **backend system truth** (what is live, enabled, unstable, or blocked) for MarketAI V5.

Scope rules:
- This file is authoritative for **backend runtime state** only.
- Global documentation governance lives in:
  - `~/Desktop/marketai-v5/docs/00_authority/DOCUMENTATION_SYSTEM_CANON.md`
- Frontend behavior governance lives in:
  - `~/Desktop/marketai-v5/frontend/docs/00_authority/DOCUMENTATION_MAP_FRONTEND.md`

If any statement in this file appears to claim project-wide documentation exclusivity:
- interpret it as **backend-only** scope
- defer governance to the SYSTEM documentation authority

