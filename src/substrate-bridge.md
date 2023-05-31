# Substrate bridge

## Main components

SORA 2 interaction with Polkadot/Kusama and other relay chains and it visualised on the following diagram:

<!-- TODO apply the styles -->

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

Let's go throught all the components mentioned on the figure:

### SORA mainnet

A standalone network developed on top of the Substrate blockchain that is a main object of this documentation. It is having all the incoming and outgoing messages to other systems going though the **Federated Bridge**, which is a central gateway to an ecosystem from the outside.

### Federated Bridge

You can read about the Federated Bridge in [Interoparibility](./interoperability)

### SORA parachain

The SORA Parachain serves as a blockchain-gateway, allowing seamless integration between SORA and any relay chain ecosystem. It facilitates automatic token registration and transfers, eliminating the need for users to send tokens via extrinsics on the SORA Parachain. By design, SORA Parachain eliminates the requirement for additional transaction signing. The Parachain maintains a comprehensive record of tokens that can be transferred, with registration information stored in the XCMApp pallet. This information includes the mapping between SORA Mainnet AssetId and XCM Multilocation for each token.

### Relay chain

In the Polkadot and Kusama ecosystems, the relaychain refers to the main blockchain network that serves as the backbone for the entire network of connected parachains. It acts as a hub or coordinator for multiple parachains, facilitating their communication and interoperability.

The relaychain provides several important features, including cross-chain messaging, shared security, scalability, and upgradeability. It enables parachains to communicate with each other through the Cross-Chain Message Passing protocol (usually utilising XCM messaging format), allowing the transfer of assets and data between different chains.

### Parachains

Parachains are specialized blockchains that connect to the relaychain. They can have their own consensus mechanisms, governance models, and specific functionality. They rely on the relaychain for security and the ability to interact with other parachains within the ecosystem. As the name suggests, SORA parachain is a parachain too.

## Common Pallets

There are several common pallets used in the SORA project, providing bridge functionality on both the parachain and Sora Mainnet sides:

- **SubstrateDispatch**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/dispatch)). This pallet decodes and checks messages, performs runtime calls, and creates a bridge origin for executing XCMApp and SubstrateBridgeApp extrinsics. Only the bridge origin can call these extrinsics.

- **SubstrateBridgeInboundChannel**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/inbound)). This pallet handles the submission of incoming messages. While submitting messages can be called from any account, a relayer is used for this function. It utilizes BeefyLightClient or MultisigVerifier for message verification and SubstrateDispatch for message calling.

- **SubstrateBridgeOutboundChannel**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/outbound)). This pallet is responsible for sending outgoing messages. It is used by SubstrateBridgeApp and XCMApp to send messages to other networks.

### Sora Mainnet Pallets

On the Sora Mainnet side, the following pallets are used:

- **SubstrateBridgeApp**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-app)). This pallet serves as the main entry point for clients to send assets through the bridge. It also sends messages to the parachain (XCMApp) to register assets. The bridge requires bonding of SubstrateBridgeApp on the Mainnet and XCMApp on the Parachain. It utilizes SubstrateBridgeOutboundChannel to send messages through the bridge and is used by SubstrateDispatch to execute messages.

- **Assets**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-network/tree/master/pallets/assets)). This pallet implements assets on the Sora 2 Mainnet. It is used by SubstrateBridgeApp to register, mint, and burn assets.

### Sora Parachain Components

On the Sora Parachain side, the following components are used:

- **XCMApp**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-parachain/tree/develop/pallets/xcm-app)). This pallet establishes the connection between Sora 2 Mainnet and a relay chain/parachains. It maintains a mapping from Sora 2 Mainnet AssetId (a 32-byte array) to a general XCM Multilocation. It enables the transfer of assets between Sora 2 Mainnet and a relay chain/parachain. Only the bridge origin can access the pallet's extrinsics. It utilizes SubstrateBridgeOutboundChannel to send messages through the bridge and is used by SubstrateDispatch to execute messages.

- **XTokens**: Developed by the Open Web3 Stack ([GitHub link](https://github.com/open-web3-stack/open-runtime-module-library)). This component is used by XCMApp to send tokens to a relay chain/parachains.

- **XCMExecutor**: Developed by Parity. While not a pallet, it is a crucial component for executing XCM Messages. It utilizes XCMApp as a transactor and AssetId converter.

### Federated Bridge Pallets

The Federated Bridge in SORA relies on the following pallets:

- **BridgeDataSigner**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/data-signer)). This pallet is responsible for signing bridge data.

- **MultisigVerifier**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-common/tree/develop/pallets/multisig-verifier)). This pallet manages the verification of peers and ECDSA signatures. It utilizes BeefyLightClient for message verification and SubstrateDispatch for message calling.

- **The Relayer**: Developed by Soramitsu ([GitHub link](https://github.com/sora-xor/sora2-network/tree/master/relayer)). The Relayer is a separate service and not a pallet. It plays a crucial role in the Federated Bridge, passing through messages and holding private keys for signatures, similar to the Beefy bridge implementation.

## Performing a Cross-Chain Transfer

To execute a cross-chain token transfer, a registration process is required beforehand. Token registration involves using the root extrinsics `substrateBridgeApp.registerSidechainAsset` and `substrateBridgeApp.registerThischainAsset`. For instance, to register a native token on the Rococo network, the following procedure is followed:

<!-- TODO provide a more detailed explanation of the XCM message -->

![Image: Example of registering a Rococo native token](./assets/sidechain-token-registration.png)

Similarly, to register a native token from another blockchain as transferable through a parachain, the process is as follows:

![Image: Example of registering a native blockchain for transfer via parachain](./assets/thischain-token-registration.png)

These extrinsics send messages to the Sora 2 Parachain, enabling the registration of asset mappings. Without this registration, tokens cannot be transferred through the parachain.

Once the token is successfully registered, transfers can be initiated. To transfer a token to a relaychain, the extrinsic substrateBridgeApp.burn is used. For instance, to transfer a ROC token to the Rococo relay chain, the following procedure is followed:

![Image: Example of transferring ROC to the Rococo relay chain](./assets/token-burn.png)

To specify a parachain as the transfer destination, the following request needs to be made:

![Image: Example of indicating a parachain as the transfer target](./assets/transfer-to-parachain.png)

By following these steps, cross-chain transfers can be successfully executed, allowing for seamless movement of tokens between different chains within the network.
