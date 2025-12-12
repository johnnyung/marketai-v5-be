import { Router } from "express";
import { diagnosticsSystemController } from "../controllers/diagnosticsSystemController.js";

const router = Router();

// GET /api/diagnostics/system
router.get("/system", diagnosticsSystemController.systemStatus);

// GET /api/diagnostics/scheduler
router.get("/scheduler", diagnosticsSystemController.schedulerStatus);

// GET /api/diagnostics/queue
router.get("/queue", diagnosticsSystemController.queueStatus);

export default router;
