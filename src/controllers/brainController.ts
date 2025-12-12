import { Request, Response } from "express";
// FIX: Relative path, NO alias
import { BrainOrchestrator } from "../brain/core/brainOrchestrator.js";
import { prisma } from "../db/prisma.js";
import { ok, err } from "../utils/http.js";

// prisma singleton imported

export const brainController = {
  // Full Cycle (Scheduled or Manual)
  runFullCycle: async (req: Request, res: Response) => {
    const { force, dryRun } = req.body;
    // Fire and forget
    BrainOrchestrator.runCycle({
      mode: "full",
      force: force === true,
      dryRun: dryRun === true
    });
    res.json(ok({ status: "running", mode: "full", force, dryRun }));
  },

  // Ticker Specific (On-demand)
  runTicker: async (req: Request, res: Response) => {
    const { symbol } = req.params;
    const { force, dryRun } = req.body;
    
    if (!symbol) return res.status(400).json(err("Symbol required"));

    try {
      await BrainOrchestrator.runCycle({
        mode: "ticker",
        tickerSymbol: symbol,
        force: force === true,
        dryRun: dryRun === true
      });
      res.json(ok({ status: "complete", symbol }));
    } catch (e: any) {
      res.status(500).json(err("Brain Ticker Run Failed", e.message));
    }
  },

  getOpportunities: async (req: Request, res: Response) => {
    const opps = await prisma.opportunity.findMany({
      take: 20,
      orderBy: { score: 'desc' },
      include: { ticker: true }
    });
    res.json(ok(opps));
  }
};
