import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { SITE } from "@/lib/site";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
const OurProcess = lazy(() => import("@/components/site/OurProcess").then(m => ({ default: m.OurProcess })));
const FeaturedProducts = lazy(() => import("@/components/site/FeaturedProducts").then(m => ({ default: m.FeaturedProducts })));
const CTABanner = lazy(() => import("@/components/site/CTABanner").then(m => ({ default: m.CTABanner })));
const QualityTrust = lazy(() => import("@/components/site/QualityTrust").then(m => ({ default: m.QualityTrust })));

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

      <Suspense fallback={null}>


        <ScrollReveal>
          <OurProcess />
        </ScrollReveal>

        <ScrollReveal>
          <FeaturedProducts />
        </ScrollReveal>

        <ScrollReveal>
          <QualityTrust />
        </ScrollReveal>


        <ScrollReveal>
          <CTABanner />
        </ScrollReveal>
      </Suspense>
    </div>
  );
}


