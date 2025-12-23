# PHASE 3 EXECUTION GATES

Phase 3 is executed in STRICT gates.

## Gate 1 — Intelligence Skeleton
Allowed:
- Engine interfaces
- Execution ordering
- Diagnostics scaffolding

Blocked:
- Scoring math
- Rankings
- Persistence

## Gate 2 — Scoring + Risk
Allowed:
- Deterministic scoring
- Risk flags
- Confidence bands

Blocked:
- Optimization
- Heuristics without explanation

## Gate 3 — Opportunity Synthesis
Allowed:
- Multi-signal aggregation
- Explainability payloads
- Ranking logic

Blocked:
- UI assumptions
- User-facing language tuning

## Gate 4 — Validation
Allowed:
- Dry runs
- Empty-output validation
- Edge-case analysis

Blocked:
- Feature expansion
