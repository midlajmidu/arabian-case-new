import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem { q: string; a: string }

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-brand-border rounded-[18px] border border-brand-border bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-brand-navy">{it.q}</span>
              <ChevronDown className={cn("h-5 w-5 text-brand-navy transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-brand-text-secondary leading-relaxed">{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}