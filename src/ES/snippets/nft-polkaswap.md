### Acuñación de tokens

1. Acceda a [Polkaswap](https://polkaswap.io/#/wallet) y navegue hasta la cuenta.
2. Haga clic en el icono circular en la esquina superior derecha de la vista de la cuenta:

<center><img src="/.gitbook/assets/nft-add-asset.png" width="400"></center>

3. Seleccione la pestaña NFT y prepárese para acuñar su primer NFT en la red SORA.

<center><img src="/.gitbook/assets/nft-add-asset-select-nft.png" width="400"></center>

4. En la interfaz de creación de NFT, podrá acuñar sus NFT no fungibles.

     <center><img src="/.gitbook/assets/nft-add-asset-upload-nft.png" width="400"></center>

    Aquí hay una descripción general de los campos disponibles:

    - Para agregar el archivo, puede usar un **enlace IPFS** o, alternativamente, puede **cargar un archivo** desde su almacenamiento local.
    - Luego deberás asignar un **símbolo de token** con **máximo 7 caracteres**. Tenga esto en cuenta, ya que necesitará el símbolo del token más adelante, cuando importe el NFT a su billetera.
    - **Nombre del token** es similar al símbolo del token, pero tiene un límite de 33 caracteres.
    - Token **Descripción** responde a preguntas como: ¿de qué se trata tu token? ¿Qué hace que tu token sea especial? Puedes dejar volar tu imaginación aquí o agregar una descripción genérica.
    - En **Suministro de tokens**, especifica cuántos tokens deseas acuñar.
    - Utilice interruptores de palanca para elegir si desea acuñar más tokens basados en este (suministro extensible), o si desea que su NFT tenga la capacidad de dividirse en partes fraccionarias (divisible). Próximamente habrá más información sobre esta opción.

Ahora que sabes cómo es la interfaz NFT y qué información debes proporcionar, ¡creemos un NFT!

#### Tutorial

Para este ejemplo, acuñaremos el _Templo del Dios del Viento, de las ruinas mayas de Tulum_. También tenemos un [enlace IPFS para la imagen] (https://ipfs.io/ipfs/QmUwzJpeewVQoKvzaMXwskyZcwWf9SrbQTUuuwX8ppXcNu?filename=Tulum.jpeg).

1. Pegue la URL en el campo de enlace IPFS y deje que se cargue la imagen.

<center><img src="/.gitbook/assets/nft-paste-ipfs-link.png" width="400"></center>

2. Una vez que la imagen sea visible, agregue el símbolo del token, el nombre, la descripción y cuántas copias desea acuñar.

<center><img src="/.gitbook/assets/nft-provide-nft-description.png" width="400"></center>

3. Elige si quieres acuñar más tokens en función de esto. Si desea que el token sea divisible, asegúrese de tener fondos suficientes para la tarifa de transacción y haga clic en **Crear NFT**.

    ::: información
    Si desea agrupar un NFT, debe ser **Divisible**.
    :::

    <center><img src="/.gitbook/assets/nft-create-nft.png" width="400"></center>

4. En una pantalla de confirmación, verifique que toda la información ingresada sea correcta, luego haga clic en confirmar y firme la transacción con su billetera. Se le pedirá que firme utilizando el complemento de su navegador [Polkadot.js](https://polkadot.js.org/extension/).

<center><img src="/.gitbook/assets/nft-creation-confirm.png" width="400"></center>

5. Una vez que se haya acuñado el NFT, navegue hasta la pestaña **Actividad** dentro de la vista de su cuenta y asegúrese de que el activo aparezca como **registrado**.

<center><img src="/.gitbook/assets/nft-view-activity.png" width="400"></center>

_¡Has creado con éxito un NFT!_

Pero todavía no puedes verlo dentro de tus activos... **Aquí es donde entra en juego el símbolo del token.**

### Agregar tokens a su billetera

1. Vuelva a la pestaña **Activos** dentro de la vista de su cuenta, luego desplácese hasta el final de la lista y haga clic en el botón **Agregar activo**.

<center><img src="/.gitbook/assets/nft-add-tokens.png" width="400"></center>

2. Busque el activo en la lista utilizando el símbolo de token que asignó y luego seleccione el token.

<center><img src="/.gitbook/assets/nft-search-for-token.png" width="400"></center>

3. Tan pronto como lo seleccione, recibirá un descargo de responsabilidad. Asegúrese siempre de que los tokens que agregue a su cuenta sean legítimos.

4. Una vez que active el interruptor de aceptación, haga clic en **Agregar activo**.

<center><img src="/.gitbook/assets/nft-add-selected-asset.png" width="400"></center>

¡Tu NFT ahora aparecerá dentro de tu lista de activos!

<center><img src="/.gitbook/assets/nft-view-assets-after-adding-asset.png" width="400"></center>

### Ver tokens

¿Qué puedes hacer con las NFT por ahora? Aquí hay un resumen rápido.

Desde la vista de su cuenta, haga clic en la flecha para ver el contenido visual de su NFT.

<center><img src="/.gitbook/assets/nft-view-token-select.png" width="400"></center>

Esto abrirá una vista previa de su NFT. Desde aquí puedes hacer cosas como **enviar el token** a otra dirección, **copiar** la dirección del token o **eliminar el activo** de tu billetera:

<center><img src="/.gitbook/assets/nft-options-for-selected-asset.png" width="400"></center>

<!-- * Y otras funciones se explican a continuación, como [intercambiar el token](nfts.md#swapping-tokens), [agregar liquidez](nfts.md#pooling-tokens) o conectar el token. (La funcionalidad de puente de token aún está por determinar). -->

### Envío de tokens

¡Puedes enviar tu token recién acuñado a otras direcciones! Para hacer eso, Necesitas la dirección de tu amigo y algo de XOR para las tarifas de transferencia.

1. Haga clic en el botón enviar desde la vista NFT:

    <center><img src="/.gitbook/assets/nft-send.png" width="400"></center>

    Aparecerá una confirmación solicitando una dirección y la cantidad de tokens a enviar. Esto también mostrará la tarifa de la red.

2. Asegúrate de que todo esté correcto y haz clic en enviar.

<center><img src="/.gitbook/assets/nft-send-confirm.png" width="400"></center>

3. Confirme que la dirección del destinatario sea correcta una vez más, confirme y firme la transacción.

¡Y eso es todo! Puede volver a verificar su suministro de tokens y verá **se ha enviado el NFT**.

<center><img src="/.gitbook/assets/nft-send-check-token-supply.png" width="400"></center>

### Agrupar tokens

Aunque no existe una implementación del mercado NFT en Polkaswap (_toda_), es posible agrupar NFT de su propiedad, junto con XOR. Para que un NFT se pueda agrupar, tiene que ser **divisible**, por lo que solo puedes vender o comprar una fracción. La agrupación de NFT funciona como cualquier otro fondo de liquidez en Polkaswap y [también ofrece las mismas ventajas] (../snippets/../provide-liquidity-to-xyk-pools). Los pasos para agrupar su NFT son los siguientes:

1. Desde la vista previa de NFT dentro de su billetera, haga clic en el ícono 💧.

<center><img src="/.gitbook/assets/nft-pooling-add-liquidity.png" width="400"></center>

2. Seleccione la cantidad de XOR para emparejar con su NFT. También puedes agregar más de un NFT al grupo si deseas agregar más XOR.

<center><img src="/.gitbook/assets/nft-pooling-add-liquidity-confirm-selected-amounts.png" width="400"></center>

3. Vuelve a verificar los detalles y, si todo es correcto, haz clic en confirmar.

    Su extensión Polkadot.js también requerirá que firme una transacción. Una vez confirmado, podrá ver su grupo NFT dentro de la [sección Grupo en Polkaswap] (https://polkaswap.io/#/pool/).

     <center><img src="/.gitbook/assets/nft-pooling-created-pool.png" width="400"></center>

Recuerde que puede agrupar más de un NFT a la vez (_tantos del mismo token como tenga en su billetera_).

También puede agrupar su NFT directamente desde la sección Grupo en Polkaswap.

1. Puedes agregar liquidez o crear un par. Cuando crea un par con un NFT, el flujo será el mismo que si agrupa un NFT directamente. Hay un paso en común con la adición de liquidez a un grupo existente, que es la selección inicial de tokens.

<center><img src="/.gitbook/assets/nft-pooling-add-or-create-a-pair.png" width="400"></center>

2. Haga clic en Personalizado para ver su NFT y seleccione el que ha decidido agrupar (_o agregar liquidez a un grupo existente_).

<center><img src="/.gitbook/assets/nft-pooling-select-custom.png" width="400"></center>

3. Como antes, seleccione el token y la cantidad de liquidez (en este caso 1 NFT y su equivalente en XOR), luego haga clic en Suministro. En este ejemplo, agregamos más liquidez al grupo WINDTUL y XOR:

     <center><img src="/.gitbook/assets/nft-pooling-custom-add-liquidity.png" width="400"></center>

    Recibirá una confirmación de su billetera y el token será parte de un fondo de liquidez.

Alternativamente, también puede agregar o eliminar liquidez de un par NFT directamente desde el menú desplegable en la vista del grupo de Polkaswap:

<center><img src="/.gitbook/assets/nft-pooling-add-or-remove-liquidity-from-pool-view.png" width="400"></center>

### Intercambio de tokens

Finalmente, también puedes intercambiar un NFT por otros tokens desde la pantalla de vista previa;

1. Haga clic en el botón de intercambio:

    <center><img src="/.gitbook/assets/nft-swap.png" width="400"></center>

    Se le presentará la familiar [interfaz de intercambio de Polkaswap](https://polkaswap.io/#/swap) que le permitirá intercambiar su NFT por otros tokens.

    ::: información
    Tenga en cuenta que intercambiar su NFT de esta manera tendrá un impacto significativo en el precio.
    :::

2. Elija el token para intercambiar su NFT por:

<center><img src="/.gitbook/assets/nft-swap-select.png" width="400"></center>

3. Al igual que con las otras funciones, revise el resumen de la transacción y, si está satisfecho con el resultado, haga clic en intercambiar y firme la transacción en la extensión Polkadot.js.

::: advertencia

También puede comprar NFT utilizando la función de intercambio; sin embargo, debe agregar el NFT deseado a su billetera como un activo personalizado. El intercambio de XOR u otros tokens por NFT tiene un impacto significativo en el precio. Asegúrese de comprender estos riesgos antes de operar con NFT en Polkaswap.

:::