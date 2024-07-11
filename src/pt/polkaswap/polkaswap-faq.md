---
title: Perguntas frequentes sobre Polkaswap | Documentos SORA
head:
   - - meta
     - name: descrição
       content: encontre respostas para perguntas frequentes (FAQs) sobre Polkaswap, a bolsa descentralizada na rede SORA. Explore consultas comuns sobre negociação, fornecimento de liquidez, trocas de tokens, taxas e muito mais. Obtenha as informações necessárias para melhorar sua compreensão e maximizar sua experiência Polkaswap dentro do ecossistema SORA.
   - - meta
     - name: palavras chave
       content: Perguntas frequentes sobre Polkaswap, rede SORA, bolsa descentralizada, negociação, fornecimento de liquidez, troca de token, taxas
---

# PERGUNTAS MAIS FREQUENTES

## Qual é a diferença entre uma bolsa centralizada (CEX) e uma bolsa descentralizada (DEX)?

Uma exchange centralizada gerencia políticas de segurança, troca de dados e validação em seus próprios servidores internos. Por outro lado, uma exchange descentralizada não possui intermediários que lidam com suas chaves privadas. Todas as operações e transações são realizadas através de sua própria carteira com autorização expressa por meio de contratos inteligentes. Leia nosso artigo detalhando as principais considerações ao escolher um DEX [aqui](https://medium.com/polkaswap/crypto-exchanges-are-evolving-are-you-82707f240bd7).

## O que é um pool de liquidez?

Um pool de liquidez é uma coleção de fundos bloqueados em um contrato inteligente. No Polkaswap, cada par de negociação possui 2 pools, um para cada token: usuários chamados provedores de liquidez (LPs) adicionam um valor igual de dois tokens a um pool. Em troca do fornecimento de fundos, os fornecedores de liquidez ganham taxas de negociação pelas negociações que ocorrem no seu pool, proporcionais à sua participação na liquidez total.

## Quem são os provedores de liquidez?

Os provedores de liquidez podem ser qualquer pessoa que possa fornecer valores iguais de XOR e outro token para um contrato de par Polkaswap. Em troca, eles recebem tokens do contrato de câmbio que podem usar para sacar sua parte do pool de liquidez a qualquer momento. Cada vez que alguém negocia no Polkaswap, o trader paga uma taxa de 0,3% em XOR que é queimada instantaneamente. Uma vez por dia, uma porcentagem do PSWAP queimado é remetida e distribuída aos provedores de liquidez. Esse percentual começa em 90% e cai para 35% linearmente ao longo de 5 anos.

## Como funcionam os pools de liquidez no Polkaswap?

Os pools de liquidez no Polkaswap funcionam de forma muito semelhante a outros DEXs. As taxas são pagas em XOR; Eles são automaticamente convertidos para PSWAP e depois gravados. Uma porcentagem do valor queimado é então reembolsada e entregue aos provedores de liquidez. As recompensas PSWAP começam no lançamento com 100% dos tokens queimados e chegam a 35% ao longo de cinco anos.

##Qual a diferença entre o Polkaswap e outros DEXs, como o Uniswap?

Polkaswap trabalhou para resolver alguns dos problemas com DEXs baseados em Ethereum. Construído no Substrate, o Polkaswap oferece custos de transação mais baixos e transações mais rápidas. Polkaswap também oferece trocas entre as redes Ethereum, Polkadot e Kusama, e mais pontes estão sendo desenvolvidas. Além disso, com sua tecnologia de agregação de liquidez, Polkaswap permitirá a negociação com múltiplas fontes de liquidez sob um algoritmo personalizado de agregação de liquidez. O algoritmo de agregação de liquidez pode agregar liquidez de várias fontes. As fontes de liquidez podem assumir a forma de AMM DEX, carteiras de pedidos ou qualquer outro algoritmo. Em última análise, isto ajuda a garantir que os utilizadores encontrem o melhor valor para as suas negociações.

## Qual é a diferença entre os recursos SMART e TBC no Polkaswap?

Ao clicar em Swap na barra de menu, você pode escolher entre os recursos SMART e TBC no Polkaswap, conforme mostrado na imagem abaixo.

![](/.gitbook/assets/faq-choose-smart-or-tbc-for-swap.jpg)

Usando o TBC, sua negociação será executada na curva de token bond. A curva de indexação do token SORA atua como um gerenciador descentralizado na cadeia para o token XOR. Funciona pegando ativos de reserva e cunhando novos XOR ou, inversamente, desminando XOR e liberando ativos de reserva. Essa solução geralmente reduz a derrapagem em grandes negociações, pois a curva de indexação do token aumenta a liquidez do token XOR. Além disso, há um incentivo especial quando um usuário compra XOR recém-criado na curva de indexação de token; as recompensas estão no PSWAP. Você pode ler o artigo completo sobre esta recompensa [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

Os preços na curva de token bonding e nos pools podem ser diferentes, caso em que você pode usar a função SMART para negociar ao melhor preço possível. Observe que a função SMART não considera as recompensas PSWAP em seus cálculos.

## Quais são as taxas de câmbio?

Para cada transação no Polkaswap deverá ser paga uma taxa de 0,3% em XOR. Não é necessário manter XOR para realizar transações. Polkaswap pode subtrair taxas da própria transação. As taxas são imediatamente convertidas para PSWAP e depois queimadas. Depois disso, uma determinada percentagem dos valores queimados é recuperada e distribuída aos fornecedores de liquidez, ao Parlamento e como bónus estratégico aos utilizadores.

Você pode aprender mais sobre a recompensa do provedor de liquidez [aqui](https://medium.com/polkaswap/introtaining-polkaswap-6f1db4003747) e sobre o prêmio de bônus estratégico na seção "Recompensas de bônus PSWAP" do Wiki.

##Quando posso negociar DOT e KSM no Polkaswap?

A rede SORA lançou seu crowdloan em janeiro de 2022. Depois que o espaço for garantido, levará mais tempo para transportar os tokens KSM e Parachains para a Rede SORA e Polkaswap.

A Parity está atualmente desenvolvendo uma ponte Polkadot <> Kusama que trará o DOT para a rede Kusama (incluindo Parachains).

Em última análise, o objetivo é garantir uma vaga no Polkadot também. A estratégia é gerar reservas de DOT e KSM usando as funcionalidades exclusivas da [curva de ligação de token](https://wiki.sora.org/token-bonding-curve#token-bonding-curve-and-parachain -auctions ).

## Preciso de XOR para negociar Polkaswap?

Não. Você pode negociar no Polkaswap sem ter XOR. No entanto, isso só é possível se você estiver negociando **para** XOR. As taxas serão subtraídas do valor recebido.

## Existem incentivos para provedores de liquidez no Polkaswap?

Sim, existe um programa de incentivo que recompensará os provedores de liquidez no Polkaswap pelos próximos 4 anos. Cerca de 2,5 milhões de PSWAPs são alocados diariamente e, após um período de aquisição, os provedores de liquidez poderão reivindicar seus PSWAPs. Você pode obter mais informações [aqui](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509)

## Quais são os riscos de fornecer liquidez ao Polkaswap?

O contrato inteligente do protocolo Polkaswap, projetado tendo a segurança como prioridade máxima, foi auditado. No entanto, não podemos garantir que erros não serão encontrados no futuro. Faça sua própria pesquisa e sempre tenha cautela e diligência ao negociar Polkaswap. O maior risco ao fornecer liquidez no Polkaswap é conhecido como **perda impermanente**.

A perda impermanente ocorre quando os preços do token que foi depositado no pool mudam em relação ao preço pelo qual foi inserido. Quanto maior for a diferença entre o preço de entrada e o preço atual, maior será a exposição dos fornecedores de liquidez aos riscos de perda impermanente. Vejamos um exemplo de como funciona:

Você está fornecendo liquidez ao par XOR-DAI. No momento em que você entra no pool, 1 XOR = 100 DAI, então você fornece ao pool 1 XOR e 100 DAI. Polkaswap exige que os dois ativos depositados mantenham uma proporção de 1:1. Agora imagine que o pool total contém 10 XOR e 1.000 DAI, o que vale US$ 2.000. Isso significa que você tem uma participação de 10% no pool.

Se o preço de 1 XOR atingir 400 DAI, para manter o equilíbrio de uma proporção de 1:1, o fundo total passaria a ser 5 XOR e 2000 DAI, conforme a fórmula [_x\*y=k_](https : //uniswap .org/docs/v2/protocol-overview/how-uniswap-works/). Se você decidir sacar fundos durante esse período, você ainda retirará 10% do pool, pois essa é a sua parte, dos quais 0,5 XOR e 200 DAI (10% do pool) são retirados, o que equivale a US$ 400 (excluindo negociação tarifas). .

Mas se você tivesse mantido 1 XOR e 100 DAI em vez de depositar em um pool, teria US$ 500 em ativos em vez de sacar US$ 400. Isso é o que chamamos de perda impermanente.

Você pode [veja aqui] (https://www.youtube.com/watch?v=8XJ1MSTEuU0) para uma explicação em vídeo mais aprofundada.

Observe que os efeitos das perdas não permanentes são mitigados pelas taxas de 0,3% pagas em cada negociação e pelo [primeiro programa estratégico](https://medium.com/polkaswap/pswap-rewards-1- polkaswap-liquidity- recompensa- agricultura-3e045d71509).

##Como posso ganhar tokens PSWAP?

Os pools de liquidez no Polkaswap funcionam de forma muito semelhante a outros DEXs. As taxas são pagas em XOR; Eles são automaticamente convertidos para PSWAP e depois gravados. Uma porcentagem do valor queimado é então reembolsada e entregue aos provedores de liquidez.

Existem três maneiras principais de ganhar PSWAP:

1. A primeira maneira de ganhar tokens PSWAP é ser um dos provedores de liquidez no Polkaswap após o lançamento. Cerca de 25.000 PSWAP serão alocados diariamente para provedores de liquidez no Polkaswap e após um período de aquisição, os usuários poderão reivindicá-los. Para ler o artigo completo sobre o primeiro programa de incentivos, dê uma olhada [aqui](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509).

2. A segunda maneira de ganhar PSWAP é comprar XOR com ETH, DAI, DOT ou KSM da curva de indexação de token. Comprar XOR com ETH, DAI, DOT ou KSM ajudaria a expandir o ecossistema SORA, garantiria a curva de indexação e, no caso de DOT e KSM, ajudaria a SORA a garantir espaços de parachain para as cadeias Polkadot e Kusama, respectivamente. 2,5 bilhões de tokens PSWAP foram alocados como recompensas para compradores XOR.

 Se você estiver interessado na matemática por trás da curva de ligação de token, leia os detalhes [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve- 70fab4c3f1b8 ) .

3. A terceira maneira de ganhar tokens PSWAP é por meio de descontos de criação de mercado no Polkaswap. 4 milhões de PSWAP (200 mil por mês) serão reservados proporcionalmente para formadores de mercado que tenham pelo menos 500 mil transações com média de pelo menos 1 XOR em cada transação. Você pode ler os detalhes [aqui](https://medium.com/polkaswap/pswap-rewards-part-3-polkaswap-market-making-rebates-1856f62ccfaa).

## Transferi tokens diretamente para um contrato de par (ou contrato de token). Existe uma maneira de recuperá-los?

Esses contratos não têm dono, então todos os fundos enviados para lá são perdidos para sempre.

## O Polkaswap estará disponível na Fearless Wallet?

Fearless Wallet foi projetada para integração perfeita com Polkaswap. Fearless Wallet é um aplicativo móvel para as redes Kusama e Polkadot, com suporte nativo nas plataformas iOS e Android. Saiba mais [aqui](http://fearlesswallet.io).

**A rede SORA garantiu um slot de parachain na rede Kusama em 6 de fevereiro de 2022.**

Não há mais leilões previstos para os próximos meses. Em breve, os tokens KSM estarão disponíveis no Polkaswap e os usuários poderão apoiar leilões futuros usando-os para comprar XOR recém-cunhado da curva de token bonding. Isso aumentará as reservas da curva de token bonding, que serão então usadas para licitar em leilões subsequentes. Além disso, existe uma recompensa especial no PSWAP ao comprar com DOT e KSM, esta recompensa é maior quando há menos reservas, e diminuirá à medida que se acumulam. Você pode ler o artigo completo sobre o programa de incentivos [aqui](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

**Atualização: o aluguel do parachain SORA Kusama foi renovado em 16 de março de 2023**

## Saber mais

- [Política de Privacidade do Polkaswap](/polkaswap/privacy)
- [Termos e Condições do Polkaswap](/polkaswap/terms)