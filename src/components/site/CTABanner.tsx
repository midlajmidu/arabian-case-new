import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Clock, ShieldCheck, Truck, Pencil } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import heroFlight from "@/assets/hero-flight-cases.webp";

export function CTABanner({
  title = "Need a Custom Manufacturing Quote?",
  description = "Cases, covers, foam, crates and furniture — manufactured in Dubai to your exact specifications. Tell us what you need and we'll respond within 24 hours.",
}: { title?: string; description?: string }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page py-16 md:py-24">
        {/* Decorative ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-navy/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative overflow-hidden rounded-[4px] bg-brand-navy border border-white/10 shadow-2xl">
          {/* Background image & gradient overlay */}
          <img
            src={heroFlight}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.2] mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/85" />

          {/* Asymmetrical Grid Layout */}
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.25fr_1fr] items-center px-8 py-16 md:px-16 md:py-20 max-w-7xl mx-auto">

            {/* Left Column: Premium Content & Benefits */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.3em] block">
                Let's Build Together
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-white leading-[1.15] tracking-tight">
                Need a Quote?
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mt-2">
                {description}
              </p>

              {/* Core Trust Benefits (Desktop Only) */}
              <div className="hidden lg:grid grid-cols-3 gap-6 mt-6 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-[4px] bg-white border border-white/20 flex items-center justify-center text-brand-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">24hr Response</h4>
                  <p className="text-xs text-white/50">Fast consultation turnarounds</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-[4px] bg-white border border-white/20 flex items-center justify-center text-brand-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">Precision CAD</h4>
                  <p className="text-xs text-white/50">Engineered to the millimeter</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-[4px] bg-white border border-white/20 flex items-center justify-center text-brand-gold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">UAE Delivery</h4>
                  <p className="text-xs text-white/50">Direct shipping to all emirates</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive CTA Panel */}
            <div className="flex flex-col gap-4">

              {/* Primary: Request Quote Card */}
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-[4px] bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[4px] bg-brand-navy flex items-center justify-center text-white">
                    <Pencil className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-brand-navy font-semibold text-base">Request Custom Quote</h3>
                    <p className="text-xs text-brand-dark-gray mt-0.5">Submit your specifications online</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-navy/35 group-hover:text-brand-navy transition-colors" />
              </Link>

              {/* Secondary: WhatsApp Instant Chat */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[4px] bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[4px] bg-brand-navy flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-brand-navy font-semibold text-base">WhatsApp Chat</h3>
                    <p className="text-xs text-brand-dark-gray mt-0.5">Instant message with our sales team</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-navy/35 group-hover:text-brand-navy transition-colors" />
              </a>

              {/* Tertiary: Direct Call */}
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="group relative overflow-hidden rounded-[4px] bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[4px] bg-brand-navy flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-brand-navy font-semibold text-base">Call Consultation</h3>
                    <p className="text-xs text-brand-dark-gray mt-0.5">Discuss details directly on the phone</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-navy/35 group-hover:text-brand-navy transition-colors" />
              </a>

            </div>

            {/* Mobile Core Trust Benefits (Absolute Bottom, Row Layout, No Descriptions) */}
            <div className="lg:hidden grid grid-cols-3 gap-3 border-t border-white/10 pt-6 mt-4 w-full">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-[4px] bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-medium text-white">24hr Response</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-[4px] bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-medium text-white">Precision CAD</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-[4px] bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                  <Truck className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-medium text-white">UAE Delivery</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}