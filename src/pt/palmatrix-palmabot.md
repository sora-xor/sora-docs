---
title: Palmatrix PalmaBot | Documentos SORA
head:
  - - meta
    - name: description
      content: Explore o PalmaBot do Palmatrix para conectar o Polkaswap a exchanges centralizadas, aprimorando a eficiência do comércio descentralizado.
  - - meta
    - name: keywords
      content: Construtores SORA, SORA, exchange centralizada, Polkaswap
---

# Palmatrix PalmaBot

### Introdução

O Palmabot é o primeiro entregável do Palmatrix como Construtor SORA, de acordo com o RPF que propõe a infraestrutura para implementar o PalmaBot. Este assistente virtual único está disponível no Telegram e permite que os usuários negociem em 40 exchanges de criptoativos através de uma interface única/unificada. Está em produção desde 2018 e está recebendo recursos de IA implementados no momento para possibilitar o reconhecimento de linguagem natural o mais rápido possível.

Para alcançar isso, o Palmatrix irá:

- Habilitar o acesso ao pool de liquidez SORA para usuários do PalmaBot, integrando-o ao acesso multi-exchange do Palmatrix e rotulando-o como open-source na biblioteca open-source CCXT. Consequentemente, adicionar o pool de liquidez SORA ao SOR (Smart Order Routing / PalmaExecutor) para usuários B2C e adicionar a funcionalidade de staking ao PalmaBot—todos rotulados como open-source.
- Implementar um widget open-source para o pool de liquidez SORA para permitir liquidez dos mercados CEX/CeFi, ao mesmo tempo em que possibilita a proteção com os recursos de criação de mercado do Palmatrix.

![](/.gitbook/assets/palmatrix-implementation-overview.png)

### Objetivos do PalmaBot

Os cinco principais objetivos do PalmaBot são:

1. Implementar o conector da API pública do Polkaswap na biblioteca open source CCXT, o que tem um grande potencial a curto prazo para:

- Permitir que qualquer ferramenta de negociação que use o CCXT comece a negociar via a rede SORA/Polkaswap
- Aumentar os volumes de negociação à medida que mais pares começarão a negociar no Polkaswap com o DEX adicionado a ambientes de negociação multi-exchange (como o Palmatrix SOR)
- Aumentar o financiamento do pool de liquidez

2. Integrar a Carteira SORA à plataforma Palmatrix nos próximos 12 meses

- Permitir acesso às funcionalidades do Polkaswap/SORA para usuários do PalmaBot e usuários não familiarizados com tecnologia de forma não custodial (PalmaBot - B2C) e custodial (Gestão de Ativos - B2B).
- Tornar a carteira SORA acessível aos usuários da Perception TV (alcance de 500 milhões de audiência) e outros parceiros do Palmatrix.
- Fornecer integração open-source da carteira SORA a qualquer protocolo baseado na web (plataformas de mensagens, widgets de navegador, etc.).
- Aumentar a participação no pool de liquidez SORA.
- Aumentar os volumes de negociação.

3. Adicionar o Polkaswap ao Palmatrix SOR/PalmaExecutor (motor de execução de trades para PalmaBot e camada multi-exchange do Palmatrix), que é:

- Aumentar a liquidez na rede SORA/Polkaswap ao possibilitar a execução de trades via a rede SORA para usuários do PalmaBot, usuários dos parceiros do PalmaExecutor e clientes institucionais do Palmatrix (B4C)
- Aumentar os volumes de negociação

4. Adicionar a funcionalidade de staking ao Palmatrix, PalmaBot e PalmaExecutor:

- Permitir que usuários não familiarizados com tecnologia realizem staking no pool de liquidez SORA
- Aumentar a liquidez do Polkaswap/SORA
- Utilizar o assistente virtual impulsionado por IA para fácil acessibilidade aos nossos produtos, oferecendo introdução interativa e ajuda desde o início. O assistente virtual pode ser um tutor, um especialista em análise ou um gerente de risco. Personalize a experiência do seu Palmabot Trading AI-Agent.
- Fornecer conectividade fácil com nossa API e pontos de serviço, usando tecnologia webhook, bem como uma abordagem de API unificada da biblioteca ccxt.

5. Implementar um widget CeFi para o pool de liquidez SORA para incluir CEXs para proteção, além de usuários do Palma que não estão no pool de liquidez:

- Permitir liquidez adicional para o Polkaswap ao aumentar o sucesso e a liquidez das negociações no Polkaswap/SORA.
- Trazer mais liquidez indireta para o pool SORA ao possibilitar proteção em CEXs.

### Próximos Passos

- Em breve, a implementação da Carteira SORA do PalmaBot e outras funcionalidades conforme o [RFP da Fase 2](https://github.com/sora-xor/rfps/issues/101) estarão disponíveis.

- A equipe do Palmatrix também realizou uma sessão de AMA com a comunidade SORA para responder às suas perguntas urgentes. Você pode ler [aqui](https://medium.com/sora-xor/sora-x-palmatrix-ama-fda509ac2ce8).

- O PalmaBot já está disponível para testes pela comunidade SORA. Aqui estão as instruções para acessá-lo e experimentá-lo.

## Tutorial do PalmaBot

Para experimentar o PalmaBot no Telegram, siga estes passos simples:

1. Adicione [@Palma_test_new_bot](https://t.me/Palma_test_new_bot) e, em seguida:
2. Clique em “start” (com isso, você concorda com os Termos e Condições).
3. Converse com o PalmaBot usando os comandos.

![](/.gitbook/assets/palmatrix-palmabot-tutorial-1.png)

🌴 COMANDOS  
(basta digitar no chat com o [@Palma_test_new_bot](https://t.me/Palma_test_new_bot)):

- /sorawallet - Mostra o endereço público e o código QR para a carteira SORA existente na sua conta Palma
- /deletesorawallet - Exclui a carteira SORA existente da sua conta.
- /createsorawallet - Cria uma carteira SORA se ainda não houver uma existente.

![](/.gitbook/assets/palmatrix-palmabot-tutorial-2.png)

🌴 FUNÇÕES:  
(encontre os botões inline na conversa após acionar o comando /sorawallet)

- Saldo - veja os saldos dos tokens na sua carteira SORA
- Enviar XOR - função de protótipo que envia 10 XOR para a PalmaWallet de forma pré-definida, e seu propósito é exclusivamente para comprovar o conceito de assinatura de transações locais e enviá-las para a rede enquanto recebe uma resposta.

::: aviso
Não use carteiras criadas em protótipo para enviar fundos. A SEED
Phrase está exposta devido a motivos de teste, o que pode comprometer
a segurança dos seus fundos.
:::

::: informações
Em breve, habilitaremos uma rede de testes para evitar problemas com
as SEED phrases. Agradecemos pela compreensão.
:::

_Convidamos os interessados na versão Prototype e POC da integração
da carteira SORA do Palma Virtual Assistant; por favor, [entre
neste grupo](https://t.me/+95bbVOV-KH84YzQ8) e fique atento
para mais informações._

## Saiba Mais

- [Visão Geral do Palmatrix](/pt/palmatrix-overview)
- [Construa no SORA](/pt/build)
