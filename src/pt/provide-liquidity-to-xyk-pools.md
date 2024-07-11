---
title: "Fornecendo Liquidez na Rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como fornecer liquidez na rede SORA e participar de pools de liquidez. Descubra os benefícios de fornecer liquidez, o processo de adicionar liquidez aos pools e como ganhar recompensas por suas contribuições ao ecossistema SORA."
  - - meta
    - name: keywords
      content: "fornecer liquidez, rede SORA, pools de liquidez, adicionar liquidez, recompensas de liquidez"
---

<!-- TODOS:
- atualize os nomes das imagens neste tema
- verifique o alinhamento da imagem
-->

# Operações de Liquidez

Tudo sobre a provisão de liquidez do pool XYK no SORA.

## Teoria

<!-- @include: /snippets/provide-liquidity-theory.md -->

## Prática

::: dica
Recomendamos usar o testnet SORA para exercícios práticos. Aqui estão os links da Testnet:

1. [Aplicativo de teste Polkaswap](https://test.polkaswap.io/)
2. [Aplicativo de teste Polkadot js SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicativo de teste para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=es&gl=US)
4. [Aplicativo de teste para iOS](https://testflight.apple.com/join/670hF438)
 :::

Na seção prática, criaremos um pool de liquidez, forneceremos liquidez ao pool existente e retiraremos liquidez.

### Crie um novo fundo de liquidez

#### Via Polkaswap

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-new-liquidity-pool-polkaswap.md -->

### Fornecer liquidez a um fundo de liquidez existente

#### Via Polkaswap

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-provide-to-existente-liquidity-pool-polkaswap.md -->

### Retirar Liquidez do Fundo

#### Via Polkaswap

<!-- @include: /snippets/remove-from-liquidity-pool-polkaswap.md -->

## Verificando transações

Você pode encontrar as transações de fornecimento e retirada de liquidez feitas no explorador de blocos. Abra a lista de transações e filtre-a usando o parâmetro do módulo PoolXYK e a chamada **deposit_liquidity** para fornecer liquidez ou **withdraw_liquidity** para retirar liquidez.

![](.gitbook/assets/provide-liquidity-check-transactions-1.png)

![](.gitbook/assets/provide-liquidity-check-transactions-2.png)