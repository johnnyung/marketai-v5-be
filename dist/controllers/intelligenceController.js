import { prisma } from "../db/prisma.js";
import { sanitizeIntelligenceBundle } from "../utils/sanitize.js";
import { ok, err } from "../utils/http.js";
import { logger } from "../utils/logger.js";
// prisma singleton imported
export const intelligenceController = {
    async getLatestBySymbol(req, res) {
        try {
            const symbol = (req.params.symbol || "").toUpperCase();
            if (!symbol) {
                res.status(400).json(err("Symbol required"));
                return;
            }
            const ticker = await prisma.ticker.findUnique({
                where: { symbol },
            });
            if (!ticker) {
                res.status(404).json(err("Ticker not found"));
                return;
            }
            const bundle = await prisma.intelligenceBundle.findFirst({
                where: { tickerId: ticker.id },
                orderBy: { runAt: "desc" },
            });
            if (!bundle) {
                res.status(404).json(err("No intelligence bundle for this ticker"));
                return;
            }
            res.json(ok(sanitizeIntelligenceBundle(bundle)));
        }
        catch (e) {
            logger.error("Intelligence Get Error", { error: e?.message ?? e });
            res.status(500).json(err("Failed to fetch intelligence bundle"));
        }
    },
};
