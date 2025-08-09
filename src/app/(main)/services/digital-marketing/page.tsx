import { Megaphone, CheckCircle } from "lucide-react";

export default function DigitalMarketingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Megaphone className="h-12 w-12 mx-auto text-brand-orange" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Digital Marketing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Drive traffic, generate leads, and boost conversions with our comprehensive digital marketing strategies. We help you reach your target audience where they spend their time online.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our Strategy</h2>
        <p>
          Our digital marketing approach is data-driven and results-oriented. We analyze your market, identify opportunities, and craft tailored strategies that align with your business objectives. From increasing brand awareness to driving direct sales, we cover all aspects of online promotion.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Search Engine Optimization (SEO)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Social Media Marketing (SMM)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Content Marketing</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Email Marketing</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Pay-Per-Click (PPC) Advertising</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Analytics & Reporting</li>
        </ul>
        <p>
          Let us help you navigate the complexities of the digital world and achieve measurable success with a strong online presence.
        </p>
      </div>
    </div>
  );
}