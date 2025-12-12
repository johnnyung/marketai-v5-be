-- CreateTable
CREATE TABLE "Ticker" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT,
    "exchange" TEXT,
    "sector" TEXT,
    "industry" TEXT,
    "assetClass" TEXT NOT NULL DEFAULT 'stock',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fundamentals" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "period" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "revenue" DECIMAL(18,2),
    "netIncome" DECIMAL(18,2),
    "eps" DOUBLE PRECISION,
    "totalDebt" DECIMAL(18,2),
    "totalEquity" DECIMAL(18,2),
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fundamentals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyMetrics" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "peRatio" DOUBLE PRECISION,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KeyMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceHistory" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "open" DOUBLE PRECISION,
    "high" DOUBLE PRECISION,
    "low" DOUBLE PRECISION,
    "close" DOUBLE PRECISION,
    "volume" BIGINT,
    "source" TEXT,

    CONSTRAINT "PriceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsiderTransaction" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "insiderName" TEXT,
    "transactionType" TEXT,
    "shares" DOUBLE PRECISION,
    "price" DOUBLE PRECISION,
    "raw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InsiderTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsItem" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT,
    "title" TEXT,
    "publisher" TEXT,
    "url" TEXT,
    "publishedAt" TIMESTAMP(3),
    "sentiment" DOUBLE PRECISION,
    "raw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionalOwnership" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "holder" TEXT,
    "shares" DOUBLE PRECISION,
    "change" DOUBLE PRECISION,
    "date" TIMESTAMP(3),
    "raw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InstitutionalOwnership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionsFlow" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT,
    "date" TIMESTAMP(3),
    "contract" TEXT,
    "putCall" TEXT,
    "premium" DOUBLE PRECISION,
    "volume" DOUBLE PRECISION,
    "openInterest" DOUBLE PRECISION,
    "raw" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OptionsFlow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MacroDatum" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION,
    "raw" JSONB,
    "tickerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MacroDatum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngestionLog" (
    "id" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "category" TEXT,
    "status" TEXT NOT NULL,
    "itemsFetched" INTEGER,
    "itemsWritten" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "error" TEXT,

    CONSTRAINT "IngestionLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntelligenceBundle" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "runAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "runHash" TEXT,
    "engineVersion" TEXT NOT NULL DEFAULT 'v5.0.0',
    "compositeScore" DOUBLE PRECISION,
    "riskScore" DOUBLE PRECISION,
    "signals" JSONB,
    "summary" TEXT,

    CONSTRAINT "IntelligenceBundle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" TEXT NOT NULL,
    "tickerId" TEXT NOT NULL,
    "intelligenceBundleId" TEXT,
    "score" DOUBLE PRECISION,
    "category" TEXT,
    "rationale" TEXT,
    "catalysts" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticker_symbol_key" ON "Ticker"("symbol");

-- CreateIndex
CREATE INDEX "Ticker_sector_idx" ON "Ticker"("sector");

-- CreateIndex
CREATE INDEX "Fundamentals_tickerId_idx" ON "Fundamentals"("tickerId");

-- CreateIndex
CREATE INDEX "KeyMetrics_tickerId_idx" ON "KeyMetrics"("tickerId");

-- CreateIndex
CREATE INDEX "PriceHistory_tickerId_idx" ON "PriceHistory"("tickerId");

-- CreateIndex
CREATE UNIQUE INDEX "PriceHistory_tickerId_date_key" ON "PriceHistory"("tickerId", "date");

-- CreateIndex
CREATE INDEX "InsiderTransaction_tickerId_idx" ON "InsiderTransaction"("tickerId");

-- CreateIndex
CREATE INDEX "NewsItem_tickerId_idx" ON "NewsItem"("tickerId");

-- CreateIndex
CREATE INDEX "InstitutionalOwnership_tickerId_idx" ON "InstitutionalOwnership"("tickerId");

-- CreateIndex
CREATE INDEX "OptionsFlow_tickerId_idx" ON "OptionsFlow"("tickerId");

-- CreateIndex
CREATE INDEX "MacroDatum_category_date_idx" ON "MacroDatum"("category", "date");

-- CreateIndex
CREATE INDEX "IntelligenceBundle_tickerId_idx" ON "IntelligenceBundle"("tickerId");

-- CreateIndex
CREATE UNIQUE INDEX "IntelligenceBundle_tickerId_runHash_key" ON "IntelligenceBundle"("tickerId", "runHash");

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_intelligenceBundleId_key" ON "Opportunity"("intelligenceBundleId");

-- CreateIndex
CREATE INDEX "Opportunity_tickerId_idx" ON "Opportunity"("tickerId");

-- AddForeignKey
ALTER TABLE "Fundamentals" ADD CONSTRAINT "Fundamentals_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyMetrics" ADD CONSTRAINT "KeyMetrics_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceHistory" ADD CONSTRAINT "PriceHistory_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsiderTransaction" ADD CONSTRAINT "InsiderTransaction_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsItem" ADD CONSTRAINT "NewsItem_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionalOwnership" ADD CONSTRAINT "InstitutionalOwnership_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionsFlow" ADD CONSTRAINT "OptionsFlow_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MacroDatum" ADD CONSTRAINT "MacroDatum_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntelligenceBundle" ADD CONSTRAINT "IntelligenceBundle_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_tickerId_fkey" FOREIGN KEY ("tickerId") REFERENCES "Ticker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_intelligenceBundleId_fkey" FOREIGN KEY ("intelligenceBundleId") REFERENCES "IntelligenceBundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
