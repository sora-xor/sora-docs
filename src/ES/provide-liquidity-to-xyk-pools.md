---
title: "Proporcionar Liquidez en la Red SORA | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo proporcionar liquidez en la red SORA y participar en los fondos de liquidez. Descubre los beneficios de la provisión de liquidez, el proceso de añadir liquidez a los fondos, y cómo ganar recompensas por tus contribuciones al ecosistema de SORA."
  - - meta
    - name: keywords
      content: "proporcionar liquidez, red SORA, fondos de liquidez, añadir liquidez, recompensas de liquidez"
---

<!-- TODO:
- actualizar nombres de imágenes en este tema
- verificar alineación de imágenes
-->

# Operaciones de Liquidez

Todo sobre la provisión de liquidez de pool XYK en SORA.

## Teoría

<!-- @include: /snippets/provide-liquidity-theory.md -->

## Práctica

::: tip
Recomendamos usar el testnet de SORA para ejercicios prácticos. Aquí están los enlaces de Testnet:

1. [Aplicación de prueba de Polkaswap](https://test.polkaswap.io/)
2. [Aplicación de prueba de Polkadot js SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicación de prueba para Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=es&gl=US)
4. [Aplicación de prueba para iOS](https://testflight.apple.com/join/670hF438)
   :::

En la sección práctica, crearemos un fondo de liquidez, proporcionaremos liquidez al fondo existente y retiraremos la liquidez.

### Crear un Nuevo Fondo de Liquidez

#### Vía Polkaswap

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-new-liquidity-pool-polkaswap.md -->

### Proporcionar Liquidez a un Fondo de Liquidez Existente

#### Vía Polkaswap

<!-- @include: /snippets/provide-liquidity-to-xyk-pools-provide-to-existing-liquidity-pool-polkaswap.md -->

### Retirar Liquidez del Fondo

#### Vía Polkaswap

<!-- @include: /snippets/remove-from-liquidity-pool-polkaswap.md -->

## Verificando Transacciones

Puedes encontrar las transacciones de proporcionar y retirar liquidez que hayas realizado en el explorador de bloques. Abre la lista de transacciones y fíltrala usando el parámetro del módulo PoolXYK y la llamada **deposit_liquidity** para proporcionar liquidez o **withdraw_liquidity** para retirar liquidez.

![](.gitbook/assets/provide-liquidity-check-transactions-1.png)

![](.gitbook/assets/provide-liquidity-check-transactions-2.png)

