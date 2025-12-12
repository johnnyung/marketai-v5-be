import { AIRequest, AIResponse, AIProvider } from "./types.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

function sanitizeError(provider: string) {
  logger.warn(`AI Provider '${provider}' failed. Falling back...`);
}

function truncate(text: string, max: number = 800) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
}

export class ModelRouter {
  static async call(req: AIRequest): Promise<AIResponse> {

    // GEMINI
    if (env.GEMINI_API_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(req.prompt);
        return { content: truncate(result.response.text()), provider: AIProvider.GEMINI };
      } catch {
        sanitizeError("gemini");
      }
    }

    // ANTHROPIC
    if (env.ANTHROPIC_API_KEY) {
      try {
        const anthropic = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
        const msg = await anthropic.messages.create({
          model: "claude-3.7-sonnet",
          max_tokens: 512,
          messages: [{ role: "user", content: req.prompt }]
        });
        const text = msg.content[0]?.type === 'text' ? msg.content[0].text : "";
        return { content: truncate(text), provider: AIProvider.ANTHROPIC };
      } catch {
        sanitizeError("anthropic");
      }
    }

    // OPENAI
    if (env.OPENAI_API_KEY) {
      try {
        const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
        const completion = await client.chat.completions.create({
          messages: [{ role: "user", content: req.prompt }],
          model: "gpt-4.1-mini"
        });
        return {
          content: truncate(completion.choices?.[0]?.message?.content || ""),
          provider: AIProvider.OPENAI
        };
      } catch {
        sanitizeError("openai");
      }
    }

    // DEEPSEEK
    if (env.DEEPSEEK_API_KEY) {
      try {
        const response = await fetch("https://api.deepseek.com/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.DEEPSEEK_API_KEY}`
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: req.prompt }]
          })
        });

        const data = await response.json();
        const content = data?.choices?.[0]?.message?.content || "";
        return { content: truncate(content), provider: AIProvider.DEEPSEEK };

      } catch {
        sanitizeError("deepseek");
      }
    }

    return {
      content: "AI unavailable. All providers failed.",
      provider: AIProvider.NONE
    };
  }
}
