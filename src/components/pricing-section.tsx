"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  popular: boolean;
  cta: string;
}

export function PricingSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('id, name, price, features')
        .order('price', { ascending: true });

      if (error) {
        toast.error("Could not fetch pricing plans.");
      } else {
        const formattedPlans: Plan[] = data.map(plan => {
            let description = "", popular = false, cta = "Choose Plan";
            if (plan.name === 'Starter') {
                description = "For individuals and small teams getting started.";
                cta = "Get Started";
            } else if (plan.name === 'Growth') {
                description = "For growing businesses that need more power.";
                popular = true;
                cta = "Choose Growth";
            } else if (plan.name === 'Pro') {
                description = "For agencies and enterprises at scale.";
                cta = "Contact Us";
            }
            return { ...plan, price: plan.price / 100, description, popular, cta };
        });
        setPlans(formattedPlans);
      }
      setLoading(false);
    };
    fetchPlans();
  }, []);

  const handleCheckout = async (planId: string) => {
    setIsRedirecting(planId);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        toast.info("Please log in or sign up to choose a plan.", {
            action: { label: "Login", onClick: () => router.push('/login') },
        });
        setIsRedirecting(null);
        return;
    }

    const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
    });

    if (!res.ok) {
        toast.error("Failed to create checkout session. Please try again.");
        setIsRedirecting(null);
        return;
    }

    const { url } = await res.json();
    if (url) {
        window.location.href = url;
    } else {
        toast.error("Could not redirect to payment page.");
        setIsRedirecting(null);
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.popular ? "p-0.5 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-yellow" : ""}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  {plan.popular && <div className="text-brand-cyan font-semibold mb-2">Most Popular</div>}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">₹{plan.price}</span>
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
                    onClick={() => handleCheckout(plan.id)}
                    disabled={isRedirecting === plan.id}
                  >
                    {isRedirecting === plan.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    {isRedirecting === plan.id ? 'Redirecting...' : plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}