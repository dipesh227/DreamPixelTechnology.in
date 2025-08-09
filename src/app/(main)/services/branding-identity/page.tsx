import { Palette } from "lucide-react";

export default function BrandingIdentityPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Palette className="h-12 w-12 mx-auto text-brand-purple" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Branding & Identity
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Forge a powerful and memorable brand identity that truly represents your values and resonates with your target audience. We help you define your brand's unique story and visual language.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our Branding Process</h2>
        <p>
          We delve deep into your brand's essence, market position, and aspirations. Our comprehensive branding process includes everything from logo design to brand guidelines, ensuring consistency and impact across all touchpoints.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li>Brand Strategy & Positioning</li>
          <li>Logo Design & Visual Identity</li>
          <li>Brand Guidelines Development</li>
          <li>Messaging & Tone of Voice</li>
          <li>Marketing Collateral Design</li>
          <li>Brand Audits & Revitalization</li>
        </ul>
        <p>
          Build a brand that stands out, connects emotionally, and drives long-term loyalty with our expert branding services.
        </p>
      </div>
    </div>
  );
}