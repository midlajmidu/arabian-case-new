## Goal

Build a production-ready, premium corporate website for Arabian Cases & Furniture — 42 pages, full SEO/schema, consistent design system, reusable components.

This is a very large build (42 routes + shared sections + SEO + schema + FAQs + breadcrumbs + images). To keep quality high and avoid a broken half-build, I'll ship it in **4 phases**, each phase fully working and reviewable in the preview.

## Design system (applied globally first)

- Tokens in `src/styles.css` (oklch): navy `#182453`, light gray `#ABABAB`, dark gray `#58595B`, soft bg `#F8F9FA`, border `#E6E6E6`, gold accent `#D4AF37`, success, text primary/secondary.
- Fonts: Playfair Display (headings), Poppins (body).
- Radii: card 18px, button 10px, generic 16px. Container 1280px, section spacing 100px, navbar 90px.
- Reusable primitives: `Container`, `Section`, `SectionHeader`, `Breadcrumbs` (with JSON-LD), `FAQ` (with JSON-LD), `CTABanner`, `WhatsAppButton`, `SEO` helper for `head()`, `Schema` helpers (Organization, LocalBusiness, Product, Service, FAQ, Breadcrumb, Website).
- Shared layout in `__root.tsx`: Navbar (90px, logo + nav + WhatsApp CTA) + Outlet + Footer.
- Data-driven catalog: a single `src/data/catalog.ts` defines all categories + products with slug, title, description, features, applications, industries, FAQs, images. All category and product pages render from this — one route template each, dynamic params.

## Routing strategy

To avoid 42 hand-written route files, use TanStack dynamic segments:

```
/                                       index.tsx
/about                                  about.tsx
/contact                                contact.tsx
/portfolio                              portfolio.tsx
/privacy-policy                         privacy-policy.tsx
/terms-and-conditions                   terms-and-conditions.tsx
/products                               products.tsx
/products/$category                     products.$category.tsx     (7 categories)
/products/$category/$product            products.$category.$product.tsx  (28 products)
```

Each dynamic route reads from `catalog.ts`, generates SEO + schema + breadcrumbs + FAQs dynamically. notFoundComponent on each.

## Phases

**Phase 1 — Foundation & Home (this turn)**
- Design tokens + fonts in `styles.css`.
- Root layout: Navbar, Footer, sitewide SEO defaults + Organization/Website JSON-LD.
- Reusable components: Container, Section, Breadcrumbs, FAQ, CTABanner, WhatsAppButton, Slide-based Hero.
- `catalog.ts` with all 7 categories and 28 products (titles, descriptions, features, applications, industries, FAQs).
- Home page: all 12 sections (Hero slider w/ 6 slides + arrows/indicators/autoplay, Intro, Priority Services, Why Choose Us, Industries, Process, Stats, Featured Products, Portfolio Preview, UAE Coverage, CTA Banner).
- Generate hero slider images (6).

**Phase 2 — Static pages**
- About, Contact (form + map + WhatsApp + FAQ), Portfolio (filter + masonry), Privacy, Terms.
- Page-specific SEO + schema.

**Phase 3 — Products hub + 7 category pages**
- `/products` overview with category grid.
- `/products/$category` template: Hero, Overview, Gallery, Features, Applications, Industries, Related, FAQ (6+), Quote, CTA.
- Per-category hero images.

**Phase 4 — 28 product detail pages + sitemap/robots**
- `/products/$category/$product` template: Hero, Overview, Gallery, Specs, Features, Applications, Industries, Related, Inquiry form, Delivery info, FAQ (6+), CTA.
- Dynamic `sitemap.xml` server route enumerating all 42 URLs.
- `robots.txt`.
- Product schema JSON-LD per page.

## Image strategy

Generating 40+ unique premium images would be slow and costly. Approach:
- Generate ~10 high-quality hero/category images (1 per category + 3 home hero variations reused).
- Product detail pages reuse the parent category image with a different framing/overlay + descriptive alt text. SEO image names per spec (`flight-cases-uae.jpg`, etc.).
- If you want every single product to have its own unique generated image, say so and I'll add it in Phase 4 (adds time/cost).

## Trade-offs to confirm

1. **Contact form** — submits to a `mailto:` link unless you want Lovable Cloud enabled to actually store/email submissions. Say the word and I'll enable Cloud + wire it up.
2. **WhatsApp number, phone, email, address** — I'll use placeholders (`+971 50 000 0000`, `info@arabiancases.ae`, Dubai address) you can replace, unless you provide real ones now.
3. **Unique product images** — default is shared category images with unique alt/SEO names. Confirm if you want all 28 generated.

## Deliverable per phase

After each phase the site builds, renders, and is reviewable in the preview. You can request changes between phases.

Approve and I'll start Phase 1.