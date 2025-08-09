"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About DreamPixel Technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange opacity-20 blur-2xl"></div>
            <Image src="https://picsum.photos/seed/team-photo/500/500" alt="About DreamPixel Technology" width={500} height={500} className="rounded-lg relative shadow-lg" />
          </div>
          <div className="text-left">
            <p className="text-lg text-muted-foreground mb-4">
              We are a team of tech enthusiasts and digital tool experts.
            </p>
            <p className="text-muted-foreground mb-4">
              It all started with a simple mission: to simplify digital technology for businesses. At DreamPixel, we purchase, test, and review various digital tools that are perfect for modern companies. From web design and AI writers to cloud storage and marketing automation, we cover it all. Whether you're a startup or an established enterprise, our insights will be a valuable resource for you.
            </p>
            <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              <Link href="/about">Read More About Us</Link>
            </Button>
            <div className="mt-6 pt-6 border-t flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}