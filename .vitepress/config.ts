import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs",
  description: "Guides, how-tos, architecture",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/introduction" },
    ],
    logo: "https://raw.githubusercontent.com/sora-xor/sora-branding/84f3c35328f5f570a2ed2027ec5533e7cc25d151/SORA/SORA-logo/SVG%20(vector%20files%20for%20web)/04_SORA_main_logo_landscape.svg",
    editLink: {
      pattern: "https://github.com/sora-xor/sora-docs/tree/develop/src/:path",
    },
    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Introduction", link: "/introduction" },
          {
            text: "Tokenomics",
            link: "/tokenomics",
            collapsed: true,
            items: [
              {
                text: "Token Bonding Curve",
                link: "/tbc",
              },
              {
                text: "XOR",
                link: "/xor",
              },
              {
                text: "VAL",
                link: "/val",
              },
              {
                text: "PSWAP",
                link: "/pswap",
              },
              {
                text: "XST",
                link: "/xst",
              },
              {
                text: "TBCD",
                link: "/tbcd",
              },
            ],
          },
          { text: "SORA economy", link: "/sora-economy" },
          { text: "Governance", link: "/governance" },
          { text: "SORA Academy", link: "/sora-academy" },
          { text: "FAQ", link: "/sora-faq" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
      {
        text: "Ecosystem",
        items: [
          { text: "Overview", link: "/tba" },
          { text: "Integrated plan", link: "/integrated-plan" },
          {
            text: "Polkaswap",
            link: "/polkaswap",
            collapsed: true,
            items: [
              { text: "FAQ", link: "/polkaswap-faq" },
              {
                text: "Memorandum and Terms of Services",
                link: "/polkaswap-terms",
              },
              {
                text: "Privacy policy",
                link: "/polkaswap-privacy",
              },
            ],
          },
          { text: "XST", link: "/tba" },
          { text: "SORAcard", link: "/tba" },
          {
            text: "SORA in your pocket",
            collapsed: true,
            items: [
              { text: "SORA Mobile", link: "/mobile" },
              { text: "Fearless wallet", link: "/fearless" },
            ],
          },
          { text: "Request features", link: "/rfp" },
        ],
      },
      {
        text: "Participating in SORA economy",
        items: [
          { text: "Running a node", link: "/running-a-node" },
          // { text: "Becoming a validator", link: "/tba" },
          { text: "Create an address", link: "/create-an-address" },
          {
            text: "Assets",
            collapsed: true,
            items: [
              { text: "Transfer", link: "/transfer" },
              { text: "Check supply", link: "/check-supply" },
              { text: "Check balance", link: "/check-balance" },
              { text: "Register an asset", link: "/register-an-asset" },
              { text: "On-ramp", link: "/on-ramp" },
            ],
          },
          {
            text: "DEX",
            collapsed: true,
            items: [
              { text: "Swap", link: "/swap" },
              { text: "Provide liquidity", link: "/provide-liquidity" },
              { text: "Advanced trading", link: "/advanced-trading" },
            ],
          },
          {
            text: "Participating in governance",
            collapsed: true,
            items: [
              {
                text: "Fast track public voting",
                link: "/fast-track-public-voting",
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
                        link: "/adding-a-token-to-a-hashi-bridge",
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
          { text: "NFT", link: "/nft" },
          { text: "Identity", link: "/id" },
          { text: "Rewards", link: "/rewards" },
          { text: "Nodes connection", link: "/nodes-connection" },
        ],
      },
      {
        text: "BUIDL",
        items: [
          { text: "Introduction", link: "/buidl" },
          {
            text: "Decentralised development process",
            link: "/decentralised-development-process",
          },
          { text: "Pallets", link: "/pallets" },
          { text: "Technical Stack", link: "/technical-stack" },
          { text: "Consensus", link: "/consensus" },
          { text: "Accounts", link: "/accounts" },
          { text: "Useful links", link: "/useful-links" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "sora.org",
      // copyright: "",
    },
    search: {
      provider: "local",
    },
  },
  srcDir: "./src",
  lastUpdated: true,
});
