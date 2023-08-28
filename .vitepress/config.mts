import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItKatex from "markdown-it-katex";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: "en-US",
    title: "docs",
    // base: "/sora-docs/",
    description: "Guides, how-tos, architecture",
    head: [["meta", { name: "keywords", content: "SORA ecosystem" }]],
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
          collapsable: true,
          collapsed: false,
          items: [
            { text: "Introduction", link: "introduction" },
            { text: "SORA Economy", link: "sora-economy" },
            {
              text: "Tokenomics",
              link: "tokenomics",
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
            { text: "SORA Governance", link: "sora-governance" },
            { text: "SORA Academy", link: "sora-academy" },
            { text: "FAQ", link: "sora-faq" },
            { text: "Changelog", link: "changelog" },
          ],
        },
        {
          text: "Ecosystem",
          collapsable: true,
          collapsed: false,
          items: [
            { text: "Overview", link: "ecosystem" },
            { text: "Integrated Plan", link: "integrated-plan" },
            {
              text: "Polkaswap",
              link: "polkaswap",
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
            {
              text: "SORAcard",
              items: [
                { text: "SORA Card Introduction", link: "sora-card" },
                {
                  text: "SORA Card KYC Tutorial",
                  link: "sora-card-kyc-tutorial",
                },
              ],
            },
            {
              text: "SORA in Your Pocket",
              items: [
                { text: "SORA Mobile", link: "mobile" },
                { text: "Fearless Wallet", link: "fearless" },
              ],
            },
            { text: "SORA Synthetics", link: "synthetics" },
            { text: "Consensus", link: "consensus" },
            { text: "Request Features", link: "rfp" },
          ],
        },
        {
          text: "Participate in the SORA Economy",
          collapsable: true,
          collapsed: false,
          items: [
            { text: "Overview", link: "participate" },
            { text: "Create an Address", link: "create-an-address" },
            { text: "Connect Wallet", link: "polkaswap-connect-wallet" },
            {
              text: "Send & Receive",
              link: "send-and-receive",
            },
            {
              text: "Explore the Ecosystem",
              items: [
                { text: "Check Supply", link: "check-supply" },
                { text: "Explore", link: "explore" },
                { text: "View Statistics", link: "statistics" },
                { text: "Explore Blocks", link: "explore-blocks" },
              ],
            },
            { text: "Transfer Assets", link: "transfer" },
            { text: "Check Balance", link: "check-balance" },
            { text: "Register an Asset", link: "register-an-asset" },
            { text: "On-ramp", link: "on-ramp" },
            {
              text: "Staking",
              items: [
                { text: "Demeter Staking", link: "demeter-staking" },
                {
                  text: "Staking in Fearless Wallet",
                  link: "stake-in-fearless-wallet",
                },
                { text: "Nominating Validators", link: "nominating-validators" },
              ],
            },
  
            {
              text: "DEX",
              items: [
                { text: "Swap", link: "swap" },
                {
                  text: "Provide Liquidity to XYK Pools",
                  link: "provide-liquidity-to-xyk-pools",
                },
                { text: "Advanced Trading", link: "advanced-trading" },
  
                {
                  text: "Other Polkaswap Features",
                  link: "polkaswap-other-features",
                },
              ],
            },
            {
              text: "Interoperability",
              link: "interoperability",
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
                        {
                          text: "Fixing a Stuck Transaction",
                          link: "unstuck-bridge-tx",
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
            { text: "NFT", link: "nft" },
            { text: "Identity", link: "id" },
            { text: "Rewards", link: "rewards" },
            { text: "Nodes Connection", link: "nodes-connection" },
            { text: "Running a Node", link: "running-a-node" },
          ],
        },
        {
          text: "Polkaswap",
          collapsable: true,
          collapsed: false,
          items: [
            { text: "Overview", link: "participate" },
            { text: "Connect Wallet", link: "polkaswap-connect-wallet" },
            {
              text: "Send & Receive",
              link: "send-and-receive-polkaswap",
            },
            {
              text: "Explore the Ecosystem",
              items: [
                { text: "Explore", link: "explore-polkaswap" },
                { text: "View Statistics", link: "statistics-polkaswap" },
              ],
            },
            { text: "Register an Asset", link: "register-an-asset-polkaswap" },
            { text: "On-ramp", link: "on-ramp-polkaswap" },
            {
              text: "Staking",
              items: [
                { text: "Demeter Staking", link: "demeter-staking-polkaswap" },
              ],
            },
  
            {
              text: "DEX",
              items: [
                { text: "Swap", link: "swap-polkaswap" },
                {
                  text: "Provide Liquidity to XYK Pools",
                  link: "provide-liquidity-to-xyk-pools-polkaswap",
                },
                { text: "Advanced Trading", link: "advanced-trading-polkaswap" },
  
                {
                  text: "Other Polkaswap Features",
                  link: "polkaswap-other-features",
                },
              ],
            },
            { text: "Referral System", link: "referral-polkaswap" },
            { text: "NFT", link: "nft-polkaswap" },
            { text: "Rewards", link: "rewards-polkaswap" },
            { text: "Nodes Connection", link: "nodes-connection-polkaswap" },
          ],
        },
        {
          text: "Build",
          collapsable: true,
          collapsed: false,
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
            { text: "Accounts", link: "accounts" },
          ],
        },
        {
          text: "Learn More",
          collapsable: true,
          collapsed: false,
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
      docFooter: {
        prev: false,
        next: false
      }
    },
    srcDir: "./src",
    lastUpdated: true,
    cleanUrls: false,
    ignoreDeadLinks: [/^https?:\/\/localhost/, /snippets\//],
    markdown: {
      config: (md) => {
        md.use(markdownItKatex);
      },
    },
  })
);

export interface DocSidebar {
  isOpen: Ref<boolean>
  sidebar: ComputedRef<DefaultTheme.SidebarItem[]>
  sidebarGroups: ComputedRef<DefaultTheme.SidebarItem[]>
  hasSidebar: ComputedRef<boolean>
  hasAside: ComputedRef<boolean>
  leftAside: ComputedRef<boolean>
  isSidebarEnabled: ComputedRef<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

