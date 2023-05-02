# Transfer

## Theory

Transfers are used to send tokens from one account to another. You can make transfers using Polkadot.js apps, Polkaswap, and the SORA mobile application.

The transfer logic is implemented in the `assets` pallet. SORA supports multiple assets and every asset can be transferred.

Transferring is a transaction so the network fee must be paid. The fee is calculated in XOR so even if you transfer VAL, PSWAP, or any other token you should have some XOR to cover the fee. The transfer fee in SORA is **0.07 XOR**;

## Practice

::: info ℹ
We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdJ6yFFl06k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Getting test tokens

You can practice with transfers using test tokens in the SORA testnet. Open the [faucet](https://testfaucet.polkaswap.io/)

![](<.gitbook/assets/Untitled(11).png>)

Enter your SORA address, select the token, and the number of tokens you need.

![](<.gitbook/assets/Untitled(1).png>)

Then click **Send testnet VAL (XOR, PSWAP).**

::: info ℹ
_**Keep in mind that every transaction in SORA requires a fee in XOR. Transferring is a transaction so don't forget to request a few XORs from the faucet.**_
:::

### **Send tokens**

#### **Via Polkaswap**

The Polkaswap web application has a wallet that you can use for sending tokens. Just open the **Account** section and click on send icon (*arrow near the asset)

![](<.gitbook/assets/Untitled(25).png>)

Enter the recipient address and amount of tokens that you'd like to send

![](<.gitbook/assets/Untitled(1)(5).png>)

<!-- If you enter an address that does not start with `cn`, then you'll see a notification about address conversion (as mentioned in the Account prefix section of [Accounts in SORA](/accounts-in-sora.md#converting-the-address-format)). -->

![](<.gitbook/assets/Untitled(2)(4).png>)

Then click Send and confirm the transaction.

![](<.gitbook/assets/Untitled(3)(5).png>)

Afterward, the transaction confirmation from the Polkadot.js extension should appear. Enter your password and confirm the transaction.

![](<.gitbook/assets/Untitled(4)(6).png>)

You can then find your transaction on the Activity tab.

![](<.gitbook/assets/Untitled(5)(7).png>)

#### Via mobile application

The SORA mobile application provides a good UX for sending and receiving tokens. Open the wallet screen and tap the send icon in the top right corner. After that, select the token that will be sent and enter the recipient's address.

![](.gitbook/assets/Screenshot\_20210915-101518\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101528\_Soralution.jpg)



![](.gitbook/assets/Screenshot\_20210915-101539\_Soralution.jpg)

Then enter the number of tokens and confirm the transaction.

![](.gitbook/assets/Screenshot\_20210915-101559\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101605\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101613\_Soralution.jpg)

You'll be redirected to the Wallet screen. You can tap on the transaction in history to view the details.

![](.gitbook/assets/Screenshot\_20210915-101624\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101639\_Soralution.jpg)

#### Sending tokens using a QR code

A QR code is easy to use and reduces the number of mistakes and simplifies the address and token input. Token information and address are encoded within the QR code and the application decodes it.

Tap on the Scan icon on the top right corner and allow access to the camera. Then scan the QR code and enter the number of tokens that you'd like to send.

![](.gitbook/assets/Screenshot\_20210915-101706\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101737\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101748\_Soralution.jpg)

#### Receiving tokens using a QR code

If you'd like to get tokens using a QR code just tap the QR icon on the top right corner of the wallet screen. Then select the asset. The QR code will be generated so that you can share it using the share icon or by copying the image.

![](.gitbook/assets/Screenshot\_20210915-024459\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101755\_Soralution.jpg)

![](.gitbook/assets/Screenshot\_20210915-101800\_Soralution.jpg)
