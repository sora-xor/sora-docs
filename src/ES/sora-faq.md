---
title: "Preguntas Frecuentes de SORA - Preguntas Frecuentes sobre la Red SORA | Documentos de SORA"
head:
  - - meta
    - name: viewport
      content: "width=device-width, initial-scale=1.0"
  - - meta
    - name: description
      content: "Encuentra respuestas a preguntas frecuentes (FAQ) sobre SORA - un sistema económico descentralizado construido en la red SORA. Obtén información sobre el token XOR, staking, gobernanza y más."
  - - meta
    - name: keywords
      content: "FAQ de SORA, preguntas frecuentes, red SORA, token XOR, staking, gobernanza"
  - - meta
    - name: author
      content: "Red SORA"
  - - meta
    - property: og:title
      content: "FAQ de SORA - Preguntas Frecuentes sobre la Red SORA | Documentos de SORA"
  - - meta
    - property: og:description
      content: "Encuentra respuestas a preguntas frecuentes (FAQ) sobre SORA - un sistema económico descentralizado construido en la red SORA. Obtén información sobre el token XOR, staking, gobernanza y más."
  - - meta
    - property: og:type
      content: "website"
  - - meta
    - property: og:site_name
      content: "Documentos de SORA"
  - - meta
    - property: og:locale
      content: "en_US"
  - - meta
    - name: twitter:card
      content: "summary"
  - - meta
    - name: twitter:title
      content: "FAQ de SORA - Preguntas Frecuentes sobre la Red SORA | Documentos de SORA"
  - - meta
    - name: twitter:description
      content: "Encuentra respuestas a preguntas frecuentes (FAQ) sobre SORA - un sistema económico descentralizado construido en la red SORA. Obtén información sobre el token XOR, staking, gobernanza y más."
  - - meta
    - name: twitter:site
      content: "@sora_xor"
  - - meta
    - name: twitter:creator
      content: "@sora_xor"
---

# Preguntas Frecuentes de SORA

## ¿En qué está construido SORA?

