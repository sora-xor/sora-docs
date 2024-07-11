---
title: "Explorar blocos na rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Explore os blocos na rede SORA e mergulhe nos detalhes do histórico de transações do blockchain. Descubra os blocos mais recentes, a altura dos blocos, as transações e outras informações importantes que fornecem insights sobre o funcionamento e a atividade da rede SORA."
  - - meta
    - name: keywords
      content: "explorar blocos, rede SORA, blockchain, histórico de transações, altura do bloco, transações"
---

# Exploradores de bloco

Um **explorador de blocos** é uma ferramenta usada para visualizar todas as transações de blockchain online. Especificamente, para visualizar todas as **transações** atuais e passadas no **blockchain**.

Em outras palavras, um explorador de blocos é um navegador blockchain online que revela os dados de blocos e transações individuais. Com esta ferramenta, podemos monitorar históricos de transações e endereçar saldos.

A rede principal SORA implementa atualmente o explorador de blocos [Subscan](https://sora.subscan.io/). O explorador de blocos de rede SORA é desenvolvido pela equipe Subscan.

Você pode encontrar qualquer informação que precisar sobre:

- Detalhes do bloco
- Detalhes da transação
- Eventos de transação
- Informação da conta

## Prática

O Subscan está disponível apenas para a rede principal SORA. Isso significa que você não conseguirá encontrar transações feitas na testnet no Subscan.

Abra [Mainnet Subscan](https://sora.subscan.io/):

![](.gitbook/assets/explore-blocks-open-subscan.png)

Aqui você verá o painel principal que contém:

- Caixa de pesquisa. Use-o para pesquisar por conta, transação, ID de bloco ou número.
- Estatísticas de rede
- Atribuição XOR
- Lista dos últimos blocos
- Lista dos extrínsecos mais recentes

#### Como encontrar uma transação

Se você tiver o hash da transação ou ID, poderá encontrá-lo usando a caixa de pesquisa. Basta colar o número da transação na caixa de pesquisa e clicar em Pesquisar.

![](.gitbook/assets/explore-blocks-search-transaction.png)

Na tela Detalhes da Transação você verá todas as informações sobre extrínsecos incluindo parâmetros e eventos.

![](.gitbook/assets/explore-blocks-show-details-extrinsics.png)

#### Como encontrar uma conta

Se você tiver um endereço de conta, poderá encontrá-lo usando a caixa de pesquisa. Basta colar ou inserir o endereço da conta na caixa de pesquisa e clicar em Pesquisar.

![](.gitbook/assets/explore-blocks-search-account.png)

Na visualização de detalhes da conta, você encontra informações sobre o saldo XOR, transferências e transações realizadas pela conta.

![](.gitbook/assets/explore-blocks-show-account-details.png)

#### Transações

As transações são a parte mais importante do explorador de blocos. Você pode encontrar todas as transações no Blockchain e selecionar Extrínseco no menu suspenso.

![](.gitbook/assets/explore-blocks-show-extrinsics.png)

Na página da lista extrínseca você pode encontrar o histórico extrínseco.

![](.gitbook/assets/explore-blocks-extrinsic-history.png)

Você pode filtrar um extrínseco por data ou intervalo de bloqueio, por conta, módulo e chamada. É muito útil para visualizar a atividade da conta ou o histórico de uma transação específica.