# ------------------------------------------------------------------------------
# MarketAI V5 Backend - Production Dockerfile
# Node 20 (Alpine) | Prisma | TypeScript
# ------------------------------------------------------------------------------

# 1. Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install system dependencies for Prisma (OpenSSL)
RUN apk add --no-cache openssl

# Copy manifests
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./prisma.config.ts
COPY prisma/prisma.config.ts ./prisma/prisma.config.ts

# Install dependencies (including dev for building)
RUN npm install

# Copy source
COPY src ./src

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# 2. Production Stage
FROM node:20-alpine AS runner
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache openssl

# Copy artifacts from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Environment defaults (Override in Railway)
ENV NODE_ENV=production
ENV PORT=3001

# Expose Port
EXPOSE 3001

# Start Server
CMD ["node", "dist/server.js"]
