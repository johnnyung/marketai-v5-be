function safeJsonParse(data, fallback) {
    if (!data)
        return fallback;
    if (typeof data !== 'string')
        return data;
    try {
        return JSON.parse(data);
    }
    catch (e) {
        console.error("JSON Parse Error in Sanitizer:", e);
        return fallback;
    }
}
export function sanitizeOpportunity(o) {
    // Extract latest bundle if available via relation
    const bundle = o.ticker?.analysisBundles?.[0];
    let intelligence = null;
    if (bundle) {
        const signals = safeJsonParse(bundle.signals, {});
        const defaultPlan = {
            action: "HOLD",
            entry: 0,
            target: 0,
            stop: 0,
            rationale: "Analysis Pending"
        };
        const plan = safeJsonParse(bundle.summary, defaultPlan);
        intelligence = {
            compositeScore: Number(bundle.compositeScore),
            riskScore: Number(bundle.riskScore || 0),
            regime: "unknown",
            signals: signals,
            tradePlan: plan
        };
    }
    return {
        id: o.id,
        tickerId: o.tickerId,
        symbol: o.ticker?.symbol ?? "",
        score: Number(o.score),
        category: o.category,
        rationale: o.rationale,
        catalysts: o.catalysts || [],
        createdAt: o.createdAt?.toISOString?.() || "",
        intelligence: intelligence
    };
}
