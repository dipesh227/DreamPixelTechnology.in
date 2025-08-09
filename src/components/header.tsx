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

const features: { title: string; href: string; description:string }[] = [
  {
    title: "Unified CMS",
    href: "/features/cms",
    description: "Manage website pages, blog posts, and stories from one dashboard.",
  },
  {
    title: "Social Automation",
    href: "/features/social-automation",
    description: "Connect social accounts, schedule posts, and publish across platforms.",
  },
  {
    title: "AI Creative Suite",
    href: "/features/ai-tools",
    description: "Generate engaging captions, hashtags, and content ideas instantly.",
  },
  {
    title: "Growth Analytics",
    href: "/features/analytics",
    description: "Track post performance with clear analytics to understand what works.",
  },
];

const solutions: { title: string; href: string; description: string }[] = [
    {
        title: "For Agencies",
        href: "/solutions/for-agencies",
        description: "Manage multiple clients, streamline workflows, and deliver results.",
    },
    {
        title: "For Startups",
        href: "/solutions/for-startups",
        description: "Build your brand, engage your audience, and grow your business.",
    },
    {
        title: "For Creators",
        href: "/solutions/for-creators",
        description: "Automate your content, save time, and focus on creating.",
    }
]

export function Header() {
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
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {features.map((component) => (
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
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                     {solutions.map((component) => (
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
                  <Link href="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/portfolio">Portfolio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/blog">Blog</Link>
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
                  {/* Add mobile nav links here */}
                  <Link href="/services" className="text-lg font-medium hover:text-primary">Services</Link>
                  <Link href="/portfolio" className="text-lg font-medium hover:text-primary">Portfolio</Link>
                  <Link href="/pricing" className="text-lg font-medium hover:text-primary">Pricing</Link>
                  <Link href="/blog" className="text-lg font-medium hover:text-primary">Blog</Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary">About Us</Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary">Contact</Link>
                  <Link href="/careers" className="text-lg font-medium hover:text-primary">Careers</Link>
                  <Link href="/faq" className="text-lg font-medium hover:text-primary">FAQ</Link>
                  <Link href="/testimonials" className="text-lg font-medium hover:text-primary">Testimonials</Link>
                  <Link href="/privacy-policy" className="text-lg font-medium hover:text-primary">Privacy Policy</Link>
                  <Link href="/terms" className="text-lg font-medium hover:text-primary">Terms of Service</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-primary-foreground" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
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