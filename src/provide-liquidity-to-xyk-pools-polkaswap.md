---
title: "Provide Liquidity on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to provide liquidity on the SORA network and participate in the Polkaswap liquidity pools. Discover the benefits of liquidity provision, the process of adding liquidity to pools, and how to earn rewards for your contributions to the SORA ecosystem."
  - - meta
    - name: keywords
      content: "provide liquidity, SORA network, Polkaswap, liquidity pools, adding liquidity, liquidity rewards"
---

# Liquidity Operations

## Theory

<!-- @include: /snippets/provide-liquidity-theory.md -->

## Practice

### Creating a New Liquidity Pool

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-new-liquidity-pool-polkaswap.md -->

### Providing Liquidity to an Existing Liquidity Pool

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-provide-to-existing-liquidity-pool-polkaswap.md -->

### Removing Liquidity from the Pool

<!-- @include: /snippets/remove-from-liquidity-pool-polkaswap.md -->

## Checking Transactions

You can find the transactions for providing and removing liquidity you have made in the block explorer. Open the list of transactions and filter it using the PoolXYK module parameter and **deposit_liquidity** call for providing liquidity or **withdraw_liquidity** call for removing liquidity.

![](.gitbook/assets/provide-liquidity-check-transactions-1.png)

![](.gitbook/assets/provide-liquidity-check-transactions-2.png)
