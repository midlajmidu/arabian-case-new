import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/catalog";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/about", "/contact", "/portfolio", "/products",
          "/privacy-policy", "/terms-and-conditions",
          ...categories.map((c) => `/products/${c.slug}`),
          ...categories.flatMap((c) => c.products.map((p) => `/products/${c.slug}/${p.slug}`)),
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
