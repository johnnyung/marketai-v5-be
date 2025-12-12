import { prisma } from "../db/prisma.js";
import { ok, err } from "../utils/http.js";
import { logger } from "../utils/logger.js";
import { MetaEvaluator } from "../brain/meta/metaEvaluator.js";
// prisma singleton imported
export const diagnosticsController = {
    async ingestionLogs(req, res) {
        try {
            const logs = await prisma.ingestionLog.findMany({
                orderBy: { startedAt: "desc" },
                take: 50,
            });
            res.json(ok(logs));
        }
        catch (e) {
            logger.error("Diagnostics Ingestion Error", { error: e?.message ?? e });
            res.status(500).json(err("Failed to load ingestion logs"));
        }
    },
    async brainLogs(req, res) {
        try {
            const logs = await prisma.intelligenceBundle.findMany({
                orderBy: { runAt: "desc" },
                take: 50,
                include: { ticker: true },
            });
            res.json(ok(logs));
        }
        catch (e) {
            logger.error("Diagnostics Brain Error", { error: e?.message ?? e });
            res.status(500).json(err("Failed to load brain logs"));
        }
    },
    async meta(req, res) {
        try {
            const report = await MetaEvaluator.evaluateRecentPerformance();
            res.json(ok(report));
        }
        catch (e) {
            logger.error("Meta Diagnostics Error", { error: e?.message ?? e });
            res.status(500).json(err("Meta diagnostics failed"));
        }
    },
};
