# HASHI bridge

This article is about a HASHI bridge - a decentralized two-way bridge connecting SORA and Ethereum. HASHI means bridge in Japanese, and it will be the plumbing that links between many different chains, like pipes connecting the world's assets. This bridge is a significant component of our plans for the beta launch of the SORA network in Q1 2021.

## Flows

To move assets from Ethereum to the SORA v2 network, users send their ETH or supported ERC-20 tokens to a bridge contract on Ethereum; then, the user submits proof of the ETH transaction to the SORA network via an extrinsics call.

![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YiwUB4-nsN6QE_xjYBcB8A.png)

To move assets from the SORA v2 network to Ethereum, a user just needs to send their assets to a designated account on the SORA network, then once grandpa finality is complete, the cryptographic proof of the transaction is submitted to the Ethereum smart contract.

![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5QA0OxvpM0yg0djoSPU7rw.png)
