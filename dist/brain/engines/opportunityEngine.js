export const opportunityEngine = {
    name: "opportunity",
    async run(ctx) {
        if (ctx.priceData.length < 5)
            return { engine: "opportunity", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        const curVol = Number(ctx.priceData[0].volume);
        const avgVol = ctx.priceData.slice(1, 5).reduce((a, b) => a + Number(b.volume), 0) / 4;
        const spike = curVol > (avgVol * 1.5);
        const score = spike ? 85 : 40;
        return { engine: "opportunity", tickerId: ctx.tickerId, score, bias: spike ? "bullish" : "neutral", missing: false, metadata: { volMultiple: curVol / avgVol } };
    }
};
