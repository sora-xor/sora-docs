# Ponte de substrato

## Componentes principais

A interação do SORA com Polkadot/Kusama e outras cadeias de retransmissão é visualizada no diagrama a seguir:

![](./assets/substrate-bridge-components.svg)

<detalhes>
 <summary>Código do diagrama UML</summary>

```

@startuml

componente skinparam {
 BordaCor branca
 FundoCor vermelha
 FonteCor branca
}

interface skinparam {
 BordaCor preta
 FundoCor vermelha
}

Componente [rede principal SORA]
interface "Federated\nbridge" como FB

nuvem {
 [parachain SORA] como SP
 [Cadeia de retransmissão\n(Polkadot/Kusama)] como RC
 interface "XCM" como XCM1
 interface "XCM" como XCM2
 [Outros pára-quedas] como OP
}

[Rede principal SORA] - Facebook
Facebook-SP
SP-XCM1
XCM1-RC
RC-XCM2
XCM2-OP
@enduml

```

</detalhes>

Vamos revisar todos os componentes mencionados na figura:

### Rede principal SORA

Uma rede independente desenvolvida na blockchain Substrate é o foco principal desta documentação. Ele recebe todas as mensagens recebidas e enviadas para outros sistemas que atravessam a **Federated Bridge**, que é uma porta de entrada central para o ecossistema externo.

### Ponte Federada

Você pode ler sobre a Federated Bridge em [Interoperabilidade](./interoperability).

### Parachain SORA

O parachain SORA serve como um gateway blockchain, permitindo integração perfeita entre SORA e qualquer ecossistema de cadeia de retransmissão. Facilita transferências automáticas de tokens, eliminando a necessidade dos usuários enviarem tokens via extrínsecos no parachain SORA.
Por design, o parachain SORA elimina a necessidade de assinaturas de transações adicionais. O parachain mantém um registro completo de tokens que podem ser transferidos, com informações cadastrais armazenadas no palete XCMApp. Estas informações incluem o mapeamento entre o AssetId da rede principal SORA e o XCM Multilocation para cada token.

### Cadeia de Relés

Nos ecossistemas Polkadot e Kusama, a cadeia de retransmissão refere-se à principal rede blockchain que serve como espinha dorsal para toda a rede de parachains conectados. Atua como hub ou coordenador de múltiplos parachains, facilitando sua comunicação e interoperabilidade.

A cadeia de retransmissão fornece vários recursos importantes, incluindo mensagens entre cadeias (XCM), segurança compartilhada, escalabilidade e capacidade de atualização. Ele permite que parachains se comuniquem entre si através do protocolo Cross-Chain Message Passing (geralmente usando o formato de mensagem XCM), permitindo a transferência de ativos e dados entre diferentes cadeias.

### Parachains

Parachains são blockchains especializados que se conectam à cadeia de retransmissão. Podem ter os seus próprios mecanismos de consenso, modelos de governação e funcionalidades específicas. Eles dependem da cadeia de retransmissão para segurança e capacidade de interagir com outros parachains dentro do ecossistema. Como o próprio nome sugere, o parachain SORA também é um parachain dentro desta arquitetura.

:::aviso

A execução de transferências XCM e o tratamento de mensagens recebidas variam entre as diferentes cadeias. Cada parachain conectado deve ter sua própria referência dedicada na documentação, detalhando especificamente a implementação em aplicações clientes. Esta referência deve especificar a versão exata da mensagem XCM que está sendo usada, bem como as junções usadas e preenchidas.

:::

## Fluxos

Indo mais fundo nos detalhes das transferências entre cadeias, você pode consultar os seguintes diagramas de nível superior que ilustram os vários fluxos direcionais:

### SORA para Parachain

```sereia
diagrama de sequência
 ator A como Alice
 participante S como SORA
 participante R como revezamento
 participante P como Parachain

 A ->> S: Chame bridgeProxy.burn
 S ->> S: Queimar (ativos sidechain) / Reservar (ativos thischain)¹
 S ->> S: Adicionar mensagem ao compromisso
 S ->> R: Preparar compromisso
 R ->> R: Assinar compromisso
 R ->> S: Aprovar compromisso
 S ->> R: Obtenha assinaturas
 R ->> P: Enviar compromisso
 P ->> A: Enviar tokens via XCM
```

