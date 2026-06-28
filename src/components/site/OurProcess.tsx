import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./Section";

// Import process assets
import planningImg from "@/assets/process/planning.webp";
import designImg from "@/assets/process/design.webp";
import materialsImg from "@/assets/process/materials.webp";
import manufacturingImg from "@/assets/process/manufacturing.webp";
import testingImg from "@/assets/process/testing.webp";
import deliveryImg from "@/assets/process/delivery.webp";

const processSteps = [
  {
    num: "01",
    title: "Planning",
    tagline: "Consultation & Sizing",
    desc: "We discuss your specific protective requirements, equipment dimensions, transport scenarios, and branding guidelines to outline exact structural specifications.",
    image: planningImg,
  },
  {
    num: "02",
    title: "Design",
    tagline: "3D CAD Modeling & Engineering",
    desc: "Our engineers build detailed 3D models of your products. We design custom foam inserts and structural support frames down to the millimeter.",
    image: designImg,
  },
  {
    num: "03",
    title: "Material Selection",
    tagline: "Premium Industrial Sourcing",
    desc: "We select from top-quality raw materials: Penn Elcom hardware, premium multi-ply birch wood, high-density PE/EVA foams, and heat-treated export timbers.",
    image: materialsImg,
  },
  {
    num: "04",
    title: "Manufacturing",
    tagline: "High-Precision Fabrication",
    desc: "Our Dubai facility uses CNC routing, laser cutting, and skilled hand craftsmanship to build, laminate, panel, and assemble your product to perfection.",
    image: manufacturingImg,
  },
  {
    num: "05",
    title: "Quality Testing",
    tagline: "Rigorous Safety Inspections",
    desc: "Each unit undergoes strict load testing, locking checks, alignment inspection, and cosmetic verification to guarantee defect-free standards.",
    image: testingImg,
  },
  {
    num: "06",
    title: "Delivery",
    tagline: "Secure On-Time UAE Delivery",
    desc: "We securely pack and transport your cases using our dedicated fleet, offering express shipping across all emirates and on-site assembly.",
    image: deliveryImg,
  },
];

