import { useRef, useState, useEffect, Fragment } from "react";
import { cn } from "@/lib/utils";
import { Award, Sparkles, Users, Truck, ShieldCheck, Compass, Coins, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";

const whyUs = [
  { icon: ShieldCheck, title: "Proudly Made in UAE", desc: "Designed, engineered, and manufactured in-house in our Dubai facility." },
  { icon: Sparkles, title: "Custom Built to Your Requirements", desc: "Every flight case built to your exact specifications, gear dimensions, and branding." },
  { icon: Award, title: "Premium Quality Materials", desc: "Built using premium birch plywood, Penn Elcom hardware, and high-grade foam." },
  { icon: Compass, title: "Precision Engineering", desc: "Using advanced CNC routing, laser etching, and custom 3D CAD design." },
  { icon: Truck, title: "Fast Production & Delivery", desc: "Express production timelines and reliable delivery across all seven emirates." },
  { icon: Users, title: "Experienced Manufacturing Team", desc: "Skilled craftsmen and engineers with decades of experience on the factory floor." },
  { icon: Coins, title: "Competitive Pricing", desc: "Get direct-from-manufacturer volume pricing and corporate rates." },
  { icon: Globe, title: "Worldwide Export Capability", desc: "Certified shipping boxes and heavy-duty wooden crates built for export logistics." },
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

  // Pre-configured row pairs for perfect horizontal alignment on desktop
  const rows = [
    {
      left: { ...whyUs[0], orderMobile: "order-2" }, // Proudly Made in UAE
      right: { ...whyUs[4], orderMobile: "order-7" } // Fast Production & Delivery
    },
    {
      left: { ...whyUs[1], orderMobile: "order-3" }, // Custom Built to Your Requirements
      right: { ...whyUs[5], orderMobile: "order-8" } // Experienced Manufacturing Team
    },
    {
      left: { ...whyUs[2], orderMobile: "order-4" }, // Premium Quality Materials
      right: { ...whyUs[6], orderMobile: "order-9" } // Competitive Pricing
    },
    {
      left: { ...whyUs[3], orderMobile: "order-5" }, // Precision Engineering
      right: { ...whyUs[7], orderMobile: "order-10" } // Worldwide Export Capability
    }
  ];

  return (
    <section className="bg-white border-b border-brand-border/40">
      <div ref={sectionRef} className="container-page py-20 md:py-24 lg:py-28">

        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] xl:grid-cols-[1fr_2.2fr] gap-8 lg:gap-8 xl:gap-16 items-stretch lg:min-h-[520px] transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="relative overflow-hidden rounded-[20px] bg-brand-navy p-6 sm:p-8 lg:p-6 xl:p-10 flex flex-col justify-between text-white min-h-[260px] sm:min-h-[320px] lg:h-full shadow-lg">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Why Choose Us
              </p>
              <h2 className="mt-6 font-display text-2xl sm:text-3xl md:text-[36px] lg:text-[28px] xl:text-[36px] leading-tight text-white">
                Why Choose <br />
                <span className="text-brand-gold">Arabian Cases?</span>
              </h2>
            </div>

            <div className="mt-8 lg:mt-auto">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:scale-[1.02] w-full text-center"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Right Column: Strengths Grid with aligned rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-8 xl:gap-x-12 gap-y-6 sm:gap-y-8 lg:gap-y-6 xl:gap-y-10 pt-4 lg:pt-2 lg:h-full items-start">

            {/* Headers (Row-aligned on desktop, ordered dynamically on mobile) */}
            <h4 className="col-span-1 pb-3 border-b border-brand-border text-[11px] font-bold uppercase tracking-[0.25em] text-brand-navy/40 order-1 sm:order-none">
              Manufacturing
            </h4>
            <h4 className="col-span-1 pb-3 border-b border-brand-border text-[11px] font-bold uppercase tracking-[0.25em] text-brand-navy/40 order-6 sm:order-none">
              Reliability &amp; Service
            </h4>

            {rows.map((row, idx) => (
              <Fragment key={idx}>
                {/* Left Column Item */}
                <div
                  className={cn(
                    "group flex items-start gap-4 transition-all duration-700 ease-out sm:order-none",
                    row.left.orderMobile
                  )}
                  style={{ transitionDelay: isVisible ? `${150 + idx * 80}ms` : "0ms" }}
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                    <row.left.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-brand-navy leading-snug group-hover:text-brand-navy/80">
                      {row.left.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                      {row.left.desc}
                    </p>
                  </div>
                </div>

                {/* Right Column Item */}
                <div
                  className={cn(
                    "group flex items-start gap-4 transition-all duration-700 ease-out sm:order-none",
                    row.right.orderMobile
                  )}
                  style={{ transitionDelay: isVisible ? `${250 + idx * 80}ms` : "0ms" }}
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                    <row.right.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-brand-navy leading-snug group-hover:text-brand-navy/80">
                      {row.right.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                      {row.right.desc}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}

            {/* Concluding Paragraph (Spans both columns) */}
            <div className="col-span-1 sm:col-span-2 mt-4 lg:mt-6 pt-6 border-t border-brand-border/60 order-11 sm:order-none">
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Whether you require a single prototype or large-scale production, our manufacturing team is committed to delivering durable, reliable, and professionally engineered flight cases designed to protect your equipment in the most demanding conditions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
