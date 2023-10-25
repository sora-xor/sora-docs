---
title: "SORA Account Security: How to Manage Passphrases Securely | SORA Docs"
head:
  - - meta
    - name: viewport
      content: "width=device-width, initial-scale=1.0"
  - - meta
    - name: description
      content: "Explore the intricacies of passphrase formats like mnemonics, JSON, and raw seeds. Dive into best practices for safeguarding passwords, utilizing physical and digital storage solutions. Prioritize your digital security today."
  - - meta
    - name: keywords
      content: "passphrases, passwords, mnemonic, JSON, raw seed, best practices, digital security, two-factor authentication, physical storage, digital storage, password managers, social engineering, user interfaces, security protocols"
  - - meta
    - name: author
      content: "SORA network"
  - - meta
    - property: og:title
      content: "SORA Account Security: How to Manage Passphrases Securely"
  - - meta
    - property: og:description
      content: "Explore the intricacies of passphrase formats like mnemonics, JSON, and raw seeds. Dive into best practices for safeguarding passwords, utilizing physical and digital storage solutions. Prioritize your digital security today."
  - - meta
    - property: og:url
      content: "/sora-guide"
  - - meta
    - property: og:type
      content: "article"
  - - meta
    - property: og:site_name
      content: "SORA Tutorial: Account Security: How to Manage Passphrases Securely"
  - - meta
    - property: og:locale
      content: "en_US"
  - - meta
    - name: twitter:card
      content: "summary"
  - - meta
    - name: twitter:title
      content: "SORA Account Security: How to Manage Passphrases Securely"
  - - meta
    - name: twitter:description
      content: "Explore the intricacies of passphrase formats like mnemonics, JSON, and raw seeds. Dive into best practices for safeguarding passwords, utilizing physical and digital storage solutions. Prioritize your digital security today."
  - - meta
    - name: twitter:site
      content: "@sora_xor"
  - - meta
    - name: twitter:creator
      content: "@sora_xor"
---

# SORA Account Security: How to Manage Passphrases Securely

Explore the intricacies of passphrase formats like mnemonics, JSON, and raw seeds. Dive into best practices for safeguarding passwords, utilizing physical and digital storage solutions. Prioritize your digital security today.

## TL;DR

- Understand the differences between mnemonic, JSON, and raw seed storage formats.
- Employ best practices such as using unique passwords, 2FA, and opting for physical and digital encrypted storage methods.
- Be sure to regularly review and update your security methods to stay ahead of evolving cyber threats.

In today's digital age, securing one's digital assets has become paramount. The linchpin of this security often revolves around the management of passphrases, passwords, and other digital keys. Understanding the different storage formats and following best practices can distinguish between secure accounts and potential breaches.

![](.gitbook/assets/sora-account-security.png)

## Mnemonic, JSON, and Raw Seed: An Overview

- **Mnemonic Passphrases:** A mnemonic phrase is a collection of words that can be used to derive a cryptographic key. Such phrases are typically easier to remember than raw cryptographic keys and are often employed by crypto wallets to allow users to recover their accounts.

- **JSON Keystores:** A JSON keystore contains an encrypted version of a user's private key. It's accompanied by other data and is formatted as a JSON object. This keystore requires a password to decrypt and access the private key.

- **Raw Seed:** The raw seed is a direct representation of a cryptographic key. It is typically a string of letters and numbers. It's the most basic and direct form of a key but also the least human-friendly.

## Best Practices to Store Account Passwords and Information

- **Use Strong, Unique Passwords:** Avoid using the same password for multiple accounts. Make sure they're lengthy, use a mix of characters, numbers, and symbols, and avoid obvious phrases.

- **Regularly Update Passwords:** Changing your passwords periodically can help protect against undetected breaches.

- **Two-Factor Authentication (2FA):** This adds an extra layer of security by requiring a second form of verification and a password.

### Physical Storage Options

- **Paper Storage:** Write down your mnemonic or seed phrases on paper and store them in a safe, fireproof, and waterproof location. Always keep multiple copies in different locations.

- **Steel Wallets:** These tools allow you to engrave or stamp your mnemonic phrase onto a piece of steel, making it resistant to fire, water, and corrosion.

- **Bank Safety Deposit Box:** Store your written or engraved passphrases in a safety deposit box for protection.

### Digital Encrypted Storage Solutions

- **Hardware Wallets:** These are physical devices designed to store cryptocurrency keys securely. They keep keys isolated from internet-connected devices, immune to online hacks.

- **Encrypted USB Drives:** Store your JSON keystore files or raw seeds on an encrypted USB drive. This adds a layer of protection as the data remains encrypted and inaccessible without the decryption key.

- **Secure Cloud Storage:** While it's not advisable to store sensitive data on cloud storage directly, you can use cloud storage for encrypted files, especially if you're using strong encryption methods and keys are kept offline.

- **Local Encrypted Storage:** Use local disk encryption solutions like BitLocker (Windows) or FileVault (Mac) to encrypt your hard drive.

### Password managers

Another popular way to manage passwords is to use password management software. Password managers are invaluable tools in today's digital landscape, streamlining the complex task of handling various passwords. With their help, users only need to remember a single master password, granting them access to a host of unique, secure, and lengthy passwords for different accounts. But despite all the pros of such software, you should always follow the guidelines to ensure the security of all stored passes.

Here are key security recommendations:

- **Database Security:** Prioritize the security of the password manager's database to thwart unauthorized access.
- **Regular Backups:** Schedule consistent backups of the password manager database, ensuring protection against unforeseen data loss or breaches.
- **Master Password Strength:** Encrypt the database with a robust and unique master password, making unauthorized decryption challenging.
- **Safe Downloads:** Always download password keeper software from recognized, legitimate sources to avoid inadvertently acquiring malicious software.
- **Opt for Reputed Software:** Choose password managers that have garnered solid reputations and positive reviews, ensuring both their reliability and their commitment to user security.

### Social Engineering Awareness

Most likely, brute force will not be how your passphrases are compromised. Scams such as phishing (using fake or too-good-to-be-true offers) are the most effective to separate people from their assets. Scams such as popular NFT mints at a bargain or impersonating online service providers can lead to painful losses.
It is important to ensure that the links you click in emails or tweets are from verified accounts. Don’t be blinded by ambition.

Likewise, other people may also reach out to you, impersonating wallet providers or token teams requesting your mnemonic. No project or infrastructure will ever need your private key; if anyone asks for it, consider this a red flag.

### Linking to Your Stored Data

When creating user interfaces (UIs) or tutorial articles, always link back to the secure storage solution being used. This ensures that users have a direct path to their stored data, reducing the risk of misplacement or accidental deletion.

In the UI itself, a button or link labelled "Access Stored Passphrases" can be an effective way to guide users. In tutorial articles, embed hyperlinks within the text or clear call-outs to direct readers to the right resources.

## Conclusion

Managing and storing passphrases securely is the cornerstone of digital security. By understanding the different types of storage formats and following best practices, you can protect your digital assets and enjoy peace of mind. Remember, as technology evolves, it's essential to stay updated with the latest security protocols and methodologies.

::: tip
Always consult with cybersecurity experts when considering a solution for storing sensitive information.
:::

---

## Learn More

- [Create an Address](./create-an-address)
- [Connect Your Wallet to Polkaswap](/polkaswap-connect-wallet.html.md)
