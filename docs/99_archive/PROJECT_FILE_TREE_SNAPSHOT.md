# MarketAI V5 — Full Project File Tree Snapshot

Generated (UTC): Thu 18 Dec 2025 04:20:36 UTC

Scope: Entire marketai-v5 repository

```
/Users/animationtech/Desktop/marketai-v5/backend
├── .dockerignore
├── .env
├── .gitignore
├── .marketai_locked
├── .verify_ingestion_dry_run.log
├── Dockerfile
├── docs
│   ├── _archive
│   │   ├── run_20251217_161450
│   │   │   ├── DOC_UPDATE_PLAN.md
│   │   │   ├── FINAL_HANDOFF.md
│   │   │   ├── PHASE_STATUS.md.bak.20251212_185229
│   │   │   └── RUNTIME_SNAPSHOT_20251212_185229.md
│   │   └── run_20251217_161720
│   │       ├── AI_FRONTEND_FAILURE_LOG.md
│   │       ├── ANTI_DRIFT_LOCKS.md
│   │       ├── CLAUDE_UI_HANDOFF_PROTOCOL.md
│   │       ├── CLAUDE_UI_RECOVERY_HANDOFF.md
│   │       ├── FMP_GOVERNMENT_CONTRACTS_DB_ENABLED.md
│   │       ├── FMP_GOVERNMENT_CONTRACTS_ENDPOINT.md
│   │       ├── FMP_GOVERNMENT_CONTRACTS_SCHEDULER.md
│   │       ├── INTEGRATION_LOCK_RULES.md
│   │       ├── PHASE_2_INGESTION_RULES.md
│   │       ├── PHASE1_FREEZE.md
│   │       └── PROJECT_FILE_TREE.md
│   ├── AI_BOOT_BUNDLE.md
│   ├── AI_BOOTSTRAP_README.md
│   ├── AI_BOOTSTRAP.md
│   ├── AI_CHAT_BOOTSTRAP.md
│   ├── AI_CHAT_HANDOFF_TEMPLATE.md
│   ├── AI_CHAT_LIFECYCLE.md
│   ├── AI_CONTEXT.md
│   ├── AI_DRIFT_BOUNDARIES.txt
│   ├── AI_DRIFT_DUPLICATES.txt
│   ├── AI_DRIFT_REPORT_RAW.txt
│   ├── AI_DRIFT_REPORT_SUMMARY.txt
│   ├── AI_INGESTION_BOOTSTRAP.md
│   ├── AI_INTELLIGENCE_CANON.md
│   ├── AI_PREFLIGHT_CHECKLIST.md
│   ├── AI_READ_ORDER.md
│   ├── ARCHITECTURE_OVERVIEW.md
│   ├── BACKEND_CONTRACT_LOCKED.md
│   ├── BRAIN_AND_ENGINES.md
│   ├── CALENDAR_SIGNAL_SEMANTICS_CANON.md
│   ├── CALENDAR_SIGNAL_WEIGHTING_RULES.md
│   ├── DATA_SOURCES_AND_INGESTION.md
│   ├── DATABASE_CANON.md
│   ├── DOC_AUTHORITY_MAP.md
│   ├── DOC_CONSOLIDATION_EXECUTION_LOG.md
│   ├── DOCS_AVAILABLE_INDEX.md
│   ├── ENGINE_ORDER_INDEPENDENCE_CANON.md
│   ├── FAILURE_PLAYBOOK.md
│   ├── FILESYSTEM_CANON.md
│   ├── FILESYSTEM_INDEX.md
│   ├── FRONTEND_AND_UI_SPEC.md
│   ├── FRONTEND_BACKEND_CONTRACT.md
│   ├── FRONTEND_INTEGRATION_GUIDE.md
│   ├── FRONTEND_INTEGRATION_RULES.md
│   ├── HANDOFF_TEMPLATE.md
│   ├── INGESTION_CANON.md
│   ├── INGESTION_REGISTRY_RUNTIME_SEMANTICS.md
│   ├── INGESTION_SOURCES_CANON.md
│   ├── INGESTION_STATUS_CANON.md
│   ├── INTELLIGENCE_ENGINE_TAXONOMY.md
│   ├── MARKETAI_V5_CANONICAL_STATE.md
│   ├── NEXT_EXECUTION_PLAN.md
│   ├── OPPORTUNITY_OBJECT_CANON.md
│   ├── OPPORTUNITY_SILENCE_REASON_CODES.md
│   ├── PARTIAL_DATA_TOLERANCE_RULES.md
│   ├── PHASE_2_CHECKPOINT.md
│   ├── PHASE_3_CALENDAR_GUARDS.md
│   ├── PHASE_3_CHANGE_CONTROL_PROTOCOL.md
│   ├── PHASE_3_DATA_STALENESS_POLICY.md
│   ├── PHASE_3_ENFORCEMENT_BOUNDARIES.md
│   ├── PHASE_3_EXECUTION_FLOW.md
│   ├── PHASE_3_EXECUTION_GATES.md
│   ├── PHASE_3_FAILURE_MODES.md
│   ├── PHASE_3_GATE_1_DEFINITION.md
│   ├── PHASE_3_GATE_1_NON_GOALS.md
│   ├── PHASE_3_GATE_1_REVIEW_CHECKLIST.md
│   ├── PHASE_3_INTELLIGENCE_OVERVIEW.md
│   ├── PHASE_3_MASTER_HANDOFF.md
│   ├── PHASE_3_NON_GOALS.md
│   ├── PHASE_3_ORDER_AND_COMPLETENESS_GUARDS.md
│   ├── PHASE_3_POSTMORTEM_AND_INVARIANTS.md
│   ├── PHASE_3_READ_ONLY_DISCIPLINE_CANON.md
│   ├── PHASE_3_READINESS_CHECKLIST.md
│   ├── PHASE_3_SIGNAL_AND_SILENCE_GUARDS.md
│   ├── PHASE_3_SUCCESS_CRITERIA.md
│   ├── PHASE_4_ALLOWED_OBJECTIVE_CLASSES.md
│   ├── PHASE_4_CHANGELOG.md
│   ├── PHASE_4_ENTRY_READINESS_CHECKLIST.md
│   ├── PHASE_4_EXECUTION_GUARDRAILS.md
│   ├── PHASE_4_INDEX.md
│   ├── PHASE_4_MONITORING_AND_DIAGNOSTICS.md
│   ├── PHASE_4_NON_GOALS_AND_BOUNDARIES.md
│   ├── PHASE_4_OPPORTUNITY_QUALIFICATION.md
│   ├── PHASE_STATUS.md
│   ├── PROJECT_FILE_TREE_SNAPSHOT.md
│   ├── PROJECT_FILE_TREE_SNAPSHOT.md.bak.md
│   ├── PROMPT_PLAYBOOK.md
│   ├── RISK_AND_GUARDRAILS.md
│   ├── ROADMAP_AND_APB_RULES.md
│   ├── ROUTE_MATRIX.md
│   ├── SIGNAL_SCORING_MODEL.md
│   └── SIGNAL_STATE_SEMANTICS_CANON.md
├── package-lock.json
├── package.json
├── patch_schema.js
├── prisma
│   ├── migrations
│   │   ├── 00000000000000_baseline
│   │   │   └── migration.sql
│   │   ├── 20251212202810_init
│   │   │   └── migration.sql
│   │   ├── 20251215001135_add_news_article
│   │   │   └── migration.sql
│   │   ├── 20251215001918_add_gov_models
│   │   │   └── migration.sql
│   │   ├── 20251215003005_add_reddit_posts
│   │   │   └── migration.sql
│   │   ├── 20251215004729_add_signal_table
│   │   │   └── migration.sql
│   │   ├── 20251215184408_add_market_correlation
│   │   │   └── migration.sql
│   │   ├── 20251216225031_add_brain_run
│   │   │   └── migration.sql
│   │   ├── 20251217054346_add_government_contracts
│   │   │   └── migration.sql
│   │   ├── 20251217054718_add_fmp_government_contracts
│   │   │   └── migration.sql
│   │   ├── 20251217171807_add_fmp_earnings_calendar
│   │   │   └── migration.sql
│   │   ├── 20251217172925_add_fmp_political_trades
│   │   │   └── migration.sql
│   │   ├── 20251217173736_add_fmp_lobbying_disclosures
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── migrations_legacy
│   │   ├── 20251212202810_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── prisma_backup_1765909986
│   ├── migrations
│   │   ├── 20251212202810_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── scripts
│   ├── _internal
│   │   └── script_lifecycle.sh
│   ├── 10_audit_repo_tree_and_docs.sh
│   ├── archive_consolidation.sh
│   ├── audit_adapter_stubs.sh
│   ├── enable_live_ingestion_flags.sh
│   ├── enable_live_tier1_tier2_v2.sh
│   ├── enable_live_tier1_tier2.sh
│   ├── enable_registry_tier1_tier2.sh
│   ├── guards
│   │   ├── fix_script_lifecycle_phase_detection.sh
│   │   └── quarantine_external_scripts.sh
│   ├── inspect_tier1_tier2_sources.sh
│   ├── live_run_tier1_tier2_direct.sh
│   ├── live_run_tier1_tier2_v3.sh
│   ├── live_run_tier1_tier2_v4.sh
│   ├── live_run_tier1_tier2_v5.sh
│   ├── mount_brain_autopilot_route.js
│   ├── patch_adapters_tier1_tier2_enable_live.sh
│   ├── patch_adapters_tier1_tier2_fix_ctx.sh
│   ├── patch_adapters_tier1_tier2_fix_types.sh
│   ├── patch_enable_live_tier1_tier2.sh
│   ├── patch_enable_metrics_category_v2.sh
│   ├── patch_enable_metrics_category.sh
│   ├── patch_fmpKeyMetrics_fix_name.sh
│   ├── patch_fmpKeyMetrics_safe_write.sh
│   ├── patch_fmpKeyMetrics_upsert.sh
│   ├── patch_fmpKeyMetrics_use_ingest_date.sh
│   ├── probe_fmp_key_metrics_raw.sh
│   ├── README.md
│   ├── registry
│   ├── run_module_pipeline_live.sh
│   ├── scaffold
│   ├── snapshot_full_project_tree.sh
│   ├── validators
│   └── verify
│       ├── 00_env_check.sh
│       ├── 01_build_backend.sh
│       ├── 02_registry_dump.sh
│       ├── 03_ingestion_dry_run.sh
│       ├── 04_db_table_estimates.sh
│       ├── 05_prisma_status.sh
│       ├── 20_probe_fmp_stable.sh
│       ├── 21_probe_polygon.sh
│       └── 99_run_all_verifications.sh
├── src
│   ├── ai
│   │   ├── modelRouter.ts
│   │   ├── prompts
│   │   │   └── basePrompts.ts
│   │   └── types.ts
│   ├── brain
│   │   ├── autopilot
│   │   │   ├── portfolioAutoRun.ts
│   │   │   └── state.ts
│   │   ├── core
│   │   │   ├── brainOrchestrator.ts
│   │   │   ├── engineRegistry.ts
│   │   │   ├── engineTypes.ts
│   │   │   ├── opportunityPatch.ts
│   │   │   └── tickerContextBuilder.ts
│   │   ├── engines
│   │   │   ├── anomalyEngine.ts
│   │   │   ├── catalystEngine.ts
│   │   │   ├── correlationEngine.ts
│   │   │   ├── cryptoEngine.ts
│   │   │   ├── divergenceEngine.ts
│   │   │   ├── fundamentalsEngine.ts
│   │   │   ├── gammaEngine.ts
│   │   │   ├── insiderEngine.ts
│   │   │   ├── institutionalEngine.ts
│   │   │   ├── macroEngine.ts
│   │   │   ├── momentumEngine.ts
│   │   │   ├── opportunityEngine.ts
│   │   │   ├── optionsEngine.ts
│   │   │   ├── portfolioEngine.ts
│   │   │   ├── riskEngine.ts
│   │   │   ├── sentimentEngine.ts
│   │   │   ├── technicalEngine.ts
│   │   │   └── valuationEngine.ts
│   │   ├── ensemble
│   │   │   ├── portfolioFusion.ts
│   │   │   └── v5LitePortfolio.ts
│   │   ├── fusion
│   │   │   └── fusionEngine.ts
│   │   ├── meta
│   │   │   ├── evaluators.ts
│   │   │   ├── metaBrain.ts
│   │   │   ├── metaEvaluator.ts
│   │   │   ├── metaOrchestrator.ts
│   │   │   └── metaPrompts.ts
│   │   ├── schema
│   │   │   ├── contracts.ts
│   │   │   └── types.ts
│   │   ├── trade
│   │   │   └── phfa.ts
│   │   └── vendorProxy
│   │       └── brainV2Proxy.ts
│   ├── config
│   │   └── env.ts
│   ├── controllers
│   │   ├── brainController.ts
│   │   ├── diagnosticsController.ts
│   │   ├── diagnosticsSystemController.ts
│   │   ├── healthController.ts
│   │   ├── ingestController.ts
│   │   ├── ingestionController.ts
│   │   ├── intelligenceController.ts
│   │   ├── opportunitiesController.ts
│   │   ├── schedulerController.ts
│   │   └── tickerController.ts
│   ├── cron
│   │   └── scheduler.ts
│   ├── db
│   │   ├── index.ts
│   │   └── prisma.ts
│   ├── ingestion
│   │   ├── adapters
│   │   │   ├── bundles
│   │   │   │   └── intelligenceBundles.ts
│   │   │   ├── crypto
│   │   │   │   └── polygonCrypto.ts
│   │   │   ├── fmpFundamentals.ts
│   │   │   ├── fmpInsider.ts
│   │   │   ├── fmpInstitutional.ts
│   │   │   ├── fmpKeyMetrics.ts
│   │   │   ├── fmpMacro.ts
│   │   │   ├── fmpNews.ts
│   │   │   ├── fundamentals
│   │   │   │   ├── fmpFundamentals.ts
│   │   │   │   └── fmpFundamentals.ts.bak
│   │   │   ├── insider
│   │   │   │   └── fmpInsider.ts
│   │   │   ├── institutional
│   │   │   │   └── fmpInstitutional.ts
│   │   │   ├── macro
│   │   │   │   └── fmpMacro.ts
│   │   │   ├── metrics
│   │   │   │   ├── fmpKeyMetrics.ts
│   │   │   │   └── fmpKeyMetrics.ts.bak
│   │   │   ├── news
│   │   │   │   └── fmpNews.ts
│   │   │   ├── opportunities
│   │   │   │   └── opportunityEngine.ts
│   │   │   ├── options
│   │   │   │   └── polygonOptionsFlow.ts
│   │   │   ├── polygonPrices.ts
│   │   │   ├── prices
│   │   │   │   ├── polygonPrices.ts
│   │   │   │   └── polygonPrices.ts.bak
│   │   │   ├── sp500Universe.ts
│   │   │   └── universe
│   │   │       ├── sp500Universe.ts
│   │   │       └── sp500Universe.ts.bak
│   │   ├── fmpDividendCalendar.ts
│   │   ├── fmpEarningsCalendar.ts
│   │   ├── manifestFull.ts
│   │   ├── modules
│   │   │   ├── bundles
│   │   │   │   └── intelligenceBundles.ts
│   │   │   ├── corporate
│   │   │   │   ├── fmpDividendCalendar.ts
│   │   │   │   ├── fmpEarningsCalendar.ts
│   │   │   │   └── fmpIPOCalendar.ts
│   │   │   ├── crypto
│   │   │   │   └── polygonCrypto.ts
│   │   │   ├── fundamentals
│   │   │   │   └── fmpFundamentals.ts
│   │   │   ├── government
│   │   │   │   ├── fmpGovernmentContracts.adapter.ts
│   │   │   │   ├── fmpGovernmentContracts.ts
│   │   │   │   └── index.ts
│   │   │   ├── insider
│   │   │   │   └── fmpInsider.ts
│   │   │   ├── institutional
│   │   │   │   └── fmpInstitutional.ts
│   │   │   ├── macro
│   │   │   │   ├── fmpEconomicCalendar.ts
│   │   │   │   └── fmpMacro.ts
│   │   │   ├── metrics
│   │   │   │   ├── fmpKeyMetrics.ts
│   │   │   │   └── fmpKeyMetrics.ts.bak
│   │   │   ├── news
│   │   │   │   └── fmpNews.ts
│   │   │   ├── opportunities
│   │   │   │   └── opportunityEngine.ts
│   │   │   ├── opportunity
│   │   │   │   └── opportunityEngine.ts
│   │   │   ├── options
│   │   │   │   └── polygonOptionsFlow.ts
│   │   │   ├── political
│   │   │   │   ├── fmpLobbyingDisclosures.ts
│   │   │   │   ├── fmpLobbyingDisclosures.ts.bak
│   │   │   │   ├── fmpPoliticalTrades.ts
│   │   │   │   └── index.ts
│   │   │   ├── prices
│   │   │   │   └── polygonPrices.ts
│   │   │   └── universe
│   │   │       └── sp500Universe.ts
│   │   ├── pipelines
│   │   │   ├── modulePipeline.ts
│   │   │   ├── modulePipeline.ts.bak
│   │   │   └── runIngestionPipeline.ts
│   │   ├── registry.ts
│   │   ├── runIngestionDryRun.ts
│   │   ├── scheduler.ts
│   │   ├── schedulers
│   │   │   ├── fmpDividendCalendar.scheduler.ts
│   │   │   └── fmpEarningsCalendar.scheduler.ts
│   │   ├── types.ts
│   │   └── utils
│   │       ├── chunker.ts
│   │       ├── ingestionLogger.ts
│   │       ├── liveOverride.ts
│   │       └── retrier.ts
│   ├── middleware
│   │   ├── errorHandler.ts
│   │   └── requestLogger.ts
│   ├── modules
│   │   ├── corporate
│   │   └── political
│   │       ├── fmpLobbyingDisclosures.ts
│   │       └── fmpPoliticalTrades.ts
│   ├── phase3
│   │   ├── diagnostics
│   │   ├── engines
│   │   │   └── Phase3Engine.ts
│   │   ├── guards
│   │   │   ├── applyCalendarDecay.ts
│   │   │   ├── emitSilence.ts
│   │   │   └── validateSignalState.ts
│   │   ├── models
│   │   │   ├── ConfidenceBand.ts
│   │   │   ├── Opportunity.ts
│   │   │   ├── ScoreContribution.ts
│   │   │   ├── SignalState.ts
│   │   │   └── SilenceReason.ts
│   │   ├── opportunity
│   │   │   └── synthesizeOpportunity.ts
│   │   ├── risk
│   │   │   ├── evaluateRisk.ts
│   │   │   └── RiskFlag.ts
│   │   ├── runtime
│   │   │   ├── runPhase3Gate1.ts
│   │   │   ├── runPhase3Gate2.ts
│   │   │   └── runPhase3Gate3.ts
│   │   └── scoring
│   │       ├── aggregateConfidence.ts
│   │       └── scoreSignals.ts
│   ├── phase4
│   │   ├── composer
│   │   │   ├── __tests__
│   │   │   │   └── composeOpportunity.test.ts
│   │   │   └── composeOpportunity.ts
│   │   ├── diagnostics
│   │   │   ├── __tests__
│   │   │   │   ├── diagnosticsSummary.test.ts
│   │   │   │   └── generateDiagnosticsMetrics.test.ts
│   │   │   ├── diagnosticsSummary.ts
│   │   │   └── generateDiagnosticsMetrics.ts
│   │   ├── explanation
│   │   │   ├── __tests__
│   │   │   │   ├── explainOpportunity.test.ts
│   │   │   │   └── explanationSummary.test.ts
│   │   │   ├── explainOpportunity.ts
│   │   │   └── explanationSummary.ts
│   │   ├── models
│   │   │   ├── DiagnosticsMetrics.ts
│   │   │   ├── OpportunityExplanation.ts
│   │   │   └── OpportunityQualification.ts
│   │   └── qualification
│   │       ├── __tests__
│   │       │   └── qualifyOpportunity.test.ts
│   │       └── qualifyOpportunity.ts
│   ├── registry.ts
│   ├── routes
│   │   ├── adminRoutes.ts
│   │   ├── brainAutopilotRoutes.ts
│   │   ├── brainEnsembleRoutes.ts
│   │   ├── brainEnsembleRoutes.ts.bak
│   │   ├── brainMetaRoutes.ts
│   │   ├── brainPortfolioRun.ts
│   │   ├── brainRoutes.ts
│   │   ├── brainRunsRoutes.ts
│   │   ├── diagnosticsAggregate.ts
│   │   ├── diagnosticsRoutes.ts
│   │   ├── diagnosticsSystemRoutes.ts
│   │   ├── health.ts
│   │   ├── index.ts
│   │   ├── ingestionRegistryRoutes.ts
│   │   ├── ingestionRoutes.ts
│   │   ├── ingestionStatus.ts
│   │   ├── ingestRoutes.ts
│   │   ├── opportunities.ts
│   │   ├── opportunitiesRead.ts
│   │   ├── portfolioRoutes.ts
│   │   └── schedulerRoutes.ts
│   ├── schedulers
│   │   ├── fmpGovernmentContracts.scheduler.ts
│   │   └── index.ts
│   ├── server.ts
│   ├── test-globals.d.ts
│   └── utils
│       ├── audit.ts
│       ├── http.ts
│       ├── logger.ts
│       ├── sanitize.ts
│       └── sanitizeOpportunity.ts
├── tsc
└── tsconfig.json

109 directories, 352 files
```
