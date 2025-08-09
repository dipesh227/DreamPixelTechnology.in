"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const comparisonPoints = [
  {
    with: "Centralized content management",
    without: "Scattered files and documents",
  },
  {
    with: "One-click multi-platform publishing",
    without: "Logging into each platform manually",
  },
  {
    with: "AI-powered content generation",
    without: "Hours spent on writer's block",
  },
  {
    with: "Unified analytics and reporting",
    without: "Guesswork and inconsistent data",
  },
];

export function ComparisonSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">The DreamPixel Difference</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Stop juggling tools. Start streamlining your workflow and amplifying your results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card className="h-full bg-red-500/5 border-red-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="text-red-500" />
                  Without DreamPixel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {comparisonPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Minus className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{point.without}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card className="h-full bg-green-500/5 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" />
                  With DreamPixel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {comparisonPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Plus className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                      <span>{point.with}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}