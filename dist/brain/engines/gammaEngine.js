export const gammaEngine = {
    name: "gamma",
    async run(ctx) {
        if (ctx.options.length === 0)
            return { engine: "gamma", tickerId: ctx.tickerId, score: 50, bias: "neutral", missing: true, metadata: {} };
        let callOI = 0, putOI = 0;
        ctx.options.forEach(o => o.putCall === "CALL" ? callOI += Number(o.openInterest) : putOI += Number(o.openInterest));
        const score = callOI > putOI ? 60 : 40;
        return { engine: "gamma", tickerId: ctx.tickerId, score, bias: "neutral", missing: false, metadata: { callOI, putOI } };
    }
};
