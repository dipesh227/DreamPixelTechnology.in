"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Share2, Sparkles, BarChart2 } from "lucide-react";

const features = [
  {
    icon: <FileText className="h-8 w-8 text-brand-blue" />,
    title: "Unified CMS",
    description: "Effortlessly manage your website pages, blog posts, and stories from a single, intuitive dashboard.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-brand-teal" />,
    title: "Social Automation",
    description: "Connect all your social accounts, schedule posts in advance, and publish across platforms with one click.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-brand-orange" />,
    title: "AI-Powered Creativity",
    description: "Generate engaging, platform-aware captions and relevant hashtags instantly. Never run out of content ideas.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-brand-green" />,
    title: "Growth Analytics",
    description: "Track post performance with clear analytics on impressions, likes, and shares to understand what works.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Manage Your Brand</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Everything you need to create, publish, and analyze your digital presence.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="flex flex-col items-center text-center p-6 border-border/80 hover:border-primary/50 hover:bg-secondary transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="p-4 bg-secondary rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}