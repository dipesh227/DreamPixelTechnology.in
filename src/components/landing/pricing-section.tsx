"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  popular: boolean;
}

declare global {
  interface Window {
    Razorpay: any;
  }
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
  const [isProcessingPayment, setIsProcessingPayment] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('id, name, price, features, description, popular')
        .order('price', { ascending: true });

      if (error) {
        toast.error("Could not fetch pricing plans.");
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
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async (plan: Plan) => {
    if (plan.name === 'Pro') {
        router.push('/contact');
        return;
    }

    setIsProcessingPayment(plan.id);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        toast.info("Please log in or sign up to choose a plan.", {
            action: { label: "Login", onClick: () => router.push('/login') },
        });
        setIsProcessingPayment(null);
        return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast.error("Razorpay SDK failed to load. Please try again.");
      setIsProcessingPayment(null);
      return;
    }

    const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: plan.id }),
    });

    if (!res.ok) {
        toast.error("Failed to create Razorpay order. Please try again.");
        setIsProcessingPayment(null);
        return;
    }

    const { orderId, amount, currency } = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: currency,
      name: 'DreamPixel Technology',
      description: `Subscription for ${plan.name} Plan`,
      order_id: orderId,
      handler: async function (response: any) {
        if (response.razorpay_payment_id) {
          toast.success("Payment successful! Redirecting to dashboard...");
          router.push('/dashboard?payment_success=true');
          router.refresh();
        } else {
          toast.error("Payment failed. Please try again.");
        }
        setIsProcessingPayment(null);
      },
      prefill: {
        name: user.user_metadata.first_name || user.email,
        email: user.email,
      },
      notes: {
        planId: plan.id,
        userId: user.id,
      },
      theme: {
        color: '#00BCD4'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any){
        toast.error(`Payment failed: ${response.error.description}`);
        setIsProcessingPayment(null);
    });
    rzp1.open();
  };

  const getCtaText = (planName: string) => {
    if (planName === 'Pro') return 'Contact Us';
    return 'Choose Plan';
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
              className={plan.popular ? "p-0.5 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-yellow" : ""}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {plan.popular && <div className="text-brand-cyan font-semibold mb-2">Most Popular</div>}
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
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleCheckout(plan)}
                    disabled={isProcessingPayment === plan.id}
                  >
                    {isProcessingPayment === plan.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    {isProcessingPayment === plan.id ? 'Processing...' : getCtaText(plan.name)}
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