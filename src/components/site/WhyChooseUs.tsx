import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Award, Sparkles, Users, Truck, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const whyUs = [
  { icon: Award, title: "Premium Materials", desc: "Built using premium birch plywood, Penn Elcom hardware, and industrial-grade foam." },
  { icon: Sparkles, title: "Custom Manufacturing", desc: "Every product built to your exact requirements, dimensions, and specifications." },
  { icon: Users, title: "Experienced Team", desc: "Designers, engineers and craftsmen with decades on the floor." },
  { icon: Truck, title: "Fast Delivery", desc: "Across UAE — express production and on-time delivery guaranteed." },
  { icon: ShieldCheck, title: "Made in Dubai", desc: "End-to-end manufacturing under one roof in our Dubai facility." },
  { icon: Headphones, title: "After-Sales Support", desc: "Full support from brief to delivery and beyond." },
];

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="bg-white border-b border-brand-border/40">
      <div ref={sectionRef} className="container-page py-20 md:py-24 lg:py-28">

        {/* Header */}
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-brand-gold text-3xl sm:text-4xl md:text-[40px] leading-tight">
            Quality.{" "}
            <span className="italic text-brand-navy">Craftsmanship.</span>{" "}
            <span className="italic text-slate-400">Precision.</span>
          </h2>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-navy bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy/80 hover:scale-[1.02]"
          >
            Explore Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards — single row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {whyUs.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={cn(
                "group rounded-[4px] border border-brand-border/60 bg-white p-4 sm:p-5 transition-all duration-700 ease-out hover:border-brand-gold/40 hover:shadow-md hover:shadow-brand-navy/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isVisible ? `${100 + index * 60}ms` : "0ms" }}
            >
              <div className="grid h-9 w-9 place-items-center rounded-[4px] bg-brand-navy/5 text-brand-navy transition group-hover:bg-brand-gold/10 group-hover:text-brand-gold">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-3 font-display text-sm sm:text-base text-brand-navy leading-snug">
                {title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

