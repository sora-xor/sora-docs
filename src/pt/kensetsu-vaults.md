# Plataforma Kensetsu

## Teoria

### Descrição geral da plataforma

Kensetsu é uma plataforma de stablecoin sobrecolateralizada, começando com um ativo estável atrelado ao USD. É um análogo ao MakerDAO no ecossistema SORA.  
O token nativo da plataforma Kensetsu é o token KEN, que é usado para farming e recompensas do protocolo.

### Principais Recursos - Empréstimo de KUSD (colateral disponível, parâmetros). Processo de Cálculo de Taxas

Um Vault é a entidade principal que opera na plataforma Kensetsu. O Vault possui os seguintes parâmetros;

- **Token colateral** — Um token que opera como colateral em operações de empréstimo. A plataforma Kensetsu opera com seis tokens principais: XOR, VAL, TBCD, PSWAP, ETH e DAI.
- **Dívida em token emprestado** - Isso mostra a quantidade de dívida que o usuário emprestou. A plataforma Kensetsu permite o empréstimo de tokens KUSD atrelados ao USD.
- **Quantidade de colateral** - Exibe quanto um usuário depositou no token colateral para garantir o empréstimo.
- **Disponível para empréstimo** - Indica quanto um usuário pode emprestar até que seu vault seja liquidado.
- **LTV (loan-to-value)** - A relação da dívida com o valor do colateral em seu vault, calculada como uma porcentagem.
- **Taxa de Estabilidade** - Uma taxa anual sobre o valor retirado do seu vault, calculada como uma porcentagem.
- **Taxa de Empréstimo** - uma taxa aplicada ao valor do empréstimo, estabelecida em 1%.
- **Penalidade de Liquidação** - uma taxa aplicada se o valor do seu colateral cair abaixo de um certo limite, levando à venda de ativos para cobrir a dívida. Essa penalidade aumenta a dívida.

### Ações principais disponíveis para usuários:

- **Criar um vault** — Esta operação permite que os usuários criem um vault na plataforma Kensetsu. Os usuários devem depositar alguns tokens colaterais para criar um vault. Não é possível criar vaults vazios sem tokens colaterais, mas é possível criar um vault sem tokens emprestados.

Os tokens colaterais disponíveis no Kensetsu são:

- XOR - `0x0200000000000000000000000000000000000000000000000000000000000000`
- VAL - `0x0200040000000000000000000000000000000000000000000000000000000000`
- PSWAP - `0x0200050000000000000000000000000000000000000000000000000000000000`
- TBCD - `0x02000a0000000000000000000000000000000000000000000000000000000000`
- ETH - `0x0200070000000000000000000000000000000000000000000000000000000000`
- DAI - `0x0200060000000000000000000000000000000000000000000000000000000000`

* **Depositar colateral** — Os usuários podem adicionar colateral para tornar a relação LTV mais segura e permitir o empréstimo de mais.

* **Empréstimo** — Users borrow KUSD tokens, which are pegged to the USD value. The amount of tokens available to borrow is calculated based on the risk parameters of the Kensetsu platform.
  Users can borrow tokens in existing vaults if the tokens available to borrow are more than zero.

* **RepayDebt** - Os usuários emprestam tokens KUSD, que estão atrelados ao valor do USD. A quantidade de tokens disponível para empréstimo é calculada com base nos parâmetros de risco da plataforma Kensetsu.

* **Fechar Vault** - Reembolsa a dívida pendente e recupera todo o colateral depositado. Falhará se o usuário não tiver KUSD suficiente para cobrir a dívida. Esta ação destrói o CDP.

* **Liquidação** - A liquidação é o processo de venda do token colateral do vault. O Kensetsu liquidará alguns dos tokens colaterais até que a métrica LTV (loan-to-value) fique abaixo do limite de liquidação.

::: Informações
Como evitar a liquidação de um vault?

