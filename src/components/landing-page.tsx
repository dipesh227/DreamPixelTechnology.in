import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { ContactSection } from "./contact-section";
import { PageFooter } from "./page-footer";
import { TestimonialsSection } from "./testimonials-section";
import { PricingSection } from "./pricing-section";
import { RecentWorksSection } from "./recent-works-section"; // New
import { DigitalSolutionsSection } from "./digital-solutions-section"; // New
import { WhatYouCanExpectSection } from "./what-you-can-expect-section"; // New
import { WhatMakesUsUniqueSection } from "./what-makes-us-unique-section"; // New
import { FAQSection } from "./faq-section"; // New

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <RecentWorksSection />
        <DigitalSolutionsSection />
        <WhatYouCanExpectSection />
        <WhatMakesUsUniqueSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection /> {/* Keeping contact section for now, can be adjusted later if needed */}
      </main>
      <PageFooter />
    </div>
  );
}