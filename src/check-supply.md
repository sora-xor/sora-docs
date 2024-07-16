---
title: Check Supply on the SORA Network | SORA Docs
head:
  - - meta
    - name: description
      content: Learn how to check the token supply on the SORA network and get insights into the circulating supply and total supply of assets. Discover the tools, interfaces, and resources available to check the supply of tokens on the SORA network and stay informed about the available token quantities within the SORA ecosystem.
  - - meta
    - name: keywords
      content: check supply, SORA network, token supply, circulating supply, total supply, assets, tools, interfaces
---

# Check Supply

::: info
For new users or users without Polkadot.js experience, it is
recommended to use the Polkaswap Statistics page.
:::

## Via Polkaswap

1. In the [Polkaswap](https://polkaswap.io/) interface, navigate to
   the Statistics section

![](/.gitbook/assets/polkaswap-home-stats.png)

2. Scroll to the bottom of the page and you will find the Supply
   section.

![](/.gitbook/assets/polkaswap-statistics-fees-and-supply.png)

3. To see the supply of other tokens, click on the token name in the
   supply section and choose the token you would like to query.

![](/.gitbook/assets/polkaswap-statistics-supply-token-list.png)

## Via Polkadot.js

::: info
Please be aware that you would see the **total supply** (this includes locked tokens and the circulating supply) of all tokens in the network and not only the **circulating** supply of the tokens.
:::

- The supply of XOR changes often because it is elastic, managed by the [token bonding curve](tbc.md).
- The supply of VAL and PSWAP might also change because they are burnt with every transaction.
- The circulating supply for PSWAP at the time of writing is about 600M PSWAP.

To check the number of tokens on the SORA network, follow this
procedure:

1. Go to [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc).

2. Click on "Developer" and then "RPC calls":

   ![](/.gitbook/assets/check-supply-rpc-calls.png)

3. Select **assets → totalSupply(assetId)**.
4. Fill in _AssetID_ and press **"Submit RPC call"**.

   ::: details Core asset IDs

   | Token  | ID                                                                 |
   | ------ | ------------------------------------------------------------------ |
   | XOR    | 0x0200000000000000000000000000000000000000000000000000000000000000 |
   | TBCD   | 0x02000a0000000000000000000000000000000000000000000000000000000000 |
   | VAL    | 0x0200040000000000000000000000000000000000000000000000000000000000 |
   | PSWAP  | 0x0200050000000000000000000000000000000000000000000000000000000000 |
   | XST    | 0x0200090000000000000000000000000000000000000000000000000000000000 |
   | XSTUSD | 0x0200080000000000000000000000000000000000000000000000000000000000 |
   | ETH    | 0x0200070000000000000000000000000000000000000000000000000000000000 |
   | DAI    | 0x0200060000000000000000000000000000000000000000000000000000000000 |

   For more Asset IDs check out the [Tokens subsection of the Polkaswap.io Explore](https://polkaswap.io/#/explore/tokens) page.
   :::

   ![](/.gitbook/assets/check-supply-fill-in-asset-id.png)

   The results are shown for XOR:

   353.0005 kXOR = 353 000.5 XOR (including XOR on the Ethereum network)

   <center><img src="/.gitbook/assets/check-supply-xor-output.png" width="400"></center>   

### How to Read the Results

In the output, as you see in the picture above, you'll get the amount of the queried asset. Unfortunately, Polkadot.js only supports one asset for the network, XOR. This why it shows the supply in XOR. However, it is actually the asset that you queried: either PSWAP, VAL, ETH, or DAI.

The letter before XOR means that the number is multiplied by the following amount:

| Letter | Multiplier |
| ------ | ---------- |
| k      | 1000       |
| m      | 1000000    |
| B      | 1000000000 |
| m      | 0.001      |

#### PSWAP Supply Example

For example, a request for the current PSWAP supply shows:

3.5105 BXOR = 3,510,500,000 PSWAP (600M is circulating and the rest is locked in the technical accounts)

![](/.gitbook/assets/check-supply-pswap-example.png)

#### VAL Supply Example

70.5077 MXOR = 70,507,700 VAL (VAL on Ethereum is included)

![](/.gitbook/assets/check-supply-val-example.png)

#### ETH Supply Example

1.7188 kXOR = 1718.8 ETH (ETH on the SORA network)

![](/.gitbook/assets/check-supply-eth-example.png)

#### DAI Supply Example

1.1827 MXOR = 1,182,700 DAI (DAI on the SORA network)

![](/.gitbook/assets/check-supply-dai-example.png)

## Learn More

- [Polkaswap Statistics](./statistics-polkaswap.md)
- [Explore Polkaswap](./explore-polkaswap.md)
