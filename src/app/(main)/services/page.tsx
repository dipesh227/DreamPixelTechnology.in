import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Megaphone, Lightbulb, Search, Users, ShoppingCart, Smartphone, DollarSign, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Agency Services",
  description: "DreamPixel Technology offers a comprehensive suite of digital services including web design, development, SEO, social media marketing, and content creation to elevate your brand.",
};

const services = [
  {
    icon: <Code className="h-8 w-8 text-brand-blue" />,
    title: "Web Design & Development",
    description: "Crafting stunning, responsive, and high-performing websites tailored to your brand.",
    href: "/services/web-design-development"
  },
  {
    icon: <Megaphone className="h-8 w-8 text-brand-orange" />,
    title: "Digital Marketing",
    description: "Driving traffic and conversions through comprehensive online strategies.",
    href: "/services/digital-marketing"
  },
  {
    icon: <Search className="h-8 w-8 text-brand-teal" />,
    title: "SEO Services",
    description: "Improving your search engine rankings to increase organic visibility and attract more customers.",
    href: "/services/seo-services"
  },
  {
    icon: <Users className="h-8 w-8 text-brand-green" />,
    title: "Social Media Marketing",
    description: "Managing your social presence, engaging with your community, and growing your online reach.",
    href: "/services/social-media-marketing"
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-orange" />,
    title: "Content Creation",
    description: "Producing engaging and valuable content, from blog posts to video scripts, that captivates your audience.",
    href: "/services/content-creation"
  },
  {
    icon: <Palette className="h-8 w-8 text-brand-violet" />,
    title: "Branding & Identity",
    description: "Building strong brand identities that resonate with your audience and stand out in the market.",
    href: "/services/branding-identity"
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-destructive" />,
    title: "E-commerce Solutions",
    description: "Developing robust and secure online stores that provide seamless shopping experiences.",
    href: "/services/e-commerce-solutions"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-brand-blue" />,
    title: "Mobile App Development",
    description: "Creating intuitive and high-performance mobile applications for iOS and Android.",
    href: "/services/mobile-app-development"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-brand-green" />,
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Managing targeted ad campaigns to drive immediate traffic and conversions.",
    href: "/services/ppc-advertising"
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container mx-auto py-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
            Our Digital Agency Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive measurable results. Click on any service to learn more.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <Card className="bg-card flex flex-col items-center text-center p-6 h-full hover:border-primary/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="w-full py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
            <Link href="/request-quote">Request a Quote <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}