# Kensons Garage — QA Report

Build: **PASS** · 14 static pages → `/dist` (HTML only, no `_worker.js`). Verified on the Astro dev
server at multiple viewports plus automated source/built-HTML scans. Date: June 2026.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Visual @ desktop / 768 / 375 | ✅ | Hero, services, reviews, service-detail, about, gallery, contact, legal all checked. `overflowX = 0` at 375 / 768 / 1280. |
| 2 | Navigation | ✅ | Floating dark-glass pill nav (`backdrop-blur`), Services dropdown, mobile hamburger + full-screen overlay. Both phones (07950 + 07730) and WhatsApp visible on desktop; sticky mobile bar = Call 07950 + WhatsApp. |
| 3 | Animations | ✅ | Counter animation verified (2,000+ / 98% / 5K+ / 10+), scroll-reveal (`.fade-in` IntersectionObserver), hover lifts/zoom on cards, `prefers-reduced-motion` honoured in `@layer base`. |
| 4 | Content | ✅ | All 6 services preserved; 4-step process verbatim; phones as `tel:` links; email `kensons173@gmail.com`; address Arch 2, 173 Ferndale Road, SW9 8BA; hours Mon–Fri 9–19, Sun closed (Sat flagged); 3 Google reviews verbatim incl. Sheldon ×2; "This is Art" featured. |
| 5 | Technical | ✅ | `npm run build` clean; `/dist` = 14 HTML pages, **no `_worker.js`**; **zero console errors** on every page tested. |
| 6 | SEO | ✅ | Unique titles; all meta descriptions ≤ 155 chars (max 154); Schema.org `AutoBodyShop`+`AutoRepair`+`LocalBusiness` with 3 reviews + aggregateRating; `FAQPage` schema on gallery; `sitemap-index.xml`; `robots.txt`; `hreflang=en-GB`; OG + Twitter cards. |
| 7 | Language | ✅ | UK English throughout; **"Maintainence" → "Maintenance"** corrected; £ GBP; UK phone format. |
| 8 | Compliance | ✅ | Privacy Policy, Cookie Policy, Terms present (UK GDPR / England & Wales); cookie consent banner (essential-only, localStorage). |
| 9 | Live status | ✅ | JS updates every 60s; Mon–Fri 09:00–19:00 → verified "Open now · Closes 7pm"; styled CSS dots (no emoji); Sat "by appointment", Sun closed. |
| 10 | Site mood | ✅ | Single light mood with dramatic near-black sections; **no dark/light toggle**. |
| 11 | Brand colours | ✅ | Carbon `#1A1A1A`/`#0F0F0F`, brand red `#C8102E`, champagne gold `#C9A961` — extracted from / confirmed by the real logo (gold car + red subtitle). |
| 12 | Logo | ✅ | Original Kensons wordmark (`/logo.png`, transparent) in header + footer (renders on dark); emblem (`/images/emblem.png`) as favicon. |
| 13 | No emoji | ✅ | Scanned all `src/` + `dist/` HTML — **0 emoji**. All icons via `@lucide/astro`; brand glyphs (IG/TikTok/WhatsApp) are inline SVG. |
| 14 | Mobile performance | ◐ | Asset-level: hero image optimised (≈218 KB, `fetchpriority=high`), all photos lazy-loaded + resized (7 MB PNGs → ~220 KB JPGs), no render-blocking JS, font `preconnect`, pure static HTML. A formal Lighthouse run is recommended on the live Pages URL (not run in this environment). |
| 15 | Accessibility | ✅ | `:focus-visible` rings, skip-link, descriptive `alt` text, `aria-label`s on icon buttons/nav, semantic headings, AA+ contrast (red-deep text AAA on white). Formal axe/Lighthouse audit recommended post-deploy. |
| 16 | Reviews source | ✅ | Only the 3 real Google reviews (Niels Busink · Ford S-Max, Lana Price · Lexus NX, Oliver Munns · MG), verbatim, gold 5-star icons; "Read all reviews on Google" link works. |
| 17 | Stats | ✅ (flagged) | Counters animate; values are **placeholders** flagged in JUDGEMENT_CALLS.md for the operator to confirm. |
| 18 | Docs | ✅ | QA_REPORT.md + JUDGEMENT_CALLS.md created. |

## Verified facts in built HTML
phones 07950 428 012 + 07730 273 608 · email kensons173@gmail.com · Arch 2, 173 Ferndale Road,
SW9 8BA · wa.me/447950428012 (pre-filled photo enquiry) · Instagram @kensons_garage · TikTok
@kensonsgarage · reviews Niels/Lana/Oliver · Sheldon · "No job too big or too small" · "This is Art".

## Pages (14)
`/` · `/about` · `/services` · `/services/{accident-repair, resprays, insurance-claims, servicing,
brakes-wheels, customisation}` · `/gallery` (+ `#faq`) · `/contact` · `/privacy-policy` ·
`/cookie-policy` · `/terms`

## Follow-ups for the operator
See **JUDGEMENT_CALLS.md** — Saturday opening hours (unconfirmed) and the placeholder trust-stat
figures both need confirmation before launch.
