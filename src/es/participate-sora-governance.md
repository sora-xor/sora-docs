---
title: Votar en la gobernanza de SORA | Documentación de SORA
head:
  - - meta
    - name: description
      content: Explora la gobernanza de SORA y aprende a navegar la toma de decisiones descentralizada y mejorar el ecosistema de SORA. Ideal para todos los niveles de habilidad.
  - - meta
    - name: keywords
      content: Gobernanza de SORA, Toma de decisiones descentralizada, Ecosistema de SORA, Gobernanza de blockchain, Participación en SORA, Guía de gobernanza descentralizada
---

# Votar en la gobernanza de SORA

El [Parlamento de SORA](sora-governance.md) aún no ha sido promulgado. La gobernanza se lleva a cabo utilizando el [palet Gov1 de Substrate](https://wiki.polkadot.network/docs/learn/learn-governance), el mismo que está disponible en Polkadot.js (no OpenGov).

**Se requiere tener XOR para participar en la gobernanza.** Puedes usar el XOR que has apostado en Nominadores para agregar peso a tu voto (haciéndolo valer más). También puedes agregar convicción a tu voto, multiplicando su valor pero bloqueándolo por períodos de tiempo más largos.

Votar es realmente importante para el ecosistema de SORA; como proyecto liderado por la comunidad, el resultado de tu voto decide qué propósitos productivos son financiados, implementa actualizaciones de software en la red, las parachains y en [Polkaswap](https://polkaswap.io/), así como agregar activos XST a la red, agregar pares de libros de órdenes o poner en lista blanca activos en el puente Hashi. Como puedes ver, el impacto de tu voto hace una gran diferencia. Aunque parezca complicado, votar en la red de SORA es sencillo. Una vez que sepas cómo votar aquí, también puedes participar en la gobernanza en otras redes basadas en Substrate que utilicen Gov1.

En el momento de escribir esto, puedes emitir votos con una convicción de 0.1X, lo que no bloquea tu asignación de votos por ningún tiempo. Sin embargo, habrá una actualización de SORA donde estos votos ya no serán posibles (convicción eliminada). Por lo tanto, toda la participación en la gobernanza bloqueará los tokens. **Puedes usar tokens ya bloqueados (nominando, otros votos de referéndum de gobernanza, etc.) para votar en otros referéndums. Esto aumentará la proporción de tiempo durante el cual tus tokens están bloqueados.**

## Cómo votar en la gobernanza de SORA

1. Para saber cuándo está disponible un referéndum de gobernanza en SORA para votación pública, puedes estar atento a la [interfaz de gobernanza de SORA](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsora.api.onfinality.io%2Fpublic-ws#/democracy). Además, también puedes seguir el [canal de Notificaciones de Gobernanza de SORA en Telegram](https://t.me/sora_governance_updates).

![](/.gitbook/assets/participate-sora-governance-overview.png)

2. Con XOR en tu cuenta, selecciona el referéndum de democracia en el que estás interesado. Puedes hacer clic en la flecha hacia abajo para expandir los detalles de la moción. En algunos casos, encontrarás una dirección que lo vincula al [proyecto de Contabilidad de SORA en Github](https://github.com/orgs/sora-xor/projects/24/views/1) que tiene una descripción general y una descripción de los referéndums, si se trata de la creación de crédito en SORA.

![](/.gitbook/assets/participate-sora-governance-expand-referenda.png)

3. Para votar en el referéndum, haz clic en el botón de voto. Aparecerá un mensaje emergente con la información de tu cuenta. Si haces clic en el nombre de la cuenta, puedes cambiar entre tus cuentas en la billetera. Elige la que usarás para votar.

![](/.gitbook/assets/participate-sora-governance-account-selection.png)

4. Después de seleccionar la cuenta, verás el saldo de votación que puedes usar para asignar el peso de tu voto. Asegúrate de tener suficiente saldo desbloqueado para pagar las tarifas de transacción. El campo de valor del voto se completará automáticamente si ya tienes saldo XOR bloqueado.

![](/.gitbook/assets/participate-sora-governance-vote-value.png)

::: info
Puedes usar fondos que hayan sido bloqueados al nominar un validador o que estén bloqueados en otra propuesta de gobernanza para votar. Una vez que los fondos estén bloqueados, debes esperar un tiempo establecido antes de desbloquearlos en la interfaz de Polkadot.js.
:::

5. Elige una convicción para tu voto; esto puede ir desde un saldo de votación 1x bloqueado durante 30 días hasta un saldo de votación 6x bloqueado durante 960 días. Finalmente, vota A favor o En contra de la propuesta.

![](/.gitbook/assets/participate-sora-governance-vote-conviction.png)

::: info
Si la propuesta es aprobada y votaste sí, tus fondos se bloquearán durante el tiempo asignado basado en su convicción; de igual manera, si la propuesta no es aprobada y votaste no, tus fondos también permanecerán bloqueados. Del mismo modo, si votaste no y se aprueba, tus fondos no se bloquearán, lo mismo si votaste a favor y la propuesta no es aprobada.
:::

![](/.gitbook/assets/participate-sora-governance-vote-confirmation.png)

6. Tu billetera/firmante aparecerá solicitando que confirmes tu voto, aprueba esta transacción y una vez confirmada, **¡felicidades, acabas de votar en SORA!**

### Cómo votar en las parachains de SORA Kusama y SORA Polkadot

En la práctica, votar en referéndums de gobernanza en las parachains de SORA es lo mismo. La única diferencia es que necesitas transferir XOR a las parachains utilizando el puente HASHI configurado para la red Polkadot o Kusama y

 cambiar de red dentro de la interfaz de Polkadot.js.

1. Desde la esquina superior derecha de la interfaz, haz clic en la flecha hacia abajo.
2. Haz clic en Polkadot/Kusama & Parachains.
3. Desplázate hacia abajo hasta SORA.
4. Haz clic en Cambiar.

#### SORA Polkadot

![](/.gitbook/assets/participate-sora-governance-polkadot-parachain.png)

#### SORA Kusama

![](/.gitbook/assets/participate-sora-governance-kusama-parachain.png)

## Más información

- [Gobernanza en SORA](/sora-governance.md)
- [Interoperabilidad (HASHI)](/interoperability.md)
