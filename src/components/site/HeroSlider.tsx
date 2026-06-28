import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import flightCasesImg from "@/assets/hero-flight-cases.webp";
import foamImg from "@/assets/hero-foam-inserts.webp";
import cratesImg from "@/assets/hero-shipping-crates.webp";
import bagsImg from "@/assets/hero-custom-bags.webp";
import furnitureImg from "@/assets/hero-furniture-premium.webp";
import heroVid from "@/assets/hero-vid.webm";

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
    <section className="relative overflow-hidden bg-white border-b border-brand-border/40 min-h-screen flex items-center">
      {/* Background video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src={heroVid} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/5 via-slate-500 to-brand-gold/5" />
      </div>

      <div className="relative z-10 w-full container-page py-20 sm:py-24 lg:py-16 xl:py-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">

          {/* LEFT — text content */}
          <div className="animate-fade-up order-1 lg:order-1">
            <span className="inline-flex items-center rounded-full border border-brand-navy bg-brand-navy px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-white">
              Manufactured in Dubai, UAE
            </span>
            <h1 className="mt-4 sm:mt-5 font-display text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
              Custom Cases, Covers &amp; Packaging{" "}
              <span className="italic text-brand-gold">Built to Last</span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Manufacturers of flight cases, mixer &amp; speaker cases, utility covers, foam inserts,
              shipping crates, custom bags and bespoke furniture — built in our Dubai facility for clients across the UAE.
            </p>

            <div className="mt-6 sm:mt-7 grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-md">
              {stats.map((st) => (
                <div key={st.label}>
                  <p className="font-display text-2xl sm:text-3xl md:text-[34px] text-brand-gold leading-none">{st.value}</p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white leading-tight">{st.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-md shadow-brand-navy/15 transition hover:bg-brand-navy-hover hover:scale-[1.02]"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 sm:gap-y-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-xs sm:text-sm">
                  <f.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-gold" />
                  <span className="font-medium text-white">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — slider card */}
          <div className="order-2 lg:order-2">
            {/* Outer card */}
            <div className="rounded-2xl bg-[#edf1f7] shadow-xl p-2.5 sm:p-3 pb-4 sm:pb-5">

              {/* Image inset */}
              <div className="relative overflow-hidden rounded-xl bg-white h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[460px] w-full">
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
                  </div>
                ))}
              </div>

              {/* Content row */}
              <div className="mt-3 sm:mt-4 px-1 sm:px-2">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  {s.category}
                </p>
                <h2 className="mt-1 sm:mt-1.5 font-display text-brand-navy text-lg sm:text-xl md:text-2xl leading-tight transition-all duration-500 line-clamp-1">
                  {s.category}
                </h2>
                <Link
                  to={s.href.to as never}
                  params={s.href.params as never}
                  className="mt-2 sm:mt-3 inline-flex items-center rounded-full bg-brand-navy px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-white shadow-md transition hover:scale-[1.04] hover:bg-brand-navy/80"
                >
                  View Product
                </Link>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active
                      ? "w-8 bg-brand-gold"
                      : "w-4 bg-white/60 hover:bg-white/80",
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