import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CategoryCard({
  slug,
  title,
  short,
  image,
  alt,
}: {
  slug: string;
  title: string;
  short: string;
  image: string;
  alt: string;
}) {
  return (
    <Link
      to="/products/$category"
      params={{ category: slug }}
      className="group relative overflow-hidden rounded-[18px] border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-[10px] uppercase tracking-[0.28em] text-brand-gold">{short}</p>
        <h3 className="mt-2 font-display text-2xl flex items-center justify-between">
          {title}
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
      </div>
    </Link>
  );
}