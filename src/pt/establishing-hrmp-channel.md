---
title: "Estabeleça um canal HRMP | SORA Docs"
head:
  - - meta
    - name: description
      content: "Aprenda como estabelecer comunicação entre uma parachain de terceiros e a rede SORA."
  - - meta
    - name: keywords
      content: "Adicionando tokens, canal HRMP, rede SORA, listagem de tokens, requisitos, procedimentos, ponte de ativos, redes blockchain, whitelist"
---

# Estabeleça um canal HRMP

Para estabelecer comunicação entre seu parachain e SORA, você deve criar canais HRMP que passam pela cadeia de retransmissão para transferir mensagens entre parachains.

Lembre-se de que os canais HRMP geralmente seguem em uma direção. Para comunicação bidirecional, será necessário configurar outro canal na direção oposta. Portanto, o seguinte está dividido em subseções:

## Seu Parachain para SORA

1. Obtenha os dados de chamada codificados do extrínseco `hrmp.hrmpInitOpenChannel` na cadeia de retransmissão.

Este código exclusivo inclui um detalhe de  `destinatário` que informa à cadeia de retransmissão a qual parachain você deseja se conectar. O destinatário muda dependendo do ambiente em que você planeja estabelecer o canal. Para Kusama, veja [esta lista](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io#/parachains), e para Rococó, vá para [esta lista](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains).

Combine este ID do parachain com as outras informações da documentação. Por exemplo, para Rococó você terá algo assim: `0x3c00db070000e803000000900100`.

2. Dentro do seu parachain, redija uma mensagem XCM que notifique a cadeia de retransmissão da intenção de abrir um canal com SORA. Consulte a [documentação oficial](https://docs.substrate.io/reference/how-to-guides/parachains/add-hrmp-channels/) para obter um exemplo ilustrativo da mensagem XCM.

::: Informação

É importante reconhecer que se a sua implementação da lógica do canal HRMP for diferente da paleta padrão `polkadotXcm.send`; Você deve modificar esta etapa de acordo.

:::

Uma vez executado com sucesso o extrínseco, o SORA deverá aceitar o estabelecimento do canal.

3. Posteriormente, o dispositivo SORA aceitará o canal incorporando os dados de chamada codificados de `hrmp.hrmpAcceptOpenChannel`. Esses dados incluirão seu ID parachain como parâmetro e serão executados por meio da chamada `xcmApp.sudoSendXCM`.

Após a execução bem-sucedida, os canais HRMP serão estabelecidos do seu parachain para o SORA.

## SORA para seu pára-quedas

As etapas aqui refletem as da subseção anterior. Para as etapas (1) e (2) descritas acima, o SORA inicia uma mensagem XCM para propor o estabelecimento do canal. Posteriormente, é sua responsabilidade codificar `hrmp.hrmpAcceptOpenChannel` com o ID do parachain SORA. Por exemplo, no caso do Rococó, os dados codificados da chamada seriam: `0x3c01db070000`. Execute uma mensagem XCM do seu parachain de acordo com as diretrizes oficiais, incluindo dados de chamada codificados contendo IDs de paraquedas SORA.

Após a execução bem-sucedida deste processo, seu parachain será configurado para receber mensagens SORA parachain.

## Último passo

Precisaremos registrar os ativos para transferência entre as redes. Na sua parachain, você precisará registrar os ativos da SORA. Da mesma forma, na SORA Mainnet, cuidaremos do registro dos seus ativos, ou você pode fazer isso por conta própria. Este guia fornece os passos. [para colocar seus ativos na whitelist do Polkaswap](/pt/whitelist-token-to-polkaswap.md).
