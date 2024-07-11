---
title: "Executando um nó na rede SORA | Documentos SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como executar um nó na rede SORA e tornar-se um participante ativo na infraestrutura da rede. Descubra os requisitos, o processo de configuração e os benefícios de executar um nó para apoiar a descentralização e a segurança da rede SORA."
  - - meta
    - name: keywords
      content: "executando um nó, rede SORA, configuração de nó, infraestrutura de rede, descentralização, segurança de rede"
---

# Como executar um nó SORA Mainnet

## Resumo

- Qualquer pessoa pode executar um nó na rede principal SORA
- Existem dois tipos de nós:
 - **sincronização** nós que apenas recebem e retransmitem dados
 - **validação** nós que fazem os blocos. Leia mais em [Consenso](./consenso).

## Requisitos Prévios

Você vai precisar:

- Uma máquina com Linux, Windows ou macOS
- [Docker](https://docs.docker.com/get-docker/) (de preferência a versão mais recente). Siga o guia de instalação do seu sistema operacional.
- Pelo menos 8 GB de RAM, de preferência 16 GB de RAM. Para produção, você precisará de 64 GB de RAM.
- 300 GB de espaço livre (de preferência SSD, com capacidade de expansão)
CPU Intel (R) Core (TM) i7 7700K a 4,20 GHz (como alternativa, um processador de 4 núcleos com frequência de 2,2 GHz)

Para verificar se o Docker está instalado, execute o comando `docker --version` no terminal. Você obterá uma saída como esta:

```txt
Docker version 20.10.2, build 2291f61
```

Verifique o contêiner com o comando `docker run hello-world` no terminal. Se tudo funcionar bem, o Docker irá extrair a imagem hello world e executá-la.

::: Expanda os detalhes para ver o resultado de `docker run hello-world` output

```
C:\\Users\\Pg> docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:95ddb6c31407e84e91a986b004aee40975cb0bda14b5949f6faac5d2deadb4b9
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
Esta mensagem mostra que sua instalação parece estar funcionando corretamente.

Para gerar esta mensagem, o Docker seguiu os seguintes passos:
 1. O cliente Docker contatou o daemon Docker.
 2. O daemon Docker extraiu a imagem “hello-world” do Docker Hub.
 (amd64)
 3. O daemon Docker criou um novo contêiner a partir dessa imagem que executa o
 executável que produz a saída que você está lendo atualmente.
 4. O daemon Docker passou essa saída para o cliente Docker, que
 você o enviou para o seu terminal.

Para tentar algo mais ambicioso, você pode executar um contêiner Ubuntu com:
  $ docker run -it ubuntu bash

Compartilhe imagens, automatize fluxos de trabalho e muito mais com um Docker ID gratuito:
<https://hub.docker.com/>

Para mais exemplos e ideias, visite:
<https://docs.docker.com/get-started/>
```

:::

Se algo deu errado, visite a [documentação do Docker](https://docs.docker.com/). Você também pode baixar o Docker aqui:

- [macOS](https://docs.docker.com/get-docker/#docker-for-mac)
- [Windows](https://docs.docker.com/get-docker/#docker-for-windows/install/)
- [Linux](https://docs.docker.com/get-docker/#docker-for-linux)

## Obtenha o número da versão mais recente do nó SORA

Os usuários devem usar a versão **3.2.0** por enquanto. Atualizaremos este artigo com a versão mais recente após cada atualização.

Você deve usar a versão mais recente do SORA Node para executar um
nó. Você pode ver o número da versão mais recente aqui e encontrar o mais recente versão com o formato `x.y.z`.

![](/.gitbook/assets/running-node-version-tag.png)

Use este número de versão para mais comandos `docker` neste guia. O número da versão será marcado como **`<version>`** nos comandos. Observe que você precisará inserir o número da versão **sem colchetes**.

## Executando um nó de sincronização

### En Linux/Mac

1. Extraia a imagem do docker do repositório do docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Crie uma pasta para configuração do nó:

   ```bash
   mkdir sora2
   cd sora2
   ```

3. Conceda acesso à pasta:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   No macOS, pode ser necessário usar isto:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Execute a imagem docker (não se esqueça de incorporar sua versão abaixo!)

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

### No Windows

1. Extraia a imagem do docker do repositório do docker:

    ```bash
    docker pull sora2/substrate:3.2.0
    ```

2. Crie uma pasta para configuração do nó:


    ```txt
    C:\\Users\\<username>\\sora2-node
    ```

3. Verifique o acesso à pasta criada:

    ![](/.gitbook/assets/running-node-check-access-to-folder.png)

    Todas las casillas de verificación deben estar activadas para el usuario:

    ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Execute o comando docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

5. Agora você pode se conectar ao seu nó com [aplicativos polkadot.js] (https://polkadot.js.org/apps/#/explorer). Selecione Nó local e clique em Alterar.

   ![](/.gitbook/assets/running-node-connect-custom.png)

Agora seu nó deve sincronizar!

## Executando um nó validador

### No Linux/Mac

1. Extraia a imagem do docker do repositório do docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```
2. Crie uma pasta para a configuração do nó.

   ```bash
   mkdir sora2
   cd sora2
   ```
3. Conceda acesso à pasta criada:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   No macOS, pode ser necessário usar isto:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Execute o comando docker:

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

   Você pode adicionar o seguinte sinalizador para ativar [Telemetría](https://telemetry.polkadot.io/#list/SORA) para su nodo

   `--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

### No Windows

1. Extraia a imagem do docker do repositório do docker:
 
   ```
   docker pull sora2/substrate:3.2.0
   ```

2. Crie uma pasta para a configuração do nó.

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Verifique o acesso à pasta:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Execute o comando Docker

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

## Obtenha chaves de sessão

::: Informação
Recomenda-se usar a linha de comando para obter as chaves de sessão, como
Polkadot.JS às vezes tem problemas para se conectar ao nó local.
:::

### Com o aplicativo polkadot.js

### Com o aplicativo polkadot.js

1. Abre [polkadot.js apps](https://polkadot.js.org/apps/#/explorer) e mude para o seu nó local.

   ![](/.gitbook/assets/running-node-via-polkadot-switch-to-local.png)

2. Na seção Desenvolvimento, selecione Nó local _(ws://127.0.0.1:9944)_ e clique em _Alterar_.

   ![](/.gitbook/assets/running-node-via-polkadot-select-local.png)

   Agora você pode ver a tela com as informações do seu nó. _(Depois que seu nó estiver totalmente sincronizado)_

   ![](/.gitbook/assets/running-node-via-polkadot-view-info.png)

3. Navegue até _Desenvolvedor_ → _Chamadas RPC_:

   ![](/.gitbook/assets/running-node-via-polkadot-navigate-to-rpc-calls.png)

4. Selecione _autor_ → _rotateKeys()_:

   ![](/.gitbook/assets/running-node-via-polkadot-select-rotatekeys.png)

5. Clique no botão _Enviar chamada RPC_:

   ![](/.gitbook/assets/running-node-via-polkadot-submit-rpc.png)

6. Copie a chave da sessão do resultado. Você precisará da chave mais tarde.

### Com a linha de comando

1. Abra o terminal (ou outro cliente de linha de comando) e execute o comando

   ```
   curl -H “Content-Type: application/json” -d ‘{“id”:1, “jsonrpc”:”2.0", “method”: “author_rotateKeys”, “params”:[]}’ http://localhost:9933
   ```

   A saída conterá a chave da sessão:

   ```json
   {“jsonrpc”:”2.0",”result”:”0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72”,”id”:1}
   ```

2. Copie o resultado, no exemplo atual é `0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72`.

## Adicionando um validador

1. Primeiro você deve ir em Contas e já ter uma conta conectada. Navegue até Rede → Staking → Ações da conta e clique em _Validador_:

   ![](/.gitbook/assets/running-node-add-validator.png)

2. Selecione a conta stash e a conta de controle. Recomenda-se usar contas diferentes para o stash e o controlador. (No exemplo estamos usando PAVEL (EXTENSÃO))

3. Defina o valor limite:

   ![](/.gitbook/assets/running-node-set-bonded-value.png)

4. Define a chave da sessão (o resultado da chamada do rotateKeys) e a taxa de recompensa:

   ![](/.gitbook/assets/running-node-set-key-reward-commission.png)

5. Assine a transação.

   ![](/.gitbook/assets/running-node-sign-transaction.png)

6. Certifique-se de ter sido adicionado aos stashes:

   ![](/.gitbook/assets/running-node-check-stashes.png)

7. Finalmente, espere pela próxima Era.

   ![](/.gitbook/assets/running-node-wait-for-next-era.png)

Quando a próxima Era começar, seu validador será adicionado.

## Obter pagamentos

1. Abra _Staking_ → _Pagamentos_. Se o seu validador participar do consenso, você poderá receber o pagamento após a Idade.

Os aplicativos Polkadot.js sempre mostram XOR, porque não oferecem suporte a vários ativos. Deveria dizer VAL na imagem abaixo.

   ![](/.gitbook/assets/running-node-get-payouts.png)

2. Clique no botão Pagar tudo e assine a transação

   ![](/.gitbook/assets/running-node-payout-all.png)

   ![](/.gitbook/assets/running-node-get-payouts-sign.png)

Preste atenção, pois a recompensa será compartilhada entre o Validador e os Nomeadores com base na Participação.

## Adicionar nó à telemetria

Se você deseja adicionar seu nó a [telemetria](https://telemetry.polkadot.io/#list/SORA) basta adicionar esta tag ao executar a imagem do docker

`--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

Você pode alterar o nome do seu nó editando o valor do parâmetro:

`--name sora2-node`

## Executando um nó Arquivo

### En Linux/Mac

### En Linux/Mac

1. Extraia a imagem do docker do repositório do docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```
2. Crie uma pasta para a configuração do nó.

   ```bash
   mkdir sora2
   cd sora2
   ```
3. Conceda acesso à pasta criada:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   No macOS, pode ser necessário usar isto:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Execute o comando docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

### No Windows

1. Extraia a imagem do docker do repositório do docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Crie uma pasta para a configuração do nó.

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Verifique o acesso à pasta:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Execute o comando docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

Levará algum tempo para o nó sincronizar. A saída nos logs deve ser semelhante a esta:

```
2021-04-30 11:33:33 💤 Idle (0 peers), best: #0 (0x7e4e…8ad5), finalized #0 (0x7e4e…8ad5), ⬇ 37.1kiB/s ⬆ 16.3kiB/s
2021-04-30 11:33:38 ⚙️  Syncing 31.0 bps, target=#38470 (1 peers), best: #155 (0xa9e2…5b22), finalized #0 (0x7e4e…8ad5), ⬇ 127.6kiB/s ⬆ 0.9kiB/s
2021-04-30 11:33:43 ⚙️  Syncing 35.6 bps, target=#38470 (2 peers), best: #333 (0x4c68…2957), finalized #0 (0x7e4e…8ad5), ⬇ 7.9kiB/s ⬆ 0.2kiB/s
2021-04-30 11:33:48 ⚙️  Syncing 32.4 bps, target=#38471 (2 peers), best: #495 (0x9082…f220), finalized #0 (0x7e4e…8ad5), ⬇ 41.3kiB/s ⬆ 1.1kiB/s
2021-04-30 11:33:53 ⚙️  Syncing 34.6 bps, target=#38471 (2 peers), best: #668 (0xb34a…121a), finalized #512 (0x1f6e…cc65), ⬇ 0.1kiB/s ⬆ 0
```

Você pode se conectar ao seu próprio nó com aplicativos Polkadot.js. [Abra aplicativos Polkadot.js](https://polkadot.js.org/apps/) e navegue até a seção Desenvolvimento no switcher de rede.

![](/.gitbook/assets/running-node-connect.png)

Se você estiver executando um nó em sua máquina local, selecione Nó local e clique em Alterar. Caso contrário, insira seu endpoint personalizado e salve.

## Perguntas frequentes

P: **Estou recebendo um erro ao iniciar o nó**.

R: _Verifique se você digitou o comando e os sinalizadores corretamente e se não há erros de digitação. Se isso não funcionar, localize sua pasta sora2, exclua seu conteúdo, baixe a imagem do docker e tente executar o node novamente._

P: **Não tenho XOR para piquetagem inicial**.

R: _Você pode trocar tokens por XOR em [*Polkaswap*](https://polkaswap.io), ou transfira tokens de ETH para a rede principal SORA usando o [recurso de ponte em Polkaswap](https://polkaswap.io/#/bridge) e depois troque por XOR._

P: **Onde posso ver meu nó na telemetria?**

R: _Você pode ver [*aqui*](https://telemetry.polkadot.io/#map/SORA)_

P: **Meu nó está tendo problemas para sincronizar. O que posso fazer?**

R: _Você pode adicionar a configuração `--in-peers 80` e isso deve resolver o problema, caso contrário, veja a próxima pergunta._

P: **Revisei toda a documentação e minha pergunta ainda não foi respondida. A quem mais posso perguntar?**

R: _Você sempre pode participar da comunidade Telegram [SORA Devs](https://t.me/soradevs) e tirar qualquer outra dúvida que possa ter lá, outros membros da comunidade e administradores ficarão felizes em ajudar!_

P: **Não consigo acessar o nó local do Polkadot.JS para obter minhas chaves de sessão, o que devo fazer?**

R: _Às vezes, Polkadot.JS tem problemas para se conectar a nós locais; nesse caso, recomendamos que você use as instruções da linha de comando para obter suas chaves de sessão._

## Saber mais

- [Tokenomia de SORA](/tokenomics.md)
- [Token VAL](/val.md)


