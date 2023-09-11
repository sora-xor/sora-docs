---
title: "How to Request Identity Judgment For SORA | Getting Verified | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to request identity judgment for your SORA account and get verified. Follow these steps to establish your on-chain identity and gain trust in the SORA community."
  - - meta
    - name: keywords
      content: SORA, identity judgment, request judgment, polkadot.js, on-chain identity, verification, community marketing funds, Community Marketing Funds
---

# Identities on Substrate-Based Networks

## TL;DR

- You can set an on-chain identity to make it easier for others to recognize your address.
- As a Validator, it adds extra confidence to Nominators if they know your on-chain identity.
- This tutorial will help you set up an on-chain identity and request a judgement to your identity (as a trusted or verified entity on the SORA network)

## Via PolkadotJS UI

### Register an Identity

Requirements:

- SORA account
- ~0.005 XOR to pay the fee

Follow these steps to set up an identity:

1. Go to the [Polkadot JS Apps pointing at the Sora Mainnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/accountss) account's tab:

2. Click on the hamburger menu icon on the account you wish to register an identity for. Then select "Set on-chain identity":

  <center><img src="/.gitbook/assets/id-select-menu.png" width="400"></center>

3. Register your Identity and click on "Set Identity" when finished.

   <center><img src="/.gitbook/assets/id-register-id.png" width="400"></center>

   ::: info

   Please note that you will have to pay a small XOR transaction fee for signing.

   :::

Once the transaction is completed your account will show an identity!

## Requesting Identity Judgment

Once you have finished following all the steps outlined in the [Register an identity](/id.md#register-an-identity) section, you can request an additional verification to obtain a prominent green checkmark next to your account name. This verification serves as an indication that you are a recognized and verified user, allowing others to easily identify and trust your account.

### 1. Request judgement from a registrar on polkadot.js.

Using the account you wish to verify, go under the Developer tab and follow these steps:

- Click Extrinsics.
- Select `Identity` and `requestJudgement`.
- Under `regIndex`, place `1` (`reg_index` = `0` is no longer active). Registrar `1` has a fee of 1 `XOR`.
- Submit the transaction.

  <center><img src="/.gitbook/assets/requestJudgement.png" width="600"></center>

### 2. Donate to Community Marketing Funds address.

Donate a minimum of 1 `XOR` per account requesting judgement to the Community Marketing Funds address (`cnSN9X2HNU3uYjRbGvTwpgUdtVDuNk1g29XkcQNoNBQxgt1ii`).
The funds from this community wallet are used for SORA marketing.

### 3. Contact the registrar directly. You can find their contact info in their profile.

| Social media/messaging platform | Identifier                 |
| ------------------------------- | -------------------------- |
| Telegram                        | https://t.me/SpicyHotWings |
| Twitter                         | @mishokanaria              |
| Riot                            | @spicyhotwings:matrix.org  |

### 4. Verify your identity.

You will need to prove that the information on-chain is legitimate. Each registrar will have their own set of procedures to verify your identity and values, and only once you've satisfied their requirements will the process continue.

::: info

You can freely change any values during the judgement process until you are verified. However, changing the value of even a single field after you've been verified will un-verify your account and you will need to start the judgement process anew.

:::

## Learn More

- [Create an Account on SORA](/create-an-address.md)
- [Running a SORA Node](/running-a-node.md)
