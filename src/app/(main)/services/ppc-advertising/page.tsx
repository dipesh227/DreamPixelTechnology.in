import { DollarSign, CheckCircle } from "lucide-react";

export default function PpcAdvertisingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <DollarSign className="h-12 w-12 mx-auto text-brand-green" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Pay-Per-Click Advertising (PPC)
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Achieve immediate visibility and drive targeted traffic with our expert Pay-Per-Click (PPC) advertising services. We create and manage highly effective campaigns that deliver measurable results and a strong return on ad spend.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our PPC Management Process</h2>
        <p>
          Our PPC specialists conduct in-depth keyword research, craft compelling ad copy, and optimize landing pages to ensure maximum campaign performance. We continuously monitor and adjust bids to get you the best possible results.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Google Ads Management</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Bing Ads Management</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Social Media Advertising (Paid Social)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Display Advertising</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Remarketing Campaigns</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />A/B Testing & Optimization</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Detailed Performance Reporting</li>
        </ul>
        <p>
          Get your brand in front of potential customers instantly and convert clicks into valuable leads and sales with our strategic PPC campaigns.
        </p>
      </div>
    </div>
  );
}