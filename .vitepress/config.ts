import { defineConfig } from "vitepress";
import markdownItKatex from "markdown-it-katex";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "docs",
  description: "Guides, how-tos, architecture",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Getting Started", link: "introduction" },
      { text: "Ecosystem", link: "ecosystem" },
      { text: "SORA Economy", link: "participate" },
      { text: "Build", link: "build" },
    ],
    logo: "https://raw.githubusercontent.com/sora-xor/sora-branding/84f3c35328f5f570a2ed2027ec5533e7cc25d151/SORA/SORA-logo/SVG%20(vector%20files%20for%20web)/04_SORA_main_logo_landscape.svg",
    editLink: {
      pattern: "https://github.com/sora-xor/sora-docs/tree/develop/src/:path",
    },
    siteTitle: false,
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "introduction" },
          {
            text: "Tokenomics",
            link: "tokenomics",
            collapsed: true,
            items: [
              {
                text: "Token Bonding Curve",
                link: "tbc",
              },
              {
                text: "XOR",
                link: "xor",
              },
              {
                text: "VAL",
                link: "val",
              },
              {
                text: "PSWAP",
                link: "pswap",
              },
              {
                text: "XST",
                link: "xst",
              },
              {
                text: "TBCD",
                link: "tbcd",
              },
            ],
          },
          { text: "SORA Economy", link: "sora-economy" },
          { text: "SORA Governance", link: "sora-governance" },
          { text: "SORA Academy", link: "sora-academy" },
          { text: "FAQ", link: "sora-faq" },
          { text: "Changelog", link: "changelog" },
        ],
      },
      {
        text: "Ecosystem",
        items: [
          { text: "Overview", link: "ecosystem" },
          { text: "Integrated Plan", link: "integrated-plan" },
          {
            text: "Polkaswap",
            link: "polkaswap",
            collapsed: true,
            items: [
              { text: "FAQ", link: "polkaswap-faq" },
              {
                text: "Memorandum and Terms of Services",
                link: "polkaswap-terms",
              },
              {
                text: "Privacy Policy",
                link: "polkaswap-privacy",
              },
            ],
          },
          { text: "SORAcard", link: "sora-card" },
          {
            text: "SORA in Your Pocket",
            collapsed: true,
            items: [
              { text: "SORA Mobile", link: "mobile" },
              { text: "Fearless Wallet", link: "fearless" },
            ],
          },
          { text: "Request Features", link: "rfp" },
        ],
      },
      {
        text: "Participate in the SORA Economy",
        items: [
          { text: "Overview", link: "participate" },
          { text: "Running a Node", link: "running-a-node" },
          // { text: "Becoming a validator", link: "/tba" },
          { text: "Create an Address", link: "create-an-address" },
          {
            text: "Assets",
            link: "assets",
            collapsed: true,
            items: [
              { text: "Transfer", link: "transfer" },
              { text: "Check Supply", link: "check-supply" },
              { text: "Check Balance", link: "check-balance" },
              { text: "Register an Asset", link: "register-an-asset" },
              { text: "On-ramp", link: "on-ramp" },
            ],
          },
          {
            text: "Polkaswap",
            collapsed: true,
            items: [
              { text: "Swap", link: "swap" },
              { text: "Provide Liquidity", link: "/provide-liquidity" },
              { text: "Advanced Trading", link: "advanced-trading" },
              { text: "Connect Wallet", link: "polkaswap-connect-wallet" },
              { text: "Send & Receive", link: "polkaswap-send-and-receive" },
              { text: "Staking", link: "polkaswap-staking" },
              { text: "Explore", link: "polkaswap-explore" },
              { text: "Statistics", link: "polkaswap-statistics" },
              { text: "Other Features", link: "polkaswap-other-features" },
            ],
          },
          {
            text: "Participating in Governance",
            collapsed: true,
            items: [
              {
                text: "Fast Track Public Voting",
                link: "fast-track-public-voting",
              },
            ],
          },
          {
            text: "Interoperability",
            link: "interoperability",
            collapsed: true,
            items: [
              {
                text: "EVM",
                link: "evm",
                items: [
                  {
                    text: "HASHI",
                    items: [
                      {
                        text: "Adding a Token",
                        link: "adding-tokens-to-hashi-bridge",
                      },
                      {
                        text: "Become a Relayer",
                      },
                    ],
                  },
                  { text: "Trustless" },
                ],
              },
              { text: "Substrate", items: [{ text: "Become a Relayer" }] },
            ],
          },
          { text: "Referral System", link: "/referral" },
          { text: "Explore Blocks", link: "/explore-blocks" },
          { text: "NFT", link: "nft" },
          { text: "Identity", link: "id" },
          { text: "Rewards", link: "rewards" },
          { text: "Nodes Connection", link: "nodes-connection" },
          {
            text: "Staking in Fearless Wallet",
            link: "stake-in-fearless-wallet",
          },
          { text: "Nominating Validators", link: "nominating-validators" },
        ],
      },
      {
        text: "Build",
        items: [
          { text: "Introduction", link: "build" },
          {
            text: "SORA Builders Programme",
            link: "sora-builders",
          },
          {
            text: "Social Insurance for Systematically Important Infrastructure",
            link: "social-insurance",
          },
          { text: "Pallets", link: "pallets" },
          { text: "Technical Stack", link: "technical-stack" },
          { text: "Consensus", link: "consensus" },
          { text: "Accounts", link: "accounts" },
        ],
      },
      {
        text: "Learn More",
        items: [
          {
            text: "Useful Links",
            link: "useful-links",
          },
          {
            text: "Community Blogs",
            link: "blogs",
          },
          {
            text: "Contribution Guidelines",
            link: "contribute",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sora-xor/sora-docs" },
    ],
    footer: {
      message: "sora.org",
      // copyright: "",
    },
    search: {
      provider: "local",
    },
    outline: "deep",
    outlineTitle: "Page Contents",
  },
  srcDir: "./src",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(markdownItKatex);
    },
  },
});
