import { Request, Response } from "express";
import { runAllActiveModules } from "@/ingestion/pipelines/modulePipeline.js";
export const ingestController = {
  runAll: async (req: Request, res: Response) => {
    runAllActiveModules();
    res.json({ status: "running" });
  }
};
