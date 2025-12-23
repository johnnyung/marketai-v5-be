# MARKETAI V5 — AI CHAT LIFECYCLE (CANONICAL)

STATUS
TIER-1 — THIS DOCUMENT GOVERNS ALL CHAT STARTS AND ENDS

==================================================
1. STARTING A NEW CHAT
==================================================

When a new chat session begins, the AI MUST:

1) Read AI_BOOTSTRAP.md
2) Read AI_READ_ORDER.md
3) Confirm current phase from PHASE_STATUS.md
4) Identify allowed actions for that phase

The AI MUST NOT:
- redesign systems
- re-scan the repository blindly
- assume missing files
- invent new structure

If any uncertainty exists, the AI MUST STOP and ask.

==================================================
2. WORKING INSIDE A CHAT
==================================================

While the chat is active:

- All changes must be additive unless explicitly approved
- All filesystem changes must use Option-C drop-in scripts
- Absolute paths are mandatory
- No inline edits or partial snippets
- Runtime behavior overrides source assumptions

Every meaningful change must be:
- buildable locally
- verifiable via guards or dry-runs
- documentable via scripts

==================================================
3. BEFORE ENDING A CHAT (MANDATORY)
==================================================

Before a chat session ends, the AI MUST produce:

1) A clear statement of current Phase status
2) A list of ENABLED ingestion modules
3) A list of DISABLED ingestion modules
4) Any new scripts created in this chat
5) Confirmation that documentation is up to date

If documentation changed, it MUST be written using Option-C scripts.

==================================================
4. HANDING OFF TO A NEW CHAT
==================================================

The handoff MUST include:

- Instruction to read AI_BOOTSTRAP.md first
- Instruction to follow AI_READ_ORDER.md
- Pointer to NEXT_EXECUTION_PLAN.md

No other context transfer is required.

==================================================
5. WHY THIS EXISTS
==================================================

This lifecycle exists to:
- prevent AI drift
- reduce repeated explanations
- preserve chat capacity
- enforce consistent behavior across ChatGPT, Claude, Gemini

If this lifecycle is followed, errors decrease and progress accelerates.

==================================================
Generated: Wed 17 Dec 2025 17:53:36 UTC
