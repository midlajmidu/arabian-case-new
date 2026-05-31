import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { categories } from "@/data/catalog";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Arabian Cases & Furniture UAE" },
      { name: "description", content: "Selected projects across flight cases, foam, crates, bags, exhibition and furniture for UAE & GCC clients." },
      { property: "og:title", content: "Portfolio" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }])) }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all");
  const items = categories.flatMap((c) => c.products.slice(0, 2).map((p) => ({ c, p })));
  const filtered = filter === "all" ? items : items.filter((i) => i.c.slug === filter);

  return (
    <div>
      <div className="bg-brand-navy text-white">
        <div className="container-page py-20 md:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Portfolio" }]} />
          <h1 className="mt-6 font-display text-4xl md:text-6xl">Manufacturing <span className="italic">portfolio</span></h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">A snapshot of recent builds — cases, covers, packaging and furniture.</p>
        </div>
      </div>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {[{ slug: "all", title: "All" }, ...categories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition",
                filter === c.slug ? "bg-brand-navy text-white border-brand-navy" : "bg-white border-brand-border text-brand-dark-gray hover:border-brand-navy",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ c, p }, i) => (
            <div key={`${c.slug}-${p.slug}`} className={cn("group relative overflow-hidden rounded-[18px] border border-brand-border bg-brand-soft", i % 5 === 0 ? "sm:row-span-2 aspect-[3/4]" : "aspect-[4/3]")}>
              <img src={c.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}