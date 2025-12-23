# MarketAI V5 Backend — Canonical Ownership Map

This file defines the *single authoritative location* for each concern.
AI systems and humans MUST follow this map.

## Brain
- Engines: src/brain/engines/**
- Runners: src/brain/runners/**
- Core orchestration: src/brain/core/**
- Contracts & types: src/brain/contracts/**
- Meta / evaluation logic: src/brain/meta/**
- Utilities (persistence, explainability): src/brain/utils/**

## Ingestion
- Canonical ingestion modules: src/ingestion/modules/**
- Registry (single source of truth): src/ingestion/registry.ts
- Pipelines & schedulers: src/ingestion/pipelines/**
- Adapters folder: ❌ DEPRECATED (removed)

## AI / LLM
- Model routing & mode selection: src/ai/modelRouter.ts
- Prompts: src/ai/prompts/**
- AI types: src/ai/types.ts

## API Layer
- Routes: src/routes/**
- Controllers: src/controllers/**
- API entrypoints: src/api/**

## Persistence
- Prisma client: src/db/**
- No DB access allowed inside engines

## Config
- Environment config ONLY: src/config/env.ts
- No parallel config files allowed

## Diagnostics & Observability
- Diagnostics: src/diagnostics/**
- Observability: src/observability/**

## Forbidden Patterns
- ❌ phase* folders
- ❌ *.DISABLED files
- ❌ stub / mock / placeholder files
- ❌ duplicate adapters
- ❌ empty index.ts barrels
- ❌ engine side effects
