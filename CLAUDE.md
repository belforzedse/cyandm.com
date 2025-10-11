# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a **dual-codebase repository** containing both the legacy WordPress theme and its Next.js headless migration:

- **`website12.14/`** – Production WordPress theme (PHP, ACF, Tailwind CSS, esbuild)
- **`cyan/`** – Next.js 15 headless frontend (React 19, TypeScript, Tailwind v4, Turbopack)
- **`docs/`** – Architecture analysis and migration planning documents

The Next.js application mirrors the WordPress theme's templates and components using mocked data that replicates the ACF field structure.

## Development Commands

### Next.js Frontend (`cyan/`)

```bash
cd cyan
pnpm install
pnpm dev         # Start dev server with Turbopack at localhost:3000
pnpm build       # Production build with Turbopack
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

### WordPress Theme (`website12.14/`)

```bash
cd website12.14
npm install      # Install build dependencies (sass, postcss, esbuild, tailwindcss)

# Development watchers
npm run w-scss       # Watch SCSS compilation
npm run w-tailwind   # Watch Tailwind CSS compilation
npm run w-js         # Watch JS bundle compilation

# Production builds
npm run build-css    # Compile and minify CSS
npm run build-js     # Bundle and minify JavaScript
```

The WordPress theme compiles:
- SCSS → `assets/css/compiled.css` → `assets/css/final.css` (with autoprefixer)
- Tailwind → `assets/css/final-tailwind.css`
- JS modules → `assets/js/dist/scripts.bundle.js` (dev) or `scripts.bundle.min.js` (prod)

## Architecture Overview

### WordPress Theme (`website12.14/`)

**Entry Point:** `functions.php` bootstraps the theme by loading classes and helpers from `inc/`:
- `inc/classes/` – Core classes (theme init, ACF config, AJAX handlers, API integrations)
- `inc/functions/` – Helper functions prefixed with `cyn_` (rendering, queries, customization)
- `inc/acf/` – Advanced Custom Fields definitions and Gutenberg blocks
- `inc/libs/` – Third-party integrations (Swiper, breadcrumbs, Telegram/HubSpot)

**Templates:** All page templates live in `templates/`:
- `templates/*.php` – Page-level templates (front-page, about, projects, services, etc.)
- `templates/pages/` – Nested partials organized by page slug (e.g., `front-page/content/projects.php`)
- `templates/components/` – Reusable UI components (header, footer, mobile menu, breadcrumb)
- `templates/components/card/` – Card components for projects, services, blog posts, FAQs
- `templates/archive/` – Archive views for custom post types
- `templates/single/` – Single views for custom post types

**Data Model:**
- Custom post types: `project`, `service`, `faq`, `team_member`, `post`, `employ`
- ACF option pages provide global settings (navigation, contact details, hero copy, CTA buttons)
- ACF flexible content fields drive page-specific modules (e.g., `about_us_section`, `marketing_sections`, `landing_builder`)

**Assets:**
- `assets/scss/` – Source stylesheets compiled to `assets/css/`
- `assets/js/` – JavaScript modules bundled with esbuild
- `assets/fonts/peyda/` – Persian web font (PeydaWebFaNum, weights 100-900)
- `assets/imgs/` – Images and icons

### Next.js Frontend (`cyan/`)

**Structure:**
```
src/
  app/              # Next.js App Router pages (WordPress template equivalents)
  components/       # React components translated from templates/components
  data/             # Mock data mirroring ACF structure (types.ts + global.ts)
  lib/              # Reserved for future WordPress API client
  assets/fonts/     # Local fonts (Peyda)
public/
  wp-assets/        # Copied assets from WordPress theme (CSS, JS, images)
  images/           # Static images for mock content
```

**Pages Map WordPress Templates:**
- `app/page.tsx` → `templates/front-page.php`
- `app/about/page.tsx` → `templates/about.php` / `templates/new-about.php`
- `app/projects/page.tsx` → `templates/projects.php`
- `app/projects/[slug]/page.tsx` → `templates/single/project.php`
- `app/services/page.tsx` → `templates/archive/service.php`
- `app/services/[slug]/page.tsx` → Service detail pages (marketing, seo, ui-design)
- `app/blog/page.tsx` → `templates/archive/post.php`
- `app/blog/[slug]/page.tsx` → `templates/single/post.php`
- `app/contact/page.tsx` → `templates/contact-us.php`
- `app/faq/page.tsx` → `templates/faq.php`
- `app/team/page.tsx` → `templates/team.php`
- `app/under-construction/page.tsx` → `templates/under-construction.php`

**Data Layer (`src/data/`):**
- `types.ts` defines TypeScript types for all content models
- `global.ts` exports mocked data arrays and objects that replicate the structure returned by WordPress ACF fields
- All mock content includes comments explaining which ACF field or option page provides the real data

**Key Components:**
- `Header.tsx`, `Footer.tsx` – Global layout shell
- `Preloader.tsx` – Loading animation (mirrors WordPress preloader)
- `Hero.tsx`, `PageHero.tsx` – Hero sections
- `Bubbles.tsx`, `DesktopHeroClock.tsx`, `BottomFire.tsx` – Animated elements
- `MakeProject.tsx`, `Popup.tsx`, `ModalProvider.tsx` – Modal system for project inquiries
- `ScrollDown.tsx`, `Breadcrumb.tsx` – Navigation aids
- Service components in `components/services/` – Vertical slide layouts for service pages

**Styling:**
- Tailwind CSS v4 configured in `tailwind.config.ts`
- `app/globals.css` – Next.js global styles
- `app/wordpress-layout.css` – WordPress-specific styles imported from theme

## Data Integration Roadmap

The Next.js frontend currently uses **static mock data** from `src/data/global.ts`. When the headless WordPress API is ready:

1. Replace exports in `src/data/global.ts` with API fetchers
2. Implement WordPress REST API or GraphQL client in `src/lib/`
3. Move form submissions (contact, "Make a project") to Next.js API routes that proxy to WordPress PHP endpoints
4. Wire dynamic content (navigation, option pages, CPT queries) to live API calls
5. Re-enable interactive components (Swiper galleries, filters, search) once API delivers data

Until then, the mock data ensures the UI remains showcase-ready while keeping the WordPress database read-only.

## Migration Context

The Next.js app is a **1:1 VISUAL replica** of the WordPress theme, designed to:
- **CRITICAL**: Match WordPress design EXACTLY - every pixel, animation, layout must be identical
- Use modern Next.js/React/TypeScript instead of WordPress PHP
- Maintain WordPress CSS classes and structure for visual parity
- Enable deployment as a headless frontend on a VPS while WordPress serves as a content API

**DO NOT** copy WordPress PHP files or SCSS. **DO** recreate the exact same visual output using Next.js components.

Reference `docs/website12.14-analysis.md` for detailed WordPress theme architecture and `docs/next-sync-plan.md` for prioritized implementation order.

## Design Requirements

When building/updating pages:
1. Open the corresponding WordPress page HTML in `wordpress-pages/`
2. Analyze the exact DOM structure, classes, and content
3. Rebuild in React/Next.js matching the EXACT visual output
4. Use the WordPress CSS (`wordpress-layout.css`) which is already imported
5. Test side-by-side with WordPress to ensure 1:1 visual match

## Important Notes

- **RTL Layout:** The site is in Persian (Farsi) with right-to-left text direction
- **Font:** Peyda (PeydaWebFaNum) is the primary typeface, loaded as a local Next.js font in `app/layout.tsx`
- **Asset Paths:** Next.js components reference `/images/` for static assets; WordPress theme uses `assets/imgs/`
- **Custom Post Types:** When working with WordPress, remember the theme defines multiple CPTs registered in `inc/classes/cyn-register.php`
- **AJAX Handlers:** WordPress form submissions use `inc/classes/cyn-ajax.php`; Next.js will need API routes to replicate this
- **ACF Flexible Content:** Many WordPress pages use flexible content builders that render nested partials from `templates/pages/`

## Git Workflow

- Main branch: `main`
- Recent work focused on restoring WordPress-style homepage and fixing layout issues
- Development happens in feature branches merged via pull requests

## Common Tasks

When asked to work on the **WordPress theme**:
1. Edit PHP templates in `templates/`
2. Modify SCSS in `assets/scss/` and run `npm run w-scss` or `build-css`
3. Update JavaScript in `assets/js/` and run `npm run w-js` or `build-js`
4. ACF field definitions are in `inc/acf/` and `inc/classes/cyn-acf-fields.php`

When asked to work on the **Next.js frontend**:
1. Edit React components in `src/components/` or pages in `src/app/`
2. Update mock data in `src/data/global.ts` (remember to add comments explaining ACF field mappings)
3. Add new TypeScript types to `src/data/types.ts`
4. Run `pnpm dev` to test changes with Turbopack hot reload
5. Match DOM structure and CSS classes from WordPress templates for style consistency

When asked to **migrate a WordPress template to Next.js**:
1. Read the WordPress template from `website12.14/templates/`
2. Identify ACF fields and data sources
3. Create corresponding TypeScript types in `src/data/types.ts`
4. Add mock data to `src/data/global.ts` with comments explaining ACF mappings
5. Build React component with matching DOM structure and class names
6. Test with `pnpm dev` to ensure styling works with WordPress CSS

## Related Documentation

- WordPress theme analysis: `docs/website12.14-analysis.md`
- Next.js sync plan: `docs/next-sync-plan.md`
- WordPress README: `website12.14/README.md`
- Next.js README: `cyan/README.md`
