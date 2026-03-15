Funkey Fries — Complete System Architecture

![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![React Native](https://img.shields.io/badge/React%20Native-Expo-blueviolet)
![Express](https://img.shields.io/badge/Express.js-Backend-red)
![Rust](https://img.shields.io/badge/Rust-Cargo-8A2BE2)
![PostgreSQL](https://img.shields.io/badge/Postgres-DB-blue)

Funkey Fries is a full-stack, mobile-first food ordering platform built for scalability, multi-store franchises, and blockchain-enabled loyalty. This repository contains the web client, mobile app, backend services, and smart contracts used across the ecosystem.

## 🌟 Key Features

* Multi-platform: Next.js web, React Native (Expo) mobile, and an admin dashboard
* Hybrid persistence: PostgreSQL (relational) + MongoDB (flexible catalogs)
* Payments: Fiat + Stellar blockchain integration for loyalty and on-chain flows
* Microservice-style backend: Express.js + TypeScript with clear service/repository separation
* Offline-first mobile support, push notifications, and biometric security
* DevOps-ready: Docker, Redis queues (Bull), CI/CD pipelines

## 📋 Table of Contents

1. [System Architecture](#system-architecture)
2. [Repository Structure](#repository-structure)
3. [Quick Start](#quick-start)
	- [Backend (funkey-fries-api)](#backend-funkey-fries-api)
	- [Web (funkey-fries-web)](#web-funkey-fries-web)
	- [Mobile (funkey-fries-mobile)](#mobile-funkey-fries-mobile)
	- [Smart Contracts (funkey-fries-contracts)](#smart-contracts-funkey-fries-contracts)
4. [Development Workflow](#development-workflow)
5. [Testing](#testing)
6. [Security](#security)
7. [Contributing](#contributing)
8. [Contact & Support](#contact--support)

## 🏗️ System Architecture

High-level architecture (client → gateway → services → DB → blockchain):

```
┌───────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYERS                                │
├───────────────────┬───────────────────┬───────────────────────────────┤
│   Web App (Next.js)│  Mobile App       │  Admin Dashboard              │
│   funkey-fries-web │  (React Native)   │  (Next.js route)              │
│   - Customer facing│  funkey-mobile    │  - Franchise management       │
│   - Ordering       │  - Native features│  - Analytics                  │
│   - Menu browsing  │  - Push notifs    │  - Inventory control          │
└─────────┬─────────┴─────────┬─────────┴───────────────┬───────────────┘
			 │                   │                          │
			 ▼                   ▼                          ▼
┌───────────────────────────────────────────────────────────────────────┐
│                         API GATEWAY (Kong/Nginx)                       │
│                         - Rate limiting                                │
│                         - Request routing                              │
│                         - Authentication validation                    │
└───────────────────────────────────────────────────────────────────────┘
												│
												▼
┌───────────────────────────────────────────────────────────────────────┐
│                      BACKEND SERVICES (Express.js + TS)                │
├───────────────────┬───────────────────┬───────────────────────────────┤
│ Auth Service      │ Order Service     │ Menu Service                   │
│ - JWT handling    │ - Cart management │ - Product catalog              │
│ - Role-based auth │ - Checkout flow   │ - Pricing                      │
│ - Session mgmt    │ - Order tracking  │ - Nutritional info             │
├───────────────────┼───────────────────┼───────────────────────────────┤
│ User Service      │ Payment Service   │ Franchise Service              │
│ - Profile mgmt    │ - Fiat payments   │ - Multi-store support          │
│ - Loyalty points  │ - Refund handling │ - Location-based menu          │
│ - Order history   │ - Receipts        │ - Store inventory              │
├───────────────────┼───────────────────┼───────────────────────────────┤
│ Analytics Service │ Notification      │ Blockchain Service             │
│ - Business metrics│ - Email/SMS       │ - Stellar contract interaction │
│ - User behavior   │ - Push notifs     │ - Transaction verification     │
│ - Sales reports   │ - In-app alerts   │ - Loyalty token management     │
└─────────┬─────────┴─────────┬─────────┴───────────────┬───────────────┘
			 │                   │                          │
			 ▼                   ▼                          ▼
┌───────────────────────────────────────────────────────────────────────┐
│                         DATABASE LAYER                                 │
├───────────────────┬───────────────────────────────────────────────────┤
│  PostgreSQL       │           MongoDB                                  │
│  - User data      │           - Menu catalogs (flexible schema)        │
│  - Orders         │           - Order sessions                         │
│  - Payments       │           - User activity logs                     │
│  - Franchise data │           - Analytics events                       │
│  - ACID compliance│           - Inventory logs                         │
└───────────────────┴───────────────────────────────────────────────────┘
												│
												▼
┌───────────────────────────────────────────────────────────────────────┐
│                         BLOCKCHAIN LAYER                               │
│                    Stellar Network (Testnet/Mainnet)                    │
├───────────────────┬───────────────────┬───────────────────────────────┤
│ Loyalty Token     │ Payment Channel   │ Supply Chain                   │
│ Smart Contract    │ Smart Contract    │ Smart Contract                 │
│ - FRIES token     │ - Escrow          │ - Ingredient tracking          │
│ - Rewards logic   │ - Settlement      │ - Supplier verification        │
│ - Redemption      │ - Disputes        │ - Temperature monitoring       │
└───────────────────────────────────────────────────────────────────────┘
												│
												▼
┌───────────────────────────────────────────────────────────────────────┐
│                         INFRASTRUCTURE                                 │
├───────────────────┬───────────────────┬───────────────────────────────┤
│ Docker/K8s        │ Redis Cache       │ AWS S3/CloudFront              │
│ - Containerization│ - Session store   │ - Images                       │
│ - Orchestration   │ - Rate limiting   │ - Static assets                │
│ - Auto-scaling    │ - Queue management│ - Backups                      │
└───────────────────────────────────────────────────────────────────────┘
```

### Key Flows

1. Order Flow: Web/Mobile → API Gateway → Order Service → PostgreSQL + Stellar
2. Menu Flow: Web/Mobile → API Gateway → Menu Service → MongoDB
3. Auth Flow: All Clients → API Gateway → Auth Service → PostgreSQL + Redis
4. Payment Flow: Web/Mobile → API Gateway → Payment Service → Stellar + PostgreSQL

## 📁 Repository Structure

Top-level layout (folders included in this workspace):

```
funkey-fries-private/
├── funkey-fries-api/          # Backend service (Express + TypeScript)
├── funkey-fries-web/          # Next.js 14+ web storefront + admin routes
├── funkey-fries-mobile/       # React Native (Expo) mobile app
├── funkey-fries-contracts/    # Smart contracts (Rust/Cargo) for Stellar
└── README.md                  # This file
```

Refer to each package's README for component-specific details and scripts.

## 🚀 Quick Start

### Prerequisites

* Node.js 18+ and npm/yarn
* Rust toolchain + Cargo (for contracts)
* Docker & Docker Compose (recommended for local Postgres/Redis)
* Expo CLI (`npm install -g expo-cli`) for mobile development
* Redis and PostgreSQL (or use Docker-compose)

### One-line setup (macOS / Linux)

```bash
# Start local infra (Postgres, MongoDB, Redis)
docker-compose -f funkey-fries-api/docker/docker-compose.dev.yml up -d

# Backend
cd funkey-fries-api
npm install
cp .env.example .env
npm run dev

# Web
cd ../funkey-fries-web
npm install
cp .env.example .env
npm run dev

# Mobile
cd ../funkey-fries-mobile
npm install
expo start --lan

# Contracts (build only; deploy per contracts README)
cd ../funkey-fries-contracts
cargo build --release
```

### Windows (PowerShell)

```powershell
# Backend
cd .\funkey-fries-api
npm install
copy .env.example .env
npm run dev

# Web
cd ..\funkey-fries-web
npm install
npm run dev

# Mobile
cd ..\funkey-fries-mobile
npm install
expo start --lan

# Contracts
cd ..\funkey-fries-contracts
cargo build --release
```

If you prefer containers, use the main `docker/` and the service-level `docker-compose` files located in `funkey-fries-api/docker/`.

## 📦 Components

### Web App — funkey-fries-web

- Framework: Next.js 14+ (App Router)
- Purpose: Customer storefront, menu browsing, ordering, admin dashboard routes
- Key files: [funkey-fries-web/src/app](funkey-fries-web/src/app)
- Run: `npm run dev` inside [funkey-fries-web](funkey-fries-web)

### Mobile App — funkey-fries-mobile

- Framework: React Native + Expo
- Purpose: Native features, push notifications, offline queue, biometric auth
- Key files: [funkey-fries-mobile/src/app](funkey-fries-mobile/src/app)
- Run: `expo start --lan` inside [funkey-fries-mobile](funkey-fries-mobile)

### Backend — funkey-fries-api

- Framework: Express.js + TypeScript
- Patterns: service/repository, Prisma for Postgres, Mongoose for MongoDB, Bull/Redis queues
- Key files: [funkey-fries-api/src/app.ts](funkey-fries-api/src/app.ts)
- Run: `npm run dev` inside [funkey-fries-api](funkey-fries-api)

### Smart Contracts — funkey-fries-contracts

- Language: Rust (Cargo) — Soroban / Stellar contracts
- Purpose: Loyalty token (FRIES), payment escrow, supply-chain proofs
- Key files: [funkey-fries-contracts/contracts](funkey-fries-contracts/contracts)
- Build: `cargo build --release` and follow [funkey-fries-contracts/README.md](funkey-fries-contracts/README.md) for deployment

## 🧭 Development Workflow

- Use feature branches (`git checkout -b feature/xxx`) and conventional commits
- Run unit and integration tests in each package before opening PRs
- Linting: ESLint & Prettier configured in service and web packages
- CI: GitHub Actions (check each package's `.github/workflows` for details)

## ✅ Testing

- Unit tests live under `tests/unit/` or package-specific `__tests__` folders
- Integration and e2e targets are present for web, mobile, and backend
- Contracts include Rust unit/integration tests under `funkey-fries-contracts/test/`

## 🔒 Security

- JWT authentication with refresh tokens for client flows
- Rate limiting and input validation at the gateway and service layers
- Secrets and keys must be stored in secure secret stores in production (AWS Secrets Manager, KMS)
- Smart contract safeguards (timelocks, access control, circuit breakers) live in the contracts code

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Add tests and update docs
4. Open a PR and request review

Development guidelines: follow existing code style, add tests, and keep PRs small and focused.


