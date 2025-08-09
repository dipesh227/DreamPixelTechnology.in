import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeaturesSection } from "@/components/landing/features-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 circuit-background">
            <div className="absolute inset-0 circuit-glow" />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter !leading-[1.2]">
              Unify Your Content. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-yellow">Amplify</span> Your Reach.
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              DreamPixel is the all-in-one platform for content management and AI-driven social media automation. Build your brand, engage your audience, and grow your business—all from one place.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                <Link href="/register">Get Started for Free <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/hero-graphic.png" alt="DreamPixel platform illustration" width={600} height={500} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            Join hundreds of businesses growing with DreamPixel. Get started today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
            <Link href="/register">Sign Up Now <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}