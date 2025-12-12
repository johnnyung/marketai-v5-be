export const Prompts = {
  buyNarrative: (symbol: string, score: number, drivers: string[]) =>
    `Analyze ${symbol}. The quantitative system gives it a BUY score of ${score}/100. Key drivers: ${drivers.join(", ")}. Provide a concise 2-sentence bullish narrative.`,
  
  riskAnalysis: (symbol: string, volatility: number) =>
    `Analyze risk for ${symbol} given a volatility index of ${volatility}.`
};
