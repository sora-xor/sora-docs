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
