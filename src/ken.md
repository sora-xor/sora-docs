---
title: Kensetsu KEN | SORA Docs
head:
  - - meta
    - name: description
      content: Learn about KENSETSU, SORA’s MakerDAO equivalent, involving XOR token burn, KEN token rewards, and Kensetsu’s role in the DeFi space on Polkadot
  - - meta
    - name: keywords
      content: token burn, SORA, Maker DAO, stablecoin
---

# Kensetsu KEN

::: info
This token was originally proposed as [SORA RFP 60](https://github.com/sora-xor/rfps/issues/60) by Satoshi Shibarimoto.
:::

## TL;DR

- All of the initial KEN tokens will be distributed to accounts that burn at least 1 million XOR between blocks 14,464,000 and 14,939,200
- Burning less than 1 million XOR will yield no KEN tokens
- 1% of all Kensetsu stablecoins minted will be used to buy back and burn KEN on Polkaswap
- 80% of burned KEN burned daily will be reminted and be given to Demeter Farm for farming rewards on the XOR-KUSD pool, to incentivize liquidity

![](/.gitbook/assets/ken-burn-hero.png)

## Kensetsu Introduction

Maker DAO is the largest DeFi app, with $5.92 Billion in TVL; Maker DAO powers DAI, the decentralized dollar-pegged stablecoin. SORA is a new world economic system aimed at high, sustainable growth. Despite SORA’s bold ambitions, it does not have a Maker DAO equivalent on its network. That’s why in 2023, Satoshi Shibarimoto, a professionally based anon, proposed KENSETSU as SORA’s version of Maker DAO that not only builds on the successes of the original protocol but also takes advantage of the amazing Polkadot tech.

With KENSETSU, XOR token holders will be able to vote to create stablecoins pegged to any values available via oracles on the SORA network, such as all your favourite Imperialist Fiat Currencies, GOLD, SILVER, and others. As with Maker DAO, users can mint stablecoins by locking up collateral in vaults.

In KENSETSU, there will be two vault types: 1) vaults where users lock up collateral and they can get the collateral back by paying back the minted stablecoins, and 2) vaults where users lock up collateral, but to get it back, they will have to pay the minted stablecoins + a stability fee; these vaults can be liquidated if the value of the underlying collateral goes too low; type-1 vaults cannot be liquidated, but there will be a stability fee as a tax that is taken from the collateral over time, so users won’t ever get their total collateral back. Initial collateral assets are expected to be XOR, TBCD, VAL, PSWAP, ETH, and DAI.

The ability to mint stablecoins from collateral is very useful. Still, because there is a stability fee on the vaults, there also needs to be some sexy magic to make the stablecoins liquid and create demand. That’s where KEN comes in.

## KENONOMICS

KEN is a farming reward token meant to incentivize liquidity for KENSETSU stablecoins. For each stablecoin minted from collateral deposited, 1% extra of the stablecoin will be minted and used to buy back and burn $KEN tokens. 80% of the burned $KEN tokens will be reminted and distributed to Demeter farm for farming rewards on the XOR-KUSD pool on Polkaswap.
To up the stakes, to get an allocation of the initial KEN supply, you will literally have to burn money.

### Burning Money

As explained in the KENONOMICS, KEN will be strictly deflationary once launched, meaning the supply will only go down. The original allocation of KEN will be the maximum supply, and then it will go down from there. As anons make KENSETSU, the initial allocation follows the _no baby (team), no cry_ principle, which means, in simple terms, that it’s a **fair launch: KEN will only be allocated to accounts on the SORA network that burn (using the `assets.burn` extrinsic) at least 1 million XOR, at a rate of 1 KEN per 1 million XOR burned.** You can only get the initial KEN tokens by burning XOR.
Holding KEN tokens is the ultimate flex because you have to burn real money to get KEN. Holding KEN is a status symbol that shows how cool you are.

## How to Burn XOR

Burning XOR for fun and profit can be done using the nifty dotapps interface. Just click on [this link](https://polkadot.js.org/apps/#/extrinsics) and fill out the form as follows:

![](/.gitbook/assets/ken-burn-extrinsics.png)

To fill out the form:

1. Select the assets module and burn extrinsic `(assets.burn)`
2. Select the account that has the XOR you want to burn.
3. The asset ID to burn is XOR: `0x0200000000000000000000000000000000000000000000000000000000000000`
4. For the amount, you need 18 zeros after the amount of XOR you want to burn, so burning 1 million XOR is: `1000000000000000000000000`.
5. Then sign the transaction and confirm that your XOR balance went down correctly, showing you burned the XOR.

All XOR burned by calling the `assets.burn` extrinsic between blocks `14,464,000` and `14,939,200` will be considered in the calculated burned amount. To be eligible for the KEN drop, at least 1 million XOR should be burned by an account. 1 KEN will be given for each million XOR burned.

For example, if 999,999 XOR are burned, 0 KEN will be given to an account. If 1 million XOR are burned, 1 KEN will be given to an account. And if 1.6 million XOR are burned, then 1.6 KEN will be given to an account.

::: info
You can track the burnt XOR on the Polkaswap interface [Kensetsu tab](https://polkaswap.io/#/kensetsu).
:::

So get out there and enjoy the **Ken**omics **Ken**olution!

> This article was originally published on [Medium](https://medium.com/@shibarimoto/kensetsu-ken-356077ebee78) and written by community member Satoshi Shibarimoto. Some editorial cleanup for clarity aside, the article has been published faithfully to the original. The lyrics to the **Kensetsu Burn** song have been stripped for the sake of maintaining the article on topic.

## Learn More

- [VAL Tokenomics](/val.md)
- [Requesting Features on SORA](/rfp.md)
