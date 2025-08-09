"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
import { mainNav, servicesNav } from "@/lib/navigation";

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
              {mainNav.map((item) => (
                item.href === "/services" ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-muted-foreground">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {servicesNav.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={service.href}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-muted-foreground")}>
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="DreamPixel Logo" width={150} height={35} />
              </Link>
              <div className="flex flex-col space-y-4 mt-6">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link href={item.href} className="text-lg font-medium text-foreground hover:text-primary">{item.title}</Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo for Mobile */}
        <div className="flex-1 flex justify-center md:hidden">
            <Link href="/">
                <Image src="/logo-icon.png" alt="DreamPixel Logo" width={32} height={32} />
            </Link>
        </div>

        <div className="flex items-center justify-end space-x-2 md:flex-1">
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            {loading ? (
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-24" />
              </div>
            ) : user ? (
              <UserButton user={user} />
            ) : (
              <>
                <Button variant="ghost" asChild className="text-muted-foreground">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex" asChild>
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