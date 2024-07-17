---
title: "Consensus Mechanism on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn about the consensus mechanism on the SORA network and how it ensures agreement and consistency among network participants. Explore the different consensus algorithms employed by the SORA network, such as Proof of Stake (PoS), and understand how they contribute to the security and decentralization of the network."
  - - meta
    - name: keywords
      content: "consensus mechanism, SORA network, agreement, consistency, consensus algorithms, Proof of Stake, PoS, security, decentralization"
---

# Consensus

The SORA network relies on a **NPoS (Nominated Proof-of-Stake)** mechanism in order to reach and maintain consensus over the chain status.
NPOS is a variation of the standard Proof of Stake (PoS) model. It involves network participants nominating validators who are responsible for validating transactions and creating new blocks. This method not only reduces the energy consumption drastically compared to PoW but also enhances security and decentralization.

### Advantages of NPOS:
**Energy Efficiency:** Unlike PoW systems, NPOS does not require extensive computational power, making it a more sustainable and environmentally friendly option.
Security: The staking and slashing mechanisms make it expensive for anyone to attempt malicious activities, enhancing the overall security of the blockchain.
Decentralization: NPOS encourages broader participation from the community, leading to a more decentralized network compared to PoW.

### Comparing NPOS with Other Consensus Mechanisms
**NPOS vs. PoW:**
PoW, exemplified by Bitcoin, requires significant computational effort to mine blocks, leading to higher energy consumption.
NPOS, in contrast, relies on staking and nominations, drastically reducing energy usage.

**NPOS vs. PoS:**
Standard PoS allows all stakeholders to participate in block validation directly.
NPOS introduces the concept of nominations, adding an extra layer of community involvement and decision-making.

### Differences between PoS and NPoS:
**Role separation**
PoS has validators only, while NPoS splits the roles between validators and nominators.

**Control of stake**
Validators fully control their staked funds in PoS, but nominators direct some control over validators' stake in NPoS via nominations.

**Selection process**
PoS relies solely on stake amounts, whereas NPoS weighs both stakes and distributes nominations to elect active validators.

**Risk distribution**
Validators bear the full burden of slashing penalties in PoS, whereas in NPoS, these penalties are shared between validators and nominators based on their actions.

**Participation**
Both PoS and NPoS require staking, but only NPoS allows users to participate as non-technical nominators without validator nodes.

To sum up, while PoS focuses only on stake, NPoS introduces the additional dimension of social consensus through nominations to enhance decentralization.

There are two main actors: **validators** and **nominators.**

- **Validators** compete with each other to create new blocks and get rewards. In order to do so, a validator has to enter the validators set, which consists of the 69 validators with the highest stake (this may not always be the case, read about Phragmen to know more about validator selection methods).
- **Nominators** can increase the validators' stake by delegating their XOR tokens to them.

## Nominators

