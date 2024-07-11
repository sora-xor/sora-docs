---
title: "Troca na Rede SORA | Documentos SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como negociar ativos digitais na rede SORA."
  - - meta
    - name: keywords
      content: "troca, rede SORA, pares de negociação, troca em cadeia, transação de troca"
---

# Trocas

## Teoria

Trocar no Polkaswap significa trocar tokens no [Polkaswap](https://polkaswap.io/). Polkaswap é um protocolo AMM DEX sem custódia e interchain para negociação de tokens. Polkaswap elimina intermediários confiáveis ​​e oferece a oportunidade de negociação mais rápida, e também combina múltiplas fontes de liquidez sob um algoritmo comum de agregação de liquidez, operando completamente on-chain, de forma confiável. e descentralizada.

Existem 3 casos de uso principais para Polkaswap:

- Tokens de troca
- Fornecer liquidez
- Retirar liquidez

Junto com a taxa de rede no XOR, todos os três casos exigem uma taxa adicional: taxa do provedor de liquidez ou taxa LP. A taxa LP é usada para incentivar os provedores de liquidez a fornecer liquidez a pools de liquidez. Os pools de liquidez são descritos neste [artigo](https://medium.com/polkaswap/polkaswap-pools-48b726cf3a71).

## Prática

::: dica
Recomendamos usar o testnet SORA para exercícios práticos. Aqui estão os links da Testnet:

1. [Aplicativo de teste Polkaswap](https://test.polkaswap.io/)
2. [Aplicativo de teste Polkadot js SORA testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicativo de teste Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [Aplicativo de teste para iOS](https://testflight.apple.com/join/670hF438)
 :::
 Na seção prática iremos trocar tokens. O fornecimento e retirada de liquidez serão explicados em artigos subsequentes.

### Via Polkaswap

Trocar tokens significa mudar do token A para o token B. Polkaswap fornece uma interface amigável para trocar tokens.

<!-- @include: /snippets/swap-polkaswap.md -->