import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function CategoryCard({
  slug,
  title,
  short,
  description,
  image,
  alt,
}: {
  slug: string;
  title: string;
  short: string;
  description?: string;
  image: string;
  alt: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px", // triggers when card is slightly inside the viewport
        threshold: 0.05,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      to="/products/$category"
      params={{ category: slug }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-brand-border bg-white p-5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between h-full transform",
        isVisible 
          ? "opacity-100 translate-y-0 shadow-sm hover:-translate-y-2 hover:shadow-xl" 
          : "opacity-0 translate-y-12 pointer-events-none"
      )}
    >
      <div className="flex flex-col">
        {/* Visual Image Showcase Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-brand-soft">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        </div>

        {/* Content Area */}
        <div className="mt-6 flex flex-col text-left">
          <h3 className="font-display text-2xl text-brand-navy tracking-tight leading-tight min-h-[60px] flex items-center">
            {title}
          </h3>

          {/* Decorative Divider: Dot & Line */}
          <div className="flex items-center gap-1.5 mt-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" />
            <span className="h-[2px] w-8 bg-brand-navy" />
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-brand-text-secondary leading-relaxed line-clamp-3">
            {description || `Premium custom ${title.toLowerCase()} manufactured in our Dubai facility to your exact requirements and dimensions.`}
          </p>
        </div>
      </div>

      {/* Interactive Bottom Button */}
      <div className="mt-8">
        <div className="w-full py-3 rounded-[12px] bg-brand-navy text-white font-semibold text-center text-sm transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy shadow-sm">
          Read more
        </div>
      </div>
    </Link>
  );
}