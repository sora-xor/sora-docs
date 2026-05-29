---
title: "FAQ SORA - FAQ da rede SORA | Documentos SORA"
head:
  - - meta
    - name: viewport
      content: "width=device-width, initial-scale=1.0"
  - - meta
    - name: description
      content: "Encontre respostas para perguntas frequentes (FAQs) sobre SORA - um sistema econômico descentralizado construído na rede SORA. Aprenda sobre o token XOR, piquetagem, governança e muito mais."
  - - meta
    - name: keywords
      content: "FAQ SORA, perguntas frequentes, rede SORA, token XOR, piquetagem, governança"
  - - meta
    - name: author
      content: "Rede SORA"
  - - meta
    - property: og:title
      content: "SORA FAQ - Perguntas frequentes sobre a Rede SORA | Documentos SORA"
  - - meta
    - property: og:description
      content: "Encontre respostas para perguntas frequentes (FAQs) sobre SORA - um sistema econômico descentralizado construído na rede SORA. Aprenda sobre o token XOR, piquetagem, governança e muito mais."
  - - meta
    - property: og:type
      content: "website"
  - - meta
    - property: og:site_name
      content: "Documentos de SORA"
  - - meta
    - property: og:locale
      content: "pt_BR"
  - - meta
    - name: twitter:card
      content: "summary"
  - - meta
    - name: twitter:title
      content: "SORA FAQ - Perguntas frequentes sobre a Rede SORA | Documentos SORA"
  - - meta
    - name: twitter:description
      content: "Encontre respostas para perguntas frequentes (FAQs) sobre SORA - um sistema econômico descentralizado construído na rede SORA. Aprenda sobre o token XOR, piquetagem, governança e muito mais."
  - - meta
    - name: twitter:site
      content: "@sora_xor"
  - - meta
    - name: twitter:creator
      content: "@sora_xor"
---

# Perguntas frequentes sobre SORA

## Em que o SORA é construído?

