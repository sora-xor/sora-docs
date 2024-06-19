---
title: Palmatrix PalmaBot | SORA Docs
head:
  - - meta
    - name: description
      content: Explore Palmatrix's PalmaBot to connect Polkaswap to centralized exchanges, enhancing decentralized trading efficiency..
  - - meta
    - name: keywords
      content: SORA builders, SORA, centralised exchange, polkaswap
---

# Palmatrix PalmaBot

### Introduction

The Palmabot is the first deliverable for Palmatrix as a SORA Builder, per the RPF proposing the infrastructure to implement the PalmaBot. This one-of-a-kind virtual assistant lives on Telegram and enables users to trade on 40 crypto exchanges through a single/unified UI. It has been in production since 2018 and is getting AI features implemented as we speak to enable natural language recognition as soon as possible (we are lucky with the AI boom with ChatGPT and OpenAI).

To achieve this, Palmatrix will;
Enable access to the SORA liquidity pool for PalmaBot users by implementing it into Palmatrix multi-exchange access and labelling it open-source in the CCXT open-source library. Consequently, add the SORA liquidity pool to our SOR (Smart Order Routing / PalmaExecutor) for our B2C users and add the staking feature to PalmaBot—all labelled open-source.
Implement widget for SORA liquidity pool to enable liquidity from CEX markets/CeFi while enabling hedging with Palmatrix market-making features—open source.

![](/.gitbook/assets/palmatrix-implementation-overview.png)

### PalmaBot Goals

The five main goals of the PalmaBot are;

1. Implement Polkaswap public API connector into CCXT open source library, which has great potential on a short-term basis to:

- Enable any trading tool that uses CCXT to start trading via the SORA network/Polkaswap,
- It is hard to estimate precisely, but for sure, in the next 4-year cycle, we can expect consequently,
- Increased trading volumes as more peers will be trading on Polkaswap with the DEX added to multi-exchange trading environments (such as Palmatrix SOR) and
- Increased funding of liquidity pool.

2. Integrate SORA Wallet to the Palmatrix platform in the next 12 months:

- Enable access to Polkaswap/SORA features for PalmaBot users and non-tech-savvy users (masses) in a non-custodial (PalmaBot - B2C) and custodial (Asset Management - B2B) way,
- Make the SORA wallet accessible to Perception TV users (500 Mio audience reach) and other Palmatrix partners,
- Open source SORA wallet integration to any web-based protocol (messenger platforms, browser widgets, etc.)
- Increase participation in the SORA liquidity pool, and
- Increase trading volumes.

3. Add Polkaswap to Palmatrix SOR/PalmaExecutor (trade execution engine for PalmaBot and Palmatrix multi-exchange layer), which is:

- Increasing liquidity in the SORA/Polkaswap network by enabling trade execution via the SORA network for PalmaBot users and PalmaExecutor partners' users plus Palmatrix institutional clients (B4C) and
- Increasing trading volumes.

4. Add the staking feature to Palmatrix, PalmaBot, and PalmaExecutor:

- Enable masses of non-tech-savvy users to stake into the SORA liquidity pool and
- Increase Polkaswap/SORA liquidity and
- Use the AI-driven virtual private assistant for easy accessability to our products, providing interactive introduction and help right from the start. The virtual assistant can be a tutor, an analysis expert or a risk manager. Customize your Palmabot Trading AI-Agent experience.
- Easy connectivity to our API and service endpoints, using webhook technology as well as unified API approach from ccxt library.

5. Implement CeFi widget for the SORA liquidity pool to include CEXs for hedging, also Palma users that are not in the liquidity pool:

- Enable additional liquidity for Polkaswap by increasing trade success/liquidity in Polkaswap/SORA,
- Bring more indirect liquidity into the SORA pool by enabling hedging on CEXs.

### Next Steps

- Soon after, the PalmaBot SORA Wallet implementation and other features as per the [Phase 2 RFP](https://github.com/sora-xor/rfps/issues/101) will become available.

- The Palmatrix team also hosted an AMA session with the SORA community to answer their pressing questions. [Read it here](https://medium.com/sora-xor/sora-x-palmatrix-ama-fda509ac2ce8)

- The PalmaBot is now available for testing by the SORA community. Here are instructions for accessing and trying it.

## PalmaBot Tutorial

To try out the PalmaBot in Telegram, follow these simple steps;

1. Add [@Palma_test_new_bot](https://t.me/Palma_test_new_bot) and then:
2. Click “start” (with this agree to the T&C's).
3. Chat with the PalmaBot using the commands.

![](/.gitbook/assets/palmatrix-palmabot-tutorial-1.png)

🌴 COMMANDS
(simply type in to chat with the [@Palma_test_new_bot](https://t.me/Palma_test_new_bot):

- /sorawallet - shows the public address and QR code for the existing SORA wallet in your Palma account
- /deletesorawallet - deletes existing SORA wallet from your account.
- /createsorawallet - creates SORA wallet if there is none yet existing.

![](/.gitbook/assets/palmatrix-palmabot-tutorial-2.png)

🌴 FUNCTIONS:
(find the inline buttons within the conversation after triggering the /sorawallet command)

- Balance - see balances of tokens on your SORA wallet
- Send XOR - prototype function that sends 10 XOR to PalmaWallet hard-coded, and its purpose is solely to POC local transaction signing and sending it to the network while receiving a response.

::: warning
**Do not use prototype-created wallets to send funds. The SEED Phrase
is exposed due to test reasons, which could compromise the security of
your funds.**
:::

::: info
**We will soon enable a test network to prevent issues with SEED
phrases. Thank you for understanding.**
:::

_We invite those interested in the Prototype yet POC version of Palma
Virtual Assistant’s SORA wallet integration; please [join this
group](https://t.me/+95bbVOV-KH84YzQ8) and stay tuned for further
information._

## Learn More

- [Palmatrix Overview](/palmatrix-overview)
- [Build on SORA](/build)
