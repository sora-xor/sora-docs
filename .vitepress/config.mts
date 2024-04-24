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
		{ text: "Vote in Governance", link: "participate-sora-governance" },
              ],
            },
            {
              text: "Build the SORA Economy",
              items: [
                { text: "Introduction", link: "build" },
                {text: "SORA Builders Programme",
                  link: "sora-builders"},
		{text: "Social Insurance for Systematically Important Infrastructure", link: "social-insurance"},
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
                              { text: "Token Locker", link: "ceres/token-locker" },
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
                            items: [{ text: "Hermes DAO", link: "ceres/hermes-dao" }],
                          },
                        ],
                      },
                  ]
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
	   es: {
        label: "Español",
        lang: "es",
        themeConfig: {
          sidebar: [
            {
              text: "Empezando en SORA",
              collapsed: false,
              items: [
                { text: "Introducción", link: "introduction" },
                { text: "Economía de Sora", link: "sora-economy" },
                {
                  text: "Tokenomics",
                  link: "tokenomics",
                  collapsed: false,
                  items: [
                    {
                      text: "Curva de Vinculación de Tokens",
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
                  ],
                },
                { text: "Gobernanza SORA", link: "sora-governance" },
                { text: "SORA Academy", link: "sora-academy" },
                { text: "FAQ", link: "sora-faq" },
                { text: "Registro de Cambios", link: "changelog" },
              ],
            },
            {
              text: "Ecosistema",
              items: [
                { text: "Descripción General", link: "ecosystem" },
                { text: "Plan integrado", link: "integrated-plan" },
                {
                  text: "Polkaswap",
                  link: "polkaswap",
                  collapsed: false,
                  items: [
                    { text: "FAQ", link: "polkaswap/polkaswap-faq" },
                    {
                      text: "Memorando y Términos del Servicio",
                      link: "polkaswap/terms",
                    },
                    {
                      text: "Política de Privacidad",
                      link: "polkaswap/privacy",
                    },
                  ],
                },
                {
                  text: "Tarjeta SORA",
                  collapsed: false,
                  items: [
                    { text: "Introducción a la Tarjeta SORA", link: "sora-card" },
                    {
                      text: "Tutorial KYC de la tarjeta SORA",
                      link: "sora-card-kyc-tutorial",
                    },
                  ],
                },
                {
                  text: "SORA en tu bolsillo",
                  collapsed: false,
                  items: [
                    { text: "SORA Móvil", link: "mobile" },
                    { text: "Fearless Wallet", link: "fearless" },
                  ],
                },
                { text: "SORA Sintéticos", link: "synthetics" },
                { text: "Consenso", link: "consensus" },
                { text: "Solicitar características", link: "rfp" },
              ],
            },
            {
              text: "Participa en la Economía SORA",
              items: [
                { text: "Descripción general", link: "participate" },
                { text: "Crear una dirección", link: "create-an-address" },
                { text: "Seguridad de la cuenta", link: "account-security" },
                { text: "Conectar billetera", link: "polkaswap-connect-wallet" },
                {
                  text: "Enviar recibir",
                  link: "send-and-receive",
                },
                {
                  text: "Explora el ecosistema",
                  collapsed: false,
                  items: [
                    { text: "Consultar suministro", link: "check-supply" },
                    { text: "Explorar", link: "explore" },
                    { text: "Ver estadísticas", link: "statistics" },
                    { text: "Explorar bloques", link: "explore-blocks" },
                  ],
                },
                { text: "Transferir activos", link: "transfer" },
                { text: "Consultar saldo", link: "check-balance" },
                { text: "Registrar un activo", link: "register-an-asset" },
                { text: "On-ramp", link: "on-ramp" },
                {
                  text: "Staking",
                  collapsed: false,
                  items: [
                    { text: "Demeter Staking", link: "demeter-staking" },
                    {
                      text: "Staking en Fearless Wallet",
                      link: "stake-in-fearless-wallet",
                    },
                    {
                      text: "Nominar validadores",
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
                      text: "Proporcionar liquidez en Pools XYK",
                      link: "provide-liquidity-to-xyk-pools",
                    },
                    { text: "Libro de Ordenes", link: "order-books" },
                    { text: "Comercio avanzado", link: "advanced-trading" },
                    {
                      text: "Otras configuraciones de Polkaswap",
                      link: "polkaswap-other-settings",
                    },
                  ],
                },
                {
                  text: "Interoperabilidad (HASHI)",
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
                              text: "Añadir un Token",
                              link: "adding-tokens-to-hashi-bridge",
                            },

                            {
                              text: "Arreglar una transacción estancada",
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
                          text: "Estableciendo el canal HRMP",
                          link: "establishing-hrmp-channel",
                        },
                      ],
                    },
                  ],
                },
                { text: "Sistema de referidos", link: "/referral" },
                { text: "NFT", link: "nft" },
                { text: "Identidad", link: "id" },
                { text: "Recompensas", link: "rewards" },
                { text: "Conexión de nodos", link: "nodes-connection" },
                { text: "Ejecutando un nodo", link: "running-a-node" },
		{ text: "Voto en Gobernanza", link: "participate-sora-governance" },
              ],
            },
            {
              text: "Construir la economía SORA",
              items: [
                { text: "Introducción", link: "build" },
                {
                  text: "Programa de Constructores SORA",
                  link: "sora-builders",
                },
                {
                  text: "Constructores",
                  collapsed: false,
                  items: [
                      {
                        text: "Polkaswap",
                        collapsed: false,
                        items: [
                          { text: "Descripción general", link: "participate" },
                          {
                            text: "Conectar Billetera",
                            link: "polkaswap-connect-wallet",
                          },
                          {
                            text: "Enviar recibir",
                            link: "send-and-receive-polkaswap",
                          },
                          {
                            text: "Explora el ecosistema",
                            items: [
                              { text: "Explora", link: "explore-polkaswap" },
                              {
                                text: "Visualizar Estadísticas",
                                link: "statistics-polkaswap",
                              },
                            ],
                          },
                          {
                            text: "Registrar un activo",
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
                                text: "Proporcionar liquidez a Pools XYK",
                                link: "provide-liquidity-to-xyk-pools-polkaswap",
                              },
                              {
                                text: "Negociación del Libro de Ordenes",
                                link: "polkaswap-order-book-trading",
                              },
                              {
                                text: "Trading avanzado",
                                link: "advanced-trading-polkaswap",
                              },
                              {
                                text: "Otras configuraciones de Polkaswap",
                                link: "polkaswap-other-settings",
                              },
                            ],
                          },
                          { text: "Sistema de referidos", link: "referral-polkaswap" },
                          { text: "NFT", link: "nft-polkaswap" },
                          { text: "Recompensas", link: "rewards-polkaswap" },
                          {
                            text: "Conexión de nodos",
                            link: "nodes-connection-polkaswap",
                          },
                        ],
                      },
                      {
                        text: "Ceres",
                        collapsed: false,
                        items: [
                          { text: "Descripción general", link: "ceres/overview" },
                          {
                            text: "Ceres",
                            items: [
                              { text: "Herramientas Ceres", link: "ceres/tools" },
                              {
                                text: "Bloqueo de liquidez",
                                link: "ceres/liquidity-locker",
                              },
                              { text: "Bloqueo de tokens", link: "ceres/token-locker" },
                              { text: "Gobernanza", link: "ceres/governance" },
                              { text: "Plataforma de lanzamiento", link: "ceres/launchpad" },
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
                            items: [{ text: "Hermes DAO", link: "ceres/hermes-dao" }],
                          },
                        ],
                      },
                  ]
                },
                {
                  text: "Seguro social para Infraestructura de Importancia Sistemática",
                  link: "social-insurance",
                },
                { text: "Documentación técnica", link: "technical-stack" },
                { text: "Pallets", link: "pallets" },
                { text: "Cuentas", link: "accounts" },
              ],
            },

            {
              text: "Aprende más",
              items: [
                {
                  text: "Enlaces útiles",
                  link: "useful-links",
                },
                {
                  text: "Blogs de la comunidad",
                  link: "blogs",
                },
                {
                  text: "Guías para contribuyentes",
                  link: "contribute",
                },
              ],
            },
          ],
        },
      },
    },
  })
);
