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

El mainnet de SORA usa el [panel SORA v2 de SoraMetrics](https://sorametrics.org/sorav2) como explorador de bloques y fuente de analítica on-chain.

Puedes encontrar cualquier información que necesites sobre:

- Detalles del bloque
- Detalles de la transacción
- Eventos de la transacción
- Información de la cuenta

## Práctica

Usa SoraMetrics para consultar datos del mainnet de SORA v2.

Abre el [panel SORA v2 en SoraMetrics](https://sorametrics.org/sorav2):

Aquí verás el panel principal que contiene:

- Caja de búsqueda. Úsala para buscar por cuenta, hash de transacción, número de bloque o ID de extrínseca.
- Estadísticas de la red
- Bloques y actividad de red en vivo
- Transferencias, extrínsecas, titulares, validadores y datos de liquidez

#### Cómo encontrar una transacción

Si tienes el hash de la transacción o el ID de la extrínseca, usa la caja de búsqueda de SoraMetrics. También puedes abrir la vista de [Extrínsecas](https://sorametrics.org/sorav2?tab=extrinsics) y filtrar por bloque, pallet, método, estado o fecha.

La vista de detalles de la extrínseca muestra parámetros, eventos, estado e información del bloque relacionado.

#### Cómo encontrar una cuenta

Si tienes una dirección de cuenta, pégala en la caja de búsqueda de SoraMetrics. También puedes abrir una cuenta directamente con `https://sorametrics.org/sorav2?tab=balance&address=<address>`.

En la vista de detalles de la wallet, puedes encontrar saldos, transferencias, swaps, actividad de puentes, liquidez, staking y extrínsecas de la cuenta.

#### Transacciones

Las transacciones son la parte más importante del explorador de bloques. Abre la vista de [Extrínsecas](https://sorametrics.org/sorav2?tab=extrinsics) para consultar el historial de extrínsecas.

Puedes filtrar una extrínseca por fecha o rango de bloques, por cuenta, módulo y llamada. Es muy útil para ver la actividad de una cuenta o el historial de una operación específica.
