import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$499",
      period: "one-time",
      features: [
        "Basic Website (5 pages)",
        "Responsive Design",
        "SEO Friendly",
        "1 Month Support"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$1299",
      period: "one-time",
      features: [
        "Custom Web Application",
        "Advanced UI/UX Design",
        "Database Integration",
        "3 Months Support",
        "Basic Analytics"
      ],
      buttonText: "Choose Plan",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      features: [
        "Tailored Solutions",
        "Dedicated Development Team",
        "Ongoing Maintenance",
        "Priority Support",
        "Advanced Integrations"
      ],
      buttonText: "Contact for Quote"
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Flexible Pricing for Every Need
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Find the perfect plan to kickstart or scale your digital presence with DreamPixel Technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`flex flex-col p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 
                          ${tier.highlight ? 'border-2 border-blue-600 dark:border-blue-400' : ''}
                          animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100 + 200}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {tier.price === "Custom" ? (
                    <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                      {tier.price}
                    </span>
                  ) : (
                    <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                      {tier.price}
                      <span className="text-lg font-medium text-gray-500 dark:text-gray-400">/{tier.period}</span>
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full">
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}