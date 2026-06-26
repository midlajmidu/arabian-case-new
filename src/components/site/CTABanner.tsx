import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageSquare, Clock, ShieldCheck, Truck } from "lucide-react";
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

        <div className="relative overflow-hidden rounded-[32px] bg-brand-navy border border-white/10 shadow-2xl">
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
                Need a Custom <br className="hidden md:block" />
                Manufacturing Quote?
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mt-2">
                {description}
              </p>

              {/* Core Trust Benefits (Desktop Only) */}
              <div className="hidden lg:grid grid-cols-3 gap-6 mt-6 border-t border-white/10 pt-8">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">24hr Response</h4>
                  <p className="text-xs text-white/50">Fast consultation turnarounds</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-1">Precision CAD</h4>
                  <p className="text-xs text-white/50">Engineered to the millimeter</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
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
                className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-white">
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
                className="group relative overflow-hidden rounded-[20px] bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-base">WhatsApp Chat</h3>
                    <p className="text-xs text-white/50 mt-0.5">Instant message with our sales team</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
              </a>

              {/* Tertiary: Direct Call */}
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="group relative overflow-hidden rounded-[20px] bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-base">Call Consultation</h3>
                    <p className="text-xs text-white/50 mt-0.5">Discuss details directly on the phone</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
              </a>

            </div>

            {/* Mobile Core Trust Benefits (Absolute Bottom, Row Layout, No Descriptions) */}
            <div className="lg:hidden grid grid-cols-3 gap-3 border-t border-white/10 pt-6 mt-4 w-full">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-medium text-white">24hr Response</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs font-medium text-white">Precision CAD</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
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