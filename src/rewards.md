<!-- TODO: 
- check image alignment
-->

# Rewards

Users are incentivised to provide liquidity, use the SORA network, and support the set of network validators. There are different reward types depending on the activity.

![](<.gitbook/assets/rewards-types.png>)

Let's describe all the currently available rewards in detail:

- Rewards for **Market Makers**
- LP **Farming Bonus rewards**
- Rewards for **buying from the TBC**
- **LP fees**
- **Vesting VAL** for XOR erc-20 holders
- **VALidator rewards**

Here is a quick summary of every reward.

#### Rewards for Market Makers

Polkaswap is distributing an amount of PSWAP proportional to trade volume to market makers who conduct at least 500 transactions per month, with a per-transaction amount of 1 XOR or more (_excluding transaction costs_).

#### LP Farming Bonus rewards

Polkaswap users will earn PSWAP tokens for providing liquidity in any XOR-paired pool. If you contribute to the XOR-VAL, XOR-PSWAP, XOR-DAI, or XOR-ETH pools, your reward is doubled.

#### Rewards for buying from the TBC

A token bonding curve is a smart contract that takes one token as an input and outputs another, using a mathematical formula. A token bonding curve can automatically issue, sell, and buy tokens at prices that are determined by the mathematical functions used.

The PSWAP rewards to be earned are calculated exponentially as a function of current reserves: the lower the reserves at a given time, the greater your rewards for helping boost them.

#### LP Fees

The first way to earn PSWAP rewards on Polkaswap is to provide liquidity on the DEX with XOR and any other token. Liquidity providers get 0.3% of each swap in fees so that they will earn PSWAP for providing liquidity to the pool. Then more users trade, the more liquidity providers get.

#### Vesting VAL for XOR erc-20 holders

Before the SORA launch, a XOR erc-20 holder snapshot was made. The block number of the snapshot in the Ethereum network is 12225000. Each XOR holder from this snapshot will be receiving VAL tokens through vesting.

VAL is vested per day to each XOR from the snapshot, from a remaining portion of the VAL that are burned every day (_burned amount -10% - daily validator reward %_).

**Vesting PSWAP for Market Makers, LP providers and buyers from TBC**

**Rewards can't be claimed instantly.** Vesting speed depends on the amount of PSWAP burned from Polkaswap usage fees. PSWAP are vested with **Strategic Bonus Vesting**, where the vested amount is a percentage of the daily amount of PSWAP burned in transaction fees, as shown in the figure below.

As you can see, at launch the % of burned PSWAP which is allocated as Strategic Bonus Vesting is 0%, and it increases linearly in 5 years to 55%, and then it will stay constant. The other burned PSWAP is reserved for the SORA Parliament (10%) and as a reward for Liquidity Providers. This reward is similar to the one you get from providing liquidity on Uniswap, namely the 0.3% on every trade.

<figure><img src=".gitbook/assets/strategic-bonus-vesting-updated.png" alt=""><figcaption></figcaption></figure>

An example that can be useful to clarify:

_Let's suppose that currently when 100 PSWAP are burned, 81 PSWAP are minted to reward Liquidity Providers, then, 10 PSWAP are minted for the Parliament and 9 PSWAP are minted as a bonus reward. That means that 3 PSWAP (33%) are reserved as a strategic reward for Liquidity Providers, 3 PSWAP (33%) are reserved for buyers from TBC and 3 PSWAP (33%) are reserved for market makers. Every user will receive rewards proportional to their vesting amount._

An important consequence of this design is that it assures that a sudden supply of tokens will not immediately flood the market, and gives clear forward guidance about the supply of tokens in circulation, which is expected to remain constant.

#### VALidator rewards

Users may stake with SORA validators in order to get VAL rewards. Or they can run their own validator node.

VALidator rewards should be claimed using the Polkadot js apps user interface.

Related articles:

- [Polkaswap Rewards](https://medium.com/polkaswap/pswap-rules-everything-around-me-three-pathways-to-polkaswap-rewards-63842caf88c0)
- [SORA VALidator Rewards](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8?source=search_popover-------------------------------------)
- [How to nominate Validators (stake your XOR)](https://wiki.sora.org/guides/how-to-nominate-validators-stake-your-xor)
- [How to Run a SORA Testnet Node](https://medium.com/sora-xor/how-to-run-a-sora-testnet-node-a4d42a9de1af)
- [How to claim nominators and validators rewards](https://wiki.sora.org/guides/how-to-claim-staking-rewards)
- [SORA v2 Implementation](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87)

## Practice

::: tip

We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)

:::

In the practice section, we'll teach you to claim tokens using Polkaswap and Polkadot js apps user interface.

### Claiming SORA vesting and Polkaswap rewards

#### Via Polkaswap

You can claim **Rewards for Market Makers**, **LP Fees**, **LP Farming Bonus rewards**, and **Rewards for buying from TBC** using [Polkaswap.io](http://polkaswap.io) with your SORA account. Just open the **Rewards** section.

![](<.gitbook/assets/rewards-polkaswap-claim.png>)

If you have any rewards, they will be displayed with the reason why you are receiving the rewards. Select the rewards that you'd like to claim (_there might be more than one of them_), confirm, and then sign the transaction.

![](<.gitbook/assets/rewards-polkaswap-claimed-successfully.png>)

#### Claiming VAL for XOR erc-20 holders

If you'd like to claim vested VAL, because you had XOR erc-20 when the snapshot was made, then you should connect the Ethereum account where you held the XOR erc-20 tokens. Use the [Metamask](https://metamask.io/download.html) browser plugin to do this, then click **Connect Ethereum account.**

![](<.gitbook/assets/rewards-connect-ethereum-account.png>)

If PSWAP or VAL tokens are available then you'll be able to claim them.

### Claiming SORA VALidator and nominator rewards

#### Via polkadot.js UI

**Important**: when a nominator or the validator himself claims rewards, those are sent to all the accounts that have received a reward, so it is enough that one person claims for everyone. This may be the reason why you often don't see any reward on the website

1. Go to [polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/staking), click on "Network" and then "Staking". Make sure you are connected to the SORA Network, you should see the logo at the top left.

![](<.gitbook/assets/rewards-view-staking.png>)

2. Click on "Payouts":

    ![](<.gitbook/assets/rewards-view-payouts.png>)

    If there is a staking reward for you to claim, you should see them, as in the screenshot below:
    
    ![](<.gitbook/assets/rewards-view-staking-reward.jpg>)

3. Click on "Payout" and then follow the proposed flow.

![](.gitbook/assets/rewards-click-payout.jpg)

4. Once completed, sign with the extension as prompted.

::: info
Please note that Polkadot.js supports only one asset for the network, that's why it shows XOR. However, it is actually **VAL**.

:::

::: warning

**Rewards expire** after 84 eras. On **SORA**, that's about 21 days.

:::
