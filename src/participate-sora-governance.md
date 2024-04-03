---
title: Vote in SORA Governance | SORA Docs
head:
  - - meta
    - name: description
      content: Explore SORA governance and learn to navigate decentralized decision-making and enhance the SORA ecosystem. Ideal for all skill levels.
  - - meta
    - name: keywords
      content: SORA governance, Decentralized decision-making, SORA ecosystem, Blockchain governance, Participating in SORA, Decentralized governance guide
---

# Vote in SORA Governance

The [SORA Parliament](sora-governance.md) has not been enacted yet. Governance is undertaken using the [Substrate Gov1 pallet](https://wiki.polkadot.network/docs/learn/learn-governance), the same as the one available in Polkadot.js (not OpenGov).

**You are required to hold XOR to participate in governance.** You can use the XOR you have staked on Nominators to add weight to your vote (making it worth more). You can also add conviction to your vote, multiplying its value but locking it for longer periods of time.

Voting is really important for the SORA ecosystem; as a community-led project, the outcome of your vote decides what productive purposes are funded, implements software updates on the network, the parachains and on [Polkaswap](https://polkaswap.io/), as well as adding XST assets to the network, adding order book pairs, or whitelisting assets on the Hashi bridge. As you can see, the impact of your vote makes a big difference. Although it seems complicated, voting on the SORA network is straightforward. Once you know how to vote here, you can also participate in governance on other Substrate-based networks using Gov1.

As of the time of writing, you can cast votes with 0.1X conviction, which does not lock your vote allocation for any time. However, there will be a SORA update where these votes are no longer possible (conviction removed). Therefore, all governance participation will lock tokens. **You can use already locked tokens (nominating, other governance referenda votes, etc.) to vote on other referenda. This will increase the proportion of time your tokens are locked.**

## How to vote in SORA Governance

1. To know when a governance referenda is up on SORA for public voting, you can keep an eye out on the [SORA governance interface](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsora.api.onfinality.io%2Fpublic-ws#/democracy). Additionally, you can also follow the [SORA Governance Notifications channel on Telegram](https://t.me/sora_governance_updates).

![](/.gitbook/assets/participate-sora-governance-overview.png)

2. With XOR in your account, select the democracy referenda you are interested in. You can click the downward arrow to expand the motion details. In some cases, you will find an address linking it to the [SORA Accounting project on Github](https://github.com/orgs/sora-xor/projects/24/views/1) that has an overview and description of the referenda, if it pertains to credit creation on SORA.

![](/.gitbook/assets/participate-sora-governance-expand-referenda.png)

3. To vote on the referenda, click on the vote button. A pop-up will appear with your account information. If you click on the account name, you can cycle through your accounts on the wallet. Pick the one you will use to vote.

![](/.gitbook/assets/participate-sora-governance-account-selection.png)

4. After selecting the account, you will see the voting balance which you can use to allocate the weight of your vote. Ensure you have enough balance left unlocked to pay the transaction fees. The vote value field will be automatically populated if you already have XOR balance locked.

![](/.gitbook/assets/participate-sora-governance-vote-value.png)

::: info
You can use funds that have been locked by nominating a validator or are locked in another governance proposal to vote. Once the funds are locked, you must wait a set amount of time before unlocking them in the Polkadot.js interface.
:::

5- Choose a conviction for your vote; this can go from a 1x voting balance locked for 30 days to a 6x voting balance for 960 days. Finally, vote Aye or Nay on the proposal.

![](/.gitbook/assets/participate-sora-governance-vote-conviction.png)

::: info
If the proposal passes and you vote yes, your funds will lock for the allocated amount of time based on its conviction; likewise, if the proposal does not pass and you vote no, your funds will also remain locked. Vice versa, if you voted no and it passes, your funds will not be locked, idem if you voted aye and the proposal does not pass.
:::

![](/.gitbook/assets/participate-sora-governance-vote-confirmation.png)

6- Your wallet/signer will pop up requesting you to confirm your vote, approve this transaction and once it is confirmed, **congratulations, you have just voted on SORA!**

### How to vote in the SORA Kusama and SORA Polkadot Parachains

In practice, voting for governance referenda on SORA’s parachains is the same. The only difference is that you need to bridge XOR over to the parachains using the HASHI bridge set to Polkadot or Kusama network and switch networks within the Polkadot.js interface.

From the top right corner of the interface, click on the downward arrow > Click on Polkadot/Kusama & Parachains > Scroll down to SORA > Click on Switch.

#### SORA Polkadot

![](/.gitbook/assets/participate-sora-governance-polkadot-parachain.png)

#### SORA Kusama

![](/.gitbook/assets/participate-sora-governance-kusama-parachain.png)

## Learn More

- [Governance on SORA](/sora-governance.md)
- [Interoperability (HASHI)](/interoperability.md)
