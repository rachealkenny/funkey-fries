# funkey-fries-api

![Node.js](https://img.shields.io/badge/Node-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-blue)
![Postgres](https://img.shields.io/badge/Postgres-DB-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-brightgreen)

Backend service for Funkey Fries. Implements REST APIs, WebSocket events, business logic, database access, and integrations (payments, notifications, blockchain).

Core responsibilities

- API controllers and routes (auth, users, orders, menu, payments, franchise, blockchain)
- Service & repository layers (Prisma for Postgres, Mongoose for Mongo)
- Queue processors (Bull + Redis) for async jobs
- Webhook handlers and integrations (Stellar, payment gateways)
- Validation, logging, and error handling

Quick start (local)

Prerequisites: Node.js 18+, Docker (for Postgres/Redis), yarn/npm

```bash
# from repository root
cd funkey-fries-api
npm install
cp .env.example .env
# (optional) start infra listed in docker/docker-compose.dev.yml
docker-compose -f docker/docker-compose.dev.yml up -d

# start dev server
npm run dev
```

Useful scripts

- `npm run dev` — start dev server (ts-node / nodemon)
- `npm run build` — compile TypeScript
- `npm run start` — start production build
- `npm run test` — run unit tests
- `npm run migrate` — run DB migrations (Prisma)
- `npm run seed` — seed initial data

Important paths

- `src/app.ts` — Express app bootstrap
- `src/api/controllers` — request handlers
- `src/services` — business logic (auth, order, menu, payment, blockchain)
- `src/models` — Prisma / Mongoose models
- `src/repositories` — DB access layer
- `src/config` — config for DB, Redis, Stellar, auth
- `docker/` — service docker files and docker-compose

Environment

Copy `.env.example` to `.env` and set Postgres/Mongo/Redis connection strings, JWT secrets, Stellar keys.

Notes

- Follow the service/repository pattern when adding features.
- Use existing validators and error types (`src/utils/errors`).
