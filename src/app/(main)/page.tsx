import { HeroSection } from "@/components/landing/hero-section";
import { LatestArticlesSection } from "@/components/landing/latest-articles-section";
import { AboutSection } from "@/components/landing/about-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeaturedInSection } from "@/components/landing/featured-in-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LatestArticlesSection />
      <AboutSection />
      <PricingSection />
      <FaqSection />
      <FeaturedInSection />
    </div>
  );
}