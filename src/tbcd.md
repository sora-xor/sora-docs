---
title: Token Bonding Curve Dollar (TBCD) | SORA Docs
head:
  - - meta
    - name: description
      content: Learn about the Token Bonding Curve Dollar, the algorithmic, non-synthetic stablecoin that has its value maintained by the SORA token bonding curve. Explore how TBCD helps to build up the reserves of the SORA token bonding curve, while also being used to fund the creation of new goods and services within the SORA ecosystem.
  - - meta
    - name: keywords
      content: TBCD token, bridge token, Ethereum network, SORA network, asset transfer, interoperability, cross-chain transactions, liquidity, decentralized finance, DeFi
---

# Token Bonding Curve Dollar (TBCD)

<img src=".gitbook/assets/tbcd.svg" alt="drawing" width="500"/>

- Token Bonding Curve Dollars (TBCD) is a newly proposed, algorithmic, non-synthetic stablecoin that has its value maintained by the SORA token bonding curve
- TBCD is created to be worth slightly less than $1 when XOR is far lower than the price point on the token bonding curve, reducing sell pressure to XOR when the price of XOR is low
- TBCD will help to build up reserves in the SORA token bonding curve, while also being used to fund the creation of new goods and services via an on-chain referendum decided by all XOR token holders
- 10% of the reminted [PSWAP](./pswap) is allocated to buyback-and-burn TBCD. Similarly, 10% of the reminted [VAL](./val) is allocated to buyback-and-burn TBCD.
  Additionally, 0.5% of the [TBC margin](./tbc.md#why-is-the-token-bonding-curve-useful) is directed towards buyback-and-burning of TBCD.

## Why Implement Token Bonding Curve Dollars (TBCD)

The SORA ecosystem has grown over the years, and now there are many
tokens and [eclectic](https://cerestoken.io) [builders](https://adar.com). With growth comes maturity, and SORA has
recently been moving towards spinning out XSTUSD, a synthetic
stablecoin, into the comprehensive [SORA Synthetics (XST) ](xst.md) platform.

However, many of the partners we engage with for institutional projects are not ready to price everything in XOR, the native token of the SORA network, yet. Instead, they need a token that is readily convertible to XOR on-demand, yet pegged to the USD.

TBCD (**T**oken **B**onding **C**urve **D**ollars) aims to fill this void by being a token that is convertible to XOR, as a reserve asset of the SORA token bonding curve, while also being worth $1, because the token bonding curve always treats TBCD as having the value of $1 USD.

As you may recall, the [SORA token bonding
curve](tbc.md) is a smart contract,
built right into Polkaswap, which mints XOR in exchange for reserve
assets, and burns XOR to return the reserve assets. There is a margin
of 20% between buy and sell, which is used for buyback-and-burning
VAL, giving funds for future VAL DAOs, as well as to put into accounts
that in the future can be used for project funding, and giving
stipends to SORA citizens.

The SORA Token Bonding Curve and uses of the margin between buy and sell
functions
![The SORA Token Bonding Curve and uses of margin between buy and sell
functions](/.gitbook/assets/margin-tbc.png)

TBCD can only be created and allocated by on-chain governance, which
means that XOR token holders decide the supply. In this way, TBCD can
contribute to the productive economy of SORA because builders can be
funded in TBCD, which can lead to more uses for SORA ecosystem
tokens.
XOR is not diluted in purchasing power, because any minting of XOR is done only by giving TBCD to the token bonding curve, so TBCD becomes an asset that balances out any XOR put into circulation; in fact, the token bonding curve over-collateralizes, since there is a 20% margin between buy and sell, and part of that margin is XOR that goes into funds that are not currently distributed and put into circulation.

Because the SORA token is going to target a price point of around
$600, this means that TBCD will have little utility if XOR costs $600,
while the secondary market price is so much lower.
To make TBCD useful, instead of using the ~$600 price point, it will
be able to buy XOR from the TBC at the current market price + $1. This
is still higher than the market price, which will incentivize people
to avoid dumping TBCD for XOR when the XOR price is low (because they
won’t get a full $1 of value). For example, if XOR is $3 then TBCD
holders can buy XOR from the token bonding curve for a 33% premium,
which is not very appealing, but if XOR is at $100, then TBCD holders
can buy XOR for just $101, which is a negligible premium.
Eventually the premium can go away entirely, when XOR is at the nominal token bonding curve price.

As with other token bonding curve reserve assets, the sell price of
XOR for TBCD from the SORA token bonding curve will be 20% less than
the price for buying.

## Algorithmic Central Banking

TBCD is a great example showcasing the possibilities of the SORA token bonding curve to create monetary innovation for the SORA economy. TBCD solves both the question of how to fund the SORA economy’s productive expansion (the creation of new goods and services) and how to build up reserves in the token bonding curve to create a backing aimed at increasing the stability of XOR. By minting TBCD via on-chain referendum, builders can get the resources they need to buidl up the SORA economy and platform, while any TBCD they sell to the SORA token bonding curve will be owned by the SORA ecosystem as protocol-owned liquidity.

While not operating at the official token bonding curve price, TBCD
still acts as a form of “training wheels” for the SORA economy, where
the token bonding curve can be activated and build up some assets,
selling XOR via a primary market at a premium to the free-floating
secondary market.

Overall, TBCD is an innovative stablecoin that uses the SORA token bonding curve to maintain its price stability. This is a great development for the cryptocurrency market, as it provides users with a reliable stablecoin that’s backed by the U.S. dollar. Furthermore, the SORA token bonding curve helps increase the liquidity of TBCD, making it easier for users to buy and sell the token.

## Learn More

- [Token Bonding Curve](/tbc.md)
- [SORA Governance](/sora-governance.md)
