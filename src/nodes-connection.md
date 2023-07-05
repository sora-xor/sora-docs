---
title: "Node Connections on the Sora Network | Sora Docs"
head:
  - - meta
    - name: description
      content: "Learn about node connections on the Sora Network and understand how nodes communicate and interact with each other. Discover the importance of node connections in maintaining network stability, security, and consensus, and explore the different types of node connections within the Sora ecosystem."
  - - meta
    - name: keywords
      content: "node connections, Sora Network, node communication, network stability, network security, network consensus, Sora ecosystem"
---

# Nodes Connection

SORA is a decentralized network. This means that anyone can run a node and send transactions to this node. Anyone is able to run a sync, archive or validator node. The Polkaswap application supports node selection features. To be precise: You can select a node in the Polkaswap user interface without any additional development. You can also specify a custom node, except the predefined application nodes.

Related links:

- [Become a SORA validator](https://wiki.sora.org/become-a-sora-validator)
- [How to run a SORA Mainnet node](https://medium.com/sora-xor/how-to-run-a-sora-testnet-node-a4d42a9de1af?source=user_profile---------11----------------------------)

## Practice

::: tip

We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)

:::

In the practice section, we'll be switching between different nodes.

### Switch Node

#### Via Polkaswap

It's really easy to switch between different nodes. You can find the button to switch between nodes in the header.

1. Click the switch button:

   <center><img src="/.gitbook/assets/nodes-switch.png" width="400"></center>

   You will then see the list of nodes that were predefined by the developers.

2. Either select a predefined node or add your own:

   <center><img src="/.gitbook/assets/nodes-select.png" width="400"></center>

   ::: info
   If you'd like to add your own node, create a pull request in the [Polkaswap GitHub repo.](https://github.com/sora-xor/polkaswap-exchange-web).
   :::

   - If you'd like to switch nodes to one of the predefined ones, then just click on the radio button near the node that you'd like to work with. The connection to the node will then be checked. If everything is fine, the node will be switched.

       <center><img src="/.gitbook/assets/nodes-select-predefined.png" width="400"></center>

   - If you'd like to use a custom node, click the **Add custom node** button. Enter a node name (_whichever name you like_) and address, then click **Add custom node**:

       <center><img src="/.gitbook/assets/nodes-select-custom.png" width="400"></center>

#### Wrong Network Error

If you try to add a node from a different network, then you'll get an error. In the example below we tried to add a Mainnet node on the [Testnet](https://test.polkaswap.io/#/swap). **The application checks the genesis block hash before switching to the node.**

<center><img src="/.gitbook/assets/nodes-wrong-network-error.png" width="400"></center>
