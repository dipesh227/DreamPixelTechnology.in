"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle"; // Keeping ThemeToggle for functionality, though not explicitly in image

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl">
          <span className="text-green-600 dark:text-green-400">Blink2Build</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#comparison" className="text-sm font-medium hover:underline underline-offset-4">
            Comparison
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Book a call
          </Button>
          <ThemeToggle /> {/* Keeping ThemeToggle for user preference */}
        </div>
      </div>
    </header>
  );
}