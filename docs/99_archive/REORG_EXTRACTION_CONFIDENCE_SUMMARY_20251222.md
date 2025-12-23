# Backend Reorg Extraction — Confidence Summary (2025-12-22)

## Overall Confidence Level
High

This extraction is based on repeated, observable cause-and-effect cycles across file deletions, build failures, guard failures, and eventual stabilization. The same failure modes occurred multiple times and were resolved in consistent ways, increasing confidence in the derived constraints.

## Areas of Highest Certainty (High Confidence)

- Phase directory invalidity
  - Presence of src/phase* directories consistently caused broken imports or architectural invalidation.
- Engine vs runner separation
  - Mixing execution logic with engine logic caused build failures or semantic violations.
- Import breakage as primary failure signal
  - Structural violations surfaced first through TS2307 import errors.
- Build as mandatory validator
  - npm run build (tsc) required after every structural change.
- Guard scripts catching what TypeScript cannot
  - Placeholder markers, legacy artifacts, and disabled files passed compilation but failed guards.
- Partial refactors causing cascading failure
  - Incomplete deletions/moves consistently resulted in incremental breakage.
- Explicit allowlisting of intentional placeholders
  - Guard failures persisted until placeholders were formally enumerated.

## Areas with Partial Certainty (Medium Confidence)

- Duplicate basenames
  - Did not break builds in this session, but flagged as structurally risky.
- Runtime correctness
  - No runtime execution was performed; conclusions limited to build-time and guard-time behavior.
- Long-term maintenance impact
  - Benefits inferred from reduced breakage, not measured longitudinally.

## Explicit Confirmations

- No speculative intent was included
- No proposals or refactors were included
- Only observed behavior was extracted

## Status
Extraction complete.