- **Empréstimo de tokens com menos de 50% de LTV** — Isso lhe dará tempo suficiente para pagar a taxa de estabilidade e se proteger caso o token colateral flutue.
- **Adicionar colateral**—O Kensetsu permite o depósito de tokens colaterais adicionais, o que diminui a LTV.
  :::

### Como a taxa de estabilidade é utilizada (recompra, queima, farming)

A taxa de estabilidade que será cobrada desses vaults será usada em um fundo de estabilidade com vários propósitos:

- **Estabilização do KUSD** - Mantém a estabilidade do peg cobrindo dívidas inadimplentes.
- **Programa de Incentivo** - Recompra do token KEN e envio do token KEN como recompensa para os detentores de tokens LP XOR-KUSD na plataforma de farming Demeter.

## Programa de Incentivo

### Como Abrir um Vault no Kensetsu

1. Navegue para Polkaswap.io/#/vaults

![](/.gitbook/assets/ken-vaults-intro.png)

::: informações
O Kensetsu ainda não foi lançado na mainnet. Você pode testar os recursos na [Testnet do Polkaswap](https://test.polkaswap.io/#/vaults/).
:::

![](/.gitbook/assets/ken-vaults-borrow.png)

A interface de criação de vault possui vários campos de entrada:

- **Quantidade de colateral a depositar** - Este campo corresponde ao token colateral.
- **Empréstimo de dívida** - Este campo corresponde à quantidade de KUSD emprestado.
- **Detalhes da transação** - Aqui, você verá um resumo das informações sobre o vault criado e os detalhes da transação.

2. Selecione o ativo de origem (o ativo que você gostaria de usar como colateral). Clique no menu suspenso do ativo para selecioná-lo.

![](/.gitbook/assets/ken-vaults-assets.png)

Os ativos da sua carteira serão listados por padrão. Atualmente, suporta os 6 tokens colaterais. Você pode encontrar e adicionar qualquer ativo digitando seu ID ou nome no campo de busca. Os ativos em whitelist serão listados.

![](/.gitbook/assets/ken-vaults-open.png)

3. Para abrir uma posição de empréstimo, insira o ativo que você deseja definir como colateral.

Estes são os parâmetros visíveis na interface de Abrir Posição:

- **Tolerância ao slippage**—Os valores na tela são calculados para o momento em que você está emprestando. A taxa de câmbio pode mudar antes de você assinar e enviar a transação. Sua transação será revertida se o preço mudar desfavoravelmente em mais do que essa porcentagem.
- **Colateral Mínimo a Depositar**- These are the minimum assets required to create a vault. This initial deposit collateral secures the funds you wish to borrow.
- **Máximo Disponível para Empréstimo**- Estes são os ativos mínimos necessários para criar um vault. Este depósito inicial de colateral garante os fundos que você deseja emprestar.
- **Taxa de Empréstimo**- Esta é uma taxa de 1% aplicada ao valor emprestado.
- **Relação Empréstimo/Valor (LTV)** Esta é a proporção entre o valor emprestado e o valor do seu colateral no seu vault, expressa como uma porcentagem. Um LTV mais alto aumenta os retornos potenciais e o risco, incluindo a chance de liquidação.
- **Taxa de Estabilidade**—Esta é uma taxa anual calculada como uma porcentagem do valor retirado do seu vault.
- **Taxa de Rede**- Esta é a taxa de transação da rede (gas).

4. Se você estiver pronto para emprestar, clique em **Abrir Vault**. Em seguida, verifique os detalhes cuidadosamente e, se tudo estiver correto, confirme e assine a transação.

Parabéns, você configurou seu vault Kensetsu com sucesso.

:::informações
As imagens fornecidas neste tutorial correspondem à Testnet do Kensetsu e podem estar sujeitas a alterações quando lançadas na mainnet.
:::

## Saber mais

- [KEN Tokenomics](/pt/ken.md)
- [Solicitação de Recursos na SORA](/pt/rfp.md)
