# Cyandm Headless Frontend

This Next.js application mirrors the bespoke WordPress theme located in `../website12.14` so that the site can be deployed on a self-hosted VPS as a headless frontend. Every template and reusable component from the PHP theme now has an equivalent React implementation backed by mocked data structures.

## Project structure

```
src/
  app/                 # App Router pages mapped to WordPress templates
  components/          # React components translated from `templates/components`
  data/                # Fake content that mimics ACF option pages & CPTs
  lib/                 # Placeholders for future WordPress API clients
public/wp-assets/      # Copied media, icons and styles from the PHP theme
```

All mock content is annotated with comments that explain which ACF field, option page or custom post type supplies the real data in production.

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to explore the migrated experience. When the headless WordPress instance is available you can replace the fake data in `src/data` with live fetches from the REST API/GraphQL layer.

## Deployment notes

- GitHub Actions can build the project with `pnpm install --frozen-lockfile` followed by `pnpm build`.
- Environment variables for the WordPress API endpoint, auth token and analytics tools should be defined via the VPS secrets store.
- The `/under-construction` route mirrors the `cyn_under_construction()` logic from WordPress and can be toggled by a feature flag or build-time env.

## Data integration roadmap

1. Replace the exports in `src/data/global.ts` with fetchers that call the headless WordPress API.
2. Move form submissions ("Make a project" and contact) to API routes that proxy requests to the existing PHP endpoints or a new Node handler.
3. Re-enable Swiper interactions for pages such as About/Team once the API delivers slides and galleries.

Until the migration is fully wired, the fake data ensures the UI remains showcase-ready while keeping the original WordPress database read-only.
