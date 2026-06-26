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
    <Section className="!py-20 md:!py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Our Manufacturing</p>
          <h2 className="font-display text-brand-navy">Cases, covers, packaging & furniture</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollCarousel(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-white text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

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
            className="group relative shrink-0 snap-start overflow-hidden rounded-[20px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-xl
                       w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
              <img
                src={c.image}
                alt={c.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">{c.short}</p>
              <h3 className="mt-2 font-display text-xl text-brand-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed line-clamp-2">{c.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
