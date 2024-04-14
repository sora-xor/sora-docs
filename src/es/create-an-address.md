---
title: "Crear una Dirección en la Red SORA | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo crear una dirección en la red SORA y comienza a interactuar con el ecosistema SORA. Descubre los pasos para generar una nueva dirección, la importancia de la seguridad de la dirección y cómo usar tu dirección para diversas actividades dentro de la red SORA."
  - - meta
    - name: keywords
      content: "crear una dirección, red SORA, generación de dirección, seguridad de la dirección"
---

<!-- TODO:
- find missing images
- fix wrong images
-->

# Creación de Cuenta

Aquí te proporcionamos instrucciones sobre la creación de cuentas:

- [vía el complemento de navegador polkadot.js](#via-polkadotjs-browser-plugin)
- [vía la aplicación polkadot.js](#via-polkadotjs-app-ui)
- [vía la aplicación móvil de SORA](#via-sora-mobile-application)

::: tip

Recomendamos usar el testnet de SORA para ejercicios prácticos. Aquí están los enlaces del Testnet:

1. [Aplicación de prueba Polkaswap](https://test.polkaswap.io/)
2. [Aplicación de prueba Polkadot js SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicación de prueba para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [Aplicación de prueba para iOS](https://testflight.apple.com/join/670hF438)

:::

En el ejercicio práctico, se debería crear una cuenta de 3 maneras diferentes. Cualquiera que sea la manera que elijas, tendrás el mismo resultado después de importar una cuenta a otras plataformas. Un hermoso tutorial en video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdJ6yFFl06k" title="Creación de cuenta SORA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Vía el Complemento de Navegador polkadot.js

Usa un navegador Chrome o Firefox.

1. Descarga [https://polkadot.js.org/extension/](https://polkadot.js.org/extension/) el complemento de navegador e instala la extensión.

   ![](.gitbook/assets/create-address-browser-install-polkadot.png)

2. Abre la extensión y confirma que entiendes el aviso legal.

<center><img src="/.gitbook/assets/create-address-browser-polkadot-confirm.png" width="400"></center>

3. Crea la cuenta. Deberías hacer clic en el botón `+`

   <center><img src="/.gitbook/assets/create-address-browser-create.png" width="400"></center>

   Verás la frase mnemotécnica. **Nunca la compartas con nadie** y no uses la misma que en la captura de pantalla (_esto es solo una demostración, se te asignará otra_). **Guarda esta frase de paso de forma segura porque es la única manera de restaurar tu cuenta.**

   <center><img src="/.gitbook/assets/create-address-browser-mnemonic.png" width="400"></center>

4. Marca la casilla y avanza al siguiente paso.

5. Ingresa un nombre de cuenta y contraseña y continúa.

   <center><img src="/.gitbook/assets/create-address-browser-name-password.png" width="400"></center>

   La nueva cuenta ahora está creada.

   <center><img src="/.gitbook/assets/create-address-browser-account-created.png" width="400"></center>

6. Ahora deberías cambiar el formato de dirección para que comience con `cn`. Abre Configuración y selecciona Formato de dirección mostrada. Debería ser la red SORA.

   <center><img src="/.gitbook/assets/create-address-browser-change-to-sora-network.png" width="400"></center>

   ¡Buen trabajo! Ahora tienes una dirección con el prefijo `cn`

   ![](.gitbook/assets/create-address-cn-prefix.png)

## Vía la Aplicación UI de polkadot.js

1. Abre [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) y luego selecciona la Red de Sora. Usa este [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer) para la testnet.
   
   Si ya has instalado el complemento del navegador Polkadot, solicitará autorización para sincronizar datos. Puedes hacerlo, ya que facilitará la gestión de cuentas.
   
   ![](.gitbook/assets/create-address-app-authorize.png)

2. Abre la página [Cuentas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/accounts).
   
   Si permites que el complemento del navegador Polkadot sincronice, entonces tus cuentas aparecerán en la aplicación Polkadot.js:
   
   ![](.gitbook/assets/create-address-app-synced.png)
   
   Puedes crear una nueva cuenta.

3. Haz clic en "Añadir cuenta":

   ![](.gitbook/assets/create-address-app-add-account.png)

4. Guarda la frase mnemotécnica, **asegúrate de mantenerla segura y no compartirla**. Confirma que has guardado la mnemotécnica y haz clic en "Siguiente":
   
   ![](.gitbook/assets/create-address-app-mnemonic.png)

5. Ingresa un nombre y una contraseña para la cuenta, luego haz clic en "Siguiente":
   
   ![](.gitbook/assets/create-address-app-name-password.png)

6. Después de la confirmación haz clic en guardar.

   ![](.gitbook/assets/create-address-app-save.png)

## Vía la Aplicación UI de polkadot.js

1. Abre [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) y luego selecciona la red SORA. Utiliza este [enlace](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer) para el testnet.

   Si ya has instalado el complemento del navegador Polkadot, se solicitará autorización para sincronizar datos. Se recomienda hacerlo, ya que facilitará la gestión de cuentas:
   
   ![](.gitbook/assets/create-address-app-authorize.png)

2. Ve a la página [Cuentas](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/accounts).
   
   Si permites que el complemento del navegador Polkadot sincronice, tus cuentas aparecerán en la aplicación Polkadot.js:
   
   ![](.gitbook/assets/create-address-app-synced.png)
   
   Puedes crear una nueva cuenta.

3. Haz clic en "Añadir cuenta":
   
   ![](.gitbook/assets/create-address-app-add-account.png)

4. Guarda la frase mnemotécnica, asegúrate de mantenerla segura y no compartirla. Confirma que has guardado la mnemotécnica y haz clic en "Siguiente":
   
   ![](.gitbook/assets/create-address-app-mnemonic.png)

5. Ingresa un nombre y una contraseña para la cuenta, luego haz clic en "Siguiente":
   
   ![](.gitbook/assets/create-address-app-name-password.png)

6. Después de la confirmación, haz clic en "Guardar":
   
   ![](.gitbook/assets/create-address-app-save.png)

Ahora tienes dos cuentas. Una fue inyectada desde el complemento del navegador Polkadot y la segunda fue creada en la aplicación Polkadot.js:

![](.gitbook/assets/create-address-app-view-accounts.png)

## Vía la Aplicación Móvil de SORA

La aplicación móvil de SORA permite a los usuarios interactuar con la red SORA usando dispositivos móviles. Aquí están los enlaces a las aplicaciones:

- [Aplicación Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora) para el **mainnet**
- [Aplicación iOS](https://apps.apple.com/us/app/sora-dae/id1457566711) para el **mainnet**

Puedes usar estas aplicaciones **testnet** para practicar:

- [Aplicación testnet Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
- [Aplicación testnet iOS](https://testflight.apple.com/join/670hF438)

Al instalar la aplicación, podrás crear una cuenta.

1. Abre la app. Hay dos opciones: **Crear cuenta** e **Importar cuenta**:

   ![](.gitbook/assets/create-address-sora-options.png)

2. Para este ejercicio, toca en **Crear cuenta**:

   ![](.gitbook/assets/create-address-sora-create.png)

3. Ingresa un nombre de cuenta. Puede ser cualquier cadena. Luego toca continuar.

   ![](.gitbook/assets/create-address-sora-enter-name.png)

4. Se mostrará la pantalla con la frase mnemotécnica. Guarda la frase mnemotécnica en un lugar secreto o recuérdala.

   ::: tip

   La frase mnemotécnica es la única manera de recuperar la cuenta en caso de cambiar el teléfono móvil, cerrar sesión en la aplicación, u otros casos de emergencia.

   :::

   Puedes confirmar la mnemotécnica o saltar el proceso. Solo toca las palabras en la parte superior de la pantalla en el orden correcto. La palabra tocada se mostrará en la parte inferior de la pantalla.

   ![](.gitbook/assets/create-address-sora-confirm-mnemonic.png)

5. Ingresa y confirma un código PIN de tu elección.

   ![](.gitbook/assets/create-address-sora-enter-pin.png)

6. También puedes permitir que la aplicación use autenticación biométrica. Y finalmente, tendrás acceso a la billetera.

   ![](.gitbook/assets/create-address-sora-biometry-auth.png)

#### Restaurar cuenta desde mnemotécnica en diferentes aplicaciones

La única manera de restaurar la cuenta en todas las aplicaciones es una frase mnemotécnica. El complemento del navegador Polkadot.js admite más opciones, sin embargo, la aplicación móvil solo admite una frase mnemotécnica. Puedes usar una frase mnemotécnica de la aplicación móvil para obtener acceso a [polkaswap.io](http://polkaswap.io) o [test.polkaswap.io](http://test.polkaswap.io) y viceversa.

Por ejemplo, mi frase mnemotécnica es:

`chicken worth gaze device proof frost adjust toe elite obvious rapid club`

Puedes restaurar la cuenta en el complemento del navegador Polkadot.

1. Haz clic en el signo ➕ y haz clic en **Importar cuenta desde semilla preexistente**:

   ![](.gitbook/assets/restore-account-import.png)

2. Luego ingresa la frase mnemotécnica y haz clic en **Siguiente**:

   ![](.gitbook/assets/restore-account-enter-mnemonic.png)

3. Luego ingresa el nombre de la cuenta y establece una contraseña y procede.

   ![](.gitbook/assets/restore-account-setup.png)

¡Genial, acabas de restaurar tu cuenta!

![](.gitbook/assets/restore-account-restored.png)

El proceso es el mismo para la aplicación móvil:

1. Abre la aplicación móvil y toca en **Importar cuenta**.

   ![](.gitbook/assets/restore-account-sora-import.png)

2. Ingresa el nombre de la cuenta y la frase mnemotécnica.

   ![](.gitbook/assets/restore-account-sora-enter-mnemonic.png)

3. Luego establece y confirma un código PIN.

   ![](.gitbook/assets/restore-account-sora-enter-pin.png)

4. Después de eso, tendrás acceso a la cuenta.

   ![](.gitbook/assets/restore-account-biometry-auth.png)

#### Convertir el formato de dirección

Como se mencionó antes, las redes Substrate usan diferentes prefijos de dirección para generar direcciones. Sin embargo, el par de claves es el mismo. Si creas una cuenta, pero obtienes la dirección sin el prefijo `cn`, entonces puedes convertirla usando el [convertidor de direcciones Subscan](https://sora.subscan.io/tools/ss58_transform).

![](.gitbook/assets/convert-address-subscan-converter.png)

Simplemente ingresa tu dirección y haz clic en **Transformar**. Puedes especificar el tipo de salida. Por defecto, la herramienta Subscan convertirá la dirección a todos los formatos de red compatibles.

![](.gitbook/assets/convert-address-transform.png)

