import { prisma } from "../db/prisma.js";
// Import from dedicated file to avoid conflicts
import { sanitizeOpportunity } from "../utils/sanitizeOpportunity.js";
import { ok, err } from "../utils/http.js";
import { logger } from "../utils/logger.js";
// prisma singleton imported
export const opportunitiesController = {
    async list(req, res) {
        try {
            const results = await prisma.opportunity.findMany({
                include: {
                    ticker: {
                        include: {
                            // Fetch the absolute latest bundle for this ticker to hydrate UI
                            analysisBundles: {
                                take: 1,
                                orderBy: { runAt: "desc" }
                            }
                        }
                    }
                },
                orderBy: { createdAt: "desc" },
                take: 50
            });
            return res.json(ok(results.map(sanitizeOpportunity)));
        }
        catch (e) {
            logger.error("Opportunities List Error", e);
            return res.status(500).json(err("Failed to fetch opportunities", e.message));
        }
    }
};
