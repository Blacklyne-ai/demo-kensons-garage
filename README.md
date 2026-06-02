# Kensons Garage — demo site

A premium 2027 redesign of [kensonsgarage.com](https://kensonsgarage.com) — a family-run car body
repair & accident repair specialist in a Brixton railway arch (Arch 2, 173 Ferndale Road, London
SW9 8BA). Brand line: **"This is Art."**

All original content (services, the 4-step process, the 3 real Google reviews, contact data, the
tagline) is preserved verbatim; the design is entirely new.

## Stack

- **Astro 5** — static build, **no SSR, no adapter** (outputs plain HTML to `/dist`).
- **Tailwind CSS v3.4** via `@astrojs/tailwind` (v4 is intentionally avoided — it breaks Cloudflare Pages builds).
- **@lucide/astro** for all icons. **Zero emojis.**
- Fonts: Archivo (display), Inter (body), Cormorant Garamond italic ("This is Art" accents), JetBrains Mono (numerals).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → /dist (static HTML, no _worker.js)
npm run preview
```

## Deploy — Cloudflare **Pages** (not Workers)

- Framework preset: **Astro**
- Build command: **`npm run build`**
- Build output directory: **`dist`**

## Structure

- `src/data/` — single source of truth: `site.ts` (facts, nav, hours, stats), `services.ts` (the 6
  services), `reviews.ts` (3 real Google reviews), `content.ts` (process, FAQs, about story).
- `src/components/` — Header (dark glass pill nav + live hours), Footer, Icon, PageHero,
  ServiceCard, ProcessSteps, ReviewsSection, ContactMethods, QuoteForm, OpeningHours, MapBlock,
  Faqs, CtaBand, FloatingCTA, CookieBanner, SchemaOrg.
- `src/pages/` — `index`, `about`, `services/index`, `services/[slug]` (6 detail pages), `gallery`
  (with `#faq`), `contact`, `privacy-policy`, `cookie-policy`, `terms`.
- `src/styles/global.css` — the design system (brand tokens, components). Brand palette: carbon
  `#1A1A1A`/`#0F0F0F`, red `#C8102E`, gold `#C9A961`.

See **[JUDGEMENT_CALLS.md](./JUDGEMENT_CALLS.md)** for items needing operator review (Saturday hours,
placeholder stat figures) and the design decisions made.
