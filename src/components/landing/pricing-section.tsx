"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  popular: boolean;
}

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

export function PricingSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('id, name, price, features, description, popular')
        .order('price', { ascending: true });

      if (error || !data || data.length === 0) {
        toast.warning("Could not fetch pricing plans. Displaying sample plans.");
        setPlans([
          {
            id: 'dummy_starter',
            name: 'Starter',
            price: 99900,
            description: 'Ideal for individuals and small projects.',
            features: ['10 Social Accounts', '100 Posts/Month', 'AI Content Suggestions', 'Basic Analytics'],
            popular: false,
          },
          {
            id: 'dummy_business',
            name: 'Business',
            price: 299900,
            description: 'Perfect for growing businesses and agencies.',
            features: ['50 Social Accounts', 'Unlimited Posts', 'Advanced AI Tools', 'Team Collaboration', 'Priority Support'],
            popular: true,
          },
          {
            id: 'dummy_pro',
            name: 'Pro',
            price: 0,
            description: 'For large organizations with custom needs.',
            features: ['Unlimited Everything', 'Dedicated Account Manager', 'Custom Integrations', 'API Access', '24/7/365 Support'],
            popular: false,
          },
        ]);
      } else {
        const formattedPlans: Plan[] = data.map(plan => ({
            ...plan,
            price: plan.price,
        }));
        setPlans(formattedPlans);
      }
      setLoading(false);
    };
    fetchPlans();
  }, [supabase]);

  const getCtaText = (planName: string) => {
    if (planName === 'Pro') return 'Contact Us';
    return 'Get Started';
  }

  const getCtaLink = (planName: string) => {
    if (planName === 'Pro') return '/contact';
    return '/register';
  }

  if (loading) {
    return (
        <div className="w-full py-20 md:py-24 lg:py-32 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto" />
            <p className="text-muted-foreground mt-2">Loading plans...</p>
        </div>
    );
  }

  return (
    <section id="pricing" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans for Every Stage</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
            Choose the plan that's right for you. Start for free, no credit card required.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={plan.popular ? "p-0.5 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent" : ""}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {plan.popular && <div className="text-brand-secondary font-semibold mb-2">Most Popular</div>}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">₹{plan.price / 100}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {(plan.features as string[]).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-brand-success mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={getCtaLink(plan.name)}>{getCtaText(plan.name)}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}