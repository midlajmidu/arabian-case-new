import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct, type Category, type Product } from "@/data/catalog";
import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  ArrowRight,
  Phone,
  Award,
  Factory,
  Wrench,
  Sparkles,
  Clock,
  Globe2,
} from "lucide-react";
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
  const { category: c, product: p } = Route.useLoaderData() as { category: Category; product: Product };
  const [sent, setSent] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const related = c.products.filter((x) => x.slug !== p.slug).slice(0, 4);
  const gallery = [c.image, c.image, c.image, c.image];
  const whyChoose = [
    { icon: Award, title: "Premium Quality", text: "Industrial-grade materials engineered for daily professional use." },
    { icon: Factory, title: "Custom Manufacturing", text: "Built in-house in our Dubai facility to your exact spec." },
    { icon: ShieldCheck, title: "UAE Standards", text: "Quality-controlled production meeting GCC compliance." },
    { icon: Wrench, title: "Reliable Protection", text: "Shock-absorbing, secure and built to outlast tough conditions." },
    { icon: Sparkles, title: "Professional Finish", text: "Brandable laminates, powder coats and bespoke detailing." },
    { icon: Clock, title: "Long-Term Durability", text: "Heavy-duty hardware and reinforced construction throughout." },
  ];

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
          <div className="relative overflow-hidden rounded-[18px] border border-brand-border bg-brand-soft">
            <img src={c.image} alt={p.imageAlt} loading="eager" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-navy backdrop-blur">
              Made in UAE
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">{c.title}</p>
            <h1 className="mt-3 font-display text-3xl md:text-5xl text-brand-navy">{p.title}</h1>
            <p className="mt-4 text-lg text-brand-text-secondary leading-relaxed">{p.tagline}</p>
            <p className="mt-4 text-brand-text-secondary leading-relaxed">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
                Get Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-[10px] border border-brand-navy/20 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft">
                <Phone className="h-4 w-4" /> Contact Us
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

      {/* Overview */}
      <Section className="!py-16 bg-brand-soft">
        <div className="grid gap-10 lg:grid-cols-3">
          <SectionHeader eyebrow="Overview" title={`About our ${p.title.toLowerCase()}`} className="lg:col-span-1 mb-0" />
          <div className="lg:col-span-2 space-y-4 text-brand-text-secondary leading-relaxed">
            <p>{p.description}</p>
            <p>
              Every {p.title.toLowerCase()} is engineered in-house at our Dubai manufacturing facility using premium {c.title.toLowerCase()} materials.
              We combine precision craftsmanship with industrial-grade hardware to deliver products built for daily professional use across the UAE and GCC.
            </p>
            <p>
              Each unit is fully customisable — dimensions, internal layout, finish and branding are tailored to your application, ensuring an
              exact fit for your equipment, operations and brand standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader eyebrow="Features" title="Engineered for performance" align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f) => (
            <div key={f} className="group rounded-[18px] border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <CheckCircle2 className="h-6 w-6 text-brand-gold" />
              <p className="mt-4 font-medium text-brand-navy">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Applications */}
      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Applications" title="Where it's used" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.applications.map((a) => (
            <div key={a} className="rounded-[18px] border border-brand-border bg-white p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-navy/5 text-brand-navy">
                <ArrowRight className="h-4 w-4" />
              </div>
              <p className="font-medium text-brand-navy">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeader eyebrow="Gallery" title="Product gallery" align="center" />
        <div className="grid gap-4 lg:grid-cols-[1fr_120px]">
          <div className="overflow-hidden rounded-[18px] border border-brand-border bg-brand-soft">
            <img src={gallery[activeImg]} alt={p.imageAlt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </div>
          <div className="flex gap-3 lg:flex-col">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`overflow-hidden rounded-[12px] border transition ${activeImg === i ? "border-brand-gold ring-2 ring-brand-gold/30" : "border-brand-border hover:border-brand-navy/40"}`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={g} alt="" loading="lazy" className="h-20 w-28 object-cover lg:w-full" />
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Specifications */}
      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Specifications" title="Technical specifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.specs.map((s) => (
            <div key={s.label} className="rounded-[18px] border border-brand-border bg-white p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-gold">{s.label}</p>
              <p className="mt-3 font-medium text-brand-navy leading-snug">{s.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader eyebrow="Industries" title="Industries we serve" align="center" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {p.industries.map((i) => (
            <div key={i} className="flex flex-col items-center gap-3 rounded-[18px] border border-brand-border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <Globe2 className="h-6 w-6 text-brand-gold" />
              <p className="text-sm font-medium text-brand-navy">{i}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose */}
      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Why choose us" title={`Why choose our ${p.title.toLowerCase()}`} align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div key={w.title} className="rounded-[18px] border border-brand-border bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-brand-navy text-brand-gold">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Related Products */}
      {related.length > 0 && (
        <Section>
          <SectionHeader eyebrow="Related" title={`More ${c.title.toLowerCase()}`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$category/$product" params={{ category: c.slug, product: r.slug }} className="group overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden"><img src={c.image} alt={r.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-navy">{r.title}</h3>
                  <p className="mt-2 text-xs text-brand-text-secondary line-clamp-2">{r.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold">View product <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Request Quote */}
      <Section id="quote" className="bg-brand-soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Request quote" title="Request a custom quote" />
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-[18px] border border-brand-border bg-white p-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required maxLength={100} placeholder="Full name" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
                <input required type="email" maxLength={255} placeholder="Email" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
                <input maxLength={30} placeholder="Phone" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
                <input maxLength={150} placeholder="Company" className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              </div>
              <input readOnly value={p.title} className="w-full rounded-[10px] border border-brand-border bg-brand-soft px-4 py-3 text-sm text-brand-navy font-medium" />
              <textarea required maxLength={1000} placeholder={`Tell us about your ${p.title.toLowerCase()} requirements — dimensions, quantity, finish, deadline...`} rows={5} className="w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
                Request Quote <ArrowRight className="h-4 w-4" />
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
            <div className="mt-8 rounded-[18px] border border-brand-border bg-white p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Direct contact</p>
              <p className="mt-3 font-display text-xl text-brand-navy">Speak to our team</p>
              <p className="mt-2 text-sm text-brand-text-secondary">Prefer to chat? Reach us instantly on WhatsApp for faster turnaround.</p>
              <div className="mt-4"><WhatsAppButton message={`Hi, I'd like a quote for ${p.title}.`} /></div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mx-auto max-w-3xl"><FAQ items={p.faqs} /></div>
      </Section>

      <CTABanner title="Need Custom Solutions?" description="Get high-quality custom manufacturing solutions tailored around your requirements." />
    </div>
  );
}