# Livros de Ordens

::: informações

Se você é novo no Livros de Ordens e deseja entender seus mecanismos básicos, recomendamos assistir ao seguinte vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kl4-VJ2K8Ik" title="YouTube Video Player" frameborder="0" permitir="acelerômetro; reprodução automática; gravação na área de transferência; mídia criptografada;
:::

## Caso de uso

Um livro de ordens é um componente fundamental de uma bolsa descentralizada (DEX) que facilita a negociação de ativos digitais entre compradores e vendedores de forma transparente e eficiente. Ele atua como um meta livro virtual que registra todas as ordens de compra e venda colocadas pelos participantes do mercado.

Ao aproveitar o poder da tecnologia blockchain, os livro de ordens em exchanges descentralizadas oferecem diversas vantagens:

- **Melhor compreensão do preço**: Compradores e vendedores poderão ver ofertas reais, permitindo-lhes tomar decisões mais informadas sobre o verdadeiro valor de mercado dos ativos. Isso pode levar a negociações mais eficientes.
- **Maior liquidez**: Compradores e vendedores terão maior controle sobre os preços pelos quais negociam. Isto ajuda a atrair mais participantes para o mercado, levando a uma maior liquidez e a um mercado mais dinâmico.
- **Fonte adicional de liquidez para o Liquidity Proxy**: Os traders terão uma opção alternativa de usar o Liquidity Proxy, o que pode impactar positivamente os resultados das negociações.
- **Deslizamento reduzido**: Nos mercados XYK, grandes negociações podem causar oscilações de preços significativas devido ao impacto do tamanho da negociação no preço de mercado. Com os livros de ordens, os traders podem colocar ordens com limite ao preço desejado, reduzindo o risco de derrapagem.
- **Mais opções de negociação**: Os traders terão acesso a vários mecanismos de negociação, incluindo ordens de mercado, ordens de limite, ordens de stop e muito mais. Isto pode levar a estratégias de negociação mais sofisticadas e a uma melhor gestão de risco.
- **Mercado alternativo para negociação de NFT**: NFTs podem ter seu próprio livros de ordens, onde os usuários podem colocar ordens de compra e venda. Embora possa não ser o mecanismo ideal para negociação de NFT devido à sua singularidade e à necessidade de volume personalizado e etapas de preço (modelos de leilão ou mecanismos ponto a ponto onde compradores e vendedores podem negociar diretamente o preço dos NFTs), no livro de ordens, onde o mecanismo pode ser mais relevante para a negociação de NFT em comparação com o Pool XYK.
- **Outros benefícios herdados dos recursos DEX**:
 - _Acessibilidade sem permissão_: DEXs permitem que qualquer pessoa participe da negociação de ativos digitais sem um intermediário centralizado. Isto promove a inclusão financeira e fornece acesso a uma base global de utilizadores, independentemente da localização geográfica.
 - _Propriedade e controle aprimorados_: todos os ativos permanecem sob propriedade e controle dos usuários.
 - _Transparência_: Os usuários podem verificar a autenticidade, o histórico de propriedade e os dados de transações, construindo confiança e reduzindo o risco de fraude ou manipulação por um intermediário centralizado.
 - _Benefícios da descentralização_: Redução dos riscos de hacks, tempo de inatividade ou violações de dados associados a plataformas centralizadas.
- _Desenvolvimento orientado pela comunidade_: Os próprios usuários podem criar livros de ordens, contribuir para a liquidez, definir seus próprios parâmetros de negociação e influenciar o desenvolvimento usando ferramentas de governança descentralizadas. Isto incentiva a inovação, a concorrência e um ecossistema vibrante.

Embora as carteiras de encomendas em bolsas descentralizadas ofereçam inúmeros benefícios, é importante considerar as suas limitações:

- **Escalabilidade**: Blockchains têm limitações no processamento de volumes de transações.
- **Gerenciamento dos livros de ordens**: Em sistemas centralizados, o operador da bolsa pode gerenciar os livros de ordens e garantir seu funcionamento eficiente. Nas implementações descentralizadas dos livros de ordens, o gerenciamento é deixado para os usuários, o que pode levar a erros, ineficiências e possível manipulação.

## Instruções passo a passo

Nesta seção, você descobrirá como executar diferentes operações associadas à carteira de ordens e todas as suas entidades na blockchain SORA.

### Operações com ordens

Sugerimos realizar operações de ordens, como colocar um pedido com limite ou cancelar um pedido com limite, diretamente no Polkaswap. Você pode encontrar exemplos dessas ações em um [guia dedicado](./polkaswap-order-book-trading).

