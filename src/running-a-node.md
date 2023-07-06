---
title: "Running a Node on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to run a node on the SORA Network and become an active participant in the network's infrastructure. Discover the requirements, setup process, and benefits of running a node to support the decentralization and security of the SORA Network."
  - - meta
    - name: keywords
      content: "running a node, SORA Network, node setup, network infrastructure, decentralization, network security"
---

# How to Run a SORA Mainnet Node

### TL;DR

- Anyone can run a node on the SORA mainnet
- There are two types of nodes:
  - Syncing nodes (that just receive and relay data)
  - Validating nodes (that make the blocks)

## Prerequisites

You will need:

- A machine with Linux, Windows or macOS
- [Docker](https://docs.docker.com/get-docker/). Follow the installation guide for your operating system.
- At least 8GB RAM (preferably 16GB RAM, although 64GB RAM will be needed for production)
- 300GB free space (preferably SSD, with the ability to expand)
- Intel(R) Core(TM) i7–7700K CPU @ 4.20GHz (alternatively, a 4-Core processor with a frequency of 2.2 GHz)

Check that docker is installed using the `docker --version` command in terminal.

`C:\\Users\\Pg> docker --version
Docker version 20.10.2, build 2291f61
C:\\Users\\Pg>`

It’s recommended to use the latest docker version.

Check the container with the `docker run hello-world` command in terminal. If everything works fine, Docker will pull the hello-world image and run it. You should see the following output:

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

If something went wrong, please visit the [Docker documentation](https://docs.docker.com/) site, and depending on your operating system, you can also download Docker here:

- [macOS](https://docs.docker.com/get-docker/#docker-for-mac)
- [Windows](https://docs.docker.com/get-docker/#docker-for-windows/install/)
- [Linux](https://docs.docker.com/get-docker/#docker-for-linux)

## Get the latest SORA Node version number

Users should use version **1.9.0** for the time being. We will update this article with the latest version after every update.

You should use the latest SORA Node version in order to run a
node. You can see the latest build number here, and find the last
version with the`x.y.z` format.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a49714c356c75503542344f5558636f34424b5a6168512e706e67.png)

Use this version number for further `docker` commands in this guide. The number of the version will be marked as **`<version>`** in the commands (_note: enter the version number without the brackets_).

## Running a Syncing Node

### On Linux/Mac

Pull the docker image from the docker repository:

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration:

```
mkdir sora2
cd sora2
```

And grant access to the folder

`` chown 10000:10000 `pwd ``

On macOS you might need to use **instead**:

`sudo chown <username>:1000`

Run the docker image (don’t forget to insert your version below!)

```
docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:1.9.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
```

### On Windows

Pull the docker image from the docker repository

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration

`C:\\Users\\<username>\\sora2-node`

Check access to the folder:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a4f5a4a76777275426230417557486c337971632d31772e706e67.png)

All checkboxes should be activated for the user:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a526b316e6456326468744966627269666349465f6f512e706e67.png)

Run the docker command:

```
docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:1.9.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
```

Now you can connect to your node with [polkadot.js apps](https://polkadot.js.org/apps/#/explorer). Select Local node and click Switch.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a675270484c526a50724a6e31717374374f78304234772e706e67.png)

Then your node should sync!

## Running a Validator Node

### On Linux/Mac

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration

```
mkdir sora2
cd sora2
```

And grant access to the folder

```
chown 10000:10000 `pwd`
```

On macOS you might need to use **instead**:

`sudo chown <username>:1000`

And run the Docker command

`docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:1.4.5 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled`

You can add the following flag to enable [Telemetry](https://telemetry.polkadot.io/#list/SORA) for your node

`--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

### On Windows

Pull the docker image from the docker repository

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration

`C:\\Users\\<username>\\sora2-node`

Check the access to the folder:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a4f5a4a76777275426230417557486c337971632d31772e706e67.png)

All checkboxes should be activated for the user:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a526b316e6456326468744966627269666349465f6f512e706e67.png)

Run the Docker command

`docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:1.9.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled`

## Get session keys

### With polkadot.js app

Open [polkadot.js apps](https://polkadot.js.org/apps/#/explorer) and switch to your local node.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a376c4c6e6c6f465a547971564f4c5563693934557a672e706e67.png)

In the Development section, select Local Node _(ws://127.0.0.1:9944)_ and click _Switch_.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a79676a50545a657a5441335971326b586b4669756e412e706e67.png)

Now you’re able to see the screen with your node information. _(Once your node has fully synced)_

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a5845547a617830746574635f7731594d796f626570672e706e67.png)

Navigate to _Developer_ → _RPC calls_

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a544f5f45474a4b566758735f502d3139785470544a772e706e67.png)

Select _author_ → _rotateKeys()_

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a394a5a6c4a70414b657a68716f56556b787a34527a672e706e67.png)

And click the _Submit RPC call_ button.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a3065305a6b534d70684a52337769746646654e3942512e706e67.png)

You’ll get your session key in the output. Copy the key as you will need them for a further step.

### With command line

Open the terminal (or other command line client) and run the command

`curl -H “Content-Type: application/json” -d ‘{“id”:1, “jsonrpc”:”2.0", “method”: “author_rotateKeys”, “params”:[]}’ http://localhost:9933`

The output will contain the session key

