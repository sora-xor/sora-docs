---
title: "Swap on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to swap digital assets on the SORA network."
  - - meta
    - name: keywords
      content: "swap, SORA network, trading pairs, on-chain swapping, swap transaction"
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

<!-- @include: /snippets/swap-polkaswap.md -->