La red SORA ([Polkaswap](https://polkaswap.io/) incluido) está construida con [Substrate](https://www.parity.io/substrate), un marco para crear criptomonedas y otros sistemas descentralizados, que escala de manera más eficiente que Ethereum, permitiendo tarifas más bajas. Polkadot está construido con Substrate, por lo tanto, los proyectos construidos con Substrate pueden funcionar de manera nativa en Polkadot como Parachains.

## ¿Cómo puedo apoyar a SORA en las subastas de parachain?

SORA ganó la 24ª subasta de parachain de Kusama para el 25º arrendamiento (22 de febrero de 2022 - 31 de enero de 2023) el 6 de febrero de 2022. Los detalles se pueden encontrar [aquí](https://wiki.sora.org/sora-kusama-parachain-crowdloan).

Después de que se asegure el espacio en la red Kusama, los usuarios pueden apoyar la financiación de las subastas en los próximos años comprando XOR con DOT y KSM de la curva de enlace de tokens. Al hacerlo, aumentarás las reservas de la curva de enlace de tokens y estas se utilizarán para hacer una oferta en las subastas. Además, hay una recompensa especial en PSWAP al comprar con DOT y KSM, esta recompensa es mayor cuando hay menos reservas, y disminuirá a medida que se acumulen. Puedes leer el artículo completo sobre el programa de incentivos [aquí](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

En los próximos meses, no hay más subastas planificadas. Próximamente, los tokens KSM estarán disponibles en Polkaswap y los usuarios pueden apoyar futuras subastas usándolos para comprar XOR recién acuñado de la [curva de enlace de tokens](https://wiki.sora.org/token-bonding-curve). Al hacerlo, aumentarás las reservas de la curva de enlace de tokens, que se utilizarán para hacer una oferta en las subastas. Además, hay una recompensa especial en PSWAP al comprar con DOT y KSM, esta recompensa es mayor cuando hay menos reservas, y disminuirá a medida que se acumulen. Puedes leer el artículo completo sobre el programa de incentivos

## ¿Cómo participo en el Parlamento SORA?

Actualmente no hay un cronograma preciso para la implementación del Parlamento y, aunque no está decidido, probablemente se requerirán aproximadamente 150 XOR para un bono de ciudadanía. Este bono puede ser reducido si el ciudadano es condenado por un Jurado de Política por romper las reglas. A través de un proceso de sorteo, los miembros del Parlamento serán elegidos entre los ciudadanos.

Todos los ciudadanos tienen la misma posibilidad de ser seleccionados, tienen igual poder de voto y reciben igual recompensa por participación.

## ¿Puedo comprar tokens con FIAT?

Sí, en [Polkaswap.io](https://polkaswap.io/#/swap) puedes comprar tokens usando Moonpay y X1.
Con X1 puedes comprar XOR nativo de SORA.
En Moonpay, actualmente solo están disponibles ETH y DAI como tokens, puedes leer más sobre cómo hacerlo en este [tutorial](https://wiki.sora.org/guides/how-to-buy-tokens-using-moonpay-with-your-credit-card).

## ¿Qué es un ID de activo (dirección)?

El ID de activo (dirección) es un identificador único de activo en la red SORA (como una dirección de contrato en Ethereum). Puedes ver las direcciones de ID de token disponibles en la red SORA [aquí](https://wiki.sora.org/polkaswap/tokens-id-addresses).

## Cómo Funcionan las Direcciones en la Red SORA

Si has usado la red SORA o Polkaswap, probablemente hayas notado que generalmente las direcciones comienzan con 5, pero en SORAscan tienes que ingresar una dirección que comience con `cn`. Entonces, ¿cómo funciona?

El formato de dirección utilizado en cadenas basadas en Substrate es [SS58](<https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)>), y cada cadena puede seleccionar su propio prefijo, generando diferentes direcciones. Aquí hay un ejemplo:

Polkadot tiene el prefijo 0, y una cierta función de derivación hace que todas las direcciones de Polkadot comiencen con 1.

SORA tiene el prefijo 69, y el trabajo de la misma función de derivación resulta en direcciones de SORA que comienzan con `cn`.

42 ha sido elegido como el prefijo universal para ser utilizado en cualquier cadena Substrate. Este prefijo genera direcciones que comienzan con 5, y estas direcciones son reconocidas y aceptadas por todas las cadenas basadas en Substrate. Por ejemplo, en Polkaswap puedes conectar el formato general de direcciones (comenzando con 5) o el formato único de direcciones de SORA (comenzando con `cn`).

Una implicación de este mecanismo es que usando la misma semilla puedes almacenar tokens de diferentes cadenas Substrate. Sin embargo, esto no es recomendado, ya que disminuye la seguridad (si tu semilla se ve comprometida perderás fondos en todas las redes).

Puedes leer más [aquí](https://wiki.polkadot.network/docs/en/learn-accounts).

## ¿Quiénes son los Mayores Poseedores de XOR?

Cuando se observan los principales tenedores en [Subscan](https://sora.subscan.io/account), varias de esas direcciones son cuentas técnicas que apoyan toda la red. Aquí hay una tabla con las cuentas técnicas que tienen XOR: Se han añadido direcciones adicionales correspondientes a las cuentas de recompensas de Polkaswap. Esta lista recibirá actualizaciones continuas para asegurar su precisión.

| Dirección                                                                                                                              | Rol                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------- |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7m6B1ToDe2qJbdz7aQw8F3W1CK)​ | **Contrato inteligente del puente de Ethereum**       |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7o32AxA6oQU4AzkUMnmMwM6Tk7)​ | **Piscina XOR-PSWAP**                                 |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7f4sMKaWQF583on92JL48B9kjq)​ | **Piscina XOR-VAL**                                   |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7fuxWZxsAP6HA1UauiMxyJ4Wmp)​ | **Piscina XOR-DAI**                                   |
| ​[cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB](https://sora.subscan.io/account/cnTQ1kbv7PBNNQrEb1tZpmK7jT6zmAjZB72t6j7HHmgtiMKgB)​ | **Piscina XOR-ETH**                                   |
| cnTQ1kbv7PBNNQrEb1tZpmK7easBTbiFMQUUwfLf9LX66ND8u                                                                                      | **Recompensas TBC**                                   |
| cnTQ1kbv7PBNNQrEb1tZpmK7fJT4Awahg1d8aoYoGGv2ATz7m                                                                                      | **Recompensas del Creador de Mercado**                |
| cnTQ1kbv7PBNNQrEb1tZpmK7kr72qNfcUDvqPxUdw4h2A5axX                                                                                      | **Recompensas de Farming**                            |
| cnTQ1kbv7PBNNQrEb1tZpmK7iW5aLF24hi1k1H4t3L49TzhPe                                                                                      | **Cuenta Reserva de PSWAP y VAL Pre-Lanzamiento**     |
| cnTQ1kbv7PBNNQrEb1tZpmK7ftiv4yCCpUQy1J2y7Y54Taiaw                                                                                      | **Distribución de PSWAP para Proveedores de Liquidez**|

## ¿Qué es un validador?

Los validadores son nodos que han sido seleccionados para producir bloques. Los validadores son una parte central de la red SORA porque tienen que aceptar o rechazar bloques de transacciones. La elección de validadores se realiza utilizando el [Método de Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen), el mismo utilizado por Polkadot y Kusama. Considerando que ejecutar un nodo validador requiere esfuerzo, no quedará sin recompensa. Aquellos que ejecutan nodos validadores recibirán recompensas en forma de tokens VAL, basado en la cantidad de VAL quemado el último día.

Puedes leer más [aquí](/consensus).

## ¿Qué es un nominador?

Un nominador es un usuario normal que publica una lista de candidatos validadores de confianza y pone una cantidad de XOR en juego para apoyarlos (el concepto de staking). Mientras un nominador apoye a candidatos validadores con buenas prácticas de seguridad, su staking es de bajo riesgo. Las recompensas de los nominadores son en VAL y se basan en la cantidad de VAL quemado durante el día. Puedes leer más sobre el token VAL y las recompensas de staking [aquí](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

También puedes [leer más aquí](/consensus).

Para aprender cómo hacer stake de tu XOR, echa un vistazo al tutorial dedicado.

## Aprende Más

- [XOR](/xor.md)
- [Economía SORA](/sora-economy.md)