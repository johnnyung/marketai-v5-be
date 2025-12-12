import { logger } from "./logger.js";
export const audit = {
    logBrainCycle: (mode, tickerCount, durationMs) => {
        logger.info("🧠 Brain Cycle Audit", {
            event: "BRAIN_CYCLE_COMPLETE",
            mode,
            processed: tickerCount,
            duration: `${durationMs}ms`,
            timestamp: new Date().toISOString()
        });
    },
    logIngestionCycle: (moduleName, itemsFetched, itemsWritten, status) => {
        logger.info("📥 Ingestion Audit", {
            event: "INGESTION_MODULE_COMPLETE",
            module: moduleName,
            fetched: itemsFetched,
            written: itemsWritten,
            status
        });
    },
    logAIUsage: (provider, tokens, cost) => {
        logger.info("🤖 AI Cost Audit", {
            event: "AI_GENERATION",
            provider,
            tokens,
            estimatedCost: cost
        });
    }
};
