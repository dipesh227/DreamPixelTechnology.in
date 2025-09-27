"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl">
          <span className="text-blue-600 dark:text-blue-400">DreamPixel</span> Technology
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="hidden md:inline-flex">
            Get a Quote
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}