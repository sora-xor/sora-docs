---
title: "Intercambiar en la Red SORA | Documentos de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo intercambiar activos digitales en la red SORA."
  - - meta
    - name: keywords
      content: "intercambio, red SORA, pares de trading, intercambio en cadena, transacción de intercambio"
---

# Intercambios

## Teoría

Intercambiar en Polkaswap significa intercambiar (swap) tokens en [Polkaswap](https://polkaswap.io/). Polkaswap es un protocolo DEX AMM intercadena y no custodio para intercambiar tokens, Polkaswap elimina los intermediarios de confianza y proporciona la oportunidad de comerciar más rápido, y también combina múltiples fuentes de liquidez bajo un algoritmo común de agregación de liquidez, operando completamente en cadena, de manera confiable y descentralizada.

Hay 3 casos de uso principales para Polkaswap:

- Intercambiar tokens
- Proporcionar liquidez
- Retirar liquidez

Junto con la tarifa de red en XOR, los tres casos requieren una tarifa adicional: tarifa del proveedor de liquidez, o tarifa LP. La tarifa LP se utiliza para incentivar a los proveedores de liquidez a suministrar liquidez en los fondos de liquidez. Los fondos de liquidez se describen en este [artículo](https://medium.com/polkaswap/polkaswap-pools-48b726cf3a71).

## Práctica

::: tip
Recomendamos usar el testnet de SORA para ejercicios prácticos. Aquí están los enlaces de Testnet:

1. [Aplicación de prueba Polkaswap](https://test.polkaswap.io/)
2. [Aplicación de prueba Polkadot js SORA testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Aplicación de prueba Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [Aplicación de prueba iOS](https://testflight.apple.com/join/670hF438)
   :::
   En la sección práctica intercambiaremos tokens. Proporcionar y Retirar la liquidez se explicará en artículos subsiguientes.

### Vía Polkaswap

Intercambiar tokens significa cambiar de token A a token B. Polkaswap proporciona una interfaz amigable para el usuario para intercambiar tokens.

<!-- @include: /snippets/swap-polkaswap.md -->
