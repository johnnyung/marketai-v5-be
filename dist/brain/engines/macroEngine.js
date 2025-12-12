export const macroEngine = {
    name: "macro",
    async run(ctx) {
        const cpi = ctx.macro.find(m => m.category === "CPI")?.value || 3.0;
        const gdp = ctx.macro.find(m => m.category === "GDP")?.value || 2.0;
        let score = 50;
        if (gdp > 2.5)
            score += 10;
        if (cpi < 3.0)
            score += 10;
        if (cpi > 5.0)
            score -= 20;
        return { engine: "macro", tickerId: ctx.tickerId, score, bias: score > 50 ? "bullish" : "neutral", missing: false, metadata: { cpi, gdp } };
    }
};
