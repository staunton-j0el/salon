// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { site } from './src/site.config.ts';

export default defineConfig({
  site: site.siteUrl,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
