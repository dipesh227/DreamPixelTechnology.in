import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { ContactSection } from "./contact-section";
import { PageFooter } from "./page-footer";
import { ArticlesAndDealsSection } from "./articles-and-deals-section"; // Renamed from FeaturesSection
import { TestimonialsSection } from "./testimonials-section";
import { PricingSection } from "./pricing-section";
import { CoursesSection } from "./courses-section";
import { PodcastSection } from "./podcast-section"; // New
import { FeaturedInSection } from "./featured-in-section"; // New

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ArticlesAndDealsSection /> {/* Replaces FeaturesSection */}
        <AboutSection />
        <ServicesSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <PodcastSection />
        <FeaturedInSection />
        <ContactSection />
      </main>
      <PageFooter />
    </div>
  );
}