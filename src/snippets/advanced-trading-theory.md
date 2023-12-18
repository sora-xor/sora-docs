To Polkaswap means to exchange (swap) tokens on [Polkaswap](https://polkaswap.io/), Polkaswap is a non-custodial, cross-chain AMM DEX protocol for swapping tokens, Polkaswap removes trusted intermediaries and provides the opportunity for faster trading, and Polkaswap also combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, in a trustless and decentralized way.

Polkaswap's technical design allows using different liquidity sources for trading. At the moment Polkaswap supports two liquidity sources:

- XYK Pool
- Token Bonding Curve (TBC)

XYK Pools are managed by the community. Anyone is able to provide liquidity to any pool. Every pool has XOR as a base asset. For example, there are two pools: XOR-VAL, XOR-PSWAP. If you make a VAL-PSWAP exchange, then the swap routing will be the following: from VAL to XOR, from XOR to PSWAP.

The TBC is described in detail [here](../snippets/../tbc). You can buy and sell XOR using the TBC, and initial collateral assets are USDT, VAL, PSWAP.

When you make a swap with the default settings, the Liquidity Proxy algorithm selects the liquidity pool with the best price. However, buying XOR from the TBC is rewarded with PSWAP. The liquidity source might change in the swap settings, which makes trading more flexible.

Swap settings and other topics will be covered in the Practice section.
