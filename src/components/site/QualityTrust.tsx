import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const materials = [
  "High-quality Birch Plywood",
  "Honeycomb Composite Panels",
  "Aluminum Extrusions",
  "Heavy-Duty Butterfly Latches",
  "Recessed Handles",
  "Industrial Castor Wheels",
  "CNC-Cut EVA & PE Foam",
  "Piano Hinge & Corner Hardware",
];

export function QualityTrust() {
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
    <section className="border-b border-white/10" style={{ backgroundColor: "oklch(0.20 0.10 268)" }}>
      <div ref={sectionRef} className="container-page py-20 md:py-24 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Header + paragraph */}
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Our Standards
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[40px] leading-tight text-white">
              Quality You <span className="italic text-brand-gold">Can Trust</span>
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              Every case undergoes strict quality inspections throughout the manufacturing process. We use premium materials including:
            </p>
            <div className="mt-8">
              <Link
                to="/industries"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:scale-[1.02]"
              >
                Industries We Serve
              </Link>
            </div>
            <div className="mt-8 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-sm text-white/50 leading-relaxed italic">
              This ensures every product delivers exceptional strength, long service life, and reliable protection even in demanding environments.
            </p>
          </div>

          {/* Right: Materials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 self-center">
            {materials.map((item, index) => (
              <div
                key={item}
                className={cn(
                  "group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all duration-500 ease-out hover:border-brand-gold/40 hover:bg-white/8",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                )}
                style={{ transitionDelay: isVisible ? `${100 + index * 60}ms` : "0ms" }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold transition group-hover:scale-110" />
                <span className="text-sm font-medium text-white/80 leading-snug group-hover:text-white transition">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
