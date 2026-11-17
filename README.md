# Guled Labs — marketing website

Static marketing site built with [Astro](https://astro.build). Fast, SEO-friendly, no server needed.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static files to dist/
npm run preview    # serve the built site
npm run check-links  # after build: checks every internal link and #anchor
```

Requires Node 20+.

## Where to change things

| What | File |
|---|---|
| Company name, phone, WhatsApp, email, address, sign-in URL, form endpoint | `src/config/site.ts` |
| Navigation (mega menu + mobile menu) and footer links | `src/config/site.ts` (`nav`, `footerColumns`) |
| Industry pages (fuel, retail, restaurants, pharmacies) | `src/data/industries.ts` |
| Product and integration pages | `src/data/catalog.ts` |
| About, careers, legal and other text pages | `src/data/pages.ts` |
| Sample receipts in the printer demo | `src/data/receipts.ts` |
| Colours, fonts, buttons | `src/styles/global.css` |
| Pricing | `src/pages/pricing.astro` |
| Domain (canonical URLs + sitemap) | `astro.config.mjs` and `public/robots.txt` |

Anything in `[SQUARE BRACKETS]` is a placeholder to replace before launch:
`grep -rn "\[" src/data src/config src/pages`

## Forms

The demo, contact and newsletter forms post to `site.formEndpoint`
(Formspree, Basin, Netlify Forms or your own endpoint). While it's empty
the forms validate and show a preview message but send nothing.

## Deploy

Any static host works. Build command `npm run build`, output folder `dist`.
- Cloudflare Pages / Netlify / Vercel: connect the repo, use the settings above.
- Your own server: copy `dist/` behind Nginx or Caddy.

## Structure

```
src/
  config/site.ts          company details, nav, footer
  data/                   page content (industries, products, integrations, pages, receipts)
  layouts/Base.astro      <head>, SEO tags, header, footer
  components/             Header (mega + mobile accordion), Footer, ReceiptPrinter,
                          OwnerDashboard, ContactForm, CatalogPage, Logo
  pages/                  routes: /, /industries/*, /products/*, /integrations/*,
                          /pricing, /demo, /contact, text pages, 404
  scripts/forms.ts        shared form submission
scripts/check-links.mjs   internal link checker
```

## Accessibility

Keyboard-operable menus (Escape closes, focus returns), visible focus, skip link,
labelled form fields with error messages, live regions for form status, and the
receipt animation respects "reduce motion".
