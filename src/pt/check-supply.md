---
title: "Verifique a oferta na rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: “Aprenda como verificar o fornecimento de tokens na rede SORA e obtenha informações sobre o fornecimento circulante e o fornecimento total de ativos. Descubra as ferramentas, interfaces e recursos disponíveis para verificar o fornecimento de tokens na rede SORA e mantenha-se informado sobre as quantidades de tokens disponível no ecossistema SORA."
  - - meta
    - name: keywords
      content: "verificar fornecimento, rede SORA, fornecimento de tokens, fornecimento circulante, fornecimento total, ativos, ferramentas, interfaces"
---

# Verifique a oferta

::: info
Para novos usuários ou sem experiência em Polkadot.js, é recomendado usar a página Polkaswap Statistics.
:::

## Via Polkaswap

1. Na interface [Polkaswap](https://polkaswap.io/), navegue até a seção Estatísticas.

 ![](/.gitbook/assets/polkaswap-home-stats.png)

2. Role até o final da página e você encontrará a seção Oferta.

 ![](/.gitbook/assets/polkaswap-statistics-fees-and-supply.png)

3. Para visualizar o fornecimento de outros tokens, clique no nome do token na seção de fornecimento e escolha o token que deseja visualizar.

 ![](/.gitbook/assets/polkaswap-statistics-supply-token-list.png)

## Via Polkadot.js

::: info
Observe que você verá o **fornecimento total** (isso inclui tokens bloqueados e fornecimento em circulação) de todos os tokens na rede e não apenas o **fornecimento em circulação** de tokens.
:::

- A oferta de XOR muda frequentemente porque é elástica, gerenciada pela [curva de bônus de token](tbc.md).
- A oferta de VAL e PSWAP também pode mudar porque são queimados a cada transação.
- A oferta circulante de PSWAP no momento em que este artigo foi escrito é de aproximadamente 600 milhões de PSWAP.

Para verificar a quantidade de tokens na rede SORA, siga este procedimento:

1. Acesse [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc).

2. Clique em “Desenvolvedor” e depois em “Chamadas RPC”:

 ![](/.gitbook/assets/check-supply-rpc-calls.png)

3. Selecione **ativos → totalSupply(assetId)**.

4. Preencha _AssetID_ e pressione **"Enviar chamada RPC"**.

 ::: detalha os principais IDs dos ativos

   | Token  | ID                                                                 |
   | ------ | ------------------------------------------------------------------ |
   | XOR    | 0x0200000000000000000000000000000000000000000000000000000000000000 |
   | TBCD   | 0x02000a0000000000000000000000000000000000000000000000000000000000 |
   | VAL    | 0x0200040000000000000000000000000000000000000000000000000000000000 |
   | PSWAP  | 0x0200050000000000000000000000000000000000000000000000000000000000 |
   | XST    | 0x0200090000000000000000000000000000000000000000000000000000000000 |
   | XSTUSD | 0x0200080000000000000000000000000000000000000000000000000000000000 |
   | ETH    | 0x0200070000000000000000000000000000000000000000000000000000000000 |
   | DAI    | 0x0200060000000000000000000000000000000000000000000000000000000000 |

   Para obter mais IDs de ativos, consulte a [subseção Tokens da página Explorar do Polkaswap.io](https://polkaswap.io/#/explore/tokens).
 :::

 ![](/.gitbook/assets/check-supply-fill-in-asset-id.png)

 Os resultados são mostrados para XOR:

 353,0005 kXOR = 353.000,5 XOR (incluindo XOR na rede Ethereum)

 <center><img src="/.gitbook/assets/check-supply-xor-output.png" width="400"></center>

### Como ler os resultados

No resultado, como você vê na imagem acima, você obterá o valor do bem consultado. Infelizmente, Polkadot.js oferece suporte apenas a um ativo para a rede, XOR. É por isso que mostra a oferta em XOR. Porém, é realmente o ativo que você consultou: seja PSWAP, VAL, ETH ou DAI.

A letra antes de XOR significa que o número é multiplicado pelo seguinte valor:

| Letra | Multiplicador |
| ----- | ------------- |
| k     | 1000          |
| m     | 1000000       |
| B     | 1000000000    |
| m     | 0.001         |

#### Exemplo de provisionamento PSWAP

Por exemplo, uma solicitação de fornecimento atual de PSWAP mostra:

3,5105 BXOR = 3.510.500.000 PSWAP (600 milhões estão circulando e o restante está bloqueado em contas técnicas)

![](/.gitbook/assets/check-supply-pswap-example.png)

#### Exemplo de fornecimento de VAL

70,5077 MXOR = 70.507.700 VAL (VAL no Ethereum está incluído)

![](/.gitbook/assets/check-supply-val-example.png)

#### Exemplo de fornecimento de ETH

1,7188 kXOR = 1718,8 ETH (ETH na rede SORA)

![](/.gitbook/assets/check-supply-eth-example.png)

#### Exemplo de entrega de CDI

1,1827 MXOR = 1.182.700 DAI (DAI na rede SORA)

![](/.gitbook/assets/check-supply-dai-example.png)

## Aprender mais

- [Estatísticas Polkaswap](./statistics-polkaswap.md)
- [Explorar Polkaswap](./explore-polkaswap.md)

