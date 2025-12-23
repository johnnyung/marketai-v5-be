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

This document defines how MarketAI analyzes data.
AI must never invent scores or signals.

---

## Design Principle

Math decides.
AI explains.

Deterministic engines produce scores.
AI generates narrative ONLY from stored facts.

---

## Engine Layers

### Layer 1 — Deterministic Engines
Examples:
- Fundamentals
- Technicals
- Momentum
- Options flow
- Insider activity
- Macro context

Outputs:
- numeric scores
- bias indicators
- metadata

---

### Layer 2 — Fusion Engine
- Aggregates engine outputs
- Applies regime-aware weighting
- Produces composite score

---

### Layer 3 — Trade Architect (Future)
- Entry zones
- Stops
- Targets
- Risk/reward

Not executable unless explicitly enabled.

---

### Layer 4 — AI Narrative Layer
- Summarization only
- No math
- No scoring
- No data creation

If data is missing, AI must say so.

---

## Runtime Status Legend

Each engine is in ONE state:
- IMPLEMENTED
- SCAFFOLDED
- PLANNED
- FORBIDDEN TO EXECUTE

AI must not execute or modify PLANNED engines.

---

## Meta-AI (Future)

- Evaluates past performance
- Suggests weight changes
- NEVER auto-applies changes
- All changes require human review
