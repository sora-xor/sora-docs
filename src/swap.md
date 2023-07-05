---
title: "Swap on the Sora Network | Sora Docs"
head:
  - - meta
    - name: description
      content: "Learn how to swap digital assets on the Sora Network using the Polkaswap decentralized exchange. Discover the benefits of swapping assets directly on-chain, the available trading pairs, and the process of executing a swap transaction securely and efficiently."
  - - meta
    - name: keywords
      content: "swap, Sora Network, Polkaswap, decentralized exchange, trading pairs, on-chain swapping, swap transaction"
---

# Swaps

## Theory

To Polkaswap means to exchange (swap) tokens on [Polkaswap](https://polkaswap.io/). Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

There are 3 main use cases for Polkaswap:

- Swapping tokens
- Providing liquidity
- Removing liquidity

Along with the network fee in XOR, all three cases require an additional fee: liquidity provider fee, or LP fee. The LP fee is used to incentivise liquidity providers to supply liquidity in liquidity pools. Liquidity pools are described in this [article](https://medium.com/polkaswap/polkaswap-pools-48b726cf3a71).

## Practice

::: tip
We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
   :::
   In the practice section we'll Swap tokens. Providing and Removing the liquidity will be explained in subsequent articles.

### Via Polkaswap

Swapping tokens means exchanging from token A to token B. Polkaswap provides a user friendly interface for swapping tokens.

1. Open the **Swap** page:

   ![](/.gitbook/assets/swap-open-swap-page.png)

2. Select the source asset (the asset you'd like to sell) and the destination asset (the asset that you'd like to buy). Click on the asset drop-down menu to select them:

   <center><img src="/.gitbook/assets/swap-select-tokens.png" width="400"></center>

   The assets from you wallet will be listed by default.

   <center><img src="/.gitbook/assets/swap-listed-tokens.png" width="400"></center>

   You can find and add any asset by entering its ID or name in the search field. Whitelisted assets will be listed.

   If you'd like to add a token that isn't whitelisted, then open the **Custom** tab and enter the asset ID:

   <center><img src="/.gitbook/assets/swap-add-custom-tokens.png" width="400"></center>

3. Confirm that you understand the risk and proceed.

4. Now that you have selected the source and destination assets, you can easily change the direction of the swap by clicking the arrow between the assets:

<center><img src="/.gitbook/assets/swap-change-direction.png" width="400"></center>

5. To start the swap, enter the asset amount (source or destination):

   <center><img src="/.gitbook/assets/swap-enter-asset-amounts.png" width="400"></center>

   There are a few parameters that should be clarified:

   - **Slippage tolerance**. The amounts that you see on the screen are calculated for the moment when you're making the swap. The exchange rate might change before you sign and send the transaction. Your transaction will be reverted if the price changes unfavourably by more than this percentage.
   - **Liquidity provider fee** is a fee that will be distributed among accounts who have a share in the liquidity pool.
   - **Network fee** is a fee for transaction in the network (_gas_).

6. If you're ready to make a swap, click **Swap** then check the details carefully and if everything is ok, confirm and sign the transaction:

<center><img src="/.gitbook/assets/swap-confirm-swap.png" width="400"></center>

::: tip

You can find the transaction in the **Activity** tab on the **Account** screen:

<center><img src="/.gitbook/assets/swap-view-activity.png" width="400"></center>

:::
