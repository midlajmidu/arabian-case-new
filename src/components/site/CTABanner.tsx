import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import heroFlight from "@/assets/hero-flight-cases.webp";

export function CTABanner({
  title = "Need a Custom Manufacturing Quote?",
  description = "Cases, covers, foam, crates and furniture — manufactured in Dubai to your exact specifications. Tell us what you need and we'll respond within 24 hours.",
}: { title?: string; description?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[24px] bg-brand-navy">
          <img
            src={heroFlight}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">Let's build together</p>
            <h2 className="font-display text-3xl md:text-[42px] leading-tight text-white">{title}</h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:scale-[1.02]"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}