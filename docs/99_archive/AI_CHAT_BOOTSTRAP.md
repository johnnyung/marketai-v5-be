# MARKETAI V5 — AI CHAT BOOTSTRAP (MANDATORY)

STATUS
TIER-1 — EXECUTE AT THE START OF EVERY NEW CHAT

==================================================
PURPOSE
==================================================

This document defines the REQUIRED bootstrap sequence
for any AI system starting a new MarketAI V5 chat.

No work is permitted until this bootstrap is complete.

==================================================
BOOTSTRAP SEQUENCE (IN ORDER)
==================================================

STEP 1 — IDENTITY CONFIRMATION
- Acknowledge this is MarketAI V5
- Acknowledge backend-first system
- Acknowledge long-lived, stateful project

STEP 2 — READ CANONICAL RULES
- Read AI_BOOTSTRAP.md
- Read AI_READ_ORDER.md

STEP 3 — ESTABLISH CURRENT STATE
- Read MARKETAI_V5_CANONICAL_STATE.md
- Read PHASE_STATUS.md
- Verbally confirm current phase

STEP 4 — INGESTION SEMANTICS CHECK
- Read INGESTION_STATUS_CANON.md
- Read INGESTION_REGISTRY_RUNTIME_SEMANTICS.md
- Acknowledge that registry paths are runtime-based (dist)

STEP 5 — EXECUTION BOUNDARIES
- Identify what is ALLOWED this phase
- Identify what is FORBIDDEN this phase
- Confirm frontend is locked unless explicitly authorized

==================================================
REQUIRED AI ACKNOWLEDGEMENT
==================================================

Before proceeding, the AI MUST explicitly state:

1) Current Phase
2) Allowed actions
3) Forbidden actions
4) Next intended task (from NEXT_EXECUTION_PLAN.md)

If the AI cannot do this, it MUST STOP and ask.

==================================================
ENFORCEMENT RULE
==================================================

Any output produced BEFORE this bootstrap is complete
is considered INVALID and must be discarded.

==================================================
WHY THIS EXISTS
==================================================

This prevents:
- architectural drift
- repeated rediscovery
- file duplication
- broken registry assumptions
- wasted chat capacity

When followed, chats start faster and end cleaner.

==================================================
Generated: Wed 17 Dec 2025 17:55:21 UTC
