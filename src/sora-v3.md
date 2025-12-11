---
title: "SORA Nexus - Unified, Infinitely Scalable Blockchain Network | SORA Docs"
head:
  - - meta
    - name: viewport
      content: "width=device-width, initial-scale=1.0"
  - - meta
    - name: description
      content: "Discover SORA Nexus (SORA v3), an infinitely scalable, unified blockchain network powered by Hyperledger Iroha 3. Learn how deterministic execution, data spaces, parallel lanes, and FASTPQ zk-proofs create a single universal ledger for DeFi, enterprises, and CBDCs."
  - - meta
    - name: keywords
      content: "SORA Nexus, SORA v3, Hyperledger Iroha 3, deterministic VM, IVM, data spaces, parallel lanes, universal ledger, scalable blockchain, CBDC platform, DeFi infrastructure, zk-STARK FASTPQ, SORA network, XOR token"
  - - meta
    - name: author
      content: "SORA Network"
  - - meta
    - property: og:title
      content: "SORA Nexus - Unified, Infinitely Scalable Blockchain Network | SORA Docs"
  - - meta
    - property: og:description
      content: "Explore SORA Nexus—an infinitely scalable blockchain network unifying DeFi, enterprises, and CBDCs. Powered by Hyperledger Iroha 3, featuring deterministic execution, data spaces, parallel lanes, and FASTPQ zk-proofs."
  - - meta
    - property: og:type
      content: "website"
  - - meta
    - property: og:site_name
      content: "SORA Docs"
  - - meta
    - name: twitter:card
      content: "summary"
  - - meta
    - name: twitter:title
      content: "SORA Nexus - Unified, Infinitely Scalable Blockchain Network | SORA Docs"
  - - meta
    - name: twitter:description
      content: "Learn how SORA Nexus unifies global finance with a scalable blockchain featuring deterministic execution, sovereign data spaces, horizontal lanes, and post-quantum zk-proofs."
  - - meta
    - name: twitter:site
      content: "@sora_xor"
  - - meta
    - name: twitter:creator
      content: "@sora_xor"
---

# SORA Nexus

A comprehensive overview of **SORA Nexus (SORA v3)** — an infinitely
scalable, multi-domain blockchain network built on **Hyperledger Iroha
3**, designed to unify global finance, DeFi, and institutional systems
under **one universal ledger**.

- SORA Nexus is a single, scalable ledger built on Hyperledger Iroha 3 that unifies public, private, DeFi, CBDC, and enterprise domains through sovereign data spaces and deterministic IVM execution.

- It scales horizontally with parallel lanes, a merge ledger, and a robust data availability + FASTPQ zk-proof system that ensures privacy, correctness, and auditability.

- XOR powers fees, staking, and governance, enabling forkless upgrades and aligned incentives across a global, shared economic infrastructure.

![](.gitbook/assets/sora-nexus1.png)

## Overview

### What Is SORA Nexus?
**SORA Nexus** is the single logical ledger of the SORA ecosystem. It is powered by **Hyperledger Iroha 3** and is engineered to replace fragmented L1s, L2s, appchains, and private ledgers with **one network composed of many sovereign data spaces**.

At a high level, SORA Nexus combines:

- A custom deterministic virtual machine (**IVM**)  
- Sovereign, policy-driven **data spaces**  
- Horizontally scalable **parallel lanes** with a **merge ledger**  
- A dedicated **data availability and storage layer**  
- zk-STARK–based **FASTPQ proofs** for conservation, policy, and privacy  
- XOR-denominated fees, staking, and governance  
- On-chain configuration and upgrades via the **SORA Parliament**

SORA Nexus is intended to be the **“end of history”** for blockchain
infrastructure: once this architecture is in place, new jurisdictions
and higher throughput are added by configuration, not by launching new
chains. It is an infrastructure capable of hosting the full spectrum of financial activity, from DeFi to CBDCs.

### Why SORA Nexus
Current blockchain and DLT deployments face persistent limitations:

- Fragmentation into many incompatible networks  
- Non-deterministic execution and difficult audits  
- Trade-offs between privacy and global composability  
- Reliance on risky cross-chain bridges for interoperability  
- Unpredictable performance and weak data availability guarantees  

SORA Nexus addresses these by operating as **one ledger with many data spaces**, each with its own policy and privacy rules, but all sharing:

- A common execution model (IVM)  
- A unified consensus and finality pipeline  
- Shared data-availability and proof systems  
- A single native economic asset (XOR)

![](.gitbook/assets/sora-nexus2.png)

### SORA Nexus Whitepaper
Full technical details are available in the <a href="https://sora.org/sora_nexus_whitepaper.pdf" target="_blank" rel="noopener">SORA Nexus Whitepaper </a>.

## Unified Architecture: One Network, Many Data Spaces

### What Are Data Spaces
In SORA Nexus, **data spaces (DS)** are first-class partitions of the ledger. Each data space:

- Defines explicit **privacy, routing, and compliance policies**  
- Can be **public**, **private**, or **consortium** in nature  
- Has its own validator/attester set and admission rules  
- Produces cryptographic artifacts (state roots, DA commitments, proof hashes) that are included in the global ledger