A nominator is a normal user who publishes a list of trusted validator candidates and puts down an amount of XOR at stake to support them with (the concept of staking). As long as a nominator supports validator candidates with good security practices, their staking is low-risk. Nominator rewards are in VAL, and are based on the amount of VAL burnt during the day. You can read more about the VAL token and the staking rewards [here](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

Nominators keep the SORA network safe by delegating their XOR to trustworthy validators.

You should pick validators carefully - if they do not behave properly, they will get slashed and you will lose XOR as well. However, if they follow the rules of the network, then there is no risk of slashing. Read more about slashing [here](https://support.polkadot.network/support/solutions/articles/65000110858-what-does-it-mean-to-get-slashed-).

When you are nominating, your XOR can't be moved right away, rather, it needs to be unstaked first. This process takes seven days.

### Active Nominations

As previously said, nominators have to select elected validators. Nominators can select up to 16 different validators, but only one of them is required to join the validators set. If more than one of the selected validators joins the active set, only one will be actually supported by your stake.

### How to Select Validators Effectively

To provide some high quality validators on the network as a common good, the SORA Parliament maintains the following list of validators:

- cnVqqrLjSGQ7in5j3GVuXjr4b1benhdN72NQnqwzrbWxHWjYZ
- cnVyxUnvsrgtiCEaeHudqGEJuHPspfp89mGghLz21mVqdaQwv
- cnSdNvs39CVRDiFW4pEtaqZWGoSU7B8UkDKjwCb3mX999CsZH
- cnScvgXFLQgeNFoVfMjf2U5MC24CkdRkLTUKbJYefYRwqy3VZ
- cnSgH7nHuiPk5Z2cubwsFZGdmzvzhrgBKgTqLCeR7hyo6dek8
- cnU2w3CPn9narRKeSamHmKBBaSXY949A4udq6APBXNkmnkwsJ
- cnV58Z8zT37K6iUsijRjYHBzk95aTqvLfn3WvvfJcCwFQKHCL
- cnRrijYYHb4fWPuF9MraEvm8nvfztYDxcAZfKfN2AyKLBn81A
- cnUDwD4nPorodyd3inwThA2yBt2dFuHTfnvKowH6dirk47Qqr

An important aspect to evaluate is the **validator's commission**. The commission is the percentage of the reward which is taken by the validator before the rewards are distributed to the nominators. As a nominator, you may think that the lowest commission is best, but this is not always true. Validators must be able to run efficiently in order to sustainably continue operation. Independent validators rely on the commission to cover their costs helping to keep the network decentralized.

You should also take into consideration the validators' **stake**. This is the quantity of XOR the validator has put up at stake themselves. A high own stake amount can be considered as having more "skin in the game" and so the validators are confident about not being slashed. However, a validator not having a large amount of "own stake" is not automatically untrustworthy, as the validator could be nominating from a different address.

### Filtering Out Validators

On the [Targets ](https://polkadot.js.org/apps/#/staking/targets) page, you can [filter out](https://wiki.polkadot.network/docs/learn-nominator#filter-out-validators-with-undesirable-traits) validators that have traits that may indicate an issue with you nominating them. You can turn these filters off and on to help narrow down which validators you should nominate. It is important to note that none of these traits are necessarily "bad"; however, depending on your validator selection methodology, they may be characteristics that you would be interested in filtering out.

<!-- TODO: transform this into a table -->

- **Single from operator**: Do not show groups of validators run by a single operator.
- **No 20%+ comm**: Do not show any validators with a commission of 20% or higher.
- **No at capacity**: Do not show any validators who are currently operating [at capacity](https://wiki.polkadot.network/docs/glossary#capacity) (i.e., could potentially be oversubscribed).
- **Recent payouts**: Only show validators that have recently caused a [payout to be issued](https://wiki.polkadot.network/docs/learn-simple-payouts). Note that anyone can cause a payout to occur; it does not have to be the operator of a validator.
- **Only elected**: Only show validators that are currently in the active set (i.e., they have been elected to produce blocks this era).
- **Only with an identity**: Only show validators that have set an [identity](https://wiki.polkadot.network/docs/learn-identity). Note that this identity does not have to be verified by a registrar for the validator to show up in the list.

## Validators

The validators are nodes that have been selected to produce blocks. Validators are a core part of the SORA network because they have to accept or reject blocks of transactions. The election of validators is made using [Phragmèn Method](https://wiki.polkadot.network/docs/en/learn-phragmen), the same used by Polkadot and Kusama. Considering that running a validator node requires effort, it won't go without reward. Those who run validator nodes will receive rewards in the form of VAL tokens, based on the amount of VAL burned on the last day.

Validators play a crucial role in the SORA network, as they secure and further decentralize the whole system. Hosting a validator node is fairly straightforward - but it does have technical requirements that must be carefully considered.

### How Validators are Chosen

Not all those who register on the network to become validators will necessarily make blocks. If the competition is high and there are more than the maximum number of possible active validators for one epoch, then those validators with the most XOR will most likely participate in the actual validation. In this case, the de-facto minimum stake for an active validator will increase automatically.

Validators are selected using Polkadot’s [Phragmen Method](https://wiki.polkadot.network/docs/en/learn-phragmen#where-is-the-phragm%C3%A9n-method-used-in-polkadot).

### Become a SORA Validator

The SORA network is completely decentralized, and relies on community members to run nodes. Validator nodes will be responsible for making blocks in the network. To help ensure the success of Polkaswap, we require community support in running validator nodes on the SORA network. Here’s what you’ll need to get started:

```
Machine with Linux, Windows, or macOS
Docker https://docs.docker.com/get-docker/ - follow the install guide
At least 64GB RAM
160GB free space
Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
Uptime of 99.9%
```

If you’re interested in helping secure the future of SORA and Polkaswap, and earning rewards in the process, read more about [running a SORA Mainnet node](./running-a-node.md).

## Rewards

Your hard work won’t go without a reward. Those who run validator nodes or nominate will receive rewards in the form of [**VAL**](https://medium.com/sora-xor/sora-validator-reward-token-val-c96a8afb8541) tokens.
Rewards are not fixed but depend on the number of transactions on the SORA network and the usage of the Token Bonding Curve.
In fact, half of all the fees on the SORA network and 1% of what is bought on the TBC is used to buyback VAL on Polkaswap and burn them. Then, daily, a percentage of the burned VAL is reminted and given to validators and nominators. This percentage was 90% at TGE and will linearly go down to flatline after five years.

The higher the number of transactions on the SORA network, the higher the rewards for nominators and validators.

## Learn More

- [Nominating Validators](/nominating-validators)
- [Running a Node](/running-a-node)
