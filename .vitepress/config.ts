import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "docs",
  base: "/sora-docs/",
  description: "Guides, how-tos, architecture",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/sora-docs/" },
      { text: "Guide", link: "/sora-docs/introduction" },
    ],
    logo: "https://raw.githubusercontent.com/sora-xor/sora-branding/84f3c35328f5f570a2ed2027ec5533e7cc25d151/SORA/SORA-logo/SVG%20(vector%20files%20for%20web)/04_SORA_main_logo_landscape.svg",
    editLink: {
      pattern: "https://github.com/sora-xor/sora-docs/tree/develop/src/:path",
    },
    siteTitle: false,
    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Introduction", link: "/sora-docs/introduction" },
          {
            text: "Tokenomics",
            link: "/sora-docs/tokenomics",
            collapsed: true,
            items: [
              {
                text: "Token Bonding Curve",
                link: "/sora-docs/tbc",
              },
              {
                text: "XOR",
                link: "/sora-docs/xor",
              },
              {
                text: "VAL",
                link: "/sora-docs/val",
              },
              {
                text: "PSWAP",
                link: "/sora-docs/pswap",
              },
              {
                text: "XST",
                link: "/sora-docs/xst",
              },
              {
                text: "TBCD",
                link: "/sora-docs/tbcd",
              },
            ],
          },
          { text: "SORA economy", link: "/sora-docs/sora-economy" },
          { text: "Governance", link: "/sora-docs/governance" },
          { text: "SORA Academy", link: "/sora-docs/sora-academy" },
          { text: "FAQ", link: "/sora-docs/sora-faq" },
          { text: "Changelog", link: "/sora-docs/changelog" },
        ],
      },
      {
        text: "Ecosystem",
        items: [
          { text: "Overview", link: "/sora-docs/tba" },
          { text: "Integrated plan", link: "/sora-docs/integrated-plan" },
          {
            text: "Polkaswap",
            link: "/sora-docs/polkaswap",
            collapsed: true,
            items: [
              { text: "FAQ", link: "/sora-docs/polkaswap-faq" },
              {
                text: "Memorandum and Terms of Services",
                link: "/sora-docs/polkaswap-terms",
              },
              {
                text: "Privacy policy",
                link: "/sora-docs/polkaswap-privacy",
              },
            ],
          },
          { text: "XST", link: "/sora-docs/tba" },
          { text: "SORAcard", link: "/sora-docs/tba" },
          {
            text: "SORA in your pocket",
            collapsed: true,
            items: [
              { text: "SORA Mobile", link: "/sora-docs/mobile" },
              { text: "Fearless wallet", link: "/sora-docs/fearless" },
            ],
          },
          { text: "Request features", link: "/sora-docs/rfp" },
        ],
      },
      {
        text: "Participating in SORA economy",
        items: [
          { text: "Running a node", link: "/sora-docs/running-a-node" },
          // { text: "Becoming a validator", link: "/tba" },
          { text: "Create an address", link: "/sora-docs/create-an-address" },
          {
            text: "Assets",
            collapsed: true,
            items: [
              { text: "Transfer", link: "/sora-docs/transfer" },
              { text: "Check supply", link: "/sora-docs/check-supply" },
              { text: "Check balance", link: "/sora-docs/check-balance" },
              { text: "Register an asset", link: "/sora-docs/register-an-asset" },
              { text: "On-ramp", link: "/sora-docs/on-ramp" },
            ],
          },
          {
            text: "DEX",
            collapsed: true,
            items: [
              { text: "Swap", link: "/sora-docs/swap" },
              { text: "Provide liquidity", link: "/sora-docs/provide-liquidity" },
              { text: "Advanced trading", link: "/sora-docs/advanced-trading" },
            ],
          },
          {
            text: "Participating in governance",
            collapsed: true,
            items: [
              {
                text: "Fast track public voting",
                link: "/sora-docs/fast-track-public-voting",
              },
            ],
          },
          {
            text: "Interoperability",
            collapsed: true,
            items: [
              {
                text: "EVM",
                items: [
                  {
                    text: "HASHI",
                    items: [
                      {
                        text: "Adding a token",
                        link: "/sora-docs/adding-a-token-to-a-hashi-bridge",
                      },
                      {
                        text: "Become a relayer",
                      },
                    ],
                  },
                  { text: "Trustless" },
                ],
              },
              { text: "Substrate", items: [{ text: "Become a relayer" }] },
            ],
          },
          { text: "Referral system", link: "/referral" },
          { text: "Explore blocks", link: "/explore-blocks" },
          { text: "NFT", link: "/sora-docs/nft" },
          { text: "Identity", link: "/sora-docs/id" },
          { text: "Rewards", link: "/sora-docs/rewards" },
          { text: "Nodes connection", link: "/sora-docs/nodes-connection" },
        ],
      },
      {
        text: "BUIDL",
        items: [
          { text: "Introduction", link: "/sora-docs/buidl" },
          {
            text: "Decentralised development process",
            link: "/sora-docs/decentralised-development-process",
          },
          { text: "Pallets", link: "/sora-docs/pallets" },
          { text: "Technical Stack", link: "/sora-docs/technical-stack" },
          { text: "Consensus", link: "/sora-docs/consensus" },
          { text: "Accounts", link: "/sora-docs/accounts" },
          { text: "Useful links", link: "/sora-docs/useful-links" },
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
  cleanUrls: true
});
