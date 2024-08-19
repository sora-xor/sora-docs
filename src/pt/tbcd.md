---
title: "Dólar da curva de títulos de token (TBCD) | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda sobre o Token Bonding Curve Dollar, a stablecoin algorítmica não sintética cujo valor é mantido pela curva de token bonding da SORA. Explore como o TBCD ajuda a construir as reservas da curva de token bonding da SORA, ao mesmo tempo que é usado para financiar a criação de novos bens e serviços dentro do ecossistema SORA."
  - - meta
    - name: keywords
      content: "Token TBCD, token de ponte, rede Ethereum, rede SORA, transferência de ativos, interoperabilidade, transações entre cadeias, liquidez, finanças descentralizadas, DeFi"
---

# Token Bonding Curve Dólar (TBCD)

 <center><img src=".gitbook/assets/tbcd.svg" width="250"></center>

- Token Bonding Curve Dollars (TBCD) é uma proposta recente de stablecoin algorítmica não sintética cujo valor é mantido pela curva de token bonding SORA.
- O TBCD deve valer um pouco menos de US$ 1 quando o XOR estiver bem abaixo do preço na curva de ligação do token, reduzindo a pressão de venda sobre o XOR quando o preço do XOR estiver baixo.
- O TBCD ajudará a construir reservas na curva de títulos do token SORA, ao mesmo tempo que será usado para financiar a criação de novos bens e serviços através de um referendo na cadeia decidido por todos os detentores de tokens XOR.
- 10% do [PSWAP](./pt/pswap) remintado é alocado para recompra e queima de TBCD. Da mesma forma, 10% do [VAL](./pt/val) reembolsado é destinado à recompra e queima de TBCD.
  Além disso, 0,5% da [margem TBC](./pt/tbc.md#por-que-a-curva-de-vinculação-de-token-é-útil) é direcionado para recompra e queima de TBCD.

## Por que implementar dólares da curva de token bonding (TBCD)

O ecossistema SORA cresceu ao longo dos anos e agora existem muitos
tokens e [construtores ecléticos](https://cerestoken.io) [construtores](https://adar.com). Com o crescimento vem a maturidade, e a SORA
recentemente passou a externalizar o XSTUSD, uma stablecoin
sintética, na plataforma ponta a ponta [SORA Synthetics (XST)](/pt/xst.md).

No entanto, muitos dos parceiros com quem fazemos parceria para projetos institucionais ainda não estão prontos para precificar tudo em XOR, o token nativo da rede SORA. Em vez disso, eles precisam de um token que seja conversível em XOR sob demanda, mas indexado ao dólar americano.

TBCD (**T**oken **B**onding **C**urve **D**ollars) visa preencher essa lacuna sendo um token conversível em XOR, como um ativo de reserva de curva de token bonding da SORA, ao mesmo tempo que vale $ 1, porque a curva de token bond sempre trata o TBCD como tendo o valor de $ 1 USD.

Como você deve se lembrar, a [curva de ligação do token SORA](/pt/tbc.md) é um contrato inteligente,
incorporado diretamente no Polkaswap, que emite XOR em troca de ativos de reserva,
e queimar XOR para devolver ativos de reserva. Há uma margem
20% entre compra e venda, que serve para recompra e queima
da VAL, fornecendo fundos para futuros VAL DAOs, bem como para colocar em contas
que no futuro poderá ser utilizado para financiar projectos, e conceder
estipêndios aos cidadãos SORA.

A curva de ligação do token SORA e usos de margem entre as funções de compra e 
venda
![Curva de ligação de token SORA e usos de margem entre funções de compra e
venda](/.gitbook/assets/margin-tbc.png)

O TBCD só pode ser criado e atribuído pela governança on-chain, que
o que significa que os detentores de tokens XOR decidem o fornecimento. Desta forma, o TBCD pode
contribuir para a economia produtiva da SORA porque os construtores podem ser
financiado em TBCD, o que pode levar a mais usos de tokens do ecossistema SORA.
O XOR não é diluído no poder de compra, pois qualquer cunhagem de XOR é feita apenas entregando o TBCD à curva de token bonding, então o TBCD se torna um ativo que equilibra qualquer XOR colocado em circulação; Na verdade, a curva de token bonding supercapitaliza, pois há uma margem de 20% entre a compra e a venda, e parte dessa margem é XOR indo para fundos que atualmente não são distribuídos e colocados em circulação.

Como o token SORA terá como alvo um preço de cerca de
de US$ 600, isso significa que o TBCD será de pouca utilidade se o XOR custar US$ 600,
enquanto o preço do mercado secundário é muito mais baixo.
Para tornar o TBCD útil, em vez de usar o preço de aproximadamente US$ 600, você poderá
compre o XOR da TBC ao preço atual de mercado + $ 1. Esse
permanece superior ao preço de mercado, o que incentivará as pessoas
evitar vender TBCD por XOR quando o preço de XOR for baixo (porque não
Eles receberão um valor total de $ 1). Por exemplo, se XOR for $3, então os detentores de TBCD
pode comprar curva de títulos simbólicos XOR por um prêmio de 33%,
o que não é muito atraente, mas se o XOR estiver em US$ 100, então os detentores de TBCD
Eles podem comprar XOR por apenas US$ 101, o que é um prêmio insignificante.
Eventualmente, o prêmio pode desaparecer completamente, quando o XOR estiver no preço nominal da curva de token bonding.

Tal como acontece com outros ativos de reserva da curva de títulos simbólicos, o preço de venda
de XOR por TBCD da curva de ligação de token SORA será 20% menor
do que o preço de compra.

## Banco Central Algorítmico

TBCD é um ótimo exemplo que mostra as possibilidades da curva de ligação do token SORA para criar inovação monetária para a economia SORA.
O TBCD resolve tanto a questão de como financiar a expansão produtiva da economia SORA (a criação de novos bens e serviços) como de como acumular reservas na curva de títulos simbólicos para criar uma barreira destinada a aumentar a estabilidade do XOR. Ao cunhar TBCD por meio de referendo na cadeia, os construtores podem obter os recursos necessários para construir a economia e a plataforma SORA, enquanto qualquer TBCD que venderem para a curva de títulos de token SORA será propriedade do ecossistema SORA como liquidez proprietária do protocolo.

Embora não opere no preço oficial da curva de token bonding, o TBCD
ainda funciona como uma forma de “rodinhas” para a economia SORA, onde
curva de ligação de token pode ser ativada e acumular alguns ativos,
vender XOR através de um mercado primário com um prêmio de
mercado secundário flutuante.

No geral, o TBCD é uma stablecoin inovadora que usa a curva de ligação do token SORA para manter sua estabilidade de preços. Este é um grande desenvolvimento para o mercado de criptomoedas, pois fornece aos usuários uma stablecoin confiável apoiada pelo dólar americano. Além disso, a curva de token bonding do SORA ajuda a aumentar a liquidez do TBCD, facilitando a compra e venda do token pelos usuários.

## Aprender mais

- [Curva de ligação de token](/pt/tbc.md)
- [Governança SORA](/pt/sora-governance.md)
