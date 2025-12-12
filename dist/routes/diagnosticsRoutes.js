import { Router } from "express";
import { diagnosticsController } from "../controllers/diagnosticsController.js";
const router = Router();
// GET /api/diagnostics/ingestion
router.get("/ingestion", diagnosticsController.ingestionLogs);
// GET /api/diagnostics/brain
router.get("/brain", diagnosticsController.brainLogs);
// GET /api/diagnostics/meta
router.get("/meta", diagnosticsController.meta);
export default router;
