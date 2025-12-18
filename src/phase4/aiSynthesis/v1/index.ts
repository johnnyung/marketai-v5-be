import { ModelRouter } from "../../../ai/modelRouter.js";
import type { AISynthesisProvider } from "./providers.js";

export const defaultProvider: AISynthesisProvider = {
  name: "model-router",

  async synthesize({ candidates }) {
    const prompt = JSON.stringify(candidates, null, 2);

    // Dry-run safe: ModelRouter decides provider internally
    await ModelRouter.call({ prompt });

    return {
      prompt
    };
  }
};
