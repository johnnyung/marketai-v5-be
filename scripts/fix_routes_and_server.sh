#!/bin/bash
set -e

echo "🚧 Fixing missing ingestionRoutes & opportunitiesRoutes + correcting server.ts import..."

# -------------------------------------------------------------------
# 1. CREATE ingestionRoutes.ts if missing
# -------------------------------------------------------------------
cat << 'INGEST' > src/routes/ingestionRoutes.ts
import { Router } from "express";
import { ingestionController } from "../controllers/ingestionController.js";

const router = Router();

router.post("/run", ingestionController.run);

export default router;
INGEST

# -------------------------------------------------------------------
# 2. CREATE opportunitiesRoutes.ts if missing
# -------------------------------------------------------------------
cat << 'OPPS' > src/routes/opportunitiesRoutes.ts
import { Router } from "express";
import { opportunitiesController } from "../controllers/opportunitiesController.js";

const router = Router();

router.get("/", opportunitiesController.list);

export default router;
OPPS

# -------------------------------------------------------------------
# 3. FIX server.ts — Use default import instead of named { routes }
# -------------------------------------------------------------------
cat << 'SERVE' > src/server.ts
import "./config/env.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.js";  // FIXED: default import

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "MarketAI Backend Running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
SERVE

echo "✅ Fix applied. Now run: npm run build"
