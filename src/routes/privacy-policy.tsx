import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      { name: "description", content: "How Arabian Cases & Furniture collects and uses your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-6 font-display text-4xl text-brand-navy">Privacy Policy</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-brand-text-secondary leading-relaxed">
        <p>We respect your privacy. This page describes what information we collect when you contact us or request a quote, and how we use it.</p>
        <p>We collect only the information you submit through our contact form (name, email, phone, company, message) and use it solely to respond to your enquiry.</p>
        <p>We do not sell or share your information with third parties. For any questions, contact us at {SITE.email}.</p>
      </div>
    </Section>
  ),
});