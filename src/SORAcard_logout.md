# User Story

As a <ins>SORA Card user</ins> I want to <ins>log out of my current SORA Card account</ins> so that <ins>I can remove data from my fiat account on the crypto wallet if I fancy</ins>.

# Preconditions

- User has successfully completed the authorisation (does not matter what KYC status is one currently having)

# Flow

1. User clicks on the Logout button
2. `user_id` of the user is deleted, the session with SORAcard is closed

# Postcondition

The user has been logged out. One can go through authorization again (either for another user, or for the one for whom one just logged out).
