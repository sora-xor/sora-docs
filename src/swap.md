# Swaps

## Theory

To Polkaswap means to exchange (swap) tokens on [Polkaswap](https://polkaswap.io/). Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

There are 3 main use cases for Polkaswap:

1. Swapping tokens
2. Providing liquidity
3. Removing liquidity

Along with the network fee in XOR, all 3 cases require an additional fee - liquidity provider fee (LP fee). The LP fee is used to incentivise liquidity providers to supply liquidity in liquidity pools. Liquidity pools are described in this [article](https://medium.com/polkaswap/polkaswap-pools-48b726cf3a71).

## Practice

::: info ℹ
**We recommend using the SORA testnet for practice exercises. Here are the Testnet links:**

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting\&hl=en\&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
:::
In the practice section we'll Swap tokens. Providing and Removing the liquidity will be explained in subsequent articles.

### Swaps


#### Via Polkaswap

Swapping tokens means exchanging from token A to token B. Polkaswap provides a user friendly interface for swapping tokens.

Open the **Swap** page.

![](</.gitbook/assets/Untitled(23).png>)

Then select the source asset (the asset you'd like to sell) and the destination asset (asset that you'd like to buy). Just click on the asset drop-down to select them.

![](</.gitbook/assets/Untitled(1)(7).png>)

The assets from you wallet will be listed by default.

![](</.gitbook/assets/Untitled(2)(9).png>)

You can find and add any asset by entering its ID or name in the search field. Whitelisted assets will be listed.

If you'd like to add a token that isn't whitelisted, then open the **Custom** tab and enter the asset ID.

![](</.gitbook/assets/Untitled(3)(10).png>)

Confirm that you understand the risk and proceed.

Ok, Now that you have selected the source and destination assets, you can easily change the direction of the swap by clicking the arrow between the assets.

![](</.gitbook/assets/Untitled(4)(2).png>)

To start the swap, enter the asset amount (source or destination).

![](</.gitbook/assets/Untitled(5)(5).png>)

There are a few parameters that should be clarified:

1. **Slippage tolerance** - The amounts that you see on the screen are calculated for the moment when you're making the swap. The exchange rate might change before you sign and send the transaction. Your transaction will be reverted if the price changes unfavourably by more than this percentage.
2. **Liquidity provider fee** - This is a fee that will be distributed among accounts who have a share in the liquidity pool.
3. **Network fee** - This is a fee for transaction in the network (_gas_).

If you're ready to make a swap, click **Swap** then check the details carefully and if everything is ok, confirm and sign the transaction.

![](</.gitbook/assets/Untitled(6)(4).png>)

Finally, you can find the transaction in the **Activity** tab on the **Account** screen.

![](</.gitbook/assets/Untitled(7)(1).png>)

