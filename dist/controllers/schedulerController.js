import { BrainOrchestrator } from "../brain/core/brainOrchestrator.js";
import { ok, err } from "../utils/http.js";
export const schedulerController = {
    runBrain: async (req, res) => {
        try {
            // ✅ FIX: runCycle now requires BrainOptions (object), not "full"
            BrainOrchestrator.runCycle({ mode: "full" });
            return res.json(ok({ status: "queued", mode: "full" }));
        }
        catch (e) {
            return res.status(500).json(err("Failed to start brain run", e?.message));
        }
    }
};
