---
title: SORA XST Token | SORA Docs
head:
  - - meta
    - name: description
      content: Learn about XST, the stablecoin of the SORA network. Discover the features, use cases, and benefits of XST within the SORA ecosystem. Explore its role as a stable and reliable digital asset, enabling efficient value transfer, reducing volatility, and supporting various financial applications within the SORA network.
  - - meta
    - name: keywords
      content: SORA XST token, stablecoin, SORA network, digital asset, value transfer, volatility reduction, financial applications
---

# SORA Synthetics

SORA Synthetics are tokens pegged to value indices, backed by XST,
the first SORA Synthetic asset is the DAI-pegged XSTUSD. SORA
Synthetic XST assets for other major stores of value will be
available soon as part of the SORA Synthetics update on Polkaswap. XST was [proposed as an
RFP](https://github.com/sora-xor/rfps/pull/8/files) and is currently live on the SORA network.

## Fisher's Compensated Dollar

**XST** stands for **XOR SynThetics**, and is the collateral token used to back SORA synthetic assets pegged to an index of value. But, _what is a synthetic asset or stablecoin to begin with?_

Long before cryptocurrencies (or even digital computers) existed, [back in 1912](https://dspace.gipe.ac.in/xmlui/bitstream/handle/10973/26798/GIPE-093010.pdf?sequence=3&isAllowed=y), the American economist [Irving Fisher](https://en.wikipedia.org/wiki/Irving_Fisher) questioned the instability in the purchasing power of the gold-backed US dollar, explaining:

> “_We now have a dollar of fixed weight (25.8 grains), but varying purchasing power. Under the plan proposed, we should have a dollar of fixed purchasing power, but varying weight_.” This would come to be the groundwork for the "compensated" dollar.

In other words, because gold was highly volatile in purchasing power, instead of keeping the dollar fixed to a certain amount of gold, [Fisher proposed](https://www.richmondfed.org/~/media/richmondfedorg/publications/research/economic_quarterly/1993/summer/pdf/patinkin.pdf) that the dollar be backed by varying amounts of gold, but pegged to a basket of goods (an index). However, at the time, Fisher's ideas were not adopted due to operational and harmonization issues of the economy of that period.

With the advent of cryptoeconomic systems on blockchains, the "compensated" dollar principles, Fisher's groundwork, could finally be translated into the realm of cryptoeconomics and given new life as part of a cryptoeconomic system: "a blockchain-based token can be created as a derivative of another one, targeted at holding a stable unit of value". SORA synthetics implements this concept and _in a way, you could say that Irving Fisher is the father of SORA Synthetics_.

### Stablecoins and Synthetic Assets Today

Currently, there are 5 different types of stablecoins/pegged assets:

- **Fiat-Backed Stablecoins (or Tokenized Fiat):** These stablecoins are backed by and pegged to dollars (or other fiat currency), their value remains tied to the price of the pegged currency. For example, [USDC](https://www.circle.com/en/usdc).
- **Crypto-Backed Stablecoins (or On-Chain Collateralized Stablecoins):** These are backed by other crypto assets. For example [DAI](https://makerdao.com/en/).
- **Precious Metal-Backed Stablecoins (or Off-Chain Collateralized
  Stablecoins):** Like gold-standard fiat, these stablecoins use gold and other metals to back their value. For example [Tether Gold](https://gold.tether.to/).
- **Algorithmic Stablecoins:** These stablecoins use algorithms to back their value. There are some variants that can be pegged to fiat values, depending on the algorithm used. For example, [AMPL](https://www.ampleforth.org/).
- **Synthetic assets:** These are tokens with value pegged to an oraclized asset. Purely synthetic assets can be used to track the shares of financial instruments and securities, and can represent many types of value. For example, [SYNTHETIX](https://synthetix.io/).

XSTUSD is an algorithmic stablecoin for the SORA ecosystem, initially proposed in 2018, based on the ideas of Irving Fisher's compensated dollar. However, instead of being backed by gold, SORA Synthetics are backed by XST.

## What Makes SORA XST Different?

Now that stablecoins and synthetic assets have been defined and classified, you might be wondering what makes XST stand out from the rest?

XST helps to solve the problem of XOR liquidity by creating synthetic assets backed by a variable amount of XST and pegged to a target index (e.g., a currency). XST is minted/deminted to always guarantee the value of the pegged index. The first index implemented is linked to the value of DAI and is called XSTUSD.

### Non-Collateralized Stability

In the case of SORA Synthetics, as they are backed by XST, XST can be algorithmically minted or deminted (burned) to provide the full value for the SORA Synthetics upon demand. The XST Primary Market Maker that mints/demints SORA Synthetics and XST is built as a liquidity source into Polkaswap's liquidity aggregator. This means that buyers and sellers will always get the full value in XST for their SORA Synthetics, and the price will never deviate (lower or higher) from the asset price. Therefore, SORA Synthetics are not subject to price slippage or a lack of liquidity. This works, for example, in the case of XSTUSD, because a single XSTUSD is a claim for $1 USD _worth of XST_, and **not a claim for actual $USD itself**.

With normal stablecoins (_specifically fiat-backed_), the adjustment of collateral value and the value of the issued stablecoins is not automatic. This is due to price changes in the collaterals, and it is therefore necessary to overcollateralize. With stable tokens like DAI, for example, you have to lock up 130% of the value in ETH to mint new DAI, and your vault gets liquidated if you go under the required collateral level.

SORA Synthetics do not require overcollateralization and users of SORA Synthetics do not risk liquidation. This is because new XST can always be minted to provide the full value of a synthetic asset upon exchange back into XST.

Normally, algorithmic stablecoins derive their value from smart contracts linked to oracles that determine current prices, however, XSTUSD's value is currently derived from the price of XOR-DAI.

## How Is It Implemented?

XST implementation is quite an exciting topic, however, it isn't
complete yet. The RFP proposing the implementation of XSTUSD has been
published and now the calvary of development and testing is
ongoing. The implementation scenario includes whitelisting XSTUSD on
Polkaswap and subsequently setting up a liquidity source, as mentioned
before, where the price users pay would never deviate from the price
of XOR-DAI.
![](/.gitbook/assets/xst-buy-sell.png)

Some more interesting details available from the [XSTUSD RFP](https://github.com/sora-xor/rfps/pull/8/files) mention: "If the XSTUSD-XOR price goes lower than DAI-XOR, then when the user is buying, new XOR will be minted and used to fill the order (similar to the token bonding curve). When buying XSTUSD with XOR, then new XSTUSD can be minted/deminted when filling the orders, in order to maintain the peg." Before you ask wen, there is no concrete answer _...for now._

The implementation of SORA Synthetics is just the beginning, another interesting implementation tied to this is the [SORA Social Insurance](social-insurance.md).

In the meantime, you can find XSTUSD on [Polkaswap](https://polkaswap.io/). The XST asset id is `0x0200090000000000000000000000000000000000000000000000000000000000`

You can swap XOR to XSTUSD and vice-versa.

![](/.gitbook/assets/xstusd-demo1.png)

After you click on SWAP, you will receive a confirmation message with
the transaction details. Click CONFIRM and sign the transaction with
the Polkadot.js browser extension in the popup window.

![](/.gitbook/assets/xstusd-demo2.png)

Finally, if you're interested in how the SORA RFP system works, take a look at this complete guide on [Proposing New Functionalities to Polkaswap and the SORA network](rfp.md).

---

**Sources**:

Kołodziejczyk, H., & Jarno, K. (2020). Stablecoin – the stable cryptocurrency. Studia BAS, 3(63), 155–170. https://doi.org/10.31268/StudiaBAS.2020.26

J. M. Keynes, Irving Fisher, Harry G. Brown. The Purchasing Power of Money: Its Determination and Relation to Credit, Interest, and Crisis, The Economic Journal, Volume 21, Issue 83, 1 September 1911, Pages 393–398, https://doi.org/10.2307/2222328

Patinkin, D. (n.d.). Irving Fisher and His Compensated Dollar Plan. 34.

Takemiya, M. (2019). SORA: A Decentralized Autonomous Economy. 2019 IEEE International Conference on Blockchain and Cryptocurrency (ICBC). doi:10.1109/BLOC.2019.8751489

## Learn More

- [SORA Synthetics](/synthetics.md)
- [SORA Economy](/sora-economy.md)