_¹ O ativo sidechain (registrado via [register_sidechain_asset](https://sora-xor.github.io/sora2-network/master/doc/substrate_gen/runtime/runtime_types/parachain_bridge_app/pallet/enum.Call. html#variant.register_sidechain_asset ) ) será queimado. O ativo SORA (registrado via [register_thischain_asset](https://sora-xor.github.io/sora2-network/master/doc/substrate_gen/runtime/runtime_types/parachain_bridge_app/pallet/enum.Call.html#variant .register_thischain_asset) ) será reservado._


### Parachain para SORA

```sereia
diagrama de sequência
 ator A como Alice
 participante P como Parachain
 participante R como Relayer
 participante S como SORA

 A ->> P: Enviar tokens via XCM¹
 P ->> P: Adicionar mensagem ao compromisso
 Q ->> R: Prepare o compromisso
 R ->> R: Assinar compromisso
 A ->> P: Aprovar compromisso
 Q ->> R: Obtenha assinaturas
 R ->> S: Enviar compromisso
 S ->> A: Cunhar/Enviar tokens
```

_¹ Os ativos podem vir de várias fontes, incluindo outros parachains ou Relay Chain, e a ação resultante (reserva ou queima) na cadeia de origem depende de sua implementação específica (normalmente iniciada chamando `xcmPallet.reserveTransferAssets` ou `xTokens. transfer` ). Por fim, o parachain SORA permanece sem saber do resultado final, pois apenas recebe uma mensagem XCM que posteriormente será retransmitida para a rede principal._

## Paletas Comuns

Existem várias paletas comuns usadas no projeto SORA, fornecendo funcionalidade de ponte tanto no lado do parachain quanto no lado da rede principal do SORA:

- **SubstrateDispatch**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/dispatch)). Esta paleta decodifica e verifica mensagens, faz chamadas de tempo de execução e cria uma fonte de ponte para executar extrínsecos **XCMApp** e **ParachainBridgeApp**. Somente a origem da ponte pode chamá-los de extrínsecos.

- **SubstrateBridgeInboundChannel**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/inbound)). Esta paleta trata da exibição de mensagens recebidas. Embora as mensagens de envio possam ser chamadas de qualquer conta, um retransmissor é usado para esta função. Use **BeefyLightClient** ou **MultisigVerifier** para verificação de mensagens e **SubstrateDispatch** para chamada de mensagens.

- **SubstrateBridgeOutboundChannel**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/substrate-channel/src/outbound)). Esta paleta é responsável pelo envio de mensagens de saída. É usado por **ParachainBridgeApp** e **XCMApp** para enviar mensagens para outras redes.

### Paletas da rede principal SORA

No lado SORA Mainnet, são utilizadas as seguintes paletas:

- **ParachainBridgeApp**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/parachain-app)). Esse palete serve como principal ponto de entrada para os clientes enviarem ativos pela ponte. Também envia mensagens ao parachain (**XCMApp**) para registrar ativos. A ponte requer vinculação de **ParachainBridgeApp** na Mainnet e **XCMApp** no Parachain. Ele usa SubstrateBridgeOutboundChannel para enviar mensagens pela ponte e é usado por **SubstrateDispatch** para executar mensagens.

Extrínsecos de raiz: `finalizeAssetRegistration`, `registerThischainAsset`, `registerSidechainAsset`, `addAssetIdParaId`, `removeAssetIdParaId`, `mint`.
Extrínseco a ser chamado pelo usuário: `burn`.

- **Ativos**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-network/tree/master/pallets/assets)). Esta paleta implanta ativos na rede principal SORA 2. Ele é usado pelo **ParachainBridgeApp** para registrar, cunhar e queimar ativos.

### Componentes SORA Parachain

No lado do parachain SORA, são usados ​​os seguintes componentes:

- **XCMApp**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-parachain/tree/develop/pallets/xcm-app)). Esta palete estabelece a conexão entre a rede principal SORA 2 e uma cadeia de relés/parachain. Mantém um mapeamento do SORA 2 Mainnet AssetId (uma matriz de 32 bytes) para um Multilocation XCM geral. Permite a transferência de ativos entre a Mainnet SORA 2 e uma cadeia de retransmissão/parachain. Somente a fonte da ponte pode acessar os extrínsecos do palete. Ele usa **SubstrateBridgeOutboundChannel** para enviar mensagens pela ponte e é usado por **SubstrateDispatch** para executar mensagens.

