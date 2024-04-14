---
title: "Mecanismo de Consenso en la Red SORA | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende sobre el mecanismo de consenso en la red SORA y cómo asegura el acuerdo y la consistencia entre los participantes de la red. Explora los diferentes algoritmos de consenso empleados por la red SORA, como Prueba de Participación (PoS), y comprende cómo contribuyen a la seguridad y descentralización de la red."
  - - meta
    - name: keywords
      content: "mecanismo de consenso, red SORA, acuerdo, consistencia, algoritmos de consenso, Prueba de Participación, PoS, seguridad, descentralización"
---

# Consenso

La red SORA se basa en un mecanismo de **NPoS (Prueba de Participación Nominada)** para alcanzar y mantener el consenso sobre el estado de la cadena.

Hay dos actores principales: **validadores** y **nominadores**.

- **Validadores** compiten entre sí para crear nuevos bloques y obtener recompensas. Para hacerlo, un validador debe entrar en el conjunto de validadores, que consiste en los 69 validadores con la participación más alta (esto no siempre puede ser el caso, lee sobre Phragmen para saber más sobre los métodos de selección de validadores).
- **Nominadores** pueden aumentar la participación de los validadores delegando sus tokens XOR a ellos.

## Nominadores 

Un nominador es un usuario normal que publica una lista de candidatos a validadores de confianza y pone una cantidad de XOR en juego para apoyarlos (el concepto de staking). Mientras un nominador apoye a candidatos a validadores con buenas prácticas de seguridad, su staking es de bajo riesgo. Las recompensas de los nominadores son en VAL, y se basan en la cantidad de VAL quemados durante el día. Puedes leer más sobre el token VAL y las recompensas de staking [aquí](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8).

Los nominadores mantienen segura la red SORA delegando su XOR a validadores confiables.

