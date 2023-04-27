# Adding a Token to the HASHI Bridge #
### *Here are the instructions to add your tokens to the Hashi bridge allowing them to be transferred between the SORA and Ethereum Networks.*

Adding a token to the SORA HASHI bridge involves several steps;
1. Registering a token within the SORA blockchain
2. Registering a SORA asset on the bridge
3. Registration of an ERC-20 token in Ethereum (and its mapping with a SORA asset)
4. Adding a token to a whitelist

## Registering a token within the SORA blockchain ##

Please refer to 

## Registering a SORA asset on the bridge ##

Step 1. Get the AssetId of the asset you want to add (e.g. `0x000268050a977248b641719592e7a0247ce4741839c83ec6aac6a865d3d0ba2c`).

Step 2. Go to polkadot{.js} and call the `ethBridge.addAsset` extrinsic via a fast track motion (see the steps in ) with the asset id from the first step and network id `0` (for Ethereum).

 ![](</.gitbook/assets/56fb221f-642d-439f-beeb-af1182e62643 (1) (3).png>)
 
Step 3. Once the proposal goes through, acquire the bridge’s peers' signatures via the `ethBridge.getAccountRequests` RPC with your account as the first argument and status `ApprovalsReady`.

 ![](</.gitbook/assets/e76084e0-f516-4dad-acae-58b3e66753b3 (1).png>)

Step 4. The RPC will return a bunch of hashes. These are off-chain request hashes, the last one should be `OutgoingAddAsset` request. To find out if the asset was added successfully, use the `getRequests` RPC.

Step 5. After your hash is found, use `getApprovedRequests` RPC to get the approvals.

Step 6. Call `addEthSidechainToken` in the bridge's smart contract

### Using Remix ###

Step 1. Copy the contract ABI from the Code section on etherscan

![](</.gitbook/assets/telegram-cloud-document-2-5418105586115946206.jpg>)

Step 2. Create a file with ABI on https://remix.ethereum.org

![](</.gitbook/assets/telegram-cloud-document-2-5420357385929631693.jpg>)

Step 3. Choose Metamask as a provider

![](</.gitbook/assets/telegram-cloud-document-2-5418105586115946208.jpg>)

Step 4. Copy the contract address in the "At Address" field and click on the At Address button

![](</.gitbook/assets/telegram-cloud-document-2-5420357385929631694.jpg>)

Step 5. Fill in the transaction data

![](</.gitbook/assets/telegram-cloud-document-2-5418105586115946210.jpg>)

Step 6. Confirm

![](</.gitbook/assets/telegram-cloud-document-2-5418105586115946211.jpg>)

### Using Etherscan ###

Access https://etherscan.io/address/0x1485e9852ac841b52ed44d573036429504f4f602#writeContract and fill in the fields with data from the previous step. Note, that v parameters in signatures should be increased by `27`. That is, if you see `v: 0` and `v: 1`, these parameters should be passed as `[27, 28]`.

![](</.gitbook/assets/1f7e0a4e-14b5-4e34-94ca-a3def1e2051c.png>)

## Registration of an ERC-20 token in Ethereum (and its mapping with a SORA asset) ##

1. Get all the necessary information about the token:
* Address (e.g. `0xdac17f958d2ee523a2206206994597c13d831ec7`)
* Symbol (e.g. `USDT`)
* Name (e.g. Tether `USD`)
* Decimals (e.g. `6`)
* Network id (e.g. `0` for Ethereum)

2. Create a proposal (see the steps in ) to call the `ethBridge.addSidechainToken` extrinsic with arguments from the first step.

![](</.gitbook/assets/bca42141-2961-43f6-b049-48a354443484.png>)

3. After the proposal is approved, acquire the bridge’s peers' signatures via the `ethBridge.getAccountRequests` RPC of the `cnTQ1kbv7PBNNQrEb1tZpmK7hZUUWqKBpWxmnxL4nczYfYfrh` account.

![](</.gitbook/assets/e76084e0-f516-4dad-acae-58b3e66753b3 (1).png>)

4. The RPC will return a bunch of hashes. These are off-chain request hashes, one of them should be `OutgoingAddToken` request. To find out if the asset was added successfully, use the `getRequests` RPC.

5. After your hash is found, use the `getApprovedRequests` RPC to get the approvals.

6. Go to https://etherscan.io/address/0x313416870a4da6f12505a550b67bb73c8e21d5d3#writeContract and call `addEthNativeToken` with data from the previous step. Note, that v parameters in signatures should be increased by `27`. That is if you see `v: 0` and `v: 1`, these parameters should be passed as `[27, 28]`.

![](</.gitbook/assets/1c74b050-8f76-4ec7-873e-a20ed18c9f4b.png>)

## Adding a token to a whitelist ##

 If you want to be able to bridge your token in Polkaswap, and in order to move your token to Ethereum, it needs to be whitelisted. You can whitelist your token by following the instructions on [GitHub](https://github.com/sora-xor/polkaswap-token-whitelist-config).

First, the pull request has to be approved, then the token will be whitelisted in future updates on Polkaswap.

