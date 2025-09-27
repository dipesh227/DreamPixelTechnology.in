import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Layout, Megaphone } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android."
    },
    {
      icon: <Layout className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces for exceptional user experiences."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and reach your target audience."
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Core Services
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 
                          animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100 + 200}`}
            >
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