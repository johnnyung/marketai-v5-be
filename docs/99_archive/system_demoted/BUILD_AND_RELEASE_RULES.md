# Build & Release Rules

## Local First
Backend:
- npm run build

Frontend:
- npm run build

## Deployment
Railway + Vercel only after local green builds

## Known Build-Loop Causes (Do Not Reintroduce)

### Backend
- Never rewrite Express Response typing
- Never auto-replace status logic with sed/perl
- Scripts that mutate TS must be reviewed line-by-line

### Frontend
- Canonical root is frontend/src/app
- Do NOT create parallel app/, lib/, or providers/ trees
- Fix imports, not folder structure

### Scripts
- All scripts must run from anywhere
- Always use absolute paths under ~/Desktop/marketai-v5
- Avoid regex patches that rewrite expressions
