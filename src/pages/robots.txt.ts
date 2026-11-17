import type { APIRoute } from 'astro';
import { site } from '../site.config';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site.siteUrl).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
