import { prisma } from "../../db/prisma.js";
// prisma singleton imported
export async function buildTickerContext(tickerId) {
    const ticker = await prisma.ticker.findUniqueOrThrow({ where: { id: tickerId } });
    // Parallel Fetching for speed
    const [prices, fundamentals, insider, news, inst, opts, macro] = await Promise.all([
        prisma.priceHistory.findMany({
            where: { tickerId },
            orderBy: { date: 'desc' },
            take: 100
        }),
        prisma.fundamentals.findFirst({
            where: { tickerId },
            orderBy: { date: 'desc' }
        }),
        prisma.insiderTransaction.findMany({
            where: { tickerId },
            orderBy: { transactionDate: 'desc' },
            take: 50
        }),
        prisma.newsItem.findMany({
            where: { tickerId },
            orderBy: { publishedAt: 'desc' },
            take: 20
        }),
        prisma.institutionalOwnership.findMany({
            where: { tickerId },
            orderBy: { date: 'desc' },
            take: 10
        }),
        prisma.optionsFlow.findMany({
            where: { tickerId },
            orderBy: { date: 'desc' },
            take: 50
        }),
        prisma.macroDatum.findMany({
            orderBy: { date: 'desc' },
            take: 10
        })
    ]);
    return {
        tickerId: ticker.id,
        symbol: ticker.symbol,
        assetClass: ticker.assetClass,
        priceData: prices,
        fundamentals,
        insider,
        sentiment: news,
        institutional: inst,
        options: opts,
        macro
    };
}
