# Multi-stage Dockerfile for Express + TypeScript
# Adjust `npm` scripts or final CMD if your project uses a different entrypoint.

# --- Builder: install deps and build TypeScript ---
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Install build dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# --- Production image: install only production deps and copy built output ---
FROM node:20-alpine AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy compiled output from builder
COPY --from=builder /usr/src/app/dist ./dist

# Expose default port (adjust if your app uses a different port)
EXPOSE 3000

# Basic healthcheck (requires /health route)
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:3000/health || exit 1

# Default command: run the compiled app. Change path if your build outputs a different entry.
CMD ["node","dist/app.js"]
