---
title: Token SORA XST | Documentação SORA
head:
  - - meta
    - name: description
      content: Saiba mais sobre o XST, o stablecoin da rede SORA. Descubra os recursos, casos de uso e benefícios do XST no ecossistema SORA. Explora o seu papel como um ativo digital estável e confiável, permitindo a transferência eficiente de valor, reduzindo a volatilidade e apoiando diversas aplicações financeiras dentro da rede SORA.
  - - meta
    - name: keywords
      content: Token SORA XST, stablecoin, rede SORA, ativo digital, transferência de valor, redução de volatilidade, aplicações financeiras
---

# SORA Sintéticos

 <center><img src="/.gitbook/assets/xst.svg" width="250"></center>


SORA Synthetics são tokens vinculados a índices de segurança, apoiados por XST,
O primeiro ativo sintético da SORA é o XSTUSD indexado ao DAI. Os ativos SORA Synthetic XST para outras reservas importantes de valor estarão disponíveis em breve como parte da atualização SORA Synthetics no Polkaswap. XST foi [proposto como um
RFP](https://github.com/sora-xor/rfps/pull/8/files) e atualmente está ativo na rede SORA. Além disso, você tem a opção de explorar mais sobre a plataforma em geral em uma [página dedicada](/pt/synthetics.md).

## O dólar compensado pela Fisher

**XST** significa **XOR SynThetics** e é o token colateral usado para respaldar ativos sintéticos SORA vinculados a um índice de segurança. Mas _para começar, o que é um ativo sintético ou stablecoin?_

Muito antes de existirem criptomoedas (ou mesmo computadores digitais), [em 1912](https://dspace.gipe.ac.in/xmlui/bitstream/handle/10973/26798/GIPE-093010.pdf?sequence=3&isAllowed=y) , o economista americano [Irving Fisher](https://en.wikipedia.org/wiki/Irving_Fisher) questionou a instabilidade no poder de compra do dólar americano lastreado em ouro, explicando:

> “_Agora temos um dólar com peso fixo (25,8 grãos), mas com poder de compra variável. Segundo o plano proposto, teríamos um dólar de poder de compra fixo, mas de peso variável”. Isto se tornaria a base para o dólar “compensado”.

Em outras palavras, como o ouro era altamente volátil em termos de poder de compra, em vez de manter o dólar atrelado a uma certa quantidade de ouro, [propôs Fisher](https://www.richmondfed.org/~/media/richmondfedorg/publications/research/economic_quarterly/1993/summer/pdf/patinkin.pdf) que o dólar era apoiado por quantidades variáveis ​​de ouro, mas ligado a um cabaz de bens (um índice). Porém, naquela época, as ideias de Fisher não foram adotadas devido a problemas operacionais e de harmonização da economia da época.

Com o advento dos sistemas criptoeconômicos em blockchains, os princípios do dólar "compensado", a fundação de Fisher, poderiam finalmente ser traduzidos para o reino da criptoeconomia e receber uma nova vida como parte de um sistema criptoeconômico: "um token baseado em blockchain pode ser criado como um derivado de outro, destinado a manter uma unidade de valor estável”. A SORA Synthetics implementa este conceito e _de certa forma, você poderia dizer que Irving Fisher é o pai da SORA Synthetics_.

### Stablecoins e ativos sintéticos hoje

Atualmente, existem 5 tipos diferentes de stablecoins/ativos indexados:

- **Stablecoins apoiados por Fiat (ou Fiat Tokenizado):** Essas stablecoins são lastreadas e indexadas a dólares (ou outra moeda fiduciária), seu valor permanece vinculado ao preço da moeda indexada. Por exemplo, [USDC](https://www.circle.com/en/usdc).
- **Stablecoins apoiados por criptografia (ou Stablecoins garantidos na cadeia):** Estes são apoiados por outros ativos criptográficos. Por exemplo [DAI](https://makerdao.com/en/).
- **Stablecoins lastreados em metais preciosos (ou Stablecoins garantidos fora da cadeia):** Como o decreto padrão-ouro, essas stablecoins usam ouro e outros metais para garantir seu valor. Por exemplo [Tether Gold](https://gold.tether.to/).
- **Stablecoins algorítmicos:** Esses stablecoins usam algoritmos para suportar seu valor. Existem algumas variantes que podem ser vinculadas a valores fiduciários, dependendo do algoritmo utilizado. Por exemplo, [AMPL](https://www.ampleforth.org/).
- **Ativos sintéticos:** São tokens com valor vinculado a um ativo oracleizado. Ativos puramente sintéticos podem ser usados ​​para acompanhar as ações de instrumentos financeiros e títulos e podem representar muitos tipos de valor. Por exemplo, [SYNTHETIX](https://synthetix.io/).

XSTUSD é uma stablecoin algorítmica para o ecossistema SORA, proposta inicialmente em 2018, com base nas ideias de dólar compensado de Irving Fisher. No entanto, em vez de serem apoiados por ouro, os SORA Synthetics são apoiados por XST.

## O que torna o SORA XST diferente?

Agora que stablecoins e ativos sintéticos foram definidos e classificados, você pode estar se perguntando o que faz o XST se destacar dos demais?

O XST ajuda a resolver o problema de liquidez do XOR criando ativos sintéticos lastreados por uma quantidade variável de XST e indexados a um índice alvo (por exemplo, uma moeda). O XST é cunhado/descoinedado para garantir sempre o valor do índice vinculado. O primeiro índice implementado está vinculado ao valor do DAI e se chama XSTUSD.

### Estabilidade não garantida

No caso do SORA Synthetics, como eles são apoiados pelo XST, o XST pode ser cunhado ou desmonetizado (queimado) algoritmicamente para fornecer o valor total do SORA Synthetics sob demanda. O formador de mercado primário XST que cunha/desmonetiza SORA Synthetics e XST é integrado como fonte de liquidez no agregador de liquidez Polkaswap. Isso significa que compradores e vendedores sempre obterão o valor total em XST por seus SORA Synthetics, e o preço nunca se desviará (para baixo ou para cima) do preço do ativo. Portanto, a SORA Synthetics não está sujeita a derrapagens de preços ou falta de liquidez. Isso funciona, por exemplo, no caso de XSTUSD, porque um único XSTUSD é uma reivindicação de $1 USD _no valor XST_ e **não uma reivindicação de $USD em si**.

Com stablecoins regulares (_especificamente aquelas lastreadas em fiduciários_), o ajuste do valor da garantia e do valor das stablecoins emitidas não é automático. Isto se deve a alterações nos preços das garantias e, portanto, é necessário sobregarantir. Com tokens estáveis ​​como o DAI, por exemplo, você precisa bloquear 130% do valor em ETH para cunhar um novo DAI, e seu cofre será liquidado se você cair abaixo do nível de garantia exigido.

SORA Synthetics não exige sobrecolateralização e os usuários de SORA Synthetics não correm o risco de liquidação. Isso ocorre porque o novo XST sempre pode ser cunhado para fornecer o valor total de um ativo sintético, trocando-o de volta por XST.

Normalmente, as stablecoins algorítmicas derivam seu valor de contratos inteligentes vinculados a oráculos que determinam os preços atuais, no entanto, o valor do XSTUSD é atualmente derivado do preço do XOR-DAI.

## Como é implementado?

A implementação do XST é um tópico bastante interessante, no entanto, ainda
não está completo. A RFP propondo a implementação do XSTUSD foi
publicado e agora a cavalaria de desenvolvimento e testes está
no curso. O cenário de implantação inclui lista de permissões XSTUSD em
Polkaswap e posteriormente configurar uma fonte de liquidez, conforme mencionado
anteriormente, onde o preço que os usuários pagam nunca se desviaria do preço
de XOR-DAI.
![](/.gitbook/assets/xst-buy-sell.png)

Alguns detalhes mais interessantes disponíveis na [RFP XSTUSD](https://github.com/sora-xor/rfps/pull/8/files) mencionam: "Se o preço XSTUSD-XOR for menor que DAI-XOR, então quando o usuário está comprando, um novo XOR será cunhado e usado para atender ao pedido (semelhante à curva de títulos simbólicos quando o XSTUSD é comprado com títulos). Antes que você pergunte quando, não há uma resposta concreta _...por enquanto._

A implementação do SORA Synthetics é apenas o começo, outra implementação interessante ligada a isso é [SORA Social Insurance](social-insurance.md).

Enquanto isso, você pode encontrar XSTUSD em [Polkaswap](https://polkaswap.io/). O ID do ativo de Você também pode acessar todos os ativos sintéticos no Polkaswap visitando a [página da carteira](https://polkaswap.io/#/wallet) e ativando o sinalizador `Mostrar apenas tokens sintéticos` na IU, conforme mostrado na tela abaixo:

![](/.gitbook/assets/polkaswap-show-only-synthetics.png)

Você também pode trocar esses ativos. Veja como trocar XOR por XSTUSD e vice-versa:

![](/.gitbook/assets/xstusd-demo1.png)

Após clicar em SWAP, você receberá uma mensagem de confirmação com
os detalhes da transação. Clique em CONFIRMAR e assine a transação com
Extensão do navegador Polkadot.js na janela pop-up.

![](/.gitbook/assets/xstusd-demo2.png)

Finalmente, se você estiver interessado em como funciona o sistema SORA RFP, verifique este guia completo em [Novos recursos propostos para Polkaswap e a rede SORA](rfp.md).

---

**Fontes**:

Kołodziejczyk, H. e Jarno, K. (2020). Stablecoin – a criptomoeda estável. Studia BAS, 3(63), 155–170. https://doi.org/10.31268/StudiaBAS.2020.26

JM Keynes, Irving Fisher, Harry G. Brown. O poder de compra do dinheiro: sua determinação e relação com crédito, juros e crise, The Economic Journal, Volume 21, Edição 83, 1 de setembro de 1911, páginas 393–398, https://doi.org/10.2307/2222328

Patinkin, D. (sd). Irving Fisher e seu plano de dólar compensado. 3. 4.

Takemiya, M. (2019). SORA: Uma Economia Autônoma Descentralizada. Conferência Internacional IEEE 2019 sobre Blockchain e Criptomoeda (ICBC). doi:10.1109/BLOC.2019.8751489

## Aprender mais

- [Sintéticos SORA](/pt/synthetics.md)
- [Economia SORA](/pt/sora-economy.md)
