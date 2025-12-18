import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function runAISynthesisClaude(prompt: string) {
  const res = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    temperature: 0,
    max_tokens: 800,
    messages: [{ role: "user", content: prompt }]
  });

  const text =
    res.content.find(c => c.type === "text")?.text ?? "";

  return JSON.parse(text);
}
