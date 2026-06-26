import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { CategoryCard } from "@/components/site/CategoryCard";
import { CTABanner } from "@/components/site/CTABanner";
import { categories } from "@/data/catalog";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Flight Cases, Foam, Crates, Bags, Exhibition & Furniture | UAE" },
      { name: "description", content: "Our full product range: flight cases, foam inserts, hard cases, shipping crates, custom bags, exhibition stands and bespoke furniture." },
      { name: "keywords", content: "flight cases UAE, foam inserts Dubai, shipping crates, exhibition stands UAE, office furniture Dubai" },
      { property: "og:title", content: "Products" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }])) }],
  }),
  component: () => (
    <div>
      <div className="bg-brand-navy text-white">
        <div className="container-page py-20 md:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
          <h1 className="mt-6 font-display text-4xl md:text-6xl">Our <span className="italic">product</span> range</h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">Seven manufacturing categories. One UAE facility. End-to-end control.</p>
        </div>
      </div>
      <Section>
        <SectionHeader eyebrow="Categories" title="Browse by category" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} slug={c.slug} title={c.title} short={c.short} description={c.description} image={c.image} alt={c.imageAlt} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </div>
  ),
});