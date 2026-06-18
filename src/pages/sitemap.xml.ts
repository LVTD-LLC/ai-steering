import { siteLinks } from '../data/resources';

export const prerender = true;

const pages = ['/', '/contributing/'];

export function GET() {
  const urls = pages
    .map((path) => {
      const loc = new URL(path, siteLinks.site).toString();
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  );
}
