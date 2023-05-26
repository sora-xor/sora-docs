# NFTs

The Polkaswap interface has been powered up and non-fungible tokens are available in [Polkaswap](https://polkaswap.io/#/wallet). At the moment, you can only mint and share NFT. Swapping, liquidity and bridging functions are not available yet.

The other item needed is a file to mint. You can use an [IPFS link](https://ipfs.io/) or you can upload the file locally.

### Minting Tokens

1. Access [Polkaswap](https://polkaswap.io/#/wallet) and navigate to account.
2. Click on the circular icon on the top right corner of the account view:

    <center><img src="/.gitbook/assets/nft-add-asset.png" width="400"></center>

3. Select the NFT tab and get ready to mint your first NFT on the SORA network!

    <center><img src="/.gitbook/assets/nft-add-asset-select-nft.png" width="400"></center>

4. In the create NFT interface you will be able to mint your non-fungible NFTs.

    <center><img src="/.gitbook/assets/nft-add-asset-upload-nft.png" width="400"></center>

    Here is an overview of the available fields:

   * To add the file, you can use an **IPFS link**, or alternatively, you can **upload a file** from your local storage.
   * You will then need to assign a **Token symbol** with **maximum 7 chars**. Keep this in mind as you will need the token symbol later when you import the NFT to your wallet.
   * **Token name** is similar to the token symbol, but has a 33 char limit instead.
   * Token **Description** answers question like: what's your token about? what makes your token special? You can either let your imagination run free here, or add a generic description.
   * In the **Token supply** specify how many tokens you want to mint.
   * Use toggle switches to choose if you want to mint more tokens based on this one (Extensible supply), or if you want your NFT to have the ability to divide into fractional parts (Divisible). More information on this option is coming soon.

Now that you know what the NFT interface looks like and what information you need to provide, let’s mint an NFT!

#### Walkthrough

For this example, we will be minting the _Temple of the God of the Wind, from the Tulum Mayan ruins_. We have an [IPFS link for the image](https://ipfs.io/ipfs/QmUwzJpeewVQoKvzaMXwskyZcwWf9SrbQTUuuwX8ppXcNu?filename=Tulum.jpeg) too.

1. Paste the URL in the IPFS link field and let the image load.

    <center><img src="/.gitbook/assets/nft-paste-ipfs-link.png" width="400"></center>

2. Once the image is visible, add the token symbol, name, description, and how many copies you would like to mint.

    <center><img src="/.gitbook/assets/nft-provide-nft-description.png" width="400"></center>

3. Choose if you want to mint more tokens based on this. If you want the token to be divisible, make sure you have enough funds for the transaction fee and click **Create NFT**.

    ::: info
    If you want to pool an NFT, it has to be **Divisible**.
    :::

    <center><img src="/.gitbook/assets/nft-create-nft.png" width="400"></center>

4. On a confirmation screen, double-check that all the info input was correct, then click confirm and sign the transaction with your wallet. You will be required to sign using your [Polkadot.js](https://polkadot.js.org/extension/) browser add-on.

    <center><img src="/.gitbook/assets/nft-creation-confirm.png" width="400"></center>

5. Once the NFT has been minted, navigate to the **Activity** tab within your account view and make sure the asset appears as **registered**.

    <center><img src="/.gitbook/assets/nft-view-activity.png" width="400"></center>

_You have successfully minted an NFT!_

But you still can’t see it within your assets... **This is where the token symbol comes in.**

### Adding Tokens to Your Wallet

1. Navigate back to the **Assets** tab within your account view, then scroll to the bottom of the list and click the **Add Asset** button.

    <center><img src="/.gitbook/assets/nft-add-tokens.png" width="400"></center>

2. Search for the asset from the list using the token symbol you assigned, then select the token.

    <center><img src="/.gitbook/assets/nft-search-for-token.png" width="400"></center>

3. As soon as you select it, you will be served with a disclaimer. Always make sure that the tokens you add to your account are legitimate.

4. Once you toggle the accept switch, click **Add Asset**.

    <center><img src="/.gitbook/assets/nft-add-selected-asset.png" width="400"></center>

Your NFT will now appear within your list of assets!

<center><img src="/.gitbook/assets/nft-view-assets-after-adding-asset.png" width="400"></center>

### Viewing Tokens

What can you do with NFTs for now? Here is a quick rundown.

From your account view, click on the arrow to see the visual content of your NFT.

<center><img src="/.gitbook/assets/nft-view-token-select.png" width="400"></center>

This will open a preview of your NFT. From here you can do things like **send the token** to another address, **copy** the token address, or **remove the asset** from your wallet:

<center><img src="/.gitbook/assets/nft-options-for-selected-asset.png" width="400"></center>

<!-- * And other functions are explained below, such as [swapping the token](nfts.md#swapping-tokens), [adding liquidity](nfts.md#pooling-tokens), or bridging the token. (_Token Bridging functionality is still TBD_). -->

### Sending Tokens

You can send your freshly minted token to other addresses! In order to do that, you need your friend’s address and some XOR for the transfer fees. 

1. Click on the send button from the NFT view:

    <center><img src="/.gitbook/assets/nft-send.png" width="400"></center>

    A confirmation will appear requesting an address, and the amount of tokens to send. This will also display the network fee.

2. Make sure everything is correct and click send.

    <center><img src="/.gitbook/assets/nft-send-confirm.png" width="400"></center>

3. Confirm that the recipient address is correct one more time, confirm and sign the transaction.

And that is it! You can double-check your token supply and you will see **the NFT has been sent**.

<center><img src="/.gitbook/assets/nft-send-check-token-supply.png" width="400"></center>

### Pooling Tokens

Although there is no NFT marketplace implementation on Polkaswap (_yet_), it is possible to pool NFT that you own, along with XOR. In order for a NFT to be pooled, it has to be **divisible**, so you can sell or buy only a fraction of it. Pooling NFT works like any other liquidity pool on Polkaswap, and [it also provides the same advantages](provide-liquidity). The steps to pool your NFT are as follows:

<center><img src="/.gitbook/assets/nft-pooling-steps.png" width="400"></center>

1. From the NFT preview within your wallet, click on the 💧 icon.

    <center><img src="/.gitbook/assets/nft-pooling-add-liquidity.png" width="400"></center>

2. Select the amount of XOR to pair with your NFT. You can also add more than one NFT to the pool if you want to add more XOR.

    <center><img src="/.gitbook/assets/nft-pooling-add-liquidity-confirm-selected-amounts.png" width="400"></center>

3. Double-check the details and, if everything is correct, click confirm.
   
   Your Polkadot.js extension will require you to sign a transaction as well. Once it is confirmed, you will be able to see your NFT pool within the [Pool section in Polkaswap](https://polkaswap.io/#/pool/).

    <center><img src="/.gitbook/assets/nft-pooling-created-pool.png" width="400"></center>

Remember that you can pool more than one NFT at a time (_as many of the same token as you may have in your wallet_).

You can also pool your NFT directly from the Pool section in Polkaswap.

1. You can either add liquidity or create a pair. When you create a pair with an NFT, the flow will be the same as pooling an NFT directly. There is a step in common with adding liquidity to an existing pool, which is the initial token selection.

    <center><img src="/.gitbook/assets/nft-pooling-add-or-create-a-pair.png" width="400"></center>

2. Click on Custom to see your NFT and select the one you have decided to pool (_or add liquidity to an existing pool_).

    <center><img src="/.gitbook/assets/nft-pooling-select-custom.png" width="400"></center>

3. Like before, select the token and the amount of liquidity (in this case 1 NFT and its equivalent in XOR), then click on Supply. In this example, we add more liquidity to the WINDTUL and XOR pool:

    <center><img src="/.gitbook/assets/nft-pooling-custom-add-liquidity.png" width="400"></center>
   
   You will receive a confirmation from your wallet and the token will be part of a liquidity pool. 
   
Alternatively, you can also add or remove liquidity from an NFT pair directly from the drop-down menu in the Polkaswap pool view:

<center><img src="/.gitbook/assets/nft-pooling-add-or-remove-liquidity-from-pool-view.png" width="400"></center>

### Swapping Tokens

Finally, you can also swap an NFT for other tokens from the preview screen;

1. Click the swap button:

    <center><img src="/.gitbook/assets/nft-swap.png" width="400"></center>

    You will be presented with the familiar [Polkaswap swapping interface](https://polkaswap.io/#/swap) that will allow you to trade your NFT for other tokens.
    
    ::: info
    Be aware that swapping your NFT like this will come at a significant price impact.
    :::

2. Choose the token to swap your NFT to:

    <center><img src="/.gitbook/assets/nft-swap-select.png" width="400"></center>

3. Similar to the other functions, review the transaction summary and, if you're happy with the outcome, click swap and sign the transaction in Polkadot.js extension.

::: warning

You can also buy NFT using the swap function, however, you need to add the desired NFT to your wallet as a custom asset. Swapping XOR or other tokens for NFT has a significant price impact. Be sure to understand these risks before trading NFT in Polkaswap.

:::
