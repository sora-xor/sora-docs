---
title: "Running a SORA v3 Testnet Node | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to run a node on the SORA v3 Testnet and participate in testing new features."
  - - meta
    - name: keywords
      content: "running a node, SORA network, node setup, testnet"
---

# How to Run a SORA v3 Testnet Node

The SORA v3 Testnet is based on the [Hyperledger Iroha](https://docs.iroha.tech/) framework. The following guide will teach you how to run a node (in Iroha terms, a peer) and perform basic actions such as queries and transactions on the testnet.

## Prerequisites

You will need:

- A machine with Linux, Windows, or macOS
- A static publicly accessible IP address
- [Docker](https://docs.docker.com/get-docker/) (preferably the latest version). Follow the installation guide for your operating system.
- At least 128 MB RAM dedicated to a single node container.
- At least 4GB free space for a single node container.

To check that Docker is installed, run the `docker --version` command in your terminal. You will get an output like this:

```txt
Docker version 27.5.1, build 9f9e405
```

Check the container with the `docker run hello-world` command in the terminal. If everything works fine, Docker will pull the hello-world image and run it.

::: details Expand to see the `docker run hello-world` output

```
C:\Users\user>docker run hello-world
docker: error during connect: Head "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/_ping": EOF.
See 'docker run --help'.

C:\Users\user>docker run hello-world
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

If something goes wrong, please visit the [Docker documentation](https://docs.docker.com/). You can also download Docker from here:

- [macOS](https://docs.docker.com/desktop/setup/install/mac-install/)
- [Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
- [Linux](https://docs.docker.com/desktop/setup/install/linux/)

## Run a Node

### 1. Download the Configuration File

Download the `docker-compose.volunteer.yml` [configuration file](https://github.com/hyperledger-iroha/iroha/raw/refs/heads/testnet/2.0.0-rc.1/defaults/docker-compose.volunteer.yml) from the Iroha repository.

You can just navigate to the folder where you placed the file in your command line.

### 2. Generate Your Key Pair and Declare the Public Key

To generate a unique key pair, download and run the utility tool:

```bash
docker pull hyperledger/iroha:testnet-2.0.0-rc.1
docker run hyperledger/iroha:testnet-2.0.0-rc.1 kagami crypto
```

**Example output:**

```log
Public key (multihash): "ed0120CAA7C95F78150097932C3E1C62B89D73007C5F30D5907DD0FBE7EA09AF6658E2"
Private key (multihash): "8026205F4FD09D9F9C390B9E3B0DB7CFA3E8B8D567707227E549519CC0C170D87447B9"
```

Go to the [SORA Devs](https://t.me/soradevs) Telegram group, ask to be added to the **Testnet chat** and share your **public key** in that group. The testnet administrators will register your **node** and **account** in the testnet.

Keep your **private key** securely recorded and confidential.

::: tip Note

For testnet purposes, you'll use the same key pair for both the node and the account. In production environments, always use separate key pairs.

:::

::: tip Note

In production environments, operating your own node is not necessarily required; you can interact with public endpoints instead.

:::

### 3. Launch Your Node

#### 3.1. Ensure a Static IP Address

Ensure that your machine or server has a static, publicly accessible IP address. Most cloud providers assign one by default.

#### 3.2. Configure Port Access

- Open port `1337` to allow inbound traffic from any nodes.
- Open port `8080` to allow inbound traffic from your client.

#### 3.3. Specify Your Keys in the Docker Compose Configuration

Edit the previously downloaded `docker-compose.volunteer.yml` file and update the following environment variables:

```yml
# PEER CONFIG
PUBLIC_KEY: <your_public_key>
PRIVATE_KEY: <your_private_key>
P2P_PUBLIC_ADDRESS: <your_advertised_host>:1337
```

#### 3.4. Start the Docker Container

From the folder containing the `docker-compose.volunteer.yml` file, run the following command to launch your node:

```bash
docker compose -f docker-compose.volunteer.yml up -d
```

**Example output:**

```log
[+] Running 2/2>docker compose -f docker-compose.volunteer.yml up -d
 ✔ Network downloads_default     Created                             0.1s
 ✔ Container downloads-irohad-1  Started
```

### 4. Check the Node Status

Once the administrators register your node, verify its status using one of the following commands:

```bash
curl <your_host>:8080/status
curl <your_host>:8080/peers
```

::: tip Note

If the peer list is empty, your node may not be registered, or there might be network issues. Troubleshoot with testnet admins.

:::

## Perform Transactions via Your Node

### 0. Prepare Your Client

To interact with your node, set up a client.
Download the `docker-compose.volunteer.client.yml` [configuration file](https://github.com/hyperledger-iroha/iroha/raw/refs/heads/testnet/2.0.0-rc.1/defaults/docker-compose.volunteer.client.yml) and update the following environment variables:

```yml
# CLIENT CONFIG OVERRIDE
TORII_URL: <your_host>:8080
ACCOUNT_PUBLIC_KEY: <your_public_key>
ACCOUNT_PRIVATE_KEY: <your_private_key>
```

Next, run the following command to start a container:

```bash
docker compose -f docker-compose.volunteer.client.yml up -d
```

### 1. Send and Inspect a Mock Transaction

To listen for incoming transactions, attach a shell to the running container:

```bash
docker exec -it downloads-irohad-1 bash
```

And once you're in the container's shell, run:

```bash
cd /config
iroha events transaction
```

This will create a transaction listener.

**Example output:**

```bash
C:\Users\user>docker exec -it downloads-irohad-1 bash
iroha@263a8e4bbbd1:/$ cd /config
iroha@263a8e4bbbd1:/config$ iroha events transaction
Listening to events with filter: Pipeline(Transaction(TransactionEventFilter { hash: None, block_height: None, status: None }))
```

In another instance of an attached shell, send a mock transaction:

```bash
cd /config
iroha transaction ping --msg "This is a mock transaction"
```

**Example output:**

```json
"23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67"
```

::: tip Note

If the account is not found, your account may not be registered. Troubleshoot with testnet admins.

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

```bash
cd /config
iroha transaction get --hash "23EC79207A5573333057A4836533A72ED015AADE4DABC00CA8676120C919DE67"
```

**Example output:**

```json
{
  "block_hash": "377BB64FB105B66B9A518903C1F861E144DC552A1C695BC0E1D3C87DE004B6CD",
  "value": {
    "version": "1",
    "content": {
      ...
      "msg": "This is a mock transaction"
      ...
    }
  },
  "error": null
}
```

### 3. Transfer Assets

By default, your account receives an initial airdrop of 100 `rose` assets. Verify this with the following query:

```bash
cd /config
iroha asset get --id "rose##<your_public_key>@wonderland"
```

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

```bash
cd /config
iroha asset transfer --id "rose##<your_public_key>@wonderland" --to "<another_public_key>@wonderland" --quantity 0.4
iroha asset get --id "rose##<your_public_key>@wonderland"
```

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

## Learn More

- [SORA Tokenomics](/tokenomics.md)
- [Social Insurance for Systematically Important Infrastructure](./social-insurance.md)
