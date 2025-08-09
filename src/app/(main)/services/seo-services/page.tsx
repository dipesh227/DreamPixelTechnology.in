import { Search } from "lucide-react";

export default function SeoServicesPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Search className="h-12 w-12 mx-auto text-blue-500" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          SEO Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Improve your search engine rankings and increase organic visibility with our expert SEO services. We help your target audience find you when they're searching for your products or services.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our SEO Process</h2>
        <p>
          Our SEO strategy is built on thorough keyword research, technical optimization, and high-quality content creation. We focus on sustainable, ethical SEO practices that deliver long-term results and a strong return on investment.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li>Keyword Research & Strategy</li>
          <li>On-Page SEO Optimization</li>
          <li>Technical SEO Audits & Fixes</li>
          <li>Link Building</li>
          <li>Local SEO</li>
          <li>Competitor Analysis</li>
          <li>Performance Tracking & Reporting</li>
        </ul>
        <p>
          Rank higher, attract more qualified leads, and grow your business with a powerful SEO presence.
        </p>
      </div>
    </div>
  );
}