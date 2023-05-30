# Substrate bridge

SORA 2 interaction with Polkadot/Kusama and other relay chains and it visualised on the following diagram:

![](./assets/substrate-bridge-components-svg.svg)

<details>
  <summary>UML diagram code</summary>

```uml

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

## SORA mainnet

A standalone network developed on top of the Substrate blockchain that is a main object of this documentation. It is having all the incoming and outgoing messages to other systems going though the **Federated Bridge**, which is a central gateway to an ecosystem from the outside.

## Federated Bridge

## SORA parachain

Sora 2 Parachain is designed to avoid additional transaction signing. Sora 2 Parachain is a blockchain-gateway for SORA 2 to any relay chain ecosystem. All transactions - token registration and token transfers are performed automatically, users can not send tokes via extrinsics on the Sora 2 Parachain.

Sora 2 Parachan holds the information about tokens that can pass through, this registration information is held in the XCMApp pallet and is a mapping between Sora 2 Mainnet AssetId and XCM Multilocation for a token
