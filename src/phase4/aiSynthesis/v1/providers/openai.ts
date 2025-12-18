import { ModelRouter } from "../../../../ai/modelRouter.js";

export async function runAISynthesisOpenAI(prompt: string) {
  const res = await ModelRouter.call({
    prompt,
    temperature: 0
  });

  return JSON.parse(res.content);
}
