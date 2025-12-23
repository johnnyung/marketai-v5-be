# Frontend Integration Lock Rules

Frontend is not “done” until:
- No mocks exist anywhere in runtime paths
- Pages render from real backend data (or empty states)
- No console errors
- `npm run build` passes
- `/api/*` proxy routes compile and run

## Data flow standard

- Page → hook (React Query) → `src/lib/api/*` → `fetch('/api/...')` → Next proxy route → backend

## Prohibited

- Calling backend directly from components using `http://localhost:3001` in the browser runtime
- Reintroducing mock datasets
- Removing UX/layout during wiring

## Runtime checks

- `curl -s http://localhost:3000/api/health | jq`
- `curl -s http://localhost:3000/api/opportunities | jq`
- `curl -s http://localhost:3000/api/diagnostics/ingestion | jq`
- `curl -s http://localhost:3000/api/portfolio | jq`
