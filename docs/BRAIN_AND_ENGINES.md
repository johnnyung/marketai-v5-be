# MarketAI-v5 — Brain & Engines Specification

The MarketAI Brain is a set of **deterministic engines** + an AI narrative layer.

## 3.1 Deterministic Engines (Minimum Required)

The following engines MUST exist and remain independent:

1. fundamentals
2. technical
3. sentiment
4. macro
5. insider
6. institutional
7. options
8. crypto
9. opportunity
10. risk
11. correlation
12. anomaly
13. catalyst
14. gamma
15. divergence
16. portfolio
17. valuation
18. momentum

Additional engines may be added later but may not replace these.

### Engine Rules

- Inputs: derived from ingestion context (DB data only).
- Outputs:
  - \`score\` in [0–100] (nullable if truly missing).
  - \`bias\`: bullish / bearish / neutral / unknown.
  - \`missing\`: boolean.
  - \`metadata\`: compact JSON with underlying metrics.

- Engines MUST:
  - Use real numeric math.
  - Never call LLMs.
  - Never return dummy scores for convenience.

## 3.2 Fusion Engine

FusionEngine:

- Accepts array of EngineSignalResult per ticker.
- Weights engines (context-aware in future).
- Outputs:
  - \`compositeScore\` (0–100)
  - \`riskScore\` (derived)
  - \`regime\` (placeholder string now, richer later)

No placeholder output; if no engines have usable scores, compositeScore may default to neutral (e.g. 50) but must be documented.

## 3.3 Trade Architect (PHFA)

TradeArchitect:

- Inputs:
  - compositeScore
  - currentPrice
- Outputs:
  - \`action\`: BUY / SELL / HOLD
  - \`entry\`: numeric
  - \`target\`: numeric
  - \`stop\`: numeric
  - \`rationale\`: short text

Trade plans are deterministic and must be reproducible.

## 3.4 Brain Orchestrator

BrainOrchestrator responsibilities:

1. Determine ticker universe (full vs single symbol).
2. Build BrainTickerContext via DB (Prisma).
3. Run all engines from registry.
4. Fuse to compositeScore.
5. Generate trade plan.
6. (Optionally) call LLM for BUY narratives only.
7. Persist:
   - IntelligenceBundle
   - Opportunity (for BUY cases, category top_pick/momentum/etc.)

Orchestrator must be resilient:
- Try/catch per ticker.
- Log errors but continue processing.
- Run Meta-AI cycle after full runs.

## 3.5 Meta-AI

Meta-AI evaluates system performance:

- Compares past composite scores vs realized price movement.
- Flags drift.
- Suggests weight changes (via LLM).
- Writes its findings to logs/DB (future addition).

LLMs are allowed here, but only for text recommendations and heuristics, not for overriding deterministic scores.

This file defines how the Brain must behave and evolve. All new code for engines, fusion, orchestration, and Meta-AI must align with this spec.
