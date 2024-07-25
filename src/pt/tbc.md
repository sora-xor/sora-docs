---
title: Curva de ligação de token SORA (TBC) | Documentação SORA
head:
  - - meta
    - name: description
	  content: Aprenda sobre o TBC (Token Bonding Curve), um modelo de token exclusivo na rede SORA. Descubra os recursos, a mecânica e os benefícios do TBC, incluindo sua emissão contínua de tokens e mecanismo de curva de títulos.
  - - meta
    - name: keywords
      content: Token Bonding Curve, rede SORA, emissão contínua de tokens, mecanismo de curva de ligação, liquidez, estabilidade, participação da comunidade
---

# Curva de ligação de token

A [curva de ligação de token](https://medium.com/coinmonks/token-bonding-curves-explained-7a9332198e0e) (TBC) gerencia o fornecimento de tokens de forma racional, sem intervenção humana, para criar um sistema que evite o boom e acabar com os problemas das economias tradicionais e a economia deflacionária de muitas criptomoedas.

Um TBC é um contrato inteligente que recebe a entrada de um token e produz um novo token. Isso cria uma infinidade de variações possíveis para impulsionar uma área interessante de pesquisa, mas na SORA usamos um modelo simples onde existem duas funções lineares: uma função **Preço de compra** e uma função **Preço de venda**.

![O mercado primário é TBC, o mercado secundário é Polkaswap/Uniswap.](.gitbook/assets/tbc(2).png)

Em termos simples, a curva de token bonding é essencialmente um banco central descentralizado com liquidez infinita. A qualquer momento, você pode comprar XOR recém-criado da curva de títulos de token usando **ativos de reserva** específicos ou vender seus tokens XOR (que queimam instantaneamente) por um desses ativos.

Além disso, como as funções de preço da curva de ligação do token são inclinadas para cima, o **preço aumenta com a oferta do token**. Observe que com uma curva de token bonding, **o preço e a oferta XOR estão correlacionados** e se movem de acordo.

<figure><img src=".gitbook/assets/xor-supply-correct.png" alt=""><figcaption><p>O preço aumentará quando a oferta aumentar e vice-versa</p></figcaption></figure>

Outra implicação importante deste mecanismo é que o preço do XOR no mercado secundário (Polkaswap, Uniswap, CEXs...) tende a ser limitado a uma determinada faixa de preço (ilustrada como o triângulo vermelho no diagrama). Na verdade, se um usuário negociar XOR fora dessa faixa, ele criará uma **oportunidade de arbitragem** para comprar/vender redução desta forma.

## Por que a curva de vinculação de token é útil?

- **Gerenciamento Autônomo do Fornecimento de Tokens para Corresponder à Demanda (Fornecimento Elástico)**. A curva de token bonding introduz e remove o XOR de circulação para atender à demanda do mercado. Isto garante o crescimento econômico sustentável e a estabilidade de preços da economia simbólica, uma vez que o sistema pode adaptar-se às novas necessidades.
- **Liquidez Profunda e Imediata**. O contrato de curva de títulos é a contraparte da transação e sempre mantém reservas de recompra suficientes (_leia mais sobre isso abaixo no parágrafo “Cenários Ideais e Reais”_).
- Mitiga as influências da inflação do mercado e ataques de crash/manipulação.
- A política monetária descentralizada da XOR oferece proteção contra abusos por parte das autoridades e total transparência para os utilizadores.
- A reserva de recompra no mercado primário limita a capacidade dos governos ou dos vendedores a descoberto de manipular o mercado.
- O sistema monetário do SORA v2 não é baseado em dívida nem impulsionado pela dívida, e os novos tokens são sempre atribuídos sob supervisão democrática, ajudando a eliminar ciclos insustentáveis ​​de expansão e recessão nos sistemas econômicos contemporâneos.
- Os preços atuais de compra/venda oferecidos pela curva token bonding fornecem níveis de suporte e resistência, ou uma faixa de confiança para o preço do XOR no mercado, com orientação futura.
- 20% do valor adquirido na função de compras é reservado aos diferentes atores da rede SORA:
  - 1% vai para recompra e queima de [VAL](./val)
  - 9% da sua utilização é decidida pelos titulares de [VAL](./val), principalmente para cedência de liquidez
  - 0,1% é dado aos cidadãos
  - 0,4% é dado a lojas e compradores
  - 0,5% é usado para recomprar e queimar [TBCD](./tbcd)
  - 9% é usado para projetos

![](.gitbook/assets/margin-tbc.png)

Embora a economia SORA esteja em sua fase inicial, a curva de ligação de tokens desempenha um papel crucial na manutenção da propriedade de valor de refúgio seguro do XOR. A capacidade de definir faixas de confiança para movimentos de preços simbólicos reduz a barreira psicológica para a aceitação de XOR para pagamentos.

É importante notar que **a curva de token bonding não garante a estabilidade de preços XOR**, mas sim uma medida de previsibilidade de preços [orientada para o futuro](https://www.ecb.europa.eu/explainers/tell-me/html/what-is-forward_guidance.en.html).

## Cenários ideais e reais

Agora nos concentramos nas **reservas**, que desempenham um papel crucial no mecanismo TBC.

No lançamento da rede SORA v2, já existirão 350.000 XOR. Isso significa que a curva de ligação do token SORA terá uma obrigação não financiada de 350.000 XOR no valor DAI, 350.000 XOR no valor ETH, 350.000 no valor VAL e 350.000 XOR no valor PSWAP. Este é o **cenário real**.

A função de preço de compra foi definida como $ 900 no lançamento suave, sua equação é _y = mx + b, onde b:=634$_ e a inclinação _m := 1/1337._

Este cenário implica que a função de preço de venda da curva de ligação do token não é 20% inferior à função de preço de compra (como deveria ser no **cenário ideal**), mas é ainda mais baixa. Há pouca liquidez nas reservas para você vender seus tokens XOR, e o preço na Função Preço de Venda pode ser baixo comparado ao preço do mercado secundário.

![](.gitbook/assets/tbc(1).png)

A Função Preço de Venda Real aumenta à medida que as reservas aumentam, aproximando-se da Função Preço de Venda Ideal, que é 20% inferior à Função Preço de Compra.

A Função Preço de Compra é a mesma nos dois cenários, Real e Ideal.

Portanto, construir reservas após o lançamento é crucial e **há um programa especial de incentivo no PSWAP (25% do fornecimento total de PSWAP) para usuários que compram XOR recém-criado no TBC.** Você pode ler os detalhes [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-b
Em termos simples, a curva de token bonding é essencialmente um banco central descentralizado com liquidez infinita. A qualquer momento, você pode comprar XOR recém-criado da curva de títulos de token usando **ativos de reserva** específicos ou vender seus tokens XOR (que queimam instantaneamente) por um desses ativos.

Além disso, como as funções de preço da curva de ligação do token são inclinadas para cima, o **preço aumenta com a oferta do token**. Observe que com uma curva de token bonding, **o preço e a oferta XOR estão correlacionados** e se movem de acordo.

<figure><img src="/.gitbook/assets/xor-supply-correct.png" alt=""><figcaption><p>O preço aumentará quando a oferta aumentar e vice-versa</p></figcaption></figure>

Outra implicação importante deste mecanismo é que o preço do XOR no mercado secundário (Polkaswap, Uniswap, CEXs...) tende a ser limitado a uma determinada faixa de preço (ilustrada como o triângulo vermelho no diagrama). Na verdade, se um usuário negociar XOR fora dessa faixa, ele criará uma **oportunidade de arbitragem** para comprar/vender redução desta forma.

## Por que a curva de vinculação de token é útil?

- **Gerenciamento Autônomo do Fornecimento de Tokens para Corresponder à Demanda (Fornecimento Elástico)**. A curva de token bonding introduz e remove o XOR de circulação para atender à demanda do mercado. Isto garante o crescimento econômico sustentável e a estabilidade de preços da economia simbólica, uma vez que o sistema pode adaptar-se às novas necessidades.
- **Liquidez Profunda e Imediata**. O contrato de curva de títulos é a contraparte da transação e sempre mantém reservas de recompra suficientes (_leia mais sobre isso abaixo no parágrafo “Cenários Ideais e Reais”_).
- Mitiga as influências da inflação do mercado e ataques de crash/manipulação.
- A política monetária descentralizada da XOR oferece proteção contra abusos por parte das autoridades e total transparência para os utilizadores.
- A reserva de recompra no mercado primário limita a capacidade dos governos ou dos vendedores a descoberto de manipular o mercado.
- O sistema monetário do SORA v2 não é baseado em dívida nem impulsionado pela dívida, e os novos tokens são sempre atribuídos sob supervisão democrática, ajudando a eliminar ciclos insustentáveis ​​de expansão e recessão nos sistemas econômicos contemporâneos.
- Os preços atuais de compra/venda oferecidos pela curva token bonding fornecem níveis de suporte e resistência, ou uma faixa de confiança para o preço do XOR no mercado, com orientação futura.
- 20% do valor adquirido na função de compras é reservado aos diferentes atores da rede SORA:
  - 1% vai para recompra e queima de [VAL](/pt/val)
  - 9% da sua utilização é decidida pelos titulares de [VAL](/pt/val), principalmente para cedência de liquidez
  - 0,1% é dado aos cidadãos
  - 0,4% é dado a lojas e compradores
  - 0,5% é usado para recomprar e queimar [TBCD](/pt/tbcd)
  - 9% é usado para projetos

![](/.gitbook/assets/margin-tbc.png)

Embora a economia SORA esteja em sua fase inicial, a curva de ligação de tokens desempenha um papel crucial na manutenção da propriedade de valor de refúgio seguro do XOR. A capacidade de definir faixas de confiança para movimentos de preços simbólicos reduz a barreira psicológica para a aceitação de XOR para pagamentos.

É importante notar que **a curva de token bonding não garante a estabilidade de preços XOR**, mas sim uma medida de previsibilidade de preços [orientada para o futuro](https://www.ecb.europa.eu/explainers/tell-me/html/what-is-forward_guidance.en.html).

## Cenários ideais e reais

Agora nos concentramos nas **reservas**, que desempenham um papel crucial no mecanismo TBC.

No lançamento da rede SORA v2, já existirão 350.000 XOR. Isso significa que a curva de ligação do token SORA terá uma obrigação não financiada de 350.000 XOR no valor DAI, 350.000 XOR no valor ETH, 350.000 no valor VAL e 350.000 XOR no valor PSWAP. Este é o **cenário real**.

A função de preço de compra foi definida como $ 900 no lançamento suave, sua equação é _y = mx + b, onde b:=634$_ e a inclinação _m := 1/1337._

Este cenário implica que a função de preço de venda da curva de ligação do token não é 20% inferior à função de preço de compra (como deveria ser no **cenário ideal**), mas é ainda mais baixa. Há pouca liquidez nas reservas para você vender seus tokens XOR, e o preço na Função Preço de Venda pode ser baixo comparado ao preço do mercado secundário.

![](/.gitbook/assets/tbc(1).png)

A Função Preço de Venda Real aumenta à medida que as reservas aumentam, aproximando-se da Função Preço de Venda Ideal, que é 20% inferior à Função Preço de Compra.

A Função Preço de Compra é a mesma nos dois cenários, Real e Ideal.

Portanto, construir reservas após o lançamento é crucial e **há um programa especial de incentivo no PSWAP (25% do fornecimento total de PSWAP) para usuários que compram XOR recém-criado no TBC.** Você pode ler os detalhes [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

## Venda no ambiente real

Considerando que as reservas ideais são uma meta de longo prazo, é importante entender como funciona a venda em uma curva de títulos simbólicos que não está totalmente garantida.

![](/.gitbook/assets/tbc.png)

Como você pode ver, o preço se comporta de forma diferente no cenário real, onde os usuários venderão seus tokens por um preço menor do que no cenário ideal. É importante notar, porém, que quando as reservas aumentam, a Função Preço de Venda ficará cada vez mais próxima da Função Preço de Venda Ideal, e os usuários já terão boa liquidez para vender até mesmo grandes quantidades. Você pode ver um exemplo detalhado de venda com números [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

Além disso, existem taxas extras ao vender com baixa garantia:

- menos de 30% de garantia: +1% de taxa
- menos de 20% de garantia: +3% de taxa
- menos de 10% de garantia: +6% de taxa
- menos de 5% de garantia: +9% de taxa

Essas taxas extras serão queimadas.

## Curva de vinculação de token e leilões de parachain

No futuro, o TBC desempenhará um papel fundamental na garantia de um slot Parachain para a rede SORA em Polkadot e Kusama.

Inicialmente, SORA se juntará a Kusama como Parachain por meio de um Crowdloan, conforme mencionado [aqui](https://medium.com/sora-xor/the-sora-network-kusama-parachain-auction-5a6fe3a5f35f?source=user_profile----0------).

Isso trará o KSM para a rede SORA (e Polkaswap), para que os usuários possam usar o KSM como um ativo de reserva no TBC, e que o KSM possa ser usado para garantir o slot para o ano seguinte.

Além disso, a Parity também está desenvolvendo uma ponte entre Polkadot e Kusama. O DOT também estará disponível na rede SORA como ativo de reserva através desta ponte.

Os tokens DOT e KSM mantidos em reservas pela curva de token bonding serão usados ​​para licitar por um slot de parachain subsequente para o ecossistema SORA.

[**Recompensas em dobro**](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8) **para usuários que compram XOR com KSM e DOT**, visto que estas duas moedas são cruciais para a rede

## Aprender mais

- [Economia SORA](/pt/sora-economy.md)
- [XOR](/pt/xor.md)
