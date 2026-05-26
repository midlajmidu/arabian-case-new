import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Award, Truck, Users, Headphones,
  ClipboardList, PencilRuler, Layers, Hammer, CheckCircle2, PackageCheck, MapPin,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
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
  { icon: Award, title: "Premium Materials", desc: "Marine plywood, aircraft-grade aluminium and ballistic nylon." },
  { icon: Sparkles, title: "Custom Manufacturing", desc: "Every product engineered to your exact specification." },
  { icon: Users, title: "Experienced Team", desc: "Designers, engineers and craftsmen with decades on the floor." },
  { icon: Truck, title: "Fast Delivery", desc: "Express production and on-time UAE-wide delivery." },
  { icon: ShieldCheck, title: "UAE & GCC Service", desc: "Local manufacturing with full GCC export capability." },
  { icon: Headphones, title: "After-Sales Support", desc: "End-to-end support from brief to delivery and beyond." },
];

const processSteps = [
  { num: "01", icon: ClipboardList, title: "Planning", color: "bg-brand-navy" },
  { num: "02", icon: PencilRuler, title: "Design", color: "bg-[oklch(0.45_0.15_245)]" },
  { num: "03", icon: Layers, title: "Material Selection", color: "bg-[oklch(0.55_0.13_200)]" },
  { num: "04", icon: Hammer, title: "Manufacturing", color: "bg-[oklch(0.50_0.14_30)]" },
  { num: "05", icon: CheckCircle2, title: "Quality Testing", color: "bg-[oklch(0.55_0.15_145)]" },
  { num: "06", icon: PackageCheck, title: "Delivery", color: "bg-brand-gold" },
];

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

function Index() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const featured = categories.slice(0, 6);

  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Why Choose Us */}
      <Section className="bg-white !py-20 md:!py-24">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Quality. Reliability. Precision."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-[18px] border border-brand-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-navy/15"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition group-hover:bg-brand-navy group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process — Timeline */}
      <Section className="bg-brand-soft !py-20 md:!py-24">
        <SectionHeader
          eyebrow="Our Process"
          title="From Brief to Delivery"
          description="A streamlined process for high-quality custom manufacturing."
          align="center"
        />
        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-navy/25 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.num} className="group relative text-center">
                <div className={`relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition group-hover:scale-110 ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">{step.num}</p>
                <h3 className="mt-1 font-display text-lg text-brand-navy">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured products — horizontal carousel */}
      <Section className="!py-20 md:!py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Featured Products</p>
            <h2 className="font-display text-brand-navy">Best-selling manufacturing lines</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollCarousel(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((c) => (
            <Link
              key={c.slug}
              data-card
              to="/products/$category"
              params={{ category: c.slug }}
              className="group relative shrink-0 snap-start overflow-hidden rounded-[20px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-xl
                         w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">{c.short}</p>
                <h3 className="mt-2 font-display text-xl text-brand-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed line-clamp-2">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                  View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* UAE Coverage */}
      <Section className="bg-brand-soft !py-20 md:!py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">UAE Coverage</p>
            <h2 className="font-display text-brand-navy">Delivery across all seven emirates</h2>
            <p className="mt-4 text-base text-brand-text-secondary leading-relaxed max-w-lg">
              From our Dubai facility we deliver to every emirate and ship project cargo across the wider GCC,
              with on-site installation and after-sales support included.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {emirates.map((e) => (
              <div key={e} className="flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 transition hover:border-brand-navy/25 hover:shadow-sm">
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
