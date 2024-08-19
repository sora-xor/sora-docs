Para alternar entre fontes de liquidez no Polkaswap, siga estas etapas.

1. Abra a página de troca e selecione os ativos que deseja trocar.

2. No canto superior direito você encontra as configurações do Market. Clique no ícone:

  <center><img src="/.gitbook/assets/advanced-trading-smart.png" width="400"></center>

3. Escolha o algoritmo de mercado: **SMART** ou **TBC**.

Por padrão, a opção **SMART** está selecionada, o que significa que o Liquidity Router encontrará a fonte de liquidez com o melhor preço. Você também pode alterar para **TBC**:

  <center><img src="/.gitbook/assets/advanced-trade-algorithm.png" width="400"></center>

  <center><img src="/.gitbook/assets/advanced-trade-switch-to-tbc.png" width="400"></center>

Vamos comparar preços para comprar XOR.

::: aviso

O preço na testnet é diferente do preço na mainnet. O exemplo de exercício prático foi realizado na rede de teste.

:::

O preço de XOR quando a opção **TBC** é selecionada:

<center><img src="/.gitbook/assets/advanced-trade-tbc-xor-price.png" width="400"></center>

O preço do XOR quando a opção **SMART** é selecionada:

<center><img src="/.gitbook/assets/advanced-trade-smart-xor-price.png" width="400"></center>

O preço do XOR difere dependendo se você compra no TBC ou no XYK Pool.

Vamos examinar os parâmetros de troca um por um:

**Parâmetros a confirmar:**

- _VAL PER XOR_: O preço de 1 XOR em VAL.
- _XOR POR VAL_: O preço de 1 VAL em XOR.
- _Mínimo Recebido_: A quantidade mínima de ativos alvo que você receberá após a troca
- _Taxa do provedor de liquidez_: A taxa que o provedor de liquidez cobrará. Neste caso, é um TBC.
- _Taxa de rede_: taxa SORA pelo processamento da transação (gás).

**Parâmetros do grupo XYK:**

- _VAL PER XOR_: O preço de 1 XOR em VAL.
- _XOR POR VAL_: O preço de 1 VAL em XOR.
- _Mínimo Recebido_: O número mínimo de ativos alvo que você receberá após a troca.
- _Taxa do provedor de liquidez_: A taxa que o provedor de liquidez cobrará. Neste caso, é um Pool XYK.
- _Taxa de rede_: taxa SORA pelo processamento da transação (gás).

**O que significa liquidez insuficiente?

Você pode ver um erro dizendo "**Liquidez insuficiente**" e é importante entender o que isso significa.

<center><img src="/.gitbook/assets/advanced-trade-insufficient-liquidity-tbc.png" width="400"></center>

<center><img src="/.gitbook/assets/advanced-trade-insufficient-liquidity-smart.png" width="400"></center>

::: dica

Os pools de liquidez (pools XYK) são explicados no [vídeo](https://www.youtube.com/watch?v=cizLhxSKrAc) no canal da Finematics no YouTube. Recomenda-se assisti-lo para entender como funcionam os Pools em geral.

:::

Se você receber o erro "**Liquidez Insuficiente**", significa que o Pool XYK não possui ativos suficientes para processar sua transação. Você pode reduzir o valor da negociação ou esperar até que alguém forneça liquidez adicional ao pool.

A liquidez do TBC é garantida por reservas. Se não houver reservas suficientes para sua transação, você receberá a mesma mensagem.
