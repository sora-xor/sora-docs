# Libros de Órdenes

::: info

Si eres nuevo en los libros de órdenes y quieres entender sus mecanismos básicos, te recomendamos encarecidamente ver el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kl4-VJ2K8Ik" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::

## Caso de Uso

Un libro de órdenes es un componente fundamental de un intercambio descentralizado (DEX) que facilita el comercio de activos digitales entre compradores y vendedores de manera transparente y eficiente. Actúa como un meta libro contable virtual que registra todas las órdenes de compra y venta colocadas por los participantes en el mercado.

Al aprovechar el poder de la tecnología blockchain, los libros de órdenes en intercambios descentralizados ofrecen varias ventajas:

- **Mejor comprensión del precio**: Los compradores y vendedores podrán ver ofertas reales, lo que les permite tomar decisiones más informadas sobre el verdadero valor de mercado de los activos. Esto puede llevar a un comercio más eficiente.
- **Mejora de la liquidez**: Los compradores y vendedores tendrán mayor control sobre los precios a los que comercian. Esto ayuda a atraer más participantes al mercado, lo que lleva a una mayor liquidez y un mercado más dinámico.
- **Fuente de liquidez adicional para el Proxy de Liquidez**: Los comerciantes tendrán una opción alternativa para usar el Proxy de Liquidez, lo que puede impactar positivamente en los resultados comerciales.
- **Reducción del deslizamiento**: En mercados XYK, las operaciones grandes pueden causar cambios significativos en los precios debido al impacto del tamaño de la operación en el precio de mercado. Con los libros de órdenes, los comerciantes pueden colocar órdenes limitadas al precio deseado, reduciendo el riesgo de deslizamiento.
- **Más opciones de comercio**: Los comerciantes tendrán acceso a varios mecanismos de comercio, incluidas órdenes de mercado, órdenes limitadas, órdenes de stop y más. Esto puede llevar a estrategias de comercio más sofisticadas y una mejor gestión del riesgo.
- **Mercado alternativo para el comercio de NFT**: Los NFT pueden tener su propio libro de órdenes, donde los usuarios pueden colocar órdenes de compra y venta. Aunque puede no ser el mecanismo óptimo para el comercio de NFT debido a su unicidad y la necesidad de pasos de volumen y precio personalizados (se consideran más adecuados los modelos de subasta o mecanismos de igual a igual donde los compradores y vendedores pueden negociar directamente el precio de los NFTs), el mecanismo del libro de órdenes puede ser más relevante para el comercio de NFT en comparación con el Pool XYK.
- **Otros beneficios heredados de las características DEX**:
  - _Accesibilidad sin permisos_: Los DEX permiten a cualquier persona participar en el comercio de activos digitales sin un intermediario centralizado. Esto promueve la inclusión financiera y proporciona acceso a una base de usuarios global, independientemente de la ubicación geográfica.
  - _Propiedad y control mejorados_: Todos los activos permanecen bajo la propiedad y control de los usuarios.
  - _Transparencia_: Los usuarios pueden verificar la autenticidad, historial de propiedad y datos de transacción, fomentando la confianza y reduciendo el riesgo de fraude o manipulación por parte de un intermediario centralizado.
  - _Beneficios de la descentralización_: Reducción de riesgos de hackeos, tiempo de inactividad o violaciones de datos asociadas con plataformas centralizadas.
  - _Desarrollo impulsado por la comunidad_: Los usuarios pueden crear libros de órdenes ellos mismos, contribuir a la liquidez, establecer sus propios parámetros de comercio e influir en el desarrollo utilizando herramientas de gobernanza descentralizadas. Esto fomenta la innovación, la competencia y un econsistema vibrante.

Aunque los libros de órdenes en los intercambios descentralizados ofrecen numerosos beneficios, es importante considerar sus limitaciones:

- **Escalabilidad**: Las blockchains tienen limitaciones en el procesamiento de volúmenes de transacción.
- **Gestión del libro de órdenes**: En sistemas centralizados, el operador del intercambio puede gestionar el libro de órdenes y asegurar su operación eficiente. En las implementaciones descentralizadas del libro de órdenes, la gestión queda a cargo de los usuarios, lo que puede llevar a errores, ineficiencias y manipulación potencial.

## Instrucciones Paso a Paso

En esta sección, descubrirás cómo ejecutar diferentes operaciones asociadas con el libro de órdenes y todas sus entidades en la blockchain de SORA.

### Operaciones con órdenes

