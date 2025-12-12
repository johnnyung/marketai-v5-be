# MarketAI-v5 — Mega System Architecture (Authoritative)

This repo is building **MarketAI-v5 (Mega Version)**:

- Full-stack AI-powered financial intelligence system
- Multi-source ingestion (FMP Stable, Polygon, gov, social, crypto, macro, historical)
- Deterministic multi-engine Brain (quant engines only for scores)
- AI narrative layer (LLMs only explain, never score)
- Frontend dashboards (Next.js) for command center, opportunities, portfolio, diagnostics

This project MUST be treated as the **mega-system**, not a tiny MVP.

## 1.1 High-Level Layers

1. **Backend Core (Node + Express + TypeScript + ESM)**
   - REST API under `/api/...`
   - Controllers / routes / services / brain / ingestion
   - Prisma + PostgreSQL
   - Logging, error handling, schedulers

2. **Ingestion Layer**
   - Independent modules per source group
   - FMP Stable for fundamentals, macro, insider, news, universe
   - Polygon for prices & options where required
   - External sources: gov, social, crypto, historical events
   - All runs logged in `IngestionLog` and other job tables

3. **Brain Layer**
   - Deterministic engines (18+)
   - Fusion engine (compositeScore)
   - Trade architect (entry/target/stop)
   - Meta-AI (evaluates system accuracy, suggests adjustments)
   - BrainOrchestrator (full/ticker cycles)

4. **AI Layer**
   - ModelRouter (Gemini → Anthropic → OpenAI → DeepSeek → fallback)
   - Used only for narratives, summaries, explanations, meta-analysis
   - Never used to generate numeric scores

5. **Frontend Layer**
   - Next.js App Router (v15+)
   - Dashboards: Command Center, Opportunities, Portfolio, Diagnostics
   - Widgets: engines, regimes, catalysts, sources, ingestion status
   - Consumes backend contracts (see API & UI docs)

6. **Deployment**
   - Backend: Railway (Node + Postgres)
   - Frontend: Vercel (Next.js)
   - Env-driven config only (no hard-coded secrets)

This file is the root architecture description. All future work MUST respect these layers.