export function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // triggers when center of the screen crosses
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.replace("process-trigger-", ""), 10);
          if (!isNaN(index)) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    for (let i = 0; i < 6; i++) {
      const el = document.getElementById(`process-trigger-${i}`);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-[480vh] bg-brand-navy"
      >
        {/* Scroll Triggers (spaced to keep final step sticky) */}
        <div id="process-trigger-0" className="absolute top-[0vh] h-[70vh] w-full pointer-events-none" />
        <div id="process-trigger-1" className="absolute top-[70vh] h-[70vh] w-full pointer-events-none" />
        <div id="process-trigger-2" className="absolute top-[140vh] h-[70vh] w-full pointer-events-none" />
        <div id="process-trigger-3" className="absolute top-[210vh] h-[70vh] w-full pointer-events-none" />
        <div id="process-trigger-4" className="absolute top-[280vh] h-[70vh] w-full pointer-events-none" />
        <div id="process-trigger-5" className="absolute top-[350vh] h-[130vh] w-full pointer-events-none" />

        {/* Sticky viewport content */}
        <div className="sticky top-[90px] h-[calc(100vh-90px)] w-full flex flex-col justify-between overflow-hidden py-4 md:py-8">
          {/* Immersive background cross-fade (Active on both Desktop and Mobile) */}
          {processSteps.map((step, idx) => (
            <img
              key={`bg-img-${step.num}`}
              src={step.image}
              alt=""
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out select-none pointer-events-none",
                idx === activeStep ? "opacity-[0.2] scale-100 blur-[2px]" : "opacity-0 scale-105 pointer-events-none"
              )}
            />
          ))}

          {/* Navy dimming overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy pointer-events-none" />

          {/* Full Process Header: Slide to top & fade out when activeStep > 0 */}
          <div className={cn(
            "absolute top-8 md:top-12 lg:top-16 left-0 right-0 text-center px-6 z-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform",
            activeStep === 0
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          )}>
            <span className="text-brand-gold text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] block mb-1.5">
              Our Process
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[42px] leading-tight text-white mb-2 tracking-tight">
              From Brief to Delivery
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              A streamlined manufacturing process — from your brief to finished, on-time delivery.
            </p>
          </div>

          {/* Main Layout Container: Shifts down when activeStep === 0 to give space to the header */}
          <div className={cn(
            "relative z-10 flex-1 w-full max-w-[1280px] mx-auto px-6 flex items-center overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
            activeStep === 0 ? "pt-48 md:pt-56 lg:pt-64" : "pt-0"
          )}>

            {/* ========================================================================= */}
            {/* Desktop Layout (lg:grid) */}
            {/* ========================================================================= */}
            <div className="hidden lg:grid w-full grid-cols-[1.3fr_1fr] gap-16 items-center">

              {/* Left Column: Progress Step Nav */}
              <div className="flex flex-col gap-4 lg:gap-5">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.num}
                    className={cn(
                      "transition-all duration-500 cursor-pointer flex items-center group select-none relative",
                      idx === activeStep ? "opacity-100 translate-x-2" : "opacity-20 hover:opacity-50"
                    )}
                    onClick={() => {
                      document.getElementById(`process-trigger-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <h3 className={cn(
                      "font-display text-4xl lg:text-6xl xl:text-7xl font-extralight tracking-tight leading-tight transition-colors",
                      idx === activeStep ? "text-white" : "text-white/80"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Right Column: Visual Showcase Card */}
              <div className="relative overflow-hidden rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl h-[550px] flex flex-col justify-between">

                {/* Card Ambient Background Image Cross-fade (Flora AI style) */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden rounded-[4px]">
                  {processSteps.map((step, idx) => (
                    <img
                      key={`card-bg-img-${step.num}`}
                      src={step.image}
                      alt=""
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out blur-[4px] scale-105",
                        idx === activeStep ? "opacity-[0.16] scale-100" : "opacity-0 scale-105 pointer-events-none"
                      )}
                    />
                  ))}
                  {/* Subtle dark gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-navy/40 to-brand-navy/80" />
                </div>

                {/* Top: Showcase Image wrapper (wrapped in relative z-10) */}
                <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-brand-navy/30 shadow-inner">
                  {processSteps.map((step, idx) => (
                    <img
                      key={`card-img-${step.num}`}
                      src={step.image}
                      alt={step.title}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out",
                        idx === activeStep ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                      )}
                    />
                  ))}
                </div>

                {/* Bottom: Context details (wrapped in relative z-10) */}
                <div className="relative z-10 mt-6 flex-1 flex flex-col justify-center">
                  {processSteps.map((step, idx) => (
                    <div
                      key={`card-text-${step.num}`}
                      className={cn(
                        "transition-all duration-500",
                        idx === activeStep ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
                      )}
                    >
                      <span className="text-brand-gold text-[10px] font-semibold uppercase tracking-[0.2em]">
                        {step.tagline}
                      </span>
                      <h3 className="mt-1 font-display text-2xl text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* Mobile & Tablet Layout (lg:hidden) */}
            {/* ========================================================================= */}
            <div className="lg:hidden w-full h-full flex flex-col justify-between py-4 max-w-[640px] mx-auto">

              {/* Active Card container - Cross-fading the active step */}
              <div className="relative flex-1 flex items-center justify-center min-h-[360px] xs:min-h-[400px]">
                {processSteps.map((step, idx) => (
                  <div
                    key={`mobile-card-${step.num}`}
                    className={cn(
                      "absolute w-full transition-all duration-700 ease-in-out flex flex-col gap-4",
                      idx === activeStep
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                    )}
                  >
                    <div className="relative overflow-hidden rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 xs:p-6 shadow-2xl">

                      {/* Card Ambient Background Image */}
                      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden rounded-[4px]">
                        <img
                          src={step.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-[0.16] blur-[4px] scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-navy/40 to-brand-navy/80" />
                      </div>

                      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                        {/* Top title and step counter */}
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl xs:text-2xl font-extralight text-white tracking-tight">
                            {step.title}
                          </h3>
                          <span className="text-xs font-semibold font-mono text-brand-gold/70 tracking-widest">
                            {step.num} / 06
                          </span>
                        </div>

                        {/* Middle showcase image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-black/40 border border-white/5 shadow-inner">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Bottom tagline and desc */}
                        <div>
                          <span className="text-brand-gold text-[9px] font-semibold uppercase tracking-[0.2em] block mb-1">
                            {step.tagline}
                          </span>
                          <p className="text-xs xs:text-sm text-white/70 leading-relaxed font-light">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile bottom progress dots indicator */}
              <div className="flex justify-center gap-2 mt-4 z-20">
                {processSteps.map((_, idx) => (
                  <div
                    key={`dot-${idx}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                      idx === activeStep ? "w-6 bg-brand-gold" : "w-1.5 bg-white/20"
                    )}
                    onClick={() => {
                      document.getElementById(`process-trigger-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
