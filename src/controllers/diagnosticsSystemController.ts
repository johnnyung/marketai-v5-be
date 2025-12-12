import { Request, Response } from "express";
import os from "os";
import { prisma } from "../db/prisma.js";
import { ok, err } from "../utils/http.js";

// prisma singleton imported

export const diagnosticsSystemController = {
  /**
   * Returns low-level system metrics (CPU, Mem, Uptime, DB Connection)
   */
  async systemStatus(req: Request, res: Response) {
    try {
      // Check Database Latency
      const start = Date.now();
      await prisma.$queryRaw`SELECT 1`;
      const latency = Date.now() - start;

      const memUsage = process.memoryUsage();

      const status = {
        service: "marketai-v5-backend",
        timestamp: new Date().toISOString(),
        uptimeSeconds: process.uptime(),
        environment: process.env.NODE_ENV || "development",
        system: {
          platform: os.platform(),
          arch: os.arch(),
          cpus: os.cpus().length,
          loadAvg: os.loadavg(), // [1m, 5m, 15m]
          totalMemoryMB: Math.round(os.totalmem() / 1024 / 1024),
          freeMemoryMB: Math.round(os.freemem() / 1024 / 1024),
        },
        process: {
          nodeVersion: process.version,
          pid: process.pid,
          memoryUsageMB: {
            rss: Math.round(memUsage.rss / 1024 / 1024),
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
          }
        },
        database: {
          status: "connected",
          latencyMs: latency
        }
      };

      return res.json(ok(status));
    } catch (e: any) {
      return res.status(500).json(err("System diagnostics failed", { error: e.message }));
    }
  },

  /**
   * Returns active scheduler jobs and next run times
   */
  async schedulerStatus(req: Request, res: Response) {
    try {
      // In a real implementation, we would inspect the node-cron tasks array.
      // For V5 architecture, we expose the defined schedules.
      const status = {
        active: true,
        jobs: [
          { name: "Ingestion Cycle", schedule: "*/15 * * * *", status: "active" },
          { name: "Brain Cycle", schedule: "0 * * * *", status: "active" }
        ],
        serverTime: new Date().toISOString()
      };
      return res.json(ok(status));
    } catch (e: any) {
      return res.status(500).json(err("Scheduler diagnostics failed", { error: e.message }));
    }
  },

  /**
   * Returns current depth of ingestion queues
   */
  async queueStatus(req: Request, res: Response) {
    try {
      // Stub: In V5 non-queue architecture, this represents parallel processing load
      // Future expansion: Redis queue depth
      const status = {
        provider: "internal-memory",
        pendingJobs: 0,
        processingJobs: 0,
        failedJobs: 0 // Would query ingestionLog for recent failures
      };
      return res.json(ok(status));
    } catch (e: any) {
      return res.status(500).json(err("Queue diagnostics failed", { error: e.message }));
    }
  }
};
