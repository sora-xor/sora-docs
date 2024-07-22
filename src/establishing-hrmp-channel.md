---
title: Establish an HRMP channel | SORA Docs
head:
  - - meta
    - name: description
      content: Learn how to establish communication between third-party parachain and the SORA network. 
  - - meta
    - name: keywords
      content: adding tokens, HRMP channel, SORA network, listing tokens, requirements, procedures, asset bridging, blockchain networks, whitelist
---

# Establish an HRMP channel

To establish communication between your parachain and SORA, you must create HRMP channels that go through the Relay Chain to transfer messages between parachains.

Remember that HRMP channels usually go in one direction. For two-way communication, you'll need to set up another channel going the opposite way. Therefore, the following is split into sub-sections:

## Your Parachain to SORA

1. Obtain the encoded call data of the `hrmp.hrmpInitOpenChannel` extrinsic on the relay chain.

This unique code includes a `recipient` detail telling the relay chain which parachain you want to connect to. The recipient changes depending on what environment you are planning to establish the channel in. For Kusama, look at [this list](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io#/parachains), and for Rococo, go to [this list](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains).

Combine this parachain id with the other info from the documentation. For example, for Rococo you'll have something like this: `0x3c00db070000e803000000900100`.

2. Within your parachain, compose an XCM message that notifies the relay chain about the intent to open a channel with SORA. Refer to the [official documentation](https://docs.substrate.io/reference/how-to-guides/parachains/add-hrmp-channels/) for an illustrative example of the XCM message.

::: info

It is important to acknowledge that if your implementation of HRMP channel logic differs from the standard `polkadotXcm.send` pallet; you should modify this step accordingly.

:::

Once the extrinsic executes successfully, SORA needs to accept the channel establishment.

3. Subsequently, the SORA team will accept the channel by incorporating the encoded call data of `hrmp.hrmpAcceptOpenChannel`. This data will feature your parachain's ID as a parameter and will be executed via the `xcmApp.sudoSendXCM` call.

Upon successful execution, (an) HRMP channel(s) will be established from your parachain to SORA.

## SORA to Your Parachain

The steps here mirror those from the preceding sub-section. For steps (1) and (2) outlined earlier, SORA initiates an XCM message to propose channel establishment. Subsequently, it's your responsibility to encode `hrmp.hrmpAcceptOpenChannel` with SORA's parachain ID. For instance, in the case of Rococo, the encoded call data would be: `0x3c01db070000`. Execute an XCM message from your parachain in alignment with the [official guidelines](https://docs.substrate.io/reference/how-to-guides/parachains/add-hrmp-channels/), including the encoded call data containing SORA's parachain ID.

Upon successful execution of this process, your parachain will be set up to receive messages from the SORA parachain.

## Last step

We will need to register the assets for transfer between chains. On your parachain, you'll need to register the SORA assets. Conversely, on the SORA Mainnet, we will handle the registration of your assets, or you can do it yourself. This guide provides steps [to whitelist your assets on Polkaswap](/whitelist-token-to-polkaswap.md).
