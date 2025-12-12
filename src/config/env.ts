import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("3001"),
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  
  // Data Providers
  FMP_API_KEY: z.string().min(1, "FMP API Key is required"),
  FMP_BASE_URL: z.string().default("https://financialmodelingprep.com/stable"),
  POLYGON_API_KEY: z.string().min(1, "Polygon API Key is required"),
  
  // AI Keys
  GEMINI_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  DEEPSEEK_API_KEY: z.string().optional(),
  
  // Operational
  AI_SPEND_MODE: z.enum(["max_power", "balanced", "frugal"]).default("balanced")
});

export const env = envSchema.parse(process.env);
