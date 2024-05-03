# Establecer un canal HRMP

Para establecer comunicación entre su parachain y SORA, debe crear canales HRMP que pasen por la cadena de retransmisión para transferir mensajes entre parachains.

Recuerde que los canales HRMP suelen ir en una dirección. Para una comunicación bidireccional, deberá configurar otro canal en sentido contrario. Por lo tanto, lo siguiente se divide en subsecciones:

## Tu Parachain a SORA

1. Obtenga los datos de llamada codificados del extrínseco `hrmp.hrmpInitOpenChannel` en la cadena de retransmisión.

Este código único incluye un detalle de "destinatario" que le indica a la cadena de retransmisión a qué parachain desea conectarse. El destinatario cambia según el entorno en el que planea establecer el canal. Para Kusama, consulte [esta lista](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fksm-rpc .stakeworld.io#/parachains), y para Rococó, vaya a [esta lista](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/ paracaídas).

Combine esta identificación de parachain con la otra información de la documentación. Por ejemplo, para Rococó tendrás algo como esto: `0x3c00db070000e803000000900100`.

2. Dentro de su parachain, redacte un mensaje XCM que notifique a la cadena de retransmisión sobre la intención de abrir un canal con SORA. Consulte la [documentación oficial](https://docs.substrate.io/reference/how-to-guides/parachains/add-hrmp-channels/) para ver un ejemplo ilustrativo del mensaje XCM.

::: info

Es importante reconocer que si su implementación de la lógica del canal HRMP difiere de la paleta estándar `polkadotXcm.send`; debe modificar este paso en consecuencia.

:::

Una vez que lo extrínseco se ejecuta con éxito, SORA debe aceptar el establecimiento del canal.

3. Posteriormente, el equipo SORA aceptará el canal incorporando los datos de llamada codificados de `hrmp.hrmpAcceptOpenChannel`. Estos datos incluirán el ID de su parachain como parámetro y se ejecutarán mediante la llamada `xcmApp.sudoSendXCM`.

Tras una ejecución exitosa, se establecerán (an) canales HRMP(s) desde su parachain a SORA.

## SORA a tu parachain

Los pasos aquí reflejan los de la subsección anterior. Para los pasos (1) y (2) descritos anteriormente, SORA inicia un mensaje XCM para proponer el establecimiento del canal. Posteriormente, es su responsabilidad codificar `hrmp.hrmpAcceptOpenChannel` con el ID de parachain de SORA. Por ejemplo, en el caso de Rococó, los datos de llamada codificados serían: `0x3c01db070000`. Ejecute un mensaje XCM desde su parachain de acuerdo con las [directrices oficiales] (https://docs.substrate.io/reference/how-to-guides/parachains/add-hrmp-channels/), incluidos los datos de llamada codificados que contienen ID de paracaídas de SORA.

Tras la ejecución exitosa de este proceso, su parachain se configurará para recibir mensajes de SORA parachain.

Aún necesitaremos registrar los activos que se transferirán de una cadena a otra. En su parachain, deberá registrar los activos de SORA. En SORA Mainnet, necesitaremos registrar sus activos.