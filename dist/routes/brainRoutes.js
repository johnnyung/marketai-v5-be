import { Router } from "express";
import { brainController } from "../controllers/brainController.js";
const router = Router();
router.post("/full-cycle", brainController.runFullCycle);
router.post("/ticker/:symbol", brainController.runTicker);
export default router;
