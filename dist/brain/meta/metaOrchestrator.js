import { MetaEvaluator } from "./metaEvaluator.js";
import { ModelRouter } from "../../ai/modelRouter.js";
import { MetaPrompts } from "./metaPrompts.js";
import { logger } from "../../utils/logger.js";
export class MetaOrchestrator {
    static async runSelfImprovementCycle() {
        logger.info("🧠 Running Meta-AI Self-Improvement Cycle...");
        try {
            const metrics = await MetaEvaluator.evaluateRecentPerformance();
            const prompt = MetaPrompts.selfImprovement(metrics);
            // Ask AI for advice
            const response = await ModelRouter.call({ prompt });
            logger.info("Meta-AI Report Generated", {
                provider: response.provider,
                report: response.content.substring(0, 100) + "..."
            });
            // In a full implementation, save this report to DB
        }
        catch (e) {
            logger.error("Meta-AI Cycle Failed", e);
        }
    }
}
