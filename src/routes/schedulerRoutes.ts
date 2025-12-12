import { Router } from "express";
import { schedulerController } from "../controllers/schedulerController.js";

const router = Router();

// POST /api/scheduler/trigger
// Body: { "job": "ingestion" | "brain" }
router.post("/trigger", schedulerController.runBrain);

export default router;
