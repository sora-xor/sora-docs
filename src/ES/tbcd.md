---
title: Token Bonding Curve Dollar (TBCD) | Documentación de SORA
head:
  - - meta
    - name: description
      content: Aprende sobre el Token Bonding Curve Dollar, la stablecoin algorítmica no sintética cuyo valor es mantenido por la curva de enlace de token de SORA. Explora cómo TBCD ayuda a acumular las reservas de la curva de enlace de token de SORA, al mismo tiempo que se utiliza para financiar la creación de nuevos bienes y servicios dentro del ecosistema SORA.
  - - meta
    - name: keywords
      content: token TBCD, token puente, red Ethereum, red SORA, transferencia de activos, interoperabilidad, transacciones entre cadenas, liquidez, finanzas descentralizadas, DeFi
---

# Token Bonding Curve Dollar (TBCD)

- Los Token Bonding Curve Dollars (TBCD) son una propuesta reciente de stablecoin algorítmica no sintética cuyo valor es mantenido por la curva de enlace de token de SORA.
- TBCD está creado para valer ligeramente menos de $1 cuando XOR está muy por debajo del punto de precio en la curva de enlace de token, reduciendo la presión de venta a XOR cuando el precio de XOR es bajo.
- TBCD ayudará a acumular reservas en la curva de enlace de token de SORA, al mismo tiempo que se utiliza para financiar la creación de nuevos bienes y servicios mediante un referéndum en cadena decidido por todos los poseedores del token XOR.
- El 10% del [PSWAP](./pswap) remintado se asigna para la recompra y quema de TBCD. De manera similar, el 10% del [VAL](./val) remintado se asigna para la recompra y quema de TBCD.
  Además, el 0.5% del [margen de TBC](./tbc.md#por-qué-es-útil-la-curva-de-enlace-de-token) se dirige hacia la recompra y quema de TBCD.

## Por Qué Implementar Token Bonding Curve Dollars (TBCD)

El ecosistema SORA ha crecido a lo largo de los años, y ahora hay muchos tokens y [constructores eclécticos](https://cerestoken.io) [constructores](https://adar.com). Con el crecimiento viene la madurez, y SORA recientemente ha estado avanzando hacia la externalización de XSTUSD, una stablecoin sintética, en la plataforma integral [SORA Synthetics (XST)](xst.md).

Sin embargo, muchos de los socios con los que nos asociamos para proyectos institucionales aún no están listos para preciar todo en XOR, el token nativo de la red SORA. En su lugar, necesitan un token que sea convertible a XOR bajo demanda, pero anclado al USD.

TBCD (**T**oken **B**onding **C**urve **D**ollars) pretende llenar este vacío siendo un token convertible a XOR, como un activo de reserva de la curva de enlace de token de SORA, mientras también vale $1, porque la curva de enlace de token siempre trata a TBCD como si tuviera el valor de $1 USD.

Como recordarás, la [curva de enlace de token de SORA](tbc.md) es un contrato inteligente,
incorporado directamente en Polkaswap, que acuña XOR a cambio de activos de reserva,
y quema XOR para devolver los activos de reserva. Hay un margen
del 20% entre la compra y la venta, que se utiliza para la recompra y quema
de VAL, proporcionando fondos para futuros DAOs de VAL, así como para poner en cuentas
que en el futuro pueden ser utilizadas para financiamiento de proyectos, y otorgando
estipendios a los ciudadanos de SORA.

La Curva de Enlace de Token de SORA y usos del margen entre funciones de compra y venta
![La Curva de Enlace de Token de SORA y usos del margen entre funciones de compra y venta](/.gitbook/assets/margin-tbc.png)

TBCD solo puede ser creado y asignado por gobernanza en cadena, lo
que significa que los poseedores de tokens XOR deciden el suministro. De esta manera, TBCD puede
contribuir a la economía productiva de SORA porque los constructores pueden ser
financiados en TBCD, lo que puede llevar a más usos para los tokens del ecosistema SORA.
XOR no se diluye en poder adquisitivo, porque cualquier acuñación de XOR se hace solo entregando TBCD a la curva de enlace de token, así que TBCD se convierte en un activo que equilibra cualquier XOR puesto en circulación; de hecho, la curva de enlace de token sobrecapitaliza, ya que hay un margen del 20% entre la compra y la venta, y parte de ese margen es XOR que va a fondos que actualmente no están distribuidos y puestos en circulación.

Dado que el token SORA va a apuntar a un punto de precio de alrededor
de $600, esto significa que TBCD tendrá poca utilidad si XOR cuesta $600,
mientras que el precio del mercado secundario es mucho más bajo.
Para hacer útil a TBCD, en lugar de usar el punto de precio de ~$600, podrá
comprar XOR de la TBC al precio actual del mercado + $1. Esto
sigue siendo más alto que el precio del mercado, lo que incentivará a las personas
a evitar vender TBCD por XOR cuando el precio de XOR es bajo (porque no
obtendrán un valor completo de $1). Por ejemplo, si XOR es $3, entonces los poseedores de TBCD
pueden comprar XOR de la curva de enlace de token por un 33% de prima,
lo cual no es muy atractivo, pero si XOR está en $100, entonces los poseedores de TBCD
pueden comprar XOR por solo $101, lo cual es una prima insignificante.
Eventualmente, la prima puede desaparecer por completo, cuando XOR esté en el precio nominal de la curva de enlace de token.

Como con otros activos de reserva de la curva de enlace de token, el precio de venta
de XOR por TBCD de la Curva de Enlace de Token de SORA será un 20% menos
que el precio de compra.

## Banca Central Algorítmica

TBCD es un gran ejemplo que muestra las posibilidades de la curva de enlace de token de SORA para crear innovación monetaria para la economía SORA. TBCD resuelve tanto la pregunta de cómo financiar la expansión productiva de la economía SORA (la creación de nuevos bienes y servicios) como cómo acumular reservas en la curva de enlace de token para crear un respaldo destinado a aumentar la estabilidad de XOR. Al acuñar TBCD a través de referéndum en cadena, los constructores pueden obtener los recursos que necesitan para construir la economía y plataforma de SORA, mientras que cualquier TBCD que vendan a la curva de enlace de token de SORA será propiedad del ecosistema SORA como liquidez propiedad del protocolo.

Aunque no opera al precio oficial de la curva de enlace de token, TBCD
todavía actúa como una forma de "ruedas de entrenamiento" para la economía SORA, donde
la curva de enlace de token puede ser activada y acumular algunos activos,
vendiendo XOR a través de un mercado primario a un premium del
mercado secundario flotante.

En general, TBCD es una stablecoin innovadora que utiliza la curva de enlace de token de SORA para mantener su estabilidad de precio. Esto es un gran desarrollo para el mercado de criptomonedas, ya que proporciona a los usuarios una stablecoin confiable respaldada por el dólar estadounidense. Además, la curva de enlace de token de SORA ayuda a aumentar la liquidez de TBCD, facilitando a los usuarios la compra y venta del token.

## Aprender Más

- [Curva de Enlace de Token](/tbc.md)
- [Gobernanza SORA](/sora-governance.md)
