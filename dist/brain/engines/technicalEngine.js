export const technicalEngine = {
    name: "technical",
    async run(ctx) {
        if (ctx.priceData.length < 50)
            return { engine: "technical", tickerId: ctx.tickerId, score: null, bias: "unknown", missing: true, metadata: {} };
        const closes = ctx.priceData.map(p => p.close).slice(0, 50);
        const current = closes[0] || 0;
        const sma50 = closes.reduce((a, b) => (a || 0) + (b || 0), 0) / closes.length;
        const score = current > sma50 ? 75 : 25;
        return {
            engine: "technical",
            tickerId: ctx.tickerId,
            score,
            bias: score > 50 ? "bullish" : "bearish",
            missing: false,
            metadata: { sma50, current }
        };
    }
};
