import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { ContactSection } from "./contact-section";
import { PageFooter } from "./page-footer";

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <PageFooter />
    </div>
  );
}