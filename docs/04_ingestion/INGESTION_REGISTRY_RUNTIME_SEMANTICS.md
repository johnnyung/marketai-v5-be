# MARKETAI V5 — INGESTION REGISTRY RUNTIME SEMANTICS (TIER-1)

STATUS
CANONICAL — REQUIRED READING FOR ALL AI SESSIONS

CORE RULE (NON-NEGOTIABLE)
INGESTION_REGISTRY.path is a RUNTIME IMPORT CONTRACT.
It is NOT a source-filesystem locator.

It MUST be evaluated relative to:
backend/dist/ingestion/

NOT relative to:
backend/src/

WHY THIS EXISTS
MarketAI V5 uses Node.js ESM, NodeNext resolution, and runtime dynamic imports.
The ingestion pipeline loads modules AFTER BUILD from dist/.

The runtime import pattern is equivalent to:
await import('../' + mod.path + '.js')

Therefore:
- src layout is NOT authoritative
- dist output IS the source of truth
- registry paths do not map 1:1 to src folders

CORRECT VALIDATION PATTERN
REQUIRED:
- npm run build
- validate imports from backend/dist/ingestion/
- ENABLED modules MUST export run()

FORBIDDEN:
- validating registry paths against src/
- assuming fixed adapter/module directories
- writing guards that scan source layout

CANONICAL GUARD
All Phase-2 ingestion work MUST pass:
scripts/phase2_runtime_guard.sh

This guard validates real runtime behavior and prevents AI path hallucination.

FAILURE MODE THIS PREVENTS
Without this rule, AI will assume missing files, create duplicates,
break registry semantics, and waste hours debugging non-issues.

CHANGE CONTROL
- Phase-1 / Phase-2 LOCKED
- Changes require explicit authorization
- Violations invalidate ingestion work

Generated: Wed 17 Dec 2025 17:46:20 UTC

## Observed Runtime Failure Modes

Validated failure classes include:
- Missing or undefined context fields
- Type mismatches between ingestion output and Prisma schema
- Non-deterministic upstream numeric formats
- Registry misalignment due to duplicate or shadowed entries

These are treated as design signals, not transient bugs.

---

## Registry Authority and Runtime Guarantees (Enforced)

### Closed-World Registry
The ingestion registry is the single source of truth.

If a module is not present:
- It cannot execute
- It cannot be gated
- It cannot log
- It does not exist at runtime

There is no dynamic discovery.

---

### Deterministic Execution Order
Modules execute strictly in registry order.

Order is semantically meaningful for:
- Derived signals
- Correlation modules
- Dependency-sensitive ingestion

Incorrect order may yield zero output without error.

---

### dist/ Is Authoritative
At runtime:
- Only dist/ is executed
- src/ changes have no effect until rebuilt

If it is not in dist/, it does not exist.


---

## Registry Runtime Guarantees (Observed)

### Authority
- Only entries in the compiled registry execute.
- No dynamic discovery exists.
- Missing entries fail silently.

### Determinism
- Execution order is strictly registry order.
- Skipped modules do not affect subsequent execution.
- Build failures freeze runtime behavior at last successful build.

### Error Isolation
- Runtime exceptions are isolated per module.
- Errors never cascade or halt the pipeline.



<!-- CANON:PASS4_MANIFEST_REFACTOR_RULES -->
## Durable Registry Rules (Post-manifestFull.ts Refactor)

**Constraints (Observed; non-negotiable):**

1 **Registry presence is required for execution eligibility**  
A module must be present in the composed ingestion registry to be eligible for execution, regardless of file existence.

2) **Registry composition is authoritative at runtime**  
The compiled registry () is the single source of truth for runtime ingestion behavior.

3) **Registry inclusion does not guarantee execution**  
Modules in registry may still be skipped due to  and/or .

4) **Environment filters apply only to registry-visible modules**  
 and  are evaluated exclusively against modules present in the registry.

5) **Registry iteration order is deterministic**  
Execution and skip evaluation follow the deterministic order defined by registry composition: category order in , then module order inside each category array.

6) **Registry guarantees visibility, not success**  
Registry inclusion guarantees logging (execute or skip), but does not guarantee successful data writes.

7) **Missing registry entries fail silently at runtime**  
Modules absent from the registry produce no runtime errors and no skip logs; they are simply not evaluated.

8) **Build-time errors surface structural registry failures early**  
Structural registry failures (bad imports/exports/paths) surface at build time (tsc), not as degraded runtime behavior.

9) **Registry uniqueness is assumed, not enforced**  
No de-duplication behavior is guaranteed; uniqueness must be ensured by construction.
BLOCK
)