Debes elegir cuidadosamente a los validadores: si no se comportan adecuadamente, serán recortados y perderás XOR también. Sin embargo, si siguen las reglas de la red, entonces no hay riesgo de recorte. Lee más sobre el recorte [aquí](https://support.polkadot.network/support/solutions/articles/65000110858-what-does-it-mean-to-get-slashed-).

Cuando estás nominando, tu XOR no se puede mover de inmediato, sino que necesita ser desvinculado primero. Este proceso tarda siete días.

### Nominaciones Activas

Como se dijo anteriormente, los nominadores tienen que seleccionar a validadores elegidos. Los nominadores pueden seleccionar hasta 16 diferentes validadores, pero solo se requiere que uno de ellos se una al conjunto de validadores. Si más de uno de los validadores seleccionados se une al conjunto activo, solo uno será realmente apoyado por tu participación.

### Cómo Seleccionar Validadores Efectivamente

Para proporcionar algunos validadores de alta calidad en la red como un bien común, el Parlamento SORA mantiene la siguiente lista de validadores:

- cnVqqrLjSGQ7in5j3GVuXjr4b1benhdN72NQnqwzrbWxHWjYZ
- cnVyxUnvsrgtiCEaeHudqGEJuHPspfp89mGghLz21mVqdaQwv
- cnSdNvs39CVRDiFW4pEtaqZWGoSU7B8UkDKjwCb3mX999CsZH
- cnScvgXFLQgeNFoVfMjf2U5MC24CkdRkLTUKbJYefYRwqy3VZ
- cnSgH7nHuiPk5Z2cubwsFZGdmzvzhrgBKgTqLCeR7hyo6dek8
- cnU2w3CPn9narRKeSamHmKBBaSXY949A4udq6APBXNkmnkwsJ
- cnV58Z8zT37K6iUsijRjYHBzk95aTqvLfn3WvvfJcCwFQKHCL
- cnRrijYYHb4fWPuF9MraEvm8nvfztYDxcAZfKfN2AyKLBn81A
- cnUDwD4nPorodyd3inwThA2yBt2dFuHTfnvKowH6dirk47Qqr

Un aspecto importante a evaluar es la **comisión del validador**. La comisión es el porcentaje de la recompensa que toma el validador antes de que las recompensas se distribuyan a los nominadores. Como nominador, podrías pensar que la comisión más baja es la mejor, pero esto no siempre es cierto. Los validadores deben poder operar de manera eficiente para continuar operando de manera sostenible. Los validadores independientes dependen de la comisión para cubrir sus costos ayudando a mantener la red descentralizada.

También debes tomar en consideración la **participación** de los validadores. Esta es la cantidad de XOR que el validador ha apostado ellos mismos. Una alta cantidad de participación propia puede considerarse como tener más "piel en el juego" y así los validadores están confiados sobre no ser recortados. Sin embargo, un validador que no tenga una gran cantidad de "participación propia" no es automáticamente no confiable, ya que el validador podría estar nominando desde una dirección diferente.

### Filtrando Validadores

En la página [Objetivos](https://polkadot.js.org/apps/#/staking/targets), puedes [filtrar](https://wiki.polkadot.network/docs/learn-nominator#filter-out-validators-with-undesirable-traits) validadores que tengan características que puedan indicar un problema con nominarlos. Puedes activar y desactivar estos filtros para ayudar a reducir cuáles validadores deberías nominar. Es importante notar que ninguna de estas características es necesariamente "mala"; sin embargo, dependiendo de tu metodología de selección de validadores, pueden ser características que estarías interesado en filtrar.

<!-- TODO: transform this into a table -->

- **Único de operador**: No mostrar grupos de validadores operados por un solo operador.
- **Sin comisión del 20%+**: No mostrar ningún validador con una comisión del 20% o superior.
- **No al máximo de capacidad**: No mostrar ningún validador que esté operando [al máximo de capacidad](https://wiki.polkadot.network/docs/glossary#capacity) (es decir, podría potencialmente estar sobresuscrito).
- **Pagos recientes**: Solo mostrar validadores que recientemente hayan causado [un pago a ser emitido](https://wiki.polkadot.network/docs/learn-simple-payouts). Nota que cualquiera puede causar que un pago ocurra; no tiene que ser el operador de un validador.
- **Solo elegidos**: Solo mostrar validadores que actualmente estén en el conjunto activo (es decir, han sido elegidos para producir bloques esta era).
- **Solo con identidad**: Solo mostrar validadores que hayan establecido una [identidad](https://wiki.polkadot.network/docs/learn-identity). Nota que esta identidad no tiene que ser verificada por un registrador para que el validador aparezca en la lista.

## Validadores

Los validadores son nodos que han sido seleccionados para producir bloques. Los validadores son una parte central de la red SORA porque tienen que aceptar o rechazar bloques de transacciones. La elección de validadores se hace usando el [Método de Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen), el mismo utilizado por Polkadot y Kusama. Considerando que ejecutar un nodo validador requiere esfuerzo, no irá sin recompensa. Aquellos que ejecutan nodos validadores recibirán recompensas en forma de tokens VAL, basadas en la cantidad de VAL quemados el último día.

Los validadores juegan un rol crucial en la red SORA, ya que aseguran y descentralizan aún más todo el sistema. Alojar un nodo validador es bastante sencillo, pero sí tiene requisitos técnicos que deben ser cuidadosamente considerados.

### Cómo se Eligen los Validadores

No todos los que se registran en la red para convertirse en validadores necesariamente realizarán bloques. Si la competencia es alta y hay más del número máximo de validadores activos posibles para una época, entonces aquellos validadores con mayor XOR probablemente participarán en la validación real. En este caso, la apuesta mínima de facto para un validador activo aumentará automáticamente.

Los validadores se seleccionan utilizando el [Método Phragmen] de Polkadot (https://wiki.polkadot.network/docs/en/learn-phragmen#where-is-the-phragm%C3%A9n-method-used-in-polkadot).

### Conviértete en un validador de SORA

La red SORA está completamente descentralizada y depende de los miembros de la comunidad para ejecutar los nodos. Los nodos validadores serán responsables de realizar bloques en la red. Para ayudar a garantizar el éxito de Polkaswap, necesitamos el apoyo de la comunidad para ejecutar nodos de validación en la red SORA. Esto es lo que necesitará para comenzar:

```
Machine with Linux, Windows, or macOS
Docker https://docs.docker.com/get-docker/ - follow the install guide
At least 64GB RAM
160GB free space
Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
Uptime of 99.9%
```

Si está interesado en ayudar a asegurar el futuro de SORA y Polkaswap, y en obtener recompensas en el proceso, lea más sobre [ejecutar un nodo SORA Mainnet] (./running-a-node.md).

## Recompensas

Su arduo trabajo no quedará sin recompensa. Aquellos que ejecuten nodos de validación o nominen recibirán recompensas en forma de tokens [**VAL**](https://medium.com/sora-xor/sora-validator-reward-token-val-c96a8afb8541).
Las recompensas no son fijas, sino que dependen de la cantidad de transacciones en la red SORA y del uso de la curva de vinculación de tokens.
De hecho, la mitad de todas las tarifas en la red SORA y el 1% de lo que se compra en TBC se utilizan para recomprar VAL en Polkaswap y quemarlos. Luego, diariamente, se rementa un porcentaje del VAL quemado y se entrega a los validadores y nominadores. Este porcentaje fue del 90% en TGE y se reducirá linealmente hasta quedar plano después de cinco años.

Cuanto mayor sea el número de transacciones en la red SORA, mayores serán las recompensas para los nominadores y validadores.

## Aprende más

- [Nominación de Validadores](/nominating-validators)
- [Ejecutar un nodo](/running-a-node)