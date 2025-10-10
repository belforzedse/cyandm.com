# Next.js Sync Plan

## Prioritized TODO Implementation Order

1. **Global Foundations**
   - Inject jQuery + ensure WordPress bundle loads without errors
   - Rebuild `<Preloader />` markup to mirror WordPress preloader sections
   - Align `<Header />`, `<Footer />`, `<MakeProject />`, `<Popup />` markup & interactions with theme scripts

2. **Shared Components**
   - Port bubble animation wrappers (primary + mini variants)
   - Normalize `ScrollDown`, breadcrumb, CTA buttons, icons for script parity

3. **Page Templates (high traffic)**
   - Home page (`front-page.php`) structure + Swiper-ready wrappers
   - Projects list (`projects.php`) with filters, bubbles, search bar bindings
   - Single project view with floating buttons & responsive pictures

4. **Experience Pages**
   - About page vertical Swiper rebuild (head, sections, team, footer slide)
   - Service detail pages (Marketing, SEO, UI-Design) vertical Swiper + slides
   - Update SEO/UI-Design page-specific content blocks

5. **Content & UX Enhancements**
   - Blog archive + single post: sidebar, breadcrumbs, comments scaffold
   - FAQ tabs/images parity, ensure categories wired to data
   - Breadcrumb component wired across routes

6. **Search & Interactivity**
   - Implement search route with unified results & filters
   - Hook popup/modal triggers, project filters, and scroll indicators to shared JS bundle

## Notes
- Leverage existing mock data in `src/data` while matching DOM structure/classes for CSS/JS reuse.
- Focus on 1:1 markup so `/wp-assets/css/compiled.css` + `scripts.bundle.js` behave identically.
- Replace placeholder Iranian copy with theme strings only when necessary for layout.
