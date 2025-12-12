#!/bin/bash
# ======================================================================
# FIX SCRIPT — Route/Controller Name Mismatch (Option C Ultra)
# ======================================================================
set -e

BACKEND="$(pwd)"

echo "🔧 Fixing mismatch in brainRoutes.ts + diagnosticsRoutes.ts"

# ---------------------------------------------------------
# 1. Fix brainRoutes.ts
# ---------------------------------------------------------
cat << 'ROUTE' > src/routes/brainRoutes.ts
import { Router } from "express";
import { brainController } from "../controllers/brainController.js";

const brainRoutes = Router();

// Existing controller methods:
//   runFull
//   runTicker

brainRoutes.post("/full-cycle", brainController.runFull);
brainRoutes.post("/ticker/:symbol", brainController.runTicker);

export default brainRoutes;
ROUTE

# ---------------------------------------------------------
# 2. Fix diagnosticsRoutes.ts
# ---------------------------------------------------------
cat << 'ROUTE' > src/routes/diagnosticsRoutes.ts
import { Router } from "express";
import { diagnosticsController } from "../controllers/diagnosticsController.js";

const diagnosticsRoutes = Router();

// Existing controller methods:
//   ingestionLogs
//   brainLogs
//   meta

diagnosticsRoutes.get("/ingestion", diagnosticsController.ingestionLogs);
diagnosticsRoutes.get("/brain", diagnosticsController.brainLogs);
diagnosticsRoutes.get("/meta", diagnosticsController.meta);

export default diagnosticsRoutes;
ROUTE

echo "✅ Fix complete — route files rewritten."
echo "Run: npm run build"
