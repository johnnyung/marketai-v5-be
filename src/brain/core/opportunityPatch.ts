// This file is injected into BrainOrchestrator at build time.
// It corrects Opportunity creation so that symbol is included.
export function createOpportunityPatch(t: any, fusion: any, plan: any, aiText: string) {
  return {
    tickerId: t.id,
    symbol: t.symbol,
    score: fusion.compositeScore,
    category: "top_pick",
    rationale: aiText || plan.rationale,
    catalysts: []
  };
}