A rede SORA ([Polkaswap](https://polkaswap.io/) incluída) é construída com [Substrate](https://www.parity.io/substrate), uma estrutura para criação de criptomoedas e outros sistemas descentralizados, que escala de forma mais eficiente do que o Ethereum, permitindo taxas mais baixas. Polkadot é construído com Substrate, portanto, projetos construídos com Substrate podem ser executados nativamente em Polkadot como Parachains.

## Como posso apoiar a SORA em leilões de parachain?

SORA venceu o 24º leilão de parachain Kusama para o 25º arrendamento (22 de fevereiro de 2022 - 31 de janeiro de 2023) em 6 de fevereiro de 2022. Detalhes podem ser encontrados [aqui](https://wiki.sora.org/pt/sora-kusama-parachain-crowdloan).

Depois que o espaço na rede Kusama for garantido, os usuários poderão apoiar o financiamento de leilões nos próximos anos, comprando XOR com DOT e KSM da curva de token bonding. Ao fazer isso, você aumentará as reservas da curva de token bonding e estas serão usadas para licitar nos leilões. Além disso, existe uma recompensa especial no PSWAP ao comprar com DOT e KSM, esta recompensa é maior quando há menos reservas, e diminuirá à medida que se acumulam. Você pode ler o artigo completo sobre o programa de incentivos [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

Nos próximos meses, não há mais leilões previstos. Os tokens KSM estarão disponíveis em breve no Polkaswap e os usuários poderão apoiar leilões futuros usando-os para comprar XOR recém-cunhado na [curva de ligação de token](https://wiki.sora.org/pt/token-bonding-curve). Ao fazer isso, você aumentará as reservas da curva de token bonding, que serão usadas para licitar em leilões. Além disso, existe uma recompensa especial no PSWAP ao comprar com DOT e KSM, esta recompensa é maior quando há menos reservas, e diminuirá à medida que se acumulam. Você pode ler o artigo completo sobre o programa de incentivos

## Como posso participar do Parlamento SORA?

Actualmente não existe um calendário preciso para a implementação do Parlamento e, embora não esteja decidido, serão provavelmente necessários aproximadamente 150 XOR para um bónus de cidadania. Este bônus pode ser reduzido caso o cidadão seja condenado por um Júri de Política por descumprimento das regras. Através de um processo de sorteio, os membros do Parlamento serão escolhidos entre os cidadãos.

Todos os cidadãos têm as mesmas hipóteses de serem seleccionados, têm igual poder de voto e recebem a mesma recompensa pela participação.

## Posso comprar tokens com FIAT?

Sim, em [Polkaswap.io](https://polkaswap.io/#/swap) você pode comprar tokens usando Moonpay e X1.
Com o X1 você pode comprar XOR nativo SORA.
O ID do ativo (endereço) é um identificador exclusivo do ativo na rede SORA (como um endereço de contrato no Ethereum). Você pode ver os endereços de ID de token disponíveis na rede SORA [aqui](https://wiki.sora.org/pt/guides/how-to-buy-tokens-using-moonpay-with-your-credit-card).

## O que é um ID de ativo (endereço)?

O ID do ativo (endereço) é um identificador exclusivo do ativo na rede SORA (como um endereço de contrato no Ethereum). Você pode ver os endereços de ID de token disponíveis na rede SORA [aqui](https://wiki.sora.org/pt/polkaswap/tokens-id-addresses).

## How do Addresses Work on the SORA network

Se você usou a rede SORA ou Polkaswap, provavelmente notou que normalmente os endereços começam com 5, mas no SORAscan você deve inserir um endereço que comece com `cn`. Então, como isso funciona?

O formato de endereço usado em strings baseadas em substrato é [SS58](<https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)>), e cada string pode selecionar seu próprio prefixo, gerando diferentes direções. Aqui está um exemplo:

Polkadot é prefixado com 0, e uma certa função de derivação faz com que todos os endereços Polkadot comecem com 1.

SORA é prefixado com 69, e o trabalho da mesma função de derivação resulta em endereços SORA começando com `cn`.

42 foi escolhido como o prefixo universal para ser usado em qualquer cadeia de substrato. Este prefixo gera endereços começando com 5, e esses endereços são reconhecidos e aceitos por todas as cadeias baseadas em Substrato. Por exemplo, no Polkaswap você pode conectar o formato de endereço geral (começando com 5) ou o formato de endereço SORA exclusivo (começando com `cn`).

Uma implicação desse mecanismo é que usando a mesma semente você pode armazenar tokens de diferentes cadeias de Substrato. No entanto, isto não é recomendado, pois diminui a segurança (se a sua semente for comprometida, você perderá fundos em todas as redes).

Você pode ler mais [aqui](https://wiki.polkadot.network/docs/en/learn-accounts).

## Quem são os maiores detentores de XOR? <a href="#who-are-the-biggest-xor-holders" id="who-are-the-biggest-xor-holders"></a>

Ao observar os principais titulares do [Subscan](https://sora.subscan.io/account), vários desses endereços são contas técnicas que oferecem suporte a toda a rede. Aqui está uma tabela com as contas técnicas que possuem XOR: Foram adicionados endereços adicionais correspondentes às contas de recompensa Polkaswap. Esta lista receberá atualizações contínuas para garantir sua precisão.

| Endereço                                                                                                                                | Rol                                                |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK)​ | **Contrato Inteligente Ethereum Bridge**           |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7)​  | **Pool XOR-PSWAP**                                 |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq)​ | **Pool XOR-VAL**                                   |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp)​ | **Pool XOR-DAI**                                   |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB ](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB)​ | **Pool XOR-ETH**                                   |
| cnTQ1kbv7PBNNQrEb1tZpmK7easBTbiFMQUUwfLf9LX66ND8u                                                                                       | **Recompensas TBC**                                |
| cnTQ1kbv7PBNNQrEb1tZpmK7fJT4Awahg1d8aoYoGGv2ATz7m                                                                                       | **Recompensas do formador de mercado**             |
| cnTQ1kbv7PBNNQrEb1tZpmK7kr72qNfcUDvqPxUdw4h2A5axX                                                                                       | **Recompensas agrícolas**                          |
| cnTQ1kbv7PBNNQrEb1tZpmK7iW5aLF24hi1k1H4t3L49TzhPe                                                                                       | **Pré-lançamento da conta de reserva PSWAP e VAL** |
| cnTQ1kbv7PBNNQrEb1tZpmK7ftiv4yCCpUQy1J2y7Y54Taiaw                                                                                       | **Distribuição PSWAP para Provedores de Liquidez** |

​

## O que é um validador?

Validadores são nós que foram selecionados para produzir blocos. Os validadores são uma parte central da rede SORA porque têm de aceitar ou rejeitar blocos de transações. A eleição dos validadores é realizada através do [Método Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen), o mesmo utilizado por Polkadot e Kusama. Considerando que executar um nó validador exige esforço, ele não ficará sem recompensa. Aqueles que executam nós validadores receberão recompensas na forma de tokens VAL, com base na quantidade de VAL queimada no último dia.

Você pode ler mais [aqui](/pt/consensus).

## What is a nominator?

Um nominador é um usuário normal que publica uma lista de candidatos a validadores confiáveis ​​e coloca uma quantidade de XOR em jogo para apoiá-los (o conceito de piquetagem). Contanto que um nominador apoie os candidatos validadores com boas práticas de segurança, seu staking será de baixo risco. As recompensas do Nominator estão em VAL e são baseadas na quantidade de VAL queimada durante o dia. Você pode ler mais sobre o token VAL e recompensas de staking [aqui](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

Você também pode [leia mais aqui](/pt/consensus).

Para aprender como apostar seu XOR, confira o tutorial dedicado.

## Saber mais

- [XOR](/pt/xor.md)
- [Economia SORA](/pt/sora-economy.md)
