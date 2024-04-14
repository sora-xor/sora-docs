---
title: "Verificar la Oferta en la Red SORA | Documentación de SORA"
head:
  - - meta
    - name: description
      content: "Aprende cómo verificar la oferta de tokens en la red SORA y obtén información sobre la oferta circulante y la oferta total de activos. Descubre las herramientas, interfaces y recursos disponibles para verificar la oferta de tokens en la red SORA y mantente informado sobre las cantidades de tokens disponibles dentro del ecosistema SORA."
  - - meta
    - name: keywords
      content: "verificar oferta, red SORA, oferta de tokens, oferta circulante, oferta total, activos, herramientas, interfaces"
---

# Verificar Oferta

::: info
Para nuevos usuarios o usuarios sin experiencia en Polkadot.js, se recomienda usar la página de Estadísticas de Polkaswap.
:::

## Vía Polkaswap

1. En la interfaz de [Polkaswap](https://polkaswap.io/), navega a la sección de Estadísticas.
   
   ![](/.gitbook/assets/polkaswap-home-stats.png)

2. Desplázate hasta el fondo de la página y encontrarás la sección de Oferta.
   
   ![](/.gitbook/assets/polkaswap-statistics-fees-and-supply.png)

3. Para ver la oferta de otros tokens, haz clic en el nombre del token en la sección de oferta y elige el token que te gustaría consultar.
   
   ![](/.gitbook/assets/polkaswap-statistics-supply-token-list.png)

## Vía Polkadot.js

::: info
Ten en cuenta que verás la **oferta total** (esto incluye tokens bloqueados y la oferta circulante) de todos los tokens en la red y no solo la **oferta circulante** de los tokens.
:::

- La oferta de XOR cambia a menudo porque es elástica, gestionada por la [curva de bonificación de tokens](tbc.md).
- La oferta de VAL y PSWAP también puede cambiar porque se queman con cada transacción.
- La oferta circulante de PSWAP en el momento de escribir esto es de aproximadamente 600M PSWAP.

Para verificar el número de tokens en la red SORA, sigue este procedimiento:

1. Ve a [SORA polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc).

2. Haz clic en "Desarrollador" y luego en "Llamadas RPC":

   ![](/.gitbook/assets/check-supply-rpc-calls.png)

3. Selecciona **assets → totalSupply(assetId)**.
4. Rellena _AssetID_ y presiona **"Enviar llamada RPC"**.

   ::: details IDs de activos principales

   | Token  | ID                                                                 |
   | ------ | ------------------------------------------------------------------ |
   | XOR    | 0x0200000000000000000000000000000000000000000000000000000000000000 |
   | TBCD   | 0x02000a0000000000000000000000000000000000000000000000000000000000 |
   | VAL    | 0x0200040000000000000000000000000000000000000000000000000000000000 |
   | PSWAP  | 0x0200050000000000000000000000000000000000000000000000000000000000 |
   | XST    | 0x0200090000000000000000000000000000000000000000000000000000000000 |
   | XSTUSD | 0x0200080000000000000000000000000000000000000000000000000000000000 |
   | ETH    | 0x0200070000000000000000000000000000000000000000000000000000000000 |
   | DAI    | 0x0200060000000000000000000000000000000000000000000000000000000000 |

   Para más IDs de activos, consulta la [subsección de Tokens de la página Explorar de Polkaswap.io](https://polkaswap.io/#/explore/tokens).
   :::

   ![](/.gitbook/assets/check-supply-fill-in-asset-id.png)

   Los resultados se muestran para XOR:

   353.0005 kXOR = 353 000.5 XOR (incluyendo XOR en la red Ethereum)

   <center><img src="/.gitbook/assets/check-supply-xor-output.png" width="400"></center>

### Cómo Leer los Resultados

En la salida, como ves en la imagen de arriba, obtendrás la cantidad del activo consultado. Desafortunadamente, Polkadot.js solo admite un activo para la red, XOR. Por eso muestra el suministro en XOR. Sin embargo, es realmente el activo que consultaste: ya sea PSWAP, VAL, ETH o DAI.

La letra antes de XOR significa que el número se multiplica por la siguiente cantidad:

| Letra | Multiplicador |
| ----- | ------------- |
| k     | 1000          |
| m     | 1000000       |
| B     | 1000000000    |
| m     | 0.001         |

#### Ejemplo de Suministro de PSWAP

Por ejemplo, una solicitud para el suministro actual de PSWAP muestra:

3.5105 BXOR = 3,510,500,000 PSWAP (600M está circulando y el resto está bloqueado en las cuentas técnicas)

![](/.gitbook/assets/check-supply-pswap-example.png)

#### Ejemplo de Suministro de VAL

70.5077 MXOR = 70,507,700 VAL (VAL en Ethereum está incluido)

![](/.gitbook/assets/check-supply-val-example.png)

#### Ejemplo de Suministro de ETH

1.7188 kXOR = 1718.8 ETH (ETH en la red SORA)

![](/.gitbook/assets/check-supply-eth-example.png)

#### Ejemplo de Suministro de DAI

1.1827 MXOR = 1,182,700 DAI (DAI en la red SORA)

![](/.gitbook/assets/check-supply-dai-example.png)

## Aprender Más

- [Estadísticas de Polkaswap](./statistics-polkaswap.md)
- [Explorar Polkaswap](./explore-polkaswap.md)

