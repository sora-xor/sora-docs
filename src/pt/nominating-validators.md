---
title: "Nomear validadores | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como nomear validadores na rede SORA e participar do mecanismo de consenso. Descubra o processo de seleção e nomeação de validadores, entenda seu papel na segurança da rede e contribua ativamente para a governança descentralizada do ecossistema SORA."
  - - meta
    - name: keywords
      content: "nomear validadores, rede SORA, mecanismo de consenso, selecionar validadores, nomear validadores, segurança de rede, governança descentralizada"
---

# Nomear validadores

A nomeação de validadores é uma parte importante do ecossistema SORA, pois ajuda a proteger e descentralizar a rede. Embora você possa nomear qualquer validador, você deve fazer sua própria pesquisa para garantir que os validadores indicados sejam de alta qualidade e não ataquem a rede. Se os validadores causarem danos à rede, você perderá dinheiro como nominador!

Para fornecer alguns validadores de alta qualidade na rede como um bem comum, o Parlamento SORA mantém a seguinte lista de validadores:

- cnVqqrLjSGQ7in5j3GVuXjr4b1benhdN72NQnqwzrbWxHWjYZ
- cnVyxUnvsrgtiCEaeHudqGEJuHPspfp89mGghLz21mVqdaQwv
- cnSdNvs39CVRDiFW4pEtaqZWGoSU7B8UkDKjwCb3mX999CsZH
- cnScvgXFLQgeNFoVfMjf2U5MC24CkdRkLTUKbJYefYRwqy3VZ
- cnSgH7nHuiPk5Z2cubwsFZGdmzvzhrgBKgTqLCeR7hyo6dek8
- cnU2w3CPn9narRKeSamHmKBBaSXY949A4udq6APBXNkmnkwsJ
- cnV58Z8zT37K6iUsijRjYHBzk95aTqvLfn3WvvfJcCwFQKHCL
- cnRrijYYHb4fWPuF9MraEvm8nvfztYDxcAZfKfN2AyKLBn81A
- cnUDwD4nPorodyd3inwThA2yBt2dFuHTfnvKowH6dirk47Qqr

## Através da IU PolkadotJS

Para nomear um Validador com sucesso na rede SORA, você precisa:

- A [extensão Polkadot.js](https://polkadot.js.org/extension/) instalada em seu navegador, com uma conta criada e algum XOR

::: informações
As recompensas de staking **expiram** após 84 eras. Em **SORA**, são cerca de 21 dias.
:::

1. Vá para SORA [polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/staking), clique em " Rede" e depois em "Estaqueamento". **Certifique-se de estar conectado à rede SORA**, você deverá ver o logotipo no canto superior esquerdo.

![](.gitbook/assets/polkadotjs-staking-tab.png)

2. Em seguida, você precisará criar um novo Nominator Stash. Clique em “Seções da conta” e depois em “Nominador” conforme mostrado nas imagens abaixo. Certifique-se de ler atentamente as informações exibidas.

![](.gitbook/assets/polkadotjs-account-actions.png)

![](.gitbook/assets/polkadotjs-nominator-button.png)

![](.gitbook/assets/polkadotjs-setup-nominator.png)

3. Configure contas Stash e Controller.

Pense no estoque como sua carteira fria e no controlador como sua carteira quente.

As operações de financiamento são controladas pelo estoque, enquanto as ações não financeiras são gerenciadas pelo controlador. Ter contas de estoque e de controlador torna seus fundos mais seguros.

Você pode ler mais [aqui](https://www.holdpolkadot.com/post/stash-account-controller-account-on-polkadot-and-kusama).

4. Defina o valor que deseja apostar e clique em “Avançar”.

5. O próximo passo é escolher os Validadores que deseja nomear.

A rede SORA usa o [Método Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen) para selecionar Validadores.

Durante cada época, os Validadores são escolhidos através do Método Phragmèn, e aqueles que os nomearam receberão uma recompensa (uma recompensa de participação).

Da perspectiva de um Nominador, você só precisa nomear pelo menos um dos Validadores escolhidos durante cada era. Isso explica por que você pode indicar mais de um candidato por vez, com no máximo 16 validadores por conta de nominador.

::: aviso informativo

É importante nomear validadores confiáveis ​​e seguros. A participação dos Validadores e seus Indicadores poderá ser reduzida como punição pelo não cumprimento do protocolo. Você pode ler mais sobre Slashing\* [aqui](https://w3f-research.readthedocs.io/en/latest/polkadot/slashing/amounts.html).

:::

![](.gitbook/assets/polkadotjs-setup-nominator-step2.png)

6. Depois de selecionar os validadores, clique em “Link and Nominate”, “Sign and Send” e em seguida assine a transação com a extensão Polkadot.js, conforme mostram as imagens abaixo:

![](.gitbook/assets/polkadotjs-bond-and-nomintate-extrinsic.png)

![](.gitbook/assets/polkadotjs-bond-and-nomintate-extrinsic-signing.png)
