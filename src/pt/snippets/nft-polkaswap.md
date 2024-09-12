### Cunhagem de tokens

1. Acesse [Polkaswap](https://polkaswap.io/#/wallet) e navegue até a conta.
2. Clique no ícone de círculo no canto superior direito da visualização da conta:

<center><img src="/.gitbook/assets/nft-add-asset.png" width="400"></center>

3. Selecione a guia NFT e prepare-se para cunhar seu primeiro NFT na rede SORA.

<center><img src="/.gitbook/assets/nft-add-asset-select-nft.png" width="400"></center>

4. Na interface de criação de NFT, você poderá cunhar seus NFTs não fungíveis.

    <center><img src="/.gitbook/assets/nft-add-asset-upload-nft.png" width="400"></center>

   Aqui está uma visão geral dos campos disponíveis:

   - Para adicionar o arquivo você pode usar um **link IPFS** ou alternativamente você pode **carregar um arquivo** do seu armazenamento local.
   - Então você deve atribuir um **símbolo de token** com **máximo 7 caracteres**. Tenha isso em mente, pois você precisará do símbolo do token mais tarde, ao importar o NFT para sua carteira.
   - **Nome do token** é semelhante ao símbolo do token, mas tem um limite de 33 caracteres.
   - Token **Descrição** responde a perguntas como: do que se trata o seu token? O que torna seu token especial? Você pode dar asas à sua imaginação aqui ou adicionar uma descrição genérica.
   - Em **Fornecimento de Tokens**, especifique quantos tokens você deseja cunhar.
   - Use interruptores para escolher se deseja cunhar mais tokens com base nisso (fornecimento extensível) ou se deseja que seu NFT possa ser dividido em partes fracionárias (divisível). Mais informações sobre esta opção estarão disponíveis em breve.

Agora que você sabe como é a interface do NFT e quais informações você precisa fornecer, vamos criar um NFT!

#### Tutorial

Para este exemplo, cunharemos o _Templo do Deus do Vento, das ruínas maias de Tulum_. Também temos um [link IPFS para a imagem](https://ipfs.io/ipfs/QmUwzJpeewVQoKvzaMXwskyZcwWf9SrbQTUuuwX8ppXcNu?filename=Tulum.jpeg).

1. Cole o URL no campo de link IPFS e deixe a imagem carregar.

<center><img src="/.gitbook/assets/nft-paste-ipfs-link.png" width="400"></center>

2. Assim que a imagem estiver visível, adicione o símbolo do token, nome, descrição e quantas cópias você deseja cunhar.

<center><img src="/.gitbook/assets/nft-provide-nft-description.png" width="400"></center>

3. Escolha se deseja cunhar mais tokens com base nisso. Se quiser que o token seja divisível, certifique-se de ter fundos suficientes para a taxa de transação e clique em **Criar NFT**.

   ::: Informação
   Se você quiser agrupar um NFT, ele deve ser **Divisível**.
   :::

   <center><img src="/.gitbook/assets/nft-create-nft.png" width="400"></center>

4. Na tela de confirmação, verifique se todas as informações inseridas estão corretas, depois clique em confirmar e assine a transação com sua carteira. Você será solicitado a assinar usando o complemento do navegador [Polkadot.js](https://polkadot.js.org/extension/).

<center><img src="/.gitbook/assets/nft-creation-confirm.png" width="400"></center>

5. Depois que o NFT for cunhado, navegue até a guia **Atividade** na visualização da sua conta e certifique-se de que o ativo apareça como **registrado**.

<center><img src="/.gitbook/assets/nft-view-activity.png" width="400"></center>

_Você criou um NFT com sucesso!_

Mas você ainda não consegue vê-lo em seus ativos... **É aqui que o símbolo do token entra em ação.**

### Adicione tokens à sua carteira

1. Volte para a guia **Ativos** na visualização da sua conta, role até o final da lista e clique no botão **Adicionar ativo**.

<center><img src="/.gitbook/assets/nft-add-tokens.png" width="400"></center>

2. Encontre o ativo na lista usando o símbolo do token atribuído e selecione o token.

<center><img src="/.gitbook/assets/nft-search-for-token.png" width="400"></center>

3. Assim que você selecioná-lo, você receberá um aviso de isenção de responsabilidade. Sempre certifique-se de que os tokens adicionados à sua conta sejam legítimos.

4. Depois de ativar o botão de aceitação, clique em **Adicionar ativo**.

<center><img src="/.gitbook/assets/nft-add-selected-asset.png" width="400"></center>

Seu NFT agora aparecerá na sua lista de ativos!

<center><img src="/.gitbook/assets/nft-view-assets-after-adding-asset.png" width="400"></center>

### Ver Tokens

O que você pode fazer com NFTs agora? Aqui está um rápido resumo.

Na visualização da sua conta, clique na seta para visualizar o conteúdo visual do seu NFT.

<center><img src="/.gitbook/assets/nft-view-token-select.png" width="400"></center>

Isso abrirá uma prévia do seu NFT. A partir daqui você pode fazer coisas como **enviar o token** para outro endereço, **copiar** o endereço do token ou **excluir o ativo** da sua carteira:

<center><img src="/.gitbook/assets/nft-options-for-selected-asset.png" width="400"></center>

<!-- * And other functions are explained below, such as [swapping the token](nfts.md#swapping-tokens), [adding liquidity](nfts.md#pooling-tokens), or bridging the token. (_Token Bridging functionality is still TBD_). -->

### Envio de tokens

Você pode enviar seu token recém-criado para outros endereços! Para fazer isso, você precisa do endereço do seu amigo e de algum XOR para as taxas de transferência.

1. Clique no botão enviar na visualização NFT:

   <center><img src="/.gitbook/assets/nft-send.png" width="400"></center>

   Uma confirmação aparecerá solicitando um endereço e a quantidade de tokens a serem enviados. Isso também mostrará a taxa de rede.

2. Verifique se tudo está correto e clique em enviar.

<center><img src="/.gitbook/assets/nft-send-confirm.png" width="400"></center>

3. Confirme mais uma vez se o endereço do destinatário está correto, confirme e assine a transação.

E isso e tudo! Você pode verificar o fornecimento de tokens novamente e verá que **NFT foi enviado**.

<center><img src="/.gitbook/assets/nft-send-check-token-supply.png" width="400"></center>

### Tokens de grupo

Embora não haja implementação de mercado NFT no Polkaswap (_all_), é possível agrupar NFTs que você possui, junto com XOR. Para que um NFT seja agrupado, ele deve ser **divisível**, então você só pode vender ou comprar uma fração dele. O pooling NFT funciona como qualquer outro pool de liquidez no Polkaswap e [também oferece as mesmas vantagens](../snippets/../provide-liquidity-to-xyk-pools). As etapas para agrupar seu NFT são as seguintes:

1. Na visualização do NFT dentro da sua carteira, clique no ícone 💧.

<center><img src="/.gitbook/assets/nft-pooling-add-liquidity.png" width="400"></center>

2. Selecione a quantidade de XOR para emparelhar com seu NFT. Você também pode adicionar mais de um NFT ao pool se quiser adicionar mais XOR.

<center><img src="/.gitbook/assets/nft-pooling-add-liquidity-confirm-selected-amounts.png" width="400"></center>

3. Confira novamente os dados e se estiver tudo correto clique em confirmar.

   Sua extensão Polkadot.js também exigirá que você assine uma transação. Depois de confirmado, você poderá visualizar seu pool NFT na [seção Pool no Polkaswap](https://polkaswap.io/#/pool/).

    <center><img src="/.gitbook/assets/nft-pooling-created-pool.png" width="400"></center>

Lembre-se de que você pode agrupar mais de um NFT por vez (_tantos tokens iguais quantos você tiver em sua carteira_).

Você também pode agrupar seu NFT diretamente na seção Pool em Polkaswap.

1. Você pode adicionar liquidez ou criar um par. Ao emparelhar com um NFT, o fluxo será o mesmo de emparelhar um NFT diretamente. Há uma etapa em comum com a adição de liquidez a um pool existente, que é a seleção inicial de tokens.

<center><img src="/.gitbook/assets/nft-pooling-add-or-create-a-pair.png" width="400"></center>

2. Clique em Personalizado para visualizar seu NFT e selecione aquele que você decidiu agrupar (_ou adicionar liquidez a um pool existente_).

<center><img src="/.gitbook/assets/nft-pooling-select-custom.png" width="400"></center>

3. Como antes, selecione o token e o valor da liquidez (neste caso 1 NFT e seu equivalente em XOR) e clique em Fornecer. Neste exemplo, adicionamos mais liquidez ao pool WINDTUL e XOR:

    <center><img src="/.gitbook/assets/nft-pooling-custom-add-liquidity.png" width="400"></center>

   Você receberá uma confirmação de sua carteira e o token fará parte de um pool de liquidez.

Alternativamente, você também pode adicionar ou remover liquidez de um par NFT diretamente do menu suspenso na visualização do pool Polkaswap:

<center><img src="/.gitbook/assets/nft-pooling-add-or-remove-liquidity-from-pool-view.png" width="400"></center>

### Troca de tokens

Por fim, você também pode trocar um NFT por outros tokens na tela de visualização;

1. Clique no botão de troca:

   <center><img src="/.gitbook/assets/nft-swap.png" width="400"></center>

   Será apresentada a você a familiar [interface de troca Polkaswap](https://polkaswap.io/#/swap) que permitirá que você troque seu NFT por outros tokens.

   ::: Informação
   Observe que negociar seu NFT dessa forma terá um impacto significativo no preço.
   :::

2. Escolha o token para trocar seu NFT:

<center><img src="/.gitbook/assets/nft-swap-select.png" width="400"></center>

3. Assim como nas demais funções, revise o resumo da transação e se estiver satisfeito com o resultado, clique em trocar e assine a transação na extensão Polkadot.js.

::: aviso

Você também pode comprar NFTs usando o recurso de troca; no entanto, você deve adicionar o NFT desejado à sua carteira como um ativo personalizado. A troca de XOR ou outros tokens por NFTs tem um impacto significativo no preço. Certifique-se de compreender esses riscos antes de negociar NFTs no Polkaswap.

:::
