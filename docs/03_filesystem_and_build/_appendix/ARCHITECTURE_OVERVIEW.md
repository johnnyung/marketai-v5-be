> ⚠️ **REFERENCE DOCUMENT — NOT AUTHORITATIVE**
>
> This document explains **how parts of the system work**.
> It does **NOT** define what is allowed, locked, or executable.
>
> **Authority is defined in:** `DOC_AUTHORITY_MAP.md`
> If any conflict exists → **Tier-1 Canon wins**.
>
> AI MUST NOT infer rules or permissions from this document.
>
---
# ⚠️ AUTHORITATIVE SYSTEM CONTRACT — MUST READ FIRST

This document defines the ACTUAL runtime architecture of MarketAI.
It is authoritative over assumptions, conventions, prior chats, or generic patterns.

AI RULES:
- If a common pattern conflicts with this document, THIS DOCUMENT WINS.
- Do NOT infer missing files, endpoints, or orchestrators.
- Do NOT assume index files, registries, or REST triggers unless explicitly stated.
- If uncertain, STOP and ASK before generating scripts.

---

## Purpose

MarketAI is a modular financial intelligence platform designed to ingest real-world data,
normalize it, analyze it deterministically, and explain results using AI — without allowing AI
to invent, infer, or hallucinate data.

This document describes:
- What EXISTS at runtime
- What DOES NOT exist by design
- How execution actually flows today
- How this differs from the long-term vision

---

## Runtime Reality vs Conceptual Design

MarketAI documentation describes BOTH:
1) The long-term intended architecture
2) The current runtime implementation

IMPORTANT:
- Not all described systems are active.
- Not all conceptual components are executable.
- AI must treat undocumented components as NON-EXECUTABLE.

If execution is not explicitly described, assume READ-ONLY or PLANNED.

---

## High-Level Runtime Architecture

At runtime, MarketAI consists of:

- Node.js backend (ESM, TypeScript)
- PostgreSQL database (Railway)
- Ingestion pipelines (manifest + pipeline driven)
- Deterministic analysis engines
- AI narrative layer (explanatory only)
- Frontend dashboard (read-only consumer of APIs)

Execution is primarily:
- scheduler-driven
- pipeline-based
- explicitly gated by data availability

---

## What Does NOT Exist (By Design)

The following common patterns DO NOT exist and must not be “fixed”:

- No `src/ingestion/index.ts`
- No automatic module discovery
- No per-module ingestion REST endpoints
- No `/api/ingest/run?module=xyz`
- No placeholder data or fake tickers
- No silent fallback data sources
- No AI-written data

Absence of these is intentional.

---

## Execution Ownership Boundaries

### ChatGPT
- Architecture reasoning
- Constraint enforcement
- Script generation (small, targeted)
- Verification logic
- Documentation alignment

### APB (AI Project Builder)
- Heavy scaffolding
- Multi-file installers
- Full-system rebuilds
- Large refactors or migrations

RULE:
ChatGPT must NOT silently replace APB for large scaffolding work.

---

## Current System State (Authoritative)

As of this document version:

- Backend: stable and running
- Database: connected and clean
- Ingestion framework: functional
- Universe seeding: completed via Polygon
- Price history ingestion: gated and pending
- Downstream engines: intentionally blocked

AI must not bypass these stages.

---

## Authoritative Cross-References

This document must be read together with:
- AI_CONTEXT.md
- DATA_SOURCES_AND_INGESTION.md
- BRAIN_AND_ENGINES.md
- FRONTEND_AND_UI_SPEC.md
- ROADMAP_AND_APB_RULES.md

Conflicts must be resolved explicitly.
