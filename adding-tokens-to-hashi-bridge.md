---
title: "Añadir Tokens al Puente Hashi | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo añadir tokens al Puente Hashi en la red SORA. Descubre el proceso paso a paso para listar nuevos tokens en el puente, incluyendo los requisitos, procedimientos y consideraciones para añadir tokens. Explora los beneficios de tender puentes entre activos y habilitar la interoperabilidad entre diferentes redes blockchain a través del Puente Hashi."
  - - meta
    - name: keywords
      content: "añadiendo tokens, Puente Hashi, red SORA, listar tokens, requisitos, procedimientos, tendiendo puentes de activos, interoperabilidad, redes blockchain"
---

# Añadiendo un Token al Puente HASHI

Añadir tokens al puente HASHI permite su transferencia entre las redes SORA y Ethereum.

Añadir un token al puente HASHI de SORA implica varios pasos:

1. [Registrar un token dentro de la blockchain de SORA](#registrar-un-token-dentro-de-la-blockchain-de-sora)
2. [Registrar un activo de SORA en el puente](#registrar-un-activo-de-sora-en-el-puente)
3. [Registrar un token ERC-20 en Ethereum y su mapeo con un activo de SORA](#registrar-un-token-erc-20-en-ethereum-y-su-mapeo-con-un-activo-de-sora)
4. [Añadir un token a una lista blanca](#añadir-un-token-a-una-lista-blanca)

## Registrar un token dentro de la blockchain de SORA

Consulta [Registro](/register-an-asset.md) para instrucciones sobre cómo registrar un token dentro de la blockchain de SORA.

## Registrar un activo de SORA en el puente

1. Obtén el AssetId del activo que deseas añadir (que puedes encontrar en [polkaswap.io](https://polkaswap.io)); por ejemplo, `0x000268050a977248b641719592e7a0247ce4741839c83ec6aac6a865d3d0ba2c`.

2. Ve a [polkadot{.js}](http://polkadot.js.org/) en la sección _Gobernanza > Preimágenes_ y crea una preimagen con `ethBridge.addAsset` y el valor para la dirección y el ID de la red del puente del token a registrar. Los parámetros son `assetId` y `networkId` (`0` para Ethereum).

   ![](.gitbook/assets/add-asset-preimage.png)

3. Copia el hash de la preimagen de tu preimagen creada y presenta una propuesta en _Gobernanza > Democracia_. Alternativamente, puedes contactar a un miembro del consejo para que el Consejo cree directamente una moción para añadir el activo al puente con la preimagen que creaste. Esto acelerará el proceso de añadir el activo al puente.

4. Una vez que la propuesta se apruebe, adquiere las firmas de los pares del puente a través del RPC `ethBridge.getAccountRequests` con tu cuenta como primer argumento y el estado `ApprovalsReady`.

   ![](.gitbook/assets/hashi-acquire-signatures.png)

5. El RPC devolverá un montón de hashes. Estos son hashes de solicitudes fuera de la cadena; el último debería ser la solicitud `OutgoingAddAsset`. Para determinar si el activo fue añadido con éxito, usa el RPC `getRequests`.

6. Después de encontrar tu hash, usa el RPC `getApprovedRequests` para obtener las aprobaciones.

7. Llama a `addEthSidechainToken` en el contrato inteligente del puente.

### Usando Remix

1. Copia el ABI del contrato de la sección Código en Etherscan:

   ![](.gitbook/assets/hashi-copy-the-contract-abi.jpg)

2. Crea un archivo con ABI en https://remix.ethereum.org:

   ![](.gitbook/assets/hashi-create-file-with-abi.jpg)

3. Elige Metamask como proveedor:

<center><img src="/.gitbook/assets/hashi-choose-metamask.jpg" width="400"></center>

4. Copia la dirección del contrato en el campo "En Dirección" y haz clic en el botón En Dirección

<center><img src="/.gitbook/assets/hashi-copy-address.jpg" width="400"></center>

5. Rellena los datos de la transacción:

<center><img src="/.gitbook/assets/hashi-fill-in-data.jpg" width="400"></center>

6. Confirma la transacción:

<center><img src="/.gitbook/assets/hashi-confirm-transaction.jpg" width="400"></center>

### Usando Etherscan
Accede a https://etherscan.io/address/0x1485e9852ac841b52ed44d573036429504f4f602#writeContract y rellena los campos con los datos del paso anterior. Nota, que los parámetros v de las firmas deben incrementarse en `27`. Es decir, si ves `v: 0` y `v: 1`, estos parámetros deben pasarse como `[27, 28]`.

![](.gitbook/assets/hashi-fill-in-data-using-etherscan.png)

## Registrando un token ERC-20 en Ethereum y su mapeo con un activo de SORA

1. Obtiene toda la información necesaria sobre el token:

   - Dirección (p. ej., `0xdac17f958d2ee523a2206206994597c13d831ec7`)
   - Símbolo (p. ej., `USDT`)
   - Nombre (p. ej., Tether `USD`)
   - Decimales (p. ej., `6`)
   - ID de la red (p. ej., `0` para Ethereum)

2. Crea una propuesta para llamar al extrínseco `ethBridge.addSidechainToken` con los argumentos del primer paso.
   
   ![](.gitbook/assets/hashi-create-proposal.png)

3. Después de que la propuesta sea aprobada, adquiere las firmas de los pares del puente a través del RPC `ethBridge.getAccountRequests` de la cuenta `cnTQ1kbv7PBNNQrEb1tZpmK7hZUUWqKBpWxmnxL4nczYfYfrh`.
   
   ![](.gitbook/assets/hashi-acquire-signatures.png)

4. El RPC devolverá un montón de hashes. Estos son hashes de solicitudes fuera de la cadena, uno de ellos debería ser la solicitud `OutgoingAddToken`. Para averiguar si el activo fue añadido con éxito, usa el RPC `getRequests`.

5. Después de que tu hash sea encontrado, usa el RPC `getApprovedRequests` para obtener las aprobaciones.

6. Ve a https://etherscan.io/address/0x313416870a4da6f12505a550b67bb73c8e21d5d3#writeContract y llama a `addEthNativeToken` con los datos del paso anterior. Nota, que los parámetros v en las firmas deben incrementarse en `27`. Es decir, si ves `v: 0` y `v: 1`, estos parámetros deben pasarse como `[27, 28]`.
   
   ![](.gitbook/assets/hashi-add-contract.png)

## Añadiendo un token a una lista blanca

Si quieres poder tender un puente con tu token en Polkaswap, y para mover tu token a Ethereum, necesita ser incluido en la lista blanca. Puedes incluir tu token en la lista blanca siguiendo las instrucciones en [GitHub](https://github.com/sora-xor/polkaswap-token-whitelist-config).

Primero, la solicitud de pull debe ser aprobada, luego el token será incluido en la lista blanca en futuras actualizaciones en Polkaswap.


