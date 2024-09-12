É muito fácil alternar entre diferentes nós. Você pode alterar os nós no rodapé de status na parte inferior da tela.

1. Clique no status Nó Conectado:

   <center><img src="/.gitbook/assets/nodes-switch.png" width="400"></center>

   Você verá então o nó ao qual está conectado.

2. Clique em Selecionar nó de rede para alterar o nó:

   <center><img src="/.gitbook/assets/nodes-select.png" width="400"></center>

   ::: Informação
   Se você deseja adicionar seu próprio nó, crie uma solicitação pull no [repositório Polkaswap GitHub.](https://github.com/sora-xor/polkaswap-exchange-web).
   :::

   - Se você deseja alterar os nós para um dos predefinidos, basta clicar no botão de opção próximo ao nó com o qual deseja trabalhar. A seguir será verificada a conexão com o nó. Se tudo estiver bem, o nó será alterado.

       <center><img src="/.gitbook/assets/nodes-select-predefined.png" width="400"></center>

   - Se desejar usar um nó personalizado, clique no botão **Adicionar nó personalizado**. Insira um nome de nó (_qualquer nome que você desejar_) e um endereço e clique em **Adicionar nó personalizado**:

       <center><img src="/.gitbook/assets/nodes-select-custom.png" width="400"></center>

#### Erro de rede incorreto

Se você tentar adicionar um nó de uma rede diferente, receberá um erro. No exemplo a seguir, tentamos adicionar um nó Mainnet em [Testnet](https://test.polkaswap.io/#/swap). **O aplicativo verifica o hash do bloco genesis antes de mudar para o nó.**

<center><img src="/.gitbook/assets/nodes-wrong-network-error.png" width="400"></center>
