export const momentumEngine = {
    name: "momentum",
    async run(ctx) {
        if (ctx.priceData.length < 10)
            return { engine: "momentum", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        const p1 = Number(ctx.priceData[0].close);
        const p10 = Number(ctx.priceData[9].close);
        const mom = p1 > p10;
        return { engine: "momentum", tickerId: ctx.tickerId, score: mom ? 80 : 30, bias: mom ? "bullish" : "bearish", missing: false, metadata: { p1, p10 } };
    }
};
