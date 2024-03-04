---
title: "SORA Integrated Plan - Roadmap for the SORA Network | SORA Docs"
head:
  - - meta
    - name: viewport
      content: "width=device-width, initial-scale=1.0"
  - - meta
    - name: description
      content: "Discover the SORA network's Integrated Plan - a comprehensive roadmap outlining the strategic vision, goals, and milestones for the development and growth of the SORA ecosystem. Learn about upcoming features, advancements, and initiatives driving SORA's mission towards a decentralized and sustainable financial system."
  - - meta
    - name: keywords
      content: "Integrated Plan, SORA network roadmap, strategic vision, milestones, decentralized financial system, sustainable financial system"
  - - meta
    - name: author
      content: "SORA network"
  - - meta
    - property: og:title
      content: "SORA Integrated Plan - Roadmap for SORA network | SORA Docs"
  - - meta
    - property: og:description
      content: "Discover the SORA network's Integrated Plan - a comprehensive roadmap outlining the strategic vision, goals, and milestones for the development and growth of the SORA ecosystem. Learn about upcoming features, advancements, and initiatives driving SORA's mission towards a decentralized and sustainable financial system."
  - - meta
    - property: og:type
      content: "website"
  - - meta
    - property: og:site_name
      content: "SORA Docs"
  - - meta
    - property: og:locale
      content: "en_US"
---

# Integrated Plan

🎉 The SORA Ecosystem Integrated Plan is live! This means that tracking development progress for the network is now better and more streamlined, as completion percentages for the different tracks and tasks are provided so that you have a better context of what is going on.

