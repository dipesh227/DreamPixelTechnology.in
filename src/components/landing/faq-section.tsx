"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free plan with generous limits so you can experience the core features of DreamPixel without any commitment. No credit card is required to sign up.",
  },
  {
    question: "What social media platforms do you support?",
    answer: "We support all major social media platforms, including LinkedIn, Twitter/X, Facebook, and Instagram. We are continuously working on adding more integrations.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. You will retain access to your plan's features until the end of the current billing period.",
  },
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced language models trained on vast amounts of data. You provide keywords, a desired tone, and a call-to-action, and it generates platform-aware captions and relevant hashtags to help you overcome writer's block.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}