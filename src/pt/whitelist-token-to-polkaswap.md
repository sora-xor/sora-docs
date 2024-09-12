---
title: "Adicionar Tokens à Lista de Permissão no Polkaswap | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda a adicionar tokens ao Polkaswap na rede SORA. Descubra o processo passo a passo para listar novos tokens no Polkaswap, incluindo os requisitos, procedimentos e considerações para adicionar tokens.
  - - meta
    - name: keywords
      content: "adição de tokens, Polkaswap, rede SORA, listagem de tokens, requisitos, procedimentos, ponte de ativos, interoperabilidade, redes blockchain, lista de permissões"
---

# Adicionar um Token à Lista de Permissão no Polkaswap

Adicionar tokens ao Polkaswap permite que os usuários se beneficiem de todos os recursos de um protocolo DEX de agregador de liquidez de próxima geração, cross-chain, baseado no Polkadot, com Parachains e pontes para conectar outras blockchains.

Adicionar um token à lista de permissões no Polkaswap envolve os seguintes passos:

1. [Abrir a lista de permissões do Polkaswap](#abrir-a-lista-de-permissões-do-polkaswap)
2. [Clonar o repositório](#clonar-o-repositório)
3. [Adicionar as informações necessárias](#adicionar-as-informações-necessárias)
4. [Criar uma solicitação de PR](#criar-uma-solicitação-de-pr)
5. [Responder às perguntas e aguardar a aprovação](#responder-às-perguntas-e-aguardar-a-aprovação)

## Abrir a lista de permissões do Polkaswap

Abra o arquivo [`whitelist.json`](https://github.com/sora-xor/polkaswap-token-whitelist-config/blob/master/whitelist.json) on GitHub

## Clonar o repositório

Clone o repositório para fazer alterações no whitelist.json localmente em seu computador.

Além disso, você pode fazer isso através da interface do GitHub:

1. No lado direito da interface, clique no botão _"Edit this file"_ com o ícone de caneta.

![](.gitbook/assets/whitelist-polkaswap-edit-button.png)

2. Adicione as informações sobre o seu token na nova tela no modo de edição. Consulte o próximo ponto para as informações necessárias.

![](.gitbook/assets/whitelist-polkaswap-edit-mode.png)

## Adicionar as informações necessárias

Ao editar o whitelist.json, por favor, adicione as seguintes informações necessárias:

- `symbol`: o símbolo do token, o nome curto do token. Por exemplo, `VAL`.
- `name`: nome completo do token. Por exemplo, `SORA Validator Token`.
- `address`: ID do ativo SORA no formato `0x...`.
- `decimals`: número de dígitos à direita do ponto decimal. No momento, pode ser apenas 18.
- `icon`: ícone do token no formato SVG ou PNG codificado em base64. O tamanho máximo da imagem para SVG é 5 kB (kilobyte) e para PNG é 8 kB (kilobyte).
  - Base64 é uma maneira acessível de exibir sua imagem no Polkaswap. O base64 se parece com `data:image/png;base64,iVBORw0KGgoAAAAN...`.
  - Para converter sua imagem, você pode usar estes serviços:
    - https://www.base64-image.de/
    - https://base64.guru/converter/encode/image
  - Para compactar sua imagem para 5 kB no caso de SVG e 8 kB no caso de PNG, você pode usar o seguinte serviço:
    - https://www.iloveimg.com/compress-image

## Criar uma solicitação de PR

Depois de adicionar todas as informações necessárias, você precisa criar um PR neste repositório adicionando linhas ao arquivo, representando o seu token.

Você também pode fazer isso através da interface do GitHub.

1. No modo de edição, no lado direito, você precisa encontrar o botão `Commit changes..` e clicar nele.

<center><img src=".gitbook/assets/whitelist-polkaswap-commit-changes.png" width="800"></center>

2. Por favor, forneça as seguintes informações no pop-up:
   1. Mensagem do commit - uma breve descrição do seu token.
   2. Descrição estendida - descrição completa do seu token e o motivo para adicioná-lo ao Polkaswap.
   3. Nome da branch - devido ao fato de você não poder realizar commits diretamente na master por razões de segurança, o GitHub criará automaticamente uma nova branch para suas alterações e token, e você precisará fornecer o nome da branch. Pode ser a ação "add-new-token", ou o nome do novo token "new-token". É muito importante que o nome da branch não contenha espaços ' ', apenas este sinal "-"

<center><img src=".gitbook/assets/whitelist-polkaswap-propose-changes.png" width="400"></center>

Uma vez feito isso, a comunidade revisará sua pull request.

## Responder às perguntas e aguardar a aprovação

Fique atento às notificações da sua pull request. A comunidade pode ter perguntas, e você deve resolvê-las o mais rápido possível.