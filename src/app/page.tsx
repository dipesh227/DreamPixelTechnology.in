"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Bot,
  BarChart,
  Check,
  Menu,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 });
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

  const { setRef: setFeatureRef, visibleItems: featureVisible } = useStaggeredScrollAnimation(3);
  const { setRef: setPricingRef, visibleItems: pricingVisible } = useStaggeredScrollAnimation(3);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-transparent">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="#" className="flex items-center gap-2 font-bold group" prefetch={false}>
            <Bot className="h-6 w-6 bg-brand-gradient text-primary-foreground rounded-full p-1 icon-bounce" />
            <span className="hover:text-primary transition-colors duration-300">Dream Pixel Social Hub</span>
          </Link>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105" prefetch={false}>
              Features
            </Link>
            <Link href="#pricing" className="font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105" prefetch={false}>
              Pricing
            </Link>
            <Button variant="ghost" className="hover:scale-105 transition-transform duration-300">Log In</Button>
            <Button className="bg-brand-gradient text-primary-foreground btn-animated hover:scale-105">
              Sign Up
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto md:hidden hover:scale-110 transition-transform duration-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
                  <Bot className="h-6 w-6" />
                  <span>Dream Pixel</span>
                </Link>
                <Link href="#features" className="hover:text-foreground/80 transition-colors duration-300" prefetch={false}>
                  Features
                </Link>
                <Link href="#pricing" className="hover:text-foreground/80 transition-colors duration-300" prefetch={false}>
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section 
          id="hero" 
          className="w-full py-24 md:py-32 lg:py-48"
          ref={heroAnimation.ref}
        >
          <div className="container px-4 md:px-6 text-center">
            <div className={`flex flex-col items-center space-y-6 transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-animated-gradient bg-clip-text text-transparent animate-delay-200">
                AI-Powered Social Media Management
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl animate-delay-400">
                Create viral content with DeepSeek AI. Automate your workflow,
                analyze performance, and grow your audience faster than ever.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row animate-delay-500">
                <Button size="lg" className="bg-brand-gradient text-primary-foreground shadow-brand btn-animated btn-pulse hover:scale-105">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 hover-glow transition-all duration-300">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section 
          id="features" 
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
          ref={featuresAnimation.ref}
        >
          <div className="container px-4 md:px-6">
            <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 transition-all duration-800 ${
              featuresAnimation.isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground bg-feature-gradient hover:scale-105 transition-transform duration-300">
                Our Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A powerful suite of tools designed to streamline your social media strategy.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
              <Card 
                ref={setFeatureRef(0)}
                className={`hover-lift hover-glow group transition-all duration-700 ${
                  featureVisible[0] ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-6 h-6 icon-rotate" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">AI Content Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate engaging posts, scripts, and ideas in seconds with our advanced AI, powered by DeepSeek.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                ref={setFeatureRef(1)}
                className={`hover-lift hover-glow group transition-all duration-700 ${
                  featureVisible[1] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Share2 className="w-6 h-6 icon-rotate" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">Smart Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically schedule your content for peak engagement times across all your platforms.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card 
                ref={setFeatureRef(2)}
                className={`hover-lift hover-glow group transition-all duration-700 ${
                  featureVisible[2] ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground group-hover:scale-110 transition-transform duration-300">
                    <BarChart className="w-6 h-6 icon-rotate" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">In-Depth Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track your growth, understand your audience, and measure your ROI with our easy-to-read dashboards.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section 
          id="pricing" 
          className="w-full py-12 md:py-24 lg:py-32"
          ref={pricingAnimation.ref}
        >
          <div className="container px-4 md:px-6">
            <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 transition-all duration-800 ${
              pricingAnimation.isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm hover:scale-105 transition-transform duration-300">
                Pricing Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Find the Perfect Plan
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start for free and scale up as you grow. No credit card required.
              </p>
            </div>
            <div className="mx-auto grid max-w-md items-start gap-8 lg:max-w-5xl lg:grid-cols-3">
              <Card 
                ref={setPricingRef(0)}
                className={`flex flex-col hover-lift hover-glow transition-all duration-700 ${
                  pricingVisible[0] ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
              >
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For individuals and small teams just getting started.</CardDescription>
                  <div className="text-4xl font-bold pt-4">$19<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> 1 Social Profile</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> 10 AI Generations/mo</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Basic Analytics</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:scale-105 hover-glow transition-all duration-300">Get Started</Button>
                </CardFooter>
              </Card>

              <Card 
                ref={setPricingRef(1)}
                className={`flex flex-col border-primary shadow-brand relative hover-lift hover-glow transition-all duration-700 ${
                  pricingVisible[1] ? 'animate-scale-in animate-delay-200' : 'opacity-0 scale-95'
                }`}
              >
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <div className="bg-brand-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold animate-bounce-subtle">Most Popular</div>
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses and social media managers.</CardDescription>
                  <div className="text-4xl font-bold pt-4">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> 10 Social Profiles</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Unlimited AI Generations</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Advanced Analytics</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Smart Scheduling</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-gradient text-primary-foreground btn-animated btn-pulse hover:scale-105">Choose Pro</Button>
                </CardFooter>
              </Card>

              <Card 
                ref={setPricingRef(2)}
                className={`flex flex-col hover-lift hover-glow transition-all duration-700 ${
                  pricingVisible[2] ? 'animate-scale-in animate-delay-400' : 'opacity-0 scale-95'
                }`}
              >
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations with custom needs.</CardDescription>
                  <div className="text-4xl font-bold pt-4">Custom</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Unlimited Profiles</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Dedicated AI Model</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Priority Support</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success icon-bounce" /> Custom Integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:scale-105 hover-glow transition-all duration-300">Contact Us</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section 
          id="testimonials" 
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
          ref={testimonialsAnimation.ref}
        >
          <div className="container px-4 md:px-6">
            <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 transition-all duration-800 ${
              testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Trusted by Professionals
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our users are saying about Dream Pixel Social Hub.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
                testimonialsAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card className="hover-lift hover-glow transition-all duration-500">
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                          <p className="text-muted-foreground">"This tool has been a game-changer for our content strategy. The AI suggestions are incredibly insightful and have saved us countless hours."</p>
                          <div className="flex items-center gap-3 pt-2">
                            <Avatar className="hover:scale-110 transition-transform duration-300">
                              <AvatarImage src={`https://i.pravatar.cc/150?u=a042581f4e29026704d${index}`} />
                              <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">Sarah L.</p>
                              <p className="text-sm text-muted-foreground">Marketing Manager</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:scale-110 transition-transform duration-300" />
              <CarouselNext className="hover:scale-110 transition-transform duration-300" />
            </Carousel>
          </div>
        </section>

        <section 
          id="cta" 
          className="w-full py-12 md:py-24 lg:py-32"
          ref={ctaAnimation.ref}
        >
          <div className="container px-4 md:px-6">
            <div className={`rounded-lg bg-brand-gradient p-8 md:p-12 lg:p-16 text-center text-primary-foreground shadow-brand hover:shadow-2xl transition-all duration-700 ${
              ctaAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
            }`}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Elevate Your Social Media?
              </h2>
              <p className="mx-auto max-w-[600px] mt-4 md:text-xl">
                Join thousands of creators and brands growing their audience with AI. Start your free trial today.
              </p>
              <div className="mt-6">
                <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 btn-animated hover:scale-105 hover-glow">
                  Start Free Trial Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Dream Pixel Social Hub. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors duration-300" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors duration-300" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}