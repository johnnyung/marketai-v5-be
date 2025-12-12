export const divergenceEngine = {
    name: "divergence",
    async run(ctx) {
        if (ctx.priceData.length < 14)
            return { engine: "divergence", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        const p1 = Number(ctx.priceData[0].close);
        const p2 = Number(ctx.priceData[1].close);
        const score = p1 > p2 ? 55 : 45;
        return { engine: "divergence", tickerId: ctx.tickerId, score, bias: "neutral", missing: false, metadata: { note: "trend_check" } };
    }
};
