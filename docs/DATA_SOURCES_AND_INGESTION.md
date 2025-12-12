# MarketAI-v5 — Data Sources & Ingestion Blueprint

MarketAI-v5 is a **multi-source ingestion system**. It must support many categories of data.

## 2.1 Core Providers

### (A) FinancialModelingPrep — STABLE ONLY (Non-negotiable)

All FMP calls MUST use:

- \`https://financialmodelingprep.com/stable/*\`

Legacy \`/api/v3\` and \`/api/v4\` endpoints are **forbidden**.

Expected FMP Stable usage (subject to plan limits):

- \`/stable/sp500-constituent\` — Universe
- \`/stable/income-statement\` — Fundamentals
- \`/stable/balance-sheet-statement\`
- \`/stable/cash-flow-statement\`
- \`/stable/historical-price-full\` — EOD price history
- \`/stable/economicIndicator\` or equivalent — macro
- \`/stable/insider-trading\` — insider flows
- \`/stable/stock_news\` — news feed
- \`/stable/etf-holdings\` — optional, treat empty as valid

### (B) Polygon.io

Primary usage:

- Equity + index prices (candles, grouped)
- Options chains & flow
- Crypto prices (e.g. X:BTCUSD)
- Volatility & advanced price series (where required)

Polygon must be used where FMP Stable does not provide needed intraday/options/crypto detail.

## 2.2 Other Required Source Categories (Scaffolded)

The **mega system** must support ingestion modules for:

1. **News & Media**
   - Global financial news (wire-level, RSS, or JSON)
   - Sector & company news
   - Press releases, M&A, earnings

2. **Government & Regulatory**
   - Congress trading
   - SEC filings (10-K, 10-Q, 8-K, Form 4)
   - White House/Treasury/Fed communications
   - Regulatory announcements impacting sectors

3. **Social & Crowd**
   - Reddit sentiment (WSB, stocks)
   - Twitter/X trending tickers & finance topics
   - Other social sentiment feeds as added later

4. **Crypto & On-chain Adjacent**
   - BTC/ETH/SOL prices and volatility
   - Whale / large wallet activity (conceptual module)
   - Crypto-equity macro correlation

5. **Macro & Indicators**
   - CPI, PPI, GDP, unemployment
   - Treasury yields
   - VIX
   - PMI / sentiment indices

6. **Historical Events Library**
   - 2008 crisis
   - Dot-com bust
   - COVID crash + recovery
   - Wars & geopolitical shocks
   - Inflationary regimes & rate cycles

## 2.3 Ingestion Rules

- Each ingestion module must:
  - Fetch from a single logical source group
  - Validate remote data
  - Normalize into Prisma models
  - Log results in \`IngestionLog\` + relevant tables
  - Be callable by:
    - full cycle
    - per-module
    - per-ticker (where applicable)

- No placeholder ingestion modules.
- If a source is unavailable at current plan, mark it as such explicitly in logs; do not fake responses.

This file is the reference for what ingestion **must eventually cover**. Current implementation may be a subset but must always expand toward this spec.
