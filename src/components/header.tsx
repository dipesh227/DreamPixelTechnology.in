"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import React from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { UserButton } from "./user-button";
import { Skeleton } from "./ui/skeleton";

const servicesLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Web Design & Development",
    href: "/services/web-design-development",
    description: "Crafting stunning, responsive, and high-performing websites.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Driving traffic and conversions through comprehensive online strategies.",
  },
  {
    title: "SEO Services",
    href: "/services/seo-services",
    description: "Improving search engine rankings for organic visibility.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    description: "Engage your audience and grow your online reach.",
  },
  {
    title: "Content Creation",
    href: "/services/content-creation",
    description: "Producing engaging and valuable content that captivates.",
  },
  {
    title: "Branding & Identity",
    href: "/services/branding-identity",
    description: "Building strong brand identities that stand out.",
  },
  {
    title: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
    description: "Developing robust and secure online stores.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Creating intuitive and high-performance mobile applications.",
  },
  {
    title: "PPC Advertising",
    href: "/services/ppc-advertising",
    description: "Managing targeted ad campaigns for immediate traffic.",
  },
];

export function Header() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const supabase = createClient();

  React.useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
    });

    return () => {
        subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.png" alt="DreamPixel Logo" width={180} height={40} priority />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {servicesLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/portfolio">Portfolio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/testimonials">Testimonials</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/careers">Careers</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/faq">FAQs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.png" alt="DreamPixel Logo" width={150} height={35} />
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="text-lg font-medium hover:text-primary">Home</Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary">About Us</Link>
                  <Link href="/services" className="text-lg font-medium hover:text-primary">Our Services</Link>
                  <Link href="/services/web-design-development" className="ml-4 text-base text-muted-foreground hover:text-primary">Web Design & Development</Link>
                  <Link href="/services/digital-marketing" className="ml-4 text-base text-muted-foreground hover:text-primary">Digital Marketing</Link>
                  <Link href="/services/seo-services" className="ml-4 text-base text-muted-foreground hover:text-primary">SEO Services</Link>
                  <Link href="/services/social-media-marketing" className="ml-4 text-base text-muted-foreground hover:text-primary">Social Media Marketing</Link>
                  <Link href="/services/content-creation" className="ml-4 text-base text-muted-foreground hover:text-primary">Content Creation</Link>
                  <Link href="/services/branding-identity" className="ml-4 text-base text-muted-foreground hover:text-primary">Branding & Identity</Link>
                  <Link href="/services/e-commerce-solutions" className="ml-4 text-base text-muted-foreground hover:text-primary">E-commerce Solutions</Link>
                  <Link href="/services/mobile-app-development" className="ml-4 text-base text-muted-foreground hover:text-primary">Mobile App Development</Link>
                  <Link href="/services/ppc-advertising" className="ml-4 text-base text-muted-foreground hover:text-primary">Pay-Per-Click Advertising (PPC)</Link>
                  <Link href="/portfolio" className="text-lg font-medium hover:text-primary">Portfolio</Link>
                  <Link href="/testimonials" className="text-lg font-medium hover:text-primary">Testimonials</Link>
                  <Link href="/blog" className="text-lg font-medium hover:text-primary">Blog</Link>
                  <Link href="/careers" className="text-lg font-medium hover:text-primary">Careers</Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary">Contact Us</Link>
                  <Link href="/faq" className="text-lg font-medium hover:text-primary">FAQs</Link>
                  <Link href="/privacy-policy" className="text-lg font-medium hover:text-primary">Privacy Policy</Link>
                  <Link href="/request-quote" className="text-lg font-medium hover:text-primary">Request a Quote</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            {loading ? (
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-32" />
              </div>
            ) : user ? (
              <UserButton user={user} />
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-primary-foreground" asChild>
                  <Link href="/request-quote">Request a Quote</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? ""}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"