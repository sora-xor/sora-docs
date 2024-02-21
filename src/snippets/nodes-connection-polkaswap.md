It's really easy to switch between different nodes. You can switch nodes on the status footer at the bottom of the screen.

1. Click the Node Connected status:

   <center><img src="/.gitbook/assets/nodes-switch.png" width="400"></center>

   You will then see the node you are connected to.

2. Click on Select Network Node to switch the node:

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