Data spaces allow CBDCs, capital markets, and open DeFi to coexist on the same network while remaining policy-isolated where required.

### Public vs Private Data Spaces

- **Public data spaces**  
  - Open participation  
  - In-slot data availability sampling  
  - Certificates signed by an attester set (e.g., Ed25519 plus reserved fields for post-quantum extensions)

- **Private data spaces**  
  - Permissioned participation  
  - Data and proofs confined to authorized parties  
  - Attestation certificates signed with post-quantum schemes (e.g., ML-DSA-87), including validator-set metadata and compliance hooks

In both cases, the rest of the network only needs the **fingerprints and proofs** of each data space’s state transitions, not the raw data itself.

### Composability Across Sovereign Domains

Because all data spaces are anchored in the same ledger:

- Assets and accounts can be referenced across data spaces using stable pointers.  
- Cross-space operations (e.g. using a CBDC as DeFi collateral) can be executed **atomically**, assuming policy permits it.  
- No external cross-chain bridges are required; cross-domain logic is enforced by IVM and the global consensus.

This allows **sovereign monetary domains** and **open crypto markets** to share liquidity and state, while respecting jurisdiction-specific rules.

## Deterministic Execution: The Iroha Virtual Machine

### What Is the IVM?
The **Iroha Virtual Machine (IVM)** is a custom, deterministic execution environment designed specifically for SORA Nexus. Smart contracts are written in **Kotodama** and compiled to IVM bytecode.

Key properties:

- **Pointer-ABI and fixed types** for assets, accounts, and memory  
- **Register-based architecture** with bounded, 64-bit arithmetic  
- **Explicit, versioned syscalls** to host functions  
- No floating-point arithmetic, no unbounded loops that break determinism  
- No reentrancy and no hidden stateful precompiles

All contract inputs and outputs are encoded in **Norito**, Iroha’s canonical serialization format.

### Why Determinism Matters

IVM is designed so that:

- The same transaction, given the same state, always produces the same result.  
- Execution is independent of hardware, OS, or node vendor.  
- Consensus nodes can reason about gas and resource usage predictably.  

This eliminates many sources of failure common in generic VMs (e.g., EVM):

- Reentrancy traps and unexpected call graphs  
- Implementation-specific precompiles  
- Diverging behavior on different hardware or runtimes

### Auditable and Upgradeable

IVM execution is tightly integrated with proofs and auditability:

- Execution traces and register/memory commitments can be Merkle-ized.  
- Transactions can produce receipts that are later used in **FASTPQ** proofs.  
- The syscall surface and ABI tables are versioned and anchored in on-chain configuration.

Runtime upgrades (new IVM versions, new syscalls, or new Kotodama features) are activated via governance at specific slots, without forking the chain or breaking prior contracts.

## Horizontal Scalability: Lanes and Merge Ledger

### Parallel Lanes Explained

SORA Nexus scales throughput via **lanes**:

- Each lane runs its own instance of the consensus pipeline over a subset of data-space workloads.  
- Lanes produce blocks containing data-space artifacts and proofs.  
- Lanes are independent for safety; they never rewrite one another’s history.

### The Merge Ledger

A lightweight **merge ledger** periodically combines the tips of all lanes into a single canonical block sequence:

- Lane blocks are referenced in merge blocks.  
- The merge committee signs a merge quorum certificate (QC).  
- From the outside, the network appears as **one chain** with a single ordered history, even though many lane blocks are produced in parallel.

This preserves:

- Global atomicity  
- Unified history  
- Single-headed finality

### Elastic Lanes and Scheduling

Lanes are **elastic**:

- Under low load, they can **fuse** into a single lane to reduce latency and resource usage.  
- Under high load, they can **split** into multiple lanes to increase throughput.  

Scheduling across data spaces and transactions uses mechanisms like:

- **Start-Time Fair Queuing (SFQ)**  
- **Transfer-equivalent unit (TEU) budgets** per data space and lane  
- Deterministic commit windows (typically two slots)

These guarantee that each data space receives a predictable share of block capacity and that transaction inclusion is bounded in time.

### Consensus and Performance

Consensus is provided by a modernized **SUMERAGI** BFT pipeline:

- Deterministic leader rotation and pipelined voting  
- No empty blocks; blocks are produced only when there are transactions  
- Target **sub-second to ~1-second finality** under normal conditions  
- Support for both classical and post-quantum signature schemes for QCs

This architecture allows throughput to scale towards tens of thousands of TPS while preserving a single, globally composable ledger.

## Privacy, Proofs, and Data Availability

### Data Availability Layer

Execution on IVM is coupled to a dedicated **data availability (DA)** and storage layer:

- **Kura** handles block storage; **WSV** maintains the working state view.  
- Blocks and artifacts can be **erasure-coded** in two dimensions, spreading shards across nodes.  
- DA sampling lets verifiers check that enough shares exist to reconstruct data if required.  

