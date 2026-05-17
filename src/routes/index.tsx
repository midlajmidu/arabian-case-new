import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Sparkles, Award, Truck, Users, Layers, Headphones,
  Building2, Plane, HardHat, HeartPulse, Flame, Briefcase, GraduationCap, PartyPopper,
  MessageSquare, Search, PencilRuler, Hammer, CheckCircle2, MapPin,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { CategoryCard } from "@/components/site/CategoryCard";
import { categories } from "@/data/catalog";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Premium Flight Cases, Foam, Crates & Furniture UAE` },
      { name: "description", content: SITE.description },
      { name: "keywords", content: "flight cases UAE, custom foam inserts Dubai, shipping crates Dubai, exhibition stands UAE, office furniture Dubai, industrial manufacturing UAE" },
      { property: "og:title", content: `${SITE.name} — Premium UAE Industrial Manufacturing` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const whyUs = [
  { icon: Sparkles, title: "Custom Manufacturing", desc: "Every product designed and built to your exact specification." },
  { icon: Award, title: "Premium Materials", desc: "Marine plywood, aluminium extrusion, ballistic nylon, solid wood." },
  { icon: ShieldCheck, title: "UAE Quality Standards", desc: "ISPM-15 certified packaging and aviation-grade manufacturing." },
  { icon: Truck, title: "Fast Delivery", desc: "Express production and UAE-wide delivery for tight deadlines." },
  { icon: Users, title: "Professional Team", desc: "Engineers, designers and craftsmen with decades of experience." },
  { icon: Layers, title: "Durable Products", desc: "Engineered to survive touring, freight and daily heavy use." },
  { icon: Headphones, title: "End-to-End Support", desc: "Design, manufacturing, branding, delivery and after-sales." },
];

const industries = [
  { icon: Headphones, label: "Broadcasting" },
  { icon: Plane, label: "Aviation" },
  { icon: HardHat, label: "Construction" },
  { icon: HeartPulse, label: "Medical" },
  { icon: Flame, label: "Oil & Gas" },
  { icon: Briefcase, label: "Corporate" },
  { icon: GraduationCap, label: "Education" },
  { icon: PartyPopper, label: "Events" },
];

const process = [
  { icon: MessageSquare, title: "Consultation", desc: "Tell us about your equipment and goals." },
  { icon: Search, title: "Requirement Analysis", desc: "Measurements, materials and finishes." },
  { icon: PencilRuler, title: "Design", desc: "Engineering drawings and visual mockups." },
  { icon: Hammer, title: "Manufacturing", desc: "Built in-house at our Dubai facility." },
  { icon: CheckCircle2, title: "Quality Check", desc: "Inspected against your specification." },
  { icon: Truck, title: "Delivery", desc: "UAE-wide and GCC delivery & installation." },
];

const stats = [
  { value: "100%", label: "UAE Manufactured" },
  { value: "7", label: "Product Categories" },
  { value: "24h", label: "Quote Turnaround" },
  { value: "GCC", label: "Delivery Coverage" },
];

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

function Index() {
  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Intro */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Who We Are</p>
            <h2 className="font-display text-3xl md:text-[42px] leading-tight text-brand-navy">
              A UAE manufacturer of <span className="italic">premium industrial</span> cases & furniture.
            </h2>
          </div>
          <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed">
            Arabian Cases & Furniture designs and builds custom flight cases, precision foam inserts,
            heavy-duty shipping crates, branded bags, exhibition stands and bespoke furniture from our
            Dubai facility. Every order is engineered to specification, finished in-house and delivered
            across the UAE and wider GCC.
          </p>
        </div>
      </Section>

      {/* Priority Services / Categories */}
      <Section className="bg-brand-soft">
        <SectionHeader
          eyebrow="Our Products"
          title="Priority manufacturing services"
          description="Seven product lines, one factory, end-to-end control of materials, build and finish."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} slug={c.slug} title={c.title} short={c.short} image={c.image} alt={c.imageAlt} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader eyebrow="Why Choose Us" title="A manufacturing partner you can trust" align="center" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-[18px] border border-brand-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-12 w-12 place-items-center rounded-[10px] bg-brand-navy/5 text-brand-navy">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-brand-navy text-white">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Trusted across regulated industries"
          align="center"
          className="[&_h2]:text-white [&_p]:text-white/70"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition hover:bg-white/10">
              <Icon className="h-7 w-7 text-brand-gold" />
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader eyebrow="Our Process" title="From brief to delivery" align="center" />
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {process.map((p, i) => (
            <div key={p.title} className="relative">
              <div className="rounded-[18px] border border-brand-border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-navy text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-brand-gold">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-lg text-brand-navy">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-text-secondary">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-brand-soft py-16 md:py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[18px] border border-brand-border bg-white p-8 text-center">
              <p className="font-display text-4xl md:text-5xl text-brand-navy">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-brand-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured products */}
      <Section>
        <SectionHeader
          eyebrow="Featured"
          title="Best-selling product lines"
          description="A snapshot of our most-requested manufacturing solutions."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).flatMap((c) => c.products.slice(0, 1).map((p) => ({ c, p }))).map(({ c, p }) => (
            <Link
              key={p.slug}
              to="/products/$category/$product"
              params={{ category: c.slug, product: p.slug }}
              className="group overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-soft">
                <img src={c.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-gold">{c.short}</p>
                <h3 className="mt-1.5 font-display text-lg text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-text-secondary line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Portfolio preview */}
      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Portfolio" title="Recent work across the UAE & GCC" />
        <div className="grid gap-4 md:grid-cols-3">
          {categories.slice(0, 6).map((c) => (
            <div key={c.slug} className="group relative overflow-hidden rounded-[18px] aspect-[4/3]">
              <img src={c.image} alt={c.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">{c.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-[10px] border border-brand-navy px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white">
            View Full Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* UAE Coverage */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">UAE Coverage</p>
            <h2 className="font-display text-3xl md:text-[42px] leading-tight text-brand-navy">Delivery & installation across all seven emirates</h2>
            <p className="mt-4 text-base text-brand-text-secondary leading-relaxed">
              From our Dubai facility we deliver to every emirate and ship project cargo across the wider GCC.
              On-site installation and after-sales support included.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {emirates.map((e) => (
              <div key={e} className="flex items-center gap-2 rounded-[10px] border border-brand-border bg-brand-soft px-4 py-3">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span className="text-sm font-medium text-brand-navy">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}
