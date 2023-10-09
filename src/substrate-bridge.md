# Substrate bridge

## Main components

SORA interaction with Polkadot/Kusama and other relay chains is visualised in the following diagram:

![](./assets/substrate-bridge-components-svg.svg)

<details>
  <summary>UML diagram code</summary>

```

@startuml

skinparam component {
  BorderColor white
  BackgroundColor red
}

skinparam interface {
  BorderColor black
  BackgroundColor red
}

Component [SORA mainnet]
interface "Federated\nbridge" as FB

cloud {
  [SORA parachain] as SP
  [Relay chain\n(Polkadot/Kusama)] as RC
  interface "XCM" as XCM1
  interface "XCM" as XCM2
  [Other parachains] as OP
}

[SORA mainnet] - FB
FB - SP
SP - XCM1
XCM1 - RC
RC - XCM2
XCM2 - OP
@enduml

```

</details>

Let's go through all the components mentioned in the figure:

### SORA mainnet

A standalone network developed on top of the Substrate blockchain is the main object of this documentation. It has all the incoming and outgoing messages to other systems crossing the **Federated Bridge**, which is a central gateway to an external ecosystem.

### Federated Bridge

You can read about the Federated Bridge in [Interoparibility](./interoperability).

### SORA parachain

The SORA parachain serves as a blockchain gateway, allowing seamless integration between SORA and any relay chain ecosystem. It facilitates automatic token transfers, eliminating the need for users to send tokens via extrinsics on the SORA parachain. 
By design, the SORA parachain eliminates the requirement for additional transaction signing. The parachain maintains a comprehensive record of tokens that can be transferred, with registration information stored in the XCMApp pallet. This information includes the mapping between the SORA mainnet AssetId and XCM Multilocation for each token.

### Relay chain

In the Polkadot and Kusama ecosystems, the relay chain refers to the main blockchain network that serves as the backbone for the entire network of connected parachains. It acts as a hub or coordinator for multiple parachains, facilitating their communication and interoperability.

The relay chain provides several important features, including cross-chain messaging (XCM), shared security, scalability, and upgradeability. It enables parachains to communicate with each other through the Cross-Chain Message Passing protocol (usually utilising XCM messaging format), allowing the transfer of assets and data between different chains.

### Parachains

Parachains are specialized blockchains that connect to the relay chain. They can have their own consensus mechanisms, governance models, and specific functionality. They rely on the relay chain for security and the ability to interact with other parachains within the ecosystem. As the name suggests, the SORA parachain is also a parachain within this architecture.

::: warning

The execution of XCM transfers and the handling of incoming messages will vary between different chains. Each connected parachain should have its own dedicated reference in the documentation, specifically detailing the implementation in client applications. This reference should specify the exact version of the XCM message being used, as well as the junctions utilized and populated.

:::

## Flows

Delving into the details of cross-chain transfers, you can consult the following top-level diagrams that illustrate the various directional flows:

### SORA to Parachain

![](./.gitbook/assets/FederatedBridgeFlowSoraToParachain.png)

### Parachain to SORA

![](./.gitbook/assets/FederatedBridgeFlowParachainToSora.png)

## Common Pallets

There are several common pallets used in the SORA project, providing bridge functionality on both the parachain and Sora Mainnet sides:

- **SubstrateDispatch**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/dispatch)). This pallet decodes and checks messages, performs runtime calls, and creates a bridge origin to execute **XCMApp** and **ParachainBridgeApp** extrinsics. Only the bridge origin can call these extrinsics.

- **SubstrateBridgeInboundChannel**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/inbound)). This pallet handles the submission of incoming messages. While submitting messages can be called from any account, a relayer is used for this function. It utilizes **BeefyLightClient** or **MultisigVerifier** for message verification and **SubstrateDispatch** for message calling.

- **SubstrateBridgeOutboundChannel**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/outbound)). This pallet is responsible for sending outgoing messages. It is used by the **ParachainBridgeApp** and **XCMApp** to send messages to other networks.

### SORA Mainnet Pallets

On the SORA Mainnet side, the following pallets are used:

- **ParachainBridgeApp**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/parachain-app)). This pallet serves as the main entry point for clients to send assets through the bridge. It also sends messages to the parachain (**XCMApp**) to register assets. The bridge requires bonding of **ParachainBridgeApp** on the Mainnet and **XCMApp** on the Parachain. It utilizes SubstrateBridgeOutboundChannel to send messages through the bridge and is used by **SubstrateDispatch** to execute messages.

Root extrinsics: `finalizeAssetRegistration`, `registerThischainAsset`, `registerSidechainAsset`, `addAssetIdParaId`, `removeAssetIdParaId`, `mint`.
Extrinsic to be called by user: `burn`.

- **Assets**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-network/tree/master/pallets/assets)). This pallet implements assets on the SORA 2 Mainnet. It is used by **ParachainBridgeApp** to register, mint, and burn assets.