Public data spaces use open sampling; private data spaces use controlled distribution and commitments to signal availability without revealing contents.

### FASTPQ: zk-STARK-Based Proofs

**FASTPQ** is Nexus’s proof system for:

- Conservation of value and non-inflationary constraints  
- Policy and compliance rules inside data spaces  
- Confidential transaction logic where required

FASTPQ is a **zk-STARK** system:

- Transparent (no trusted setup)  
- Hash-based (e.g., Poseidon2) and post-quantum secure  
- Capable of generating large numbers of proofs per second  
- Proofs verify in **under 100 ms** on consumer hardware

The same AIR/FRI framework can operate in:

- **Audit modes**, where zero-knowledge blinding is off and only correctness is proven.  
- **Privacy modes**, where witnesses are hidden but all constraints are still enforced.

### Confidentiality with Integrity

Combining DA with FASTPQ yields:

- **Strong guarantees** that all data needed for verification exists and is correct.  
- The ability for private domains (e.g. CBDCs, dark books) to prove they obey rules without exposing underlying books.  
- A path for regulators and auditors to obtain cryptographic assurance instead of relying on off-chain attestations.

## Governance, Configuration, and Evolution

### Iroha Configuration and Governance Surfaces

All critical behavior of SORA Nexus is defined via on-chain configuration, primarily in the **`iroha_config`** registry. Governed parameters include:

- Cryptographic primitives and hash choices  
- IVM syscall lists and pointer-ABI tables  
- Data-space definitions and admission policies  
- Lane counts, TEU budgets, and DA limits  
- Fee schedules and reward distributions

Modifications to this configuration occur via the **SORA Parliament** governance process and are bound to specific enactment slots.

### XOR-Backed Governance

The **XOR token** underpins governance:

- Proposals carry **XOR bonds** to discourage spam and malicious changes.  
- Voting and participation rights are tied to XOR holdings (with additional bodies and councils defined by the Parliament model).  
- Enacted proposals, votes, and tallies are all recorded as Norito artifacts, making governance fully auditable.

### Forkless Runtime Upgrades

Runtime upgrades (e.g. new IVM builds, new Kotodama runtime versions, or changes in consensus parameters) follow a standard flow:

1. Proposal with an upgrade manifest and XOR bond  
2. Voting and tallying  
3. If passed, activation at a scheduled slot across all lanes  

State is preserved; nodes update binaries and configuration but remain on the same chain—no forks, no split communities.

## Real-World Applications

### CBDCs and Sovereign Money

SORA Nexus is explicitly designed for **national-scale digital currencies and financial market infrastructures**:

- Private data spaces for issuance, KYC/AML-constrained wallets, and wholesale rails  
- Public or semi-public data spaces for retail-level programmability and integration with DeFi  
- Integration paths for standards like **ISO 20022**  
- FASTPQ-backed proofs for monetary correctness and balance-sheet integrity

The design builds on experience from:

- **Bakong**, Cambodia’s national payment system, which has processed well over one hundred billion USD equivalent in annual volume  
- Multiple CBDC pilots and PoCs in other jurisdictions using prior Iroha versions

### DeFi and Open Finance

In open, public data spaces, SORA Nexus can host:

- DEXs and RFQ-style marketplaces  
- Lending and borrowing protocols  
- Stablecoins and synthetic assets  
- Tokenized real-world assets and NFTs

These can directly interact with assets from regulated domains—such as CBDCs or tokenized bonds—subject to the policies of those data spaces. This preserves **composability** while respecting regulatory constraints.

### Enterprise, Markets, and Cross-Border Finance

SORA Nexus provides:

- **Gateways** that turn state proofs and transactions into formats consumable by other ledgers or traditional systems (e.g., ISO 20022 messages, proof-of-state attestations).  
- A foundation for tokenized securities, bond markets, and cross-border corridors where settlement happens on Nexus, but integration with existing institutions remains smooth.  
- The ability to co-locate **enterprise consortia**, **public DeFi**, and **government rails** on one infrastructure, removing the need for bespoke chains for each use case.

## To Summarise

SORA Nexus defines a coherent architecture for a **single, global, infinitely scalable ledger**:

- **IVM** guarantees deterministic, auditable execution.  
- **Data spaces** provide sovereignty and policy isolation without sacrificing composability.  
- **Lanes and the merge ledger** deliver horizontal scalability while preserving a single canonical history.  
- **FASTPQ** and the DA layer ensure privacy, conservation, and compliance are cryptographically enforced.  
- **XOR-based governance and economics** align incentives for validators, builders, and users.  

With these components, SORA Nexus is positioned to carry CBDCs, capital markets, and open, permissionless innovation on a single ledger—moving the SORA vision of **“One World, One Economy, One Ledger”** from theory into practice.

> SORA Nexus. No other blockchain is needed.

![](.gitbook/assets/sora-nexus3.png)

## References

- [SORA Nexus Whitepaper (PDF)](https://sora.org/sora_nexus_whitepaper.pdf)

## Learn More

- [SORA Integrated Plan](/integrated-plan)
- [Request Features on SORA](/rfp)
