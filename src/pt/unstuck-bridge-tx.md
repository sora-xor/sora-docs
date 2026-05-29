---
title: "Cómo Desatascar Transacciones SORA-ETHEREUM | Guía de Solución de Problemas"
head:
  - - meta
    - name: description
      content: "Aprenda como resolver transações travadas entre a rede SORA e Ethereum. Siga este guia passo a passo para resolver transações SORA-ETHEREUM travadas ou com falha. Aprenda como verificar o status de sua transação ponte, recuperar o hash da transação, coletar o dados necessários para desbloquear a transação e chamar manualmente sua transação Ethereum para receber seus tokens."
  - - meta
    - name: keywords
      content: "Transacciones SORA-ETHEREUM, puente Sora>ETH, transacción de Ethereum, desatascar transacciones, metamask, transferencias entre cadenas, solución de problemas, Red SORA, Ethereum, estado de la transacción de puente, hash de la transacción, transacción desatascada, guía de solução de problemas"
---

# Como desbloquear transações SORA→ETHEREUM

::: informações
Este guia foi escrito pelo membro da comunidade "Frasier Man" e revisado pela equipe SORA. Se você quiser agradecer ao homem Frasier, por favor, doe para: `5D4pKyFNRjU8yoYKgiH1UqrjzayjCkttt82HsAdwQ6FTsQyv`
:::

### Quando usar este guia:

