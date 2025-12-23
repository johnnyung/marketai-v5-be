# 🧠 INGESTION CANON — MARKETAI V5

This document defines how ingestion ACTUALLY works.

---

## 🔑 SINGLE SOURCE OF TRUTH

**ONLY ONE registry is authoritative:**

backend/src/ingestion/registry.ts

❌ backend/src/registry.ts is INVALID  
❌ manifestFull.ts is UI-only  
❌ route registries are NOT execution logic  

---

## 🔁 EXECUTION FLOW

1. runIngestionPipeline.ts
2. Iterates INGESTION_REGISTRY
3. Skips modules not ENABLED
4. Dynamically imports mod.path
5. Calls exported run() function

---

## 📦 INGESTION MODULE REQUIREMENTS

Every ingestion module MUST:

• Be registered in ingestion/registry.ts  
• Have a unique key  
• Have status ENABLED or DISABLED  
• Export a function named `run()`  
• Handle dry-run internally  
• Assume DB tables already exist  

---

## 🛑 CRITICAL RULES

• Registry entries are STATIC — no .push()  
• No hard-coded pipeline calls  
• Disabled modules are COMPLETE  
• Do NOT “fix” disabled modules  

---

## 🧪 VERIFICATION COMMANDS

npm run build  
node dist/ingestion/runIngestionDryRun.js  
node dist/ingestion/scheduler.js  

If a module does not appear in dry run:
→ It is NOT registered correctly

## Canonical Ingestion Rules (Reinforced)

- Ingestion modules must be deterministic
- All outputs must conform exactly to schema
- Partial success is acceptable and must be reported
- No ingestion logic may assume downstream intelligence behavior

This canon supersedes convenience implementations.
