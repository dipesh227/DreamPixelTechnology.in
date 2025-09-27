import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Johnson",
      title: "CEO, Tech Innovators",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Alice",
      quote: "DreamPixel Technology transformed our vision into a stunning reality. Their team is highly skilled and incredibly responsive!",
      rating: 5
    },
    {
      name: "Bob Williams",
      title: "Founder, Creative Solutions",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Bob",
      quote: "The web application they built for us exceeded all expectations. Professional, efficient, and truly innovative.",
      rating: 5
    },
    {
      name: "Charlie Davis",
      title: "Marketing Director, Global Brands",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Charlie",
      quote: "Their UI/UX design work is exceptional. Our users love the new interface, and we've seen a significant increase in engagement.",
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-950 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Star className="h-4 w-4 text-gray-500" /> Reviews
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300
                          animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100 + 200}`}
            >
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}