---
title: SORA Validators | SORA Docs
head:
  - - meta
    - name: description
      content: Learn about validators on the SORA network and their role in securing the network, validating transactions, and maintaining consensus. Discover the requirements and responsibilities of validators, explore the process of becoming a validator, and understand the importance of validator nodes in the decentralized governance of the SORA ecosystem.
  - - meta
    - name: keywords
      content: SORA validators, SORA network, network security, transaction validation, consensus, validator requirements, becoming a validator, decentralized governance
---

# VAL (≚)

 <center><img src=".gitbook/assets/val.svg" width="250"></center>


- VAL is a new token used to reward SORA network validators that secure the network, created by [community governance](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87); all contracts and executable code were released in a disabled form and could not be used until activation by a community member (by insertion of cryptographic proof of the referendum); now it is fully activated.
- VAL fully diluted supply is around 100,000,000 (query `tokens.totalIssuance` to get the precise number). Current VAL circulating supply can be checked [here](https://mof.sora.org/qty/val).
- The VAL token contract is also available on [Etherscan](https://etherscan.io/token/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4).
- VAL has [Decreasing supply](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8) over time, with tokens burned at every SORA v2 network transaction.
- Elastic rewards to validators and stake nominators are given in VAL, as a percentage of the daily burned VAL
- Holders receive a part of the XOR created by the token bonding curve
  to provide liquidity on Polkaswap. VAL holders can group together
  into DAOs to pool their liquidity and vote to provide liquidity to
  trading pairs on Polkaswap and receive PSWAP tokens as a reward.

VAL is the validator reward token for the SORA network, used to reward those that stake XOR as part of the Nominated Proof-of-Stake consensus algorithm. [As described](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), VAL is a deflationary token that gets burned with each transaction on the SORA network. A portion of the burned tokens is then re-minted and distributed to validators and stake nominators, in accordance with the reward rules.

::: info
[VAL tokens were formerly v1 XOR tokens](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), but were turned into VAL with new tokenomics, through [community governance](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87). VAL is a multichain token that lives on the SORA v1 network and on Ethereum, with a trustless bridge—_HASHI_—that spans the two networks.
:::

## VAL Token Distribution

**VAL** token was distributed to three groups approximately equally, in 3 stages:

- Former v1 XOR holders (in Q4 2020)
- ERC-20 XOR holders as an airdrop (vested over time)
- An investment vehicle for the SORA ecosystem

## Learn More

- [How to Run a SORA Mainnet Node](/running-a-node.md)
- [Consensus on SORA](/consensus.md)
