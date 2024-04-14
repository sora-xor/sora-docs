---
title: "Cómo Solicitar un Juicio de Identidad para SORA | Verificándote | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo solicitar un juicio de identidad para tu cuenta de SORA y obtener la verificación. Sigue estos pasos para establecer tu identidad en cadena y ganar confianza en la comunidad SORA."
  - - meta
    - name: keywords
      content: SORA, juicio de identidad, solicitar juicio, polkadot.js, identidad en cadena, verificación, fondos de marketing comunitario, Fondos de Marketing Comunitario

# Identidades en Redes Basadas en Substrate

## TL;DR

- Puedes establecer una identidad en cadena para facilitar que otros reconozcan tu dirección.
- Como Validador, añade confianza extra a los Nominadores si conocen tu identidad en cadena.
- Este tutorial te ayudará a configurar una identidad en cadena y solicitar un juicio a tu identidad (como una entidad confiable o verificada en la red SORA)

## Vía PolkadotJS UI

### Registrar una Identidad

Requisitos:

- Una cuenta de SORA (sigue el [tutorial de Creación de Cuenta](create-an-address.md) si no tienes una)
- ~5600 XOR para pagar la tarifa de red y del registrador
- 5 XSTUSD como donación a los fondos de la comunidad

Sigue estos pasos para configurar una identidad:

#### 1. Ve a la [Aplicación Polkadot JS apuntando al Mainnet de Sora](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/accounts) en la pestaña de cuentas:

#### 2. Haz clic en el icono del menú hamburguesa en la cuenta para la cual deseas registrar una identidad. Luego selecciona "Establecer identidad en cadena":

  <center><img src="/.gitbook/assets/id-select-menu.png" width="400"></center>

#### 3. Registra tu Identidad y haz clic en "Establecer Identidad" cuando termines.

   <center><img src="/.gitbook/assets/id-register-id.png" width="400"></center>

::: info

Ten en cuenta que tendrás que pagar una pequeña tarifa de transacción en XOR por firmar.

:::

Una vez completada la transacción, ¡tu cuenta mostrará una identidad!

## Solicitar Juicio de Identidad

Una vez que hayas completado todos los pasos descritos en la sección [Registrar una identidad](/id.md#register-an-identity), puedes solicitar una verificación adicional para obtener una marca de verificación verde prominente junto al nombre de tu cuenta. Esta verificación sirve como indicación de que eres un usuario reconocido y verificado, permitiendo a otros identificar y confiar fácilmente en tu cuenta.

### 1. Solicita juicio de un registrador en polkadot.js.

Usando la cuenta que deseas verificar, ve a la pestaña Desarrollador y sigue estos pasos:

- Haz clic en Extrínsecos.
- Selecciona `Identity` y `requestJudgement`.
- En `regIndex`, coloca `1` (`reg_index` = `0` ya no está activo). El registrador `1` tiene una tarifa de 5000 `XOR`.
- Envía la transacción.

  <center><img src="/.gitbook/assets/requestJudgement.png" width="600"></center>

### 2. Dona a la dirección de los Fondos de Marketing Comunitario.

Dona un mínimo de 5 `XSTUSD` por cuenta que solicita juicio a la dirección de los Fondos de Marketing Comunitario (`cnSN9X2HNU3uYjRbGvTwpgUdtVDuNk1g29XkcQNoNBQxgt1ii`). Los fondos de esta billetera comunitaria se utilizan para marketing de SORA.

### 3. Contacta directamente al registrador. Puedes encontrar su información de contacto en su perfil.

| Plataforma de redes sociales/mensajería | Identificador                 |
| ------------------------------- | -------------------------- |
| Telegram                        | https://t.me/SpicyHotWings |
| Twitter                         | @mishokanaria              |
| Riot                            | @spicyhotwings:matrix.org  |

### 4. Verifica tu identidad.

Necesitarás demostrar que la información en cadena es legítima. Cada registrador tendrá su propio conjunto de procedimientos para verificar tu identidad y valores, y solo una vez que hayas cumplido con sus requisitos, el proceso continuará.

::: info

Puedes cambiar libremente cualquier valor durante el proceso de juicio hasta que estés verificado. Sin embargo, cambiar el valor de incluso un solo campo después de haber sido verificado desverificará tu cuenta y necesitarás comenzar el proceso de juicio de nuevo.

:::

##Aprende más

- [Crea una Cuenta en SORA](/create-an-address.md)
- [Ejecutando un Nodo Sora](/running-a-node.md)
