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
      pattern:
        "https://github.com/sora-xor/sora-docs/tree/experiments/src/:path",
    },
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
          // { text: "Academy", link: "/tba" },
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
            link: "/markdown-examples",
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
      { text: "Changelog", link: "/changelog" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "sora.org",
      // copyright: "Copyright © 2019-present Evan You",
    },
    search: {
      provider: "local",
    },
  },
  srcDir: "./src",
  lastUpdated: true,
});
