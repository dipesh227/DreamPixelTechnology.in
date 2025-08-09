import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Eye, Heart, Lightbulb, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DreamPixel Technology's mission to empower businesses through innovative digital solutions. Meet our dedicated team and discover our core values.",
};

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-accent" />,
    title: "Innovation",
    description: "We constantly seek new and better ways to solve problems and drive growth for our clients.",
  },
  {
    icon: <Heart className="h-8 w-8 text-brand-violet" />,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build partnerships based on trust and transparency.",
  },
  {
    icon: <Check className="h-8 w-8 text-success" />,
    title: "Integrity",
    description: "We operate with honesty and adhere to the highest ethical standards in all our dealings.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About DreamPixel Technology</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a passionate team of creators, strategists, and innovators dedicated to building the future of digital engagement.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3"><Eye className="h-8 w-8 text-brand-teal" /> Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To empower businesses of all sizes to unify their content and amplify their reach through innovative, intuitive, and intelligent technology solutions. We strive to simplify the complexities of digital marketing, making it accessible and effective for everyone.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3"><Heart className="h-8 w-8 text-brand-violet" /> Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                To become the indispensable all-in-one platform for brand building and content automation, fostering a world where every creator and business can effortlessly connect with their audience and achieve their full potential.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image 
              src="https://picsum.photos/seed/techatwork/800/600" 
              alt="Our team collaborating at DreamPixel Technology" 
              width={800} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 border-0 bg-transparent shadow-none">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-background rounded-full">
                    {value.icon}
                  </div>
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-brand-primary" />
          Join Us on Our Journey
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          We're always looking for passionate people to join our team and innovative clients to partner with. Let's build something amazing together.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/careers">View Open Positions</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}