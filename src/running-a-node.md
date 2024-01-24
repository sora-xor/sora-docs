---
title: "Running a Node on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to run a node on the SORA network and become an active participant in the network's infrastructure. Discover the requirements, setup process, and benefits of running a node to support the decentralization and security of the SORA network."
  - - meta
    - name: keywords
      content: "running a node, SORA network, node setup, network infrastructure, decentralization, network security"
---

# How to Run a SORA Mainnet Node

## TL;DR

- Anyone can run a node on the SORA mainnet
- There are two types of nodes:
  - **Syncing** nodes that just receive and relay data
  - **Validating** nodes that make the blocks. Read more in [Consensus](./consensus).

## Prerequisites

You will need:

- A machine with Linux, Windows, or macOS
- [Docker](https://docs.docker.com/get-docker/) (preferably the latest version). Follow the installation guide for your operating system.
- At least 8GB RAM, preferably 16GB RAM. For production, you will need 64GB RAM.
- 300GB free space (preferably SSD, with the ability to expand)
- Intel(R) Core(TM) i7–7700K CPU @ 4.20GHz (alternatively, a 4-Core processor with a frequency of 2.2 GHz)

To check that Docker is installed, run the `docker --version` command in terminal. You will get an output like this:

```txt
Docker version 20.10.2, build 2291f61
```

Check the container with the `docker run hello-world` command in terminal. If everything works fine, Docker will pull the hello-world image and run it.

::: details Expand to see the `docker run hello-world` output

```
C:\\Users\\Pg> docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:95ddb6c31407e84e91a986b004aee40975cb0bda14b5949f6faac5d2deadb4b9
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which
 sent it to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
<https://hub.docker.com/>

For more examples and ideas, visit:
<https://docs.docker.com/get-started/>
```

:::

If something went wrong, please visit the [Docker documentation](https://docs.docker.com/). You can also download Docker from here:

- [macOS](https://docs.docker.com/get-docker/#docker-for-mac)
- [Windows](https://docs.docker.com/get-docker/#docker-for-windows/install/)
- [Linux](https://docs.docker.com/get-docker/#docker-for-linux)

## Get the latest SORA Node version number

Users should use version **3.2.0** for the time being. We will update this article with the latest version after every update.

You should use the latest SORA Node version in order to run a
node. You can see the latest build number here, and find the last
version with the`x.y.z` format.

![](/.gitbook/assets/running-node-version-tag.png)

Use this version number for further `docker` commands in this guide. The number of the version will be marked as **`<version>`** in the commands. Please note that you would need to enter the version number **without the brackets**.

## Running a Syncing Node

### On Linux/Mac

1. Pull the docker image from the docker repository:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration:

   ```bash
   mkdir sora2
   cd sora2
   ```

3. Grant access to the folder:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: warning
   On macOS you might need to use this instead:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Run the docker image (don’t forget to insert your version below!)

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

### On Windows

1. Pull the docker image from the docker repository:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration:

   ```txt
   C:\\Users\\<username>\\sora2-node
   ```

3. Check access to the created folder:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Run the docker command:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

5. Now you can connect to your node with [polkadot.js apps](https://polkadot.js.org/apps/#/explorer). Select Local node and click Switch.

   ![](/.gitbook/assets/running-node-connect-custom.png)

Now your node should sync!

## Running a Validator Node

### On Linux/Mac

1. Pull the docker image from the docker repository:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration

   ```bash
   mkdir sora2
   cd sora2
   ```

3. Grant access to the created folder:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: warning
   On macOS you might need to use this instead:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Run the Docker command:

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

   You can add the following flag to enable [Telemetry](https://telemetry.polkadot.io/#list/SORA) for your node

   `--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

### On Windows

1. Pull the docker image from the docker repository

   ```
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Check the access to the folder:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Run the Docker command

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

## Get session keys

::: info
It is recommended to use the command line to get the session keys, as
Polkadot.JS sometimes has trouble connecting to the local node.
:::

### With polkadot.js app

1. Open [polkadot.js apps](https://polkadot.js.org/apps/#/explorer) and switch to your local node.

   ![](/.gitbook/assets/running-node-via-polkadot-switch-to-local.png)

2. In the Development section, select Local Node _(ws://127.0.0.1:9944)_ and click _Switch_.

   ![](/.gitbook/assets/running-node-via-polkadot-select-local.png)

   Now you’re able to see the screen with your node information. _(Once your node has fully synced)_

   ![](/.gitbook/assets/running-node-via-polkadot-view-info.png)

3. Navigate to _Developer_ → _RPC calls_:

   ![](/.gitbook/assets/running-node-via-polkadot-navigate-to-rpc-calls.png)

4. Select _author_ → _rotateKeys()_:

   ![](/.gitbook/assets/running-node-via-polkadot-select-rotatekeys.png)

5. Click the _Submit RPC call_ button:

   ![](/.gitbook/assets/running-node-via-polkadot-submit-rpc.png)

6. Copy the session key from the output. You wll need the key later.

### With command line

1. Open the terminal (or other command line client) and run the command

   ```
   curl -H “Content-Type: application/json” -d ‘{“id”:1, “jsonrpc”:”2.0", “method”: “author_rotateKeys”, “params”:[]}’ http://localhost:9933
   ```

   The output will contain the session key:

   ```json
   {“jsonrpc”:”2.0",”result”:”0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72”,”id”:1}
   ```

2. Copy the result, in the current example it is `0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72`.

## Adding a Validator

1. First, you should go to Accounts and already have an account connected. Navigate to Network → Staking → Account actions, and click _Validator_:

   ![](/.gitbook/assets/running-node-add-validator.png)

2. Select stash and controller account. It’s recommended to use different accounts for stash and controller. (In the example we are using PAVEL (EXTENSION))

3. Set the bonded value:

   ![](/.gitbook/assets/running-node-set-bonded-value.png)

4. Set the session key (the result of rotateKeys call) and reward commission:

   ![](/.gitbook/assets/running-node-set-key-reward-commission.png)

5. Sign the transaction.

   ![](/.gitbook/assets/running-node-sign-transaction.png)

6. Make sure that you have been added to the stashes:

   ![](/.gitbook/assets/running-node-check-stashes.png)

7. Finally, wait for the next Era.

   ![](/.gitbook/assets/running-node-wait-for-next-era.png)

When the next Era starts, your validator will be added.

## Get Payouts

1. Open _Staking_ → _Payouts_. If your validator participates in the consensus, then you’ll be able to get payouts after the Era.

   Polkadot.js apps always display XOR, because they don’t support multi
   assets. There should be said VAL on the screenshot below.

   ![](/.gitbook/assets/running-node-get-payouts.png)

2. Click the Payout all button and sign the transaction

   ![](/.gitbook/assets/running-node-payout-all.png)

   ![](/.gitbook/assets/running-node-get-payouts-sign.png)

Make sure to pay attention as the reward will be shared among Validator and Nominators according the Stake.

## Add node to Telemetry

If you want to add your node to [telemetry](https://telemetry.polkadot.io/#list/SORA) just add this tag when you run the docker image

`--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

You can change the name of your node by editing the parameter value of:

`--name sora2-node`

## Running an Archive node

### On Linux/Mac

1. Pull the docker image from the docker repository

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration

   ```bash
   mkdir sora2
   cd sora2
   ```

3. Grant access to the folder

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: warning
   On macOS you might need to use this instead:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Run the Docker command

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

### On Windows

1. Pull the docker image from the docker repository

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Create a folder for the node configuration:

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Check the access to the folder

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Run the Docker command:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

The node will take some time to sync. The output in logs should look like this:

```
2021-04-30 11:33:33 💤 Idle (0 peers), best: #0 (0x7e4e…8ad5), finalized #0 (0x7e4e…8ad5), ⬇ 37.1kiB/s ⬆ 16.3kiB/s
2021-04-30 11:33:38 ⚙️  Syncing 31.0 bps, target=#38470 (1 peers), best: #155 (0xa9e2…5b22), finalized #0 (0x7e4e…8ad5), ⬇ 127.6kiB/s ⬆ 0.9kiB/s
2021-04-30 11:33:43 ⚙️  Syncing 35.6 bps, target=#38470 (2 peers), best: #333 (0x4c68…2957), finalized #0 (0x7e4e…8ad5), ⬇ 7.9kiB/s ⬆ 0.2kiB/s
2021-04-30 11:33:48 ⚙️  Syncing 32.4 bps, target=#38471 (2 peers), best: #495 (0x9082…f220), finalized #0 (0x7e4e…8ad5), ⬇ 41.3kiB/s ⬆ 1.1kiB/s
2021-04-30 11:33:53 ⚙️  Syncing 34.6 bps, target=#38471 (2 peers), best: #668 (0xb34a…121a), finalized #512 (0x1f6e…cc65), ⬇ 0.1kiB/s ⬆ 0
```

You can connect to your own node with Polkadot.js apps. [Open Polkadot.js apps](https://polkadot.js.org/apps/) and navigate to the Development section in the network selector.

![](/.gitbook/assets/running-node-connect.png)

If you’re running a node on your local machine then select Local Node and click Switch. Otherwise, enter your custom endpoint and save.

## FAQ

Q: **I’m getting an error starting the node**.

A: _Double check if you have entered the command and flags correctly and that there are no typos. If that does not work,\_ locate your sora2 folder, erase its contents, pull the docker image and try running the node again._

Q: **I don’t have XOR for initial staking**.

A: _You can exchange tokens for XOR on [*Polkaswap*](https://polkaswap.io), or transfer tokens from ETH to the SORA Mainnet using the [bridge function in Polkaswap](https://polkaswap.io/#/bridge) and then exchange for XOR._

Q: **Where can I see my node in telemetry?**

A: _You can see it [*here*](https://telemetry.polkadot.io/#map/SORA)_

Q: **My node is having trouble syncing, what can I do?**

A: _You can add the setting `--in-peers 80` and that should solve the issue, otherwise see the next question_.

Q: **I have checked all the documentation and my question still has no answer, who else can I ask?**

A: _You can always join the [SORA Devs Telegram
community](https://t.me/soradevs) and ask any other questions you may
have there, other community members and the admins will be happy to
help!_

Q: **I cannot access the local node from Polkadot.JS to get my session
keys, what should I do?**

A: _Sometimes Polkadot.JS has trouble connecting to local nodes, in
that case, we recommend you use the command line instructions to get
your session keys._

## Learn More

- [SORA Tokenomics](/tokenomics.md)
- [VAL Token](/val.md)
