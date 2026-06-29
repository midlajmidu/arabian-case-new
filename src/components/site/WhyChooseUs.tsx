import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Clock, Sliders, Award, Building2, Zap, Globe2, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";

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

        {/* Unified Card Container */}
        <div
          className={cn(
            "overflow-hidden rounded-[24px] border border-neutral-200/60 bg-[#FAF9F5] shadow-xl grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] xl:grid-cols-[1fr_2.2fr] items-stretch transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {/* Left Column: Dark Navy Blue */}
          <div className="relative overflow-hidden bg-brand-navy p-8 sm:p-12 lg:p-10 xl:p-14 flex flex-col justify-between text-white min-h-[480px] lg:min-h-0">
            {/* Background design elements */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl" />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl" />

            <div className="relative z-10 space-y-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Why Choose Us
              </p>

              {/* UAE Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4.5 py-2.5 text-sm font-medium text-brand-gold w-fit">
                <svg width="24" height="16" viewBox="0 0 3 2" className="rounded-sm shrink-0">
                  <rect width="3" height="2" fill="#fff" />
                  <rect width="3" height="0.67" fill="#00732f" />
                  <rect width="3" height="0.67" y="1.33" fill="#000" />
                  <rect width="0.75" height="2" fill="#ff0000" />
                </svg>
                <span>Proudly made in UAE</span>
              </div>

              {/* Editorial Heading */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[26px] xl:text-[32px] leading-tight text-white pt-2">
                Built to Protect.<br />
                <span className="text-brand-gold font-sans font-medium block mt-1">Made to Perform.</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-md pt-2">
                A premier UAE manufacturer of custom flight cases, precision CNC foam inserts, and heavy-duty industrial packaging. Designed and built in our Dubai facility to exacting standards, we combine advanced engineering with local manufacturing expertise to deliver maximum protection for your critical assets.
              </p>
            </div>

            {/* Explore Button */}
            <div className="relative z-10 mt-10 lg:mt-auto pt-6 border-t border-white/10">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 w-full text-center cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105">
                  <Briefcase className="h-4 w-4 shrink-0" />
                  <span>Explore products</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FAF9F5]">
            {/* Cell 1: ISO Quality */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b border-neutral-200/60 md:border-r md:border-neutral-200/60 relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-gold/10 text-brand-navy transition duration-300 group-hover:bg-brand-gold/20">
                <Award className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  ISO<br />
                  Certified quality
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Internationally recognised standards
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Cell 2: Experience */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b border-neutral-200/60 relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Clock className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  10 <span className="text-neutral-500 font-sans font-medium text-lg">+ yrs</span><br />
                  Experience
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Decade of precision manufacturing
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Cell 3: Custom Manufactured */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b border-neutral-200/60 md:border-r md:border-neutral-200/60 relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Sliders className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  Custom<br />
                  Manufactured
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Built to your exact specs, every time
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Cell 4: Trusted clients */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b border-neutral-200/60 relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  500 <span className="text-neutral-500 font-sans font-medium text-lg">+</span><br />
                  Trusted clients
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Government & corporate partners
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Cell 5: Fast Turnaround */}
            <div className="p-8 sm:p-10 flex flex-col justify-between border-b border-neutral-200/60 md:border-b-0 md:border-r md:border-neutral-200/60 relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  Fast<br />
                  Turnaround
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Express timelines, all seven emirates
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Cell 6: Export Worldwide */}
            <div className="p-8 sm:p-10 flex flex-col justify-between relative group cursor-default">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy transition duration-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Globe2 className="h-6 w-6" />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl text-neutral-900 leading-tight">
                  Worldwide<br />
                  Export capacity
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Certified heavy-duty export packaging
                </p>
              </div>
              {/* Animated highlight bar on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
