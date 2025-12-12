import { IngestionModule } from "../../types.js";
import axios from "axios";
import { env } from "../../../config/env.js";

export const fmpInsiderModule: IngestionModule = {
  name: "fmp-insider", category: "alt",
  async run(ctx) {
    const result = { module: "fmp-insider", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] as string[] } as any;
    try {
      const { data } = await axios.get(`${env.FMP_BASE_URL}/insider-trading?limit=100&apikey=${env.FMP_API_KEY}`);
      if (Array.isArray(data)) {
        result.itemsFetched = data.length;
        for (const t of data) {
           const ticker = await ctx.prisma.ticker.findUnique({ where: { symbol: t.symbol }});
           if (ticker) {
             await ctx.prisma.insiderTransaction.create({
               data: { tickerId: ticker.id, transactionDate: new Date(t.transactionDate), insiderName: t.reportingName, transactionType: t.typeOfOwner, shares: t.securitiesTransacted, price: t.price, raw: t }
             }).catch(() => {});
             result.itemsWritten++;
           }
        }
      }
    } catch (e: any) { result.status = "fail"; result.errors.push(e.message); }
    return result;
  }
};
