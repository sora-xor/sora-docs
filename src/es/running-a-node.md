---
title: "Ejecutar un Nodo en la Red SORA | Documentos de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo ejecutar un nodo en la red SORA y conviértete en un participante activo en la infraestructura de la red. Descubre los requisitos, el proceso de configuración y los beneficios de ejecutar un nodo para apoyar la descentralización y seguridad de la red SORA."
  - - meta
    - name: keywords
      content: "ejecutar un nodo, red SORA, configuración de nodo, infraestructura de red, descentralización, seguridad de red"
---

# Cómo Ejecutar un Nodo Mainnet SORA

## Resumen

- Cualquiera puede ejecutar un nodo en el mainnet de SORA
- Hay dos tipos de nodos:
  - Nodos de **sincronización** que solo reciben y retransmiten datos
  - Nodos de **validación** que hacen los bloques. Leer más en [Consensus](./consensus).

## Requisitos Previos

Necesitarás:

- Una máquina con Linux, Windows o macOS
- [Docker](https://docs.docker.com/get-docker/) (preferiblemente la última versión). Sigue la guía de instalación para tu sistema operativo.
- Al menos 8GB de RAM, preferiblemente 16GB de RAM. Para producción, necesitarás 64GB de RAM.
- 300GB de espacio libre (preferiblemente SSD, con la capacidad de expandirse)
- Procesador Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz (alternativamente, un procesador de 4 núcleos con una frecuencia de 2.2 GHz)

Para verificar que Docker está instalado, ejecuta el comando `docker --version` en terminal. Obtendrás una salida como esta:

```txt
Docker version 20.10.2, build 2291f61
```

Verifique el contenedor con el comando `docker run hello-world` en la terminal. Si todo funciona bien, Docker extraerá la imagen del hola mundo y la ejecutará.

::: Ampliar detalles para ver el resultado de `docker run hello-world` output

```
C:\\Users\\Pg> docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:95ddb6c31407e84e91a986b004aee40975cb0bda14b5949f6faac5d2deadb4b9
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
Este mensaje muestra que su instalación parece estar funcionando correctamente.

Para generar este mensaje, Docker siguió los siguientes pasos:
  1. El cliente Docker contactó con Docker daemon.
  2. Docker daemon extrajo la imagen de "hello-world" del Docker Hub.
     (amd64)
  3. El Docker daemon creó un nuevo contenedor a partir de esa imagen que ejecuta el
     ejecutable que produce el resultado que está leyendo actualmente.
  4. El Docker daemon transmitió esa salida al cliente Docker, que
  lo enviaste a tu terminal.

Para intentar algo más ambicioso, puedes ejecutar un contenedor de Ubuntu con:
  $ docker run -it ubuntu bash

Comparta imágenes, automatice flujos de trabajo y más con un free Docker ID:
<https://hub.docker.com/>

Para más ejemplos e ideas, visite:
<https://docs.docker.com/get-started/>
```

:::

Si algo salió mal, visite la [documentación de Docker](https://docs.docker.com/). También puedes descargar Docker desde aquí:

- [macOS](https://docs.docker.com/get-docker/#docker-for-mac)
- [Windows](https://docs.docker.com/get-docker/#docker-for-windows/install/)
- [Linux](https://docs.docker.com/get-docker/#docker-for-linux)

## Obtenga el número de versión más reciente del nodo SORA

Los usuarios deben utilizar la versión **3.2.0** por el momento. Actualizaremos este artículo con la última versión después de cada actualización.

Debe utilizar la última versión de SORA Node para ejecutar un
nodo. Puede ver el último número de compilación aquí y encontrar el último
versión con el formato `x.y.z`.

![](/.gitbook/assets/running-node-version-tag.png)

Utilice este número de versión para más comandos `docker` en esta guía. El número de la versión se marcará como **`<versión>`** en los comandos. Tenga en cuenta que deberá ingresar el número de versión **sin los corchetes**.

## Ejecutando un nodo de sincronización

### En Linux/Mac

1. Extraiga la imagen del docker desde el repositorio del docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Cree una carpeta para la configuración del nodo:

   ```bash
   mkdir sora2
   cd sora2
   ```

3. Conceder acceso a la carpeta:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   En macOS es posible que necesites usar esto en su lugar:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Ejecute la imagen de la ventana acoplable (¡no olvide insertar su versión a continuación!)

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

### En Windows

1. Extraiga la imagen del docker desde el repositorio del docker:

    ```bash
    docker pull sora2/substrate:3.2.0
    ```

2. Cree una carpeta para la configuración del nodo:

    ```txt
    C:\\Users\\<username>\\sora2-node
    ```

3. Verifique el acceso a la carpeta creada:

    ![](/.gitbook/assets/running-node-check-access-to-folder.png)

    Todas las casillas de verificación deben estar activadas para el usuario:

    ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Ejecute el comando del docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --unsafe-ws-external --unsafe-rpc-external --wasm-execution compiled
   ```

5. Ahora puede conectarse a su nodo con [aplicaciones polkadot.js] (https://polkadot.js.org/apps/#/explorer). Seleccione Nodo local y haga clic en Cambiar.

   ![](/.gitbook/assets/running-node-connect-custom.png)

¡Ahora tu nodo debería sincronizarse!

## Ejecutando un nodo validador

### En Linux/Mac

1. Extraiga la imagen del docker desde el repositorio del docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```
2. Cree una carpeta para la configuración del nodo.

   ```bash
   mkdir sora2
   cd sora2
   ```
3. Conceder acceso a la carpeta creada:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   En macOS es posible que necesites usar esto en su lugar:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Ejecute el comando del docker:

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

   Puede agregar la siguiente marca para habilitar [Telemetría](https://telemetry.polkadot.io/#list/SORA) para su nodo

   `--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

### En Windows

1. Extraiga la imagen del docker desde el repositorio del docker:
 
   ```
   docker pull sora2/substrate:3.2.0
   ```

2. Cree una carpeta para la configuración del nodo.

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Verifique el acceso a la carpeta:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Ejecute el comando Docker

   ```
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-node --chain main --base-path /chain --validator --rpc-methods Unsafe --rpc-cors all --execution Wasm --wasm-execution compiled
   ```

## Obtener claves de sesión

::: información
Se recomienda utilizar la línea de comando para obtener las claves de sesión, como
Polkadot.JS a veces tiene problemas para conectarse al nodo local.
:::

### Con la app polkadot.js

### Con la aplicación polkadot.js

1. Abre [polkadot.js apps](https://polkadot.js.org/apps/#/explorer) y cambia a tu nodo local.

   ![](/.gitbook/assets/running-node-via-polkadot-switch-to-local.png)

2. En la sección de Desarrollo, selecciona Nodo Local _(ws://127.0.0.1:9944)_ y haz clic en _Cambiar_.

   ![](/.gitbook/assets/running-node-via-polkadot-select-local.png)

   Ahora puedes ver la pantalla con la información de tu nodo. _(Una vez que tu nodo se haya sincronizado completamente)_

   ![](/.gitbook/assets/running-node-via-polkadot-view-info.png)

3. Navega a _Desarrollador_ → _Llamadas RPC_:

   ![](/.gitbook/assets/running-node-via-polkadot-navigate-to-rpc-calls.png)

4. Selecciona _author_ → _rotateKeys()_:

   ![](/.gitbook/assets/running-node-via-polkadot-select-rotatekeys.png)

5. Haz clic en el botón _Enviar llamada RPC_:

   ![](/.gitbook/assets/running-node-via-polkadot-submit-rpc.png)

6. Copia la clave de sesión del resultado. Necesitarás la clave más tarde.

### Con la línea de comandos

1. Abre la terminal (u otro cliente de línea de comandos) y ejecuta el comando

   ```
   curl -H “Content-Type: application/json” -d ‘{“id”:1, “jsonrpc”:”2.0", “method”: “author_rotateKeys”, “params”:[]}’ http://localhost:9933
   ```

   La salida contendrá la clave de sesión:

   ```json
   {“jsonrpc”:”2.0",”result”:”0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72”,”id”:1}
   ```

2. Copia el resultado, en el ejemplo actual es `0x5e977ddcc0c69a6aed067052d5bd8f6bd365fae03562fd447d434e9814ac415d7c9ffe722364922bda314e44654f5c0cdc00d152470d5433f12cb73d078061863ac769d5f17b5460f042d221edf0099d2ce4c23edbe96ac943452cc4d3ad6d72`.

## Añadiendo un Validador

1. Primero, debes ir a Cuentas y ya tener una cuenta conectada. Navega a Red → Staking → Acciones de cuenta, y haz clic en _Validador_:

   ![](/.gitbook/assets/running-node-add-validator.png)

2. Selecciona la cuenta de alijo y la cuenta controladora. Se recomienda usar diferentes cuentas para el alijo y el controlador. (En el ejemplo estamos usando PAVEL (EXTENSIÓN))

3. Establece el valor vinculado:

   ![](/.gitbook/assets/running-node-set-bonded-value.png)

4. Establece la clave de sesión (el resultado de la llamada rotateKeys) y la comisión de recompensa:

   ![](/.gitbook/assets/running-node-set-key-reward-commission.png)

5. Firma la transacción.

   ![](/.gitbook/assets/running-node-sign-transaction.png)

6. Asegúrate de que has sido añadido a los alijos:

   ![](/.gitbook/assets/running-node-check-stashes.png)

7. Finalmente, espera a la próxima Era.

   ![](/.gitbook/assets/running-node-wait-for-next-era.png)

Cuando comience la próxima Era, tu validador será añadido.

## Obtener Pagos

1. Abre _Staking_ → _Pagos_. Si tu validador participa en el consenso, entonces podrás obtener pagos después de la Era.

   Las aplicaciones de Polkadot.js siempre muestran XOR, porque no admiten múltiples activos. Debería decirse VAL en la captura de pantalla a continuación.

   ![](/.gitbook/assets/running-node-get-payouts.png)

2. Haz clic en el botón Pagar todo y firma la transacción

   ![](/.gitbook/assets/running-node-payout-all.png)

   ![](/.gitbook/assets/running-node-get-payouts-sign.png)

Asegúrate de prestar atención ya que la recompensa se compartirá entre el Validador y los Nominadores según la Participación.

## Añadir nodo a Telemetría

Si quieres añadir tu nodo a [telemetría](https://telemetry.polkadot.io/#list/SORA) solo añade esta etiqueta cuando ejecutes la imagen de docker

`--telemetry-url "wss://telemetry.polkadot.io/submit/ 0"`

Puedes cambiar el nombre de tu nodo editando el valor del parámetro de:

`--name sora2-node`

## Ejecutando un nodo de Archivo

### En Linux/Mac

### En Linux/Mac

1. Extraiga la imagen del docker desde el repositorio del docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```
2. Cree una carpeta para la configuración del nodo.

   ```bash
   mkdir sora2
   cd sora2
   ```
3. Conceder acceso a la carpeta creada:

   ```bash
   chown 10000:10000 `pwd`
   ```

   ::: Alerta!
   En macOS es posible que necesites usar esto en su lugar:

   ```bash
   sudo chown <username>:1000
   ```

   :::

4. Ejecute el comando del docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v `pwd`:/chain sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

### En Windows

1. Extraiga la imagen del docker desde el repositorio del docker:

   ```bash
   docker pull sora2/substrate:3.2.0
   ```

2. Cree una carpeta para la configuración del nodo.

   ```
   C:\\Users\\<username>\\sora2-node
   ```

3. Verifique el acceso a la carpeta:

   ![](/.gitbook/assets/running-node-check-access-to-folder.png)

   All checkboxes should be activated for the user:

   ![](/.gitbook/assets/running-node-check-checkboxes.png)

4. Ejecute el comando del docker:

   ```bash
   docker run --rm -p 127.0.0.1:9933:9933 -p 127.0.0.1:9944:9944 -v sora2-node:/chain -u 0 sora2/substrate:3.2.0 --name sora2-my-node --chain main --base-path /chain --unsafe-ws-external --pruning archive --unsafe-rpc-external --wasm-execution compiled
   ```

El nodo tardará algún tiempo en sincronizarse. La salida en los registros debería verse así:

```
2021-04-30 11:33:33 💤 Idle (0 peers), best: #0 (0x7e4e…8ad5), finalized #0 (0x7e4e…8ad5), ⬇ 37.1kiB/s ⬆ 16.3kiB/s
2021-04-30 11:33:38 ⚙️  Syncing 31.0 bps, target=#38470 (1 peers), best: #155 (0xa9e2…5b22), finalized #0 (0x7e4e…8ad5), ⬇ 127.6kiB/s ⬆ 0.9kiB/s
2021-04-30 11:33:43 ⚙️  Syncing 35.6 bps, target=#38470 (2 peers), best: #333 (0x4c68…2957), finalized #0 (0x7e4e…8ad5), ⬇ 7.9kiB/s ⬆ 0.2kiB/s
2021-04-30 11:33:48 ⚙️  Syncing 32.4 bps, target=#38471 (2 peers), best: #495 (0x9082…f220), finalized #0 (0x7e4e…8ad5), ⬇ 41.3kiB/s ⬆ 1.1kiB/s
2021-04-30 11:33:53 ⚙️  Syncing 34.6 bps, target=#38471 (2 peers), best: #668 (0xb34a…121a), finalized #512 (0x1f6e…cc65), ⬇ 0.1kiB/s ⬆ 0
```

Puedes conectarte a tu propio nodo con las aplicaciones de Polkadot.js. [Abre las aplicaciones de Polkadot.js](https://polkadot.js.org/apps/) y navega a la sección de Desarrollo en el selector de red.

![](/.gitbook/assets/running-node-connect.png)

Si estás ejecutando un nodo en tu máquina local, entonces selecciona Nodo Local y haz clic en Cambiar. De lo contrario, ingresa tu punto final personalizado y guarda.

## Preguntas Frecuentes

P: **Estoy obteniendo un error al iniciar el nodo**.

R: _Revisa dos veces si has ingresado el comando y las banderas correctamente y que no haya errores tipográficos. Si eso no funciona, localiza tu carpeta sora2, borra su contenido, descarga la imagen de docker y prueba a ejecutar el nodo nuevamente._

P: **No tengo XOR para el staking inicial**.

R: _Puedes intercambiar tokens por XOR en [*Polkaswap*](https://polkaswap.io), o transferir tokens desde ETH al Mainnet de SORA usando la [función de puente en Polkaswap](https://polkaswap.io/#/bridge) y luego intercambiar por XOR._

P: **¿Dónde puedo ver mi nodo en telemetría?**

R: _Puedes verlo [*aquí*](https://telemetry.polkadot.io/#map/SORA)_

P: **Mi nodo tiene problemas para sincronizarse, ¿qué puedo hacer?**

R: _Puedes agregar la configuración `--in-peers 80` y eso debería resolver el problema, de lo contrario, consulta la siguiente pregunta._

P: **He revisado toda la documentación y mi pregunta aún no tiene respuesta, ¿a quién más puedo preguntar?**

R: _Siempre puedes unirte a la comunidad de Telegram de [SORA Devs](https://t.me/soradevs) y hacer cualquier otra pregunta que puedas tener allí, ¡otros miembros de la comunidad y los administradores estarán felices de ayudar!_

P: **No puedo acceder al nodo local desde Polkadot.JS para obtener mis claves de sesión, ¿qué debo hacer?**

R: _A veces, Polkadot.JS tiene problemas para conectarse a nodos locales, en ese caso, recomendamos que uses las instrucciones de línea de comando para obtener tus claves de sesión._

## Aprende Más

- [Tokenómica de SORA](/tokenomics.md)
- [Token VAL](/val.md)


