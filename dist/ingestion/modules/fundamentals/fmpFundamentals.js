import axios from "axios";
import { env } from "@/config/env.js";
export const fmpFundamentalsModule = {
    name: "fmp-fundamentals", category: "fundamentals",
    async run(ctx) {
        const result = { module: "fmp-fundamentals", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] };
        try {
            const tickers = await ctx.prisma.ticker.findMany({ where: { isActive: true }, select: { id: true, symbol: true } });
            const chunks = ctx.chunker(tickers, 20);
            for (const batch of chunks) {
                await Promise.all(batch.map(async (t) => {
                    try {
                        const { data } = await axios.get(`${env.FMP_BASE_URL}/income-statement?symbol=${t.symbol}&limit=1&apikey=${env.FMP_API_KEY}`);
                        if (Array.isArray(data) && data.length > 0) {
                            const r = data[0];
                            result.itemsFetched++;
                            await ctx.prisma.fundamentals.create({
                                data: { tickerId: t.id, period: "annual", date: new Date(r.date), revenue: r.revenue, netIncome: r.netIncome, eps: r.eps, details: r }
                            }).catch(() => { });
                            result.itemsWritten++;
                        }
                    }
                    catch (e) {
                        result.errors.push(`${t.symbol}: ${e.message}`);
                    }
                }));
            }
        }
        catch (e) {
            result.status = "fail";
            result.errors.push(e.message);
        }
        return result;
    }
};
