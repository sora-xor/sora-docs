---
title: "Verificar Saldo na Rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como consultar seu saldo na rede SORA e visualizar seus ativos. Descubra os diferentes métodos e ferramentas disponíveis para verificar seu saldo, incluindo carteiras, exploradores de blocos e outras interfaces de rede SORA. Mantenha-se informado sobre seus saldos de ativos e acompanhe seus ativos dentro do ecossistema SORA."
  - - meta
    - name: keywords
      content: "verificar saldo, rede SORA, ativos, carteiras, exploradores de blocos, interfaces de rede SORA, saldos de ativos"
---

# Consultar Saldos de Usuários

Este guia mostrará como verificar seus saldos usando o
Interface Polkadot.js usando uma chamada RPC ou por meio do
Recurso do portfólio Ceres Tools.

::: informações
Para novos usuários ou usuários sem experiência em Polkadot.js,
recomenda o uso de Ceres Tools.
:::

## Através da interface do usuário Polkadot.js

1. Acesse [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc).

2. Clique em **Developer** e depois em **RPC calls**

   ![](.gitbook/assets/check-balance-rpc-calls.jpg)

3. Selecione \__assets_ → _freeBalance(accountid,assetid)_.

   ![](.gitbook/assets/check-balance-select.png)

4. Preencha _AssetID_ e pressione _"Submit RPC call"_.

   ::: informações

    Para obter mais IDs de ativos, consulte a [subseção Tokens da página Explorar do Polkaswap.io](https://polkaswap.io/#/explore/tokens). Você pode encontrar os IDs dos tokens principais na página [Verificar Suprimento](/pt/check-supply.md).
   :::

   ![](.gitbook/assets/check-balance-fill-in-asset-id.jpg)

Este é o resultado esperado. Neste caso foi consultado o valor do VAL (observe o AssetID)

Infelizmente, Polkadot.js oferece suporte apenas a um ativo para a rede, e é por isso que mostra XOR. Porém, é realmente o ativo que você solicitou: PSWAP, VAL, ETH, DAI, etc.

A letra antes de XOR significa que o número é multiplicado pelo seguinte valor:

| Letra  | Multiplicador |
| ------ | ------------- |
| k      | 1000          |
| m      | 1000000       |
| B      | 1000000000    |
| m      | 0.001         |

Portanto, no exemplo acima, o valor exibido é 80.434 mXOR = 0.080434 VAL

Para obter mais detalhes sobre como ler este resultado, [consulte este guia](/pt/check-supply.md#Como-ler-os-resultados).

## Via Ferramentas Ceres

1. Vá para Ceres Tools e navegue até a [seção
Portfólio](https://tools.cerestoken.io/portfolio)

![](/.gitbook/assets/tools-portfolio-connect-wallet.png)

2. Conecte sua carteira e você encontrará informações sobre todos os seus
 ativos, incluindo seus saldos.

![](/.gitbook/assets/tools-portfolio.png)

## Aprender mais

- [Estatísticas Polkaswap](/pt/statistics-polkaswap.md)
- [Ferramentas Ceres](/pt/ceres/tools.md)
