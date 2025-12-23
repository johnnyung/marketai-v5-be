# PHASE 4 — ENTRY READINESS CHECKLIST (GATE-0)

This checklist MUST be satisfied before any Phase 4 implementation begins.

Phase 4 may not start unless ALL items are true.

---

## 1. PHASE 3 INTEGRITY

- [ ] Phase 3 build is GREEN (`npm run build`)
- [ ] Phase 3 post-build-fix snapshot exists
- [ ] Canonical snapshot path recorded:
      `backend/archives/phase3_post_build_fix_*`
- [ ] No Phase 3 files modified since snapshot

---

## 2. DOCUMENTATION BASELINE

- [ ] `PHASE_3_POSTMORTEM_AND_INVARIANTS.md` reviewed
- [ ] Phase 3 invariants are understood and accepted
- [ ] `PHASE_4_NON_GOALS_AND_BOUNDARIES.md` reviewed
- [ ] No planned Phase 4 work violates non-goals

---

## 3. SCOPE & AUTHORITY

- [ ] Phase 4 objective is explicitly stated
- [ ] Objective does not require ingestion changes
- [ ] Objective does not require schema changes
- [ ] Objective does not require Phase 3 refactors
- [ ] Any required unlocks are explicitly granted

---

## 4. VALIDATION READINESS

- [ ] Validation authority is available
- [ ] Review checkpoints are defined
- [ ] Rollback path exists (Phase 3 snapshot)

---

## 5. FINAL AUTHORIZATION

Phase 4 implementation may begin ONLY if:

- [ ] All boxes above are checked
- [ ] Explicit authorization is given in the form:

  `PROCEED PHASE 4 — OBJECTIVE: <single objective>`

Absent this, Phase 4 must not start.

---

## NOTE

Phase 4 success depends on discipline at entry.
Skipping this checklist invalidates Phase 4 work.
