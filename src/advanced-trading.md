---
title: "Advanced Trading on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Explore advanced trading strategies and features on the SORA network's Polkaswap decentralized exchange. Learn about limit orders, stop-loss orders, and other advanced trading functionalities that enable you to optimize your trading activities and take advantage of market opportunities within the SORA ecosystem."
  - - meta
    - name: keywords
      content: "advanced trading, SORA network, Polkaswap, limit orders, stop-loss orders, trading functionalities, SORA ecosystem"
---

# Advanced Trading

## Theory

To Polkaswap means to exchange (swap) tokens on [Polkaswap](https://polkaswap.io/), Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

Polkaswap's technical design allows using different liquidity sources for trading. At the moment Polkaswap supports two liquidity sources:

- XYK Pool
- Token Bonding Curve (TBC)

XYK Pools are managed by the community. Anyone is able to provide liquidity to any pool. Every pool has XOR as a base asset. For example, there are two pools: XOR-VAL, XOR-PSWAP. If you make a VAL-PSWAP exchange, then the swap routing will be the following: from VAL to XOR, from XOR to PSWAP.

The TBC is described in detail [here](tbc.md). You can buy and sell XOR using the TBC, and initial collateral assets are USDT, VAL, PSWAP.

When you make a swap with the default settings, the Liquidity Proxy algorithm selects the liquidity pool with the best price. However, buying XOR from the TBC is rewarded with PSWAP. The liquidity source might change in the swap settings, which makes trading more flexible.

Swap settings and other topics will be covered in the Practice section.

## Practice

::: tip
We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
   :::

In this practice section, we'll swap tokens with advanced settings and explain how the fees work.

### Selecting the market maker algorithm

#### Via Polkaswap

To switch between liquidity sources in Polkaswap, follow these steps.

1. Open the swap page and select the assets that you'd like to swap.

2. In the top right corner, you can find the Market configuration. Click on the icon:

  <center><img src="/.gitbook/assets/advanced-trading-smart.png" width="400"></center>

3. Choose the market algorithm: **SMART** or **TBC**.

By default, the **SMART** option is selected, which means that the Liquidity Router will find the best-priced liquidity source. You can also switch to **TBC**:

  <center><img src="/.gitbook/assets/advanced-trade-algorithm.png" width="400"></center>

  <center><img src="/.gitbook/assets/advanced-trade-switch-to-tbc.png" width="400"></center>

Let's compare prices for purchasing XOR.

::: warning

The price on the testnet is different from the price on the mainnet. The Practice exercise example was made on the testnet.

:::

The price for XOR when the **TBC** option is selected:

<center><img src="/.gitbook/assets/advanced-trade-tbc-xor-price.png" width="400"></center>

The price for XOR when the **SMART** option is selected:

<center><img src="/.gitbook/assets/advanced-trade-smart-xor-price.png" width="400"></center>

The price of XOR differs depending on whether you are buying from TBC or from XYK Pool.

Let's go through exchange parameters one by one:

**TBC parameters:**

- _VAL PER XOR_: The price of 1 XOR in VAL.
- _XOR PER VAL_: The price of 1 VAL in XOR.
- _Minimum Received_: The minimum number of destination assets that you'll get after the swap
- _Liquidity provider fee_: The fee that liquidity provider will take. In this case, it's a TBC.
- _Network fee_: SORA fee for processing the transaction (gas).

**XYK Pool parameters:**

- _VAL PER XOR_: The price of 1 XOR in VAL.
- _XOR PER VAL_: The price of 1 VAL in XOR.
- _Minimum Received_: The minimum number of destination assets that you'll get after the swap.
- _Liquidity provider fee_: The fee that liquidity provider will take. In this case, it's an XYK Pool.
- _Network fee_: SORA fee for processing the transaction (gas).

**What Insufficient _liquidity_ means**

It is possible to get an error saying "**Not enough liquidity**" and understanding what this means is important.

<center><img src="/.gitbook/assets/advanced-trade-insufficient-liquidity-tbc.png" width="400"></center>

<center><img src="/.gitbook/assets/advanced-trade-insufficient-liquidity-smart.png" width="400"></center>

::: tip

Liquidity pools (XYK pools) are explained in the [video](https://www.youtube.com/watch?v=cizLhxSKrAc) on the Finematics Youtube channel. It's recommended to watch it in order to understand how Pools work in general.

:::

If you get the "**Insufficient Liquidity**" error, it means that the XYK Pool doesn't have enough assets in order to process your transaction. You can make the swap amount smaller or wait until somebody provides additional liquidity to the pool.

TBC liquidity is backed by reserves. If there aren't enough reserves for your transaction, you'll get the same message.
