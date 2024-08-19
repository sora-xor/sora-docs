Os usuários são incentivados a fornecer liquidez, utilizar a rede SORA e apoiar o pool de validadores da rede. Existem diferentes tipos de recompensas dependendo da atividade.

![](/.gitbook/assets/rewards-types.png)

Vamos descrever em detalhes todas as recompensas disponíveis atualmente:

- Recompensas para **Formadores de Mercado** (Inativo)
- LP **Recompensas de bônus agrícolas**
- Recompensas por **compras na TBC**
- **Taxas de LP**
- **VAL de autorização** para mídia XOR erc-20
- **Prêmios VALidador**

Aqui está um rápido resumo de cada recompensa.

#### Recompensas do Formador de Mercado (Inativo)

Polkaswap distribuiu uma quantidade de PSWAP proporcional ao volume de negociação para formadores de mercado que fizeram pelo menos 500 transações por mês, com um valor por transação de 1 XOR ou mais (_excluindo custos de transação_).

#### Recompensas de bônus agrícolas LP

Usuários do Polkaswap ganharão tokens PSWAP por fornecerem liquidez de pelo menos 3 milhões (3'000'000) de XOR em qualquer pool pareado com XOR. Sua recompensa é dobrada se você contribuir para os pools XOR-VAL, XOR-PSWAP, XOR-DAI, XOR-ETH ou XOR-DOT.

⚠️ Os usuários do Polkaswap devem monitorar o status da sua provisão de liquidez, pois perderão o direito ao vesting das recompensas PSWAP se sua LP cair abaixo de 3 milhões de XOR.

#### Recompensas por compras na TBC

Uma curva de ligação de token é um contrato inteligente que pega um token como entrada e gera outro, usando uma fórmula matemática. Uma curva de token bonding pode emitir, vender e comprar tokens automaticamente a preços determinados pelas funções matemáticas utilizadas.

As recompensas PSWAP que podem ser obtidas são calculadas exponencialmente com base nas reservas atuais – quanto menores forem as reservas em um determinado momento, maiores serão as recompensas por ajudar a aumentá-las.

#### Taxas de LP

A primeira maneira de ganhar recompensas PSWAP no Polkaswap é fornecer liquidez no DEX com XOR e quaisquer outros tokens. Os provedores de liquidez ganham 0,3% de cada swap em taxas, então ganham PSWAP por fornecer liquidez ao pool. Portanto, quanto mais os usuários negociam, mais liquidez os fornecedores obterão.

#### Aquisição VAL para suporte XOR erc-20

Antes do lançamento do SORA, um instantâneo do suporte XOR do erc-20 foi obtido. O número do bloco do snapshot na rede Ethereum é 12225000. Cada detentor XOR deste snapshot receberá tokens VAL por meio da concessão.

O VAL é concedido por dia para cada XOR do snapshot, a partir de uma parte restante do VAL que é queimada todos os dias (_quantidade queimada -10% - recompensa diária do validador %_).

**Concessão PSWAP para formadores de mercado, fornecedores de LP e compradores TBC**

**As recompensas não podem ser reivindicadas instantaneamente.** A velocidade de aquisição depende da quantidade de PSWAP queimada com as taxas de uso do Polkaswap. Os PSWAPs possuem **Aquisição de Bônus Estratégico**, onde o valor adquirido é um percentual do valor diário do PSWAP queimado em taxas de transação, conforme figura abaixo.

Como você pode ver, no lançamento, o percentual de PSWAP queimado alocado como bônus estratégico é de 0% e aumenta linearmente em 5 anos até 55%, e permanecerá constante a partir de então. A outra queima do PSWAP é reservada ao Parlamento SORA (10%) e como recompensa aos provedores de liquidez. Esta recompensa é semelhante à obtida ao fornecer liquidez no Uniswap, ou seja, 0,3% em cada negociação.

<figure><img src="/.gitbook/assets/strategic-bonus-vesting-updated.png" alt=""><figcaption></figcaption></figure>

Um exemplo que pode ser útil para esclarecer:

_Suponha que atualmente, quando 100 PSWAP são queimados, 81 PSWAP são cunhados para recompensar os provedores de liquidez, então 10 PSWAP são cunhados para o Parlamento e 9 PSWAP são cunhados como recompensa adicional. Isso significa que 3 PSWAPs (33%) são reservados como recompensa estratégica para provedores de liquidez, 3 PSWAPs (33%) são reservados para compradores de TBC e 3 PSWAPs (33%) são reservados para formadores de mercado. Cada usuário receberá recompensas proporcionais ao valor de sua compra._

Uma consequência importante deste desenho é que ele garante que um fornecimento repentino de tokens não inundará imediatamente o mercado e fornece orientações claras sobre o fornecimento de tokens em circulação, que deverá permanecer constante.

#### VALidador Recompensas

Os usuários podem apostar com validadores SORA para ganhar recompensas VAL. Ou eles podem executar seu próprio nó de validação.

As recompensas do VALidator devem ser reivindicadas por meio da IU do aplicativo Polkadot js.

Postagens relacionadas:

- [Recompensas Polkaswap](https://medium.com/polkaswap/pswap-rules-everything-around-me-three-pathways-to-polkaswap-rewards-63842caf88c0)
- [Recompensas SORA VALidator](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8?source=search_popover-------------------------------------)
- [Como nomear validadores (apostar seu XOR)](https://wiki.sora.org/pt/guides/how-to-nominate-validators-stake-your-xor)
- [Como executar um nó SORA Testnet](https://medium.com/sora-xor/how-to-run-a-sora-testnet-node-a4d42a9de1af)
- [Como reivindicar recompensas de nomeadores e validadores](https://wiki.sora.org/pt/guides/how-to-claim-staking-rewards)
- [Implementação SORA v2](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87)
