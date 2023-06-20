# FAQ

## What is the difference between a centralized exchange (CEX) and a decentralized exchange (DEX)?

A centralized exchange manages security policies, exchange data, and validation on its own internal servers. A decentralized exchange, on the other hand, has no middleman to handle your private keys. All trades and transactions happen through your own wallet with express permission using smart contracts. Read our article detailing key considerations in choosing a DEX [here](https://medium.com/polkaswap/crypto-exchanges-are-evolving-are-you-82707f240bd7).

## What is a liquidity pool?

A liquidity pool is a collection of funds locked in a smart contract. In Polkaswap every trading pair has 2 pools, one for each token: users called liquidity providers (LP) add an equal value of two tokens into a pool. In exchange for providing funds, liquidity providers earn trading fees from the trades that happen in their pool, proportional to their share of the total liquidity.

## Who are liquidity providers?

Liquidity providers can be anyone who is able to supply equal values of XOR and another token to a Polkaswap pair contract. In return, they are given tokens from the exchange contract which can be used to withdraw their proportion of the liquidity pool at any time. Whenever someone trades on Polkaswap, the trader pays a 0.3% fee in XOR which is instantly burned. Once a day, a % of the burned PSWAP is re-minted and distributed to liquidity providers. This percentage starts at 90% and goes down to 35% linearly over the course of 5 years.

## How do liquidity pools work on Polkaswap?

Liquidity pools on Polkaswap work much like other DEXs. Fees are paid in XOR; they are automatically converted in PSWAP and then burned. A percentage of the burned amount is then re-minted and given to liquidity providers. PSWAP rewards start at launch at 100% of burned tokens and go to 35% over the course of five years.

## How does Polkaswap differ from other DEXs, like Uniswap?

Polkaswap has worked to resolve some of the issues with Ethereum based DEXs. Built on Substrate, Polkaswap offers lower transaction costs and faster transactions. Polkaswap also offers swaps across Ethereum, Polkadot and Kusama networks, and more bridges are in development. In addition, with its liquidity aggregation technology, Polkaswap will allow trades against multiple liquidity sources under a custom liquidity aggregation algorithm. The liquidity aggregator algorithm can aggregate liquidity from various sources. Liquidity sources can be in the form of AMM DEXs, order books, or any other algorithm. Ultimately, this helps ensure users find the best value for their swaps.

## Which is the difference between SMART and TBC functions on Polkaswap?

When clicking on Swap on the menu bar you can choose between SMART and TBC functions on Polkaswap, as shown in the picture below.

![](/.gitbook/assets/catt.jpg)

Using TBC your trade will be executed in the [token bonding curve](https://wiki.sora.org/token-bonding-curve). The SORA token bonding curve acts as the decentralized, on-chain manager of the XOR token. It works by taking in reserve assets and minting new XOR, or conversely, de-minting XOR and releasing reserve assets. This solution often reduces slippage for large trades, as the token bonding curve increases the liquidity of the XOR token. In addition, there is a special incentive when a user buys newly minted XOR in the token bonding curve; rewards are in PSWAP. You can read the full article about this reward [here](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

Prices on the token bonding curve and in the pools may be different, in which case you can use the SMART function to trade at the best possible price. Note that the SMART function does not consider PSWAP rewards in its calculations.

## What are the swap fees?

For every trade on Polkaswap there is a 0.3% fee to be paid in XOR. You do not need to hold XOR to make trades. Polkaswap can subtract fees from the trade itself. Fees are immediately converted in PSWAP and then burned. After that, a certain % of the burned amounts is reminted and distributed to liquidity providers, the Parliament and as a strategic bonus vesting to users.

You can learn more about the liquidity providers reward [here](https://medium.com/polkaswap/introducing-polkaswap-6f1db4003747) and about the strategic bonus vesting in "PSWAP Bonus Rewards" section of the Wiki.

## When can I trade DOT and KSM in Polkaswap?

The SORA network launched its [crowdloan](https://wiki.sora.org/sora-kusama-parachain-crowdloan) in January 2022. Once the slot has been secured, some more time is needed to bring KSM and Parachains tokens to SORA Network and Polkaswap.

Parity is currently developing a Polkadot <> Kusama bridge that will bring DOT to the Kusama Network (Parachains included).

Ultimately, the goal is to secure a slot on Polkadot too. The strategy is to build reserves of both DOT and KSM using the unique functionalities of the [token bonding curve](https://wiki.sora.org/token-bonding-curve#token-bonding-curve-and-parachain-auctions).

## Do I need XOR to trade in Polkaswap?

No. You can trade on Polkaswap without having XOR. However, it is only possible if you are swapping **to** XOR. The fees will be subtracted from the receiving amount.

## Are there incentives for liquidity providers on Polkaswap?

Yes, there is an incentive program that will reward liquidity providers on Polkaswap for the next 4 years. About 2.5M PSWAP are allocated daily, and after a vesting period, liquidity providers will be able to claim their PSWAP. You can learn more [here](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509)

## What are the risks of providing liquidity to Polkaswap?

The Polkaswap protocol smart contract, designed with security as its top priority, has been [audited](https://sora.org/audit). However, we cannot guarantee that bugs will not be found in the future. Please do your own research, and always be careful and perform due diligence when trading on Polkaswap. The biggest risk when providing liquidity on Polkaswap is known as **impermanent loss.**

Impermanent loss happens when the prices of the token that was deposited into the pool has changed from the price it entered at. The bigger this difference is between the entry price and the current price, the more exposure liquidity providers are to the risks of impermanent loss. Let's see an example on how it works:

You're providing liquidity to XOR-DAI pair. At the time you enter the pool, 1 XOR = 100 DAI and so you provide to the pool 1 XOR and 100 DAI. Polkaswap requires that the two deposited assets maintain a 1:1 ratio. Now imagine that the total pool contains 10 XOR and 1000 DAI, which is worth $2000. This means you have a 10% share of the pool.

If the price of 1 XOR reaches 400 DAI, in order to maintain the balance of a 1:1 ratio, the total pool would then become 5 XOR and 2000 DAI, according to the [_x\*y=k_ formula](https://uniswap.org/docs/v2/protocol-overview/how-uniswap-works/). If you decide to withdraw funds during this time, you would still withdraw 10% of the pool as that is your share, of which 0.5 XOR and 200 DAI (10% of the pool) is withdrawn, which equals $400 (excluding trading fees).

But if you would have held 1 XOR and 100 DAI instead of depositing into a pool, you'd have $500 worth of assets rather than withdrawing $400. This is what we call impermanent loss.

A video explanation that goes further into detail can be [viewed here](https://www.youtube.com/watch?v=8XJ1MSTEuU0).

Keep in mind that the impermanent loss effects are mitigated by the 0.3% fees paid on each trade and by the [first strategic program](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509).

## How can I earn PSWAP tokens?

Liquidity pools in Polkaswap work much like other DEXs. Fees are paid in XOR; they are automatically converted in PSWAP and then burned. A percentage of the burned amount is then re-minted and given to liquidity providers.

There are three main ways to earn PSWAP:

1. The first way to earn PSWAP tokens is to be one of the liquidity providers on Polkaswap after launch About 25,000 PSWAP will be allocated daily to liquidity providers on Polkaswap, and after a vesting period, users will be able to claim them. To read the full article on the first incentive program, have a look [here](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509).

2. The second way to earn PSWAP is to buy XOR with ETH, DAI, DOT, or KSM from the token bonding curve. Buying XOR with ETH, DAI, DOT, or KSM would help grow the SORA ecosystem, collateralize the bonding curve, and in the case of DOT and KSM, help SORA secure parachain slots for the Polkadot and Kusama chains respectively. 2.5 billion PSWAP tokens have been allocated as rewards for XOR buyers.

   If you’re interested in the math behind the token bonding curve, read the details [here](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

3. The third way to earn PSWAP tokens is from market making rebates on Polkaswap. 4 million PSWAP (200,000 per month) will be reserved proportionally for market makers that have at least 500,000 transactions with an average of at least 1 XOR in each transaction. You can read the details [here](https://medium.com/polkaswap/pswap-rewards-part-3-polkaswap-market-making-rebates-1856f62ccfaa).

## I transferred tokens directly to a pair contract (or a token contract), is there any way I can get them back?

Those contracts have no owner, so all the funds sent there are lost forever.

## Will Polkaswap be available on Fearless Wallet?

Fearless Wallet is built for seamless integration with Polkaswap. Fearless Wallet is a mobile app for Kusama and Polkadot networks, with native support on iOS and Android platforms. Learn more [here](http://fearlesswallet.io).

**SORA Network secured a parachain slot on Kusama Network on February 6th, 2022.**

There are no more auctions planned in the coming months. Soon, KSM tokens will be available on Polkaswap and users can support future auctions using them to buy newly minted XOR from the [token bonding curve](https://wiki.sora.org/token-bonding-curve). By doing so the reserves of the token bonding curve will be increased, which will then be used to make a bid in subsequent auctions. Furthermore, there is a special reward in PSWAP when buying with DOT and KSM, this reward is higher when there are fewer reserves, and will decrease as they accumulate. You can read the full article about the incentive program [here](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

**Update: The SORA Kusama parachain lease was renewed on March 16th, 2023**
