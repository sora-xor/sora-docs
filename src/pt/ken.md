---
title: Kensetsu KEN | Documentos SORA
head:
   - - meta
     - name: descrição
       content: Saiba mais sobre KENSETSU, equivalente MakerDAO da SORA, incluindo queima de token XOR, recompensas de token KEN e o papel de Kensetsu no espaço DeFi em Polkadot.
   - - meta
     - name: palavras chave
       content: queima de token, SORA, Maker DAO, stablecoin
---

# Kensetsu KEN

::: Informação
Este token foi proposto originalmente na [SORA RFP 60](https://github.com/sora-xor/rfps/issues/60) por Satoshi Shibarimoto.
:::

##TL;DR

- Todos os tokens KEN iniciais serão distribuídos para contas que queimarem pelo menos 1 milhão de XOR entre os blocos 14.464.000 e 14.939.200.
- Queimar menos de 1 milhão de XOR não produzirá tokens KEN
- 1% de todas as stablecoins Kensetsu cunhadas serão usadas para recomprar e queimar KEN no Polkaswap.
- 80% dos KEN queimados diariamente serão lembrados e entregues à Fazenda Demeter para recompensas agrícolas no pool XOR-KUSD, para incentivar a liquidez.

## Introdução ao Kensetsu

Com KENSETSU, os detentores de tokens XOR poderão votar para criar stablecoins atrelados a qualquer título disponível através de oráculos na rede SORA, como moedas fiduciárias populares, OURO, PRATA e outras. Tal como acontece com o Maker DAO, os usuários podem cunhar stablecoins bloqueando garantias em cofres.

No KENSETSU, haverá dois tipos de cofre:

1. Cofres onde os usuários armazenam garantias e podem recuperá-las pagando as stablecoins cunhadas.
2. Cofres onde os usuários armazenam garantias, mas para recuperá-las terão que pagar as stablecoins cunhadas + uma taxa de estabilidade.

Os cofres do tipo 1 não podem ser liquidados, mas haverá uma taxa de estabilidade como um imposto que é deduzido da garantia ao longo do tempo, para que os usuários nunca recebam toda a sua garantia de volta. Os cofres do tipo 2 podem ser liquidados se o valor da garantia subjacente cair muito.
Espera-se que os ativos colaterais iniciais sejam XOR, TBCD, VAL, PSWAP, ETH e DAI.

A capacidade de cunhar stablecoins a partir de garantias é muito útil. Ainda assim, como existe uma taxa de estabilidade nos cofres, também é necessário que as stablecoins sejam líquidas e gerem procura. É aí que entra o KEN.

## KENONOMIA

KEN é um token de recompensa agrícola destinado a incentivar a liquidez das stablecoins KENSETSU. Para cada stablecoin cunhada a partir de garantias depositadas, um adicional de 1% da stablecoin será cunhado e usado para recomprar e queimar tokens KEN.
80% dos tokens KEN queimados serão lembrados e distribuídos ao farm Demeter para recompensas no pool XOR-KUSD no Polkaswap.
Para aumentar as apostas, para obter uma alocação do fornecimento inicial de KEN, você terá literalmente que queimar dinheiro.
O KEN será estritamente deflacionário uma vez lançado, o que significa que a oferta só diminuirá; Além disso, o KEN só será alocado para contas na rede SORA que queimem (usando o extrínseco `assets.burn`) pelo menos 1 milhão de XOR, a uma taxa de 1 KEN por milhão de XOR queimado. Você só pode obter os tokens KEN iniciais queimando XOR.

## Como gravar XOR

O XOR pode ser gravado para diversão e lucro usando a interface inteligente do dotapps. Basta clicar [neste link](https://polkadot.js.org/apps/#/extrinsics) e preencher o formulário da seguinte forma:

![](/.gitbook/assets/ken-burn-extrinsics.png)

Para preencher o formulário:

1. Selecione o módulo de ativos e grave o extrínseco `(assets.burn)`
2. Selecione a conta que possui o XOR que deseja registrar.
3. O ID do ativo a ser registrado é
4. Para quantidade, você precisa de 18 zeros após a quantidade de XOR que deseja queimar, então queimar 1 milhão de XOR é: `100000000000000000000000`.
5. Em seguida, assine a transação e confirme se seu saldo de XOR diminuiu corretamente, comprovando que você queimou o XOR.

Qualquer queima XOR chamando o extrínseco `assets.burn` entre os blocos `14.464.000` e `14.939.200` será considerada no valor de queima calculado. Para ser elegível para o drop KEN, uma conta deve queimar pelo menos 1 milhão de XOR. 1 KEN será concedido para cada milhão de XOR queimados.

Por exemplo, se 999.999 XOR forem queimados, 0 KEN será dado a um
conta. Se 1 milhão de XOR forem queimados, 1 KEN será dado a um
conta. E se 1,6 milhão de XOR forem queimados, 1,6 KEN serão dados
para uma conta.

::: Informação
Você pode rastrear a queima do XOR na interface Polkaswap [Kensetsu
aba](https://polkaswap.io/#/kensetsu).
A reserva KEN por queima de XOR terminou em 20 de março de 2024
:::

> Este artigo foi publicado originalmente no [Medium](https://medium.com/@shibarimoto/kensetsu-ken-356077ebee78) e escrito pelo membro da comunidade Satoshi Shibarimoto. Esta entrada preserva os princípios básicos da _Kenonomia_.

## Saber mais

- [VAL Tokenomics](/val.md)
- [Solicitação de recurso SORA](/rfp.md)