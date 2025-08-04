---
title: "Running a SORA v3 Testnet Node | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to run a node on the SORA v3 Testnet and participate in testing new features."
outline: [2, 3]
---

# Running a SORA v3 Testnet Node

The SORA v3 Testnet is based on the [Hyperledger Iroha](https://docs.iroha.tech/) distributed ledger. The following guide explains how to run a node (a _peer_, in Iroha terms) and perform basic actions such as queries and transactions on the testnet.

## Prerequisites

You will need:

- A machine with Linux or macOS (Windows support is not warranted)
- A static publicly accessible IP address
- At least 128 MB RAM and 4 GB of free disk space.

## Run a Node

### 1. Install

This guide covers two ways of running Iroha and its utilities:

1. [Containers via Docker/Podman](#docker). **Pros:** cross-platform, closer to production setup, no environment setup required, using pre-built published images; **cons:** heavier.
2. [Bare-metal](#bare-metal). **Pros:** runs directly on your system without virtualisation, lighter, shorter commands, building from source; **cons:** requires setting up Rust, building from source.

#### Docker/Podman {#docker}

Follow the [installation guide](https://docs.docker.com/get-docker/) for your operating system.

To check that Docker is installed, run the `docker --version` command in your terminal. You will get an output like this:

```txt
Docker version 27.5.1, build 9f9e405
```

Check the container with the `docker run hello-world` command in the terminal. If everything works fine, Docker will pull the hello-world image and run it.

::: details Expand to see the `docker run hello-world` output

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
e6590344b1a5: Download complete
Digest: sha256:d715f14f9eca81473d9112df50457893aa4d099adeb4729f679006bf5ea12407
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

:::

::: tip Podman

[Podman](https://podman.io/) is a daemonless container engine fully compatible with Docker[^1]. It has an advantage of having less headaches with installation and management than Docker.

You can install Podman and simply replace `docker` with `podman` everywhere in this guide, for example:

```diff
- docker run -it hyperledger/iroha:testnet-2.0.0-rc.1 kagami crypto
+ podman run -it hyperledger/iroha:testnet-2.0.0-rc.1 kagami crypto
```

:::

[^1]: At least in the scope of this guide.

#### Bare-Metal {#bare-metal}

<!-- TODO: specify minimal Rust version required -->

Prerequisites:

- Linux or macOS
- [Rust installed](https://www.rust-lang.org/tools/install). Minimal required Rust version: 1.77+
- [Git](https://git-scm.com) installed

We will be building the necessary binaries from source: `irohad` (the node itself), `iroha` (the client to interact with `irohad`), and `kagami` (tool to generate keys).

Run this `cargo install` command to build and install the binaries in your system directly from the GitHub repository:

```sh
cargo install --git https://github.com/hyperledger-iroha/iroha.git \
    --rev v2.0.0-rc.1.5 --locked \
    irohad iroha_cli iroha_kagami
```

::: tip

You can also build the binaries by cloning the repo manually. See the full [Working with Iroha Binaries guide](https://docs.iroha.tech/reference/binaries.html#source).

:::

Verify installation:

```shell
irohad --version
iroha --version
kagami --version
```

**Expected output:**

<!-- TODO: replace with rc.1 -->

```
irohad version=2.0.0-rc.1.5 git_commit_sha=4c21e6b cargo_features=default,iroha_telemetry,schema_endpoint,telemetry
iroha version=2.0.0-rc.1.5 git_commit_sha=4c21e6b
kagami 2.0.0-rc.1.5
```

### 2. Generate and Submit Keys

To generate a unique key pair, you can use `kagami crypto`:

::: code-group

```sh [Docker]
docker run -it hyperledger/iroha:testnet-2.0.0-rc.1 kagami crypto
```

```sh [Bare-metal]
kagami crypto
```

:::

**Example output:**

```log
Public key (multihash): "ed0120CAA7C95F78150097932C3E1C62B89D73007C5F30D5907DD0FBE7EA09AF6658E2"
Private key (multihash): "8026205F4FD09D9F9C390B9E3B0DB7CFA3E8B8D567707227E549519CC0C170D87447B9"
```

Go to the [SORA Devs Telegram group](https://t.me/soradevs), ask to be added to the **Testnet chat**, and share your **public key** (NOT the _private_ one!) in that chat. The testnet administrators will register your node and account[^2] in the testnet with the given public key.

<!-- TODO: support footnotes -->

[^2]: The account will be registered under the `wonderland` domain and have ID `<your public key>@wonderland`.

For testnet purposes, you'll use the same key pair for both the node and the account. In production environments, always use separate key pairs.

::: danger

Keep your _private key_ securely recorded and confidential.

:::

### 3. Prepare Configuration

This guide assumes you will create a directory `~/sora3-testnet` and place configuration files there: `node.toml` (for `irohad`) and `client.toml` (for `iroha`).

In `node.toml`, replace `public_key` and `private_key` with your keys. Set `network.public_address` with your machine's public IP address.

In `client.toml`, replace `account.public_key` and `account.private_key` with your keys. You can also override `torii_url` with your machine's public IP address (as full URL, e.g. `http://<your ip>:8080`) to re-use the client configuration from outside of the machine the node is running on.

::: code-group

```toml [node.toml]
chain = "00000000-0000-0000-0000-000000000000"

# TODO: replace with your keys
public_key = ""
private_key = ""

# NOTE: this is a publicly available Fujiwara node
#       to which your node will connect first
trusted_peers = ["ed012082528CCC8727333530C8F6F19F70C23882DEB1BF2BA3BE4A6654C7E8A91A7731@fujiwara.sora.org:1337"]

[genesis]
public_key = "ed01204164BF554923ECE1FD412D241036D863A6AE430476C898248B8237D77534CFC4"

[torii]
address = "0.0.0.0:8080"

[network]
address = "0.0.0.0:1337"
# TODO: replace with your peer's advertised global address
public_address = "255.255.255.255:1337"
```

```toml [client.toml]
chain = "00000000-0000-0000-0000-000000000000"

# NOTE: you can also replace `0.0.0.0` with your public address
#       and make requests from outside the server
torii_url = "http://0.0.0.0:8080"

[account]
# NOTE: admins register your account under the `wonderland` domain by default
domain = "wonderland"

# TODO: replace with your keys
public_key = ""
private_key = ""
```

:::

::: tip Firewall check

For `network.public_address`, ensure that this address and port are accessible from outside your local network (e.g., port-forwarded if behind NAT).

:::

### 4. Start Iroha Peer

::: code-group

```sh [Docker]
docker run \
  --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  irohad --config /config/node.toml
```

```sh [Bare-metal]
irohad --config ~/sora3-testnet/node.toml
```

:::

You may initially see some errors; they should resolve automatically once the node begins syncing with peers.

Confirm that it works on the machine:

```sh
curl localhost:8080/status
curl localhost:8080/peers
```

::: info Troubleshooting

If the peer list is empty, your node may not be registered. You can troubleshoot this with testnet admins.,

There also could be network issues (e.g. firewall). You can check whether your machine is accessible by the public address you've specified in the configuration by executing this from outside the machine where `irohad` runs. This will make sure that your Iroha peer is accessible by the rest of the network as well.

For example:

```sh
curl <your public address>:8080/status
```

:::

## Interact with the Network

### 1. Send and Inspect a Sample Transaction

First, create a transaction listener:

::: code-group

```sh [Docker]
docker run \
  --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  iroha --config /config/client.toml events transaction

```

```sh [Bare-metal]
iroha --config ~/sora3-testnet/client.toml events transaction
```

:::

**Example output:**

```
Listening to events with filter: Pipeline(Transaction(TransactionEventFilter { hash: None, block_height: None, status: None }))
```

In a new terminal session, submit a sample transaction:

::: code-group

```sh [Docker]
docker run \
  --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  iroha --config /config/client.toml \
    transaction ping --msg "Hello SORA!"

```

```sh [Bare-metal]
iroha --config ~/sora3-testnet/client.toml \
    transaction ping --msg "Hello SORA!"
```

:::

If successful, this will print the transaction hash:

```json
"23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67"
```

::: info

If you get an error that your account is not found, your account may not be registered. Troubleshoot with testnet admins.

:::

If the transaction listener is running, you should see a confirmation that the transaction has been approved:

```json
{
  "Pipeline": {
    "Transaction": {
      "hash": "23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67",
      "block_height": 2,
      "status": "Approved"
    }
  }
}
```

### 2. Query Transaction Details

Retrieve the details of a specific transaction using its hash:

::: code-group

```sh [Docker]
docker run \
  --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  iroha --config /config/client.toml transaction get \
    --hash 23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67
```

```sh [Bare-metal]
iroha --config ~/sora3-testnet/client.toml transaction get \
  --hash 23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67
```

:::

**Example output:**

```json
{
  "block_hash": "377BB64FB105B66B9A518903C1F861E144DC552A1C695BC0E1D3C87DE004B6CD",
  "value": {
    "version": "1",
    "content": {
      ...
      "msg": "Hello SORA!"
      ...
    }
  },
  "error": null
}
```

### 3. Transfer Assets

By default, your account receives an initial airdrop of 100 `rose` assets. Verify this with the following query:

::: code-group

```sh [Docker]
docker run \
  --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  iroha --config /config/client.toml \
    asset get --id "rose##<your_public_key>@wonderland"
```

```sh [Bare-metal]
iroha --config ~/sora3-testnet/client.toml \
    asset get --id "rose##<your_public_key>@wonderland"
```

:::

**Example output:**

```json
{
  "id": "rose##ed0120CE7FA46C9DCE7EA4B125E2E36BDB63EA33073E7590AC92816AE1E861B7048B03@wonderland",
  "value": {
    "Numeric": "100"
  }
}
```

To transfer some roses to another account, use the following command and confirm the balance update:

::: code-group

```sh [Docker]
# tip: You may want to launch an interactive shell inside the container for convenience
docker run --volume ~/sora3-testnet/:/config \
  -it hyperledger/iroha:testnet-2.0.0-rc.1 \
  /bin/bash

iroha --config /config/client.toml asset transfer \
    --id "rose##<your_public_key>@wonderland" \
    --to "<another_public_key>@wonderland" \
    --quantity 0.4

iroha --config /config/client.toml asset get \
  --id "rose##<your_public_key>@wonderland"
```

```sh [Bare-metal]
iroha --config ~/sora3-testnet/client.toml asset transfer
    --id "rose##<your_public_key>@wonderland" \
    --to "<another_public_key>@wonderland" \
    --quantity 0.4

iroha --config ~/sora3-testnet/client.toml asset get \
  --id "rose##<your_public_key>@wonderland"
```

:::

**Example output:**

```json
{
  "id": "rose##ed0120CE7FA46C9DCE7EA4B125E2E36BDB63EA33073E7590AC92816AE1E861B7048B03@wonderland",
  "value": {
    "Numeric": "99.6"
  }
}
```

For further information, consult the `iroha` [command-line tool help](https://github.com/hyperledger-iroha/iroha/blob/testnet/2.0.0-rc.1/crates/iroha_cli/CommandLineHelp.md).

## Bonus: Easy Scripting with Deno and Iroha JavaScript SDK

::: tip

This is optional and is relevant for scripting/automation.

:::

With [Deno](https://deno.com), the next generation JavaScript runtime, and Iroha JavaScript SDK it is straightforward to write simple or complex JavaScript/TypeScript logic to interact with Iroha **using just a single file** and no extra configuration. The SDK provides full typing and IDE completion.

Prerequisites:

- [Deno installed](https://deno.com/) (version 2+)

Copy the following sample script to `~/sora3-testnet/test.ts`, replacing the key pair with yours and optionally setting your node's public address:

```ts
import * as types from "jsr:@iroha/core@0.3.1/data-model";
import { Client } from "jsr:@iroha/client@0.3.0";

const key = types.KeyPair.fromParts(
  // TODO: put your keys here
  types.PublicKey.fromMultihash(
    "ed0120CAA7C95F78150097932C3E1C62B89D73007C5F30D5907DD0FBE7EA09AF6658E2",
  ),
  types.PrivateKey.fromMultihash(
    "8026205F4FD09D9F9C390B9E3B0DB7CFA3E8B8D567707227E549519CC0C170D87447B9",
  ),
);

const client = new Client({
  chain: "00000000-0000-0000-0000-000000000000",
  // NOTE: you can replace this with your node's public address
  toriiBaseURL: new URL(`http://fujiwara.sora.org/v5`),
  authority: new types.AccountId(
    key.publicKey(),
    new types.DomainId("wonderland"),
  ),
  authorityPrivateKey: key.privateKey(),
});

console.log("Health:", await client.api.health());

const events = await client.events({
  filters: [
    types.EventFilterBox.Pipeline.Transaction({
      hash: null,
      blockHeight: null,
      status: null,
    }),
  ],
});

events.ee.on("event", (event) => console.log("event", event));
console.log("Established events stream");

const tx = client.transaction(
  types.Executable.Instructions([
    types.InstructionBox.Log({
      level: types.Level.INFO,
      msg: "Hello SORA from Deno!",
    }),
  ]),
);

console.log("Submitting tx with hash:", tx.hash.payload.hex());
await tx.submit({ verify: true });
```

This script initializes a client instance, checks node's health, establishes events WebSocket connection, and submits a sample transaction.

Run:

```bash
deno run --allow-env --allow-net ~/sora3-testnet/test.ts
```

**Example output:**

```
Health: { kind: "healthy" }
Established events stream
Submitting tx with hash: 2314b0fc95397ae95a5e17b2b4e9ba14e0f51cf92fc573fbd81a881f23ac3c4d
event {
  kind: "Pipeline",
  value: {
    kind: "Transaction",
    value: { hash: Hash {}, blockHeight: null, status: { kind: "Queued" } }
  }
}
```

See more examples and detailed API documentation at https://jsr.io/@iroha/client@0.3.0 and https://jsr.io/@iroha/core@0.3.1

## Real-World Deployment Checklist

- Store your private keys securely (use password managers or hardware tokens).
- Configure Iroha to run as a background service (e.g., systemd), or as part of a containerized setup.
- Monitor logs and peer connectivity regularly.

## Learn More

- [SORA Tokenomics](/tokenomics.md)
- [Social Insurance for Systematically Important Infrastructure](./social-insurance.md)
- [Hyperledger Iroha 2 Docs](https://docs.iroha.tech)
