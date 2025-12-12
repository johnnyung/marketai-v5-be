import { IngestionModule } from "../../types.js";
import axios from "axios";
import { env } from "@/config/env.js";

export const polygonCryptoModule: IngestionModule = {
  name: "polygon-crypto", category: "alt",
  async run(ctx) {
    const result = { module: "polygon-crypto", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] as string[] } as any;
    const coins = ["BTC", "ETH", "SOL"];
    const today = new Date().toISOString().split('T')[0];
    
    for (const coin of coins) {
      try {
        const tickerStr = `X:${coin}USD`;
        const url = `https://api.polygon.io/v2/aggs/ticker/${tickerStr}/range/1/day/${today}/${today}?apiKey=${env.POLYGON_API_KEY}`;
        const { data } = await axios.get(url);
        
        if (data.results && data.results.length > 0) {
          result.itemsFetched += data.results.length;
          // Upsert crypto ticker
          const ticker = await ctx.prisma.ticker.upsert({
            where: { symbol: `${coin}USD` },
            update: { assetClass: "crypto" },
            create: { symbol: `${coin}USD`, name: `${coin} USD`, assetClass: "crypto", exchange: "CRYPTO" }
          });
          
          for (const c of data.results) {
            await ctx.prisma.priceHistory.upsert({
               where: { tickerId_date: { tickerId: ticker.id, date: new Date(today) } },
               update: { close: c.c, high: c.h, low: c.l, open: c.o, volume: BigInt(Math.floor(c.v)) },
               create: { tickerId: ticker.id, date: new Date(today), close: c.c, high: c.h, low: c.l, open: c.o, volume: BigInt(Math.floor(c.v)), source: "polygon-crypto" }
            });
            result.itemsWritten++;
          }
        }
      } catch (e: any) { result.errors.push(`Crypto ${coin}: ${e.message}`); }
    }
    return result;
  }
};
