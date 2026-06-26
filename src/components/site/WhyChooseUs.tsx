import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Award, Sparkles, Users, Truck, ShieldCheck, Headphones } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const whyUs = [
  { icon: Award, title: "Premium Materials", desc: "Built using premium birch plywood, Penn Elcom hardware, high-quality furniture wood, and industrial-grade foam materials." },
  { icon: Sparkles, title: "Custom Manufacturing", desc: "Every product is built according to your requirements, dimensions, and specifications." },
  { icon: Users, title: "Experienced Team", desc: "Designers, engineers and craftsmen with decades on the floor." },
  { icon: Truck, title: "Fast Delivery", desc: "Across UAE — express production and on-time delivery." },
  { icon: ShieldCheck, title: "Made in Dubai", desc: "End-to-end manufacturing under one roof in our Dubai facility." },
  { icon: Headphones, title: "After-Sales Support", desc: "End-to-end support from brief to delivery and beyond." },
];

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Section className="bg-white !py-20 md:!py-24">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="Quality. Craftsmanship. Precision."
        align="center"
      />
      
      {/* Grid Section */}
      <div 
        ref={gridRef} 
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative w-full mt-6 md:mt-10 overflow-hidden border border-brand-border/40 sm:border-0 rounded-2xl sm:rounded-none",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
        style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dim base lines: Vertical */}
        <div className="absolute top-0 bottom-0 left-1/2 lg:left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[#0066ff]/12 to-transparent pointer-events-none hidden sm:block" />
        <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-gradient-to-b from-transparent via-[#0066ff]/12 to-transparent pointer-events-none hidden lg:block" />

        {/* Dim base lines: Horizontal */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/12 to-transparent pointer-events-none top-1/6 sm:top-1/3 lg:top-1/2" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/12 to-transparent pointer-events-none top-2/6 sm:top-2/3 lg:hidden" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/12 to-transparent pointer-events-none top-1/2 sm:hidden" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/12 to-transparent pointer-events-none top-2/3 sm:hidden" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/12 to-transparent pointer-events-none top-5/6 sm:hidden" />

        {/* Spotlight layer: bright lines, masked to a radial circle around cursor */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300" 
          style={{
            maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            opacity: isHovered ? 1 : 0,
          }}
        >
          {/* Spotlight lines: Vertical */}
          <div className="absolute top-0 bottom-0 left-1/2 lg:left-1/3 w-px bg-gradient-to-b from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] hidden sm:block" />
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] hidden lg:block" />

          {/* Spotlight lines: Horizontal */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] top-1/6 sm:top-1/3 lg:top-1/2" />
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] top-2/6 sm:top-2/3 lg:hidden" />
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] top-1/2 sm:hidden" />
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] top-2/3 sm:hidden" />
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff] to-transparent shadow-[0_0_5px_0.5px_#0066ff] top-5/6 sm:hidden" />
        </div>

        {/* Glowing Nodes: Tablet (sm to lg) */}
        <div className="absolute w-[5px] h-[5px] bg-[#0066ff] rounded-full shadow-[0_0_15px_4px_rgba(0,102,255,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/3 hidden sm:block lg:hidden" />
        <div className="absolute w-[5px] h-[5px] bg-[#0066ff] rounded-full shadow-[0_0_15px_4px_rgba(0,102,255,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-2/3 hidden sm:block lg:hidden" />

        {/* Glowing Nodes: Desktop (lg+) */}
        <div className="absolute w-[5px] h-[5px] bg-[#0066ff] rounded-full shadow-[0_0_15px_4px_rgba(0,102,255,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/3 top-1/2 hidden lg:block" />
        <div className="absolute w-[5px] h-[5px] bg-[#0066ff] rounded-full shadow-[0_0_15px_4px_rgba(0,102,255,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none left-2/3 top-1/2 hidden lg:block" />

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full relative z-10">
          {whyUs.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={cn(
                "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center p-6 sm:p-7 md:p-8 text-center group",
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: isVisible ? `${150 + index * 45}ms` : '0ms',
              }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
