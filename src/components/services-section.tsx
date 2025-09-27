import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Coffee, Users, CalendarCheck } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Professional Workshops",
      description: "Enhance your skills with expert-led workshops in various fields."
    },
    {
      icon: <Coffee className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Artisan Coffee & Treats",
      description: "Savor premium coffee, teas, and freshly baked goods in our cafe."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Community Events",
      description: "Join networking events, book clubs, and social gatherings."
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Flexible Booking",
      description: "Book training rooms or cafe spaces for your private events."
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          What We Offer
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover a blend of learning opportunities and delightful culinary experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}