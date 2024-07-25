---
title: Validadores SORA | Documentação SORA
head:
  - - meta
    - name: description
      content: Aprenda sobre os validadores na rede SORA e seu papel na segurança da rede, na validação de transações e na manutenção do consenso. Descubra os requisitos e responsabilidades dos validadores, explore o processo para se tornar um validador e compreenda a importância dos nós validadores na governança descentralizada do ecossistema SORA.
  - - meta
    - name: keywords
      content: Validadores SORA, rede SORA, segurança de rede, validação de transações, consenso, requisitos para validadores, como se tornar um validador, governança descentralizada
---

# VAL (≚)

 <center><img src="/.gitbook/assets/val.svg" width="250"></center>

- VAL é um novo token usado para recompensar os validadores da rede SORA que protegem a rede, criado por [governança da comunidade](https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87); todos os contratos e códigos executáveis ​​foram divulgados de forma desabilitada e não puderam ser utilizados até serem ativados por um membro da comunidade (através da inserção de prova criptográfica do referendo); Agora está totalmente ativado.
- A oferta totalmente diluída de VAL é de cerca de 100 milhões (veja `tokens.totalIssuance` para o número exato). A atual oferta circulante de VAL pode ser verificada [aqui](https://mof.sora.org/qty/val).
- O contrato do token VAL também está disponível em [Etherscan](https://etherscan.io/token/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4).
- VAL tem [oferta decrescente](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8) ao longo do tempo, com tokens queimados em cada transação da rede SORA v2.
- As recompensas elásticas para validadores e nomeadores de staking são dadas em VAL, como uma porcentagem do VAL diário queimado
- Os detentores recebem uma parte do XOR criado pela curva de token bonding
 para fornecer liquidez no Polkaswap. Os titulares de VAL podem agrupar-se
 em DAOs para reunir sua liquidez e votar para fornecer liquidez para
 negocie pares no Polkaswap e receba tokens PSWAP como recompensa.

VAL é o token de recompensa validador da rede SORA, usado para recompensar aqueles que apostam em XOR como parte do algoritmo de consenso de Prova de Participação Nomeado. [Conforme descrito](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), VAL é um token deflacionário que é queimado com cada transação na rede SORA. Uma parte dos tokens queimados é re-mintada e distribuída aos validadores e nomeadores de staking, de acordo com as regras de recompensa.

::: info
[Tokens VAL eram anteriormente tokens XOR v1](https://medium.com/sora-xor/sora-validator-rewards-419320e22df8), mas foram convertidos em VAL com nova tokenomics, por meio de [governança da comunidade]( https://medium.com/sora-xor/sora-v2-implementation-1febd3260b87). VAL é um token multichain que reside na rede SORA v1 e Ethereum, com uma ponte confiável – _HASHI_ – abrangendo as duas redes.
:::

## Distribuição de tokens VAL

O token **VAL** foi distribuído aproximadamente igualmente para três grupos, em 3 etapas:

- Ex-detentores de XOR v1 (no quarto trimestre de 2020)
- Portadores XOR ERC-20 como lançamento aéreo (com tempo de aquisição)
- Um veículo de investimento para o ecossistema SORA

## Aprender mais

- [Como executar um nó mestre SORA](/pt/running-a-node.md)
- [Consenso SORA](/pt/consensus.md)
