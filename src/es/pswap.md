---
title: Token PSWAP | Documentación de SORA
head:
  - - meta
    - name: description
      content: Aprende sobre PSWAP, el token de utilidad de Polkaswap, el intercambio descentralizado en la red de SORA. Descubre las características, casos de uso y beneficios de PSWAP dentro del ecosistema de Polkaswap. Explora su rol en la gobernanza, descuentos de tarifas, provisión de liquidez y otras actividades, y comprende cómo PSWAP mejora la funcionalidad e incentiva la participación en Polkaswap.
  - - meta
    - name: keywords
      content: token PSWAP, Polkaswap, red de SORA, gobernanza, descuentos de tarifas, minería de liquidez, ecosistema de Polkaswap, funcionalidad de token, incentivos de participación
---

# PSWAP

**PSWAP** se utiliza para recompensar a los proveedores de liquidez en [Polkaswap](https://polkaswap.io/).

PSWAP tiene **suministro decreciente**, con tokens quemados con cada intercambio de tokens en Polkaswap.

La tarifa del 0.3% por cada intercambio en el DEX de Polkaswap se utiliza para comprar tokens PSWAP en Polkaswap, que luego se queman. Al principio, el 90% de los tokens PSWAP quemados se reacuñan para asignar a los proveedores de liquidez, pero con el tiempo este porcentaje disminuirá al 35% después de 5 años.

## Suministro de Token PSWAP

- 10 mil millones de suministro máximo, disminuyendo con tokens quemados
- PSWAP es un token de flotación libre cuyo precio es decidido por el mercado
- Suministro circulante actual de PSWAP: ~36%, se puede verificar [aquí](https://mof.sora.org/qty/pswap)

## Distribución de PSWAP

- ~6% recompensas en el lanzamiento (juego de la granja de sora)
- 25% [recompensas de la curva de enlace de tokens](https://medium.com/polkaswap/pswap-rewards-part-2-the-sora-token-bonding-curve-70fab4c3f1b8) (con vesting)
- 35% [recompensas de liquidez](https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509) (con vesting)
- ~4% [recompensas de creadores de mercado](https://medium.com/polkaswap/pswap-rewards-part-3-polkaswap-market-making-rebates-1856f62ccfaa) (con vesting)
- 30% lanzamiento inicial dev

## Token PSWAP

Polkaswap tiene una tarifa de transacción comercial del 0.3% por transacción, igual que otros intercambios contemporáneos como Uniswap. A diferencia de los modelos de tarifas de transacción en otros intercambios, en Polkaswap, las tarifas de transacción se utilizan para recomprar y quemar tokens PSWAP, y luego se acuñan nuevos tokens PSWAP para recompensar a los LPs. Los tokens PSWAP recién acuñados para los proveedores de liquidez comienzan en el 90% del número de tokens PSWAP quemados en 24 horas y disminuirán gradualmente a un constante 35% de tokens diarios quemados después de cinco años. El modelo de token PSWAP es, por lo tanto, deflacionario por naturaleza, a diferencia de casi todas las otras estructuras de recompensa contemporáneas, porque las recompensas están limitadas por la cantidad quemada en tarifas de transacción cada día.

Además, recompensas especiales para compradores estratégicos de XOR durante el período especial de compra de XOR, recompensas para proveedores de liquidez durante el período inicial de tsunami de liquidez y recompensas para creadores de mercado también se distribuyen como una fracción de la quema diaria (mostrada como la región sombreada **Estrategia de Bonificación con Vesting** en la figura a continuación). Esto garantiza que un suministro repentino de tokens no inundará inmediatamente el mercado y proporciona una guía clara sobre el suministro de tokens en circulación.

<figure><img src=".gitbook/assets/strategic-bonus-vesting-updated.png" alt=""><figcaption></figcaption></figure>

**Ejemplo:** Supongamos que la recompra y quema de tarifas de transacción por un día resultaron en 10,000 PSWAP siendo quemados. Si la recompensa diaria es del 80%, entonces se otorgan 8,000 nuevos tokens PSWAP proporcionalmente entre todos los proveedores de liquidez y 1,000 PSWAP tokens se otorgan al Parlamento de SORA y 1,000 PSWAP se distribuyen entre los participantes de los programas de bonificación estratégicos

Dado que siempre se queman más tokens PSWAP de los que se acuñan, los tokens PSWAP son deflacionarios por naturaleza. Más de 600,000,000 de tokens PSWAP se crearon en el evento de génesis. El valor futuro de los tokens PSWAP no depende del esfuerzo del equipo de Polkaswap o del equipo de SORAMITSU. En el futuro, nuevos tokens PSWAP pueden ser acuñados por decisiones de gobernanza del Parlamento de SORA.

## Aprende Más

- [Polkaswap](/polkaswap.md)
- [Operaciones de Liquidez en Polkaswap](/provide-liquidity-to-xyk-pools-polkaswap.md)
