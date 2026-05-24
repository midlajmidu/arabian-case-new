import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { categories, getCategory, type Category } from "@/data/catalog";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const c = loaderData.category;
    return {
      meta: [
        { title: `${c.title} UAE — Custom Manufacturing | Arabian Cases & Furniture` },
        { name: "description", content: c.description },
        { name: "keywords", content: `${c.title} UAE, ${c.title} Dubai, custom ${c.title.toLowerCase()}, ${c.imageName}` },
        { property: "og:title", content: `${c.title} — Arabian Cases & Furniture` },
        { property: "og:description", content: c.description },
        { property: "og:image", content: c.image },
        { property: "og:url", content: `/products/${params.category}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.category}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: c.title, url: `/products/${params.category}` },
        ])) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(c.faqs)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: c.title, description: c.description, areaServed: "AE",
        }) },
      ],
    };
  },
  notFoundComponent: () => (
    <Section><h1 className="font-display text-3xl text-brand-navy">Category not found</h1></Section>
  ),
  errorComponent: ({ error }) => (
    <Section><h1 className="font-display text-3xl text-brand-navy">Something went wrong</h1><p className="mt-3 text-brand-text-secondary">{error.message}</p></Section>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category: c } = Route.useLoaderData() as { category: Category };
  const others = categories.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <div>
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <img src={c.image} alt={c.imageAlt} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />
        <div className="container-page relative py-20 md:py-28">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: c.title }]} />
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">{c.short}</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl max-w-3xl">{c.tagline}</h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">{c.description}</p>
        </div>
      </div>

      <Section>
        <SectionHeader eyebrow="Range" title={`${c.title} we manufacture`} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$category/$product"
              params={{ category: c.slug, product: p.slug }}
              className="group overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                <img src={c.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{p.tagline}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy">View details <ArrowRight className="h-3.5 w-3.5" /></p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Features" title="What sets our build apart" />
            <ul className="space-y-3">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-brand-dark-gray"><CheckCircle2 className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Applications & Industries" title="Where these are used" />
            <div className="grid gap-3">
              {c.applications.map((a) => (
                <div key={a} className="rounded-[10px] border border-brand-border bg-white px-4 py-3 text-sm text-brand-dark-gray">{a}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.industries.map((i) => (
                <span key={i} className="rounded-full border border-brand-navy/20 bg-white px-3 py-1 text-xs text-brand-navy">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title={`${c.title} — frequently asked`} align="center" />
        <div className="mx-auto max-w-3xl"><FAQ items={c.faqs} /></div>
      </Section>

      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Related" title="Explore other categories" />
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/products/$category" params={{ category: o.slug }} className="group overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden"><img src={o.image} alt={o.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-5"><h3 className="font-display text-lg text-brand-navy">{o.title}</h3></div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}