# Referral System

The referral system motivates users to involve new users in the SORA economy. When you invite people, you are the **referrer**. As a referrer, you’ll get 10% of your referral’s network fees. One referrer can have as many referrals as they like. Each referral can have only one referrer.

The referral graph is stored on-chain, so users have to pay network fees for setting the link between referral and referrer. The referrer bonds some XOR, and when a referral joins the network using the referrer’s code, the bond amount is reduced in order to pay fees.

## Practice

::: tip

We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)

:::

In the practice section, we'll create a referral link and get rewards.

### Bond XOR

First of all, XOR should be bonded in order to pay fees for setting up the referrals.

1. Open the **Rewards** section and click **Referral Program.** Initially, you have 0 XOR bonded and 0 Referrals.

    <center><img src="/.gitbook/assets/bond-open-referral.png" width="400"></center>

2. Click to **XOR Bonded** and then on **Bond more**:

    <center><img src="/.gitbook/assets/bond-choose-bond-more.png" width="400"></center>

3. Enter the amount to bond. You can enter any amount, but keep in mind that it should be more than 0.0007 XOR in order to pay a fee for the referral.

    <center><img src="/.gitbook/assets/bond-enter-amount.png" width="400"></center>

4. Now you will see XOR bonded, as well as the link that you can share with your referrals. Copy the link and send it to your friends. When they join the network, you’ll see them in the referrals list.

    <center><img src="/.gitbook/assets/bond-share-referrals.png" width="400"></center>

### Check Referrals and Rewards

If someone joins SORA using your referral link you’ll get this information on the referral screen:

<center><img src="/.gitbook/assets/referral-someone-joined.png" width="400"></center>

If your referral makes a transaction then you’ll see the reward that you get. You don’t need to claim this reward, as it will be added automatically to your XOR balance.

<center><img src="/.gitbook/assets/referral-someone-made-transaction.png" width="400"></center>