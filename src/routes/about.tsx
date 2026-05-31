import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";
import { CheckCircle2, Package, Layers, Sofa, Shield, Boxes, Wrench } from "lucide-react";
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
        <SectionHeader eyebrow="About Us" title="A specialist Dubai manufacturer" />
        <div className="grid gap-8 md:grid-cols-2 text-brand-text-secondary leading-relaxed text-lg">
          <p>Arabian Cases & Furniture is a Dubai-based manufacturer focused on protective cases, custom packaging, utility covers and bespoke furniture for businesses across the UAE.</p>
          <p>Every product is designed, built and finished in-house at our Dubai facility — giving our clients direct access to the makers, control over specifications and dependable lead times.</p>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="Capabilities" title="What we manufacture" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Package, title: "Flight Cases", text: "Rack cases, mixer & speaker cases, cable trunks, TV screen cases and DJ tables." },
            { icon: Shield, title: "Utility Covers", text: "Weatherproof covers for machinery, generators and outdoor equipment." },
            { icon: Layers, title: "Foam Inserts", text: "Precision CNC and laser-cut foam for tool control and equipment protection." },
            { icon: Boxes, title: "Shipping Crates", text: "ISPM-15 certified wooden crates, pallets and custom export boxes." },
            { icon: Wrench, title: "Custom Bags & Packaging", text: "Ballistic nylon equipment bags, pouches and protective transport packaging." },
            { icon: Sofa, title: "Furniture Production", text: "Bespoke office, hospitality and school furniture — fabricated in-house." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[18px] border border-brand-border bg-white p-8">
              <Icon className="h-8 w-8 text-brand-gold" />
              <h3 className="mt-5 font-display text-xl text-brand-navy">{title}</h3>
              <p className="mt-3 text-brand-text-secondary leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Why Us" title="Why choose Arabian Cases & Furniture" />
        <div className="mx-auto max-w-3xl grid gap-4">
          {[
            "In-house Dubai manufacturing — no middlemen, full control over quality.",
            "Built to your exact specifications, dimensions and branding.",
            "Premium materials — birch plywood, aluminium extrusion, industrial foams, ISPM-15 timber.",
            "Reliable lead times for events, broadcast and project deadlines.",
            "UAE-wide delivery and on-site installation where required.",
          ].map((r) => (
            <div key={r} className="flex items-start gap-3 rounded-[12px] border border-brand-border bg-white p-5">
              <CheckCircle2 className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
              <p className="text-brand-dark-gray">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </div>
  );
}