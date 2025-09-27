import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { ContactSection } from "./contact-section";
import { PageFooter } from "./page-footer";
import { FeaturesSection } from "./features-section";
import { TestimonialsSection } from "./testimonials-section";
import { PricingSection } from "./pricing-section";
import { CoursesSection } from "./courses-section";

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <PageFooter />
    </div>
  );
}