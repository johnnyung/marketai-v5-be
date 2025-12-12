import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is missing. Set it in backend/.env or Railway Variables.");
}

// pg Pool -> Prisma adapter
const pool = new Pool({ connectionString: DATABASE_URL });
const adapter = new PrismaPg(pool);

// Singleton (important for dev hot-reload)
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.__prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma;
}
