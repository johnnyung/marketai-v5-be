import type { PrismaClient } from "@prisma/client";
import type { CorrelationCandidate } from "../aiSynthesis/v1/types.js";

/**
 * Minimal candidate builder:
 * - groups IntelligenceBundle by tickerId
 * - emits TICKER_RECURRING candidates when a ticker has >1 bundles
 */
export async function getCorrelationCandidates(prisma: PrismaClient, take: number = 504): Promise<CorrelationCandidate[]> {
  // If IntelligenceBundle model isn't available, return empty (safe).
  const hasBundles = (prisma as any).intelligenceBundle !== undefined;
  if (!hasBundles) return [];

  const rows = await (prisma as any).intelligenceBundle.groupBy({
    by: ["tickerId"],
    _count: { _all: true },
    orderBy: { _count: { _all: "desc" } },
    take: Math.max(1, take)
  });

  const out: CorrelationCandidate[] = [];
  for (const r of rows) {
    const c = Number(r?._count?._all ?? 0);
    if (!r?.tickerId) continue;
    if (c <= 1) continue;

    out.push({
      type: "TICKER_RECURRING",
      description: "Ticker " + String(r.tickerId) + " has " + String(c) + " bundles",
      count: c
    });
  }

  return out.slice(0, take);
}
