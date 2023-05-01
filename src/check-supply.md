# Check supply

::: info ℹ
**NOTE**: Please consider that you would see the **total supply** (this includes locked tokens and the circulating supply) of all tokens in the network and not only the **circulating** supply of the tokens.
:::

The supply of XOR changes often because it is elastic, managed by the token bonding curve.

The supply of VAL and PSWAP might also change because they are burnt with every transaction.

**The circulating supply for PSWAP at the time of writing is about 600M PSWAP.**

To check the number of tokens on the SORA Network, follow this procedure:

1\) Go to [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc)&#x20;

Click on "Developer" and then "RPC calls"

![](</.gitbook/assets/Screenshot 2021-04-29 at 12.37.45.png>)

2\) Select  **assets → totalSupply(assetId)** fill in *AssetID* and press **"Submit RPC call"**

::: info ℹ
Core asset ID's:

| Token | ID |
| ----------- | ----------- | 
XOR | 0x0200000000000000000000000000000000000000000000000000000000000000 |
TBCD | 0x02000a0000000000000000000000000000000000000000000000000000000000 |
 |VAL | 0x0200040000000000000000000000000000000000000000000000000000000000 |
PSWAP | 0x0200050000000000000000000000000000000000000000000000000000000000 |
XST | 0x0200090000000000000000000000000000000000000000000000000000000000 |
XSTUSD | 0x0200080000000000000000000000000000000000000000000000000000000000 |
ETH | 0x0200070000000000000000000000000000000000000000000000000000000000 |
DAI | 0x0200060000000000000000000000000000000000000000000000000000000000 |


For more Asset ID's check out the [Tokens subsection of the Polkaswap.io Explore](https://polkaswap.io/#/explore/tokens) page.
:::

![](</.gitbook/assets/Screenshot 2021-04-29 at 13.56.40.png>)

The results are shown for XOR:

353.0005 kXOR = 353 000.5 XOR (including XOR on Ethereum network)

![](</.gitbook/assets/Screenshot 2021-04-29 at 14.00.04.png>)

### How to Read the Results

On the output, as you see in the picture above, you'll see the amount of the queried asset. Unfortunately, Polkadot.js only supports one asset for the network, that's why it shows XOR, but actually, it's the asset that you queried, either **PSWAP, VAL, ETH, or DAI.**

The letter before XOR shows the following:

k =  x 1000&#x20;

M _=_ x 1000000&#x20;

B = x 1000000000

For example, a request for the current PSWAP supply shows:

3.5105 BXOR =  3,510,500,000 PSWAP (600M is circulating and the rest is locked on the technical accounts)&#x20;

![](</.gitbook/assets/Screenshot 2021-04-29 at 14.03.08.png>)

For example:&#x20;

* The VAL supply:

70.5077 MXOR = 70,507,700 VAL (VAL on Ethereum is included)

![](</.gitbook/assets/Screenshot 2021-04-29 at 14.19.54.png>)

* The ETH supply:

1.7188 kXOR = 1718.8 ETH (ETH on the SORA Network)

![](</.gitbook/assets/Screenshot 2021-04-29 at 14.22.34.png>)

* The DAI supply:

1.1827 MXOR = 1,182,700 DAI (DAI on the SORA Network)

![](</.gitbook/assets/Screenshot 2021-04-29 at 14.29.47.png>)

