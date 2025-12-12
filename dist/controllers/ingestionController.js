import { runAllActiveModules } from "../ingestion/pipelines/modulePipeline.js";
import { ok, err } from "../utils/http.js";
import { logger } from "../utils/logger.js";
function requireAdmin(req, res) {
    const configured = process.env.ADMIN_TOKEN;
    if (!configured) {
        logger.warn("ADMIN_TOKEN not set; denying protected ingestion endpoint.");
        res.status(503).json(err("Admin controls not configured"));
        return false;
    }
    const header = req.header("x-marketai-admin-token");
    if (!header || header !== configured) {
        res.status(401).json(err("Unauthorized"));
        return false;
    }
    return true;
}
export const ingestionController = {
    async run(req, res) {
        try {
            if (!requireAdmin(req, res))
                return;
            void runAllActiveModules();
            res.json(ok({ message: "Ingestion pipeline initiated" }));
        }
        catch (e) {
            logger.error("Ingestion Run Error", { error: e?.message ?? e });
            res.status(500).json(err("Ingestion start failed"));
        }
    },
};
