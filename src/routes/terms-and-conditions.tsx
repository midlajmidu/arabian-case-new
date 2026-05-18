import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${SITE.name}` },
      { name: "description", content: "Terms of service for orders placed with Arabian Cases & Furniture." },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: () => (
    <Section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
      <h1 className="mt-6 font-display text-4xl text-brand-navy">Terms & Conditions</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-brand-text-secondary leading-relaxed">
        <p>By placing an order with Arabian Cases & Furniture you agree to these terms.</p>
        <p>Quotes are valid for 30 days. Standard payment terms are 50% deposit, 50% on delivery. Lead times begin once specifications are confirmed and deposit received.</p>
        <p>Custom manufactured goods are non-refundable once production has started. Defects must be reported within 7 days of delivery.</p>
      </div>
    </Section>
  ),
});