import axios from "axios";
import { env } from "@/config/env.js";
export const sp500Universe = {
    name: "sp500-constituent", category: "universe",
    async run(ctx) {
        const result = { module: "sp500", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] };
        try {
            const { data } = await axios.get(`${env.FMP_BASE_URL}/sp500_constituent?apikey=${env.FMP_API_KEY}`);
            if (Array.isArray(data)) {
                result.itemsFetched = data.length;
                for (const item of data) {
                    await ctx.prisma.ticker.upsert({
                        where: { symbol: item.symbol },
                        update: { name: item.name, sector: item.sector, isActive: true },
                        create: { symbol: item.symbol, name: item.name, sector: item.sector, assetClass: "stock" }
                    });
                    result.itemsWritten++;
                }
            }
        }
        catch (e) {
            result.status = "fail";
            result.errors.push(e.message);
        }
        return result;
    }
};