- Sua transação ponte SORA está pendente ou falhou.
- O comando "retry" na [interface bridge](https://polkaswap.io/#/bridge/) não funciona/não está disponível.
- Seus fundos saíram da sua conta SORA e não chegaram à sua conta Ethereum depois de algum tempo.

## Visão geral das etapas deste guia

- [Etapa 1](#etapa-1) Verifique se sua transação ponte está realmente travada ou apenas pendente.

- [Etapa 2](#etapa-2) Encontre o hash da transação para sua transação travada.

- [Etapa 3](#etapa-3) Obtenha os dados necessários para liquidar a transação (obtendo o seu comprovante).

- [Etapa 4](#etapa-4) Use sua prova para chamar manualmente sua transação Ethereum para receber seus tokens.

::: informações
A [Etapa 4](#etapa-4) é um pouco diferente para cada token, portanto,
siga a subseção correta.\*\*
:::

:::informações
Se no final da Etapa 4 o Ethereum solicitar uma GRANDE
taxa de transação, NÃO CONFIRME A TRANSAÇÃO. Isso significa
que os dados foram inseridos incorretamente, verifique novamente sua entrada.
:::

### Etapa 1

Verifique se sua transação está realmente travada ou apenas pendente.

1. Conecte-se ao aplicativo Polkadot.js: [https://polkadot.js.org/apps/rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/rpc)

2. Clique em "Desenvolvedor" e selecione "Chamadas RPC":
   ![](/.gitbook/assets/unstucktx-rpc-call.png)

3. Clique em “autor” e selecione “Ethbridge”. Por padrão, “getAccountRequests(accountId, statusFilter)” deve ser selecionado, caso contrário, selecione-o.
   ![](/.gitbook/assets/unstucktx-ethbridge.png)

4. Certifique-se de que sua conta esteja selecionada abaixo, clique em "opção incluir" e escolha "Pendente" e envie a chamada RPC
   ![](/.gitbook/assets/unstucktx-include-option.png)

Se o seu resultado contiver algum hashe de transação, ele AINDA estará pendente e poderá levar algum tempo para ser processado. **Se o seu resultado for semelhante ao abaixo e não produzir hashes, então sua transação ponte SORA foi aprovada e você deve continuar seguindo o guia para desbloquear sua transação.**
![](/.gitbook/assets/unstucktx-approved-continue.png)

### Etapa 2

Encontre o hash da transação aprovada (mas travada).

1. Se você continuar a partir da etapa 1, sua chamada RPC precisará apenas de um pequeno ajuste. Clique em “opção incluir”, mas desta vez selecione “Aprovações prontas” e envie a chamada RPC
   ![](/.gitbook/assets/unstucktx-approvals-ready.png)

O resultado é uma lista de todas as transações ponte SORA que foram
aprovadas no lado SORA. Sua última transação ponte é a última (role
para baixo se necessário). Se você fez mais transações de ponte
SORA> ETH após a transação travada, você precisará ir de baixo para
cima na lista até encontrar sua transação travada.

2. Copie o hash da sua transação “travada”, ficará assim:

`0x57533dc46a5d257b6dj0nhagb0f8s4dfedfl6cpppcoaidu99dd0sdc4def4g6b`

![](/.gitbook/assets/unstucktx-stuck-tx.png)

### Etapa 3

Use seu hash de transação para obter os dados necessários (prova) para a etapa 4.

1. Continuando a partir da etapa 2, clique em “get**Account**Requests(accountId, statusFilter)” e altere para “get**Approved**Requests(requestHashes, networkId)

![](/.gitbook/assets/unstucktx-get-approved-requests.png)

2. Clique em “Adicionar item”.
3. Cole seu hash de transação aprovada da etapa 2 em vez de 0x000…
4. Clique em “Incluir Opção” e deixe o ID da rede como 0.
5. Envie a chamada RPC:

![](/.gitbook/assets/unstucktx-add-approved-request.png)

O resultado é a sua “Prova”, contém todos os dados necessários para o passo 4.

::: detalhes Expanda para ver um exemplo de teste

```
Transfer: {

currency_id: {

TokenAddress: 0x6b175474e89094c44da98b954eedeac495271d0f

},

amount: 30,000,000,000,000,000,000,000,

to: 0xd7230339a4b355ae6d24a7378cc910o85l34k5nb,

from: 0x6ef01fd3b42ed7a3fa0e7ca366d0a464dc71016d,

tx_hash: 0x235517c869f0288ad8jjhag6f0de0jbkelf6ooi5ycct5g9d945d73d40d987y6b,

network_id: 0x0000000000000000000000000000000000000000000000000000000000000000,

raw: 0x6b175474e89094c44da98b954eedeac495271d0f00000000000000000000000000000000000000000000069c1d44c523e2f80000d7330339a1b395ae5d24ab376cc610085034458c6
{

r: 0x7a42sefc5dh232j34g61d22c53b28cn9600f4jhggf70fdfeh83kb4l7d9s2bcea,

s: 0x79b1e77bb20663953981d267fbc01d53f9cc3x34s63aa7h3f4385l04td9be9c43,

*v: 0

},

{

r: 0xcc9fcee0fd50bfa29ekb10ldlkjh3tdef02f9beb74a1v295ac0c5x01253f8f8f,

s: 0xkafvd79ffa27g10h928jb88066e8252dec3d58fb6ebf0862c6839d880f858a8f,

v:
```

:::

Aqui está o guia sobre como você deve preparar **seus** dados para a próxima etapa.

::: dica
Você copiará e colará os dados do seu teste. Na primeira vez que você fizer isso, é mais fácil primeiro copiar e colar todo o teste em um bloco de notas e editar os resultados conforme descrito abaixo, prontos para uso na etapa 4.
:::

| Campo                | Descrição                                                                                                                                                                                                                        | Exemplo                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Endereço do token    | Pode ser copiado e colado como está, sem vírgulas ou espaços.                                                                                                                                                                    | `0x6b175474e89094c44da98b954eedeac495271d0f`                         |
| Quantidade           | Copie e cole este número e remova todas as vírgulas. (este valor refletirá o valor que você transferiu, mas será um número muito maior, por exemplo, o valor neste exemplo de ponte era na verdade 30.000)                       | `30000000000000000000000`                                            |
| Um                   | Pode ser copiado e colado como está, sem vírgulas ou espaços. **NOTA - Este é o endereço Ethereum que estava conectado à ponte quando a transação foi feita, deve ser o mesmo endereço usado na conexão na Etapa 4.**            | `0xd7230339a4b355ae6d24a7378cc910o85l34k5nb`                         |
| De                   | Pode ser copiado e colado como está, sem vírgulas ou espaços.                                                                                                                                                                    | `0x6ef01fd3b42ed7a3fa0e7ca366d0a464dc71016d`                         |
| Hash de transação    | Pode ser copiado e colado como está, sem vírgulas ou espaços.                                                                                                                                                                    | `0x235517c869f0288ad8jjhag6f0de0jbkelf6ooi5ycct5g9d945d73d40d987y6b` |

**Os seguintes (R, S e V) têm dois números, o número superior e o
mais baixos, eles devem ser colocados em um arranjo, isso significa colocar o
dados entre colchetes, separados por vírgula, número superior primeiro
e o segundo número mais baixo.**

| Campo | Descrição                                                                                                                                           | Exemplo                                                                                                                                   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| R     | Comece com um colchete aberto, cole o “R” superior, depois escreva uma vírgula e cole o “R” inferior e termine com um colchete fechado.             | `[0x7a42sefc5dh232j34g61d22c53b28cn9600f4jhggf70fdfeh83kb4l7d9s2bcea,0xcc9fcee0fd50bfa29ekb10ldlkjh3tdef02f9beb74a1v295ac0c5x01253f8f8f]` |

**Certifique-se de que não há espaços na matriz, verifique após a vírgula se não há espaço.**

| Campo | Descrição                                                                                                                                                                             | Example                                                                                                                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| S     | O mesmo que R, mas usa o “S” superior e inferior                                                                                                                                      | `[0x79b1e77bb20663953981d267fbc01d53f9cc3x34s63aa7h3f4385l04td9be9c43,0xkafvd79ffa27g10h928jb88066e8252dec3d58fb6ebf0862c6839d880f858a8f]`                                                                   |
| V     | O formato de V também deve ser colocado em um array, existem duas versões, uma é para desbloquear o XOR e a outra é para todos os outros tokens. **Para todos os tokens, exceto XOR** | Se seu `v = 0` então você deve colocar `27` no array. Se seu `v = 1` então você deve colocar `28` no array. Para nosso exemplo, o v superior é `0` e o v inferior é `1`, então nosso array seria `[27,28]`   |
| V     | Para XOR                                                                                                                                                                              | Se `v = 0` então você deve colocar `0x1b` no array, se `v = 1` então você deve colocar `0x1c` no array. Para nosso exemplo, o v superior é `0` e o v inferior é `1`, então nosso array seria `[0x1b,0x1c]`   |

- Resultado do teste

Agora você tem tudo que precisa para a etapa 4, do nosso exemplo de teste temos o seguinte, o seu será semelhante a este.

```
0x6b175474e89094c44da98b954eedeac495271d0f

30000000000000000000000

0xd7230339a4b355ae6d24a7378cc910o85l34k5nb

0x6ef01fd3b42ed7a3fa0e7ca366d0a464dc71016d

0x235517c869f0288ad8jjhag6f0de0jbkelf6ooi5ycct5g9d945d73d40d987y6b

[0x7a42sefc5dh232j34g61d22c53b28cn9600f4jhggf70fdfeh83kb4l7d9s2bcea,0xcc9fcee0fd50bfa29ekb10ldlkjh3tdef02f9beb74a1v295ac0c5x01253f8f8f]

[0x79b1e77bb20663953981d267fbc01d53f9cc3x34s63aa7h3f4385l04td9be9c43,0xkafvd79ffa27g10h928jb88066e8252dec3d58fb6ebf0862c6839d880f858a8f]

[27,28] (for all tokens except XOR) or [0x1b,0x1c] (for XOR)
```

### Etapa 4

Use seus dados de teste para chamar a transação Ethereum.

Existem quatro métodos diferentes, dependendo do token que você está
destravado, vá para o método correto e tenha seus dados de teste prontos
para colar.

- [XOR](#xor)
- [VAL](#val)
- [PSWAP & CERES](#pswap-ceres)
- [Todos os outros tokens ERC-20](#todos-os-outros-tokens-erc-20-por-exemplo-eth-dai-uni-etc)

##### XOR

1. Abra https://web3playground.io/QmfPMVGCCSHYtk5Z6DYYzv5hZ1SDakpB3bwA5w9rDTPB9A.
2. Sua metamask solicitará que você se conecte, certifique-se de que a carteira correta esteja selecionada.
3. Insira seus dados de teste nos campos superiores do código. Observe que para o XOR você só precisa colar os dados em si, deixando de fora os colchetes e vírgulas da matriz, pois estão no lugar no código.
4. Já existe um exemplo de teste na página, basta substituir os dados, deixando as aspas no lugar.

Abaixo estão os dados de amostra que você verá ao abrir o link. Observe que pode ser necessário rolar para a direita para ver o código inteiro, as palavras em verde (por exemplo, // Endereço do token) são para que você saiba quais dados colar.

![](/.gitbook/assets/unstucktx-link-sample-data.png)

Abaixo está nosso exemplo de teste do PASSO 3 inserido no código, observe como as aspas devem ser deixadas no lugar. É assim que você deve colar seus dados.

![](/.gitbook/assets/unstucktx-paste-data-example.png)

5. Clique em executar, isso deve abrir sua metamask para você confirmar. Lembre-se de que se o preço do gás for excessivo (centenas de dólares), alguns dados estão errados. Uma vez confirmado, seu XOR deverá chegar em sua carteira. Lembre-se de adicionar o endereço do token à sua carteira, se necessário.

##### VAL

1. Abra https://etherscan.io/address/0xd1eeb2f30016fffd746233ee12c486e7ca8efef1
2. Clique em “Contrato”
3. Clique em “Escrever como proxy”
4. Clique em “Conectar Web 3”.
5. Certifique-se de ter seu endereço eth e um círculo verde exibido após a conexão.
6. Clique em “mintTokensByPeers”

![](/.gitbook/assets/unstucktx-mint-tokens-peers.png)

7. Insira seus dados de teste nos campos abaixo, com base em nosso exemplo de teste da Etapa 3. É assim que você deve colar seus dados. (nota: beneficiário = para)

![](/.gitbook/assets/unstucktx-proof-input.png)

8. Clique em "escrever", isso deve abrir sua metamask para você confirmar. Lembre-se que se o preço do gás for excessivamente alto (centenas de dólares), então algo nos dados está incorreto. Depois de confirmado, seu VAL deverá chegar em sua carteira. Lembre-se de adicionar o endereço do token à sua carteira, se necessário.

##### PSWAP & CERES

1. Abra https://etherscan.io/address/0x1485e9852ac841b52ed44d573036429504f4f602
2. Clique em “Contrato”
3. Clique em “Escrever Contrato”
4. Clique em “Conectar Web 3”
5. Certifique-se de que seu endereço eth apareça e um círculo verde seja exibido após a conexão
6. Clique em “receiveBySidechainAssetID”

![](/.gitbook/assets/unstucktx-receive-sidechain-asset.png)

7. Insira seus dados de teste nos campos abaixo, com base em nosso exemplo de teste da Etapa 3. É assim que você deve colar seus dados. (nota: sideChainasetid = endereço do token)

![](/.gitbook/assets/unstucktx-sidechain-input.png)

8. Clique em "escrever", isso deve abrir sua metamask para você confirmar. Lembre-se que se o preço do gás for excessivamente alto (centenas de dólares), então algo nos dados está incorreto. Depois de confirmado, seu PSWAP deverá chegar em sua carteira. Lembre-se de adicionar o endereço do token à sua carteira, se necessário.

##### Todos os outros tokens ERC-20 (por exemplo, ETH, DAI, UNI, etc.)

1. Abra https://etherscan.io/address/0x1485e9852ac841b52ed44d573036429504f4f602
2. Clique em “Contrato”
3. Clique em “Escrever Contrato”
4. Clique em “Conectar Web 3”
5. Certifique-se de que seu endereço eth apareça e um círculo verde seja exibido após a conexão
6. Clique em “receiveByEthereumAssetAddress”

![](/.gitbook/assets/unstucktx-eth-asset-address.png)

7. Insira seus dados de teste nos campos abaixo, com base em nosso exemplo de teste da Etapa 3. É assim que você deve colar seus dados.

![](/.gitbook/assets/unstucktx-eth-asset-proof.png)

8. Clique em "escrever", isso deve abrir sua metamask para você confirmar.
   **Lembre-se de que se o preço do gás for excessivamente alto (centenas de dólares), então algo nos dados está incorreto.**
   Depois de confirmados, seus tokens deverão chegar à sua carteira. Lembre-se de adicionar o endereço do token à sua carteira, se necessário.
