---
title: Validadores de SORA | Documentación de SORA
head:
  - - meta
    - name: description
      content: Aprende sobre los validadores en la red SORA y su rol en asegurar la red, validar transacciones y mantener el consenso. Descubre los requisitos y responsabilidades de los validadores, explora el proceso para convertirse en un validador y comprende la importancia de los nodos validadores en la gobernanza descentralizada del ecosistema SORA.
  - - meta
    - name: keywords
      content: validadores de SORA, red SORA, seguridad de la red, validación de transacciones, consenso, requisitos para validadores, cómo convertirse en un validador, gobernanza descentralizada
---

# VAL (≚)

- VAL es un nuevo token utilizado para recompensar a los validadores de la red SORA que aseguran la red, creado por la [gobernanza comunitaria](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87); todos los contratos y código ejecutable fueron liberados en una forma deshabilitada y no podrían usarse hasta su activación por un miembro de la comunidad (mediante la inserción de prueba criptográfica del referéndum); ahora está completamente activado.
- El suministro totalmente diluido de VAL es de alrededor de 100,000,000 (consulta `tokens.totalIssuance` para obtener el número preciso). El suministro circulante actual de VAL se puede verificar [aquí](https://mof.sora.org/qty/val).
- El contrato de token VAL también está disponible en [Etherscan](https://etherscan.io/token/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4).
- VAL tiene [suministro decreciente](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8) a lo largo del tiempo, con tokens quemados en cada transacción de la red SORA v2.
- Recompensas elásticas para validadores y nominadores de staking se dan en VAL, como un porcentaje del VAL diario quemado
- Los poseedores reciben una parte del XOR creado por la curva de enlace de tokens
  para proporcionar liquidez en Polkaswap. Los poseedores de VAL pueden agruparse
  en DAOs para agrupar su liquidez y votar para proporcionar liquidez a
  pares comerciales en Polkaswap y recibir tokens PSWAP como recompensa.

VAL es el token de recompensa para validadores de la red SORA, utilizado para recompensar a aquellos que hacen staking con XOR como parte del algoritmo de consenso de Prueba de Participación Nominada. [Como se describe](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), VAL es un token deflacionario que se quema con cada transacción en la red SORA. Una parte de los tokens quemados se vuelve a acuñar y distribuir a los validadores y nominadores de staking, de acuerdo con las reglas de recompensa.

::: info
[Los tokens VAL anteriormente eran tokens XOR v1](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), pero se convirtieron en VAL con nuevas tokenómicas, a través de la [gobernanza comunitaria](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87). VAL es un token multichain que vive en la red SORA v1 y en Ethereum, con un puente sin confianza—_HASHI_—que abarca las dos redes.
:::

## Distribución del Token VAL

El token **VAL** se distribuyó aproximadamente por igual a tres grupos, en 3 etapas:

- Antiguos poseedores de XOR v1 (en el cuarto trimestre de 2020)
- Poseedores de XOR ERC-20 como un airdrop (con tiempo de vesting)
- Un vehículo de inversión para el ecosistema SORA

## Aprender Más

- [Cómo Ejecutar un Nodo Principal de SORA](/running-a-node.md)
- [Consenso en SORA](/consensus.md)
