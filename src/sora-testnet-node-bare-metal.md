---
title: "Running a SORA v3 Testnet Node on Bare Metal | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to run a bare metal node on the SORA v3 Testnet and participate in testing new features."
  - - meta
    - name: keywords
      content: "running a node, bare metal, SORA network, node setup, testnet"
---

# How to Run a SORA v3 Testnet Node on Bare Metal

This guide walks you through running a **SORA v3 testnet node** using **Hyperledger Iroha v2.0.0-rc.1** on **bare metal** (no Docker). It includes step-by-step instructions for building, configuring, starting your node, and performing transactions.

---

## 🧠 What You’ll Do

You'll replicate the Docker-based testnet setup found in [`docker-compose.volunteer.yml`](https://raw.githubusercontent.com/hyperledger-iroha/iroha/refs/heads/testnet/2.0.0-rc.1/defaults/docker-compose.volunteer.yml), but run it directly on your local machine. This means:

- Building Iroha from source
- Setting configuration and environment variables manually
- Running the node process directly with the CLI
- Sending and verifying transactions

---

## ✅ Prerequisites

Before starting, make sure you have the following:

- Linux (Ubuntu/Debian recommended) or macOS
- Rust installed (via [rustup.rs](https://rustup.rs))
- Git installed
- Ports **1337**, **8080**, and **8180** open on your machine

Install required dependencies:

```bash
sudo apt update && sudo apt install -y git clang cmake pkg-config libssl-dev protobuf-compiler
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

---

## 📦 Step 1: Clone and Build Iroha

```bash
cd ~
git clone https://github.com/hyperledger/iroha.git
cd iroha
git checkout testnet/2.0.0-rc.1
```

### Build for testing (faster):

```bash
cargo build -p iroha
```

### Build for production (slower but optimized):

```bash
cargo build --bin iroha --release
```

---

## 🔐 Step 2: Generate Keys

You can use Kagami or the built-in Iroha CLI tool:

```bash
cargo run --bin iroha_crypto_cli
```

This generates a key pair. Save both the public and private key values. You'll use them in config and environment variables.

---

## ⚙️ Step 3: Setup Config and Environment

We’ll mimic the Docker config manually using environment variables.

### Create a script:

```bash
mkdir -p ~/iroha-node
nano ~/iroha-node/env.sh
```

Paste the following (edit the key values and addresses accordingly):

```bash
export PUBLIC_KEY="<your_public_key>"
export PRIVATE_KEY='{"digest_function":"ed25519","payload":"<your_private_key_hex>"}'
export P2P_PUBLIC_ADDRESS="your.public.ip.address:1337"
export P2P_ADDRESS="0.0.0.0:1337"
export API_ADDRESS="0.0.0.0:8080"
export GENESIS_PUBLIC_KEY="<your_public_key>"
export TOPOLOGY='[]'
export TRUSTED_PEERS='["<your_public_key>@your.public.ip.address:1337"]'
```

Then run:

```bash
source ~/iroha-node/env.sh
```

To make it permanent:

```bash
echo 'source ~/iroha-node/env.sh' >> ~/.bashrc
source ~/.bashrc
```

---

## 📁 Step 4: Prepare Config Files

Copy default configs:

```bash
mkdir -p ~/iroha-node/configs
cp -vfr ~/iroha/configs/peer/*.json ~/iroha-node/configs/
```

Edit `config.json` inside `~/iroha-node/configs/` and make sure these match:

- `TORII_P2P_ADDR`: `0.0.0.0:1337`
- `TORII_API_URL`: `0.0.0.0:8080`
- `TORII_TELEMETRY_URL`: `0.0.0.0:8180`
- Set `trusted_peers`, `key_pair`, and `genesis_account_public_key` values to match your environment

---

## 🚀 Step 5: Run the Node

Go to your config directory:

```bash
cd ~/iroha-node/configs
```

### For the **first peer** (leader):

```bash
~/iroha/target/debug/iroha --submit-genesis
```

### For additional peers:

```bash
~/iroha/target/debug/iroha
```

You should see logs and messages indicating the node has started and committed the first block.

---

## 🔎 Step 6: Check If Your Node Works

Open a second terminal and run:

```bash
curl http://127.0.0.1:8080/status
```

You should see a status message confirming your node is running.

---

## 🤝 Step 7: Perform Transactions via Your Bare-Metal Node

We’ll now use Iroha CLI directly.

### Set environment for CLI:

```bash
export TORII_URL="http://127.0.0.1:8080"
export ACCOUNT_PUBLIC_KEY="$PUBLIC_KEY"
export ACCOUNT_PRIVATE_KEY="$PRIVATE_KEY"
```

### 1. Listen to transactions:

```bash
iroha events transaction
```

### 2. In another terminal, send a mock tx:

```bash
iroha transaction ping --msg "Hello SORA!"
```

### 3. Query a transaction:

```bash
iroha transaction get --hash <tx_hash>
```

### 4. Check your balance:

```bash
iroha asset get --id "rose##${ACCOUNT_PUBLIC_KEY}@wonderland"
```

### 5. Transfer assets:

```bash
iroha asset transfer   --id "rose##${ACCOUNT_PUBLIC_KEY}@wonderland"   --to "<recipient_pubkey>@wonderland"   --quantity 0.4
```

---

## 🛠 Step 8: Real-World Deployment Checklist

- Build with `--release`
- Generate dedicated keys
- Point P2P public address to your actual IP
- Ensure ports 1337, 8080, and 8180 are open
- Join the testnet by registering your node on the [SORA Devs](https://t.me/soradevs) chat.

---

## 🎉 Done!

You are now running a full Iroha v2.0.0-rc.1 node on bare metal and participating in the SORA v3 testnet. You can perform transactions, monitor status, and help secure the network.

Need help? Join the [SORA Discord](https://discord.gg/sora-xor) or check [https://wiki.sora.org](https://wiki.sora.org) for updates.

## Learn More

- [SORA v3](/sora-v3.md)
- [Running a SORA v3 Testnet Node](/running-a-sora-testnet-node.md)
