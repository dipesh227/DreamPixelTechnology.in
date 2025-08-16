import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bot,
  BarChart,
  Bell,
  ChevronRight,
  Code,
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