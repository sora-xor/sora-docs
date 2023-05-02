# NFTs

The Polkaswap interface has been powered up and non-fungible tokens are available in [Polkaswap](https://polkaswap.io/#/wallet). At the moment, you can only mint and share NFT. Swapping, liquidity and bridging functions are not available yet.&#x20;

The other item needed is a file to mint. You can use an [IPFS link](https://ipfs.io/) or you can upload the file locally.



### Minting Tokens

Access [Polkaswap](https://polkaswap.io/#/wallet) and navigate to account. Click on the circular icon on the top right corner of the account view

![](<.gitbook/assets/Wallet\_-\_Polkaswap(1).png>)

Select the NFT tab and get ready to mint your first NFT on the SORA network!

![](.gitbook/assets/Wallet\_-\_Polkaswap1.png)

In the create NFT interface you will be able to mint your non-fungible, here is an overview of the available fields;

![](<.gitbook/assets/Wallet\_-\_Polkaswap2(1).png>)

* To add the file, you can use an **IPFS link**, or alternatively, you can **upload a file** from your local storage.
* You will then need to assign a **Token symbol** with **maximum 7 chars**. Keep this in mind as you will need the token symbol later when you import the NFT to your wallet.
* Next is **Token name**, this can be similar to the token symbol, but has a 33 char limit instead.
* Then is the token **Description**, what's your token about? what makes your token special? You can let your imagination free here, or add a generic description.
* Finally, the **Token supply**. In this field you will specify how many tokens you want to mint.
* The next fields are toggle switches where you can choose if you want to **mint more tokens based on this one (Extensible supply), or if you want your NFT to have the ability to divide into fractional parts (Divisible)**. More information on this option is coming soon.

Now that you know what the NFT interface looks like and what information you need to provide, let’s mint an NFT!

#### Walkthrough

For this example, we will be minting the _Temple of the God of the Wind, from the Tulum Mayan ruins_. We have an [IPFS link for the image](https://ipfs.io/ipfs/QmUwzJpeewVQoKvzaMXwskyZcwWf9SrbQTUuuwX8ppXcNu?filename=Tulum.jpeg) too.

Paste the URL in the IPFS link field and let the image load.

![](<.gitbook/assets/Wallet\_-\_Polkaswap3(1).png>)

Once the image is visible, add the token symbol, name, description, and how many copies you would like to mint.

![](.gitbook/assets/Wallet\_-\_Polkaswap4.png)

Finally, choose if you want to mint more tokens based on this, and if you want the token to be divisible, make sure you have enough funds for the transaction fee and click **Create NFT**.

![Note: if you want to pool an NFT, it has to be Divisible](.gitbook/assets/Wallet\_-\_Polkaswap5.png)

You will get a confirmation screen where you can double-check that all the info input was correct, then click confirm and sign the transaction with your wallet. You will be required to sign using your [Polkadot.js](https://polkadot.js.org/extension/) browser add-on.

![](.gitbook/assets/Wallet\_-\_Polkaswap6.png)

Once the NFT has been minted, navigate to the **Activity** tab within your account view and make sure the asset appears as **registered**.

![](<.gitbook/assets/Cursor\_and\_Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future\_(1).png>)

_You have successfully minted an NFT!_

But you still can’t see it within your assets... **This is where the token symbol comes in.**

### Adding Tokens to Your Wallet

Navigate back to the **Assets** tab within your account view, then scroll to the bottom of the list and click the **Add Asset** button.

![](.gitbook/assets/Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future\_.png)

Search for the asset from the list using the token symbol you assigned, then select the token.

![](<.gitbook/assets/Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future\_1(1).png>)

As soon as you select it, you will be served with a disclaimer. **Always make sure that the tokens you add to your account are legitimate**.

Once you toggle the accept switch, click on **Add Asset**.

![](.gitbook/assets/Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future2\_.png)

Your NFT will now appear within your list of assets!

![](.gitbook/assets/Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future\_3.png)

### Viewing Tokens

What can you do with NFTs for now? Here is a quick rundown.

From your account view, click on the arrow to see the visual content of your NFT.

![](.gitbook/assets/Polkaswap\_—\_The\_DEX\_for\_the\_Interoperable\_Future\_4.png)

This will open a preview of your NFT. From here you can do things like:

![](.gitbook/assets/Wallet\_-\_Polkaswap7.png)

* Sending the token to another address
* Copying the token address
<!-- * And other functions are explained below, such as [swapping the token](nfts.md#swapping-tokens), [adding liquidity](nfts.md#pooling-tokens), or bridging the token. (_Token Bridging functionality is still TBD_). -->
* You can also **remove the asset** from your wallet by clicking on the circular icon next to the token name.

### Sending Tokens

You can send your freshly minted token to other addresses! In order to do that, you need your friend’s address and some XOR for the transfer fees. Click on the send button from the NFT view;

![](.gitbook/assets/Wallet\_-\_Polkaswap8.png)

A confirmation will appear requesting an address, and the amount of tokens to send. This will also display the network fee. Make sure everything is correct and click send.

![](.gitbook/assets/Wallet\_-\_Polkaswap9.png)

Then, confirm the recipient address is correct one more time, confirm and sign the transaction. And that is it! You can double-check your token supply and you will see **the NFT has been sent**.

![](.gitbook/assets/Wallet\_-\_Polkaswap10.png)

### Pooling Tokens

Although there is no NFT marketplace implementation on Polkaswap(_yet_), it is possible to pool NFT that you own, along with XOR. In order for a NFT to be pooled, it has to be **divisible**, so you can sell or buy only a fraction of it. Pooling NFT works like any other liquidity pool on Polkaswap, and [it also provides the same advantages](provide-liquidity#theory). The steps to pool your NFT are as follows:

![](<.gitbook/assets/image(11)(1).png>)

From the NFT preview within your wallet, click on the💧 icon.

![](<.gitbook/assets/Add\_Liquidity\_-\_Polkaswap(1).png>)

Select the amount of XOR to pair with your NFT, you can also add more than one NFT to the pool if you want to add more XOR.

![](.gitbook/assets/Add\_Liquidity\_-\_Polkaswap.png)

Double-check the details and if everything is correct, click confirm. Your Polkadot.js extension will require you to sign a transaction as well. Once it is confirmed, you will be able to see your NFT pool within the [Pool section in Polkaswap](https://polkaswap.io/#/pool/).

![](.gitbook/assets/Pool\_-\_Polkaswap.png)

Remember that you can pool more than one NFT at a time (_as many of the same token as you may have in your wallet_). You can also pool your NFT directly from the Pool section in Polkaswap;

![](<.gitbook/assets/Pool\_-\_Polkaswap(1).png>)

<!-- You can either add liquidity or create a pair. When you create a pair with an NFT, the flow will be the same as [pooling an NFT directly](nfts.md#pooling-tokens). There is a step in common with adding liquidity to an existing pool, which is the initial token selection. -->

![](<.gitbook/assets/image(24).png>)

Click on Custom to see your NFT and select the one you have decided to pool (_or add liquidity to an existing pool_) In this example, we will add more liquidity to the WINDTUL and XOR pool.

![](<.gitbook/assets/Add\_Liquidity\_-\_Polkaswap(2).png>)

Like before, select the token and the amount of liquidity (in this case 1 NFT and its equivalent in XOR), then click on Supply. You will receive a confirmation from your wallet and the token will be part of a liquidity pool. Alternatively, you can also add or remove liquidity from an NFT pair directly from the drop-down menu in the Polkaswap pool view.

![Adding or removing liquidity is possible from the Polkaswap Pool view](<.gitbook/assets/image(8).png>)

### Swapping Tokens

Finally, you can also swap an NFT for other tokens from the preview screen;

![](<.gitbook/assets/image(16).png>)

After clicking swap, you will be presented with the familiar [Polkaswap swapping interface](https://polkaswap.io/#/swap) that will allow you to trade your NFT for other tokens. Be aware that swapping your NFT like this will come at a significant price impact.

![](.gitbook/assets/Swap\_-\_Polkaswap.png)

Similar to the other functions, review the transaction summary and if you're happy with the outcome, click swap and sign the transaction on your Polkadot.js extension.&#x20;

::: warning

You can also buy NFT using the swap function, however, you need to add the desired NFT to your wallet as a custom asset. Swapping XOR or other tokens for NFT has a significant price impact. Be sure to understand these risks before trading NFT in Polkaswap.

:::
