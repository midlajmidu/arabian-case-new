import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import flightCasesImg from "@/assets/hero-flight-cases.jpg";
import foamImg from "@/assets/hero-foam-inserts.jpg";
import cratesImg from "@/assets/hero-shipping-crates.jpg";
import bagsImg from "@/assets/hero-custom-bags.jpg";
import exhibitionImg from "@/assets/hero-exhibition.jpg";
import furnitureImg from "@/assets/hero-furniture-premium.jpg";

interface Slide {
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  image: string;
  imageAlt: string;
  primary: { label: string; to: string; params?: Record<string, string> };
}

const slides: Slide[] = [
  {
    eyebrow: "Flight Cases",
    title: "Premium Flight Cases Built for",
    emphasis: "Maximum Protection",
    description:
      "Custom-designed flight cases engineered for professional equipment, broadcasting, events and industrial applications.",
    image: flightCasesImg,
    imageAlt: "Premium flight cases manufactured in UAE",
    primary: { label: "View Products", to: "/products/$category", params: { category: "flight-cases" } },
  },
  {
    eyebrow: "Foam Inserts",
    title: "Precision Foam Inserts &",
    emphasis: "Tool Control Boards",
    description:
      "CNC and laser-cut foam tailored to your equipment — from 5S tool control to padded interior fit-outs.",
    image: foamImg,
    imageAlt: "Custom foam inserts UAE",
    primary: { label: "Explore Foam", to: "/products/$category", params: { category: "foam-inserts" } },
  },
  {
    eyebrow: "Shipping Crates",
    title: "Heavy-Duty Crates for",
    emphasis: "Global Export",
    description:
      "ISPM-15 certified wooden crates, pallets and bespoke boxes for safe road, sea and air freight from the UAE.",
    image: cratesImg,
    imageAlt: "Heavy-duty shipping crates Dubai",
    primary: { label: "Crate Solutions", to: "/products/$category", params: { category: "shipping-crates" } },
  },
  {
    eyebrow: "Custom Bags",
    title: "Custom Bags & Covers,",
    emphasis: "Built to Last",
    description:
      "Ballistic-nylon equipment bags, dust covers and tool pouches — branded and built for the field.",
    image: bagsImg,
    imageAlt: "Custom equipment bags UAE",
    primary: { label: "View Bags", to: "/products/$category", params: { category: "custom-bags" } },
  },
  {
    eyebrow: "Exhibition",
    title: "Premium Exhibition Stands &",
    emphasis: "Event Builds",
    description:
      "Shell scheme upgrades, custom stands, outdoor kiosks and photo ops engineered for the UAE event circuit.",
    image: exhibitionImg,
    imageAlt: "Exhibition stand builders UAE",
    primary: { label: "Exhibition Solutions", to: "/products/$category", params: { category: "exhibition" } },
  },
  {
    eyebrow: "Furniture",
    title: "Custom Office & Premium",
    emphasis: "Furniture",
    description:
      "Bespoke furniture manufacturing for offices, schools, hospitality and homes — designed and built in the UAE.",
    image: furnitureImg,
    imageAlt: "Custom office furniture Dubai",
    primary: { label: "View Furniture", to: "/products/$category", params: { category: "furniture" } },
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => setActive((i + slides.length) % slides.length);

  return (
    <section className="relative h-[calc(100vh-90px)] min-h-[560px] w-full overflow-hidden bg-brand-navy">
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === active ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-hidden={i !== active}
        >
          <img
            src={s.image}
            alt={s.imageAlt}
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-brand-navy/30" />
          <div className="container-page relative z-10 flex h-full items-center">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-brand-gold">
                {s.eyebrow}
              </p>
              {i === 0 ? (
                <h1 className="font-display text-[32px] md:text-[44px] lg:text-[60px] xl:text-[64px] leading-[1.05]">
                  {s.title}
                  <br />
                  <span className="italic font-medium">{s.emphasis}</span>
                </h1>
              ) : (
                <p className="font-display text-[32px] md:text-[44px] lg:text-[60px] xl:text-[64px] leading-[1.05]">
                  {s.title}
                  <br />
                  <span className="italic font-medium">{s.emphasis}</span>
                </p>
              )}
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
                {s.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={s.primary.to as never}
                  params={s.primary.params as never}
                  className="inline-flex items-center gap-2 rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:scale-[1.02]"
                >
                  {s.primary.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => go(active - 1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(active + 1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}