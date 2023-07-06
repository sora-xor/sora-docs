<!-- TODO:
- update image names in this topic
- check image alignment
-->

# Liquidity Operations

Everything about pool XYK liquidity provision in SORA.

## Theory

To Polkaswap means to exchange (_swap_) tokens on [Polkaswap](https://polkaswap.io/), Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

XYK Pools are managed by the community. Anyone can provide liquidity to any pool. Liquidity pools (XYK pools) are explained in this [video](https://www.youtube.com/watch?v=cizLhxSKrAc) on the Finemtaics YouTube channel. It's recommended to watch it in order to understand how Pools work in general.

You can provide liquidity in an XYK pool so that users are able to exchange tokens. There are three main cases here:

1. The pool doesn't exist and you'll be the first liquidity provider (LP).
2. The pool exists and you're adding liquidity.
3. You already have a share in the pool and you'd like to remove liquidity.

Every liquidity provider gets PSWAP rewards for providing liquidity. Rewards are the incentive for users to provide liquidity. There are two types of rewards:

- Rewards paid from LP fees
- [LP Farming bonus rewards](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509)

Rewards paid from LP fees are distributed every day for each liquidity pool. For example, if you have a share in three liquidity pools, then your rewards that are available to claim will be updated twice a day.

LP Farming bonus rewards are distributed every six hours.

Along with the network fee in XOR, all three cases require an additional fee: liquidity provider fee (LP fee). The LP fee is used to incentivize liquidity providers to supply liquidity in liquidity pools. Liquidity pools are described in this [article](https://medium.com/polkaswap/polkaswap-pools-48b726cf3a71).

::: info

Important: before providing liquidity read about the [risks involved here](https://wiki.sora.org/polkaswap/polkaswap-faq#what-are-the-risks-of-providing-liquidity-to-polkaswap).

:::

In order to see the total pooled amounts, check the tool Ceres has built [https://tools.cerestoken.io/#/tokens](https://tools.cerestoken.io/#/tokens).

## Practice

::: tip
We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
   :::

In the practice section, we'll create a liquidity pool, provide liquidity to the existing pool and remove the liquidity.

### Creating a New Liquidity Pool

#### Via Polkaswap

To create a pool:

1. Open Polkaswap, then open the Pool section.

   ![](.gitbook/assets/provide-liquidity-open-pool-tab.png)

2. Click the **Create a pair** button.
3. Select the tokens that should compose the trading pair. Keep in mind that all trading pairs in Polkaswap must contain XOR and another token. That's why the XOR token is preselected and can't be changed.

   ![](.gitbook/assets/provide-liquidity-create-a-pair.png)

4. Select the second token for the trading pair.

   ![](.gitbook/assets/provide-liquidity-token-pair-already-exists.png)

   Oooops! The trading pair for XOR-VAL is already created. It means that someone has already created a pool with this trading pair and provided the liquidity.

   ![](.gitbook/assets/provide-liquidity-create-new-pair.png)

   ::: info
   Pay attention when you're the first liquidity provider. The ratio of tokens will set the price of this pool.
   :::

5. Enter the deposit amounts for each token:

   ![](.gitbook/assets/provide-liquidity-enter-amounts.png)

   Let's describe the parameters:

   - **XOR per SAT** is the price of XOR in SAT tokens if a user will trade using this pool
   - **SAT per XOR** is the price of SAT in XOR tokens if a user will trade using this pool
   - **Network fee** is the fee for processing the transaction
   - **Share of Pool** is the percentage of your tokens in the pool

6. If everything is ok, confirm and sign the transaction.

   ![](.gitbook/assets/provide-liquidity-confirm-transaction.png)

Now you can see your pool share on the Pool page:

![](.gitbook/assets/provide-liquidity-view-created-pool.png)

### Providing Liquidity to an Existing Liquidity Pool

#### Via Polkaswap

There are two options where you can add liquidity:

1. If you already have a share in a specific pool, you can click **Add liquidity** on the pool details.
2. If you'd like to provide liquidity to a pool where you don't have a share, then click **Add liquidity** on the Pool page.

![](.gitbook/assets/provide-liquidity-add-liquidity-to-created-pool.png)

The next steps are pretty much the same. If you select the pool where you already have a share, then the token pair will be preselected, otherwise, you should select the tokens by yourself.

1. Select the token pair.

   ![](.gitbook/assets/provide-liquididty-add-select-pair.png)

2. Enter the amount of source asset or destination asset.

   ::: info
   If you enter the amount of a source asset, the amount of destination asset will be calculated according to the pool math. If you enter the amount of destination asset, the amount of source asset will be calculated according to the pool math as well.
   :::

   ![](.gitbook/assets/provide-liquidity-add-enter-amounts.png)

   Let's describe the parameters:

   - **XOR per VAL** is the price of XOR in VAL tokens if a user will trade using this pool
   - **VAL per XOR** is the price of VAL in XOR tokens if a user will trade using this pool
   - **Network fee** - the fee for processing the transaction
   - **Share of Pool** - the percentage of your tokens in the pool

3. If everything is ok, confirm and sign the transaction.

   ![](.gitbook/assets/provide-liquidity-add-confirm-transaction.png)

Now you can see your share of the pool on the Pool page

![](.gitbook/assets/provide-liquidity-view-pool-after-added-liquidity.png)

### Removing Liquidity from the Pool

#### Via Polkaswap

Once you've provided the liquidity to the pool, you're also able to remove it (_get your tokens back_).

1. Open the Pool page, then open the pool details and click on **Remove liquidity.**

   ![](.gitbook/assets/remove-liquidity-open-pool-tab.png)

   You'll see a lot of options there, but don't worry!

   ![](.gitbook/assets/remove-liquidity-view-options.png)

2. Enter the amount of source asset or destination asset to be removed.

   ::: info
   Pay attention, if you enter the amount of source asset, the amount of destination asset will be calculated according to the pool math. If you enter the amount of destination asset, the amount of source asset will be calculated according to the pool math as well.
   :::

   You can use the **Amount slider** to select the percentage of liquidity to be removed:

   ![](.gitbook/assets/remove-liquidity.gif)

3. If you're ok with the given parameters, confirm and sign the transaction.

   ![](.gitbook/assets/remove-liquidity-confirm-transaction.png)

You can then check if your pool share was reduced

![](.gitbook/assets/remove-liquidity-view-pool-after-transaction.png)

## Checking Transactions

You can find the transactions for providing and removing liquidity you have made in the block explorer. Open the list of transactions and filter it using the PoolXYK module parameter and **deposit_liquidity** call for providing liquidity or **withdraw_liquidity** call for removing liquidity.

![](.gitbook/assets/provide-liquidity-check-transactions-1.png)

![](.gitbook/assets/provide-liquidity-check-transactions-2.png)
