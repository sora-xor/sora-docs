---
title: "Cuentas en la Red SORA | SORA Docs"
head:
   - - meta
     - nome: descripción
       content: "Obtenga información sobre las cuentas en la red SORA y cómo permiten a los usuarios interactuar con la red y administrar sus activos. Explore los diferentes tipos de cuentas, como cuentas de usuario y cuentas del sistema, y comprenda cómo se utilizan para transacciones, apuestas , gobernanza y otras actividades dentro del ecosistema SORA".
   - - meta
     - name: palabras clave
       content: "cuentas, red SORA, cuentas de usuario, cuentas del sistema, gestión de activos, transacciones, apuestas, gobernanza"
---

# Cuentas

Una cuenta es una de las entidades más importantes de la red SORA. Si tiene una cuenta, puede realizar transacciones en SORA.

La cuenta se puede crear en SORA de forma gratuita y sin limitaciones. SORA no tiene un proceso KYC (Conozca a su Cliente) ni una limitación de saldo mínimo. También puedes tener tantas cuentas como quieras.

La cuenta se almacena en la cadena (_en la cadena de bloques_) para que todas las operaciones sean transparentes y seguras. El formato de dirección utilizado en las cadenas basadas en sustrato es SS58. El formato contiene un prefijo de tipo de dirección que identifica una dirección como perteneciente a una red específica. La red SORA tiene el prefijo `69`. Esto significa que todas las direcciones comienzan con las letras "cn".

Los prefijos se definen [aquí](<https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)>).

Es importante comprender que los diferentes formatos para diferentes redes son simplemente diferentes representaciones de la misma clave pública en un par de claves pública-privada generada por una herramienta de generación de direcciones. Esto hace que las direcciones sean compatibles entre cadenas basadas en Substrate siempre que convierta el formato. Por ejemplo, puedes utilizar el mismo par de claves para SORA, Kusama y Polkadot. Sin embargo, aunque el par de claves sea el mismo, las direcciones serán diferentes.

La mayoría de las billeteras generan una frase mnemónica para que los usuarios hagan una copia de seguridad de sus billeteras y generen una clave privada a partir de la mnemónica. Si genera un mnemotécnico, obtendrá una frase de 12 palabras que puede usarse para restaurar la cuenta.

## Aprende más

- [Crear una dirección](/create-an-address.md)
- [Seguridad de la cuenta](/account-security.md)

<!-- TODO: Considere agregar más contenidos de https://medium.com/sora-academy/sora-academy-ddfc86388a2f -->
