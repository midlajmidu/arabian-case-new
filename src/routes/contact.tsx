import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How fast can I get a quote?", a: "Within 24 hours of receiving your brief or equipment specifications." },
  { q: "Do you deliver across the UAE?", a: "Yes — we deliver to all seven emirates and offer on-site installation where required." },
  { q: "Can I visit your factory?", a: "Yes, factory visits are welcome by appointment at our Dubai facility." },
  { q: "Do you offer installation?", a: "Yes — full on-site installation and after-sales support across the UAE." },
  { q: "What's your minimum order?", a: "We accept single-unit custom orders as well as large production runs." },
  { q: "What payment terms do you accept?", a: "Standard 50% deposit / 50% on delivery; corporate accounts available." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${SITE.name} — Get a Quote` },
      { name: "description", content: "Contact Arabian Cases & Furniture for custom flight cases, foam, crates, bags, exhibition stands and furniture in the UAE." },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <div className="bg-brand-navy text-white">
        <div className="container-page py-20 md:py-24">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1 className="mt-6 font-display text-4xl md:text-6xl">Let's build something <span className="italic">remarkable.</span></h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">Tell us about your project and we'll respond within 24 hours.</p>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-[18px] border border-brand-border bg-white p-8"
          >
            <h2 className="font-display text-2xl text-brand-navy">Send us a message</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input required placeholder="Your name" className="rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <input required type="email" placeholder="Email" className="rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <input placeholder="Phone" className="rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
              <input placeholder="Company" className="rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
            </div>
            <textarea required placeholder="Tell us about your project" rows={5} className="mt-4 w-full rounded-[10px] border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-navy" />
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-hover">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="mt-4 text-sm text-[color:var(--brand-success)]">Thanks — we'll be in touch shortly.</p>}
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-[18px] border border-brand-border bg-white p-6">
              <MapPin className="h-5 w-5 text-brand-gold" />
              <p className="mt-3 font-display text-lg text-brand-navy">Visit</p>
              <p className="mt-1 text-sm text-brand-text-secondary">{SITE.address.street}, {SITE.address.city}, {SITE.address.country}</p>
            </div>
            <div className="rounded-[18px] border border-brand-border bg-white p-6">
              <Phone className="h-5 w-5 text-brand-gold" />
              <p className="mt-3 font-display text-lg text-brand-navy">Call</p>
              <a href={`tel:${SITE.phoneIntl}`} className="mt-1 text-sm text-brand-text-secondary hover:text-brand-navy">{SITE.phone}</a>
            </div>
            <div className="rounded-[18px] border border-brand-border bg-white p-6">
              <Mail className="h-5 w-5 text-brand-gold" />
              <p className="mt-3 font-display text-lg text-brand-navy">Email</p>
              <a href={`mailto:${SITE.email}`} className="mt-1 text-sm text-brand-text-secondary hover:text-brand-navy">{SITE.email}</a>
            </div>
            <WhatsAppButton className="w-full justify-center" label="Chat on WhatsApp" />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[18px] border border-brand-border">
          <iframe
            title="Arabian Cases Dubai"
            src="https://www.google.com/maps?q=26th+A+Street+Umm+Ramool+Dubai&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div className="mx-auto max-w-3xl"><FAQ items={faqs} /></div>
      </Section>
    </div>
  );
}