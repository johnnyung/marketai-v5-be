import { IngestionModule } from "../../types.js";
import axios from "axios";
import { env } from "../../../config/env.js";

export const fmpNewsModule: IngestionModule = {
  name: "fmp-news", category: "news",
  async run(ctx) {
    const result = { module: "fmp-news", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] as string[] } as any;
    try {
      const { data } = await axios.get(`${env.FMP_BASE_URL}/stock_news?limit=50&apikey=${env.FMP_API_KEY}`);
      if (Array.isArray(data)) {
        result.itemsFetched = data.length;
        for (const n of data) {
          const ticker = await ctx.prisma.ticker.findUnique({ where: { symbol: n.symbol }});
          await ctx.prisma.newsItem.create({
            data: { tickerId: ticker?.id, title: n.title, publisher: n.site, url: n.url, publishedAt: new Date(n.publishedDate), raw: n }
          }).catch(() => {});
          result.itemsWritten++;
        }
      }
    } catch (e: any) { result.status = "fail"; result.errors.push(e.message); }
    return result;
  }
};