- **XTokens**: Desenvolvido pela Open Web3 Stack ([código-fonte](https://github.com/open-web3-stack/open-runtime-module-library)). Este componente é usado pelo **XCMApp** para enviar tokens para uma cadeia de retransmissão/parachains.

- **XCMExecutor**: Desenvolvido pela Parity. Embora não seja um palete, é um componente crucial para a execução de mensagens XCM. Usa **XCMApp** como transator e conversor AssetId.

### Paletes de Ponte Federada

A Federated Bridge no SORA é baseada nas seguintes paletes:

- **BridgeDataSigner**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/data-signer)). Esta palete é responsável por coletar assinaturas de diferentes retransmissores e verificar se a mensagem está assinada por um peer válido.

Extrínsecos de raiz: `registerNetwork`, `addPeer`, `removePeer`, `submit`.
Mensagens: consulte [`BridgeCall` enum](https://github.com/sora-xor/sora2-common/blob/2f0aeec218e7646c295f371c4f553f4260e59eff/pallets/types/src/substrate.rs#L126)

- **MultisigVerifier**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-common/tree/develop/pallets/multisig-verifier)). Este palete independente é usado por **SubstrateBridgeInboundChannel** e **BeefyLightClient** para verificação de mensagens. Também é usado por `SubstrateDispatch` para decodificar e despachar chamadas de ponte.

Extrínsecos de raiz: `initialize`, `addPeer`, `removePeer`.

