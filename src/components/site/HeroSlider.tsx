import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import flightCasesImg from "@/assets/hero-flight-cases.webp";
import foamImg from "@/assets/hero-foam-inserts.webp";
import cratesImg from "@/assets/hero-shipping-crates.webp";
import bagsImg from "@/assets/hero-custom-bags.webp";
import furnitureImg from "@/assets/hero-furniture-premium.webp";

interface Slide {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: { to: string; params?: Record<string, string> };
}

const slides: Slide[] = [
  {
    category: "Flight Cases",
    title: "Custom Flight Cases Built for Protection",
    description:
      "Manufactured in our Dubai facility for professional equipment, broadcasting and touring use.",
    image: flightCasesImg,
    imageAlt: "Premium flight cases manufactured in UAE",
    href: { to: "/products/$category", params: { category: "flight-cases" } },
  },
  {
    category: "Shipping Crates",
    title: "Premium Packaging & Shipping Crates",
    description:
      "ISPM-15 certified wooden crates and custom packaging for sea, air and road freight.",
    image: cratesImg,
    imageAlt: "Heavy-duty shipping crates Dubai",
    href: { to: "/products/$category", params: { category: "shipping-crates" } },
  },
  {
    category: "Foam Inserts",
    title: "Custom Foam Inserts for Secure Transport",
    description:
      "Laser and CNC-cut foam manufactured to your equipment dimensions.",
    image: foamImg,
    imageAlt: "Custom foam inserts UAE",
    href: { to: "/products/$category", params: { category: "foam-inserts" } },
  },
  {
    category: "Bags & Covers",
    title: "Custom Bags, Covers & Packaging Built to Last",
    description:
      "Heavy-duty equipment bags, utility covers and industrial packaging built in Dubai.",
    image: bagsImg,
    imageAlt: "Custom equipment bags UAE",
    href: { to: "/products/$category", params: { category: "custom-bags" } },
  },
  {
    category: "Furniture",
    title: "Quality Furniture Fabrication, Made in Dubai",
    description:
      "Bespoke furniture for offices, hospitality and homes — manufactured in our Dubai facility.",
    image: furnitureImg,
    imageAlt: "Custom office furniture Dubai",
    href: { to: "/products/$category", params: { category: "furniture" } },
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Corporate Clients" },
  { value: "100%", label: "Custom Built" },
];

const features = [
  { icon: Sparkles, label: "Premium Quality" },
  { icon: ShieldCheck, label: "Custom Solutions" },
  { icon: Truck, label: "On-Time Delivery" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => setActive((i + slides.length) % slides.length);
  const s = slides[active];

  return (
    <section className="relative overflow-hidden bg-white border-b border-brand-border/40 lg:h-[700px] flex items-center">
      {/* Premium Cinematic Background Video Loop (Industrial/Manufacturing) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.9] transition-opacity duration-1000"
        >
          <source
            src="https://player.vimeo.com/external/500063987.hd.mp4?s=8d5eb87722970e0b531ea0bec57b833c5e27e14c&profile_id=175"
            type="video/mp4"
          />
        </video>
        {/* Soft background blending overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/5 via-slate-500 to-brand-gold/5" />
      </div>

      <div className="relative z-10 container-page py-12 lg:py-0 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* LEFT */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-brand-border bg-brand-soft px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-navy">
              Manufactured in Dubai, UAE
            </span>
            <h1 className="mt-5 font-display text-brand-navy">
              Custom Cases, Covers & Packaging{" "}
              <span className="italic text-brand-navy/90">Built to Last</span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white leading-relaxed">
              Manufacturers of flight cases, mixer & speaker cases, utility covers, foam inserts,
              shipping crates, custom bags and bespoke furniture — built in our Dubai facility for clients across the UAE.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((st) => (
                <div key={st.label}>
                  <p className="font-display text-3xl md:text-[34px] text-brand-navy leading-none">{st.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white leading-tight">{st.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-navy/15 transition hover:bg-brand-navy-hover hover:scale-[1.02]"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-brand-text-secondary">
                  <f.icon className="h-4 w-4 text-brand-gold" />
                  <span className="font-medium text-brand-navy">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — slider card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] border border-brand-border bg-brand-navy shadow-2xl shadow-brand-navy/10 h-[400px] sm:h-[460px] lg:h-[480px] w-full">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none",
                  )}
                  aria-hidden={i !== active}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  {s.category}
                </p>
                <h2 className="mt-3 font-display text-white text-2xl md:text-3xl leading-tight">{s.title}</h2>
                <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-md">{s.description}</p>
                <Link
                  to={s.href.to as never}
                  params={s.href.params as never}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-brand-navy transition hover:scale-[1.03]"
                >
                  View Product <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <button
                onClick={() => go(active - 1)}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(active + 1)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "w-8 bg-brand-navy" : "w-4 bg-brand-border hover:bg-brand-navy/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}