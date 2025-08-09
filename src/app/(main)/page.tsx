import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Share2, Sparkles, BarChart2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";

const features = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Unified CMS",
    description: "Effortlessly manage your website pages, blog posts, and stories from a single, intuitive dashboard.",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Social Automation",
    description: "Connect all your social accounts, schedule posts in advance, and publish across platforms with one click.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI-Powered Creativity",
    description: "Generate engaging, platform-aware captions and relevant hashtags instantly. Never run out of content ideas.",
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Growth Analytics",
    description: "Track post performance with clear analytics on impressions, likes, and shares to understand what works.",
  },
];

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Amplify</span> Your Reach.
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              DreamPixel is the all-in-one platform for content management and AI-driven social media automation. Build your brand, engage your audience, and grow your business—all from one place.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90 text-primary-foreground group" asChild>
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
      <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Manage Your Brand</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
              Everything you need to create, publish, and analyze your digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 border-border/80 hover:border-brand-cyan/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-4 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-full mb-4 text-brand-cyan">
                  {feature.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            Join hundreds of businesses growing with DreamPixel. Get started today.
          </p>
          <Button size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90 text-primary-foreground group" asChild>
            <Link href="/register">Sign Up Now <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}