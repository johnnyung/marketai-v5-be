import { Router } from "express";
import { opportunitiesController } from "../controllers/opportunitiesController.js";

const router = Router();

// GET /api/opportunities
router.get("/", opportunitiesController.list);

export default router;
