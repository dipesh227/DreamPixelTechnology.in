"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceButtons = [
  { name: "Web Design", icon: <Globe className="h-6 w-6 text-blue-500" />, href: "/services/web-design-development" },
  { name: "SEO Services", icon: <Shield className="h-6 w-6 text-green-500" />, href: "/services/seo-services" },
  { name: "Cloud Solutions", icon: <Cloud className="h-6 w-6 text-sky-500" />, href: "/services/e-commerce-solutions" },
];

export function HeroSection() {
  return (
    <section className="w-full pt-20 md:pt-24 lg:pt-32 pb-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter !leading-[1.2]"
        >
          We Design, Build & Launch Digital <br />
          Solutions For Your Business.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl mt-4"
        >
          Led By <span className="font-semibold text-primary">DreamPixel Technology</span>
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {serviceButtons.map((service, index) => (
            <Button key={service.name} variant="outline" className="h-16 w-full md:w-48 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" asChild>
              <Link href={service.href}>
                {service.icon}
                <span>{service.name}</span>
              </Link>
            </Button>
          ))}
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
        className="container mx-auto px-4 md:px-6 mt-12"
      >
        <div className="relative">
          <div className="absolute -bottom-10 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 hidden lg:block"></div>
          <div className="absolute -top-10 left-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 hidden lg:block"></div>
          <div className="relative">
            <Image src="/hero-graphic.png" alt="DreamPixel platform illustration" width={600} height={500} className="mx-auto" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground group h-16 px-12 text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all" asChild>
                <Link href="/register">Explore Our Solutions <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
        </div>
      </motion.div>
    </section>
  );
}