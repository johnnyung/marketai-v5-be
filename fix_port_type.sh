#!/bin/bash
set -e

echo "🔧 Fixing PORT type in server.ts..."

cat << 'SERVE' > src/server.ts
import "./config/env.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "MarketAI Backend Running" });
});

// FIX: ensure PORT is always a number
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
SERVE

echo "✅ PORT fix applied. Run: npm run build"
