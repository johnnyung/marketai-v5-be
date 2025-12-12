export const institutionalEngine = {
    name: "institutional",
    async run(ctx) {
        if (ctx.institutional.length === 0)
            return { engine: "institutional", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        const netChange = ctx.institutional.reduce((acc, i) => acc + Number(i.change || 0), 0);
        const score = netChange > 0 ? 70 : 30;
        return { engine: "institutional", tickerId: ctx.tickerId, score, bias: score > 50 ? "bullish" : "bearish", missing: false, metadata: { netChange } };
    }
};
