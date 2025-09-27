import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, TrendingUp, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Rapid Development",
      description: "Accelerating your ideas from concept to launch with agile methodologies."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Robust Security",
      description: "Building secure and resilient applications to protect your data and users."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Scalable Solutions",
      description: "Designing future-proof architectures that grow with your business needs."
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Client-Centric Approach",
      description: "Collaborating closely with you to ensure your vision is perfectly realized."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Why Choose DreamPixel Technology?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We combine innovation, expertise, and a passion for digital excellence to deliver unparalleled results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 
                          animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100 + 200}`}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}