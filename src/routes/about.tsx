import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import heroImg from "@/assets/hero-furniture-premium.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE.name} — UAE Industrial Manufacturer` },
      { name: "description", content: "Learn about Arabian Cases & Furniture — a UAE manufacturer of flight cases, foam inserts, crates, bags, exhibition stands and bespoke furniture." },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: "UAE-based manufacturer of premium industrial cases and furniture." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])) }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <img src={heroImg} alt="" loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="container-page relative py-24 md:py-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight max-w-3xl">Crafted in the UAE. <span className="italic">Built for the world.</span></h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">{SITE.description}</p>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "Deliver custom-engineered cases, crates and furniture that protect what matters and elevate the brands we work with." },
            { icon: Eye, title: "Our Vision", text: "To be the UAE's most trusted manufacturing partner for industrial cases, exhibition builds and bespoke furniture." },
            { icon: Award, title: "Our Values", text: "Quality, craftsmanship and an obsession with on-time delivery — every order, every time." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[18px] border border-brand-border bg-white p-8">
              <Icon className="h-8 w-8 text-brand-gold" />
              <h2 className="mt-5 font-display text-2xl text-brand-navy">{title}</h2>
              <p className="mt-3 text-brand-text-secondary leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Our Story" title="From a single workshop to a full-service manufacturer" />
        <div className="grid gap-8 md:grid-cols-2 text-brand-text-secondary leading-relaxed">
          <p>Arabian Cases & Furniture was founded to give UAE businesses a single, dependable manufacturing partner for cases, crates and custom furniture — replacing scattered overseas suppliers with one local team that owns design, build and delivery.</p>
          <p>Today our Dubai facility produces flight cases for broadcasters and touring crews, ISPM-15 crates for oil & gas exporters, foam inserts for aviation MRO, and bespoke furniture for offices, schools and hotels across the country.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Timeline" title="Milestones" align="center" />
        <div className="relative mx-auto max-w-3xl space-y-8">
          {[
            { year: "Day One", text: "Studio launched in Dubai with a focus on flight cases and foam." },
            { year: "Expansion", text: "Added shipping crates, custom bags and exhibition builds." },
            { year: "Today", text: "Full-service manufacturing across 7 product categories, serving the UAE & GCC." },
          ].map((m) => (
            <div key={m.year} className="rounded-[18px] border border-brand-border bg-white p-6 flex gap-6">
              <p className="font-display text-2xl text-brand-gold w-28 shrink-0">{m.year}</p>
              <p className="text-brand-text-secondary leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}