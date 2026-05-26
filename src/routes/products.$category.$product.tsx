import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct, type Category, type Product } from "@/data/catalog";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Plane,
  Briefcase,
  Headphones,
  Shield,
  Factory,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

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

const industryIcons: Record<string, typeof Plane> = {
  Aviation: Plane,
  Broadcasting: Headphones,
  Events: Briefcase,
  Corporate: Briefcase,
  Medical: Shield,
  Defence: Shield,
  "Oil & Gas": Factory,
  Manufacturing: Factory,
  Logistics: Truck,
  Construction: Factory,
  Retail: Briefcase,
};

function ProductPage() {
  const { category: c, product: p } = Route.useLoaderData() as { category: Category; product: Product };
  const [activeImg, setActiveImg] = useState(0);
  const gallery = [c.image, c.image, c.image, c.image];
  const features = p.features.slice(0, 6);
  const scrollGallery = (dir: 1 | -1) => setActiveImg((i) => (i + dir + gallery.length) % gallery.length);

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

      {/* SECTION 1 — Hero */}
      <Section className="!py-14 md:!py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="relative overflow-hidden rounded-[22px] border border-brand-border bg-brand-soft shadow-sm">
            <img src={c.image} alt={p.imageAlt} loading="eager" className="aspect-[4/3] w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy backdrop-blur">
              Made in UAE
            </span>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">{c.title}</p>
            <h1 className="mt-3 font-display text-brand-navy">{p.title}</h1>
            <p className="mt-5 text-base md:text-lg text-brand-text-secondary leading-relaxed">{p.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-navy/15 transition hover:bg-brand-navy-hover hover:scale-[1.02]">
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppButton message={`Hi, I'd like a quote for ${p.title}.`} />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — Key Features */}
      <Section className="bg-brand-soft !py-16 md:!py-20">
        <SectionHeader eyebrow="Key Features" title="Engineered for professional use" align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f} className="group rounded-[18px] border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition group-hover:bg-brand-navy group-hover:text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="mt-4 font-medium text-brand-navy leading-snug">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — Description (two-column) */}
      <Section className="!py-16 md:!py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Product Description</p>
            <h2 className="font-display text-brand-navy">Built in our Dubai facility</h2>
            <div className="mt-5 space-y-4 text-brand-text-secondary leading-relaxed">
              <p>{p.description}</p>
              <p>
                Each {p.title.toLowerCase()} is fully customisable — dimensions, internal layout, finish and branding
                tailored to your application for an exact fit with your equipment and brand standards.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-brand-border">
            <img src={c.image} alt={p.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
          </div>
        </div>
      </Section>

      {/* SECTION 4 — Applications / Industries (icons, not cards) */}
      <Section className="bg-brand-soft !py-16 md:!py-20">
        <SectionHeader eyebrow="Applications" title="Industries we serve" align="center" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-6 max-w-4xl mx-auto">
          {p.industries.map((i) => {
            const Icon = industryIcons[i] ?? Briefcase;
            return (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-brand-border bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-brand-navy">{i}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SECTION 5 — Gallery slider */}
      <Section className="!py-16 md:!py-20">
        <SectionHeader eyebrow="Gallery" title="Product gallery" align="center" />
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] border border-brand-border bg-brand-soft">
          <img src={gallery[activeImg]} alt={p.imageAlt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-opacity duration-500" />
          <button onClick={() => scrollGallery(-1)} aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-brand-navy shadow transition hover:scale-110">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scrollGallery(1)} aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-brand-navy shadow transition hover:scale-110">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, i) => (
              <button key={i} onClick={() => setActiveImg(i)} aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${activeImg === i ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6 — Specifications (compact table) */}
      <Section className="bg-brand-soft !py-16 md:!py-20">
        <SectionHeader eyebrow="Specifications" title="Technical specifications" align="center" />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[18px] border border-brand-border bg-white">
          <table className="w-full text-sm">
            <tbody>
              {p.specs.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-brand-soft/60"}>
                  <th scope="row" className="w-1/3 px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold align-top">{s.label}</th>
                  <td className="px-6 py-4 text-brand-navy font-medium">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!py-16 md:!py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mx-auto max-w-3xl"><FAQ items={p.faqs} /></div>
      </Section>

      {/* SECTION 7 — CTA Banner */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-[24px] bg-brand-navy px-8 py-14 md:px-16 md:py-16 text-white">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">Get in touch</p>
              <h2 className="mt-3 font-display text-white">Need a Custom Solution?</h2>
              <p className="mt-3 text-white/75 max-w-lg leading-relaxed">
                Talk to our manufacturing team about your {p.title.toLowerCase()} requirements — we'll respond within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:scale-[1.03]">
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppButton message={`Hi, I'd like a quote for ${p.title}.`} />
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Phone className="h-4 w-4 text-brand-gold" /> <span>{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Mail className="h-4 w-4 text-brand-gold" /> <span>{SITE.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-brand-gold" /> <span>Custom UAE manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}