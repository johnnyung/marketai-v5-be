# MarketAI-v5 — Roadmap & APB Rules Snapshot

This file summarizes the **remaining work** and **APB behavior rules** for this mega build.

## 5.1 Remaining Major Phases (High-Level)

1. **Ingestion Expansion**
   - Add missing source modules beyond core FMP/Polygon:
     - gov, social, crypto, historical library
   - Implement source-status tables & ingestion health UI.

2. **Brain Enhancements**
   - Refine each deterministic engine to use richer signals.
   - Enhance FusionEngine for regime-aware weighting.
   - Extend TradeArchitect to handle risk regimes and timeframes.
   - Expand Meta-AI to persist reports and influence suggested weights (not auto-apply).

3. **Frontend Build-Out**
   - Command Center tiles for all major sources and engines.
   - Opportunities tabs (stocks, crypto, high-risk, insider).
   - Portfolio analyzer UI.
   - Full diagnostics pages for ingestion/brain/meta.

4. **Meta-AI & Accuracy Tracking**
   - AccuracySnapshot tables.
   - Engine performance evaluation.
   - Suggestive weight changes and engine tuning.

5. **Portfolio Subsystem**
   - Portfolio + holdings + history tables.
   - PortfolioEngine integration in Brain.
   - UI pages for portfolio diagnostics.

6. **Deployment & Guardrails**
   - Railway + Vercel config.
   - Safety checks:
     - env validation
     - FMP Stable-only enforcement
     - 0.0.0.0 binding
   - Rate limiting and admin token protection for sensitive endpoints.

## 5.2 APB Behavior Rules (Local Snapshot)

APB must:

- Always generate **Option C** scripts for file changes.
- Never introduce mock data or fake endpoints.
- Never revert to FMP v3/v4.
- Respect TypeScript + ESM with explicit \`.js\` extensions in backend imports.
- Preserve existing folder structure:
  - \`backend/src/config\`
  - \`backend/src/utils\`
  - \`backend/src/ingestion\`
  - \`backend/src/brain\`
  - \`backend/src/controllers\`
  - \`backend/src/routes\`

APB should treat these docs as **source-of-truth constraints** when generating new modules, routes, engines, or UI.

## 5.3 Guiding Principle

This codebase is **not** a toy or MVP.  
All work from this point forward must assume:

- Multi-year evolution
- Many additional modules
- High complexity
- Strong need for stability and clarity

These docs exist so AI & humans never lose context again.
