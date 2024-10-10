---
title: "Create an Address on the SORA Network | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to create an address on the SORA network and start interacting with the SORA ecosystem. Discover the steps to generate a new address, the importance of address security, and how to use your address for various activities within the SORA network."
  - - meta
    - name: keywords
      content: "create an address, SORA network, address generation, address security"
---

<!-- TODO:
- find missing images
- fix wrong images
-->

# Account Creation

Here we provide you with instruction on account creation:

- [via polkadot.js browser plugin](#via-polkadotjs-browser-plugin)
- [via polkadot.js application](#via-polkadotjs-app-ui)
- [via SORA mobile application](#via-sora-mobile-application)
- [via Polkaswap Telegram
  application](#via-polkaswap-telegram-application)

::: tip
You can also create a SORA account using [Google](/polkaswap-connect-with-google.md)
:::
::: tip

We recommend using the SORA testnet for practice exercises. Here are the Testnet links:

1. [Polkaswap test application](https://test.polkaswap.io/)
2. [Polkadot js SORA testnet application](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer)
3. [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
4. [iOS testnet application](https://testflight.apple.com/join/670hF438)

:::

In the practice exercise, an account should be created in 3 different ways. Whichever way you choose, you'll have the same result after importing an account to other platforms. A beautiful video tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdJ6yFFl06k" title="SORA account creation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Via polkadot.js Browser Plugin

Use a Chrome or Firefox browser.

1. Download [https://polkadot.js.org/extension/](https://polkadot.js.org/extension/) browser extension and install the extension.

   ![](.gitbook/assets/create-address-browser-install-polkadot.png)

2. Open the extension and confirm that you understand the disclaimer.

<center><img src="/.gitbook/assets/create-address-browser-polkadot-confirm.png" width="400"></center>

3. Create the account. You should click on the `+` button

   <center><img src="/.gitbook/assets/create-address-browser-create.png" width="400"></center>

   You'll see the mnemonic. **Never share it with anyone** and don't use the same one as the screenshot (_this is just a demonstration, you will be assigned another_). **Keep this passphrase secure because it's the only way to restore your account.**

   <center><img src="/.gitbook/assets/create-address-browser-mnemonic.png" width="400"></center>

4. Click the checkbox and move on to the next step.

5. Enter an account name and password then proceed

   <center><img src="/.gitbook/assets/create-address-browser-name-password.png" width="400"></center>

   The new account is now created

   <center><img src="/.gitbook/assets/create-address-browser-account-created.png" width="400"></center>

6. Now you should change the address format so that it begins with `cn`. Open Settings and select Displayed Address format. It should be SORA network.

   <center><img src="/.gitbook/assets/create-address-browser-change-to-sora-network.png" width="400"></center>

   Great job! Now you have an address with the `cn` prefix

   <center><img src="/.gitbook/assets/create-address-cn-prefix.png" width="400"></center>

## Via polkadot.js App UI

1. Open [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) and then select SORA network. Use this [link](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/explorer) for the testnet.

   If you've already installed the Polkadot browser plugin, it will request authorization to sync data. You can do it, as it will make account management easier.

  <center><img src="/.gitbook/assets/create-address-app-authorize.png" width="400"></center>

2. Open the [Accounts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.stage.sora2.soramitsu.co.jp#/accounts) page.

   If you allow the Polkadot browser plugin to sync, then your accounts will appear in the Polkadot.js app.

  <center><img src="/.gitbook/assets/create-address-app-synced.png" width="600"></center>

You can create a new account.

3. Click Add account:

  <center><img src="/.gitbook/assets/create-address-app-add-account.png" width="600"></center>

4. Save the mnemonic phrase, **make sure to keep it safe, and don't share it**. Confirm that you've saved the mnemonic and click Next.

   <center><img src="/.gitbook/assets/create-address-app-mnemonic.png" width="600"></center>

5. Enter a name and a password for the account, then click Next.

  <center><img src="/.gitbook/assets/create-address-app-name-password.png" width="600"></center>

6. After the confirmation click Save.

  <center><img src="/.gitbook/assets/create-address-app-save.png" width="600"></center>

Now you have two accounts. One was injected from the Polkadot browser plugin and the second one was created in the Polkadot js app.

<center><img src="/.gitbook/assets/create-address-app-view-accounts.png" width="600"></center>

## Via SORA Mobile Application

The SORA mobile application allows users to interact with the SORA network using mobile devices. These are the links to the applications:

- [Android application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora) for the **mainnet**
- [iOS application](https://apps.apple.com/us/app/sora-dae/id1457566711) for the **mainnet**

You can use these **testnet** applications to practice:

- [Android testnet application](https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora.communitytesting&hl=en&gl=US)
- [iOS testnet application](https://testflight.apple.com/join/670hF438)

When you install the application you'll be able to create an account.

1. Open the app. There are two options: **Create account** and **Import account**:

  <center><img src="/.gitbook/assets/create-address-sora-options.png" width="400"></center>

2. For this exercise, tap on **Create account**:

  <center><img src="/.gitbook/assets/create-address-sora-create.png" width="400"></center>

3. Enter an account name. It may be any string. Then tap continue.

  <center><img src="/.gitbook/assets/create-address-sora-enter-name.png" width="400"></center>

4. The screen with the passphrase will be shown. Save the passphrase in a secret place or remember it.

   ::: tip

   Your passphrase is the only way to recover the account in case you change/lose your mobile phone, log out of the application, or other emergency cases.

   :::

   You can confirm the mnemonic or skip the process. Just tap the words at the top of the screen in the right order. The tapped word will be shown on the bottom of the screen.

  <center><img src="/.gitbook/assets/create-address-sora-confirm-mnemonic.png" width="400"></center>

5. Enter and confirm a PIN code of your choice.

  <center><img src="/.gitbook/assets/create-address-sora-enter-pin.png" width="400"></center>

6. You can also allow the application to use biometry auth. And finally, you'll get access to the wallet.

  <center><img src="/.gitbook/assets/create-address-sora-biometry-auth.png" width="400"></center>

## Via Polkaswap Telegram Application

You can create an account on SORA with Style and Freedom using the
[Polkaswap Telegram app](https://t.me/polkaswap_io_bot).

1. Follow the
   [connect wallet
   flow](/polkaswap-connect-wallet.md#polkaswap-telegram-app) until the
   SORA account options.

<center><img src="/.gitbook/assets/connect-with-sora-tg.png" width="400"></center>

2. Pick the create account section.
   ::: tip
   Have a pen and paper handy to save the mnemonic phrase somewhere
   safe. Ideally keep it offline.
   :::

<center><img src="/.gitbook/assets/create-address-sora-tg-passphrase.png" width="400"></center>

3. After writing down your mnemonic or copying it, click next step and
   input the phrase to confirm. (_You can also chose to skip this
   option, the outcome is the same_)

<center><img src="/.gitbook/assets/create-address-sora-tg-confirm.png" width="400"></center>

4. Then, give your account a name and set a unique password. You can
   also toggle the switch to allow JSON export to restore your
   account. Fill in the information and finally click/tap create account.
   ::: info
   If you chose to enable JSON exports, make sure you keep your JSON file
   safe and do not share it with anyone.
   :::

<center><img src="/.gitbook/assets/create-address-sora-tg-details.png" width="400"></center>

5. After creating your account, you will be able to use it immediately
   on the Polkaswap Telegram application!

<center><img src="/.gitbook/assets/create-address-sora-tg-success.png" width="400"></center>

## Restoring account from mnemonic in different applications

The only way to restore the account in all applications is a mnemonic passphrase. The Polkadot.js browser plugin supports more options, however, the mobile application only supports a mnemonic passphrase. You can use a mnemonic passphrase from the mobile application in order to get access to [polkaswap.io](http://polkaswap.io) or [test.polkaswap.io](http://test.polkaswap.io) and vice-versa.

For example, my passphrase is

`chicken worth gaze device proof frost adjust toe elite obvious rapid club`

You can restore the account in the Polkadot browser plugin.

1. Click on ➕ sign and click on **Import account from pre-existing seed**:

  <center><img src="/.gitbook/assets/restore-account-import.png" width="400"></center>

2. Then enter the passphrase and click **Next**:

   <center><img src="/.gitbook/assets/restore-account-enter-mnemonic.png" width="400"></center>

3. Then enter the account name and set up a password and proceed.

  <center><img src="/.gitbook/assets/restore-account-setup.png" width="400"></center>

Great, you've just restored your account!

<center><img src="/.gitbook/assets/restore-account-restored.png" width="400"></center>

The process is the same for the mobile application:

1. Open the mobile application and tap on **Import account.**

  <center><img src="/.gitbook/assets/restore-account-sora-import.png" width="400"></center>

2. Enter the account name and passphrase.

  <center><img src="/.gitbook/assets/restore-account-sora-enter-mnemonic.png" width="400"></center>

3. Then set up and confirm a PIN code.

  <center><img src="/.gitbook/assets/restore-account-sora-enter-pin.png" width="400"></center>

4. After that, you'll get access to the account.

  <center><img src="/.gitbook/assets/restore-account-biometry-auth.png" width="400"></center>

To restore an account using the Telegram App, the process is very
easy.

1. In the Connect with SORA Wallet section, click Import Account

<center><img src="/.gitbook/assets/connect-with-sora-tg.png" width="400"></center>

2. Input your mnemonic phrase or draag&drop/choose a JSON account file.

<center><img src="/.gitbook/assets/restore-account-tg-import.png" width="400"></center>

3. Give you account a name and password, then tap
   import. Congratulations, you have restored your account.

<center><img src="/.gitbook/assets/restore-account-tg-rename.png" width="400"></center>

## Converting the address format

As mentioned before, Substrate networks use different address prefixes for generating addresses. However, the key pair is the same. If you create an account, but get the address without the `cn` prefix, then you can convert it using the [Subscan address converter](https://sora.subscan.io/tools/ss58_transform).

<center><img src="/.gitbook/assets/convert-address-subscan-converter.png" width="400"></center>

Just enter your address and click **Transform**. You can specify the output type. By default, the Subscan tool will convert the address to all supported network formats.

<center><img src="/.gitbook/assets/convert-address-transform.png" width="400"></center>
