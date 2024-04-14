---
title: Token XST de SORA | Documentación de SORA
head:
  - - meta
    - name: description
      content: Aprende sobre XST, la moneda estable de la red SORA. Descubre las características, casos de uso y beneficios de XST dentro del ecosistema SORA. Explora su rol como un activo digital estable y confiable, permitiendo la transferencia de valor eficiente, reduciendo la volatilidad y soportando diversas aplicaciones financieras dentro de la red SORA.
  - - meta
    - name: keywords
      content: token XST de SORA, moneda estable, red SORA, activo digital, transferencia de valor, reducción de volatilidad, aplicaciones financieras
---

# SORA Sintéticos

Los Sintéticos de SORA son tokens vinculados a índices de valor, respaldados por XST,
el primer activo Sintético de SORA es el XSTUSD vinculado a DAI. Los activos Sintéticos XST de SORA para otras principales reservas de valor estarán disponibles pronto como parte de la actualización de Sintéticos de SORA en Polkaswap. XST fue [propuesto como una
RFP](https://github.com/sora-xor/rfps/pull/8/files) y actualmente está activo en la red SORA. Además, tienes la opción de explorar más sobre la plataforma en general en una [página dedicada](./synthetics.md).

## El Dólar Compensado de Fisher

**XST** significa **XOR SynThetics**, y es el token de garantía utilizado para respaldar los activos sintéticos de SORA vinculados a un índice de valor. Pero, _¿qué es un activo sintético o moneda estable para empezar?_

Mucho antes de que existieran las criptomonedas (o incluso las computadoras digitales), [en 1912](https://dspace.gipe.ac.in/xmlui/bitstream/handle/10973/26798/GIPE-093010.pdf?sequence=3&isAllowed=y), el economista estadounidense [Irving Fisher](https://en.wikipedia.org/wiki/Irving_Fisher) cuestionó la inestabilidad en el poder adquisitivo del dólar estadounidense respaldado en oro, explicando:

> “_Ahora tenemos un dólar de peso fijo (25.8 granos), pero de poder adquisitivo variable. Bajo el plan propuesto, tendríamos un dólar de poder adquisitivo fijo, pero de peso variable_.” Esto llegaría a ser la base para el dólar "compensado".

En otras palabras, debido a que el oro era altamente volátil en poder adquisitivo, en lugar de mantener el dólar fijado a una cierta cantidad de oro, [Fisher propuso](https://www.richmondfed.org/~/media/richmondfedorg/publications/research/economic_quarterly/1993/summer/pdf/patinkin.pdf) que el dólar estuviera respaldado por cantidades variables de oro, pero vinculado a un cesto de bienes (un índice). Sin embargo, en ese momento, las ideas de Fisher no fueron adoptadas debido a problemas operacionales y de armonización de la economía de ese período.

Con la llegada de los sistemas criptoeconómicos en blockchains, los principios del dólar "compensado", la base de Fisher, finalmente podrían traducirse al ámbito de la criptoeconomía y darse una nueva vida como parte de un sistema criptoeconómico: "un token basado en blockchain puede crearse como un derivado de otro, destinado a mantener una unidad de valor estable". Los sintéticos de SORA implementan este concepto y _de alguna manera, podrías decir que Irving Fisher es el padre de los Sintéticos de SORA_.

### Monedas Estables y Activos Sintéticos Hoy

Actualmente, hay 5 tipos diferentes de monedas estables/activos vinculados:

- **Monedas Estables Respaldadas por Fiat (o Fiat Tokenizado):** Estas monedas estables están respaldadas y vinculadas a dólares (u otra moneda fiat), su valor permanece atado al precio de la moneda vinculada. Por ejemplo, [USDC](https://www.circle.com/en/usdc).
- **Monedas Estables Respaldadas por Cripto (o Monedas Estables Colateralizadas en Cadena):** Estas están respaldadas por otros activos cripto. Por ejemplo [DAI](https://makerdao.com/en/).
- **Monedas Estables Respaldadas por Metales Preciosos (o Monedas Estables Colateralizadas Fuera de Cadena):** Como el fiat estándar de oro, estas monedas estables usan oro y otros metales para respaldar su valor. Por ejemplo [Tether Gold](https://gold.tether.to/).
- **Monedas Estables Algorítmicas:** Estas monedas estables usan algoritmos para respaldar su valor. Hay algunas variantes que pueden estar vinculadas a valores fiat, dependiendo del algoritmo utilizado. Por ejemplo, [AMPL](https://www.ampleforth.org/).
- **Activos sintéticos:** Son tokens con valor vinculado a un activo oraclizado. Los activos puramente sintéticos pueden usarse para rastrear las acciones de instrumentos financieros y valores, y pueden representar muchos tipos de valor. Por ejemplo, [SYNTHETIX](https://synthetix.io/).

XSTUSD es una moneda estable algorítmica para el ecosistema SORA, inicialmente propuesta en 2018, basada en las ideas del dólar compensado de Irving Fisher. Sin embargo, en lugar de estar respaldado por oro, los Sintéticos de SORA están respaldados por XST.

## ¿Qué Hace Diferente a SORA XST?

Ahora que las monedas estables y los activos sintéticos han sido definidos y clasificados, te estarás preguntando ¿qué hace a XST destacarse del resto?

XST ayuda a resolver el problema de la liquidez de XOR creando activos sintéticos respaldados por una cantidad variable de XST y vinculados a un índice objetivo (por ejemplo, una moneda). XST se acuña/desmoneda para garantizar siempre el valor del índice vinculado. El primer índice implementado está vinculado al valor de DAI y se llama XSTUSD.

### Estabilidad No Colateralizada

En el caso de los Sintéticos de SORA, como están respaldados por XST, XST puede ser acuñado o desmonetizado (quemado) algorítmicamente para proporcionar el valor completo de los Sintéticos de SORA a demanda. El Creador de Mercado Primario de XST que acuña/desmonetiza Sintéticos de SORA y XST está integrado como una fuente de liquidez en el agregador de liquidez de Polkaswap. Esto significa que los compradores y vendedores siempre obtendrán el valor completo en XST por sus Sintéticos de SORA, y el precio nunca se desviará (más bajo o más alto) del precio del activo. Por lo tanto, los Sintéticos de SORA no están sujetos a deslizamiento de precio o falta de liquidez. Esto funciona, por ejemplo, en el caso de XSTUSD, porque un solo XSTUSD es un reclamo por $1 USD _en valor de XST_, y **no un reclamo por $USD en sí**.

Con las monedas estables normales (_específicamente las respaldadas por fiat_), el ajuste del valor del colateral y el valor de las monedas estables emitidas no es automático. Esto se debe a cambios de precio en los colaterales, y por lo tanto, es necesario sobrecolateralizar. Con tokens estables como DAI, por ejemplo, tienes que bloquear el 130% del valor en ETH para acuñar nuevo DAI, y tu bóveda se liquida si caes por debajo del nivel de colateral requerido.

Los Sintéticos de SORA no requieren sobrecolateralización y los usuarios de los Sintéticos de SORA no corren el riesgo de liquidación. Esto se debe a que siempre se puede acuñar nuevo XST para proporcionar el valor completo de un activo sintético al cambiarlo de vuelta a XST.

Normalmente, las monedas estables algorítmicas derivan su valor de contratos inteligentes vinculados a oráculos que determinan los precios actuales, sin embargo, el valor de XSTUSD actualmente se deriva del precio de XOR-DAI.

## ¿Cómo Se Implementa?

La implementación de XST es un tema bastante emocionante, sin embargo, aún
no está completa. La RFP que propone la implementación de XSTUSD ha sido
publicada y ahora la caballería del desarrollo y las pruebas está
en curso. El escenario de implementación incluye la lista blanca de XSTUSD en
Polkaswap y posteriormente configurar una fuente de liquidez, como se mencionó
anteriormente, donde el precio que los usuarios pagan nunca se desviaría del precio
de XOR-DAI.
![](/.gitbook/assets/xst-buy-sell.png)

Algunos detalles más interesantes disponibles del [RFP de XSTUSD](https://github.com/sora-xor/rfps/pull/8/files) mencionan: "Si el precio XSTUSD-XOR es menor que DAI-XOR, entonces cuando el usuario está comprando, se acuñará nuevo XOR y se utilizará para llenar el pedido (similar a la curva de bonos de token). Cuando se compra XSTUSD con XOR, entonces se pueden acuñar/desmonetizar nuevos XSTUSD al llenar los pedidos, para mantener el vínculo." Antes de que preguntes cuándo, no hay una respuesta concreta _...por ahora._

La implementación de los Sintéticos de SORA es solo el comienzo, otra implementación interesante vinculada a esto es el [Seguro Social de SORA](social-insurance.md).

Mientras tanto, puedes encontrar XSTUSD en [Polkaswap](https://polkaswap.io/). El id de activo de XST es `0x0200090000000000000000000000000000000000000000000000000000000000`. También puedes acceder a todos los activos sintéticos en Polkaswap visitando la [página de la cartera](https://polkaswap.io/#/wallet) y activando la bandera `Mostrar solo tokens sintéticos` en la interfaz de usuario, como se muestra en la pantalla a continuación:

![](/.gitbook/assets/polkaswap-show-only-synthetics.png)

También puedes intercambiar esos activos. Así es como intercambiar XOR por XSTUSD y viceversa:

![](/.gitbook/assets/xstusd-demo1.png)

Después de hacer clic en SWAP, recibirás un mensaje de confirmación con
los detalles de la transacción. Haz clic en CONFIRMAR y firma la transacción con
la extensión del navegador Polkadot.js en la ventana emergente.

![](/.gitbook/assets/xstusd-demo2.png)

Finalmente, si estás interesado en cómo funciona el sistema RFP de SORA, echa un vistazo a esta guía completa sobre [Propuesta de Nuevas Funcionalidades para Polkaswap y la red SORA](rfp.md).

---

**Fuentes**:

Kołodziejczyk, H., & Jarno, K. (2020). Stablecoin – the stable cryptocurrency. Studia BAS, 3(63), 155–170. https://doi.org/10.31268/StudiaBAS.2020.26

J. M. Keynes, Irving Fisher, Harry G. Brown. The Purchasing Power of Money: Its Determination and Relation to Credit, Interest, and Crisis, The Economic Journal, Volume 21, Issue 83, 1 September 1911, Pages 393–398, https://doi.org/10.2307/2222328

Patinkin, D. (n.d.). Irving Fisher and His Compensated Dollar Plan. 34.

Takemiya, M. (2019). SORA: A Decentralized Autonomous Economy. 2019 IEEE International Conference on Blockchain and Cryptocurrency (ICBC). doi:10.1109/BLOC.2019.8751489

## Aprender Más

- [SORA Sintéticos](/synthetics.md)
- [Economía SORA](/sora-economy.md)
