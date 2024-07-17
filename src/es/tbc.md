---
title: Curva de Enlace de Token de SORA (TBC) | Documentación de SORA
head:
  - - meta
    - name: description
      content: "Aprende sobre la TBC (Curva de Enlace de Token), un modelo de token único en la red SORA. Descubre las características, mecánicas y beneficios de la TBC, incluida su emisión continua de tokens y mecanismo de curva de enlace. Explora cómo la TBC fomenta la liquidez, estabilidad y participación comunitaria dentro del ecosistema SORA."
  - - meta
    - name: keywords
      content: "Curva de Enlace de Token, red SORA, emisión continua de tokens, mecanismo de curva de enlace, liquidez, estabilidad, participación comunitaria"
---

# Curva de Enlace de Token

La [curva de enlace de token](https://medium.com/coinmonks/token-bonding-curves-explained-7a9332198e0e) (TBC) gestiona el suministro de tokens de manera racional, sin la intervención humana, para crear un sistema que evita los problemas de auge y caída de las economías tradicionales, y la economía deflacionaria de muchas criptomonedas.

Una TBC es un contrato inteligente que toma la entrada de un token y produce un nuevo token. Esto crea una plétora de posibles variaciones para impulsar un área emocionante de investigación, pero en SORA usamos un modelo simple donde hay dos funciones lineales: una Función de **Precio de Compra** y una Función de **Precio de Venta**.

![El mercado primario es la TBC, el secundario es Polkaswap/Uniswap.](<../.gitbook/assets/tbc(2).png>)

En términos simples, la curva de enlace de token es esencialmente un banco central descentralizado infinitamente líquido. En cualquier momento, puedes comprar XOR recién acuñado de la curva de enlace de token usando **activos de reserva** específicos, o vender tus tokens XOR (que se queman instantáneamente) por uno de esos activos.

Además, debido a que las funciones de precios de la curva de enlace de token tienen una pendiente ascendente, el **precio aumenta con el suministro del token**. Ten en cuenta que con una curva de enlace de token, **el precio y el suministro de XOR están correlacionados**, y se mueven en consecuencia.

<figure><img src="../.gitbook/assets/xor-supply-correct.png" alt=""><figcaption><p>El precio aumentará cuando el suministro suba y viceversa</p></figcaption></figure>

Otra implicación importante de este mecanismo es que el precio de XOR en el mercado secundario (Polkaswap, Uniswap, CEXs...) tiende a estar limitado a un cierto rango de precios (ilustrado como el triángulo rojo en el diagrama). De hecho, si un usuario comercia XOR fuera de ese rango, crea una **oportunidad de arbitraje** para comprar/vender XOR por debajo/por encima de los precios de las curvas de enlace de tokens: **la volatilidad de XOR se reduce así**.

## ¿Por qué es útil la curva de enlace de token?

- **Gestión Autónoma del Suministro de Tokens para Igualar la Demanda (Suministro Elástico)**. La curva de enlace de token introduce y elimina XOR de la circulación para satisfacer la demanda del mercado. Esto asegura un crecimiento económico sostenible y la estabilidad de precios de la economía del token, ya que el sistema puede adaptarse a las necesidades cambiantes.
- **Liquidez Profunda e Inmediata**. El contrato de la curva de enlace es la contraparte de la transacción y siempre mantiene suficientes reservas de recompra (_lee más sobre esto abajo en el párrafo "Escenarios Ideales y Reales"_).
- Mitiga las influencias de los ataques de inflado y desplome/manipulación del mercado.
- La política monetaria descentralizada de XOR ofrece protección contra el abuso por parte de las autoridades y total transparencia para los usuarios.
- La reserva de recompra del mercado primario limita la capacidad de los gobiernos o vendedores en corto de manipular el mercado.
- El sistema monetario de SORA v2 no se basa en deudas ni es impulsado por ellas, y los nuevos tokens siempre se asignan bajo supervisión democrática, lo que ayuda a eliminar los ciclos insostenibles de auge y caída en los sistemas económicos contemporáneos.
- Los precios de compra/venta actuales ofrecidos por la curva de enlace de token brindan niveles de soporte y resistencia, o un rango de confianza para el precio de XOR en el mercado, con orientación a futuro.
- El 20% de la cantidad comprada de la función de compra se reserva para diferentes actores en la red SORA:
  - El 1% se destina a la recompra y quema de [VAL](./val)
  - El 9% de su uso es decidido por los poseedores de [VAL](./val), principalmente para la provisión de liquidez
  - El 0.1% se otorga a los ciudadanos
  - El 0.4% se otorga a tiendas y compradores
  - El 0.5% se utiliza para recomprar y quemar [TBCD](./tbcd)
  - El 9% se utiliza para proyectos

![](../.gitbook/assets/margin-tbc.png)

Mientras la economía de SORA está en su fase inicial, la curva de enlace de token juega un papel crucial en mantener la propiedad de valor de refugio de XOR. La capacidad de establecer rangos de confianza para los movimientos del precio del token reduce la barrera psicológica hacia la aceptación de XOR para pagos.

Es importante señalar que **la curva de enlace de token no garantiza la estabilidad del precio de XOR**, sino más bien una medida de previsibilidad del precio [guiada hacia adelante](https://www.ecb.europa.eu/explainers/tell-me/html/what-is-forward_guidance.en.html).

## Escenarios Ideales y Reales

Ahora nos enfocamos en **las reservas**, que juegan un papel crucial en el mecanismo de la TBC.

En el lanzamiento de la red SORA v2, ya existirán 350,000 XOR. Esto significa que la curva de enlace de token de SORA tendrá una obligación no financiada de 350,000 XOR en valor de DAI, 350,000 XOR en valor de ETH, 350,000 en valor de VAL, y 350,000 XOR en valor de PSWAP. Este es el **escenario real**.

La Función de Precio de Compra se ha establecido en 900$ en el lanzamiento suave, su ecuación es _y = mx + b, donde b:=634$_ y la pendiente _m := 1/1337._

Este escenario implica que la Función de Precio de Venta de la curva de enlace de token no es un 20% más baja que la Función de Precio de Compra (como debería ser en el **escenario ideal**), sino que es incluso más baja. Hay poca liquidez en las reservas para que vendas tus tokens XOR, y el precio en la Función de Precio de Venta puede ser bajo en comparación con el precio del mercado secundario.

![](<../.gitbook/assets/tbc(1).png>)

La Función de Precio de Venta Real aumenta a medida que las reservas aumentan, acercándose a la Función de Precio de Venta Ideal, que es un 20% más baja que la Función de Precio de Compra.

La Función de Precio de Compra es la misma en ambos escenarios, Real e Ideal.

Por eso, construir reservas después del lanzamiento es crucial y **hay un programa de incentivos especial en PSWAP (25% del suministro total de PSWAP) para usuarios que compren XOR recién acuñado en la TBC.** Puedes leer los detalles [aquí](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

## Vender en el Escenario Real

Considerando que las reservas ideales son un objetivo a largo plazo, es importante entender cómo funciona la venta en una curva de enlace de token que no está completamente colateralizada.

![](../.gitbook/assets/tbc.png)

Como puedes ver, el precio se comporta de manera diferente en el escenario real, donde los usuarios venderán sus tokens a un precio más bajo que en el escenario ideal. Es importante señalar, sin embargo, que cuando las reservas aumentan, la Función de Precio de Venta se acercará cada vez más a la Función de Precio de Venta Ideal, y los usuarios ya tendrán buena liquidez para vender incluso grandes cantidades. Puedes ver un ejemplo detallado de venta con números [aquí](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8).

Además, hay tarifas extras cuando se vende con baja colateralización:

- bajo 30% de colateralización: +1% de tarifa
- bajo 20% de colateralización: +3% de tarifa
- bajo 10% de colateralización: +6% de tarifa
- bajo 5% de colateralización: +9% de tarifa

Estas tarifas extras serán quemadas.

## Curva de Enlace de Token y Subastas de Parachain

En el futuro, la TBC jugará un papel clave en asegurar un slot de Parachain para la red SORA en Polkadot y Kusama.

Inicialmente, SORA se unirá a Kusama como una Parachain a través de un Crowdloan, como se menciona [aquí](https://medium.com/sora-xor/the-sora-network-kusama-parachain-auction-5a6fe3a5f35f?source=user_profile---------0-------------------------------).

Esto traerá KSM a la red SORA (y Polkaswap), por lo que los usuarios podrán usar KSM como un activo de reserva en la TBC, y ese KSM se puede utilizar para asegurar el slot para el siguiente año.

Además, Parity también está desarrollando un puente entre Polkadot y Kusama. DOT también estará disponible en la red SORA como un activo de reserva a través de este puente.

Los tokens DOT y KSM mantenidos en reservas por la curva de enlace de token se utilizarán para hacer una oferta por un slot de parachain subsiguiente para el ecosistema SORA.

[**Se darán recompensas dobles**](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8) **a los usuarios que compren XOR con KSM y DOT**, ya que estas dos monedas son cruciales para la red SORA.

## Aprender Más

- [Economía SORA](/sora-economy.md)
- [XOR](/xor.md)
