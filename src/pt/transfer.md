---
title: "Transferência SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como transferir ativos na rede SORA. Descubra os vários métodos e ferramentas disponíveis para transferir ativos digitais de forma segura e eficiente dentro do ecossistema SORA. Explore o processo de transferência, incluindo envio e recebimento de ativos, taxas de transação e melhores práticas para garantir uma operação tranquila e transferências confiáveis ​​de ativos na rede SORA."
  - - meta
    - name: keywords
      content: "Transferência SORA, rede SORA, transferência de ativos, ativos digitais, transferência segura, taxas de transação, envio de ativos, recebimento de ativos, processo de transferência de ativos"
---

# Transferência

As transferências são usadas para enviar tokens de uma conta para outra. Você pode fazer transferências usando os aplicativos Polkadot.js, Polkaswap e o aplicativo móvel SORA.

A lógica de transferência é implementada na paleta `assets`. SORA oferece suporte a vários ativos e cada ativo pode ser transferido.

A transferência é uma transação, portanto, uma taxa de rede deve ser paga. A taxa é calculada em XOR, portanto, mesmo que você transfira VAL, PSWAP ou qualquer outro token, deverá ter algum XOR para cobrir a taxa.

::: informações
As tarifas para fazer transferências na SORA podem variar. Muitas vezes são feitas propostas de governação para ajustar as taxas de transação. A taxa real pode diferir daquela mostrada nos exemplos.
:::

## Prática

::: dica
Recomendamos usar o testnet SORA para exercícios práticos. Aqui estão os links da Testnet:

1. [Aplicativo de teste Polkaswap](https://test.polkaswap.io/)
2. [Aplicativo Polkadot js testnet para SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [aplicativo testnet para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [aplicativo testnet para iOS](https://testflight.apple.com/join/670hF438)
 :::

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdJ6yFFl06k" title="YouTube Video Player" frameborder="0" permit="accelerometer; autoplay; clipboard- escrever; mídia criptografada;

### Obtenha tokens de teste

Você pode praticar transferências usando tokens de teste na testnet SORA.

1. Abra a [torneira](https://testfaucet.polkaswap.io/)

<center><img src=".gitbook/assets/transfer-open-faucet.png" width="400"></center>

2. Insira seu endereço SORA, selecione o token e a quantidade de tokens necessários.

<center><img src=".gitbook/assets/transfer-request-testnet-tokens.png" width="400"></center>

3. Clique em **Enviar VAL testnet (XOR, PSWAP).**

::: informações
Observe que cada transação no SORA exige uma taxa em XOR. A transferência é uma transação, então não esqueça de solicitar algum XOR do faucet.
:::

### Enviar tokens

#### Via Polkaswap

O aplicativo da web Polkaswap possui uma carteira que você pode usar para enviar tokens.

1. Abra a seção **Conta** e clique no ícone de envio (uma seta perto do ativo)

<center><img src=".gitbook/assets/transfer-click-send.png" width="400"></center>

2. Insira o endereço do destinatário e a quantidade de tokens que você gostaria de enviar

 <center><img src=".gitbook/assets/transfer-enter-address.png" width="400"></center>

 Se você inserir um endereço que não comece com `cn`, verá uma notificação sobre a conversão do endereço. <!-- (conforme mencionado na seção de prefixo da conta em [Contas no SORA](/accounts-in-sora.md#converting-the-address-format)). -->

 <center><img src=".gitbook/assets/transfer-notification.png" width="400"></center>

3. Clique em Enviar e confirme a transação.

<center><img src=".gitbook/assets/transfer-confirm-transaction.png" width="400"></center>

4. Após aparecer a confirmação da transação da extensão Polkadot.js, digite sua senha e confirme a transação:

<center><img src=".gitbook/assets/transfer-confirmation-enter-password.png" width="400"></center>

::: dica

Você pode então encontrar sua transação na guia Atividade:

<center><img src=".gitbook/assets/transfer-view-activity.png" width="400"></center>

:::

#### Via aplicativo móvel

O aplicativo móvel SORA oferece uma boa experiência de usuário para envio e recebimento de tokens.

1. Abra a tela do portfólio e toque no ícone de envio no canto superior direito.

<center><img src=".gitbook/assets/transfer-mobile-open-wallet.jpg" width="400"></center>

2. Selecione o token a ser enviado:

<center><img src=".gitbook/assets/transfer-mobile-select-token.jpg" width="400"></center>

3. Digite o endereço do destinatário:

<center><img src=".gitbook/assets/transfer-mobile-enter-recipient.jpg" width="400"></center>

4. Insira o número de tokens a serem enviados:

<center><img src=".gitbook/assets/transfer-mobile-enter-amount-zero.jpg" width="400"> <img src=".gitbook/assets/transfer-mobile-enter-amount-entered .jpg" largura="400"></center>

5. Confirme a transação:

<center><img src=".gitbook/assets/transfer-mobile-confirm.jpg" width="400"></center>

Você será redirecionado para a tela do Portfólio:

<center><img src=".gitbook/assets/transfer-mobile-redirect-to-wallet.jpg" width="400"></center>

::: dica

Toque na transação no histórico para ver os detalhes:

<center><img src=".gitbook/assets/transfer-mobile-view-history.jpg" width="400"></center>

:::

##### Enviar tokens usando um código QR

O uso de um código QR reduz o número de erros e simplifica o processo de inserção de endereços e tokens. O token e as informações de endereço são codificados no código QR e o aplicativo o decodifica.

1. Toque no ícone Digitalizar no canto superior direito e permita o acesso à câmera.

<center><img src=".gitbook/assets/transfer-mobile-qr-open.jpg" width="400"></center>

2. Digitalize o código QR e insira o número de tokens que deseja enviar.

<!-- Provavelmente não é necessário <center><img src=".gitbook/assets/Screenshot_20210915-101737_Soralution.jpg" width="400"></center> -->
<center><img src=".gitbook/assets/transfer-mobile-qr-enter-amount.jpg" width="400"></center>

#### Receba tokens usando um código QR

Se você deseja receber tokens usando um código QR:

1. Toque no ícone QR no canto superior direito da tela da carteira:

<center><img src=".gitbook/assets/transfer-mobile-qr-receive.jpg" width="400"></center>

2. Selecione o ativo:

<center><img src=".gitbook/assets/transfer-mobile-qr-receive-select-asset.jpg" width="400"></center>

3. Compartilhe o QR gerado usando o ícone de compartilhamento ou copiando a imagem:

<center><img src=".gitbook/assets/transfer-mobile-qr-share-qr.jpg" width="400"></center>