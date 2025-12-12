export function sanitizeOpportunity(o: any) {
  return {
    id: o.id,
    tickerId: o.tickerId,
    symbol: o.ticker?.symbol ?? "",
    score: typeof o.score === "number" ? o.score : Number(o.score ?? 0),
    category: o.category ?? "unknown",
    rationale: o.rationale ?? "",
    catalysts: Array.isArray(o.catalysts) ? o.catalysts : [],
    createdAt: o.createdAt?.toISOString?.() || "",
  };
}

export function sanitizeIntelligenceBundle(b: any) {
  return {
    tickerId: b.tickerId,
    runAt: b.runAt?.toISOString?.() || "",
    compositeScore: typeof b.compositeScore === "number"
      ? b.compositeScore
      : Number(b.compositeScore ?? 0),
    signals: b.signals || {},
    summary: b.summary ?? "",
  };
}

export function sanitizeTicker(t: any) {
  return {
    id: t.id,
    symbol: t.symbol,
    name: t.name ?? null,
    assetClass: t.assetClass,
    isActive: t.isActive,
  };
}
