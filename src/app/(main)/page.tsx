import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, FileText, Share2, Sparkles, BarChart2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Unified CMS",
    description: "Effortlessly manage your website pages, blog posts, and stories from a single, intuitive dashboard.",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Social Automation",
    description: "Connect all your social accounts, schedule posts in advance, and publish across platforms with one click.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI-Powered Creativity",
    description: "Generate engaging, platform-aware captions and relevant hashtags instantly. Never run out of content ideas.",
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Growth Analytics",
    description: "Track post performance with clear analytics on impressions, likes, and shares to understand what works.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹200",
    description: "For individuals and small teams getting started.",
    features: ["25 Posts/Month", "3 Social Accounts", "Basic Analytics", "AI Caption Generation"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹400",
    description: "For growing businesses that need more power.",
    features: ["100 Posts/Month", "10 Social Accounts", "Advanced Analytics", "AI Caption Generation", "Scheduling"],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹600",
    description: "For agencies and enterprises at scale.",
    features: ["Unlimited Posts", "Unlimited Accounts", "Full Analytics Suite", "Priority Support", "API Access"],
    cta: "Contact Us",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Unify Your Content. Amplify Your Reach.
          </h1>
          <p className="max-w-[700px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            DreamPixel is the all-in-one platform for content management and AI-driven social media automation. Build your brand, engage your audience, and grow your business—all from one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-secondary dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Manage Your Brand</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
              Everything you need to create, publish, and analyze your digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                  {feature.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans for Every Stage</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground mt-4">
              Choose the plan that's right for you. Start for free, no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={plan.popular ? "border-primary ring-2 ring-primary" : ""}>
                <CardHeader>
                  {plan.popular && <div className="text-primary font-semibold mb-2">Most Popular</div>}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary dark:bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            Join hundreds of businesses growing with DreamPixel. Get started today.
          </p>
          <Button size="lg" asChild>
            <Link href="#">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}