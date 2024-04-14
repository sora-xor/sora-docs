Para Polkaswap significa intercambiar (intercambiar) tokens en [Polkaswap](https://polkaswap.io/), Polkaswap es un protocolo AMM DEX de cadena cruzada sin custodia para intercambiar tokens, Polkaswap elimina intermediarios confiables y brinda la oportunidad de comercio más rápido, y Polkaswap también combina múltiples fuentes de liquidez bajo un algoritmo de agregación de liquidez común, operando completamente en cadena, de manera descentralizada y sin confianza.

El diseño técnico de Polkaswap permite utilizar diferentes fuentes de liquidez para el comercio. Por el momento, Polkaswap admite dos fuentes de liquidez:

- Piscina (pool) XYK
- Curva de vinculación de tokens (TBC)

Las piscinas XYK son administradas por la comunidad. Cualquiera puede proporcionar liquidez a cualquier grupo. Cada grupo tiene XOR como activo base. Por ejemplo, hay dos grupos: XOR-VAL, XOR-PSWAP. Si realiza un intercambio VAL-PSWAP, entonces la ruta del intercambio será la siguiente: de VAL a XOR, de XOR a PSWAP.

El TBC se describe en detalle [aquí](../snippets/../tbc). Puede comprar y vender XOR utilizando TBC, y los activos de garantía iniciales son USDT, VAL, PSWAP.

Cuando realiza un swap con la configuración predeterminada, el algoritmo Liquidity Proxy selecciona el fondo de liquidez con el mejor precio. Sin embargo, comprar XOR en TBC se recompensa con PSWAP. La fuente de liquidez puede cambiar en la configuración del swap, lo que hace que el comercio sea más flexible.

La configuración de intercambio y otros temas se tratarán en la sección Práctica.