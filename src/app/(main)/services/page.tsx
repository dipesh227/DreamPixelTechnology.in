import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Megaphone, Lightbulb, Search, Users } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-brand-cyan" />,
    title: "Web Design & Development",
    description: "Crafting stunning, responsive, and high-performing websites tailored to your brand.",
  },
  {
    icon: <Palette className="h-8 w-8 text-brand-purple" />,
    title: "Branding & Identity",
    description: "Building strong brand identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-brand-pink" />,
    title: "Digital Marketing",
    description: "Driving traffic and conversions through SEO, social media, and content marketing strategies.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-yellow" />,
    title: "Content Creation",
    description: "Producing engaging and valuable content, from blog posts to video scripts, that captivates your audience.",
  },
  {
    icon: <Search className="h-8 w-8 text-blue-500" />,
    title: "SEO Optimization",
    description: "Improving your search engine rankings to increase organic visibility and attract more customers.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Social Media Management",
    description: "Managing your social presence, engaging with your community, and growing your online reach.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Our Digital Agency Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive measurable results.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-secondary/50 border-border/80 flex flex-col items-center text-center p-6">
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
        ))}
      </div>
    </div>
  );
}