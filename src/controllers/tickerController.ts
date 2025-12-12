import { prisma } from "../db/prisma.js";
import { Request, Response } from "express";
import { sanitizeTicker } from "../utils/sanitize.js";
import { ok, err } from "../utils/http.js";
import { logger } from "../utils/logger.js";

// prisma singleton imported

export const tickerController = {
  async list(req: Request, res: Response) {
    try {
      const tickers = await prisma.ticker.findMany({
        where: { isActive: true },
        orderBy: { symbol: "asc" },
      });
      res.json(ok(tickers.map(sanitizeTicker)));
    } catch (e: any) {
      logger.error("Ticker List Error", { error: e?.message ?? e });
      res.status(500).json(err("Failed to fetch tickers"));
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const symbol = (req.params.symbol || "").toUpperCase();
      if (!symbol) {
        res.status(400).json(err("Symbol required"));
        return;
      }

      const ticker = await prisma.ticker.findUnique({
        where: { symbol },
      });

      if (!ticker) {
        res.status(404).json(err("Ticker not found"));
        return;
      }

      res.json(ok(sanitizeTicker(ticker)));
    } catch (e: any) {
      logger.error("Ticker Get Error", { error: e?.message ?? e });
      res.status(500).json(err("Failed to fetch ticker"));
    }
  },
};
