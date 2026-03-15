# funkey-fries-contracts

![Rust](https://img.shields.io/badge/Rust-Cargo-8A2BE2)
![Soroban](https://img.shields.io/badge/Soroban-Stellar-yellowgreen)

Smart contracts and on-chain code used by Funkey Fries. Contracts implement loyalty tokens, payment escrow, and any on-chain business rules (Stellar/Soroban targets).

Key responsibilities

- `FRIES` loyalty token contract
- Payment escrow and settlement contracts
- Supply-chain / verification modules (optional)
- Tests and deployment scripts

Quick start

Prerequisites: Rust toolchain (stable), `cargo`, Soroban/Soroban CLI (if required), and network config

```bash
cd funkey-fries-contracts
# build contracts
cargo build --release

# run unit/integration tests
cargo test

# follow package-specific scripts for deployment (see scripts/)
```

Important paths

- `contracts/` — individual contract crates
- `scripts/` — deploy & interaction helpers
- `tests/` — integration tests

Notes

- Contracts are designed to run on the Stellar network (Soroban). Follow the `scripts/` folder for deployment steps and the `stellar.toml` for configuration.
- Keep private keys and deployment credentials out of source control.
# Soroban Project

## Project Structure

This repository uses the recommended structure for a Soroban project:

```text
.
├── contracts
│   └── hello_world
│       ├── src
│       │   ├── lib.rs
│       │   └── test.rs
│       └── Cargo.toml
├── Cargo.toml
└── README.md
```

- New Soroban contracts can be put in `contracts`, each in their own directory. There is already a `hello_world` contract in there to get you started.
- If you initialized this project with any other example contracts via `--with-example`, those contracts will be in the `contracts` directory as well.
- Contracts should have their own `Cargo.toml` files that rely on the top-level `Cargo.toml` workspace for their dependencies.
- Frontend libraries can be added to the top-level directory as well. If you initialized this project with a frontend template via `--frontend-template` you will have those files already included.
