import { MapPin } from "lucide-react";
import { Section } from "./Section";

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain"
];

export function UAECoverage() {
  return (
    <Section className="bg-brand-soft !py-20 md:!py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">UAE Coverage</p>
          <h2 className="font-display text-brand-navy">Delivery across all seven emirates</h2>
          <p className="mt-4 text-base text-brand-text-secondary leading-relaxed max-w-lg">
            From our Dubai facility we deliver to every emirate, with on-site installation and
            after-sales support included.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {emirates.map((e) => (
            <div 
              key={e} 
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-3 transition hover:border-brand-navy/25 hover:shadow-sm"
            >
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">{e}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
