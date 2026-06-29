import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/site/CTABanner";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";
import { Package, Layers, Sofa, Shield, Boxes, Wrench, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-furniture-premium.webp";

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

const capabilities = [
  { icon: Package, title: "Flight Cases", text: "Custom rack cases, mixer & speaker cases, cable trunks, TV screen cases and DJ workstation tables — built for broadcasting, events and touring." },
  { icon: Shield, title: "Hard Cases & Covers", text: "Genuine Pelican™ cases, weatherproof utility covers for machinery, generators and sensitive field equipment." },
  { icon: Layers, title: "Foam Inserts", text: "Precision CNC and laser-cut foam for tool control, equipment protection, 5S shadow boards and medical kit organisation." },
  { icon: Boxes, title: "Shipping Crates", text: "ISPM-15 certified wooden crates, heavy-duty reusable crates, export pallets and custom wooden boxes." },
  { icon: Wrench, title: "Custom Bags", text: "Industrial tool bags, insulated hot & cool bags, corporate laptop bags, backpacks and eco-friendly promotional bags." },
  { icon: Sofa, title: "Furniture Fabrication", text: "Bespoke office, hospitality and school furniture — sofas, tables, workstations and retail display units fabricated in-house." },
];

const values = [
  { num: "01", title: "Built In-House", body: "Every product is designed, manufactured and finished at our Dubai facility — no subcontracting, no compromise on quality." },
  { num: "02", title: "Made to Your Specification", body: "Custom dimensions, internal layouts, brand finishes and material choices. We build what you need, not what's on a shelf." },
  { num: "03", title: "Premium Materials", body: "Birch plywood, Penn Elcom hardware, aircraft-grade aluminium, industrial foams and ISPM-15 certified timber for export crates." },
  { num: "04", title: "Reliable Lead Times", body: "Standard production runs of 1–3 weeks. Express timelines available for events, broadcast and critical project deadlines." },
];

function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── HERO — unchanged ── */}
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <img src={heroImg} alt="" loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
        <div className="container-page relative py-24 md:py-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight max-w-3xl">Dubai-based manufacturer of <span className="italic">cases, covers & furniture.</span></h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">A specialist manufacturer of custom flight cases, protective covers, foam inserts, shipping crates, custom packaging and furniture fabrication — built in-house in our Dubai facility.</p>
        </div>
      </div>

      {/* ── TAGLINE — editorial centred statement ── */}
      <section className="bg-brand-soft border-b border-brand-border/40">
        <div className="container-page py-20 md:py-28 max-w-5xl mx-auto text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-gold mb-8">Who We Are</p>
          <p className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-navy leading-tight">
            We bring together{" "}
            <span className="text-brand-gold italic">deep manufacturing expertise</span>,{" "}
            premium{" "}
            <span className="text-brand-gold italic">materials</span>{" "}
            and{" "}
            <span className="relative inline-block">
              <span className="relative z-10">in-house craftsmanship.</span>
              <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-brand-gold/20 -z-0 rounded" />
            </span>
          </p>
        </div>
      </section>

      {/* ── STATS — editorial scattered grid ── */}
      <section className="bg-brand-navy border-b border-white/10 text-white">
        <div className="container-page py-12 sm:py-20 md:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Corporate Clients" },
              { value: "100%", label: "In-House Manufacturing" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-brand-navy px-4 py-8 sm:px-8 sm:py-12 flex flex-col gap-2 sm:gap-3">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-gold leading-none">{value}</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TWO-COLUMN ── */}
      <section className="bg-brand-soft border-b border-brand-border/40">
        <div className="container-page py-16 md:py-28 grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — big label + headline */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-gold mb-4 sm:mb-5">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl text-brand-navy leading-tight">
              Precision engineering,{" "}
              <span className="text-brand-gold italic">premium materials</span>,{" "}
              delivered on time.
            </h2>
            <div className="mt-6 sm:mt-8 h-px bg-brand-gold/30 w-16" />
          </div>
          {/* Right — body copy */}
          <div className="space-y-4 sm:space-y-5 text-brand-text-secondary leading-relaxed text-base sm:text-lg">
            <p>
              Arabian Cases & Furniture is a Dubai-based industrial manufacturer serving businesses across the UAE and beyond. Founded on a commitment to in-house production, we control every stage of design, fabrication and finishing — giving our clients full specification flexibility and dependable quality.
            </p>
            <p>
              From a single custom flight case for a broadcast engineer to a full suite of export shipping crates for an oil & gas project, we scale to every requirement without compromising on build standard or turnaround.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 mt-2 sm:mt-4 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors">
              See all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES — numbered editorial list ── */}
      <section className="bg-brand-navy border-b border-white/10">
        <div className="container-page py-16 md:py-28">
          <div className="mb-10 sm:mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-gold mb-4">Our Principles</p>
            <h2 className="font-display text-3xl md:text-4xl text-white max-w-lg">What makes us different</h2>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            {values.map(({ num, title, body }) => (
              <div key={num} className="border-t border-white/10 py-8 px-4 sm:p-8 md:p-10 flex gap-4 sm:gap-6 items-start group hover:bg-white/5 rounded-[12px] transition-colors">
                <span className="font-display text-3xl sm:text-4xl text-brand-gold transition-colors shrink-0 leading-none mt-1">{num}</span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-white">{title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="bg-white border-b border-brand-border/40">
        <div className="container-page py-16 md:py-28">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-gold mb-4">What We Make</p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy max-w-xl">
                Six capabilities.<br />One in-house facility.
              </h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors shrink-0">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-[20px] border border-brand-border bg-brand-soft p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy/8 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 sm:mt-6 font-display text-lg sm:text-xl text-brand-navy">{title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-brand-text-secondary leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — unchanged ── */}
      <CTABanner />
    </div>
  );
}