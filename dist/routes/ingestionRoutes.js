import { Router } from "express";
import { ingestionController } from "../controllers/ingestionController.js";
const router = Router();
// POST /api/ingest/run
router.post("/run", ingestionController.run);
export default router;
