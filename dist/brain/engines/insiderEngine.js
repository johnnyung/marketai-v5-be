export const insiderEngine = {
    name: "insider",
    async run(ctx) {
        if (ctx.insider.length === 0)
            return { engine: "insider", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        let buys = 0;
        let sells = 0;
        ctx.insider.forEach(t => {
            const type = t.transactionType?.toLowerCase() || "";
            if (type.includes("buy") || type.includes("purchase"))
                buys++;
            else
                sells++;
        });
        const score = buys > sells ? 80 : buys < sells ? 30 : 50;
        return { engine: "insider", tickerId: ctx.tickerId, score, bias: score > 50 ? "bullish" : "bearish", missing: false, metadata: { buys, sells } };
    }
};
