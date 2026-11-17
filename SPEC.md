# Spec: "Ironbark & Ivy Hair Studio" — DEMO salon website (concept by JS Web Services)

Fictional business. This is a portfolio demo built by JS Web Services (https://js-web-services.onrender.com) to show what a local salon site could look like. It must be obviously a demo:
- A slim, always-visible banner at the very top on every page: "Demo website — Ironbark & Ivy is a fictional salon. Concept by JS Web Services." with a link to https://js-web-services.onrender.com.
- Footer repeats that it is a demo/concept, no real business.
- Prices labelled "Example prices" on the services section.
- No real phone numbers, no real street address, no real emails. Use clearly fake placeholders like "07 0000 0000 (demo)" only if needed; prefer not showing a phone at all — instead show "Book online" CTA. Location: "Somewhere in South-East Queensland (demo)". Do not name any real business.
- Keep it indexable. Include JSON-LD `HairSalon` whose description says it is a fictional demo; omit address and telephone; areaServed "Brisbane, QLD" only.

## Stack
Astro (latest) + Tailwind CSS v4 via @tailwindcss/vite, static output to dist/, @astrojs/sitemap. No external CDNs, no Google Fonts CDN (system font stack or self-hosted via @fontsource is fine), no trackers. Minimal vanilla JS. `npm ci && npm run build` must pass. Put business details in src/site.config.ts. siteUrl placeholder https://example.com (will be replaced).

## Look
Polished, mobile-first, warm and modern: e.g. deep eucalyptus/olive green + warm cream + soft blush/terracotta accent; elegant serif headings (self-hosted via @fontsource, e.g. Fraunces or Playfair) + system sans body. Generous whitespace. Must look great at 360/390 px and 1440 px.

## Pages / sections
Home (`/`):
1. Header: logo wordmark, nav (Services, Gallery, Team, Hours, Book), "Book now" button; mobile menu via details/summary.
2. Hero: headline (e.g. "Hair that feels like you."), subline, CTA "Book an appointment" → #book, secondary "View services". Hero visual: a tasteful SVG illustration or abstract gradient/shape art (no stock photos of real people needed).
3. Services & example prices: grouped cards — Cuts (Women's cut & blow-dry from $85, Men's cut $45, Kids (under 12) $30, Fringe trim $15), Colour (Root touch-up from $95, Full colour from $130, Balayage from $240, Toner $45), Styling (Blow-dry $55, Up-style from $95, Bridal trial from $120), Treatments (Keratin smoothing from $280, Bond-repair treatment $40). Label "Example prices (AUD) — demo only".
4. Gallery: 6-8 tiles. Use locally generated SVG illustrations/abstract art files stored in public/gallery/ (hair silhouettes, swatches, scissors, gradients) — all original, so free to use. Each with alt text and caption. Lazy loading, responsive grid, aspect-ratio boxes.
5. Team: 3 fictional stylists with illustrated SVG avatar initials (no real photos), short bios. Mark as fictional.
6. Reviews: 3 sample quotes clearly marked "Sample reviews (demo)".
7. Hours & location: hours table (Tue–Fri 9–5:30, Thu late till 8, Sat 8–3, Sun–Mon closed), map placeholder (a styled SVG/CSS map-like box with a pin and text "Map placeholder — a Google Map would go here", no external embed), "Free street parking" note.
8. Book (id="book"): enquiry/booking form (name, email, phone optional, service select, preferred day/time, notes). It must NOT send anywhere: no action attribute; on submit, prevent default with tiny JS and show an inline message "This is a demo — no booking was sent. On a real site this would go to the salon's booking system." Also a note about how a real site would link to Fresha/Timely/etc. booking.
9. FAQ (4 Qs, details/summary).
10. Footer: demo disclaimer, "Website concept by JS Web Services" link, © year.
Plus `404` page.

## Quality
- SEO: title, meta description, canonical, OG + Twitter tags, og-image (create public/og-image.svg AND a PNG 1200x630 via sharp script `npm run og:png`), favicon.svg, robots.txt with sitemap, theme-color, lang en-AU.
- Accessibility: skip link, semantic landmarks, one h1, labelled inputs, focus-visible styles, WCAG AA contrast, tap targets >=44px, prefers-reduced-motion respected, alt text. Watch Astro/JSX whitespace: inside {expr && (...)} or .map blocks, add {' '} between text and inline elements so words don't run together.
- Performance: aim Lighthouse 100s. No layout shift (width/height on images).
- README.md: what this is (demo), run/build commands, deploy (Render static: build `npm ci && npm run build`, publish `dist`).
- .gitignore node_modules, dist, .astro.
Replace the existing README.md content (it only contains "# salon").
Do not run git commands. Do not deploy.
