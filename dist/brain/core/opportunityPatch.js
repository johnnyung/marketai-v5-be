// This file is injected into BrainOrchestrator at build time.
// It corrects Opportunity creation so that symbol is included.
export function createOpportunityPatch(t, fusion, plan, aiText) {
    return {
        tickerId: t.id,
        symbol: t.symbol,
        score: fusion.compositeScore,
        category: "top_pick",
        rationale: aiText || plan.rationale,
        catalysts: []
    };
}
