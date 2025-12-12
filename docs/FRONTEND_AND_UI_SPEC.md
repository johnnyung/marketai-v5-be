# MarketAI-v5 — Frontend & UI Specification (Mega Version)

Frontend tech:

- Next.js (App Router, v15+)
- TypeScript
- TailwindCSS
- Deployed on Vercel

## 4.1 Core Pages (Minimum Set)

1. **Command Center** (Dashboard)
   - Tiles for ingestion sources:
     - FMP, Polygon, gov, social, crypto, macro, historical, etc.
   - Tile states:
     - IDLE, SCANNING, ONLINE, ERROR, UNAVAILABLE
   - Macro Regime panel
   - Top Opportunities preview
   - Brain Cycle status (last run, duration)

2. **Opportunities**
   - Tables/cards of AI-ranked opportunities:
     - Top stocks
     - Crypto
     - High-risk
     - Insider-driven
   - Each tile shows:
     - ticker, entry, target, stop
     - composite score
     - conviction
     - catalysts
     - brief rationale

3. **Portfolio Analyzer**
   - User-entered holdings (no auth needed MVP)
   - Engine-consumed view:
     - risk scores
     - suggested rebalancing
     - per-ticker diagnostic summary

4. **Diagnostics / System Health**
   - Ingestion logs
   - Brain logs
   - Meta-AI status
   - DB connectivity & latency
   - API health

## 4.2 UI Principles

- Intelligent minimalism (clean, non-cluttered).
- Always render skeletons while loading.
- Never crash on missing fields.
- Use:
  - Score badges (color-coded by score).
  - Gauges for compositeScore / risk.
  - Tags for regimes and categories.
- All backend responses must follow:
  - \`{ status: "ok" | "error", data?, message?, meta? }\`

## 4.3 Frontend–Backend Contracts

Key backend endpoints (conceptual mega-set):

- \`GET /health\`
- \`GET /opportunities\`
- \`GET /intelligence/:symbol\`
- \`GET /diagnostics/ingestion\`
- \`GET /diagnostics/brain\`
- \`GET /diagnostics/meta\`
- \`POST /ingestion/run\` (protected)
- \`POST /brain/run\` (protected)
- \`POST /meta/run\` (protected)

Frontend must **not** call external providers directly (FMP, Polygon, etc.).  
All external data must flow through backend.

This file defines the long-term UI shape. Current pages may be a subset; new pages/components must move toward this spec.
