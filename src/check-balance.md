# Check user balances

### Via Polkadot.js UI

1\) Go to [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc);

Click on **Developer** and then **RPC calls**

![](.gitbook/assets/1.png)

Select _*assets* → *freeBalance(accountid,assetid)* fill in *AssetID* and press *"Submit RPC call"*

::: info
For more Asset ID's check out the [Tokens subsection of the Polkaswap.io Explore](https://polkaswap.io/#/explore/tokens) page. You can find the core token Asset ID's in the [Check supply](check-supply.md) page.
:::

![](.gitbook/assets/Cattura2.png)

![](.gitbook/assets/12.jpg)

This is the expected output. In this case, the VAL amount has been checked (look at AssetID)

Unfortunately, Polkadot.js supports only one asset for the network, that's why it shows XOR, but actually, it's asset that you asked - **PSWAP, VAL, ETH, or DAI..**

The letter before XOR means the following:

k =  x 1000&#x20;

M _=_ x 1000000&#x20;

B = x 1000000000

m = / 1000

**So, the shown amount is 80.434mXOR = 0.080434 VAL**

For more details on how to read this output, [take a look at this](check-supply.md#how-to-read-the-results).
