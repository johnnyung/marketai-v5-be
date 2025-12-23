# MARKETAI V5 — INGESTION STATUS (CANON)

## ENABLED
- sp500Universe (INTERNAL)
- polygonPrices (POLYGON)
- fmpFundamentals (FMP)
- fmpKeyMetrics (FMP)
- fmpInsider (FMP)
- fmpInstitutional (FMP)
- fmpMacro (FMP)
- fmpNews (FMP)
- fmpGovernmentContracts (FMP)

## DISABLED (BY DESIGN)
- polygonOptionsFlow
- polygonCrypto
- intelligenceBundles
- opportunityEngine
- fmpPoliticalTrades
- fmpLobbyingDisclosures


- fmpDividendCalendar — DISABLED (FMP, dividend calendar)

---

## 📅 Calendar Modules (Expected Behavior)

Calendar-style ingestion modules include (but are not limited to):

- fmpIPOCalendar
- fmpDividendCalendar
- fmpEconomicCalendar
- fmpEarningsCalendar

### Phase 2 Canonical Behavior

- These modules rely on **time-window-dependent** upstream data.
- FMP Stable endpoints may legitimately return **404** when no data is available.
- **404 is NOT an error condition**.

### Pipeline Semantics

- If a calendar module encounters a 404:
  - It logs a warning
  - It returns `{ status: "SKIPPED" }`
  - It does **NOT throw**
- The ingestion pipeline marks the module as **SUCCESS** if no exception is thrown.

### Source of Truth

- **Logs** indicate actual data availability.
- **Pipeline SUCCESS** indicates system health, not data presence.

### Important Rule

Do **NOT** modify pipeline logic in Phase 2 to interpret returned status values.

Calendar semantics are finalized in Phase 3 intelligence layers, not ingestion.


## Source Status Interpretation

Source status reflects:
- Structural correctness over completeness
- Schema compatibility over throughput
- Replay safety over speed

A source marked active may still be partially guarded.

---

## Disable, Skip, and Zero-Write Semantics (Enforced)

### Disabled (Skipped)
A disabled ingestion module:
- Is registered
- Is never executed
- Produces no side effects
- Always emits a log entry:

[INGESTION][SKIPPED] <module-name>

Disabled modules do not error and do not initialize.

---

### Executed but Zero-Write (Valid State)
A module may execute successfully and write zero rows when:
- Upstream data is absent
- Correlated datasets are missing
- Date alignment yields no valid joins

This is a valid partial outcome, not a failure.

---

### Key Invariants
- Disabled ≠ removed
- Skipped ≠ failed
- Executed ≠ written
- Zero rows ≠ error

These distinctions are structural and enforced.


---

## Execution State Semantics (Observed)

### Skip vs Missing vs Error
- **Skipped**: Module is registered but gated; emits `[INGESTION][SKIPPED]`.
- **Missing**: Module not in registry; silent no-op.
- **Error**: Module executes and throws; logged and pipeline continues.

### Zero-Write & Partial States
- Zero writes with successful execution are valid outcomes.
- Partial states are first-class and non-fatal.
- Silence does not imply failure or negative signal.



<!-- CANON:PASS4_MANIFEST_REFACTOR_STATUS_SEMANTICS -->
## Registry Visibility and Execution Semantics (Post-manifestFull.ts Refactor)

### Definitions (Observed Truth)
- **Eligible**: Module is present in the composed registry at runtime.
- **Executed**: Pipeline logs execution for the module and invokes `run(...)`.
- **Skipped**: Module is registry-visible but filtered by `INGEST_DISABLE_ALL` and/or `INGEST_ONLY`. Emits `[INGESTION][SKIPPED] <name>`.
- **Missing (Silent Omission)**: Module is not present in the composed registry. Emits **no** skip log and **no** execution log even if listed in `INGEST_ONLY`.

### Truth Table (Observed)
| Condition | Registry Visible? | Filtered by env? | Log Output | Outcome |
|---|---:|---:|---|---|
| Module file exists, **not** in registry | No | N/A | *(none)* | **Missing (Silent Omission)** |
| Module in registry, `INGEST_DISABLE_ALL=1`, not in `INGEST_ONLY` | Yes | Yes | `[INGESTION][SKIPPED] <name>` | **Skipped** |
| Module in registry, `INGEST_ONLY` set and name not included | Yes | Yes | `[INGESTION][SKIPPED] <name>` | **Skipped** |
| Module in registry, allowed by filters | Yes | No | `[INGESTION] executing module: <name>` | **Executed** |
| Module executed but writes no rows | Yes | No | Execution log present | **Executed (No Persistence Possible)** |

### Critical Clarifications
- **“Enabled” does not mean “file exists.”** Enabled/eligible requires registry inclusion.
- **`INGEST_ONLY` is subtractive only.** It cannot activate unregistered modules.
- **Execution ≠ persistence.** Successful execution may still produce zero DB writes; verification must check the correct Prisma model/table for that module.