### SORA Parachain Components

On the SORA Parachain side, the following components are used:

- **XCMApp**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-parachain/tree/develop/pallets/xcm-app)). This pallet establishes the connection between the SORA 2 Mainnet and a relay chain/parachain. It maintains a mapping from the SORA 2 Mainnet AssetId (a 32-byte array) to a general XCM Multilocation. It enables the transfer of assets between SORA 2 Mainnet and a relay chain/parachain. Only the bridge origin can access the pallet's extrinsics. It utilizes **SubstrateBridgeOutboundChannel** to send messages through the bridge and is used by **SubstrateDispatch** to execute messages.

- **XTokens**: Developed by the Open Web3 Stack ([GitHub link](https://github.com/open-web3-stack/open-runtime-module-library)). This component is used by **XCMApp** to send tokens to a relay chain/parachains.

- **XCMExecutor**: Developed by Parity. While not a pallet, it is a crucial component for executing XCM Messages. It utilizes **XCMApp** as a transactor and AssetId converter.

### Federated Bridge Pallets

The Federated Bridge in SORA relies on the following pallets:

- **BridgeDataSigner**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/data-signer)). This pallet is responsible for signing bridge data.

Root extrinsics: `registerNetwork`, `addPeer`, `removePeer`, `submit`.
Messages: see [`BridgeCall` enum](https://github.com/sora-xor/sora2-common/blob/2f0aeec218e7646c295f371c4f553f4260e59eff/pallets/types/src/substrate.rs#L126)

- **MultisigVerifier**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/multisig-verifier)). This pallet manages the verification of peers and ECDSA signatures. It utilizes BeefyLightClient for message verification and SubstrateDispatch for message calling.

Root extrinsics: `initialize`, `addPeer`, `removePeer`.

- **The Relayer**: Developed by SORAMITSU ([GitHub link](https://github.com/sora-xor/sora2-network/tree/master/relayer)). The Relayer is a separate service and not a pallet. It plays a crucial role in the Federated Bridge, passing through messages and holding private keys for signatures, similar to the Beefy bridge implementation.

## Guides

### Transfers

::: warning

Only specific XCM messages for/from the corresponding networks have been tested and utilised in the client applications, such as Polkaswap. When constructing your own messages, exercise caution - there is a possibility that your funds could be permanently lost.

:::

#### SORA mainnet -> Relaychain / Other Prachain

To execute a cross-chain token transfer, a registration process is required beforehand. Token registration involves using the root extrinsics `ParachainBridgeApp.registerSidechainAsset` and `ParachainBridgeApp.registerThischainAsset`. For instance, to register a native token on the Rococo network, the following procedure is followed:

![Image: Example of registering a Rococo native token](./assets/sidechain-token-registration.png)

Similarly, to register a native token from another blockchain as transferable through a parachain, the process is as follows:

![Image: Example of registering a native blockchain for transfer via parachain](./assets/thischain-token-registration.png)

These extrinsics send messages to the SORA 2 Parachain, enabling the registration of asset mappings. Without this registration, tokens cannot be transferred through the parachain.

Once the token is successfully registered, transfers can be initiated. To transfer a token to a relaychain, the extrinsic ParachainBridgeApp.burn is used. For instance, to transfer a ROC token to the Rococo relay chain, the following procedure is followed:

![Image: Example of transferring ROC to the Rococo relay chain](./assets/token-burn.png)

To specify a parachain as the transfer destination, the following request needs to be made:

![Image: Example of indicating a parachain as the transfer target](./assets/transfer-to-parachain.png)

By following these steps, cross-chain transfers can be successfully executed, allowing for seamless movement of tokens between different chains within the network.

### How to track the status of the transfer?

#### Other Parachain -> SORA mainnet

Example extrinsic: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.karura-node-1.c2.dev.sora2.soramitsu.co.jp#/extrinsics/decode/0x3600008000407a10f35a00000000000000000000010102006d1f0100e6cacc509b47920b3fe9329224df74640cd6861d40132633aae46c168ab73e4d00

##### Karura dev -> SORA mainnet dev example

1. Karura: After executing the extrinsic mentioned above, the xcmpQueue.XcmpMessageSent event is emitted.

![](./assets/xcmMessageSent.png)

2. After a certain period of time and upon successful arrival of the message to the SORA Parachain, the `xcmpQueue.Success` event is emitted. This event will have the same message hash as shown in the example from (1). As a result, it will be possible to find `substrateBridgeOutboundChannel.MessageAccepted` from the same extrinsic. The event will contain the nonce of the message, which will be passed to the mainnet.

![](./assets/fundsReceivedOnParachain.png)

3. The Parachain routes the message to the mainnet. Once it arrives, the `substrateDispatch.MessageDispatched` event with the same nonce as in (2) is emitted.

![](./assets/xcmMessageDispatchedOnMainnet.png)
