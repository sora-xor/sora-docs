---
title: "Como solicitar um teste de identidade para SORA | Verificando-se | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como solicitar um julgamento de identidade para sua conta SORA e ser verificado. Siga estas etapas para estabelecer sua identidade na rede e ganhar confiança na comunidade SORA."
  - - meta
    - name: keywords
      content: "SORA, julgamento de identidade, julgamento de solicitação, polkadot.js, identidade na rede, verificação, fundos de marketing comunitário, fundos de marketing comunitário"
---

# Identidades em redes baseadas em substrato

## TL;DR

- Você pode estabelecer uma identidade em cadeia para facilitar que outras pessoas reconheçam seu endereço.
- Como Validador, adicione confiança extra aos Nomeadores se eles conhecerem sua identidade na rede.
- Este tutorial irá ajudá-lo a configurar uma identidade na rede e solicitar um julgamento sobre sua identidade (como uma entidade confiável ou verificada na rede SORA)

## Através da IU PolkadotJS

### Registrar uma identidade

Requisitos:

- Uma conta SORA (Follow the [siga o [tutorial de
  criação deconta](/pt/create-an-address.md) se você não tiver uma)
- ~52700 XOR para pagar taxa de rede e registrador
- 5 DAI como doação para fundos comunitários

Siga estas etapas para configurar uma identidade:

#### 1. Vá para o [aplicativo Polkadot JS apontando para a rede principal Sora](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/accounts) na guia contas:

#### 2. Clique no ícone do menu de hambúrguer na conta para a qual deseja registrar uma identidade. Em seguida, selecione "Definir identidade para cadeia":

  <center><img src="/.gitbook/assets/id-select-menu.png" width="400"></center>

#### 3. Cadastre sua Identidade e clique em "Definir Identidade" quando terminar.

   <center><img src="/.gitbook/assets/id-register-id.png" width="400"></center>

::: informações

Observe que você terá que pagar uma pequena taxa de transação em XOR para assinar.

:::

Assim que a transação for concluída, sua conta mostrará uma identidade!

## Solicitar teste de identidade

Depois de concluir todas as etapas descritas na seção [Registrar uma identidade](/pt/id.md#registrar-uma-identidade), você poderá solicitar uma verificação adicional para obter uma marca de seleção verde em destaque ao lado do nome da sua conta. Esta verificação serve como uma indicação de que você é um usuário reconhecido e verificado, permitindo que outras pessoas identifiquem e confiem facilmente em sua conta.

### 1. Solicite julgamento de um registrador em polkadot.js.

Usando a conta que você deseja verificar, vá para a guia Desenvolvedor e siga estas etapas:

- Clique em Extrínseco.
- Selecione `Identidade` e `requestJudgement`.
- Em `regIndex`, defina `1` (`reg_index` = `0` não está mais ativo). O registrador `1` cobra uma taxa de 5.000 `XOR`.
- Envie a transação.

  <center><img src="/.gitbook/assets/requestJudgement.png" width="600"></center>

### 2. Doe para a direção dos Fundos de Marketing Comunitário.

Doe um mínimo de 5 `DAI` por conta solicitando julgamento à gestão dos Fundos de Marketing Comunitário (`cnSN9X2HNU3uYjRbGvTwpgUdtVDuNk1g29XkcQNoNBQxgt1ii`).
Os fundos desta carteira comunitária são usados ​​para marketing SORA.

### 3. Entre em contato diretamente com o registrador. Você pode encontrar as informações de contato em seu perfil.

| Plataforma de mídia social/mensagens | Identificador              |
| ------------------------------------ | -------------------------- |
| Telegram                             | https://t.me/SpicyHotWings |
| Twitter                              | @mishokanaria              |
| Riot                                 | @spicyhotwings:matrix.org  |

### 4. Verifique sua identidade.

Você precisará provar que as informações da rede são legítimas. Cada registrador terá seu próprio conjunto de procedimentos para verificar sua identidade e valores mobiliários, e somente depois que você atender aos requisitos o processo continuará.

::: informações

Você pode alterar livremente qualquer valor durante o processo de julgamento até ser verificado. No entanto, alterar o valor de um único campo após a verificação cancelará a verificação da sua conta e você precisará iniciar o processo de avaliação novamente.

:::

## Saber mais

- [Crie uma conta no SORA](/pt/create-an-address.md)
- [Executando um nó Sora](/pt/running-a-node.md)
