import axios from "axios";
import { env } from "@/config/env.js";
export const fmpMacroModule = {
    name: "fmp-macro", category: "macro",
    async run(ctx) {
        const result = { module: "fmp-macro", status: "success", itemsFetched: 0, itemsWritten: 0, errors: [] };
        const inds = ["GDP", "CPI"];
        for (const i of inds) {
            try {
                const { data } = await axios.get(`${env.FMP_BASE_URL}/economicIndicator?name=${i}&apikey=${env.FMP_API_KEY}`);
                if (Array.isArray(data) && data[0]) {
                    result.itemsFetched += data.length;
                    await ctx.prisma.macroDatum.create({ data: { category: i, date: new Date(data[0].date), value: parseFloat(data[0].value), raw: data[0] } });
                    result.itemsWritten++;
                }
            }
            catch (e) {
                result.errors.push(e.message);
            }
        }
        return result;
    }
};
