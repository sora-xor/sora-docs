---
title: "Fast Track Public Voting | SORA Docs"
head:
  - - meta
    - name: description
      content: "Learn how to fast-track the public voting process on the SORA network. Discover how the community participates in voting for project proposals, and how fast-track voting enables rapid decision-making and funding allocation for valuable projects within the SORA ecosystem."
  - - meta
    - name: keywords
      content: "Fast Track Public Voting, SORA network, community voting, project proposals, decision-making, funding allocation, SORA ecosystem"
---

# Fast Track Public Voting

To specify public voting duration, you’ll need to communicate with the SORA Council and SORA Technical Committee.

## Via PolkadotJS UI

**Step 1**: Create the Preimage

Create the preimage for the root call you’d like to perform:

1. Go to the “Governance > Democracy“ tab.
2. Press “Submit preimage“.
3. Choose the root call you’d like to perform:

<figure><img src="/.gitbook/assets/public-voting-submit-preimage.png" alt=""><figcaption></figcaption></figure>

4. Copy the preimage hash.
5. Submit the preimage.

**Step 2**: Create a Council Motion

To create a council motion:

1. Go to the “Governance > Council > Motions“ tab.
2. Press “Propose external“.
3. Insert the preimage hash from step 1.
4. Submit.

You should see the council motion in the “Governance > Council“ tab:

<figure><img src="/.gitbook/assets/public-voting-view-council-motion.png" alt=""><figcaption></figcaption></figure>

**Step 3**: Ask the SORA Council to Vote

Communicate with the SORA council to vote for the Council motion.

**Step 4**: Close Council Motion

1. After the council has voted for the council motion, wait for the external proposal to reach the end of the external proposal queue.
2. Press “Close“ at the council motion and perform the `council.close` call:

<figure><img src="/.gitbook/assets/public-voting-close-council-motion.png" alt=""><figcaption></figcaption></figure>

You should see the external proposal in the “Governance“ tab:

<figure><img src="/.gitbook/assets/public-voting-view-external-proposal.png" alt=""><figcaption></figcaption></figure>

**Step 5**: Create a Technical Committee Motion

To create a technical committee motion you need to use technical committee member’s account:

1. Go to the “Governance“ tab.
2. Press “Fast track“ on the external proposal.
3. Specify the public voting duration and delay before the referendum is enacted.
4. Submit.

You should see the technical committee motion in the “Governance / Tech. comm. / Proposals“ tab:

<figure><img src="/.gitbook/assets/public-voting-create-technical-committee-motion.png" alt=""><figcaption></figcaption></figure>

**Step 6**: Ask the SORA Technical Committee to Vote

Communicate with the SORA Technical committee to vote for the motion in the “Governance / Tech. comm. / Proposals“ tab.

**Step 7**: Close Technical Committee Motion

When the Technical Committee has voted for the motion and you’re ready for a public referendum, press “Close“ on the Technical committee motion and perform the `technicalCommittee.close` call:

<figure><img src="/.gitbook/assets/public-voting-close-tehcnical-committee-motion.png" alt=""><figcaption></figcaption></figure>

In the “Governance“ tab you should see the public vote, such as:

<figure><img src="/.gitbook/assets/public-voting-view-public-vote.png" alt=""><figcaption></figcaption></figure>

To have time estimations for the public vote use the “Network / Event Calendar“ tab.
