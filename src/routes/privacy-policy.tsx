import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      { name: "description", content: "How Arabian Cases & Furniture collects and uses your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-6 font-display text-4xl text-brand-navy">Privacy Policy</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-brand-text-secondary leading-relaxed">
        <p>We respect your privacy. This page describes what information we collect when you contact us or request a quote, and how we use it.</p>
        <p>We collect only the information you submit through our contact form (name, email, phone, company, message) and use it solely to respond to your enquiry.</p>
        <p>We do not sell or share your information with third parties. For any questions, contact us at {SITE.email}.</p>
      </div>
    </Section>
  ),
});
*** Add File: src/routes/terms-and-conditions.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${SITE.name}` },
      { name: "description", content: "Terms of service for orders placed with Arabian Cases & Furniture." },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: () => (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
      <h1 className="mt-6 font-display text-4xl text-brand-navy">Terms & Conditions</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-brand-text-secondary leading-relaxed">
        <p>By placing an order with Arabian Cases & Furniture you agree to these terms.</p>
        <p>Quotes are valid for 30 days. Standard payment terms are 50% deposit, 50% on delivery. Lead times begin once specifications are confirmed and deposit received.</p>
        <p>Custom manufactured goods are non-refundable once production has started. Defects must be reported within 7 days of delivery.</p>
      </div>
    </Section>
  ),
});
*** Add File: src/routes/products.tsx
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: () => <Outlet />,
});
*** Add File: src/routes/products.index.tsx
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
            <CategoryCard key={c.slug} slug={c.slug} title={c.title} short={c.short} image={c.image} alt={c.imageAlt} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </div>
  ),
});
*** Add File: src/routes/products.$category.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { categories, getCategory } from "@/data/catalog";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/$category")({
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
  const { category: c } = Route.useLoaderData();
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
*** Add File: src/routes/products.$category.$product.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct } from "@/data/catalog";
import { CheckCircle2, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const data = getProduct(params.category, params.product);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { category: c, product: p } = loaderData;
    return {
      meta: [
        { title: `${p.title} — ${c.title} UAE | Arabian Cases & Furniture` },
        { name: "description", content: p.description },
        { name: "keywords", content: `${p.title} UAE, ${p.title} Dubai, custom ${p.title.toLowerCase()}, ${c.imageName}` },
        { property: "og:title", content: `${p.title} — ${c.title}` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: c.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.category}/${params.product}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.category}/${params.product}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: c.title, url: `/products/${params.category}` },
          { name: p.title, url: `/products/${params.category}/${params.product}` },
        ])) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(p.faqs)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Product",
          name: p.title, description: p.description, image: c.image,
          brand: { "@type": "Brand", name: "Arabian Cases & Furniture" },
          category: c.title,
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", areaServed: "AE", priceCurrency: "AED" },
        }) },
      ],
    };
  },
  notFoundComponent: () => (<Section><h1 className="font-display text-3xl text-brand-navy">Product not found</h1></Section>),
  errorComponent: ({ error }) => (<Section><h1 className="font-display text-3xl text-brand-navy">Something went wrong</h1><p className="mt-3 text-brand-text-secondary">{error.message}</p></Section>),
  component: ProductPage,
});

function ProductPage() {
  const { category: c, product: p } = Route.useLoaderData();
  const [sent, setSent] = useState(false);
  const related = c.products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div>
      <div className="bg-brand-soft border-b border-brand-border">
        <div className="container-page py-6">
          <Breadcrumbs items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: c.title, to: "/products/$category", params: { category: c.slug } },
            { label: p.title },
          ]} />
        </div>
      </div>

      <Section className="!py-12 md:!py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-soft">
            <img src={c.image} alt={p.imageAlt} loading="eager" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">{c.title}</p>
            <h1 className="mt-3 font-display text-3xl md:text-5xl text-brand-navy">{p.title}</h1>
            <p className="mt-4 text-lg text-brand-text-secondary leading-relaxed">{p.tagline}</p>
            <p className="mt-4 text-brand-text-secondary leading-relaxed">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppButton message={`Hi, I'd like a quote for ${p.title}.`} />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-[10px] border border-brand-border bg-white px-3 py-2"><ShieldCheck className="h-4 w-4 text-brand-gold" /> UAE quality build</div>
              <div className="flex items-center gap-2 rounded-[10px] border border-brand-border bg-white px-3 py-2"><Truck className="h-4 w-4 text-brand-gold" /> GCC delivery</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Specifications" title="Built to spec" />
            <div className="rounded-[18px] border border-brand-border bg-white divide-y divide-brand-border">
              {p.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-3 gap-4 px-5 py-4 text-sm">
                  <span className="text-brand-text-secondary">{s.label}</span>
                  <span className="col-span-2 font-medium text-brand-navy">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Features" title="Why this build" />
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-brand-dark-gray"><CheckCircle2 className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />{f}</li>
              ))}
            </ul>
            <SectionHeader eyebrow="Applications" title="Where it fits" className="mt-12" />
            <div className="flex flex-wrap gap-2">
              {p.applications.map((a) => <span key={a} className="rounded-full border border-brand-navy/20 bg-white px-3 py-1 text-xs text-brand-navy">{a}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Inquiry" title="Request a custom quote" />
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-[18px] border border-brand-border bg-white p-6 space-y-4">
              <input required placeholder="Your name" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <input required type="email" placeholder="Email" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <input placeholder="Phone" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <textarea required placeholder={`Tell us about your ${p.title.toLowerCase()} requirements`} rows={4} className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <p className="text-sm text-[color:var(--brand-success)]">Thanks — we'll respond within 24 hours.</p>}
            </form>
          </div>
          <div>
            <SectionHeader eyebrow="Delivery" title="UAE & GCC logistics" />
            <div className="space-y-4 text-brand-text-secondary leading-relaxed">
              <p>Delivery across all seven emirates from our Dubai facility. ISPM-15 export crating available for international shipments.</p>
              <p>Standard production lead time 1–3 weeks; express timelines available for events and broadcast deadlines.</p>
              <p>On-site installation included for exhibition and furniture installations within the UAE.</p>
            </div>
            <SectionHeader eyebrow="Industries" title="Trusted by" className="mt-12" />
            <div className="flex flex-wrap gap-2">
              {p.industries.map((i) => <span key={i} className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs text-brand-navy">{i}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mx-auto max-w-3xl"><FAQ items={p.faqs} /></div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHeader eyebrow="Related" title={`More ${c.title.toLowerCase()}`} />
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$category/$product" params={{ category: c.slug, product: r.slug }} className="group overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden"><img src={c.image} alt={r.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="p-5"><h3 className="font-display text-lg text-brand-navy">{r.title}</h3></div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </div>
  );
}