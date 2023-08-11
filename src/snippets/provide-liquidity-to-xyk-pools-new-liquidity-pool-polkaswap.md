To create a pool:

1. Open Polkaswap, then open the Pool section.

   ![](/.gitbook/assets/provide-liquidity-open-pool-tab.png)

2. Click the **Create a pair** button.
3. Select the tokens that should compose the trading pair. Keep in mind that all trading pairs in Polkaswap must contain XOR and another token. That's why the XOR token is preselected and can't be changed.

   ![](/.gitbook/assets/provide-liquidity-create-a-pair.png)

4. Select the second token for the trading pair.

   ![](/.gitbook/assets/provide-liquidity-token-pair-already-exists.png)

   Oooops! The trading pair for XOR-VAL is already created. It means that someone has already created a pool with this trading pair and provided the liquidity.

   ![](/.gitbook/assets/provide-liquidity-create-new-pair.png)

   ::: info
   Pay attention when you're the first liquidity provider. The ratio of tokens will set the price of this pool.
   :::

5. Enter the deposit amounts for each token:

   ![](/.gitbook/assets/provide-liquidity-enter-amounts.png)

   Let's describe the parameters:

   - **XOR per SAT** is the price of XOR in SAT tokens if a user will trade using this pool
   - **SAT per XOR** is the price of SAT in XOR tokens if a user will trade using this pool
   - **Network fee** is the fee for processing the transaction
   - **Share of Pool** is the percentage of your tokens in the pool

6. If everything is ok, confirm and sign the transaction.

   ![](/.gitbook/assets/provide-liquidity-confirm-transaction.png)

Now you can see your pool share on the Pool page:

![](/.gitbook/assets/provide-liquidity-view-created-pool.png)
