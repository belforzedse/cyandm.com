# Website 12.14 WordPress Theme Overview

The `website12.14` directory contains the bespoke WordPress theme that currently powers the production site. The code base is organised into conventional WordPress entry points (e.g. `header.php`, `footer.php`, `404.php`) and a large `templates/` directory that houses the bulk of the presentation layer and page builders.

## Theme Bootstrap

- **`functions.php`** wires the theme together. It registers navigation menus, enqueues the compiled Tailwind bundle located in `assets/css/final-tailwind.css`, defines custom post types (`project`, `service`, `faq`, `team_member`, etc.), configures theme support (featured images, custom logo) and declares numerous helper functions exposed under the `cyn_` prefix.
- **`inc/`** is split into `functions/`, `classes/`, `libs/` and `acf/`. These folders hold:
  - bespoke Gutenberg blocks and Advanced Custom Fields (ACF) definitions under `inc/acf`.
  - procedural helpers for formatting, shortcodes and WP_Query wrappers in `inc/functions`.
  - integrations (e.g. Telegram, HubSpot) and the AJAX handlers that power the “Make a project” modal in `inc/classes`.
  - third-party helpers (Swiper configuration, breadcrumbs) in `inc/libs`.

## Presentation Layer

- **Layout shell** – `header.php` and `footer.php` render the global chrome. They both depend heavily on option-page ACF fields:
  - Header pulls `phone_num_1`, `mobile_hero_*` fields from the front page to render the hero CTA, navigation and the `templates/components/mobile-menu.php` drawer.
  - Footer reads option values such as `address_text`, `address_map`, `phone_number*` and social links to display contact information.
- **Templates** – Every public-facing page is located under `templates/`. Important ones include:
  - `templates/front-page.php`: orchestrates the homepage experience by loading partials from `templates/pages/front-page/`. These partials are broken down into Swiper powered sections (projects carousel, customer logos, services grid, blog teaser, FAQ accordions, etc.). Each section sources its content through dedicated WP_Query instances that target the respective custom post types and ACF repeaters.
  - `templates/projects.php`, `templates/marketing.php`, `templates/seo.php`, `templates/ui-design.php`, `templates/landing.php`: vertical landing pages that pull modular blocks defined in `templates/pages/{slug}` directories.
  - `templates/about.php`, `templates/about-us_first.php`, `templates/new-about.php`, `templates/team.php`, `templates/contact-us.php`: content-heavy pages composed as multi-slide Swiper carousels driven by grouped ACF fields (`about_us_section`, `team_members`, `contact_info` etc.).
  - `templates/archive/*.php` and `templates/single/*.php`: dedicated archive and single views for `project`, `post`, `faq`, `service` and `employ` post types. These files use shared components from `templates/components/card/` to render cards, breadcrumb trails, comment forms, sidebars and related content sections.
- **Components** – `templates/components/` contains reusable building blocks:
  - `card/` for project, service, blog and testimonial cards.
  - `popup.php` + `templates/components/card/make-project.php` implement the "Make a project" modal and lead form.
  - `breadcrumb.php`, `comment.php`, `sidebar-post.php`, `sideBarComment.php`, `mobile-menu.php` deliver supporting UX elements reused across archives and single views.

## Assets & Styling

- The visual layer is driven by Tailwind CSS compiled into `assets/css/final-tailwind.css` and supporting SCSS partials under `assets/scss/`.
- JavaScript behaviour (Swiper, modals, form submission) lives inside `assets/js/` (included via `functions.php`).
- Fonts, icons and imagery are colocated inside `assets/fonts/` and `assets/imgs/`.

## Data Model

The theme relies on a combination of:

- **Custom Post Types** for Projects, Services, FAQs, Testimonials, Case Studies, Blog posts.
- **Taxonomies** and **ACF option pages** for global settings such as navigation menus, address details, hero copy, CTA buttons, landing page sections and slider content.
- **ACF flexible content** fields to assemble page-specific modules (e.g. `about_us_section`, `marketing_sections`, `landing_builder`). These are rendered by PHP partials nested in `templates/pages/**`.

This map serves as the blueprint for the Next.js migration. Each template and reusable component from `website12.14` is mirrored inside the `cyan` app as React components backed by fake data that mimics the structure currently delivered by WordPress + ACF.
