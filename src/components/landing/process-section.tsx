"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, PenSquare, Send, BarChart } from "lucide-react";
import React from "react";

const processSteps = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Connect Your Accounts",
    description: "Securely link your social media profiles in just a few clicks. We support all major platforms.",
  },
  {
    icon: <PenSquare className="h-8 w-8" />,
    title: "Create or Generate Content",
    description: "Write your posts in our advanced editor or use our AI to generate compelling captions and ideas.",
  },
  {
    icon: <Send className="h-8 w-8" />,
    title: "Publish or Schedule",
    description: "Post immediately to all selected accounts or schedule for the perfect time to maximize reach.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Analyze & Optimize",
    description: "Track your content's performance with easy-to-understand analytics and refine your strategy.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProcessSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started in Minutes</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Our streamlined process makes unifying your content simple and fast.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-6 border-0 bg-transparent shadow-none">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-brand-secondary/20 to-brand-highlight/20 rounded-full text-brand-secondary">
                    {step.icon}
                  </div>
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}