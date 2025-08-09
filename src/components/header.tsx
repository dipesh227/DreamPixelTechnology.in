"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import React from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { UserButton } from "./user-button";
import { Skeleton } from "./ui/skeleton";
import { mainNav } from "@/lib/navigation";

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
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="DreamPixel Logo" width={180} height={40} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="mr-auto hidden md:flex items-center gap-6 text-sm">
          {mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden ml-auto">
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

        {/* Right side actions */}
        <div className="hidden md:flex items-center justify-end space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">Search</span>
          </Button>
          {loading ? (
            <Skeleton className="h-10 w-24" />
          ) : user ? (
            <UserButton user={user} />
          ) : (
            <Button asChild className="bg-gradient-to-r from-brand-orange to-brand-red text-white">
              <Link href="/register">Get Started</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}