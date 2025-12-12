import { Request, Response } from "express";
import { ok } from "../utils/http.js";

export const healthController = {
  async get(req: Request, res: Response) {
    const uptime = process.uptime();
    const payload = {
      ok: true,
      uptimeSeconds: uptime,
      timestamp: new Date().toISOString(),
    };
    res.json(ok(payload));
  },
};
