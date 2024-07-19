---
title: "Contas na Rede SORA | SORA Docs"
head:
   - - meta
     - nome: descrição
       content: "Aprenda sobre as contas da rede SORA e como elas permitem que os usuários interajam com a rede e gerenciem seus ativos. Explore os diferentes tipos de contas, como contas de usuário e contas de sistema, e entenda como elas são usadas para transações, apostas, governança e outras atividades dentro do ecossistema SORA."
   - - meta
     - name: palabras clave
       content: "contas, rede SORA, contas de usuário, contas de sistema, gerenciamento de ativos, transações, apostas, governança"
---

# Contas

Uma conta é uma das entidades mais importantes da rede SORA. Se você tiver uma conta, poderá fazer transações no SORA.

A conta pode ser criada no SORA gratuitamente e sem limitações. SORA não possui processo KYC (Conheça seu Cliente) ou limitação de saldo mínimo. Você também pode ter quantas contas quiser.

A conta é armazenada na cadeia (_no blockchain_) para que todas as operações sejam transparentes e seguras. O formato de endereço usado em cadeias baseadas em substrato é SS58. O formato contém um prefixo de tipo de endereço que identifica um endereço como pertencente a uma rede específica. A rede SORA tem o prefixo `69`. Isso significa que todos os endereços começam com as letras “cn”.

Os prefixos são definidos [aqui](<https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)>).

É importante compreender que formatos diferentes para redes diferentes são simplesmente representações diferentes da mesma chave pública num par de chaves pública-privada gerado por uma ferramenta de geração de endereços. Isso torna os endereços compatíveis entre strings baseadas em Substrate, desde que você converta o formato. Por exemplo, você pode usar o mesmo par de chaves para SORA, Kusama e Polkadot. Porém, mesmo que o par de chaves seja o mesmo, os endereços serão diferentes.

A maioria das carteiras gera uma frase mnemônica para os usuários fazerem backup de suas carteiras e gerarem uma chave privada a partir do mnemônico. Se você gerar um mnemônico, receberá uma frase de 12 palavras que pode ser usada para restaurar a conta.

## Saber mais

- [Crie um endereço](/create-an-address.md)
- [Segurança da conta](/account-security.md)

<!-- TODO: Considere adicionar mais conteúdo de https://medium.com/sora-academy/sora-academy-ddfc86388a2f -->
