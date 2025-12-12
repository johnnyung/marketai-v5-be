export const cryptoEngine = {
    name: "crypto",
    async run(ctx) {
        if (ctx.assetClass !== "crypto")
            return { engine: "crypto", tickerId: ctx.tickerId, score: null, bias: "unknown", missing: true, metadata: {} };
        if (ctx.priceData.length < 7)
            return { engine: "crypto", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: false, metadata: {} };
        const p1 = Number(ctx.priceData[0].close);
        const p7 = Number(ctx.priceData[6].close);
        const mom = p1 > p7;
        return { engine: "crypto", tickerId: ctx.tickerId, score: mom ? 75 : 25, bias: mom ? "bullish" : "bearish", missing: false, metadata: { p1, p7 } };
    }
};