### Operações dos livros de ordens

A execução de operações relacionadas aos livros de ordens, como a criação de um novo livro de ordens, a exclusão de uma existente, a atualização de seus detalhes ou a alteração de seu estado, exige a conclusão por meio de governança na cadeia e está sujeita à votação da comunidade. Este processo democrático reflecte práticas existentes utilizadas noutros contextos.

Por exemplo, digamos que você queira criar um novo par de negociação para os livros de ordens. Primeiro, você precisará obter os dados da chamada. Para fazer isso, navegue até `polkadot.js` (ou dotapps.io) e vá para a guia `Desenvolvedor` -> `Extrínsecos`. Localize o extrínseco [`orderbook.createOrderbook`](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html#variant.create_orderbook) e preencha-o com os parâmetros desejados (consulte para o [modelo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/extrinsics/decode/0x39000000000000000000000000000000000000000000000000000 000000000000000000000000000000000000000000000000000000000000000000000 000000000000000000000000000000000000000000000000000000000000000) fornecido).

Depois de preencher o extrínseco, copie seus calldata codificados. Em seguida, consulte a [documentação oficial de governança](https://wiki.polkadot.network/docs/maintain-guides-democracy). Recomendamos criar uma pré-imagem com os dados de chamada copiados. Depois de concluída, você pode iniciar uma proposta pública ou entrar em contato diretamente com a equipe do conselho para agilizar a colocação de sua proposta na fila externa. Dependendo das circunstâncias, uma proposta técnica pode acelerar ainda mais o processo.

## Desenvolvimento

Se você tem experiência em RUST e Substrate, convidamos você a explorar nossa base de código dedicada a encomendar livros. Seguindo [este link](https://github.com/sora-xor/sora2-network/tree/master/pallets/order-book), você terá acesso ao código-fonte, permitindo que você se aprofunde nos detalhes da implementação e funcionalidades dos livros de ordens dentro do SORA.

Para maior transparência no desenvolvimento dos livros de ordens, recomendamos explorar o [marco do GitHub](https://github.com/sora-xor/sora2-network/milestone/4) correspondente. Isso fornecerá informações adicionais sobre o progresso e o progresso na implementação dos livros de ordens.

### Modelo de dados

Você pode revisar a lista abaixo para obter uma compreensão mais profunda dos modelos de dados de cada componente que pode ser criado usando esta API:

- [Chamadas](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html)
- [Erros](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Error.html#variants)
- [Eventos](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Event.html#variants)
- [Armazenamento](https://sora-xor.github.io/sora2-network/order_book/pallet/index.html#types)
- [Mais informações](https://sora-xor.github.io/sora2-network/order_book/index.html#reexport.UserOrders)

### Exemplo de integração

Aqui está um trecho de código escrito em JS:

::: grupo de códigos

```ts [ts]
importar {api} de "@sora-substrate/util";
importar { PriceVariant } de "@sora-substrate/liquidity-proxy";

importar { atraso, withConnectedAccount } de "./util";

função assíncrona main(): Promise<void> {
 aguarde comConnectedAccount(async() => {
 const xor =
 "0x0200000000000000000000000000000000000000000000000000000";
 const val =
 "0x020004000000000000000000000000000000000000000000000000000";
 conta const = "cnVkoGs3rEMqLqY27c2nfVXJRGdzNJk2ns78DcqtppaSRe8qm";

 const orderBooks = aguarda api.orderBook.getOrderBooks();
 console.log("orderBooks", orderBooks);

 aguarde api.orderBook.getUserOrderBooks(conta);

    api.orderBook
 .subscribeOnUserLimitOrdersIds(val, xor, conta)
 .subscribe((ids) => {
 console.log("IDs", IDs);
 });

 ordem const = aguarda api.orderBook.getLimitOrder (val, xor, 16);
 console.log("order", order);

 api.orderBook.subscribeOnAggregatedAsks(val, xor).subscribe((perguntas) => {
 console.log("pergunta", pergunta);
 });

 api.orderBook.subscribeOnAggregatedBids(val, xor).subscribe((lances) => {
 console.log("lances", lances);
 });

 preço const = "110000000000000000";
 quantidade const = "10000000000000000000";
 lado const: PriceVariant = PriceVariant.Buy;

 aguarde api.orderBook.placeLimitOrder(val, xor, preço, quantidade, lado);

 aguardar atraso (100000);
 });
}

principal()
 .catch(console.error)
 .finalmente(() => process.exit());
```

:::

Esses exemplos de código demonstram diversas funcionalidades, desde o gerenciamento de assinaturas de armazenamento até a execução de funções extrínsecas.
