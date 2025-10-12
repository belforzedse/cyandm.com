# Repository Guidelines

## Project Structure & Module Organization
The Next.js 15 application lives in `cyan/`. Route segments and shared layouts sit under `cyan/src/app/`, with page-level styling collected in `globals.css` and `wordpress-layout.css`. Reusable UI is grouped in `cyan/src/components/`, mock content that mirrors the WordPress install stays in `cyan/src/data/`, and custom fonts load from `cyan/src/assets/fonts/`. Static imagery, SVGs, and migrated WordPress assets belong in `cyan/public/`, while historical reference material remains in `website12.14/` and `wordpress-pages/`. Treat those directories as read-only snapshots.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` before your first run. Use `pnpm dev` for the local Turbopack server, `pnpm build` for a production bundle, and `pnpm start` to serve the compiled output. Run `pnpm lint` to execute the flat-config ESLint rules; add `--fix` only when you have reviewed the diff.

## Coding Style & Naming Conventions
TypeScript is enforced with strict mode; keep imports on the `@/` alias where possible. Follow the established two-space indentation and favor functional React components written in PascalCase (e.g., `HeaderBar`). Compose classes with Tailwind utilities and `clsx`, placing any bespoke styles in the scoped files that accompany a route. Because `@next/next/no-img-element` is disabled for parity with WordPress, choose `<img>` only when `next/image` cannot mirror the original markup.

## Testing Guidelines
A formal automated suite is not yet wired in, so linting plus targeted manual QA is mandatory. Smoke-test the landing, blog, and contact flows in Farsi to confirm navigation, animations, and modals behave as expected. When introducing automated tests, co-locate them under `cyan/src/__tests__/` with names such as `component-name.test.tsx` and document any new tooling in `docs/`.

## Commit & Pull Request Guidelines
History favors short, imperative summaries (for example, `Align hero spacing`). Group related changes per commit and include UI captures whenever you touch layout or animation. Pull requests need a concise description, confirmation of `pnpm lint` and manual checks, and links to the tracking issue or design reference.

## Legacy Content & Data Sync
`docs/` records the mapping between the WordPress theme and this Next.js build; update it whenever you adjust data sourcing. If you modify `cyan/src/data/global.ts`, keep the mocked Farsi strings aligned with the original WP fields noted in `website12.14/`. Coordinate with the WordPress team before syncing live content to avoid overwriting mirrored assets.