![](https://sora.org/plan)

<center><i>The SORA integrated plan is available at [SORA.org/plan](https://sora.org/plan)</i></center>

The SORA integrated plan is separated into: **Business**, **Backend**, **Web**, and **Mobile/Other** tracks.

## Business

**Business** covers things related to collaborations, partnerships, and key features.

- **Curve Gauge (On Hold)**: Having a gauge in the [XSTUSD Curve pool](https://curve.fi/factory/68) to improve liquidity; this greatly incentivizes people to add liquidity to the XSTUSD curve pool!

- **Polkaswap as a Service**: Offering Polkaswap’s amazing DEX features to projects in search of boundless, cross-chain liquidity.

- **Demeter XSTUSD Reward (Complete)**: Attractive incentives for farming on the Demeter platform through high APR and rewards in XSTUSD.

- **XOR as Legal Tender in Sri Lanka**: The SORA community reached out to the people of Sri Lanka to propose the use of XOR as legal tender in their country and are continuing to work with people there to push the proposal forward.

- **SORA IBAN**: As a way of bridging the gap between traditional banking services and SORA, this is a system to implement a bank account powered by SORA technology; the [Polkaswap.io](http://polkaswap.io) interface will then have many of the services offered by traditional banks, all in a nice, self-custodial interface.

- **SORA card**: Similar to the SORA IBAN, the SORA card will allow users to top up their fiat accounts using XOR, which they can use in traditional finance infrastructure.

- **Real World Assets**: SORA will include RWA as assets that are tradeable within the network.

## Backend

**Backend** covers technology related to the SORA network.

- **SORA Kusama Parachain (Complete)**: This covers the work required to produce blocks from the Kusama parachain slot we won, which is now done!

- **Substrate 4 (Complete)**: The SORA network has to update to Substrate 4 to ensure full compatibility with the Dotsama network. This means that once this upgrade is up and running, the SORA network will be available in Dotsama wallets such as [Fearless Wallet](https://fearlesswallet.io/).

- **Beefy Proofs**: Beefy proofs are used to prove the finality of transactions in blocks and will be optimised for the SORA network to allow efficient and secure trustless bridging between networks. For more information on [Beefy proofs, take a look at this documentation](https://github.com/paritytech/grandpa-bridge-gadget/blob/master/docs/beefy.md).

- **SORA Kusama Parachain Bridge**: This critical piece of infrastructure will connect the SORA mainnet to the SORA Kusama, and eventually, SORA Polkadot parachains, allowing Polkaswap to become the center of liquidity for the Dotsama, Kudot, or Polkadot and Kusama ecosystem.

- **Trustless Multi-EVM Bridge**: Bridges are an important infrastructure component requested by the community. This iteration of SORA network bridges will be an improvement on the existing one which will bring compatibility to multiple EVM networks. It is important that this bridge is efficient, safe and trustless. Therefore there is much work to be done to ensure a solid foundation.

- **SORA v3 network Launch**: One of the longer-term milestones of the Integrated plan, all of the previous milestones must be completed to unlock the secret that will lead to the implementation of the SORA v3 network. This iteration will contain the VAL DAO structures, the SORA Parliament, and new infrastructure like the SORA Block Explorer and a Bitcoin Bridge.

- **SORAcles**: Although this functionality was proposed earlier in development, it’s implementation has been pushed to the SORA v3 network to ensure that they are safe, accurate and reliable. SORAcle implementation will be the gateway to alternative XST assets.

- **XST Base Pairs (Complete)**: XSTUSD-base pools for Polkaswap are XYK pools on Polkaswap that use XSTUSD instead of XOR as a base pair, in order to limit impermanent loss. If successful, they can be launched on the testnet shortly and then head to production.

- **XST Tokenomics (Complete)**: The XST platform for synthetics includes 30+ crypto and real-world assets that will be available for users to mint by burning XST tokens. The tokenomics that serve as the base for the XST platform needs to be carefully thought out, tested, and implemented.

- **Order Book (Complete)**: The order book feature is an upgrade that advanced Polkaswap users will enjoy, as it will allow for market orders to be placed within Polkaswap, which will also serve as the basis for applications such as NFT marketplaces.

- **Order Book Advanced Trading**: Once the order book backbone has been deployed, upgrades to the feature include stable asset trading and advanced trading.

- **Ink! Smart Contracts**: With most of the dApp space development happening on EVM-compatible networks, the implementation of Ink! will allow builders to port their projects easily into the Polkadot ecosystem, without compromising the speed, scalability and safety of Polkadot (Substrate).

- **Kensetsu**: The implementation of the Kensetsu platform as outlined in the [community-submitted RFP](https://github.com/sora-xor/rfps/issues/60), as well as the implementation of [Kenonomics](https://medium.com/@shibarimoto/kensetsu-ken-356077ebee78) divided in two phases.

- **XORless Transactions**: To facilitate the use of the SORA network as the infrastructure backbone of payment systems such as CBDC and others, the ability to make transactions without holding XOR will be implemented. This has already been tested successfully as part of the [Solomon Islands CBDC PoC](https://medium.com/sora-xor/the-sora-network-hosts-the-first-substrate-polkadot-based-cbdc-in-collaboration-with-the-central-6cc78e9b82b8).

- **Cross-сhain Swaps and Dynamic Fees**: More information on these features will be availabile soon.

- **Liquid Staking**: This feature will allow SORA network Nominators to access the liquidity they have locked on Validator nodes.

## Web

**Web** covers technology related to the IPFS-hosted web interface on [Polkaswap.io](https://polkaswap.io/).

- **DEO Arena (Complete)**: The first P2E game developed natively for the SORA network by the first SORA Builders team, [CERES](https://cerestoken.io/).

- **Polkaswap Charts (Complete)**: Every decentralized platform needs charts to allow for data analysis. Polkaswap is no different. Charts will be implemented within the Polkaswap UI directly.

- **Fearless Wallet integration (Complete)**: This integration will be available once the SORA network upgrades to Substrate 4. With this, it will be possible to have SORA network tokens available within the Fearless Wallet interface. This means that you will be able to access SORA fearlessly along with other Dotsama ecosystem tokens.

- **Fearless Wallet Desktop (Complete)**: Along with a desktop UI to fearlessly access your assets, there will also be a dApp signer that will serve as a fresh and intuitive alternative to the current Polkadot ecosystem extension.

- **Multi-Bridge UI**: As the Substrate and Multi-EVM bridges are hosted in Polkaswap, it is important to have a seamless, stylish and free user experience that will allow transfers between any networks, all in the same place and with the same intuitivity and ease of use you have come to know and love of the HASHI bridge.

- **Address Book (Complete)**: This is a minor quality of life improvement that makes a major difference. If you have contacts or personal accounts that you frequently use, the address book will allow you to access them quickly and easily.

- **Subsquid Implementation (Complete)**: The more data available for trading, the better. Accessing Subsquid data within Polkaswap will help with data accuracy for a better user experience and more accurate data feeds.

- **Subsquid Integration**: After implementing access to the data comes the task of integrating it to Polkaswap. This milestone will be the final step before users will have access to all the market data necessary for the center of liquidity of the Polkadot ecosystem.

- **Validator Staking Web (Complete)**: Nominators can stake on their favorite SORA network Validator from the [Staking tab within the Polkaswap interface](https://polkaswap.io/#/staking/list), this allows for stylish and free nominations and reward claiming without the need to access the Dotapps.io interface, making the process faster and more intuitive.

- **Marketplaces**: With the release of the order book feature, builders can implement their own marketplaces, such as NFT, phygital offerings, and any other retail platform that is not direct p2p transfer.

- **Polkaswap Widget**: This feature will allow you to perform DeFi actions on any supported website. More information will be available soon.

::: info
For Polkaswap related updates, refer to the [Polkaswap Ecosystem Updates available on Medium](https://medium.com/@polkaswap).
:::

## Mobile/Other

**Mobile/other** considers other interfaces, like the mobile apps.

- **Polkaswap Pooling (Complete)**: The stylish experience of pooling in Polkaswap will be in the palm of your hand, for access wherever you are.

- **Referrals (Complete)**: The popular Polkaswap referral system will now be available in the SORA mobile wallet’s Polkaswap section. You will be able to generate and share referral codes wherever you are!

- **Multiple accounts (Complete)**: The possibility to have more than one account in your mobile wallet is a highly requested function. Switching between multiple accounts on your SORA wallet interface will be available soon.

- **SORA network within Fearless Wallet (Complete)**: This point seems to appear across several tracks. Once the Substrate 4 upgrade is completed, the SORA network will be available in Fearless Wallet along with other Dotsama ecosystem parachains.

- **SORA Card Mobile: Phase 1**: SORA Card is also available within the SORA Mobile app, as a dedicated banking backend to manage your balances and top up your card. The first phase of the SORA Card is specific to onboarding, registration and the KYC process.
  Phase 2 and Phase 3, which include access to a physical and digital card and a fiat banking suite to manage your assets are in the pipeline.𒉡𒉎𒋼
- **Demeter Mobile integration**: The Demeter farming platform has been integrated to Polkaswap, the next natural step is for Demeter Farming to be available whenever and wherever, through the SORA wallet app.

- **SORA Typeface expansion**: This should be under the business category, but it isn’t yet. Many Worlds, Many Languages, One Typography. You can find the current [SORA Typeface here](https://fonts.google.com/specimen/SORA).

- **Hashi Substrate bridge mobile**: A feature that has been much awaited, adding mobile capabilities to the HASHI bridge will allow users to move their assets across networks from the palm of their hands.

- **Hashi Multi-EVM Bridge**: Now that the Hashi Substrate bridge is complete, the Multi-EVM bridge will be worked on, to provide on-the-go access to bridge your assets across multiple EVM-based networks.

- **Validator Staking Mobile**: Nominating SORA validators will be even easier when done on your mobile phone. You will be able to manage your stake, claim your rewards and help keep the network secure from the palm of your hands.

### Further Details

It’s also important to remember that the integrated plan contains several **secrets** that will be unlocked when the time is right. Just like in civilization development, completing sections of the integrated plan unlocks others further down the pipeline. Some might even be secrets, so stay tuned to the [SORA Ecosystem Updates](https://medium.com/sora-xor) and [Polkaswap Updates](https://medium.com/@polkaswap) to track the progress!

Although the different tracks are separated, they still remain interconnected in the “big picture,” so for example, Substate 4 implementation benefits the SORA Kusama Parachain as well as the SORA Fearless Wallet integration, and it is mentioned in several milestones across the current integrated plan.

## Learn More

- [SORA Economy](/sora-economy)
- [SORA Network Development Changelog](/changelog)
