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
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight max-w-3xl">Dubai-based manufacturer of <span className="italic">cases, covers & furniture.</span></h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">A specialist manufacturer of custom flight cases, protective covers, foam inserts, shipping crates, custom packaging and furniture fabrication — built in-house in our Dubai facility.</p>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "Manufacture custom cases, covers, packaging and furniture that protect equipment and elevate the brands we work with." },
            { icon: Eye, title: "Our Vision", text: "To be the UAE's most trusted manufacturer of protective cases, custom packaging and furniture fabrication." },
            { icon: Award, title: "Our Values", text: "Quality materials, precision craftsmanship and on-time delivery — every order, every time." },
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
        <SectionHeader eyebrow="Our Story" title="A Dubai workshop built on protective manufacturing" />
        <div className="grid gap-8 md:grid-cols-2 text-brand-text-secondary leading-relaxed">
          <p>Arabian Cases & Furniture was founded in 2016 as a specialist manufacturer of flight cases and custom packaging — giving UAE businesses a dependable in-country source for protective cases, covers and crates.</p>
          <p>Today our Dubai facility produces flight cases, rack and mixer cases, utility covers, CNC foam inserts, ISPM-15 shipping crates, custom bags and bespoke furniture — all manufactured under one roof to your exact specifications.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Timeline" title="Milestones" align="center" />
        <div className="relative mx-auto max-w-3xl space-y-8">
          {[
            { year: "2016", text: "Company established in Dubai with a focus on protective cases." },
            { year: "2017", text: "Focused on custom packaging production for UAE businesses." },
            { year: "2018", text: "Expanded flight case manufacturing — rack, mixer and speaker cases." },
            { year: "2020", text: "Introduced precision foam insert production with CNC and laser cutting." },
            { year: "2022", text: "Expanded into furniture manufacturing for offices, hotels and schools." },
            { year: "2024", text: "150+ projects completed for 50+ corporate clients across the UAE." },
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