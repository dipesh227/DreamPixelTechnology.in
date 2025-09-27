"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What makes DreamPixel Technology different from agencies or freelancers?",
      answer: "We combine the best of both worlds: the structured approach and reliability of an agency with the agility and personalized attention of a freelancer. Our streamlined process ensures efficient delivery and clear communication."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A typical website might take 4-8 weeks, while a custom web application could take 3-6 months. We provide a detailed timeline after the initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models, including fixed-price projects, hourly rates, and retainer agreements, tailored to your specific needs and budget. We believe in transparent pricing with no hidden costs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your digital solution remains secure, up-to-date, and performs optimally. This includes bug fixes, updates, and performance monitoring."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can jump into existing projects to provide development, design, optimization, or maintenance services. We'll start with an audit to understand your current setup and propose the best way forward."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 text-center">
      <div className="container mx-auto px-4 max-w-3xl animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Star className="h-4 w-4 text-gray-500" /> FAQ
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}