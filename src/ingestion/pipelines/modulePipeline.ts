import { prisma } from "../../db/prisma.js";
import { ALL_MODULES } from "../manifestFull.js";
import { IngestionContext } from "../types.js";
import { chunk } from "../utils/chunker.js";
import { logIngestionRun } from "../utils/ingestionLogger.js";

// prisma singleton imported
export async function runAllActiveModules() {
  const ctx: IngestionContext = { prisma, logger: console, chunker: chunk };
  for (const mod of ALL_MODULES) {
    const res = await mod.run(ctx);
    await logIngestionRun(res);
  }
}
