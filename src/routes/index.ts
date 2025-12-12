import { Router } from "express";

import healthRoutes from "./health.js";
import diagnosticsRoutes from "./diagnosticsRoutes.js";
import diagnosticsSystemRoutes from "./diagnosticsSystemRoutes.js";
import ingestionRoutes from "./ingestionRoutes.js";
import ingestRoutes from "./ingestRoutes.js";
import brainRoutes from "./brainRoutes.js";
import schedulerRoutes from "./schedulerRoutes.js";
import opportunitiesRoutes from "./opportunitiesRoutes.js";

const router = Router();

router.use(healthRoutes);
router.use("/diagnostics", diagnosticsRoutes);
router.use(diagnosticsSystemRoutes);
router.use("/ingestion", ingestionRoutes);
router.use("/ingest", ingestRoutes);
router.use(brainRoutes);
router.use(schedulerRoutes);
router.use(opportunitiesRoutes);

export default router;
