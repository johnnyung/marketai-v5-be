import { Router } from "express";
import brainRoutes from "./brainRoutes.js";
import ingestionRoutes from "./ingestionRoutes.js";
import diagnosticsRoutes from "./diagnosticsRoutes.js";
import diagnosticsSystemRoutes from "./diagnosticsSystemRoutes.js";
import opportunitiesRoutes from "./opportunitiesRoutes.js";
import schedulerRoutes from "./schedulerRoutes.js";

const router = Router();

// Core Business Logic
router.use("/brain", brainRoutes);
router.use("/ingest", ingestionRoutes);
router.use("/opportunities", opportunitiesRoutes);

// Observability & System
router.use("/diagnostics", diagnosticsRoutes);       // Basic logs (brain/ingest)
router.use("/diagnostics", diagnosticsSystemRoutes); // System metrics (system/scheduler/queue)
router.use("/scheduler", schedulerRoutes);

export default router;
