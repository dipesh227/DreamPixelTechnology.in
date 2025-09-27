import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Star } from "lucide-react";

export function WhatMakesUsUniqueSection() {
  const comparisons = [
    {
      type: "with",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "Expert Developer and Designer.",
      description: "Our team consists of experienced developers and designers who are experts in their fields."
    },
    {
      type: "without",
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      title: "Junior Developer and Designer...",
      description: "In experienced designers may compromise on quality and attention to detail."
    },
    {
      type: "with",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "Cost Efficient.",
      description: "Transparent pricing and optimized resources for maximum value."
    },
    {
      type: "without",
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      title: "Never-ending Invoices.",
      description: "Unclear pricing and hidden costs can drain your budget & your bank."
    },
    {
      type: "with",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "Ongoing Support.",
      description: "We offer continuous support and maintenance to ensure your website remains up-to-date."
    },
    {
      type: "without",
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      title: "Limited Support.",
      description: "Limited support may lead to issues going unresolved."
    },
    {
      type: "with",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "Updates every 24-Hours.",
      description: "Regular progress and timely delivery, so you're always in the loop."
    },
    {
      type: "without",
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      title: "Slow & Rushed Work.",
      description: "Delays and rushed deliveries can impact your project's overall success."
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Star className="h-4 w-4 text-gray-500" /> Comparison
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          What makes us unique?
        </h2>
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-lg">
            <CheckCircle2 className="h-6 w-6" /> With DreamPixel Technology
          </div>
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold text-lg">
            <XCircle className="h-6 w-6" /> Without DreamPixel Technology
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {comparisons.map((item, index) => (
            <Card key={index} className="p-6 text-left shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="flex items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}