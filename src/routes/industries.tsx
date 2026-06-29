import { createFileRoute } from "@tanstack/react-router";
import { CTABanner } from "@/components/site/CTABanner";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  Plane, Shield, Flame, Stethoscope, Tv, Music,
  PartyPopper, Radio, Factory, Building2, Anchor
} from "lucide-react";

// Import premium brand assets
import heroCustomBags from "@/assets/hero-custom-bags.webp";
import heroExhibition from "@/assets/hero-exhibition.webp";
import heroFlightCases from "@/assets/hero-flight-cases.webp";
import heroFlightcase from "@/assets/hero-flightcase.webp";
import heroFoamInserts from "@/assets/hero-foam-inserts.webp";
import heroHardCases from "@/assets/hero-hard-cases.png";
import heroShippingCrates from "@/assets/hero-shipping-crates.webp";
import qualityMaterials from "@/assets/quality-materials.png";
import heroFurniturePremium from "@/assets/hero-furniture-premium.webp";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: `Industries We Serve — ${SITE.name}` },
      { name: "description", content: "Arabian Cases manufactures custom transport and protective cases for aviation, military, oil & gas, medical, broadcast, events, and more across the UAE and worldwide." },
      { property: "og:title", content: `Industries We Serve — ${SITE.name}` },
      { property: "og:description", content: "Custom flight cases and protective cases for all major industries — made in Dubai, UAE." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Industries", url: "/industries" }])) }],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Plane,
    title: "Aviation",
    desc: "Custom-built flight cases for avionics, ground support equipment, and in-cabin tools designed to meet strict aviation safety and transport standards.",
    image: heroFlightcase,
    iconBg: "#1a3566",
    label: "01",
  },
  {
    icon: Shield,
    title: "Military & Defense",
    desc: "Heavy-duty protective cases engineered to MIL-SPEC standards for firearms, communications, and tactical equipment deployed in the field.",
    image: heroHardCases,
    iconBg: "#334155",
    label: "02",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    desc: "Rugged transit cases for drilling instruments, measurement tools, and sensitive electronics in harsh offshore and desert environments.",
    image: heroShippingCrates,
    iconBg: "#b45309",
    label: "03",
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    desc: "Custom foam-lined cases for surgical instruments, diagnostic devices, and portable medical equipment requiring sterile, safe transport.",
    image: heroFoamInserts,
    iconBg: "#0d9488",
    label: "04",
  },
  {
    icon: Tv,
    title: "Broadcast & Media",
    desc: "Professional rackmount and flight cases for cameras, mixing desks, monitors, and broadcast gear for studios and on-location productions.",
    image: heroCustomBags,
    iconBg: "#7c3aed",
    label: "05",
  },
  {
    icon: Music,
    title: "Audio & Lighting",
    desc: "Tour-grade cases for mixing consoles, amplifiers, fixtures, and rigging equipment built to withstand the demands of live touring.",
    image: heroFlightCases,
    iconBg: "#db2777",
    label: "06",
  },
  {
    icon: PartyPopper,
    title: "Events & Entertainment",
    desc: "Bespoke cases for staging, props, AV equipment, and event production gear used by top event companies across UAE and GCC.",
    image: heroExhibition,
    iconBg: "#d97706",
    label: "07",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    desc: "Transit solutions for network hardware, satellite systems, and field communication equipment in remote or mobile environments.",
    image: heroFlightcase,
    iconBg: "#0284c7",
    label: "08",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    desc: "Heavy-duty shipping crates and protective enclosures for machinery components, precision tools, and large industrial instrumentation.",
    image: qualityMaterials,
    iconBg: "#78350f",
    label: "09",
  },
  {
    icon: Building2,
    title: "Government Organizations",
    desc: "Secure, professional cases for sensitive government equipment including document transport, electronic systems, and field deployments.",
    image: heroFurniturePremium,
    iconBg: "#4f46e5",
    label: "10",
  },
  {
    icon: Anchor,
    title: "Marine Applications",
    desc: "Watertight and corrosion-resistant cases for navigation equipment, underwater cameras, and marine electronics used at sea.",
    image: heroShippingCrates,
    iconBg: "#2563eb",
    label: "11",
  },
];

// Sticky stack card — each card sticks at a progressively larger top offset
function StackCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = industry.icon;
  const stickyTop = 96 + index * 12; // 96px base clearance + 12px offset per stacked card for cool overlapping look

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "sticky rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out border border-brand-border/40 bg-white group",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + index,
        transitionDelay: "50ms",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px]">

        {/* LEFT: Content */}
        <div
          className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 order-2 lg:order-1 text-white"
          style={{ backgroundColor: "#1a3566" }}
        >
          <div>
            <span className="font-display text-[72px] font-bold leading-none text-white/10 select-none block -mt-2">
              {industry.label}
            </span>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white leading-snug">
                {industry.title}
              </h3>
            </div>
            <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed">
              {industry.desc}
            </p>
          </div>
          <div className="mt-8">
            <div className="h-px w-10 bg-brand-gold/80" />
          </div>
        </div>

        {/* RIGHT: Visual panel with real image */}
        <div className="relative overflow-hidden order-1 lg:order-2 min-h-[260px] lg:min-h-0">
          <img
            src={industry.image}
            alt={industry.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {/* Shading overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-brand-navy/80 via-brand-navy/20 to-transparent" />
          
          {/* Gold bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
          
          {/* Large number watermark */}
          <div className="absolute bottom-4 left-6">
            <span className="font-display text-[80px] font-bold leading-none text-white/20 select-none drop-shadow-md">
              {industry.label}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

function IndustriesPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container-page relative py-24 md:py-32">
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries", to: "/industries" }]} />
            <div className="mt-6 max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Who We Work With
              </p>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight text-white">
                Industries{" "}
                <span className="italic text-brand-gold">We Serve</span>
              </h1>
              <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">
                We manufacture custom transport and protective cases for some of the world's most demanding sectors — built in Dubai, trusted worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Stack Section */}
      <section className="bg-slate-50 border-b border-brand-border/40">
        <div className="container-page py-16 md:py-20">

          {/* Section header */}
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Our Clients
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-brand-navy leading-tight">
              Trusted Across{" "}
              <span className="italic text-slate-400">Every Sector</span>
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-2xl">
              Whether you need a single prototype or large-scale production, our team delivers durable, reliable cases engineered to protect your equipment in the most demanding conditions.
            </p>
          </div>

          {/* Sticky stack cards — each card stacks on the previous */}
          <div className="flex flex-col gap-5 pb-[25vh]">
            {industries.map((industry, index) => (
              <StackCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
}
