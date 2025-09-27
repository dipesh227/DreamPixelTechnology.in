import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section"; // Reintroducing AboutSection
// The original ServicesSection is replaced by the more detailed DigitalSolutionsSection
import { ContactSection } from "./contact-section";
import { PageFooter } from "./page-footer";
import { TestimonialsSection } from "./testimonials-section";
import { PricingSection } from "./pricing-section"; // Reintroducing PricingSection
import { RecentWorksSection } from "./recent-works-section";
import { DigitalSolutionsSection } from "./digital-solutions-section";
import { WhatYouCanExpectSection } from "./what-you-can-expect-section";
import { WhatMakesUsUniqueSection } from "./what-makes-us-unique-section";
import { FAQSection } from "./faq-section";

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <RecentWorksSection />
        <DigitalSolutionsSection /> {/* This covers services in a more detailed way */}
        <WhatYouCanExpectSection />
        <WhatMakesUsUniqueSection />
        <AboutSection /> {/* Placed after unique selling points */}
        <PricingSection /> {/* Placed after about and before testimonials */}
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <PageFooter />
    </div>
  );
}