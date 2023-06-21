# Identity

SORA allows you to store profile information in order to identify and discover people across the network. It's convenient for users to use the identity and registrar features. A tutorial is provided below on how to set up an identity for yourself.

## Register an Identity

Requirements:

- SORA account
- ~0.005 XOR to pay the fee

Follow these steps to set up an identity:

1. Go to the [Polkadot JS Apps pointing at the Sora Mainnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.sora2.soramitsu.co.jp#/accounts) account's tab:

2. Click on the hamburger menu icon on the account you wish to register an identity for. Then select "Set on-chain identity":

  <center><img src="/.gitbook/assets/id-select-menu.png" width="400"></center>

3. Register your Identity and click on "Set Identity" when finished.

   <center><img src="/.gitbook/assets/id-register-id.png" width="400"></center>

   ::: info

   Please note that you will have to pay a small XOR transaction fee for signing.

   :::

Once the transaction is completed your account will show an identity!

## Request Identity Judgment

Once you have finished following all the steps outlined in the [Register an identity](/id.md#register-an-identity) section, you can request an additional verification to obtain a prominent green checkmark next to your account name. This verification serves as an indication that you are a recognized and verified user, allowing others to easily identify and trust your account.

1. Request judgement from a registrar on polkadot.js.

Using the account you wish to verify, go under the Developer tab and follow these steps:

- Click Extrinsics.
- Select `Identity` and `requestJudgement`.
- Under `regIndex`, place `1` (`reg_index` = `0` is no longer active). Registrar `1` has a fee of 1 `XOR`.
- Submit the transaction.

  <center><img src="/.gitbook/assets/requestJudgement.png" width="600"></center>

2. Donate to Community Marketing Funds address.

Donate a minimum of 1 `XOR` per account requesting judgement to the Community Marketing Funds address (`cnSN9X2HNU3uYjRbGvTwpgUdtVDuNk1g29XkcQNoNBQxgt1ii`).
The funds from this community wallet are used for SORA marketing.

3. Contact the registrar directly. You can find their contact info in their profile.

  | Social media/messaging platform | Identifier                 |
  | ------------------------------- | -------------------------- |
  | Telegram                        | https://t.me/SpicyHotWings |
  | Twitter                         | @mishokanaria              |
  | Riot                            | @spicyhotwings:matrix.org  |

4. Verify your identity.

You will need to prove that the information on-chain is legitimate. Each registrar will have their own set of procedures to verify your identity and values, and only once you've satisfied their requirements will the process continue.

::: info

You can freely change any values during the judgement process until you are verified. However, changing the value of even a single field after you've been verified will un-verify your account and you will need to start the judgement process anew.

:::
