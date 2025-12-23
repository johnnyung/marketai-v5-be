# DATABASE SYSTEM — CANONICAL
Prisma models, runtime access, persistence guarantees.

---

## Appendix References

The following documents are retained as non-authoritative reference material:

- DATABASE_CANON.md — legacy / historical database rules
- PARTIAL_DATA_TOLERANCE_RULES.md — downstream engine behavior under incomplete data

All database authority resides exclusively in this document.


---

## Database Authority

This document (**DATABASE_SYSTEM_CANON.md**) is the **sole authoritative source** for:

- Database architecture
- Schema ownership
- Persistence guarantees
- Runtime access rules
- Partial data expectations

Rules:
- No other document may redefine database behavior or guarantees
- Schema truth is enforced at runtime
- If conflicts arise, this file always wins

Supporting, non-authoritative documents live in:
`backend/docs/06_database/_appendix/`

