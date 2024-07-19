---
title: "Criar um endereço na rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: “Aprenda como criar um endereço na rede SORA e comece a interagir com o ecossistema SORA. Descubra os passos para gerar um novo endereço, a importância da segurança do endereço e como utilizar seu endereço para diversas atividades dentro da rede SORA.
  - - meta
    - name: keywords
      content: "criar um endereço, rede SORA, geração de endereços, segurança de endereços"
---

<!-- TODO:
- find missing images
- fix wrong images
-->

# Criação de conta

Aqui fornecemos instruções sobre como criar contas:

- [via plug-in do navegador polkadot.js](#via-polkadotjs-browser-plugin)
- [via aplicativo polkadot.js](#via-polkadotjs-app-ui)
- [via aplicativo móvel SORA](#via-sora-mobile-application)

::: dica

Recomendamos usar o testnet SORA para exercícios práticos. Aqui estão os links da Testnet:

1. [Aplicativo de teste Polkaswap](https://test.polkaswap.io/)
2. [Aplicativo de teste Polkadot js SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicativo de teste para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [Aplicativo de teste para iOS](https://testflight.apple.com/join/670hF438)

:::

No exercício prático, uma conta deverá ser criada de 3 formas diferentes. Seja qual for a forma que você escolher, você terá o mesmo resultado após importar uma conta para outras plataformas. Um lindo vídeo tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdJ6yFFl06k" title="Criação de conta SORA" frameborder="0" permit="accelerometer; autoplay; clipboard - escrever; mídia criptografada;

## Através do plug-in do navegador polkadot.js

Use um navegador Chrome ou Firefox.

1. Baixe [https://polkadot.js.org/extension/](https://polkadot.js.org/extension/) o plugin do navegador e instale a extensão.

 ![](.gitbook/assets/create-address-browser-install-polkadot.png)

2. Abra a extensão e confirme que compreende o aviso legal.

<center><img src="/.gitbook/assets/create-address-browser-polkadot-confirm.png" width="400"></center>

3. Crie a conta. Você deve clicar no botão `+`

 <center><img src="/.gitbook/assets/create-address-browser-create.png" width="400"></center>

 Você verá a frase mnemônica. **Nunca compartilhe com ninguém** e não use o mesmo da captura de tela (_esta é apenas uma demonstração, outra será atribuída a você_). **Mantenha esta senha em segurança porque é a única maneira de restaurar sua conta.**

 <center><img src="/.gitbook/assets/create-address-browser-mnemonic.png" width="400"></center>

4. Marque a caixa e passe para a próxima etapa.

5. Digite um nome de conta e senha e continue.

 <center><img src="/.gitbook/assets/create-address-browser-name-password.png" width="400"></center>

 A nova conta foi criada.

 <center><img src="/.gitbook/assets/create-address-browser-account-created.png" width="400"></center>

6. Agora você deve alterar o formato do endereço para começar com `cn`. Abra Configurações e selecione Formato de endereço de exibição. Deveria ser a rede SORA.

 <center><img src="/.gitbook/assets/create-address-browser-change-to-sora-network.png" width="400"></center>

 Bom trabalho! Agora você tem um endereço com o prefixo `cn`

 ![](.gitbook/assets/create-address-cn-prefix.png)

## Via interface do aplicativo polkadot.js

1. Abra [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) e selecione Rede Sora. Use este [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer) para a rede de teste.

 Se você já instalou o complemento do navegador Polkadot, ele solicitará permissão para sincronizar dados. Você pode fazer isso, pois facilitará o gerenciamento da conta.

 ![](.gitbook/assets/create-address-app-authorize.png)

2. Abra a página [Contas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/accounts).

 Se você permitir a sincronização do plug-in do navegador Polkadot, suas contas aparecerão no aplicativo Polkadot.js:

 ![](.gitbook/assets/create-address-app-synced.png)

 Você pode criar uma nova conta.

3. Clique em "Adicionar conta":

 ![](.gitbook/assets/create-address-app-add-account.png)

4. Salve a frase mnemônica, **tenha certeza de mantê-la segura e não compartilhá-la**. Confirme que você salvou o mnemônico e clique em “Avançar”:

 ![](.gitbook/assets/create-address-app-mnemonic.png)

5. Digite um nome e senha para a conta e clique em "Avançar":

 ![](.gitbook/assets/create-address-app-name-password.png)

6. Após a confirmação clique em salvar.

 ![](.gitbook/assets/create-address-app-save.png)

## Via interface do aplicativo polkadot.js

1. Abra [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) e selecione a rede SORA. Use este [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer) para a rede de teste.

 Se você já instalou o complemento do navegador Polkadot, será solicitada permissão para sincronizar dados. Recomenda-se fazê-lo, pois facilitará o gerenciamento da conta:

 ![](.gitbook/assets/create-address-app-authorize.png)

2. Acesse a página [Contas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/accounts).

 Se você permitir a sincronização do plug-in do navegador Polkadot, suas contas aparecerão no aplicativo Polkadot.js:

 ![](.gitbook/assets/create-address-app-synced.png)

 Você pode criar uma nova conta.

3. Clique em "Adicionar conta":

 ![](.gitbook/assets/create-address-app-add-account.png)

4. Salve a frase mnemônica, certifique-se de mantê-la segura e não a compartilhe. Confirme que você salvou o mnemônico e clique em “Avançar”:

 ![](.gitbook/assets/create-address-app-mnemonic.png)

5. Digite um nome e senha para a conta e clique em "Avançar":

 ![](.gitbook/assets/create-address-app-name-password.png)

6. Após a confirmação, clique em “Salvar”:

 ![](.gitbook/assets/create-address-app-save.png)

Agora você tem duas contas. Um foi injetado a partir do plugin do navegador Polkadot e o segundo foi criado no aplicativo Polkadot.js:

![](.gitbook/assets/create-address-app-view-accounts.png)

## Através do aplicativo móvel SORA

O aplicativo móvel SORA permite aos usuários interagir com a rede SORA usando dispositivos móveis. Aqui estão os links para os aplicativos:

- [Aplicativo Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora) para **mainnet**
- [Aplicativo iOS](https://apps.apple.com/us/app/sora-dae/id1457566711) para **mainnet**

Você pode usar estes aplicativos **testnet** para praticar:

- [aplicativo testnet para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
- [aplicativo testnet para iOS](https://testflight.apple.com/join/670hF438)

Ao instalar o aplicativo, você poderá criar uma conta.

1. Abra o aplicativo. Existem duas opções: **Criar conta** e **Importar conta**:

 ![](.gitbook/assets/create-address-sora-options.png)

2. Para este exercício, toque em **Criar conta**:

 ![](.gitbook/assets/create-address-sora-create.png)

3. Insira um nome de conta. Pode ser qualquer corrente. Então é hora de continuar.

 ![](.gitbook/assets/create-address-sora-enter-name.png)

4. Será exibida a tela com a frase mnemônica. Mantenha a frase mnemônica em um lugar secreto ou lembre-se dela.

 ::: dica

 A frase mnemônica é a única forma de recuperar a conta em caso de troca de celular, logout do aplicativo ou outros casos de emergência.

 :::

 Você pode confirmar o mnemônico ou pular o processo. Basta tocar nas palavras na parte superior da tela na ordem correta. A palavra tocada será exibida na parte inferior da tela.

 ![](.gitbook/assets/create-address-sora-confirm-mnemonic.png)

5. Insira e confirme um código PIN de sua escolha.

 ![](.gitbook/assets/create-address-sora-enter-pin.png)

6. Você também pode permitir que o aplicativo use autenticação biométrica. E por fim, você terá acesso à carteira.

 ![](.gitbook/assets/create-address-sora-biometry-auth.png)

#### Restaurar conta do mnemônico em diferentes aplicativos

A única maneira de restaurar a conta em todos os aplicativos é usando uma frase mnemônica. O plug-in do navegador Polkadot.js oferece suporte a mais opções, no entanto, o aplicativo móvel oferece suporte apenas a uma frase mnemônica. Você pode usar uma frase mnemônica do aplicativo móvel para acessar [polkaswap.io](http://polkaswap.io) ou [test.polkaswap.io](http://test.polkaswap.io) e vice-versa.

Por exemplo, minha frase mnemônica é:

`frango vale olhar dispositivo à prova de geada ajustar dedo do pé elite óbvio clube rápido`

Você pode restaurar a conta no plugin do navegador Polkadot.

1. Clique no sinal ➕ e clique em **Importar conta de seed pré-existente**:

 ![](.gitbook/assets/restore-account-import.png)

2. Em seguida, insira a frase mnemônica e clique em **Avançar**:

 ![](.gitbook/assets/restore-account-enter-mnemonic.png)

3. Em seguida, insira o nome da conta, defina uma senha e prossiga.

 ![](.gitbook/assets/restore-account-setup.png)

Ótimo, você acabou de restaurar sua conta!

![](.gitbook/assets/restore-account-restored.png)

O processo é o mesmo para o aplicativo móvel:

1. Abra o aplicativo móvel e toque em **Importar conta**.

 ![](.gitbook/assets/restore-account-sora-import.png)

2. Insira o nome da conta e a frase mnemônica.

 ![](.gitbook/assets/restore-account-sora-enter-mnemonic.png)

3. Em seguida, defina e confirme um código PIN.

 ![](.gitbook/assets/restore-account-sora-enter-pin.png)

4. Depois disso, você terá acesso à conta.

 ![](.gitbook/assets/restore-account-biometry-auth.png)

#### Converter formato de endereço

Conforme mencionado anteriormente, as redes Substrate usam diferentes prefixos de endereço para gerar endereços. No entanto, o par de chaves é o mesmo. Se você criar uma conta, mas obtiver o endereço sem o prefixo `cn`, poderá convertê-lo usando o [conversor de endereço Subscan](https://sora.subscan.io/tools/ss58_transform).

![](.gitbook/assets/convert-address-subscan-converter.png)

Basta inserir seu endereço e clicar em **Transformar**. Você pode especificar o tipo de saída. Por padrão, a ferramenta Subscan converterá o endereço para todos os formatos de rede suportados.

![](.gitbook/assets/convert-address-transform.png)