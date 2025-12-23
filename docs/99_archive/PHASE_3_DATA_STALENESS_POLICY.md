# PHASE 3 DATA STALENESS POLICY (PLANNING)

Phase 3 must tolerate stale data and must label staleness explicitly.

---

## 1. STALENESS STATES (CONCEPTUAL)

A signal may declare data freshness as:
- FRESH (within window)
- STALE (outside preferred window but still usable)
- EXPIRED (outside usable window)
- UNKNOWN (timestamp absent)

If staleness cannot be established, default to UNKNOWN.

---

## 2. STALENESS INTERACTION

- EXPIRED data must not contribute
- UNKNOWN staleness must reduce confidence or resolve to NO_DATA if required
- FRESHness never implies positivity

Staleness is metadata, not direction.

---

## 3. VALIDATION REQUIREMENT

Engines must document which signals require FRESH vs tolerate STALE.
