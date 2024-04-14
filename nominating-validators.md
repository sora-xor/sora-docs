---
title: "Nominar Validadores | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo nominar validadores en la red SORA y participar en el mecanismo de consenso. Descubre el proceso de selección y nominación de validadores, entiende su rol en la seguridad de la red y contribuye activamente a la gobernanza descentralizada del ecosistema SORA."
  - - meta
    - name: keywords
      content: "nominar validadores, red SORA, mecanismo de consenso, seleccionar validadores, nominar validadores, seguridad de la red, gobernanza descentralizada"
---

# Nominar Validadores

Nominar validadores es una parte importante del ecosistema SORA, ya que ayuda a asegurar y descentralizar la red. Aunque puedes nominar a cualquier validador, deberías investigar por tu cuenta para asegurarte de que los validadores que nomines sean de alta calidad y no ataquen la red. ¡Si los validadores causan daño a la red, perderás dinero como nominador!

Para proporcionar algunos validadores de alta calidad en la red como un bien común, el Parlamento de SORA mantiene la siguiente lista de validadores:

- cnVqqrLjSGQ7in5j3GVuXjr4b1benhdN72NQnqwzrbWxHWjYZ
- cnVyxUnvsrgtiCEaeHudqGEJuHPspfp89mGghLz21mVqdaQwv
- cnSdNvs39CVRDiFW4pEtaqZWGoSU7B8UkDKjwCb3mX999CsZH
- cnScvgXFLQgeNFoVfMjf2U5MC24CkdRkLTUKbJYefYRwqy3VZ
- cnSgH7nHuiPk5Z2cubwsFZGdmzvzhrgBKgTqLCeR7hyo6dek8
- cnU2w3CPn9narRKeSamHmKBBaSXY949A4udq6APBXNkmnkwsJ
- cnV58Z8zT37K6iUsijRjYHBzk95aTqvLfn3WvvfJcCwFQKHCL
- cnRrijYYHb4fWPuF9MraEvm8nvfztYDxcAZfKfN2AyKLBn81A
- cnUDwD4nPorodyd3inwThA2yBt2dFuHTfnvKowH6dirk47Qqr

## Vía PolkadotJS UI

Para nominar a un Validador exitosamente en la red SORA, necesitas:

- La [extensión Polkadot.js](https://polkadot.js.org/extension/) instalada en tu navegador, con una cuenta creada y algo de XOR

::: info
Las recompensas por staking **expiran** después de 84 eras. En **SORA**, eso es aproximadamente 21 días.
:::

1. Ve a SORA[ polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/staking), haz clic en "Red" y luego en "Staking". **Asegúrate de estar conectado a la red SORA**, deberías ver el logo en la parte superior izquierda.

![](.gitbook/assets/polkadotjs-staking-tab.png)

2. A continuación, necesitarás crear un nuevo Stash de Nominador. Haz clic en "Secciones de cuenta" y luego en "Nominador", como se muestra en las imágenes a continuación. Asegúrate de leer cuidadosamente la información mostrada.

![](.gitbook/assets/polkadotjs-account-actions.png)

![](.gitbook/assets/polkadotjs-nominator-button.png)

![](.gitbook/assets/polkadotjs-setup-nominator.png)

3. Establece las cuentas de Stash y Controlador.

Piensa en el stash como tu billetera fría y el controlador como tu billetera caliente.

Las operaciones de financiación son controladas por el stash, mientras que las acciones no relacionadas con financiación son gestionadas por el controlador. Tener cuentas de stash y controlador hace que tus fondos sean más seguros.

Puedes leer más [aquí](https://www.holdpolkadot.com/post/stash-account-controller-account-on-polkadot-and-kusama).

4. Establece la cantidad que deseas apostar y haz clic en "Siguiente".

5. El siguiente paso es elegir los Validadores que deseas nominar.

La red SORA utiliza el [Método de Phragmèn](https://wiki.polkadot.network/docs/en/learn-phragmen) para seleccionar Validadores.

Durante cada era, los Validadores son elegidos usando el Método de Phragmèn, y aquellos que los nominaron recibirán una recompensa (una recompensa de participación).

Desde la perspectiva de un Nominador, solo necesitas nominar al menos a uno de los Validadores que es elegido durante cada era. Esto explica por qué puedes nominar a más de un candidato al mismo tiempo, con un máximo de 16 validadores por cuenta de nominador.

::: info Aviso

Es importante nominar a validadores confiables y seguros. La participación de los Validadores y sus Nominadores puede ser reducida como castigo por no seguir el protocolo. Puedes leer más sobre el Slashing\* [aquí](https://w3f-research.readthedocs.io/en/latest/polkadot/slashing/amounts.html).

:::

![](.gitbook/assets/polkadotjs-setup-nominator-step2.png)

6. Cuando hayas seleccionado los validadores, haz clic en "Vincular y Nominar", "Firmar y Enviar" y luego firma la transacción con la extensión de Polkadot.js, como se muestra en las imágenes a continuación:

![](.gitbook/assets/polkadotjs-bond-and-nomintate-extrinsic.png)

![](.gitbook/assets/polkadotjs-bond-and-nomintate-extrinsic-signing.png)


