# ENGINE TEMPLATE — CANONICAL

This document defines the **shared structure** for all intelligence engines.

## Required Sections
- Purpose
- Inputs
- Preconditions
- Execution Rules
- Output Shape
- Failure Modes
- Silence Conditions

Individual engines MUST NOT redefine this structure.
They may only provide **engine-specific parameters**.

---

## Reference Status

This document is **subordinate to ENGINE_TAXONOMY_AND_LIFECYCLE.md**.

Rules:
- MUST NOT enable or disable engines
- MUST NOT redefine lifecycle order
- MUST NOT contradict phase locks

Serves as structural, semantic, or scoring reference only.

