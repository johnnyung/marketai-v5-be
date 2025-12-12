export enum AIProvider {
  OPENAI = "openai",
  ANTHROPIC = "anthropic",
  GEMINI = "gemini",
  DEEPSEEK = "deepseek",
  NONE = "none"
}

export interface AIRequest {
  prompt: string;
  systemPrompt?: string;
  temperature?: number;
}

export interface AIResponse {
  content: string;
  provider: string;
}
