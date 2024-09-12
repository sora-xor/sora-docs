---
title: Votar na governança da SORA | Documentação da SORA
head:
  - - meta
    - name: description
      content: Explore a governança da SORA e aprenda a navegar na tomada de decisões descentralizada para melhorar o ecossistema da SORA. Ideal para todos os níveis de habilidade.
  - - meta
    - name: keywords
      content: Governança da SORA, Tomada de decisões descentralizada, Ecossistema da SORA, Governança de blockchain, Participação na SORA, Guia de governança descentralizada
---

# Votar na governança da SORA

O [Parlamento da SORA](/pt/sora-governance.md) ainda não foi promulgado. A governança é realizada utilizando o [pallet Gov1 do Substrate](https://wiki.polkadot.network/docs/learn/learn-governance), o mesmo que está disponível no Polkadot.js (não OpenGov).

**É necessário ter XOR para participar na governança.** Você pode usar o XOR que apostou como Nominator para adicionar peso ao seu voto (fazendo-o valer mais). Você também pode adicionar convicção ao seu voto, multiplicando seu valor, mas bloqueando-o por períodos de tempo mais longos.

Votar é realmente importante para o ecossistema da SORA; como um projeto liderado pela comunidade, o resultado do seu voto decide quais propostas de desenvolvimento são financiadas, implementa atualizações de software na rede, nas parachains e no [Polkaswap](https://polkaswap.io/), além de adicionar ativos XST à rede, adicionar pares de ordens ou listar ativos na lista branca no Hashi Bridge. Como você pode ver, o impacto do seu voto faz uma grande diferença. Embora possa parecer complicado, votar na rede da SORA é simples. Uma vez que você saiba como votar aqui, também pode participar da governança em outras redes baseadas em Substrate que utilizem o Gov1.

No momento em que isso foi escrito, você pode emitir votos com uma convicção de 0.1X, o que não bloqueia sua alocação de votos por nenhum período de tempo. No entanto, haverá uma atualização do SORA onde esses votos não serão mais possíveis (convicção eliminada). Portanto, toda a participação na governança bloqueará os tokens. **Você pode usar tokens já bloqueados (nominando, outros votos de referendo de governança, etc.) para votar em outros referendos. Isso aumentará a proporção de tempo durante o qual seus tokens estão bloqueados.**

## Como votar na governança SORA

1. Para saber quando está disponível um referendo de governança na SORA para votação pública, você pode ficar atento à [interface de governança da SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsora.api.onfinality.io%2Fpublic-ws#/democracy). Além disso, você também pode seguir o [canal de Notificações de Governança da SORA no Telegram](https://t.me/sora_governance_updates).

![](/.gitbook/assets/participate-sora-governance-overview.png)

2. Com XOR em sua conta, selecione o referendo de democracia no qual você está interessado. Você pode clicar na seta para baixo para expandir os detalhes da proposta. Em alguns casos, você encontrará um link que o direcionará para o [projeto de Contabilidade da SORA no Github](https://github.com/orgs/sora-xor/projects/24/views/1), que possui uma visão geral e descrição dos referendos, especialmente se estiver relacionado à criação de crédito na SORA.

![](/.gitbook/assets/participate-sora-governance-expand-referenda.png)

3. Para votar no referendo, clique no botão de voto. Um pop-up aparecerá com as informações da sua conta. Se você clicar no nome da conta, poderá alternar entre suas contas na carteira. Escolha aquela que você usará para votar.

![](/.gitbook/assets/participate-sora-governance-account-selection.png)

4. Depois de selecionar a conta, você verá o saldo de votação que pode usar para atribuir o peso do seu voto. Certifique-se de ter saldo desbloqueado suficiente para pagar as taxas de transação. O campo de valor do voto será preenchido automaticamente se você já tiver saldo XOR bloqueado.

![](/.gitbook/assets/participate-sora-governance-vote-value.png)

::: dica
Você pode usar fundos que foram bloqueados ao nomear um validador ou que estejam bloqueados em outra proposta de governança para votar. Uma vez que os fundos estejam bloqueados, você deve esperar um tempo determinado antes de desbloqueá-los na interface do Polkadot.js.
:::

5. Escolha uma convicção para o seu voto; isso pode variar de um saldo de votação 1x bloqueado por 30 dias até um saldo de votação 6x bloqueado por 960 dias. Finalmente, vote a favor ou contra a proposta.

![](/.gitbook/assets/participate-sora-governance-vote-conviction.png)

::: dica
Se a proposta for aprovada e você votou sim, seus fundos serão bloqueados pelo tempo determinado com base em sua convicção; da mesma forma, se a proposta não for aprovada e você votou não, seus fundos também permanecerão bloqueados. Da mesma forma, se você votou não e a proposta for aprovada, seus fundos não serão bloqueados, o mesmo ocorre se você votou a favor e a proposta não for aprovada.
:::

![](/.gitbook/assets/participate-sora-governance-vote-confirmation.png)

6. Sua carteira/firmante aparecerá solicitando que você confirme seu voto, aprove esta transação e, uma vez confirmada, **parabéns, você acabou de votar na SORA!**

### Como votar nas parachains da SORA Kusama e SORA Polkadot

Na prática, votar em referendos de governança nas parachains da SORA é o mesmo. A única diferença é que você precisa transferir XOR para as parachains usando a ponte HASHI configurada para a rede Polkadot ou Kusama e mudar de rede dentro da interface do Polkadot.js.

1. Da esquina superior direita da interface, clique na seta para baixo.
2. Clique em Polkadot/Kusama & Parachains.
3. Role para baixo até SORA.
4. Clique em Mudar.

#### SORA Polkadot

![](/.gitbook/assets/participate-sora-governance-polkadot-parachain.png)

#### SORA Kusama

![](/.gitbook/assets/participate-sora-governance-kusama-parachain.png)

## Mais informações

- [Governança na SORA](/pt/sora-governance.md)
- [Interoperabilidade (HASHI)](/pt/interoperability.md)
