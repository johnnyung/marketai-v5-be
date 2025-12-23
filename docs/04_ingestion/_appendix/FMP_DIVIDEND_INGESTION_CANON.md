# MarketAI V5 — FMP Dividend Calendar Ingestion (LOCKED)

## Status
**WORKING — SOURCE-LIMITED**

As of this fix, FMP Dividend Calendar ingestion is confirmed operational.
Observed production data volume: **~4,000 rows**.

---

## Correct Endpoint (AUTHORITATIVE)

https://financialmodelingprep.com/stable/dividends-calendar

yaml
Copy code

❌ DO NOT use:
- /api/v3/stock_dividend_calendar
- /stable/dividend-calendar (singular)

---

## Why This Was Confusing

- FMP Earnings Calendar returns **large historical datasets**
- FMP Dividend Calendar returns **sparse or empty datasets depending on plan**
- Zero rows is a **valid outcome**, not an error
- Ingestion pipeline correctly reports:
  - itemsFetched = 0
  - itemsWritten = 0
  - status = success

---

## Canonical Ingestion Behavior

| Condition | Expected Result |
|---------|----------------|
| Invalid API key | itemsFetched = 0 |
| Valid key, limited plan | itemsFetched = 0 |
| Valid key, sufficient plan | itemsFetched > 0 |
| Re-run ingestion | No duplicates (skipDuplicates) |

---

## Verification Commands (DO NOT GUESS)

### 1. Verify API access
```bash
curl "https://financialmodelingprep.com/stable/dividends-calendar?apikey=\$FMP_API_KEY" | jq 'length'
2. Run ingestion
bash
Copy code
curl -X POST http://127.0.0.1:3001/api/ingestion/run
3. Verify ingestion report
bash
Copy code
curl http://127.0.0.1:3001/api/ingestion/last-run \\
| jq '.modules[] | select(.name=="fmp-dividend-calendar")'
4. Verify database rows
bash
Copy code
npx prisma db execute --schema=prisma/schema.prisma --stdin <<'SQL'
SELECT COUNT(*) FROM "FmpDividendCalendar";
SQL
Prisma Guarantees
skipDuplicates: true is enforced

Composite index: (symbol, date)

Re-running ingestion must not grow row count indefinitely

DO NOT DO THESE (HARD RULES)
❌ Do NOT rewrite ingestion pipeline

❌ Do NOT remove dedupe

❌ Do NOT treat empty results as failure

❌ Do NOT modify manifest to force execution

❌ Do NOT fabricate UI data

Frontend Contract
UI must reflect:

Source availability

Last ingestion run

Row counts

UI must NOT assume dividends always exist

Canon Status
LOCKED — DO NOT REVISIT

Any future AI or engineer encountering empty dividend data must
refer to THIS document before making changes.

