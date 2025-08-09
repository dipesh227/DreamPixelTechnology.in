import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GanttChartSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const agencyFeatures = [
  {
    icon: <Users className="h-6 w-6 text-brand-cyan" />,
    title: "Client Management",
    description: "Manage multiple client accounts from a single dashboard. Keep everything organized and secure.",
  },
  {
    icon: <GanttChartSquare className="h-6 w-6 text-brand-purple" />,
    title: "Streamlined Workflows",
    description: "Use our scheduling and approval tools to collaborate with your team and clients seamlessly.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-pink" />,
    title: "White-Label Reporting",
    description: "Generate professional, white-labeled reports to showcase your results and prove your value to clients.",
  },
];

export default function ForAgenciesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Users className="h-12 w-12 mx-auto text-brand-cyan" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Built for Agencies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Scale your agency, delight your clients, and streamline your operations with a platform designed for your success.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {agencyFeatures.map((feature) => (
          <Card key={feature.title} className="bg-secondary/50 border-border/80">
            <CardHeader className="flex flex-row items-center gap-4">
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Grow Your Agency?</h2>
        <p className="mt-4 text-muted-foreground">Explore our Pro plan or contact us for a custom solution.</p>
        <div className="flex gap-4 justify-center mt-6">
            <Button size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}