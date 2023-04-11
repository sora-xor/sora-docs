import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SORA docs",
  description: "Guides, how-tos, architecture",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/introduction" },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Introduction", link: "/introduction" },
          {
            text: "Tokenomics",
            link: "/tokenomics",
            items: [
              {
                text: "Token Bonding Curve",
                link: "/tbc",
              },
              {
                text: "XOR",
                link: "/api-examples",
              },
              {
                text: "VAL",
                link: "/api-examples",
              },
              {
                text: "PSWAP",
                link: "/api-examples",
              },
              {
                text: "XST",
                link: "/api-examples",
              },
              {
                text: "TBCD",
                link: "/api-examples",
              },
            ],
          },
          { text: "SORA economy", link: "/tba" },
          { text: "Governance", link: "/governance" },
          { text: "Academy", link: "/tba" },
        ],
      },
      {
        text: "Ecosystem",
        items: [
          { text: "Overview", link: "/tba" },
          { text: "Integrated plan", link: "/integrated-plan" },
          { text: "Polkaswap", link: "/polkaswap" },
          { text: "XST", link: "/tba" },
          { text: "SORAcard", link: "/tba" },
          {
            text: "SORA in your pocket",
            link: "/tba",
            items: [
              { text: "SORA Mobile", link: "/mobile" },
              { text: "Fearless wallet", link: "/fearless" },
            ],
          },
        ],
      },
      {
        text: "Participating in SORA economy",
        items: [
          { text: "Running a node", link: "/running-a-node" },
          { text: "Becoming a validator", link: "/tba" },
          { text: "Participating in governance", link: "/tba" },
          { text: "Referral system", link: "/tba" },
          {
            text: "Becoming a relayer",
            link: "/tba",
            items: [
              { text: "SORA <> EVM chains", link: "/tba" },
              { text: "SORA <> Polkadot/Kusama", link: "/tba" },
            ],
          },
          {
            text: "User guides",
            link: "/tba",
          },
        ],
      },
      {
        text: "BUIDL",
        items: [
          { text: "Introduction", link: "/buidl" },
          {
            text: "Decentralised development process",
            link: "/tba",
          },
          { text: "Pallets", link: "/tba" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  srcDir: "./src",
});
