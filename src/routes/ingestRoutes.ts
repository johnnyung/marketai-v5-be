import { Router } from "express";
import { ingestController } from "../controllers/ingestController.js";
export const ingestRoutes = Router();
ingestRoutes.post("/run-all", ingestController.runAll);
