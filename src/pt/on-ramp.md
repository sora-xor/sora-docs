---
title: Rampa de acesso SORA | Documentação SORA
head:
  - - meta
    - name: description
      content: Aprenda como entrar no SORA, um recurso que permite aos usuários converter facilmente moedas fiduciárias em ativos digitais dentro do ecossistema SORA. Descubra as opções de acesso fiduciário suportadas, o processo de conversão e os benefícios de usar o SORA On-Ramp para uma entrada perfeita no mundo dos ativos digitais.
  - - meta
    - name: keywords
      content: SORA On-Ramp, rampa de acesso fiduciária, ativos digitais, conversão de moeda fiduciária, processo de conversão, entrada contínua
---

# Rampa de acesso

## Via Polkaswap

<!-- @include: /pt/snippets/on-ramp-polkaswap.md -->

## Via Gatehub

Você agora pode comprar XOR nativo na Gatehub e enviá-lo para sua carteira SORA rapidamente.

### Integração

Vá para gatehub.net, crie uma conta e faça a verificação KYC. Você deve passar por um processo de integração suave. Uma vez que você passe por esse processo, você terá uma Carteira XRPL (também referida como Carteira Principal ou Minha Carteira).

Aqui está uma [descrição detalhada da criação de conta
(registro)](https://support.gatehub.net/hc/en-us/articles/360021318533-Register-a-GateHub-Account)
e uma [descrição detalhada do KYC (verificação de conta)](https://support.gatehub.net/hc/en-us/articles/4580394613906-Video-verification-process-for-an-individual-account).

![](/.gitbook/assets/on-ramp-wallet-overview.png)

Após a integração, para poder comprar XOR pela primeira vez, você precisa seguir os seguintes passos:

- [Crie uma Carteira Hospedada](#criar-uma-carteira-hospedada) (_ação única para o primeiro depósito em FIAT_).
- [Deposite fundos em EUR](#deposite-fundos-em-eur) usando um cartão ou transação bancária SEPA.
- [Configure uma trustline](#configure-uma-trustline) (_ação única para o primeiro depósito em FIAT_).
- [Compre XOR com EUR / Troque seu EUR por XOR.](#troque-seu-eur-por-xor).
- [Envie XOR para sua carteira SORA.](#envie-xor-para-sua-carteira-sora)

### Criar uma Carteira Hospedada

A Carteira XRPL (também referida como Carteira Principal ou Minha Carteira) não possui XOR listado. Você precisará de uma Carteira Hospedada para acessar o XOR. Após o seu primeiro depósito, você receberá um depósito de boas-vindas de 10 XRP, cobrindo as taxas de transação ao enviar fundos. Você não pode sacar este depósito de boas-vindas.

1. No canto superior esquerdo da tela, clique em Minha Carteira (= Carteira Principal).

![](/.gitbook/assets/on-ramp-my-wallet-head.png)

2. Clique em + Adicionar Carteira.

![](/.gitbook/assets/on-ramp-add-wallet.png)

3. Clique em Criar Carteira (Hospedada).
4. Dê um nome à sua carteira.

[Mais detalhes estão disponíveis
aqui](https://support.gatehub.net/hc/en-us/articles/360021171254-Create-and-delete-a-wallet)

### Depositar fundos em EUR

Vá para a tela principal desta Carteira Hospedada e adicione fundos em EUR. Siga os passos simples.
Aqui estão descrições detalhadas para [Recarregar seu 
cartão](https://support.gatehub.net/hc/en-us/articles/13805209603474-Card-top-up-EUR)
e fazer um [depósito SEPA em EUR](https://support.gatehub.net/hc/en-us/articles/13801036058258-EUR-deposit-SEPA).

::: Informação
**Tenha cuidado**: Antes de verificar as instruções de depósito (SEPA ou CARTÃO), você
precisa escolher "Carteira Hospedada" no menu à esquerda. `Carteira Hospedada` e
`Carteira Principal/Minha Carteira` têm referências de mensagem diferentes para SEPA.
:::
Caso o seu depósito em EUR chegue na seção `Principal`/`Minha Carteira`,
aqui está como movê-lo para a Carteira Hospedada:

1.  Primeiro, copie o endereço da carteira da sua Carteira Hospedada (um
    número de 9 dígitos).

2.  Em seguida, escolha `Principal`/`Minha Carteira` no canto superior esquerdo.

3.  Clique em `Enviar Pagamento`.

4.  Escolha `Transferência de Carteira - Carteira`.

5.  Digite sua senha (e 2FA, se habilitado).

6.  Cole o endereço da Carteira Hospedada (o nome da sua carteira hospedada
    deve aparecer).

7.  Escolha EUR e o valor apropriado.

8.  Confirme.

9.  Após a confirmação, os fundos devem aparecer na sua Carteira Hospedada em questão de segundos.

Dê uma olhada na descrição
detalhada](https://support.gatehub.net/hc/en-us/articles/360021425613-Send-cryptocurrencies-from-your-wallet)
para mais informações.

### Configurar uma trustline
Após a chegada do primeiro depósito em fiat, você ainda não verá os
fundos na sua conta. Você receberá uma notificação por e-mail e notará
um depósito de boas-vindas de `10 XRP` na sua Carteira Principal.

Para que os fundos em fiat cheguem à sua carteira, você deve realizar
a ação “configurar uma trustline para Euro—GateHub Crypto” e aguardar
alguns minutos ou, em alguns casos, até o próximo dia útil para que os fundos em EUR apareçam na sua Carteira Hospedada.

Aqui está uma [descrição detalhada](https://support.gatehub.net/hc/en-us/articles/360021430013-Set-and-disable-trust-lines).

### Troque seu EUR por XOR

Uma vez que o EUR seja recebido e esteja visível na sua Carteira Hospedada, você pode trocá-lo por XOR na aba Exchange.

1. Escolha `Carteira Hospedada` no canto superior esquerdo
2. Clique em `Exchange` no menu à esquerda
3. Escolha EUR à esquerda e XOR à direita da tela
4. Escolha o valor de EUR em `Você paga`
5. Clique no botão `Exchange` no lado direito da tela

Dê uma olhada na [descrição
detalhada](https://support.gatehub.net/hc/en-us/articles/360021425773-Exchange) here.

### Envie XOR para sua carteira SORA

![](/.gitbook/assets/on-ramp-send-xor-sora.png)

Clique em `Enviar Pagamento` na interface da carteira para enviar
o XOR para sua Carteira SORA, seguindo as orientações na tela. Siga
esta [descrição detalhada](https://support.gatehub.net/hc/en-us/articles/360021425613-Send-cryptocurrencies-from-your-wallet) for more information

Comprar XOR na Gatehub é simples, mas caso você enfrente algum
problema, entre em contato com o principal [canal do Telegram da
SORA](https://t.me/sora_xor) ou
[Canal de Suporte da SORA](https://t.me/sora_happy).

::: dica

Os administradores nunca enviarão mensagens diretas para você. Qualquer mensagem direta que você receba sobre este processo é um potencial golpe; para sua segurança, nunca interaja com essas contas e nunca divulgue qualquer informação privada sobre sua conta para ninguém.

:::

## Saiba Mais

- [Cartão SORA](/pt/sora-card.md)
- [Polkaswap](/pt/polkaswap.md)
