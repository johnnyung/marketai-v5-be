#!/bin/bash
# ======================================================================
# FIX SCRIPT — Correct route imports for default exports
# ======================================================================
set -e

echo "🔧 Rewriting src/routes/index.ts to match default exports..."

cat << 'ROUTE' > src/routes/index.ts
import { Router } from "express";

import brainRoutes from "./brainRoutes.js";
import ingestionRoutes from "./ingestionRoutes.js";
import diagnosticsRoutes from "./diagnosticsRoutes.js";
import opportunitiesRoutes from "./opportunitiesRoutes.js";

const router = Router();

router.use("/brain", brainRoutes);
router.use("/ingestion", ingestionRoutes);
router.use("/diagnostics", diagnosticsRoutes);
router.use("/opportunities", opportunitiesRoutes);

export default router;
ROUTE

echo "✅ Fix complete. Run: npm run build"
