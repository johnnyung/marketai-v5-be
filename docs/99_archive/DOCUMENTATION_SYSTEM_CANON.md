# DOCUMENTATION_SYSTEM_CANON.md
Version: v1.0  
Status: ACTIVE – SYSTEM AUTHORITY  
Scope: Global (Frontend + Backend + AI)

---

## 1. Purpose

This document defines the **MarketAI V5 Documentation System**.

Documentation is treated as an **execution system**, not reference material.
All engineering and AI actions must conform to this system.

If code behavior conflicts with documented authority, **the code is wrong**.

---

## 2. Documentation Is a System

Documentation in MarketAI V5 is:
- Hierarchical
- Layered
- Authority-driven

There is **no peer-level documentation**.
Authority flows **top → down only**.

Sideways interpretation is forbidden.

---

## 3. Canonical Documentation Layers

### 3.1 Layer 1 — Canonical Bootstrap (Chat Entry)

**Audience:** New AI chat sessions  
**Mutation Policy:** Extremely restricted  
**Purpose:** Orientation + routing only

These documents are **always uploaded first** to new chats:

- AI_CONTEXT.md
- PHASE_STATUS.md
- MARKETAI_V5_CANONICAL_STATE.md
- ENGINE_TAXONOMY_AND_LIFECYCLE.md
- FRONTEND_BACKEND_CONTRACT.md
- AI_INGESTION_BOOTSTRAP.md

Rules:
- No implementation details
- No fixes
- No examples
- Only pointers to authoritative docs

These files **never contain lessons learned**.

---

### 3.2 Layer 2 — System Authority Docs

**Audience:** Active engineering & AI execution  
**Mutation Policy:** Append-only unless refactor explicitly approved

Examples:
- FILESYSTEM_CANON.md
- BUILD_AND_RELEASE_RULES.md
- FAILURE_MODES_AND_GUARDS.md
- INTEGRATION_LOCK_RULES.md
- INGESTION_CANON.md
- FRONTEND_ARCHITECTURE_OVERVIEW.md
- FRONTEND_BACKEND_CONTRACT.md

Rules:
- These define invariants
- Code must conform to these
- Lessons learned belong here

This is where build-break prevention lives.

---

### 3.3 Layer 3 — Execution, Phase, and Audit Docs

**Audience:** Historical reference  
**Mutation Policy:** Immutable after closure

Includes:
- Phase runbooks
- Diagnostics
- Drift reports
- Execution logs

These documents **never override Layer 2**.

---

## 4. AI Navigation Rules

Before modifying:
- controllers
- ingestion pipelines
- frontend wiring
- response semantics
- build configuration

AI **must** consult:
- DOCUMENTATION_SYSTEM_CANON.md
- FILESYSTEM_CANON.md
- BUILD_AND_RELEASE_RULES.md
- FRONTEND_BACKEND_CONTRACT.md

If authority is unclear → **STOP AND ASK**.

---

## 5. Where Lessons Learned Go

| Issue Type | Destination |
|-----------|------------|
| Frontend build failures | frontend/docs/* |
| Backend build failures | backend/docs/* |
| Cross-system failures | Layer-2 authority docs |
| Historical traces | Layer-3 only |

Lessons **never** go into bootstrap docs.

---

## 6. Change Classification

- Local Fix → Code only
- Systemic Fix → Layer-2 doc update REQUIRED
- Contract Change → FRONTEND_BACKEND_CONTRACT.md
- Canonical Violation → STOP, escalate, document first

---

## 7. Canonical Update Rules

- Layer 1 updates: Pointer-only
- Layer 2 updates: Required for systemic changes
- New docs: Only if scope cannot fit existing authority
- Duplication is forbidden

---

## 8. Explicitly Forbidden Patterns

- Mechanical search/replace
- Fixing builds without checking authority
- Introducing parallel APIs
- Changing response semantics ad-hoc
- Green builds that violate contracts

---

## 9. Authority Map References

See:
- DOC_AUTHORITY_MAP.md
- DOC_INDEX.md
- AI_DRIFT_BOUNDARIES.txt

---

## 10. Enforcement Invariant

Documentation precedes code.  
Code is disposable.  
Contracts are not.

Any fix that cannot be cleanly documented within this system is **invalid**.
