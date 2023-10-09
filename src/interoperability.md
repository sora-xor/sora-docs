# Interoperability

This article is about the HASHI bridge - a decentralized two-way bridge connecting SORA and other blockchains (such as Ethereum and Polkadot). HASHI means bridge in Japanese, and it is the plumbing that links many different chains, like pipes connecting the world's assets. The initial version of this bridge was a significant component of the plans for the beta launch of the SORA network in Q1 2021.

## History

The SORA blockchain serves as an ecosystem for robust DeFi projects like SORA's decentralized global economic system and [Polkaswap](./polkaswap), a DEX specifically designed for an interoperable future. In line with this vision, we recognize that blockchain maximalism is no longer viable, and we acknowledge the importance of secure, fast, and efficient asset migration between blockchains.

As an initial step towards achieving this, we have developed the source code for the [Ethereum Bridge](./hashi). In addition to Ethereum, SORA aims to establish connections with various ecosystems. Being built on Substrate, it is advantageous to utilise the built-in cross-chain transfer capabilities to facilitate communication with projects running on the Polkadot and Kusama ecosystems. The [Substrate bridge](./substrate-bridge) was developed to achieve this.

With multiple bridges already in operation, it becomes necessary to streamline the bridge interface to ensure consistent software components for cross-chain transfers across different heterogeneous blockchains. As a solution, the "Federated Bridge" was created to serve as the gateway between the SORA mainnet and the external world. The term "federated" is used because this bridge inherits certain features from a federated architecture.

The federated bridge follows the following workflow; The user initiates a transfer by calling an extrinsic. Upon detecting a new transaction on the source network, each peer signs it with their respective key and registers the signature on the source network. Subsequently, active peers add their signatures to the user's transaction. Once a sufficient number of signatures are gathered, the transaction is forwarded to the target network via relayers. The relayers sign the messages before transmitting them. As a result, only the owner of the peer's private key can initiate this process. The target blockchain then verifies the recipient's compliance with the signature authority based on the consensus mechanism. If the verification is successful, the tokens will be released to the designated transfer agent's address on the new network.

## Security

As all bridges are quite technically complex, teams building on the SORA network may want guarantees that there will not be financial loss resulting from any technical difficulties with the bridge. While this will be explained more in a future article, the SORA Parliament will provide insurance for infrastructure that is deemed systemically important to the ecosystem. [Systemically Important Infrastructure (SII)](./social-insurance) will need to concede governance to the SORA Parliament, but in exchange, the Parliament will commit to socialize any losses, in order to give network participants the confidence to use the SORA network. Details will be laid out in a future article.
