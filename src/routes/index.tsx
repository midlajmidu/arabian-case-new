import { createFileRoute } from "@tanstack/react-router";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { OurProcess } from "@/components/site/OurProcess";
import { HeroSlider } from "@/components/site/HeroSlider";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { UAECoverage } from "@/components/site/UAECoverage";
import { CTABanner } from "@/components/site/CTABanner";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Premium Flight Cases, Foam, Crates & Furniture UAE` },
      { name: "description", content: SITE.description },
      { name: "keywords", content: "flight cases UAE, custom foam inserts Dubai, shipping crates Dubai, exhibition stands UAE, office furniture Dubai, industrial manufacturing UAE" },
      { property: "og:title", content: `${SITE.name} — Dubai Manufacturer of Cases, Covers & Furniture` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white">
      <HeroSlider />

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <OurProcess />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedProducts />
      </ScrollReveal>

      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>

      {/* <ScrollReveal>
        <UAECoverage />
      </ScrollReveal> */}
    </div>
  );
}


