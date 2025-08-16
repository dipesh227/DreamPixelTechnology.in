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

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-transparent">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
            <Bot className="h-6 w-6 bg-brand-gradient text-primary-foreground rounded-full p-1" />
            <span>Dream Pixel Social Hub</span>
          </Link>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="font-medium text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#pricing" className="font-medium text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
              Pricing
            </Link>
            <Button variant="ghost">Log In</Button>
            <Button className="bg-brand-gradient text-primary-foreground">
              Sign Up
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto md:hidden">
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
                <Link href="#features" className="hover:text-foreground/80" prefetch={false}>
                  Features
                </Link>
                <Link href="#pricing" className="hover:text-foreground/80" prefetch={false}>
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-24 md:py-32 lg:py-48">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-brand-gradient bg-clip-text text-transparent">
                AI-Powered Social Media Management
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Create viral content with DeepSeek AI. Automate your workflow,
                analyze performance, and grow your audience faster than ever.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="bg-brand-gradient text-primary-foreground shadow-brand">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground bg-feature-gradient">
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
              <Card className="hover-lift">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground">
                    <Bot className="w-6 h-6" />
                  </div>
                  <CardTitle>AI Content Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate engaging posts, scripts, and ideas in seconds with our advanced AI, powered by DeepSeek.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <CardTitle>Smart Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically schedule your content for peak engagement times across all your platforms.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-feature-gradient text-secondary-foreground">
                    <BarChart className="w-6 h-6" />
                  </div>
                  <CardTitle>In-Depth Analytics</CardTitle>
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
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
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
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For individuals and small teams just getting started.</CardDescription>
                  <div className="text-4xl font-bold pt-4">$19<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> 1 Social Profile</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> 10 AI Generations/mo</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Basic Analytics</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary shadow-brand relative">
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <div className="bg-brand-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses and social media managers.</CardDescription>
                  <div className="text-4xl font-bold pt-4">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> 10 Social Profiles</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Unlimited AI Generations</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Advanced Analytics</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Smart Scheduling</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-gradient text-primary-foreground">Choose Pro</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations with custom needs.</CardDescription>
                  <div className="text-4xl font-bold pt-4">Custom</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Unlimited Profiles</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Dedicated AI Model</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Priority Support</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Custom Integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                          <p className="text-muted-foreground">"This tool has been a game-changer for our content strategy. The AI suggestions are incredibly insightful and have saved us countless hours."</p>
                          <div className="flex items-center gap-3 pt-2">
                            <Avatar>
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg bg-brand-gradient p-8 md:p-12 lg:p-16 text-center text-primary-foreground shadow-brand">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Elevate Your Social Media?
              </h2>
              <p className="mx-auto max-w-[600px] mt-4 md:text-xl">
                Join thousands of creators and brands growing their audience with AI. Start your free trial today.
              </p>
              <div className="mt-6">
                <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}