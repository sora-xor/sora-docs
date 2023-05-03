# Advanced trading

## Theory

To Polkaswap means to exchange(swap) tokens on [Polkaswap](https://polkaswap.io/), Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

Polkaswap's technical design allows using different liquidity sources for trading. At the moment Polkaswap supports 2 liquidity sources:

1. XYK Pool
2. Token Bonding Curve(TBC)

XYK Pools are managed by the community. Anyone is able to provide liquidity to any pool. Every pool has XOR as a base asset. For example, there are 2 pools: XOR-VAL, XOR-PSWAP. If I make a VAL-PSWAP exchange, then the swap routing will be the following: from VAL to XOR, from XOR to PSWAP.

The TBC is described in detail in this [article](https://wiki.sora.org/token-bonding-curve). You can buy and sell XOR using the TBC, and initial collateral assets are USDT, VAL, PSWAP.

When you make a swap with the default settings, the Liquidity Proxy algorithm will select the liquidity pool with the best price. However, buying XOR from the TBC is rewarded with PSWAP. The liquidity source might change in the swap settings, which makes trading more flexible.

Swap settings and other topics will be covered in the Practice section.

## Practice

::: tip
We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
:::

In this practice section, we'll Swap tokens with advanced settings. Also, fees will be explained.

### Selecting the market maker algorithm

#### Via Polkaswap

It's really easy to switch between liquidity sources in Polkaswap. Just open the swap page and select the assets that you'd like to swap.

![](</.gitbook/assets/Untitled(20).png>)

On the top right corner, you can find the Market configuration. Click on the icon.

![](</.gitbook/assets/Untitled(1)(3).png>)

By default, the **SMART** option is selected. It means that the Liquidity Router will find the best-priced liquidity source. You can also switch to **TBC**.

![](</.gitbook/assets/Untitled(2)(13).png>)

Let's try to compare prices for purchasing XOR.

⚠️ **The price on the testnet is different from the price on the mainnet. The Practice exercise example was made on the testnet.**

![](</.gitbook/assets/Untitled(3)(13).png>)

![](</.gitbook/assets/Untitled(4)(8).png>)

The price of XOR is different when buying from TBC or from XYK Pool.

Let's go through exchange parameters one by one:

**TBC parameters:**

* *VAL PER XOR* - the price of 1 XOR in VAL
* *XOR PER VAL* - the price of 1 VAL in XOR
* *Minimum Received* - The minimum number of destination assets that you'll get after the swap
* *Liquidity provider fee* - Fee that liquidity provider will take. In this case, it's a TBC.
* _Network fee_ - SORA fee for processing the transaction(gas).

**XYK Pool parameters:**

* *VAL PER XOR* - the price of 1 XOR in VAL
* *XOR PER VAL* - the price of 1 VAL in XOR
* *Minimum Received* - The minimum number of destination assets that you'll get after the swap
* *Liquidity provider fee* - Fee that liquidity provider will take. In this case, it's an XYK Pool.
* *Network fee* - SORA fee for processing the transaction

#### What Insufficient _liquidity_ means

You can get the error saying "**Not enough liquidity**". It's important to understand what this means.

![](</.gitbook/assets/Untitled(5)(3).png>)

![](</.gitbook/assets/Untitled(6)(3).png>)

Liquidity pools(XYK pools) are explained in the [video](https://www.youtube.com/watch?v=cizLhxSKrAc) on the Finematics Youtube channel. It's recommended to watch it in order to understand how Pools work in general.

If you get the "**Insufficient Liquidity**" error, it means that the XYK Pool doesn't have enough assets in order to process your transaction. You can make the swap amount smaller or wait until somebody provides additional liquidity to the pool.

TBC liquidity is backed by reserves. If there aren't enough reserves for your transaction, you'll get the same message.
