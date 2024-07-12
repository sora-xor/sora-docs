---
title: "Mecanismo de Consenso na Rede SORA | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda sobre o mecanismo de consenso na rede SORA e como ele garante acordo e consistência entre os participantes da rede. Explore os diferentes algoritmos de consenso empregados pela rede SORA, como Proof of Stake (PoS), e entenda como eles contribuem para a segurança e descentralização da rede."
  - - meta
    - name: keywords
      content: "mecanismo de consenso, rede SORA, acordo, consistência, algoritmos de consenso, Prova de Participação, PoS, segurança, descentralização"
---

# Consenso

A rede SORA depende de um mecanismo **NPoS (Nominated Proof of Stake)** para alcançar e manter o consenso sobre o estado da cadeia.

Existem dois atores principais: **validadores** e **nomeadores**.

- **Validadores** competem entre si para criar novos blocos e obter recompensas. Para fazer isso, um validador deve entrar no conjunto de validadores, que consiste nos 69 validadores com maior participação (pode nem sempre ser o caso, leia sobre Phragmen para saber mais sobre os métodos de seleção de validadores).
- **Os nomeadores** podem aumentar a participação dos validadores delegando a eles seus tokens XOR.

## Nomeadores

Um nominador é um usuário normal que publica uma lista de candidatos a validadores confiáveis ​​e coloca uma quantidade de XOR em jogo para apoiá-los (o conceito de piquetagem). Contanto que um nominador apoie os candidatos validadores com boas práticas de segurança, seu staking será de baixo risco. As recompensas do Nominator estão em VAL e são baseadas na quantidade de VAL queimada durante o dia. Você pode ler mais sobre o token VAL e recompensas de staking [aqui](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

Os nominadores mantêm a rede SORA segura, delegando seu XOR a validadores confiáveis.

Você precisa escolher os validadores com cuidado: se eles não se comportarem corretamente, serão removidos e você também perderá o XOR. No entanto, se seguirem as regras da rede, não há risco de clipagem. Leia mais sobre cortes [aqui](https://support.polkadot.network/support/solutions/articles/65000110858-what-does-it-mean-to-get-slashed-).

Quando você está nomeando, seu XOR não pode ser movido imediatamente, mas precisa ser desvinculado primeiro. Esse processo leva sete dias.

### Nomeações ativas

Como dito acima, os nomeadores devem selecionar os validadores escolhidos. Os nominadores podem selecionar até 16 validadores diferentes, mas apenas um deles é necessário para ingressar no grupo de validadores. Caso mais de um dos validadores selecionados ingresse no conjunto ativo, apenas um será efetivamente apoiado pela sua participação.

### Como selecionar validadores de maneira eficaz

Para fornecer alguns validadores de alta qualidade na rede como um bem comum, o Parlamento SORA mantém a seguinte lista de validadores:

-cnVqqrLjSGQ7in5j3GVuXjr4b1benhdN72NQnqwzrbWxHWjYZ
-cnVyxUnvsrgtiCEaeHudqGEJuHPspfp89mGghLz21mVqdaQwv
-cnSdNvs39CVRDiFW4pEtaqZWGoSU7B8UkDKjwCb3mX999CsZH
-cnScvgXFLQgeNFoVfMjf2U5MC24CkdRkLTUKbJYefYRwqy3VZ
-cnSgH7nHuiPk5Z2cubwsFZGdmzvzhrgBKgTqLCeR7hyo6dek8
-cnU2w3CPn9narRKeSamHmKBBaSXY949A4udq6APBXNkmnkwsJ
-cnV58Z8zT37K6iUsijRjYHBzk95aTqvLfn3WvvfJcCwFQKHCL
-cnRrijYYHb4fWPuF9MraEvm8nvfztYDxcAZfKfN2AyKLBn81A
-cnUDwD4nPorodyd3inwThA2yBt2dFuHTfnvKowH6dirk47Qqr

Um aspecto importante a avaliar é a **comissão do validador**. A comissão é a porcentagem da recompensa recebida pelo validador antes que as recompensas sejam distribuídas aos nomeadores. Como nomeador, você pode pensar que a comissão mais baixa é a melhor, mas isso nem sempre é verdade. Os validadores devem ser capazes de operar de forma eficiente para continuar operando de forma sustentável. Os validadores independentes dependem de comissões para cobrir os seus custos, ajudando a manter a rede descentralizada.

Você também deve levar em consideração a **participação** dos validadores. Esta é a quantidade de XOR que o próprio validador apostou. Uma grande quantidade de auto-aposta pode ser considerada como tendo mais “pele no jogo” e, portanto, os validadores estão confiantes em não serem cortados. No entanto, um validador que não possui uma grande quantidade de “self-stake” não é automaticamente indigno de confiança, pois o validador pode estar nomeando de um endereço diferente.

### Filtrando Validadores

Na página [Alvos](https://polkadot.js.org/apps/#/stake/targets), você pode [filtrar](https://wiki.polkadot.network/docs/learn-nominator#filter- out -validators-with-indesejable-traits) validadores que possuem características que podem indicar um problema ao nomeá-los. Você pode ativar e desativar esses filtros para ajudar a definir quais validadores você deve nomear. É importante notar que nenhuma destas características é necessariamente “má”; No entanto, dependendo da metodologia de seleção do seu validador, podem ser recursos que você estaria interessado em filtrar.

<!-- TODO: transform this into a table -->

- **Somente operador**: Não mostra grupos de validadores operados por um único operador.
- **Sem comissão de 20%+**: Não mostre nenhum validador com comissão de 20% ou superior.
- **Não na capacidade máxima**: não mostre nenhum validador que esteja operando [na capacidade máxima](https://wiki.polkadot.network/docs/glossary#capacity) (ou seja, eles podem estar com excesso de assinaturas).
- **Pagamentos recentes**: mostra apenas validadores que recentemente causaram [a emissão de um pagamento](https://wiki.polkadot.network/docs/learn-simple-payouts). Observe que qualquer pessoa pode causar a ocorrência de um pagamento; Você não precisa ser o operador de um validador.
- **Somente Eleitos**: Mostra apenas validadores que estão atualmente no conjunto ativo (ou seja, foram eleitos para produzir blocos nesta época).
- **Somente identidade**: mostra apenas validadores que estabeleceram uma [identidade](https://wiki.polkadot.network/docs/learn-identity). Observe que esta identidade não precisa ser verificada por um registrador para que o validador apareça na lista.

## Validadores

Validadores são nós que foram selecionados para produzir blocos. Os validadores são uma parte central da rede SORA porque têm de aceitar ou rejeitar blocos de transações. A eleição dos validadores é feita através do [Método Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen), o mesmo utilizado por Polkadot e Kusama. Considerando que a execução de um nó validador exige esforço, não será sem recompensa. Aqueles que executam nós validadores receberão recompensas na forma de tokens VAL, com base na quantidade de VAL queimada no último dia.

Os validadores desempenham um papel crucial na rede SORA, pois protegem e descentralizam ainda mais todo o sistema. Hospedar um nó validador é bastante simples, mas possui requisitos técnicos que devem ser considerados com cuidado.

### Como os validadores são escolhidos

Nem todo mundo que se cadastra na rede para se tornar validador necessariamente fará bloqueios. Se a competição for alta e houver mais do que o número máximo de validadores ativos possíveis para uma época, então os validadores com XOR mais alto provavelmente participarão da validação real. Neste caso, a aposta mínima de facto para um validador ativo aumentará automaticamente.

Os validadores são selecionados usando o [Método Phragmen] de Polkadot (https://wiki.polkadot.network/docs/en/learn-phragmen#where-is-the-phragm%C3%A9n-method-used-in-polkadot).

### Torne-se um validador SORA

A rede SORA é totalmente descentralizada e depende de membros da comunidade para operar os nós. Os nós validadores serão responsáveis ​​por fazer blocos na rede. Para ajudar a garantir o sucesso do Polkaswap, precisamos do apoio da comunidade para executar nós validadores na rede SORA. Aqui está o que você precisa para começar:

```
Machine with Linux, Windows, or macOS
Docker https://docs.docker.com/get-docker/ - follow the install guide
At least 64GB RAM
160GB free space
Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
Uptime of 99.9%
```

Se você estiver interessado em ajudar a garantir o futuro do SORA e do Polkaswap e ganhar recompensas no processo, leia mais sobre [executando um nó SORA Mainnet] (./running-a-node.md).

## Recompensas

Seu trabalho árduo não ficará sem recompensa. Aqueles que executarem nós de validação ou nomearem receberão recompensas na forma de tokens [**VAL**](https://medium.com/sora-xor/sora-validator-reward-token-val-c96a8afb8541).
As recompensas não são fixas, mas dependem do número de transações na rede SORA e do uso da curva de indexação de token.
Na verdade, metade de todas as taxas da rede SORA e 1% do que é comprado no TBC são usados ​​para recomprar VAL no Polkaswap e queimá-los. Depois, diariamente, um percentual do VAL queimado é reavaliado e repassado aos validadores e nominadores. Esta percentagem era de 90% na TGE e diminuirá linearmente até se estabilizar após cinco anos.

Quanto maior o número de transações na rede SORA, maiores serão as recompensas para os nominadores e validadores.

## Saber mais

- [Nomeando Validadores](/nomeando-validadores)
- [Execute um nó](/running-a-node)