Sugerimos realizar operaciones de órdenes, como colocar una orden limitada o cancelar una orden limitada, directamente en Polkaswap. Puedes encontrar ejemplos de estas acciones en una [guía dedicada](./polkaswap-order-book-trading).

### Operaciones con libros de órdenes

Ejecutar operaciones relacionadas con libros de órdenes, como crear un nuevo libro de órdenes, eliminar uno existente, actualizar sus detalles o alterar su estado, requiere completarse a través de la gobernanza en cadena y está sujeto a votación comunitaria. Este proceso democrático refleja las prácticas existentes empleadas en otros escenarios.

Por ejemplo, supongamos que deseas crear un nuevo par de comercio para el libro de órdenes. Primero, necesitarás obtener los calldata. Para hacerlo, navega a `polkadot.js` (o dotapps.io) y accede a la pestaña `Desarrollador` -> `Extrínsecos`. Localiza el extrínseco [`orderbook.createOrderbook`](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html#variant.create_orderbook) y complétalo con tus parámetros deseados (refiérete a la [plantilla](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/extrinsics/decode/0x3900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) proporcionada).

Una vez que hayas llenado el extrínseco, copia sus calldata codificados. Luego, consulta la [documentación oficial de Gobernanza](https://wiki.polkadot.network/docs/maintain-guides-democracy). Recomendamos crear una preimagen con los calldata copiados. Una vez completado, puedes iniciar una propuesta pública o contactar directamente al equipo del consejo para acelerar la colocación de tu propuesta en la cola externa. Dependiendo de las circunstancias, una propuesta técnica puede acelerar el proceso aún más.

## Desarrollo

Si tienes experiencia en RUST y Substrate, te invitamos a explorar nuestra base de código dedicada a los libros de órdenes. Siguiendo [este enlace](https://github.com/sora-xor/sora2-network/tree/master/pallets/order-book), tendrás acceso al código fuente, lo que te permite profundizar en los detalles de implementación y funcionalidades de los libros de órdenes dentro de SORA.

Para más transparencia en el desarrollo de libros de órdenes, recomendamos explorar el correspondiente [hito de GitHub](https://github.com/sora-xor/sora2-network/milestone/4). Esto te proporcionará información adicional sobre el progreso y avances en la implementación de libros de órdenes.

### Modelo de Datos

Puedes revisar la lista a continuación para obtener una comprensión más profunda de los modelos de datos para cada componente que se puede construir usando esta API:

- [Llamadas](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html)
- [Errores](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Error.html#variants)
- [Eventos](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Event.html#variants)
- [Almacenamientos](https://sora-xor.github.io/sora2-network/order_book/pallet/index.html#types)
- [Más información](https://sora-xor.github.io/sora2-network/order_book/index.html#reexport.UserOrders)

### Ejemplo de Integración

Aquí tienes un fragmento de código escrito en JS:

::: code-group

```ts [ts]
import { api } from "@sora-substrate/util";
import { PriceVariant } from "@sora-substrate/liquidity-proxy";

import { delay, withConnectedAccount } from "./util";

async function main(): Promise<void> {
  await withConnectedAccount(async () => {
    const xor =
      "0x0200000000000000000000000000000000000000000000000000000000000000";
    const val =
      "0x0200040000000000000000000000000000000000000000000000000000000000";
    const account = "cnVkoGs3rEMqLqY27c2nfVXJRGdzNJk2ns78DcqtppaSRe8qm";

    const orderBooks = await api.orderBook.getOrderBooks();
    console.log("orderBooks", orderBooks);

    await api.orderBook.getUserOrderBooks(account);

    api.orderBook
      .subscribeOnUserLimitOrdersIds(val, xor, account)
      .subscribe((ids) => {
        console.log("ids", ids);
      });

    const order = await api.orderBook.getLimitOrder(val, xor, 16);
    console.log("order", order);

    api.orderBook.subscribeOnAggregatedAsks(val, xor).subscribe((asks) => {
      console.log("asks", asks);
    });

    api.orderBook.subscribeOnAggregatedBids(val, xor).subscribe((bids) => {
      console.log("bids", bids);
    });

    const price = "1100000000000000000";
    const amount = "100000000000000000000";
    const side: PriceVariant = PriceVariant.Buy;

    await api.orderBook.placeLimitOrder(val, xor, price, amount, side);

    await delay(100000);
  });
}

main()
  .catch(console.error)
  .finally(() => process.exit());
```

:::

Estos ejemplos de código demuestran varias funcionalidades, desde la gestión de suscripciones de almacenamiento hasta la ejecución de funciones extrínsecas.
