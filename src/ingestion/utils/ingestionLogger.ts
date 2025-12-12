import { prisma } from "../../db/prisma.js";
import { logger } from "../../utils/logger.js";

// prisma singleton imported

export interface LogIngestionParams {
  module: string;
  status: "success" | "fail" | "partial";
  itemsFetched: number;
  itemsWritten: number;
  error?: string;
  category?: string;
}

export async function logIngestionRun(params: LogIngestionParams) {
  try {
    await prisma.ingestionLog.create({
      data: {
        module: params.module,
        category: params.category || "unknown",
        status: params.status,
        itemsFetched: params.itemsFetched,
        itemsWritten: params.itemsWritten,
        startedAt: new Date(), // Ideally pass start time, using now for simplicity
        error: params.error
      }
    });
    logger.info(`[INGEST] ${params.module} finished: ${params.status}`);
  } catch (e) {
    logger.error(`[INGEST] Failed to log ingestion run for ${params.module}`, e);
  }
}
