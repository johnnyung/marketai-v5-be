export class TradeArchitect {
    static generatePlan(compositeScore, currentPrice) {
        const action = compositeScore > 70 ? "BUY" : compositeScore < 35 ? "SELL" : "HOLD";
        const range = currentPrice * 0.15;
        return {
            action,
            entry: currentPrice,
            target: action === "BUY" ? currentPrice + range : 0,
            stop: action === "BUY" ? currentPrice - (range / 2) : 0,
            rationale: `Composite Score: ${compositeScore.toFixed(1)}`
        };
    }
}
