"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Marketing Director, TechCorp",
    quote: "DreamPixel has revolutionized our content workflow. We're saving 10+ hours a week and our engagement is up by 40%. The AI caption generator is a game-changer!",
    avatar: "https://picsum.photos/seed/client-woman1/150/150",
  },
  {
    name: "Mike R.",
    role: "Founder, StartupHub",
    quote: "As a small team, we were struggling to maintain a consistent social presence. DreamPixel automated everything. It's like having a dedicated social media manager.",
    avatar: "https://picsum.photos/seed/client-man1/150/150",
  },
  {
    name: "Jessica P.",
    role: "Freelance Content Creator",
    quote: "Managing multiple clients is a breeze with DreamPixel. The unified dashboard and scheduling features are indispensable. I can't imagine my workflow without it.",
    avatar: "https://picsum.photos/seed/client-woman2/150/150",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Teams Worldwide</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between p-6 h-full bg-secondary/50">
                    <CardContent className="p-0">
                      <p className="italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center mt-6">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}