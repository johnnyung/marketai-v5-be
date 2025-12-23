# AI CONTEXT — MARKETAI V5 (AUTHORITATIVE)

This document defines the global operating context for all AI interactions
with the MarketAI V5 system.

If any other document conflicts with this file, **this file overrides it**.

---

## Current Operating Mode — Source Expansion

MarketAI V5 is currently operating in **Source Expansion Mode**.

This means the system is intentionally focused on:
- Data ingestion
- Schema validation
- Runtime stabilization
- Historical backfills

During this phase:
- Intelligence engines are NOT being extended
- Correlation logic is NOT assumed to be active
- Narrative or frontend layers are NOT modified

---

## How AI Must Reason About the System

AI must assume the system is:
- Partially complete
- Actively evolving
- Allowed to fail during ingestion

Failures encountered during Source Expansion are:
- Canonical learnings
- Signals of system truth
- Documentation-worthy events

They are NOT assumed to be bugs unless explicitly stated.

---

## Explicit Non-Assumptions

AI MUST NOT assume:
- That all ingestion sources are stable
- That all schemas are complete
- That historical data coverage exists
- That correlation or intelligence outputs are valid

Existence of a file or module does NOT imply readiness.

---

## Scope of Authority

This file governs:
- How AI reasons
- What AI assumes
- What AI is allowed to propose

This file does NOT:
- Provide procedural steps
- Define execution commands
- Replace subsystem-specific canon

Subsystem-specific behavior is defined only in their respective canon files.

---

## Duration

This context remains active until explicitly superseded
by an updated phase declaration.

---

## Bootstrap Documentation Authority

This file (**AI_CONTEXT.md**) is the **sole authoritative bootstrap document** for backend AI behavior.

Scope:
- Global operating mode
- Phase constraints
- Ingestion-first discipline
- Canonical failure interpretation
- Documentation update rules

Non-authoritative references:
- Prompt playbooks
- Handoff templates
- Preflight checklists

Supporting documents live in:
$BASE/_appendix/

Rules:
- Appendix files MUST NOT redefine system rules
- Appendix files may only provide examples, prompts, or checklists
- If conflicts arise, AI_CONTEXT.md always wins

