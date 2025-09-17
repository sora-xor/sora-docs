# SORA Wiki – Agents Guide

This repository powers the public SORA Wiki. It is built with VitePress and welcomes community contributions. This guide equips AI agents and contributors with the project context, workflows, and conventions to propose safe, minimal, and correct changes.

## Stack Overview

- Site generator: VitePress (`vitepress`)
- Markdown extensions:
  - Mermaid diagrams (`vitepress-plugin-mermaid`, `mermaid`)
  - KaTeX math (`markdown-it-katex`)
  - Footnotes (`@mdit/plugin-footnote`)
- Theme: Custom wrapper over VitePress default (`.vitepress/theme`)
- Source root: `src/` (English root, plus `cn/` and `es/` locales)
- Deployment: Vercel (`vercel.json` rewrite, Project Settings build)

Key files:
- `.vitepress/config.mts` – navigation, sidebars, locales, markdown/plugins
- `.vitepress/theme/` – light customization layer
- `src/` – content and assets (snippets in `src/snippets/`)
- `package.json` – scripts and dev tooling
- `CONTRIBUTING.md` – human contributor workflow
- `.env.example` – recommended env for stable builds

## Repository Layout

- `src/index.md` – landing page for English locale
- `src/{topic}.md` – primary English pages
- `src/snippets/*.md` – reusable partials (dead-link checks are relaxed for `snippets/`)
- `src/es/**` – Spanish translations mirror English structure
- `src/cn/**` – Chinese translations (partial)
- `src/assets/**` – images used by English content (some localized under `src/es/public/`)

VitePress configuration defines:
- `srcDir: "./src"`
- `locales`: `root` (English), `cn` (Chinese), `es` (Spanish)
- Sidebar and nav trees for each locale
- `ignoreDeadLinks`: localhost and `snippets/`

## Build & Run

Commands:
- `npm run docs:dev` – local dev server
- `npm run build` or `npm run docs:build` – static build to `.vitepress/dist`
- `npm run docs:preview` – preview built site

Requirements:
- Node.js 18+ (Node 20 is supported)
- npm

Rollup native-binary workaround (npm optional-deps bug):
- Preferred: set `ROLLUP_USE_NODE_JS_IMPLEMENTATION=1`
- Example: `ROLLUP_USE_NODE_JS_IMPLEMENTATION=1 npm run docs:dev`
- See Troubleshooting in `CONTRIBUTING.md`

## Vercel Deployment

Project is deployed on Vercel. Recommended settings:
- Env vars: `ROLLUP_USE_NODE_JS_IMPLEMENTATION=1` (Production, Preview, Development)
- Install Command: `npm install` (ensure devDependencies are installed)
- Build Command: `npm run build`
- Output Directory: `.vitepress/dist`
- `vercel.json` rewrites `/sora-docs/*` → `/*` for compatibility

## Contribution Workflow (for agents)

Follow the human workflow in `CONTRIBUTING.md` and these agent-specific rules:
- Keep changes minimal and focused; prefer surgical edits over refactors.
- Target branch: `develop` (matches `editLink` pattern in the site config).
- Ensure local build passes before proposing changes.
- Update navigation/sidebars when adding or relocating pages (`.vitepress/config.mts`).
- Maintain parity across locales when feasible; otherwise, add English first and create stubs or TODOs for translations.
- Do not introduce new runtime dependencies. Use existing plugins and patterns.
- Use absolute links starting with `/` for internal routes (VitePress convention) unless a relative path is necessary inside the same section.
- Respect existing headings/slug structure to avoid breaking deep links.
- Run formatting before submitting: `npm run format` (note: current script targets `src/*.md`).

## Authoring Guidelines

- Structure:
  - Start pages with a single H1 (`# Title`).
  - Use concise headings and consistent title case.
  - Keep paragraphs short; prefer lists and subsections for scanability.
- Links:
  - Internal: `/path` (e.g., `/polkaswap`).
  - External: full `https://…`; avoid tracking parameters.
- Diagrams (Mermaid):
  - Use fenced code blocks with `mermaid`.
  - Keep diagrams simple; validate rendering locally.
- Math (KaTeX):
  - Inline `$…$`, block `$$…$$`.
  - Prefer ASCII math notation; limit advanced macros.
- Footnotes:
  - Standard Markdown-It footnotes are supported via `@mdit/plugin-footnote`.
- Admonitions:
  - Use VitePress containers: `::: tip|warning|info|danger` … `:::`.
- Assets:
  - Place under `src/assets/` (or locale-specific public folders).
  - Use relative paths from the Markdown file or absolute from site root.
  - Optimize images (PNG/JPEG/SVG); avoid large files.

## Navigation & Locales

- Update `.vitepress/config.mts` when:
  - Adding a new top-level page or section.
  - Changing the slug of an existing page.
- Keep `root`, `es`, and `cn` sidebars consistent where translations exist.
- Translation strategy:
  - Mirror English file paths under `src/es/` and `src/cn/`.
  - If untranslated, consider adding a placeholder page noting translation is welcome.

## Quality Checks

- Build and preview locally; ensure no console errors.
- Verify links resolve (except those explicitly ignored for `snippets/`).
- Confirm images render and paths are correct after build.
- Avoid breaking existing anchors; prefer additive edits.
- Keep PRs small and self-contained; include a brief rationale in the description.

## Security & Compliance

- Do not include secrets, API keys, or sensitive data in docs or examples.
- Link to official sources for specifications and policies.
- Follow the code of conduct and security practices outlined in `SECURITY.md`.

## Common Pitfalls

- Forgetting to update sidebars/nav when adding pages.
- Using relative links that break when pages move; prefer absolute site-root links.
- Large images slowing down pages; compress before adding.
- Build failures on Vercel due to Rollup native binary; set the env var as noted.
- Formatting only covers `src/*.md`; nested files may require manual Prettier runs.

## Useful References

- VitePress docs: https://vitepress.dev/
- Mermaid docs: https://mermaid.js.org/
- KaTeX docs: https://katex.org/docs/supported.html

If you are an AI agent proposing changes, include in your PR description:
- What changed and why (1–3 sentences)
- Affected pages and nav updates
- Local build verification steps
- Any i18n considerations

