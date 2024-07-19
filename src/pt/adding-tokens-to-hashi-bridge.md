---
title: "Adicionar tokens à ponte Hashi | Documentação SORA"
head:
  - - meta
    - name: description
      content: "Aprenda como adicionar tokens à ponte Hashi na rede SORA. Descubra o processo passo a passo para listar novos tokens na ponte, incluindo os requisitos, procedimentos e considerações para adicionar tokens. Explore os benefícios da ponte de ativos e permitindo a interoperabilidade entre diferentes redes blockchain através da Ponte Hashi."
  - - meta
    - name: keywords
      content: "adicionando tokens, Hashi Bridge, rede SORA, listando tokens, requisitos, procedimentos, ponte de ativos, interoperabilidade, redes blockchain"
---

# Adicionando um token à ponte HASHI

Adicionar tokens à ponte HASHI permite a sua transferência entre as redes SORA e Ethereum.

Adicionar um token à ponte SORA HASHI envolve várias etapas:

1. [Registre um token no blockchain SORA](#register-a-token-within-the-sora-blockchain)
2. [Registre um ativo SORA na ponte](#register-a-sora-asset-to-the-bridge)
3. [Registre um token ERC-20 no Ethereum e seu mapeamento com um ativo SORA](#register-an-erc-20-token-on-ethereum-and-its-mapping-with-a-SORA-asset sora)
4. [Adicionar um token a uma lista de permissões](#add-a-token-to-a-whitelist)

## Registre um token na blockchain SORA

Consulte [Registrar](/register-an-asset.md) para obter instruções sobre como registrar um token na blockchain SORA.

## Registre um ativo SORA na ponte

1. Obtenha o AssetId do ativo que deseja adicionar (que você pode encontrar em [polkaswap.io](https://polkaswap.io)); por exemplo, `0x000268050a977248b641719592e7a0247ce4741839c83ec6aac6a865d3d0ba2c`.

2. Vá para [polkadot{.js}](http://polkadot.js.org/) na seção _Governance > Preimages_ e crie uma pré-imagem com `ethBridge.addAsset` e o valor para o endereço e ID da ponte rede do token a ser registrado. Os parâmetros são `assetId` e `networkId` (`0` para Ethereum).

   ![](.gitbook/assets/add-asset-preimage.png)

3. Copie o hash de pré-imagem da pré-imagem criada e envie uma proposta em _Governança > Democracia_. Alternativamente, você pode entrar em contato com um membro do conselho para que o Conselho crie diretamente uma moção para adicionar o ativo à ponte com a pré-imagem que você criou. Isto irá acelerar o processo de adição do ativo à ponte.

4. Assim que a proposta for aprovada, adquira as assinaturas dos peers da ponte por meio do RPC `ethBridge.getAccountRequests` com sua conta como primeiro argumento e o status `ApprovalsReady`.

   ![](.gitbook/assets/hashi-acquire-signatures.png)

5. O RPC retornará vários hashes. Estes são hashes de solicitação fora da cadeia; o último deve ser a solicitação `OutgoingAddAsset`. Para determinar se o ativo foi adicionado com sucesso, use o RPC `getRequests`.

6. Depois de encontrar seu hash, use o RPC `getApprovedRequests` para obter as aprovações.

7. Chame `addEthSidechainToken` no contrato inteligente da ponte.

### Usando Remix

1. Copie a ABI do contrato da seção Código para o Etherscan:

 ![](.gitbook/assets/hashi-copy-the-contract-abi.jpg)

2. Crie um arquivo com ABI em https://remix.ethereum.org:

 ![](.gitbook/assets/hashi-create-file-with-abi.jpg)

3. Escolha Metamask como provedor:

<center><img src="/.gitbook/assets/hashi-choose-metamask.jpg" width="400"></center>

4. Copie o endereço do contrato no campo "No endereço" e clique no botão No endereço

<center><img src="/.gitbook/assets/hashi-copy-address.jpg" width="400"></center>

5. Preencha os dados da transação:

<center><img src="/.gitbook/assets/hashi-fill-in-data.jpg" width="400"></center>

6. Confirme a transação:

<center><img src="/.gitbook/assets/hashi-confirm-transaction.jpg" width="400"></center>

### Usando Etherscan
Acesse https://etherscan.io/address/0x1485e9852ac841b52ed44d573036429504f4f602#writeContract e preencha os campos com os dados da etapa anterior. Observe que os parâmetros v das assinaturas devem ser aumentados em `27`. Ou seja, se você vir `v: 0` e `v: 1`, esses parâmetros devem ser passados ​​como `[27, 28]`.

![](.gitbook/assets/hashi-fill-in-data-using-etherscan.png)

## Registrando um token ERC-20 no Ethereum e mapeando-o para um ativo SORA

1. Obtenha todas as informações necessárias sobre o token:

 - Endereço (por exemplo, `0xdac17f958d2ee523a2206206994597c13d831ec7`)
 - Símbolo (por exemplo, `USDT`)
 - Nome (por exemplo, Tether `USD`)
 - Decimais (por exemplo, `6`)
 - ID da rede (por exemplo, `0` para Ethereum)

2. Crie uma proposta para chamar o extrínseco `ethBridge.addSidechainToken` com os argumentos da primeira etapa.

 ![](.gitbook/assets/hashi-create-proposal.png)

3. Após a aprovação da proposta, adquira as assinaturas dos peers da ponte através do RPC `ethBridge.getAccountRequests` da conta `cnTQ1kbv7PBNNQrEb1tZpmK7hZUUWqKBpWxmnxL4nczYfYfrh`.

 ![](.gitbook/assets/hashi-acquire-signatures.png)

4. O RPC retornará vários hashes. Estes são hashes de solicitações fora da cadeia, um deles deve ser a solicitação `OutgoingAddToken`. Para descobrir se o ativo foi adicionado com sucesso, use o RPC `getRequests`.

5. Depois que seu hash for encontrado, use o RPC `getApprovedRequests` para obter as aprovações.

6. Acesse https://etherscan.io/address/0x313416870a4da6f12505a550b67bb73c8e21d5d3#writeContract e chame `addEthNativeToken` com os dados da etapa anterior. Observe que os parâmetros v nas assinaturas devem ser aumentados em `27`. Ou seja, se você vir `v: 0` e `v: 1`, esses parâmetros devem ser passados ​​como `[27, 28]`.

 ![](.gitbook/assets/hashi-add-contract.png)

## Adicionando um token a uma lista de permissões

Se você deseja conectar seu token no Polkaswap e movê-lo para Ethereum, ele precisa estar na lista de permissões. Você pode colocar seu token na lista de permissões seguindo as instruções no [GitHub](https://github.com/sora-xor/polkaswap-token-whitelist-config).

Primeiro, a solicitação pull deve ser aprovada e, em seguida, o token será colocado na lista de permissões em futuras atualizações do Polkaswap.

