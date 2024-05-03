---
title: "Explorar Bloques en la Red SORA | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Explora los bloques en la red SORA y profundiza en los detalles del historial de transacciones de la blockchain. Descubre los últimos bloques, altura de bloque, transacciones y otra información clave que proporciona perspectivas sobre el funcionamiento y la actividad de la red SORA."
  - - meta
    - name: keywords
      content: "explorar bloques, red SORA, blockchain, historial de transacciones, altura de bloque, transacciones"
---

# Exploradores de Bloques

Un **explorador de bloques** es una herramienta que se utiliza para ver todas las transacciones de blockchain en línea. Específicamente, para ver todas las **transacciones** actuales y pasadas en la **blockchain**.

En otras palabras, un explorador de bloques es un navegador de blockchain en línea que revela los datos de bloques y transacciones individuales. Con esta herramienta, podemos monitorear historiales de transacciones y saldos de direcciones.

El mainnet de SORA actualmente implementa el explorador de bloques [Subscan](https://sora.subscan.io/). El explorador de bloques de la red SORA está respaldado por el equipo de Subscan.

Puedes encontrar cualquier información que necesites sobre:

- Detalles del bloque
- Detalles de la transacción
- Eventos de la transacción
- Información de la cuenta

## Práctica

Subscan solo está disponible para el mainnet de SORA. Esto significa que no podrás encontrar transacciones realizadas en el testnet en Subscan.

Abre [Subscan del mainnet](https://sora.subscan.io/):

![](../.gitbook/assets/explore-blocks-open-subscan.png)

Aquí verás el panel principal que contiene:

- Caja de búsqueda. Úsala para buscar por cuenta, transacción, id de bloque o número.
- Estadísticas de la red
- Asignación de XOR
- Lista de los últimos bloques
- Lista de las últimas extrínsecas

#### Cómo encontrar una transacción

Si tienes el hash de la transacción o id puedes encontrarla usando la caja de búsqueda. Solo pega el número de la transacción en la caja de búsqueda y haz clic en Buscar.

![](../.gitbook/assets/explore-blocks-search-transaction.png)

En la pantalla de Detalles de la Transacción verás toda la información sobre extrínsecas incluyendo parámetros y eventos.

![](../.gitbook/assets/explore-blocks-show-details-extrinsics.png)

#### Cómo encontrar una cuenta

Si tienes una dirección de cuenta entonces puedes encontrarla usando la caja de búsqueda. Solo pega o introduce la dirección de la cuenta en la caja de búsqueda y haz clic en Buscar.

![](../.gitbook/assets/explore-blocks-search-account.png)

En la vista de detalles de la cuenta, puedes encontrar información sobre el saldo de XOR, transferencias y transacciones que fueron realizadas por la cuenta.

![](../.gitbook/assets/explore-blocks-show-account-details.png)

#### Transacciones

Las transacciones son la parte más importante del explorador de bloques. Puedes encontrar todas las transacciones en Blockchain, luego selecciona Extrínsecas del menú desplegable.

![](../.gitbook/assets/explore-blocks-show-extrinsics.png)

En la página de lista de extrínsecas puedes encontrar el historial de extrínsecas.

![](../.gitbook/assets/explore-blocks-extrinsic-history.png)

Puedes filtrar una extrínseca por fecha o rango de bloques, por cuenta, módulo y llamada. Es muy útil para ver la actividad de una cuenta o el historial de una operación específica.
