import { Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { categories } from "@/data/catalog";

export function FeaturedProducts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 360;

    if (dir === 1) {
      // Check if we're near the end of the scroll width
      const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 15;
      if (isEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
    } else {
      // Check if we're at the very start
      const isStart = el.scrollLeft <= 15;
      if (isStart) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
        return;
      }
    }

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredRef.current) {
        scrollCarousel(1);
      }
    }, 4000); // Autoscroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const featured = categories.slice(0, 6);

  return (
    <Section className="bg-[#f0f3fa] !py-16 md:!py-20 lg:!py-24 overflow-hidden">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[40px] leading-tight text-brand-navy tracking-tight">
            Our Manufacturing
          </h2>
        </div>
        <div className="hidden lg:flex gap-3">
          <button
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm border border-neutral-100 transition-all duration-300 hover:bg-brand-navy hover:text-white hover:border-brand-navy cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm border border-neutral-100 transition-all duration-300 hover:bg-brand-navy hover:text-white hover:border-brand-navy cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative min-w-0">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          {featured.map((c) => (
            <Link
              key={c.slug}
              data-card
              to="/products/$category"
              params={{ category: c.slug }}
              className="group relative shrink-0 snap-start overflow-hidden rounded-[4px] bg-[#e8ecf4] p-6 transition-all duration-500
                         w-[85%] sm:w-[48%] lg:w-[calc((100%-3rem)/3)] flex flex-col justify-between min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[4px]">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Details Footer */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-brand-navy/60 uppercase tracking-[0.15em] truncate mb-0.5">
                    {c.short}
                  </p>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-brand-navy truncate">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-brand-text-secondary leading-relaxed line-clamp-2">
                    {c.tagline}
                  </p>
                </div>

                {/* Arrow Action Button */}
                <div className="shrink-0 h-11 w-11 rounded-full bg-brand-navy text-white flex items-center justify-center transition-all duration-300 group-hover:bg-brand-navy-hover group-hover:text-white shadow-sm mt-0.5">
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Controls for Mobile/Tablet */}
        <div className="flex lg:hidden gap-3 mt-6 justify-center">
          <button
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm transition-all duration-300 hover:bg-brand-navy hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm border border-neutral-100 transition-all duration-300 hover:bg-brand-navy hover:text-white hover:border-brand-navy cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
