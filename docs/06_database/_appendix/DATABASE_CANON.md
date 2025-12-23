# 🧠 DATABASE CANON — MARKETAI V5

---

## 🔑 DATABASE AUTHORITY

Canonical DB: **Railway PostgreSQL**

There is NO local database.
There is NO SQLite.
There is NO Docker DB.

---

## 🔁 ORM

• Prisma is the ONLY ORM  
• schema.prisma is authoritative  
• Tables do NOT auto-create  

---

## 🚨 REQUIRED ORDER

1️⃣ Update schema.prisma  
2️⃣ prisma migrate dev / deploy  
3️⃣ npm run build  
4️⃣ Run ingestion  

If table does not exist:
→ Ingestion WILL silently do nothing

---

## 🧪 VALIDATION

Prisma Studio is READ-ONLY validation  
psql must use TCP + sslmode=require  

Never assume DB state.

---

## 🔍 Verified Findings (Dec 2025)

### Prisma Runtime Location (AUTHORITATIVE)
- Prisma client **must be imported from**:

backend/src/db/prisma.ts

- The directory:

backend/src/prisma/

is **schema-only** and MUST NOT be used for runtime imports.

### Prisma Client Naming
- Prisma exposes **camelCase delegates**, e.g.:
  - `prisma.ingestionRun`
- Prisma does **NOT** expose snake_case tables:
  - ❌ `prisma.ingestion_runs`
  - ❌ `prisma.ingestion_run_sources`

### Canon Rule
Any ingestion runtime code MUST:
- match Prisma-generated client names
- fail build if schema is missing
- never fabricate runtime persistence


---

## 🔍 Verified Findings (Dec 2025)

### Prisma Runtime Location (AUTHORITATIVE)
- Prisma client must be imported from:
  backend/src/db/prisma.ts

- The directory:
  backend/src/prisma/
  is schema-only and MUST NOT be used for runtime imports.

### Prisma Client Naming
- Prisma exposes camelCase delegates:
  prisma.ingestionRun

- Prisma does NOT expose snake_case tables:
  ingestion_runs
  ingestion_run_sources

### Canon Rule
Any ingestion runtime code MUST:
- match Prisma-generated client names
- fail build if schema is missing
- never fabricate runtime persistence


---

## Reference Status

This document is **non-authoritative**.

Rules:
- MUST NOT redefine database guarantees
- MUST NOT conflict with DATABASE_SYSTEM_CANON.md
- Serves as historical context or scoped rules only

If discrepancies exist, this document is outdated.

