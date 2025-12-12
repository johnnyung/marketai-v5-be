import cron from "node-cron";
import { BrainOrchestrator } from "../brain/core/brainOrchestrator.js";
import { logger } from "../utils/logger.js";

export function startScheduler() {
  // Example: every 15 minutes
  cron.schedule("*/15 * * * *", async () => {
    try {
      logger.info("⏱️  Cron: Brain full-cycle starting...");
      // ✅ FIX: runCycle now requires BrainOptions (object)
      await BrainOrchestrator.runCycle({ mode: "full" });
      logger.info("✅ Cron: Brain full-cycle completed.");
    } catch (e) {
      logger.error("❌ Cron: Brain run failed", e);
    }
  });

  logger.info("🗓️  Scheduler initialized");
}
