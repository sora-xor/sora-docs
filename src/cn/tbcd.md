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

# 代币绑定曲线美元 (TBCD)

- Token Bonding Curve Dollars (TBCD)是一种新提出的算法稳定币，其价值由SORA代币绑定曲线维持
- TBCD的设计初衷是在XOR的价格远低于代币绑定曲线上的价格点时，使TBCD的价值略低于1美元，从而在XOR价格低时减少对XOR的抛售压力
- TBCD将有助于在SORA代币绑定曲线中建立储备，同时也将用于通过由所有XOR代币持有者决定的链上公投来资助新商品和服务的创造
- 重新铸造的PSWAP的10%用于回购和销毁TBCD。同样，重新铸造的[VAL](./val)的10%用于回购和销毁TBCD。此外，[TBC保证金](./tbc.md#why-is-the-token-bonding-curve-useful)的0.5%用于回购和销毁TBCD。

## 为什么要实施代币绑定曲线美元 (TBCD)

SORA生态系统多年来不断壮大，如今已有许多代币和[多元化的](https://cerestoken.io) [构建者](https://adar.com)。随着发展，成熟也随之而来，最近，SORA正朝着将合成稳定币XSTUSD分拆出来，形成全面的 SORA合成 (XST)  平台迈进。

然而，我们参与机构项目的许多合作伙伴还没有准备好用SORA网络的原生代币XOR来定价所有东西。相反，他们需要一种代币，可以随需转换为XOR，但又与美元挂钩。

TBCD (**T**oken **B**onding **C**urve **D**ollars) 旨在填补这一空白，它是一种可转换为XOR的代币，作为SORA代币绑定曲线的储备资产，同时价值为1美元，因为代币绑定曲线始终将TBCD视为价值为1美元的代币。

正如你可能记得的那样，[SORA代币绑定曲线](tbc.md)是一个智能合约，直接内置在Polkaswap中，它通过发行XOR来交换储备资产，并燃烧XOR来归还储备资产。买入和卖出之间有20%的差价，用于回购并销毁VAL，为未来的VAL DAO提供资金，以及存入未来可用于项目资金和为SORA公民提供津贴的账户。

SORA代币绑定曲线及买卖函数之间的价差使用方式
![The SORA Token Bonding Curve and uses of margin between buy and sell
functions](/.gitbook/assets/flow-of-funds-new.png)

TBCD只能由链上治理创建和分配，这意味着XOR代币持有者决定供应量。这样一来，TBCD可以为SORA的生产经济做出贡献，因为建设者可以用TBCD获得资金支持，这可能会导致SORA生态系统代币的更多用途。XOR的购买力不会被稀释，因为XOR的铸造只是通过将TBCD提供给代币绑定曲线来完成的，因此TBCD成为了一种资产，可以抵消任何投放市场的XOR；事实上，代币绑定曲线进行了过度抵押，因为买入和卖出之间有20%的差额，其中一部分差额是进入目前尚未分配并投放市场流通的基金中的XOR。

由于SORA代币的目标价格约为600美元，这意味着如果XOR的价格为600美元，而二级市场价格要低得多，那么TBCD的实用性就会很小。为了使TBCD有用，它将能够以当前市场价格加1美元的价格从TBC购买XOR，而不是使用约600美元的价格点。这仍然高于市场价格，这将激励人们在XOR价格低时避免抛售TBCD以换取XOR（因为他们将无法获得完整的1美元价值）。例如，如果XOR为3美元，那么TBCD持有者可以以33%的溢价从代币绑定曲线购买XOR，这并不十分吸引人，但如果XOR为100美元，那么TBCD持有者只需以101美元购买XOR，这是一个微不足道的溢价。最终，当XOR达到名义代币绑定曲线价格时，溢价可能会完全消失。

与其他代币绑定曲线储备资产一样，从SORA代币绑定曲线购买TBCD的XOR的售价将比购买价格低20%。

## 算法中央银行

TBCD是一个很好的例子，展示了SORA代币绑定曲线的可能性，为SORA经济创造货币创新。TBCD解决了如何为SORA经济的生产性扩张（新商品和服务的创造）筹集资金的问题，以及如何在代币绑定曲线中建立储备，以创造一种旨在增加XOR稳定性的支持。通过在链上公投铸造TBCD，建设者可以获得他们需要的资源来建设SORA经济和平台，而他们向SORA代币绑定曲线出售的任何TBCD将归SORA生态系统所有，作为协议拥有的流动性。

尽管TBCD的运作价格不符合官方代币绑定曲线价格，但它仍然充当着SORA经济的一种“辅助工具”，在那里代币绑定曲线可以被激活并积累一些资产，通过一级市场以溢价的价格出售XOR，而不是在自由浮动的二级市场上进行交易。

总的来说，TBCD是一种创新的稳定币，它利用SORA代币绑定曲线来维持其价格稳定性。这对加密货币市场来说是一个重大的发展，因为它为用户提供了一个由美元支持的可靠稳定币。此外，SORA代币绑定曲线有助于增加TBCD的流动性，使用户更容易地购买和出售代币。

## 了解更多

- [代币绑定曲线](/tbc.md)
- [SORA治理](/sora-governance.md)
