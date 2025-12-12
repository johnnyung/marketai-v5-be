export const anomalyEngine = {
    name: "anomaly",
    async run(ctx) {
        if (ctx.priceData.length < 2)
            return { engine: "anomaly", tickerId: ctx.tickerId, score: 20, bias: "neutral", missing: true, metadata: {} };
        const p1 = Number(ctx.priceData[0].close);
        const p2 = Number(ctx.priceData[1].close);
        const change = Math.abs((p1 - p2) / p2);
        const isAnomaly = change > 0.10;
        return { engine: "anomaly", tickerId: ctx.tickerId, score: isAnomaly ? 90 : 10, bias: "neutral", missing: false, metadata: { change } };
    }
};