`{“jsonrpc”:”2.0",”result”:”0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72”,”id”:1}`

Copy the result, in the current example it is

`0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72`

## Adding a Validator

First, you should go to Accounts and already have an account connected.

Navigate to Network → Staking → Account actions

and click _Validator_:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a54784c476e4f354c583036706d706344747841525f672e706e67.png)

Select stash and controller account. It’s recommended to use different accounts for stash and controller. (In the example we are using PAVEL (EXTENSION))

Set the bonded value:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a6b59357153754c4554656c635f697931565058477a772e706e67.png)

Set the session key (the result of rotateKeys call) and reward commission:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a457344696d7335776f764e32425579547a74344752672e706e67.png)

And sign the transaction.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a61726e2d62506d7854566e39484a646c4c31736756672e706e67.png)

Make sure that you have been added to the stashes:

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a4f4c737344573233313770517037696c734b694342512e706e67.png)

Finally, wait for the next Era.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a507659414768624832793878775f45314171637242772e706e67.png)

When the next Era starts, your validator will be added.

## Get Payouts

Open _Staking_ → _Payouts_. If your validator participates in the consensus, then you’ll be able to get payouts after the Era.

Polkadot.js apps always display XOR, because they don’t support multi
assets. There should be said VAL on the screenshot below.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a6e47636f465357746b4e3767745877685343513145672e706e67.png)

Click the Payout all button and sign the transaction

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a624671427546516655553367417333637247625758512e706e67.png)

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a6a43676f695f53676f5a66647a595432323361576e512e706e67.png)

Make sure to pay attention as the reward will be shared among Validator and Nominators according the Stake.

## Add node to Telemetry

If you want to add your node to [telemetry](https://telemetry.polkadot.io/#list/SORA) just add this tag when you run the docker image

`--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

You can change the name of your node by editing the parameter value of:

`--name sora2-node`

## Running an Archive node

### On Linux/Mac

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration

```
mkdir sora2
cd sora2
```

And grant access to the folder

```
chown 10000:10000 `pwd`
```

On macOS you might need to use **instead**:

`sudo chown <username>:1000`

And run the Docker command

`docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:1.9.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled`

### On Windows

Pull the docker image from the docker repository

`docker pull sora2/substrate:1.9.0`

Create a folder for the node configuration

`C:\\Users\\<username>\\sora2-node`

Check the access to the folder

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a4f5a4a76777275426230417557486c337971632d31772e706e67.png)

All checkboxes should be activated for the user

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a526b316e6456326468744966627269666349465f6f512e706e67.png)

Run the Docker command

`docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:1.9.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled`

The node will take some time to sync. The output in logs should look like this:

```
2021-04-30 11:33:33 💤 Idle (0 peers), best: #0 (0x7e4e…8ad5), finalized #0 (0x7e4e…8ad5), ⬇ 37.1kiB/s ⬆ 16.3kiB/s
2021-04-30 11:33:38 ⚙️  Syncing 31.0 bps, target=#38470 (1 peers), best: #155 (0xa9e2…5b22), finalized #0 (0x7e4e…8ad5), ⬇ 127.6kiB/s ⬆ 0.9kiB/s
2021-04-30 11:33:43 ⚙️  Syncing 35.6 bps, target=#38470 (2 peers), best: #333 (0x4c68…2957), finalized #0 (0x7e4e…8ad5), ⬇ 7.9kiB/s ⬆ 0.2kiB/s
2021-04-30 11:33:48 ⚙️  Syncing 32.4 bps, target=#38471 (2 peers), best: #495 (0x9082…f220), finalized #0 (0x7e4e…8ad5), ⬇ 41.3kiB/s ⬆ 1.1kiB/s
2021-04-30 11:33:53 ⚙️  Syncing 34.6 bps, target=#38471 (2 peers), best: #668 (0xb34a…121a), finalized #512 (0x1f6e…cc65), ⬇ 0.1kiB/s ⬆ 0
```

You can connect to your own node with Polkadot.js apps. [Open Polkadot.js apps](https://polkadot.js.org/apps/) and navigate to the Development section in the network selector.

![](/.gitbook/assets/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3732302f312a6653486345676358574c395a53612d4252744c7456772e706e67.png)

If you’re running a node on your local machine then select Local Node and click Switch. Otherwise, enter your custom endpoint and save.

## FAQ

Q: **I’m getting an error starting the node**.

A: _Double check if you have entered the command and flags correctly and that there are no typos. If that does not work,\_ l_ocate your SORA2 folder, erase its contents, pull the docker image and try running the node again._

Q: **I don’t have XOR for initial staking**.

A: _You can exchange tokens for XOR on [*Polkaswap*](https://polkaswap.io), or transfer tokens from ETH to the SORA Mainnet using the [bridge function in Polkaswap](https://polkaswap.io/#/bridge) and then exchange for XOR._

Q: **Where can I see my node in telemetry?**

A: _You can see it [*here*](https://telemetry.polkadot.io/#map/SORA)_

Q: **My node is having trouble syncing, what can I do?**

A: _You can add the setting `--in-peers 80` and that should solve the issue, otherwise see the next question_.

Q: **I have checked all the documentation and my question still has no answer, who else can I ask?**

A: _You can always join the [SORA Devs Telegram community](https://t.me/soradevs) and ask any other questions you may have there, other community members and the admins will be happy to help!_
