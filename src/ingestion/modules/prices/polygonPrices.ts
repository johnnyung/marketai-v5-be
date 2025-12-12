import { IngestionModule } from "../../types.js";
import axios from "axios";
import { env } from "@/config/env.js";

export const polygonDailyPricesModule: IngestionModule = {
  name: "polygon-prices", category: "prices",
  async run(ctx) {
    const result = { module: "polygon-prices", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] as string[] } as any;
    try {
      const y = new Date(); y.setDate(y.getDate() - 1);
      const dStr = y.toISOString().split('T')[0];
      const { data } = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${dStr}?adjusted=true&apiKey=${env.POLYGON_API_KEY}`);
      if (data.results) {
        result.itemsFetched = data.results.length;
        const tickers = await ctx.prisma.ticker.findMany({ select: { id: true, symbol: true } });
        const tMap = new Map(tickers.map((t: any) => [t.symbol, t.id]));
        
        for (const c of data.results) {
          const tid = tMap.get(c.T);
          if (tid) {
            await ctx.prisma.priceHistory.upsert({
              where: { tickerId_date: { tickerId: tid, date: y } },
              update: { close: c.c, high: c.h, low: c.l, open: c.o, volume: BigInt(Math.floor(c.v)) },
              create: { tickerId: tid, date: y, close: c.c, high: c.h, low: c.l, open: c.o, volume: BigInt(Math.floor(c.v)), source: "polygon" }
            });
            result.itemsWritten++;
          }
        }
      }
    } catch (e: any) { result.status = "fail"; result.errors.push(e.message); }
    return result;
  }
};
