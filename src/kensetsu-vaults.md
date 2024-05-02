# Kensetsu Platform

## Theory

### Overall description of the platform

Kensetsu is a lending platform with an overcollateralised stablecoin pegged to the USD. It is a MakerDAO analogue in the SORA ecosystem.
The native token for the Kensetsu platform is the KEN token, which is used for farming and protocol rewards.

### Key Features - KUSD borrowing (available collateral, parameters). Fee Calculation Process

A Vault is the primary entity which operates on the Kensetsu platform. The Vault has the following parameters;

- **Collateral token** — A token that operates as collateral in borrowing operations. The Kensetsu platform operates with six key tokens: XOR, VAL, TBCD, PSWAP, ETH, and DAI.
- **Debt in borrowed token** - This shows the amount of debt that the user borrowed. The Kensetsu platform allows borrowing of KUSD tokens pegged to USD.
- **Collateral amount** - Displays how much a user has deposited in the collateral token to secure the loan.
- **Available to borrow** - Indicates how much a user can borrow until their vault becomes liquidated.
- **LTV (loan-to-value)** - The debt ratio to the collateral value in your vault, calculated as a percentage.
- **Stability Fee** - An annual fee on the amount drawn from your vault, calculated as a percentage.
- **Borrow tax** - a tax applied to borrowing amount, it is set as 1%.
- **Liquidation penalty** - a fee applied if the value of your collateral falls below a certain threshold, prompting the sale of assets to cover debt. This penalty increases debt.

### Key actions available for Users:

- **Create a vault** — This operation allows users to create a vault in the Kensetsu platform. Users must deposit some collateral tokens to create a vault. Users can not create empty vaults with collateral tokens, but they can create a vault without borrowing tokens.

The Collateral tokens available in Kensetsu are:

- XOR - `0x0200000000000000000000000000000000000000000000000000000000000000`
- VAL - `0x0200040000000000000000000000000000000000000000000000000000000000`
- PSWAP - `0x0200050000000000000000000000000000000000000000000000000000000000`
- TBCD - `0x02000a0000000000000000000000000000000000000000000000000000000000`
- ETH - `0x0200070000000000000000000000000000000000000000000000000000000000`
- DAI - `0x0200060000000000000000000000000000000000000000000000000000000000`

- **Deposit collateral** — Users can add collateral to make LTV ratio safer and borrow more.

* **Borrowing** - Users borrow KUSD tokens, which are pegged to value of USD. The amount of tokens available to borrow is calculated based on the risk parameters of the Kensetsu platform.
  Users can borrow tokens in existing vaults if the tokens available to borrow are more than zero.

* **RepayDebt** - Users can repay their borrowed token debt, making the vault healthier and preventing its liquidation. To repay their debt, users must have enough of the borrowed token to repay all fees.

* **Liquidation** - Liquidation is the process where the vault sells the collateral token. Kensetsu will liquidate some of the collateral tokens until the LTV (loan-to-value) metric becomes less than the liquidation threshold.

::: info
How to avoid a vault’s liquidation?

- **Borrowing tokens with less than 50 % LTV** — It will take you enough time to pay the stability fee and protect yourself in case the collateral token fluctuates.
- **Add collateral** - Kensetsu allows the deposit of additional collateral tokens, which leads to a decreasing LTV.
  :::

### How is the stability fee utilised (buyback, burn, farming)

The stability fee that will be charged from these vaults will be used in a stability fund with several purposes:

- **Stabilising KUSD** - Maintains the peg stability by covering bad debt.
- **Incentivization program** - buyback of KEN token and sending KEN token as a reward to XOR-KUSD LP token holders in the Demeter farming platform.

## Practice

### How to Open a Kensetsu Vault

1. Navigate to Polkaswap.io/#/vaults

![](/.gitbook/assets/ken-vaults-intro.png)

::: info
Kensetsu has not released on mainnet yet, you can test the features on the [Polkaswap Testnet](https://test.polkaswap.io/#/vaults/).
:::

![](/.gitbook/assets/ken-vaults-borrow.png)

The vault creation interface has several input fields:

- **Deposit collateral amount** - this field corresponds to the collateral token.
- **Borrow debt** - this field corresponds to the amount of KUSD to be borrowed.
- **Transaction details** - Here you will see a summary of the information about the created vault and transaction details.

2. Select the source asset (the asset you'd like to use as collateral). Click on the asset drop-down menu to select them.

![](/.gitbook/assets/ken-vaults-assets.png)

The assets from your wallet will be listed by default. It currently supports the 6 collateral tokens. You can find and add any asset by entering its ID or name in the search field. Whitelisted assets will be listed.

![](/.gitbook/assets/ken-vaults-open.png)

3. To open a borrow position, enter the asset you would like to set as collateral.

These are the parameters visible on the Open Position interface:

- **Slippage tolerance**- The amounts that you see on the screen are calculated for the moment when you're borrowing. The exchange rate might change before you sign and send the transaction. Your transaction will be reverted if the price changes unfavourably by more than this percentage.
- **Min. Deposit Collateral**- These are the minimum assets required to create a vault. This initial deposit collateral secures the funds you wish to borrow.
- **Max. Available to Borrow**- This is the maximum amount you can draw from your vault, determined by the value of your collateral. This limit adjusts as the value of the collateral changes.
- **Borrow Tax**- This is a 1% tax applied to the borrowed amount.
- **Loan to Value** This is the ratio of the amount drawn to the value of your collateral in your vault, expressed as a percentage. A higher LTV increases potential returns and risk, including the chance of liquidation.
- **Stability Fee**- This is an annual fee charged on the amount drawn from your vault, calculated as a percentage.
- **Network Fee**- This is the network transaction fee (gas).

4. If you're ready to borrow, click **Open Vault**. Then, check the details carefully, and if everything is okay, confirm and sign the transaction.

Congratulations, you have successfully set up your Kensetsu vault.

:::info
The images provided in this tutorial correspond to the Kensetsu Testnet and may be subject to change once released on mainnet.
:::

## Learn More

- [KEN Tokenomics](/ken.md)
- [Requesting Features on SORA](/rfp.md)
