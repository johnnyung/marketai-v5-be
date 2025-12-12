import express from "express";
import cors from "cors";

import { prisma } from "./db/prisma.js";
import { env } from "./config/env.js";

import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { startScheduler } from "./cron/scheduler.js";

const app = express();

async function bootstrap() {
  console.log("--------------------------------------------------");
  console.log("🚀 Initializing MarketAI V5 Backend");
  console.log("--------------------------------------------------");

  await prisma.$connect();
  console.log("✅ Database connected");

  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api", router);
  app.use(errorHandler);

  const PORT = Number(process.env.PORT);
  if (!PORT) {
    console.error("❌ PORT not set — Railway will fail");
    process.exit(1);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`📡 Listening on PORT=${PORT}`);
    startScheduler();
  });
}

bootstrap().catch((e) => {
  console.error("❌ Fatal bootstrap error:", e);
  process.exit(1);
});
