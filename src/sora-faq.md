# SORA FAQ

## What is SORA built on?

The SORA Network ([Polkaswap](https://polkaswap.io/) included) is built with [Substrate](https://www.parity.io/substrate), a framework for creating cryptocurrencies and other decentralized systems, that scales more efficiently than Ethereum, allowing for lower fees. Polkadot is built with Substrate, therefore projects built with Substrate can run natively on Polkadot as Parachains.

## How can I support SORA in the parachain auctions?

SORA won the 24th Kusama parachain auction for the 25th lease (February 22nd, 2022 - Jan 31st, 2023) on the 6th of February, 2022. The details can be found [here](https://wiki.sora.org/sora-kusama-parachain-crowdloan).&#x20;

After the slot on the Kusama Network is secured, users can support the funding of the auctions in the following years by buying XOR with DOT and KSM from the token bonding curve. By doing so, you'll increase the reserves of the token bonding curve and they will be used to make a bid in the auctions. Furthermore, there is a special reward in PSWAP when buying with DOT and KSM, this reward is higher when there are fewer reserves, and will decrease as they accumulate. You can read the full article about the incentive program [here](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

In the coming months, there are no more auctions planned. Shortly, KSM tokens will be available on Polkaswap and users can support future auctions using them to buy newly minted XOR from the [token bonding curve](https://wiki.sora.org/token-bonding-curve). By doing so, you'll increase the reserves of the token bonding curve, which will be used to place a bid in the auctions. Furthermore, there is a special reward in PSWAP when buying with DOT and KSM, this reward is higher when there are fewer reserves, and will decrease as they accumulate. You can read the full article about the incentive program&#x20;

## How do I participate in the SORA Parliament?

The Parliament is expected in late 2022. Though not decided, approximately 150 XOR are likely to be required for a citizenship bond. This bond can be slashed if the citizen is convicted by a Policy Jury of breaking rules. Through a sortition process, Parliament members will be chosen among citizens.

All citizens have an equal chance of being selected, have equal voting power, and have equal rewards for participation.

## Can I buy tokens with FIAT?

Yes, on [Polkaswap.io](https://polkaswap.io/#/swap) you can buy tokens using Moonpay. Currently, only ETH and DAI are available as tokens, you can read more about how to do so in this [tutorial](https://wiki.sora.org/guides/how-to-buy-tokens-using-moonpay-with-your-credit-card).

## What is an asset ID (address)?

Asset ID (address) is a unique asset identifier on the SORA network (like a contract address in Ethereum). You can see the token ID addresses available on the SORA Network [here](https://wiki.sora.org/polkaswap/tokens-id-addresses).

## How do Addresses Work on the SORA Network

If you have used SORA Network or Polkaswap, you probably have noticed that generally addresses start with 5, but in Sorascan you have to input an address that starts with `cn`. So how does it work?

The address format used in Substrate-based chains is [SS58](<https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)>), and each chain can select its own prefix, generating different addresses. Here's an example:

Polkadot has prefix 0, and a certain derivation function makes it so that all Polkadot addresses start with 1.

SORA has prefix 69, and the work of the same derivation function results in SORA addresses starting with `cn`.

42 has been chosen as the universal prefix to be used in any Substrate chain. This prefix generates addresses that start with 5, and these addresses are recognized and accepted by all Substrate-based chains. For example, on Polkaswap you can connect the general addresses format (starting with 5) or the SORA unique addresses format (starting with `cn`).

An implication of this mechanism is that using the same seed you can store tokens from different Substrate chains. This is not recommended though, because it decreases security (if your seed is compromised you will lose funds on all of the networks).

You can read more [here](https://wiki.polkadot.network/docs/en/learn-accounts).

## Who are the biggest XOR Holders? <a href="#who-are-the-biggest-xor-holders" id="who-are-the-biggest-xor-holders"></a>

When looking at the top holders on [Subscan](https://sora.subscan.io/account), several of those addresses are technical accounts supporting the whole network. Here is a table with the technical accounts holding XOR: Additional addresses have been added corresponding to Polkaswap reward accounts. This list will be receiving ongoing updates to ensure accuracy.

| Address                                                                                                                                   | Role                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK)​ | **Smart contract of the Ethereum bridge**                                                                                            |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7)​  | **XOR-PSWAP pool**                                                                                                                   |
| ​[cnU7pnMDygCSPrAX2CKnorQBfMZ2cujWqFpPKvGJoX7bRT9cx](https://sora.subscan.io/account/cnU7pnMDygCSPrAX2CKnorQBfMZ2cujWqFpPKvGJoX7bRT9cx)​  | ​[**JP Games loan**](https://medium.com/sora-xor/sora-xor-could-be-the-official-native-token-of-the-pegasus-world-kit-4ac45fd7cc32)​ |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq)​ | **XOR-VAL pool**                                                                                                                     |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp)​ | **XOR-DAI pool**                                                                                                                     |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB)​ | **XOR-ETH pool**                                                                                                                     |
| cnTQ1kbv7PBNNQrEb1tZpmK7easBTbiFMQUUwfLf9LX66ND8u                                                                                         | **TBC Rewards**                                                                                                                      |
| cnTQ1kbv7PBNNQrEb1tZpmK7fJT4Awahg1d8aoYoGGv2ATz7m                                                                                         | **Market Maker Rewards**                                                                                                             |
| cnTQ1kbv7PBNNQrEb1tZpmK7kr72qNfcUDvqPxUdw4h2A5axX                                                                                         | **Farming Rewards**                                                                                                                  |
| cnTQ1kbv7PBNNQrEb1tZpmK7iW5aLF24hi1k1H4t3L49TzhPe                                                                                         | **Pre-Launch PSWAP and VAL Reserve Account**                                                                                         |
| cnTQ1kbv7PBNNQrEb1tZpmK7ftiv4yCCpUQy1J2y7Y54Taiaw                                                                                         | **PSWAP Distribution for Liquidity Providers**                                                                                       |

​

## What is a validator?

The validators are nodes that have been selected to produce blocks. Validators are a core part of the SORA network because they have to accept or reject blocks of transactions. The election of validators is made using [Phragmèn Method](https://wiki.polkadot.network/docs/en/learn-phragmen), the same used by Polkadot and Kusama. Considering that running a validator node requires effort, it won't go without reward. Those who run validator nodes will receive rewards in the form of VAL tokens, based on the amount of VAL burned on the last day.

You can read more [here](/consensus).

## What is a nominator?

A nominator is a normal user who publishes a list of trusted validator candidates and puts down an amount of XOR at stake to support them (the concept of staking). As long as a nominator supports validator candidates with good security practices, their staking is low-risk. Nominator rewards are in VAL and are based on the amount of VAL burnt during the day. You can read more about the VAL token and the staking rewards [here](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

You can [read more here](/consensus) as well.

To learn how to stake your XOR, have a look at the dedicated tutorial.
