# Ironbark & Ivy Hair Studio — demo salon website

> **This is a demo.** Ironbark & Ivy is a **fictional** hair salon. The site is a portfolio concept by
> [JS Web Services](https://js-web-services.onrender.com) showing what a local salon website could look like.
> There is no real business, address, phone number, team, reviews or booking system behind it.

## Stack

- [Astro](https://astro.build) (static output to `dist/`)
- Tailwind CSS v4 via `@tailwindcss/vite`
- `@astrojs/sitemap`
- Fraunces (self-hosted via `@fontsource-variable/fraunces`) + system sans-serif
- No external CDNs, no trackers; a few lines of vanilla JS (mobile menu, demo form)

Business details (name, hours, services, team, FAQ, site URL) live in **`src/site.config.ts`**.
Replace `siteUrl` (`https://example.com`) with the real deployed URL — canonical, OG, sitemap and robots.txt all use it.

## Commands

```bash
npm ci            # install exact dependencies
npm run dev       # local dev server
npm run build     # build static site to dist/
npm run preview   # preview the built site
npm run og:png    # regenerate public/og-image.png (1200x630) from public/og-image.svg with sharp
```

## Deploy (Render static site)

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`

## Notes

- The booking form never submits anywhere (no `action`); JS shows a "this is a demo" message instead.
  A real site would link "Book now" to the salon's booking platform (Fresha, Timely, etc.).
- Gallery images in `public/gallery/` and all illustrations are original SVGs made for this demo.
