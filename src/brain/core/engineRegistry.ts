import { BrainEngine } from "./engineTypes.js";
import { fundamentalsEngine } from "../engines/fundamentalsEngine.js";
import { technicalEngine } from "../engines/technicalEngine.js";
import { sentimentEngine } from "../engines/sentimentEngine.js";
import { macroEngine } from "../engines/macroEngine.js";
import { insiderEngine } from "../engines/insiderEngine.js";
import { institutionalEngine } from "../engines/institutionalEngine.js";
import { optionsEngine } from "../engines/optionsEngine.js";
import { cryptoEngine } from "../engines/cryptoEngine.js";
import { opportunityEngine } from "../engines/opportunityEngine.js";
import { riskEngine } from "../engines/riskEngine.js";
import { correlationEngine } from "../engines/correlationEngine.js";
import { anomalyEngine } from "../engines/anomalyEngine.js";
import { catalystEngine } from "../engines/catalystEngine.js";
import { gammaEngine } from "../engines/gammaEngine.js";
import { divergenceEngine } from "../engines/divergenceEngine.js";
import { portfolioEngine } from "../engines/portfolioEngine.js";
import { valuationEngine } from "../engines/valuationEngine.js";
import { momentumEngine } from "../engines/momentumEngine.js";

export const engineRegistry: Record<string, BrainEngine> = {
  fundamentals: fundamentalsEngine,
  technical: technicalEngine,
  sentiment: sentimentEngine,
  macro: macroEngine,
  insider: insiderEngine,
  institutional: institutionalEngine,
  options: optionsEngine,
  crypto: cryptoEngine,
  opportunity: opportunityEngine,
  risk: riskEngine,
  correlation: correlationEngine,
  anomaly: anomalyEngine,
  catalyst: catalystEngine,
  gamma: gammaEngine,
  divergence: divergenceEngine,
  portfolio: portfolioEngine,
  valuation: valuationEngine,
  momentum: momentumEngine
};
