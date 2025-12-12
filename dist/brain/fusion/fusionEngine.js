export class FusionEngine {
    static fuse(tickerId, signals, regime = "normal") {
        const weights = {
            fundamentals: 2.0,
            technical: 1.5,
            momentum: 1.5,
            risk: 1.0,
            sentiment: 1.2,
            macro: 1.0,
            insider: 1.1,
            options: 1.0
        };
        let totalScore = 0;
        let totalWeight = 0;
        for (const sig of signals) {
            if (!sig.missing && sig.score !== null) {
                const w = weights[sig.engine] || 1.0;
                totalScore += (sig.score * w);
                totalWeight += w;
            }
        }
        const compositeScore = totalWeight > 0 ? totalScore / totalWeight : 50;
        return { tickerId, compositeScore, signals, regime, riskScore: 100 - compositeScore };
    }
}
