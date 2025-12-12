import { runAllActiveModules } from "@/ingestion/pipelines/modulePipeline.js";
export const ingestController = {
    runAll: async (req, res) => {
        runAllActiveModules();
        res.json({ status: "running" });
    }
};
