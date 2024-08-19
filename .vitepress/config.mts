import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItKatex from "markdown-it-katex";
import { DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: "en-US",
    title: "Welcome to the SORA Wiki",
    // base: "/sora-docs/",
    description: "Your Gateway to Knowledge about the SORA Network",
    head: [
      ["meta", { name: "keywords", content: "SORA ecosystem" }],
      ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
      ["link", { rel: "icon", href: "/icon.svg", sizes: "image/svg+xml" }],
      ["link", { ref: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    ],
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
        next: false,
      },
    },
    srcDir: "./src",
    lastUpdated: true,
    cleanUrls: false,
    // TODO implement a flat structure for snippets.
    ignoreDeadLinks: [/^https?:\/\/localhost/, /snippets\//],
    markdown: {
      config: (md) => {
        md.use(markdownItKatex);
      },
    },
    locales: {
      root: {
        label: "English",
        lang: "en",
        themeConfig: {
          sidebar: [
            {
              text: "Getting Started",
              collapsed: false,
              items: [
                { text: "Introduction", link: "introduction" },
                { text: "SORA Economy", link: "sora-economy" },
                {
                  text: "Tokenomics",
                  link: "tokenomics",
                  collapsed: false,
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
                    {
                      text: "KEN",
                      link: "ken",
                    },
                    {
                      text: "PUSSY",
                      link: "pussy",
                    },
                    {
                      text: "KXOR",
                      link: "kxor",
                    },
                    {
                      text: "KARMA",
                      link: "karma",
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
              items: [
                { text: "Overview", link: "ecosystem" },
                { text: "Integrated Plan", link: "integrated-plan" },
                {
                  text: "Polkaswap",
                  link: "polkaswap",
                  collapsed: false,
                  items: [
                    { text: "FAQ", link: "polkaswap/polkaswap-faq" },
                    {
                      text: "Memorandum and Terms of Services",
                      link: "polkaswap/terms",
                    },
                    {
                      text: "Privacy Policy",
                      link: "polkaswap/privacy",
                    },
                  ],
                },
                {
                  text: "SORA Card",
                  collapsed: false,
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
                  collapsed: false,
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
              items: [
                { text: "Overview", link: "participate" },
                { text: "Create an Address", link: "create-an-address" },
                { text: "Account Security", link: "account-security" },
                { text: "Connect Wallet", link: "polkaswap-connect-wallet" },
                {
                  text: "Send & Receive",
                  link: "send-and-receive",
                },
                {
                  text: "Explore the Ecosystem",
                  collapsed: false,
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
                  collapsed: false,
                  items: [
                    { text: "Demeter Staking", link: "demeter-staking" },
                    {
                      text: "Staking in Fearless Wallet",
                      link: "stake-in-fearless-wallet",
                    },
                    {
                      text: "Nominating Validators",
                      link: "nominating-validators",
                    },
                  ],
                },

                {
                  text: "DEX",
                  collapsed: false,
                  items: [
                    { text: "Swap", link: "swap" },
                    {
                      text: "Provide Liquidity to XYK Pools",
                      link: "provide-liquidity-to-xyk-pools",
                    },
                    { text: "Order Books", link: "order-books" },
                    { text: "Advanced Trading", link: "advanced-trading" },
		     { text: "Kensetsu Vaults", link: "kensetsu-vaults" },
                    {
                      text: "Other Polkaswap Settings",
                      link: "polkaswap-other-settings",
                    },
                  ],
                },
                {
                  text: "Interoperability (HASHI)",
                  collapsed: false,
                  link: "interoperability",
                  items: [
                    {
                      text: "EVM",
                      items: [
                        {
                          text: "Ethereum",
                          items: [
                            {
                              text: "Adding a Token",
                              link: "adding-tokens-to-hashi-bridge",
                            },

                            {
                              text: "Fixing a Stuck Transaction",
                              link: "unstuck-bridge-tx",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      text: "Substrate",
                      link: "substrate-bridge",
                      items: [
                        {
                          text: "Establishing HRMP channel",
                          link: "establishing-hrmp-channel",
                        },
                        {
                          text: "White list new token to Polkaswap",
                          link: "whitelist-token-to-polkaswap",
                        },
                      ],
                    },
                  ],
                },
                { text: "Referral System", link: "/referral" },
                { text: "NFT", link: "nft" },
                { text: "Identity", link: "id" },
                { text: "Rewards", link: "rewards" },
                { text: "Nodes Connection", link: "nodes-connection" },
                { text: "Running a Node", link: "running-a-node" },
                {
                  text: "Vote in Governance",
                  link: "participate-sora-governance",
                },
              ],
            },
            {
              text: "Build the SORA Economy",
              items: [
                { text: "Introduction", link: "build" },
                { text: "SORA Builders Programme", link: "sora-builders" },
                {
                  text: "Social Insurance for Systematically Important Infrastructure",
                  link: "social-insurance",
                },
                { text: "Technical Stack", link: "technical-stack" },
                { text: "Pallets", link: "pallets" },
                { text: "Accounts", link: "accounts" },
                {
                  text: "Builders",
                  collapsed: false,
                  items: [
                    {
                      text: "Polkaswap",
                      collapsed: false,
                      items: [
                        { text: "Overview", link: "participate" },
                        {
                          text: "Connect Wallet",
                          link: "polkaswap-connect-wallet",
                        },
                        {
                          text: "Send & Receive",
                          link: "send-and-receive-polkaswap",
                        },
                        {
                          text: "Explore the Ecosystem",
                          items: [
                            { text: "Explore", link: "explore-polkaswap" },
                            {
                              text: "View Statistics",
                              link: "statistics-polkaswap",
                            },
                          ],
                        },
                        {
                          text: "Register an Asset",
                          link: "register-an-asset-polkaswap",
                        },
                        { text: "On-ramp", link: "on-ramp-polkaswap" },
                        {
                          text: "Staking",
                          items: [
                            {
                              text: "Demeter Staking",
                              link: "demeter-staking-polkaswap",
                            },
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
                            {
                              text: "Order Book Trading",
                              link: "polkaswap-order-book-trading",
                            },
                            {
                              text: "Advanced Trading",
                              link: "advanced-trading-polkaswap",
                            },
                            {
                              text: "Other Polkaswap Settings",
                              link: "polkaswap-other-settings",
                            },
                          ],
                        },
                        { text: "Referral System", link: "referral-polkaswap" },
                        { text: "NFT", link: "nft-polkaswap" },
                        { text: "Rewards", link: "rewards-polkaswap" },
                        {
                          text: "Nodes Connection",
                          link: "nodes-connection-polkaswap",
                        },
                      ],
                    },
                    {
                      text: "Ceres",
                      collapsed: false,
                      items: [
                        { text: "Overview", link: "ceres/overview" },
                        {
                          text: "Ceres",
                          items: [
                            { text: "Ceres Tools", link: "ceres/tools" },
                            {
                              text: "Liquidity Locker",
                              link: "ceres/liquidity-locker",
                            },
                            {
                              text: "Token Locker",
                              link: "ceres/token-locker",
                            },
                            { text: "Governance", link: "ceres/governance" },
                            { text: "Launchpad", link: "ceres/launchpad" },
                          ],
                        },
                        {
                          text: "Demeter",
                          items: [
                            { text: "Farming", link: "ceres/demeter-farming" },
                            { text: "DEO Arena", link: "ceres/deo-arena" },
                          ],
                        },
                        {
                          text: "Hermes",
                          items: [
                            { text: "Hermes DAO", link: "ceres/hermes-dao" },
                          ],
                        },
                      ],
                    },
		    {
                      text: "Palmatrix",
                      collapsed: false,
                      items: [
                        { text: "Overview", link: "palmatrix-overview" },
                        { text: "PalmaBot", link: "palmatrix-palmabot"
                        },
                      ],
                    },
                  ],
                },
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
        },
      },
      cn: {
        label: "Chinese",
        lang: "cn",
        themeConfig: {
          sidebar: [
            {
              text: "开始使用",
              items: [
                { text: "介绍", link: "cn/introduction" },
                { text: "SORA经济", link: "cn/sora-economy" },
                {
                  text: "通证经济学",
                  link: "cn/tokenomics",
                  items: [
                    {
                      text: "代币绑定曲线",
                      link: "cn/tbc",
                    },
                    {
                      text: "XOR",
                      link: "cn/xor",
                    },
                    {
                      text: "VAL",
                      link: "cn/val",
                    },
                    {
                      text: "TBCD",
                      link: "cn/tbcd",
                    },
                  ],
                },
              ],
            },
          ],
          nav: [
            { text: "开始使用", link: "cn/introduction" },
            // { text: "Ecosystem", link: "ecosystem" },
            // { text: "SORA Economy", link: "participate" },
            // { text: "Build", link: "build" },
          ],
        },
      },
      es: {
        label: "Español",
        lang: "es",
        themeConfig: {
          sidebar: [
            {
              text: "Empezando en SORA",
              collapsed: false,
              items: [
                { text: "Introducción", link: "es/introduction" },
                { text: "Economía de Sora", link: "es/sora-economy" },
                {
                  text: "Tokenomics",
                  link: "es/tokenomics",
                  collapsed: false,
                  items: [
                    {
                      text: "Curva de Vinculación de Tokens",
                      link: "es/tbc",
                    },
                    {
                      text: "XOR",
                      link: "es/xor",
                    },
                    {
                      text: "VAL",
                      link: "es/val",
                    },
                    {
                      text: "PSWAP",
                      link: "es/pswap",
                    },
                    {
                      text: "XST",
                      link: "es/xst",
                    },
                    {
                      text: "TBCD",
                      link: "es/tbcd",
                    },
                    {
                      text: "KEN",
                      link: "es/ken",
                    },
                  ],
                },
                { text: "Gobernanza SORA", link: "es/sora-governance" },
                { text: "SORA Academy", link: "es/sora-academy" },
                { text: "FAQ", link: "es/sora-faq" },
                { text: "Registro de Cambios", link: "es/changelog" },
              ],
            },
            {
              text: "Ecosistema",
              items: [
                { text: "Descripción General", link: "es/ecosystem" },
                { text: "Plan integrado", link: "es/integrated-plan" },
                {
                  text: "Polkaswap",
                  link: "es/polkaswap",
                  collapsed: false,
                  items: [
                    { text: "FAQ", link: "es/polkaswap/polkaswap-faq" },
                    {
                      text: "Memorando y Términos del Servicio",
                      link: "es/polkaswap/terms",
                    },
                    {
                      text: "Política de Privacidad",
                      link: "es/polkaswap/privacy",
                    },
                  ],
                },
                {
                  text: "Tarjeta SORA",
                  collapsed: false,
                  items: [
                    {
                      text: "Introducción a la Tarjeta SORA",
                      link: "es/sora-card",
                    },
                    {
                      text: "Tutorial KYC de la tarjeta SORA",
                      link: "es/sora-card-kyc-tutorial",
                    },
                  ],
                },
                {
                  text: "SORA en tu bolsillo",
                  collapsed: false,
                  items: [
                    { text: "SORA Móvil", link: "es/mobile" },
                    { text: "Fearless Wallet", link: "es/fearless" },
                  ],
                },
                { text: "SORA Sintéticos", link: "es/synthetics" },
                { text: "Consenso", link: "es/consensus" },
                { text: "Solicitar características", link: "es/rfp" },
              ],
            },
            {
              text: "Participa en la Economía SORA",
              items: [
                { text: "Descripción general", link: "es/participate" },
                { text: "Crear una dirección", link: "es/create-an-address" },
                { text: "Seguridad de la cuenta", link: "es/account-security" },
                {
                  text: "Conectar billetera",
                  link: "es/polkaswap-connect-wallet",
                },
                {
                  text: "Enviar recibir",
                  link: "es/send-and-receive",
                },
                {
                  text: "Explora el ecosistema",
                  collapsed: false,
                  items: [
                    { text: "Consultar suministro", link: "es/check-supply" },
                    { text: "Explorar", link: "es/explore" },
                    { text: "Ver estadísticas", link: "es/statistics" },
                    { text: "Explorar bloques", link: "es/explore-blocks" },
                  ],
                },
                { text: "Transferir activos", link: "es/transfer" },
                { text: "Consultar saldo", link: "es/check-balance" },
                { text: "Registrar un activo", link: "es/register-an-asset" },
                { text: "On-ramp", link: "es/on-ramp" },
                {
                  text: "Staking",
                  collapsed: false,
                  items: [
                    { text: "Demeter Staking", link: "es/demeter-staking" },
                    {
                      text: "Staking en Fearless Wallet",
                      link: "es/stake-in-fearless-wallet",
                    },
                    {
                      text: "Nominar validadores",
                      link: "es/nominating-validators",
                    },
                  ],
                },

                {
                  text: "DEX",
                  collapsed: false,
                  items: [
                    { text: "Swap", link: "es/swap" },
                    {
                      text: "Proporcionar liquidez en Pools XYK",
                      link: "es/provide-liquidity-to-xyk-pools",
                    },
                    { text: "Libro de Ordenes", link: "es/order-books" },
                    { text: "Comercio avanzado", link: "es/advanced-trading" },
                    {
                      text: "Otras configuraciones de Polkaswap",
                      link: "es/polkaswap-other-settings",
                    },
                  ],
                },
                {
                  text: "Interoperabilidad (HASHI)",
                  collapsed: false,
                  link: "es/interoperability",
                  items: [
                    {
                      text: "EVM",
                      items: [
                        {
                          text: "Ethereum",
                          items: [
                            {
                              text: "Añadir un Token",
                              link: "es/adding-tokens-to-hashi-bridge",
                            },

                            {
                              text: "Arreglar una transacción estancada",
                              link: "es/unstuck-bridge-tx",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      text: "Substrate",
                      link: "es/substrate-bridge",
                      items: [
                        {
                          text: "Estableciendo el canal HRMP",
                          link: "es/establishing-hrmp-channel",
                        },
                      ],
                    },
                  ],
                },
                { text: "Sistema de referidos", link: "es/referral" },
                { text: "NFT", link: "es/nft" },
                { text: "Identidad", link: "es/id" },
                { text: "Recompensas", link: "es/rewards" },
                { text: "Conexión de nodos", link: "es/nodes-connection" },
                { text: "Ejecutando un nodo", link: "es/running-a-node" },
                {
                  text: "Voto en Gobernanza",
                  link: "es/participate-sora-governance",
                },
              ],
            },
            {
              text: "Construir la economía SORA",
              items: [
                { text: "Introducción", link: "es/build" },
                {
                  text: "Programa de Constructores SORA",
                  link: "es/sora-builders",
                },
                {
                  text: "Constructores",
                  collapsed: false,
                  items: [
                    {
                      text: "Polkaswap",
                      collapsed: false,
                      items: [
                        { text: "Descripción general", link: "es/participate" },
                        {
                          text: "Conectar Billetera",
                          link: "es/polkaswap-connect-wallet",
                        },
                        {
                          text: "Enviar recibir",
                          link: "es/send-and-receive-polkaswap",
                        },
                        {
                          text: "Explora el ecosistema",
                          items: [
                            { text: "Explora", link: "es/explore-polkaswap" },
                            {
                              text: "Visualizar Estadísticas",
                              link: "es/statistics-polkaswap",
                            },
                          ],
                        },
                        {
                          text: "Registrar un activo",
                          link: "es/register-an-asset-polkaswap",
                        },
                        { text: "On-ramp", link: "es/on-ramp-polkaswap" },
                        {
                          text: "Staking",
                          items: [
                            {
                              text: "Demeter Staking",
                              link: "es/demeter-staking-polkaswap",
                            },
                          ],
                        },

                        {
                          text: "DEX",
                          items: [
                            { text: "Swap", link: "es/swap-polkaswap" },
                            {
                              text: "Proporcionar liquidez a Pools XYK",
                              link: "es/provide-liquidity-to-xyk-pools-polkaswap",
                            },
                            {
                              text: "Negociación del Libro de Ordenes",
                              link: "es/polkaswap-order-book-trading",
                            },
                            {
                              text: "Trading avanzado",
                              link: "es/advanced-trading-polkaswap",
                            },
                            {
                              text: "Otras configuraciones de Polkaswap",
                              link: "es/polkaswap-other-settings",
                            },
                          ],
                        },
                        {
                          text: "Sistema de referidos",
                          link: "es/referral-polkaswap",
                        },
                        { text: "NFT", link: "es/nft-polkaswap" },
                        { text: "Recompensas", link: "es/rewards-polkaswap" },
                        {
                          text: "Conexión de nodos",
                          link: "es/nodes-connection-polkaswap",
                        },
                      ],
                    },
                    {
                      text: "Ceres",
                      collapsed: false,
                      items: [
                        { text: "Descripción general", link: "es/ceres/overview" },
                        {
                          text: "Ceres",
                          items: [
                            { text: "Herramientas Ceres", link: "es/ceres/tools" },
                            {
                              text: "Bloqueo de liquidez",
                              link: "es/ceres/liquidity-locker",
                            },
                            {
                              text: "Bloqueo de tokens",
                              link: "es/ceres/token-locker",
                            },
                            { text: "Gobernanza", link: "es/ceres/governance" },
                            {
                              text: "Plataforma de lanzamiento",
                              link: "es/ceres/launchpad",
                            },
                          ],
                        },
                        {
                          text: "Demeter",
                          items: [
                            { text: "Farming", link: "es/ceres/demeter-farming" },
                            { text: "DEO Arena", link: "es/ceres/deo-arena" },
                          ],
                        },
                        {
                          text: "Hermes",
                          items: [
                            { text: "Hermes DAO", link: "es/ceres/hermes-dao" },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "Seguro social para Infraestructura de Importancia Sistemática",
                  link: "es/social-insurance",
                },
                { text: "Documentación técnica", link: "es/technical-stack" },
                { text: "Pallets", link: "es/pallets" },
                { text: "Cuentas", link: "es/accounts" },
              ],
            },

            {
              text: "Aprende más",
              items: [
                {
                  text: "Enlaces útiles",
                  link: "es/useful-links",
                },
                {
                  text: "Blogs de la comunidad",
                  link: "es/blogs",
                },
                {
                  text: "Guías para contribuyentes",
                  link: "es/contribute",
                },
              ],
            },
          ],
          nav: [
            { text: "Empezando en SORA", link: "/es/introduction" },
            { text: "Ecosistema", link: "/es/ecosystem" },
            { text: "Economía de SORA", link: "/es/participate" },
            { text: "Construye", link: "/es/build" },
          ],
        },
      },
    },
    pt: {
      root: {
        label: "Português",
        lang: "pt",
        themeConfig: {
          sidebar: [
            {
              text: "Começando no SORA",
              collapsed: false,
              items: [
                { text: "Introdução", link: "pt/introduction" },
                { text: "Economia SORA", link: "pt/sora-economy" },
                {
                  text: "Tokenomics",
                  link: "pt/tokenomics",
                  collapsed: false,
                  items: [
                    {
                      text: "Curva de ligação de token",
                      link: "pt/tbc",
                    },
                    {
                      text: "XOR",
                      link: "pt/xor",
                    },
                    {
                      text: "VAL",
                      link: "pt/val",
                    },
                    {
                      text: "PSWAP",
                      link: "pt/pswap",
                    },
                    {
                      text: "XST",
                      link: "pt/xst",
                    },
                    {
                      text: "TBCD",
                      link: "pt/tbcd",
                    },
                    {
                      text: "KEN",
                      link: "pt/ken",
                    },
                    {
                      text: "PUSSY",
                      link: "pt/pussy",
                    },
                    {
                      text: "KXOR",
                      link: "pt/kxor",
                    },
                    {
                      text: "KARMA",
                      link: "pt/karma",
                    },
                  ],
                },
                { text: "Governança SORA", link: "pt/sora-governance" },
                { text: "Academia SORA", link: "pt/sora-academy" },
                { text: "Perguntas frequentes", link: "pt/sora-faq" },
                { text: "Registro de alterações", link: "pt/changelog" },
              ],
            },
            {
              text: "Ecossistema",
              items: [
                { text: "Visão geral", link: "pt/ecosystem" },
                { text: "Plano Integrado", link: "pt/integrated-plan" },
                {
                  text: "Polkaswap",
                  link: "pt/polkaswap",
                  collapsed: false,
                  items: [
                    { text: "Perguntas frequentes", link: "pt/polkaswap/polkaswap-faq" },
                    {
                      text: "Memorando e Termos de Serviços",
                      link: "pt/polkaswap/terms",
                    },
                    {
                      text: "Política de Privacidade",
                      link: "pt/polkaswap/privacy",
                    },
                  ],
                },
                {
                  text: "Cartão SORA",
                  collapsed: false,
                  items: [
                    { text: "Introdução ao cartão SORA", link: "pt/sora-card" },
                    {
                      text: "Tutorial KYC do cartão SORA",
                      link: "pt/sora-card-kyc-tutorial",
                    },
                  ],
                },
                {
                  text: "SORA no seu bolso",
                  collapsed: false,
                  items: [
                    { text: "SORA Móvel", link: "mobile" },
                    { text: "Fearless Wallet", link: "pt/fearless" },
                  ],
                },
                { text: "SORA Sintéticos", link: "pt/synthetics" },
                { text: "Consenso", link: "pt/consensus" },
                { text: "Solicitar recursos - RFP", link: "pt/rfp" },
              ],
            },
            {
              text: "Participe da Economia SORA",
              items: [
                { text: "Visão geral", link: "pt/participate" },
                { text: "Crie um endereço", link: "pt/create-an-address" },
                { text: "Segurança da conta", link: "pt/account-security" },
                { text: "Conectar carteira", link: "pt/polkaswap-connect-wallet" },
                {
                  text: "Enviar e receber",
                  link: "pt/send-and-receive",
                },
                {
                  text: "Explore o ecossistema",
                  collapsed: false,
                  items: [
                    { text: "Verifique o fornecimento", link: "pt/check-supply" },
                    { text: "Explorar", link: "pt/explore" },
                    { text: "Ver estatísticas", link: "pt/statistics" },
                    { text: "Explorar blocos", link: "pt/explore-blocks" },
                  ],
                },
                { text: "Transferir ativos", link: "pt/transfer" },
                { text: "Verifique o saldo", link: "pt/check-balance" },
                { text: "Registrar um ativo", link: "pt/register-an-asset" },
                { text: "Rampa de acesso (on-ramp)", link: "pt/on-ramp" },
                {
                  text: "Staking (depósito remunerado, uma premiação em moedas digitais emitida como recompensa por ajudar na segurança da rede)",
                  collapsed: false,
                  items: [
                    { text: "Demeter Staking (Estaqueamento ou Aposta)", link: "pt/demeter-staking" },
                    {
                      text: "Staking na carteira Fearless",
                      link: "pt/stake-in-fearless-wallet",
                    },
                    {
                      text: "Nomeando Validadores",
                      link: "pt/nominating-validators",
                    },
                  ],
                },

                {
                  text: "DEX",
                  collapsed: false,
                  items: [
                    { text: "Swap (Converter)", link: "pt/swap" },
                    {
                      text: "Fornecer liquidez para pools (cestas de depósitos) XYK",
                      link: "pt/provide-liquidity-to-xyk-pools",
                    },
                    { text: "Livro de Ordens", link: "pt/order-books" },
                    { text: "Negociação Avançada", link: "pt/advanced-trading" },
		     { text: "Cofres Kensetsu", link: "pt/kensetsu-vaults" },
                    {
                      text: "Outras configurações do Polkaswap",
                      link: "pt/polkaswap-other-settings",
                    },
                  ],
                },
                {
                  text: "Interoperabilidade (HASHI)",
                  collapsed: false,
                  link: "pt/interoperability",
                  items: [
                    {
                      text: "EVM",
                      items: [
                        {
                          text: "Ethereum",
                          items: [
                            {
                              text: "Adicionando um token",
                              link: "pt/adding-tokens-to-hashi-bridge",
                            },

                            {
                              text: "Consertando uma transação travada",
                              link: "pt/unstuck-bridge-tx",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      text: "Substrate",
                      link: "pt/substrate-bridge",
                      items: [
                        {
                          text: "Estabelecendo canal HRMP",
                          link: "pt/establishing-hrmp-channel",
                        },
                      ],
                    },
                  ],
                },
                { text: "Sistema de referência", link: "pt/referral" },
                { text: "NFT ou token não fungível (ativo digital único)", link: "pt/nft" },
                { text: "Identidade", link: "pt/id" },
                { text: "Recompensas", link: "pt/rewards" },
                { text: "Conexão de nós (Node)", link: "pt/nodes-connection" },
                { text: "Executando um nó (Node)", link: "pt/running-a-node" },
                {
                  text: "Votar na Governança",
                  link: "pt/participate-sora-governance",
                },
              ],
            },
            {
              text: "Construir a Economia SORA",
              items: [
                { text: "Introdução", link: "pt/build" },
                { text: "Programa SORA Construtores", link: "pt/sora-builders" },
                {
                  text: "Seguro Social para Infraestruturas Sistematicamente Importantes",
                  link: "pt/social-insurance",
                },
                { text: "Pilha tecnológica", link: "pt/technical-stack" },
                { text: "Pallets (blocos de construção)", link: "pt/pallets" },
                { text: "Contas", link: "pt/accounts" },
                {
                  text: "Construtores",
                  collapsed: false,
                  items: [
                    {
                      text: "Polkaswap",
                      collapsed: false,
                      items: [
                        { text: "Visão geral", link: "pt/participate" },
                        {
                          text: "Conectar carteira",
                          link: "pt/polkaswap-connect-wallet",
                        },
                        {
                          text: "Enviar e receber",
                          link: "pt/send-and-receive-polkaswap",
                        },
                        {
                          text: "Explore o ecossistema",
                          items: [
                            { text: "Explorar", link: "pt/explore-polkaswap" },
                            {
                              text: "Ver estatísticas",
                              link: "pt/statistics-polkaswap",
                            },
                          ],
                        },
                        {
                          text: "Registrar um ativo",
                          link: "pt/register-an-asset-polkaswap",
                        },
                        { text: "Rampa de acesso (on-ramp)", link: "pt/on-ramp-polkaswap" },
                        {
                          text: "Staking",
                          items: [
                            {
                              text: "Demeter Staking",
                              link: "pt/demeter-staking-polkaswap",
                            },
                          ],
                        },

                        {
                          text: "DEX",
                          items: [
                            { text: "Swap", link: "pt/swap-polkaswap" },
                            {
                              text: "Fornecer liquidez para pools (cestas) XYK",
                              link: "pt/provide-liquidity-to-xyk-pools-polkaswap",
                            },
                            {
                              text: "Negociação de livro de ordens",
                              link: "pt/polkaswap-order-book-trading",
                            },
                            {
                              text: "Negociação Avançada",
                              link: "pt/advanced-trading-polkaswap",
                            },
                            {
                              text: "Outras configurações do Polkaswap",
                              link: "pt/polkaswap-other-settings",
                            },
                          ],
                        },
                        { text: "Sistema de referência", link: "pt/referral-polkaswap" },
                        { text: "NFT", link: "pt/nft-polkaswap" },
                        { text: "Recompensas", link: "pt/rewards-polkaswap" },
                        {
                          text: "Conexão de nós",
                          link: "pt/nodes-connection-polkaswap",
                        },
                      ],
                    },
                    {
                      text: "Ceres",
                      collapsed: false,
                      items: [
                        { text: "Visão geral", link: "pt/ceres/overview" },
                        {
                          text: "Ceres",
                          items: [
                            { text: "Ferramentas Ceres", link: "pt/ceres/tools" },
                            {
                              text: "Bloqueio de liquidez",
                              link: "pt/ceres/liquidity-locker",
                            },
                            {
                              text: "Bloqueio de tokens",
                              link: "pt/ceres/token-locker",
                            },
                            { text: "Governança", link: "pt/ceres/governance" },
                            { text: "Plataforma de lançamento", link: "pt/ceres/launchpad" },
                          ],
                        },
                        {
                          text: "Demeter",
                          items: [
                            { text: "Farming ou cultivo de rendimento (depósito de ativos para empréstimos em troca de remuneração)", link: "pt/ceres/demeter-farming" },
                            { text: "DEO Arena", link: "pt/ceres/deo-arena" },
                          ],
                        },
                        {
                          text: "Hermes",
                          items: [
                            { text: "Hermes DAO", link: "pt/ceres/hermes-dao" },
                          ],
                        },
                      ],
                    },
		    {
                      text: "Palmatrix",
                      collapsed: false,
                      items: [
                        { text: "Visão geral", link: "pt/palmatrix-overview" },
                        { text: "PalmaBot", link: "pt/palmatrix-palmabot"
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              text: "Saber mais",
              items: [
                {
                  text: "Links Úteis",
                  link: "pt/useful-links",
                },
                {
                  text: "Blogs da comunidade",
                  link: "pt/blogs",
                },
                {
                  text: "Diretrizes de Contribuição",
                  link: "pt/contribute",
                },
              ],
            },
          ],
        },
      },
    },
  })
);
