# Nodes connection

## Theory

SORA is a decentralized network. This means that anyone can run a node and send transactions to this node. Anyone is able to run a sync, archive or validator node. The Polkaswap application supports node selection features. To be precise: You can select a node in the Polkaswap user interface without any additional development. You can also specify a custom node, except the predefined application nodes.

Related links:

- [Become a SORA validator](https://wiki.sora.org/become-a-sora-validator)
- [How to run a SORA Mainnet node](https://medium.com/sora-xor/how-to-run-a-sora-testnet-node-a4d42a9de1af?source=user\_profile---------11----------------------------)

## Practice

**We recommend using the SORA testnet for practice exercises. Here are the Testnet links:**

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)

In the practice section, we'll be switching between different nodes.

### Switch node

#### Via Polkaswap

As aforementioned in the Theory section, it's really easy to switch between different nodes. You can find the button to switch between nodes in the header.

![](../.gitbook/assets/Untitled.png)

Click on this button.

![](<../.gitbook/assets/Untitled (1) (11).png>)

You will then see the list of nodes that were predefined by the developers. If you'd like to add your own node, then create a pull request in the [Polkaswap GitHub repo.](https://github.com/sora-xor/polkaswap-exchange-web) If you'd like to switch nodes, then just click on the radio button near the node that you'd like to work with. The connection to the node will then be checked. If everything is fine, the node will be switched.

![](<../.gitbook/assets/Untitled (2) (11).png>)

You can add a custom node that you'd like to use. To do that, click the **Add custom node** button. Enter a node name (_whichever name you like_) and address, then click **Add custom node**

![](<../.gitbook/assets/Untitled (4) (9).png>)

If everything is fine, then you'll be working with a new node.

#### Wrong Network Error

If you try to add a node from a different network, then you'll get an error. In the example below I tried to add a Mainnet node on the [Testnet](https://test.polkaswap.io/#/swap). **The application checks the genesis block hash before switching to the node.**

![](<../.gitbook/assets/Untitled (3) (7).png>)
