import { Router } from "express";
import { ingestController } from "../controllers/ingestController.js";

const router = Router();

// POST /api/ingest/run-all
router.post("/run-all", ingestController.runAll);

// GET /api/ingest/status
router.get("/status", (_req, res) => {
  res.json({ status: "ready" });
});

export default router;