- **O Relayer**: Desenvolvido por SORAMITSU ([código fonte](https://github.com/sora-xor/sora2-network/tree/master/relayer)). O Relayer é um serviço separado e não um palete. Ele desempenha um papel crucial na Federated Bridge, passando mensagens e mantendo chaves privadas para assinaturas, semelhante à implementação da ponte Beefy.

## Guias

### Registro de Ativos

Para executar uma transferência de token entre cadeias, é necessário previamente um processo de registro do token desejado. O registro do token envolve o uso dos extrínsecos raiz `ParachainBridgeApp.registerSidechainAsset` e `ParachainBridgeApp.registerThischainAsset`. Por exemplo, para registrar um token nativo na rede Rococó, segue-se o seguinte procedimento:

![Imagem: Exemplo de registro de token Rococó nativo](./assets/sidechain-token-registration.png)

Da mesma forma, para registrar um token nativo de outro blockchain como transferível por meio de um parachain, também conhecido como whitelisting, o processo é o seguinte:

![Imagem: Exemplo de registro de blockchain nativo para transferência via parachain](./assets/thischain-token-registration.png)

Esses extrínsecos enviam mensagens para o Parachain SORA 2, possibilitando o registro de mapeamentos de ativos. Sem esse registro, os tokens não podem ser transferidos através do parachain. Assim que o token for registrado com sucesso, as transferências poderão começar.

### Transferências

::: aviso

Apenas mensagens XCM específicas de/para as redes correspondentes foram testadas e usadas em aplicativos clientes, como Polkaswap. Ao construir suas próprias mensagens, tenha cuidado: existe a possibilidade de seus fundos serem perdidos permanentemente.

:::

#### SORA <-> Polkadot

Esta seção mostra vários cenários para transferências bidirecionais entre a rede principal SORA e Polkadot.

##### Polkadot -> rede principal SORA

Para transferir ativos de Polkadot para a rede SORA, além do `XOR` para a transação da rede SORA, você precisará manter tokens `DOT` para pagar as taxas de transação da rede Polkadot.

Para preencher os dados da chamada com informações da figura, siga este [link](https://polkadot.js.org/apps/?rpc=wss://rpc.polkadot.io#/extrinsics/decode/0x95028400ccba123cc29c8e6464bb6d5d51236a1d9b4c5b61b86061850a7e854 3 4833203501f683e251cc059cf488abe703192669ba3f6d2440e8fc9740cf85d8f 0924a245916133f564d1fe0b248c97ef51008ce52fe1442856b6699283d20b28c5 ed3a78f5501350100630203000100a51f0300010100ccba123cc29c8e6464bb6 d5d51236a1d9b4c5b61b86061850a7e85434833203503040000000007000c77 4 20300000000). Certifique-se de modificar o destinatário, bem como o número de tokens a serem enviados, se necessário.

![Imagem: Exemplo de transferência DOT para a rede Polkadot da rede principal SORA](./assets/bridgeTransferPolkadotToSora.png)



O extrínseco a ser enviado é `xcmPallet` e depois `reserveTransferAssets(dest,beneficiary,assets,feeAssetitem)`:

- O destino: é `V3`
 - O `inner:XCMV3Junctions` é `X1`
 - O `Parachain` é `2025`
- Então, na próxima seção, `Beneficiary:XCMVersionedMultiLocation` é `V3`
 - Em `V3:XCMMultilocation` o `inside:XCMV3Junctions` é `X1`
 - O `X1:XCMV3Junction` é `Accountid32`, e na seção `id:[u8:32]`, insira o endereço da sua conta de rede SORA (como destinatário da transferência)
- Até agora você já tem o remetente e o destinatário da transferência, agora vamos inserir o ativo.
 - Em `assets`: `XcmVersionedMultiAssets` selecione `V3` e clique em `Adicionar Item`
 - No campo `Fungible:Compact<128>` adicione a quantidade de tokens a serem transferidos. **Você deve adicionar dez zeros após o valor**.

Por fim, envie a transação e assine o pop-up usando sua senha. Após a transação bem-sucedida, você notará que seu saldo `DOT` foi reduzido em Polkadot e aumentou proporcionalmente em sua conta SORA. Agora, vamos tentar uma transação na direção oposta;

::: tip
Aunque las transacciones de SORA son usualmente casi instantáneas, las transacciones entre redes tomarán entre 3-4 minutos.
:::

Embora as transações SORA sejam geralmente quase instantâneas, as transações entre redes levarão de 3 a 4 minutos.
:::

##### Rede principal SORA -> Polkadot

Para transferir ativos da rede SORA para a cadeia de retransmissão Polkadot, você precisará de tokens XOR e DOT para pagar as taxas de transação, semelhantes a antes. Para preencher os dados da chamada com as informações da figura, siga este [link](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Fmof2.sora.org# /extrinsics /decodificar/0x670001020003b1dbee890acfb1b3bc12d1bb3b4295f52755423f84d1751b2545cebf000b020301010100ccba123cc29c8e6464bb6d5d51236a1d9b4c 5b61b86 061850a7e854348332035008075199d106b0f000000000000000). Certifique-se de modificar o destinatário, bem como o valor a ser enviado, se necessário.

![Imagem: exemplo de transferência DOT para a rede principal SORA da cadeia de retransmissão Polkadot](./assets/bridgeTransferSoraToPolkadot.png)

O extrínseco a ser enviado é `bridgeProxy` e depois `burn`:

- O `networkId` é `Sub` já que estamos transferindo para outra cadeia baseada em Substrato
 - Como tipo `Sub` escolha `Kusama`
 - Como `assetId`, insira o endereço do token `DOT` `0x0003b1dbee890acfb1b3bc12d1bb3b4295f52755423f84d1751b2545cebf000b`
- Acessando as configurações do destinatário;
 - Escolha `Parachain`
 - A versão é `V3`
 - Pai é `1` para atingir Kusama
- Digite o endereço da sua conta de rede Kusama como `accountId`
- Por fim, insira a `quantidade` desejada a ser enviada. **Você deve adicionar dezoito zeros após o valor**.

Em seguida, envie a transação e assine o pop-up usando sua senha. Após a transação bem-sucedida, você notará que seu saldo `DOT` foi reduzido na rede SORA e aumentou no Polkadot.

::: dica
Embora as transações SORA sejam geralmente quase instantâneas, as transações entre redes levarão de 3 a 4 minutos.
:::

#### SORA <-> Kusama

Esta seção mostra vários cenários para transferências bidirecionais entre a rede principal SORA e Kusama.

##### Kusama -> Rede principal SORA

Para transferir ativos de Kusama para a rede SORA, além do `XOR` para a transação da rede SORA, você precisará manter tokens `KSM` para pagar as taxas de transação da rede Kusama.

Para preencher os dados da chamada com informações da figura, siga este [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/extrinsics /decode /0x6302030001006d1f0300010100796f757257616c6c657441646472657373546f4265456e7465726564486572650304000000000b00a0724e1809 000 00000). Certifique-se de modificar o destinatário, bem como o número de tokens a serem enviados, se necessário.

![Imagem: Exemplo de transferência KSM para a rede Kusama da rede principal SORA](./assets/bridgeTransferKusamaToSora.png)

O extrínseco a ser enviado é `xcmPallet` e depois `reserveTransferAssets(dest,beneficiary,assets,feeAssetitem)`:

- O destino: é `V3`
 - O `inner:XCMV3Junctions` é `X1`
 - O `Parachain` é `2011`
- Então, na próxima seção, `Beneficiary:XCMVersionedMultiLocation` é `V3`
 - Em `V3:XCMMultilocation` o `inside:XCMV3Junctions` é `X1`
 - O `X1:XCMV3Junction` é `Accountid32` e na seção `id:[u8:32]`, insira o endereço da sua conta de rede SORA (como destinatário da transferência)
- Até agora você já tem o remetente e o destinatário da transferência, agora vamos inserir o ativo.
 - Em `assets`: `XcmVersionedMultiAssets` selecione `V3` e clique em `Adicionar Item`
 - No campo `Fungible:Compact<128>` adicione a quantidade de tokens a serem transferidos. Você deve adicionar doze zeros após o valor. Neste caso, estamos enviando `10`, então a entrada é `10000000000000`

Por fim, envie a transação e assine o pop-up usando sua senha. Após a transação bem-sucedida, você notará que seu saldo `KSM` foi reduzido em Kusama e aumentou proporcionalmente em sua conta SORA. Agora vamos tentar uma transação na direção oposta;
::: dica
Embora as transações SORA sejam geralmente quase instantâneas, as transações entre redes levarão de 3 a 4 minutos.
:::

##### Rede principal SORA -> Kusama

Para transferir ativos da rede SORA para a cadeia de retransmissão Kusama, você precisará de tokens XOR e KSM para pagar taxas de transação, semelhantes a antes. Para completar os dados da chamada com as informações da figura, siga este [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmof3.sora.org#/extrinsics/decode /0x6700010100117b0fa73c4672e03a7d9d774e3b3f91beb893e93d9a8d0 430295f44225db8020301010100796f757257616c6c657441646472657373546 f4265456e7465726564486572650000e8890423c78a0000000000000000). Certifique-se de modificar o destinatário, bem como o valor a ser enviado, se necessário.

![Imagem: exemplo de transferência KSM para a rede principal SORA da cadeia de retransmissão Kusama](./assets/bridgeTransferSoraToKusama.png)

O extrínseco a ser enviado é `bridgeProxy` e depois `burn`:

- O `networkId` é `Sub` já que estamos fazendo uma transferência para outra cadeia baseada em Substrato
 - Como tipo `Sub` escolha `Kusama`
 - Como `assetId`, insira o endereço do token `KSM` `0x00117b0fa73c4672e03a7d9d774e3b3f91beb893e93d9a8d0430295f44225db8`
- Continuando a configurar o destinatário;
 - Escolha `Parachain`
 - A versão selecionada é `V3`
 - Pai é `1` para atingir Kusama
- Digite seu endereço de rede Kusama como `accountId`
- Por fim, insira o `valor` desejado para enviar. Você deve adicionar dezoito zeros após o valor. Neste caso, estamos enviando `10`, então a entrada é `1000000000000000000`

Em seguida, envie a transação e assine o pop-up usando sua senha. Após a transação bem-sucedida, você notará que seu saldo `KSM` diminui na rede SORA e aumenta na Kusama.

::: dica
Embora as transações SORA sejam geralmente quase instantâneas, as transações entre redes levarão de 3 a 4 minutos.
:::

### SORA <-> Rococó

Esta seção mostra vários cenários para transferências bidirecionais entre a rede principal SORA e o Rococó.

#### Rede principal SORA -> Rococó

Para transferir um token para uma cadeia de retransmissão, o extrínseco `ParachainBridgeApp.burn` é usado. Por exemplo, para transferir um token ROC para a cadeia de retransmissão Rococó, o seguinte procedimento é seguido:

![Imagem: exemplo de transferência da cadeia de retransmissão ROC para Rococó](./assets/token-burn.png)

Para especificar um parachain como destino de transferência, a seguinte solicitação deve ser feita:

![Imagem: Exemplo de indicação de um parachain como alvo de transferência](./assets/transfer-to-parachain.png)

Seguindo essas etapas, as transferências entre cadeias podem ser executadas com sucesso, permitindo a movimentação contínua de tokens entre diferentes cadeias dentro da rede.

### Como rastrear o status da transferência

#### Outro Parachain -> rede principal SORA

1. Após executar a transação que inicia uma mensagem XCM, o evento `xcmpQueue.XcmpMessageSent` é gerado.

![](./assets/xcmMessageSent.png)

2. Após um determinado período de tempo e após a chegada bem-sucedida da mensagem ao Parachain SORA, o evento `xcmpQueue.Success` é emitido. Este evento terá o mesmo hash de mensagem mostrado no exemplo em (1). Como resultado, será possível encontrar `substrateBridgeOutboundChannel.MessageAccepted` do mesmo extrínseco. O evento conterá o nonce da mensagem, que será repassada para a mainnet.

![](./assets/fundsReceivedOnParachain.png)

3. O Parachain roteia a mensagem para a rede principal. Assim que chegar, o evento `substrateDispatch.MessageDispatched` é emitido com o mesmo nonce de (2).

![](./assets/xcmMessageDispatchedOnMainnet.png)