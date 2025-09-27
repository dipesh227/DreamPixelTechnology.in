import { Card, CardContent } from "@/components/ui/card";
import { Settings, Code, TrendingUp, Users, LifeBuoy, CalendarCheck, Star } from "lucide-react"; // Using relevant icons

export function WhatYouCanExpectSection() {
  const expectations = [
    {
      icon: <Settings className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "Planning & Design",
      description: "We start by understanding your brand and goals, followed by creating a design tailored to your vision."
    },
    {
      icon: <Code className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "Development",
      description: "Our team brings the design to life with clean, efficient code, ensuring your website is fast and scalable."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "Optimization & SEO",
      description: "Our team brings the design to life with clean, efficient code, ensuring your website is fast and scalable."
    },
    {
      icon: <Users className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "Requirements Gathering",
      description: "Meet with stakeholders to collect and document what the software should do and how it should behave."
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "Maintenance",
      description: "We provide ongoing support and updates to ensure your website remains secure and up-to-date."
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      title: "24/7 Support",
      description: "After launching, we continue to optimize and provide support to ensure long-term success."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Star className="h-4 w-4 text-gray-500" /> About
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          See what you can expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expectations.map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}