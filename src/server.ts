import { prisma } from "./db/prisma.js";
import { env } from "./config/env.js";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { startScheduler } from "./cron/scheduler.js";

const app = express();
// prisma singleton imported

async function bootstrap() {
  console.log("--------------------------------------------------");
  console.log("🚀 Initializing MarketAI V5 Backend");
  console.log("--------------------------------------------------");

  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (e) {
    console.error("❌ Database connection failed:", e);
    process.exit(1);
  }

  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      env: env.NODE_ENV,
      timestamp: new Date().toISOString() 
    });
  });

  app.use("/api", router);
  app.use(errorHandler);

  const PORT = Number(env.PORT) || 3000;
  const HOST = "0.0.0.0";

  app.listen(PORT, HOST, () => {

  startScheduler();

    console.log(`\n📡 Server listening at http://${HOST}:${PORT}`);
    console.log(`🏥 Health check at http://${HOST}:${PORT}/api/health`);
    
    // Start Scheduler
    
    console.log("--------------------------------------------------");
  });
}

bootstrap().catch((err) => {
  console.error("❌ Fatal Bootstrap Error:", err);
  process.exit(1);
});
