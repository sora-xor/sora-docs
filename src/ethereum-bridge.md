# Ethereum Bridge

## Flows

To move assets from Ethereum to the SORA v2 network, users send their ETH or supported ERC-20 tokens to a bridge contract on Ethereum; then, the user submits proof of the ETH transaction to the SORA network via an extrinsics call.

![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YiwUB4-nsN6QE_xjYBcB8A.png)

To move assets from the SORA v2 network to Ethereum, a user needs to send their assets to a designated account on the SORA network, then once grandpa finality is complete, the cryptographic proof of the transaction is submitted to the Ethereum smart contract.

![](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5QA0OxvpM0yg0djoSPU7rw.png)