# Risk Terminal

Risk Terminal is built so **the data you need to manage DeFi risk lives in one place**: resolved contracts, how they depend on each other, verification-backed trust signals, and the surrounding context you would otherwise chase across explorers, dashboards, and ad hoc notes. You work from a single **interactive dependency graph**, so exposure and relationships stay **readable from the visualization**, not buried in unstructured text. That view is anchored in **verified source code** (primarily [Sourcify](https://sourcify.dev/)), with sensible fallbacks when verification is incomplete.

## What it does

Risk Terminal answers, for a given protocol, vault, strategy, or pool:

- Which contracts does value or control flow through?
- How trustworthy is each node (verification, proxies, oracles)?
- If one component fails or is exploited, what is the rough **blast radius** along the graph?

The first version focuses on **one entry point** (contract address), **one chain** (Ethereum mainnet), and a **bounded-depth** graph so results stay understandable.

---

## v1 scope

| In scope (v1) | Next Iterations |
|----------------|----------------------|
| Paste root contract → resolve → dependency graph → simple UI | Wallet risk scan for your opened positions |
| Sourcify-first resolution + tiered fallbacks | Multi-chain parity |
| Solidity dependency extraction where source exists | Alerts, monitoring, Telegram integration|
| Interactive graph + per-node critical information (e.g TVL, audits, proxy, upgradeable, ...) | Risk Simulation Engine with customizible parameters|

---

## Trust model (summary)

Contracts are classified so the graph stays usable when Sourcify does not have everything:

1. **Sourcify verified** — reproducible build, full source for parsing  
2. **Etherscan verified** — source via API, centralized verification  
3. **Bytecode match** — same logic as a known verified template (parameters still read on-chain)  
4. **Factory-typed** — deployed by a known verified factory; type inferred  
5. **Unknown** — highlighted as a risk: no reliable source or template match  

Strategy-level views combine these tiers across all nodes in the chain.

---

## Architecture (two layers)

- **Protocol graph (macro)** — how major protocols depend on each other (oracles, markets, shared primitives). Stable, systemic view.  
- **Instance graph (micro)** — the concrete path for **this** vault or strategy: built by resolving the root contract and walking dependencies up to a configured depth.

Pipeline conceptually: **contract resolver → dependency extractor → graph builder → visualization** (optional **risk score** from node tiers and simple heuristics in v1).

---

## Tech stack

- **Backend:** Node.js, TypeScript, Express, `viem` for RPC, `@solidity-parser/parser` for Solidity AST where source is available  
- **Data:** Sourcify API, Etherscan, RPC for bytecode and storage reads, DeFiLlama
- **Frontend:** Next.js, graph UI (e.g. Cytoscape.js)

---

## Status

This repository currently **in development** and soon the documentation will be updated with architecture diagram, workflow examples and run instructions.

---

## Disclaimer

Graphs and scores are **informational**, not investment or security advice. On-chain systems change; verification gaps and parser limits can omit or mislabel dependencies. Always verify critical addresses and assumptions independently.
