import { Lightbulb, CheckCircle } from "lucide-react";

export default function ContentCreationPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Lightbulb className="h-12 w-12 mx-auto text-brand-accent" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Content Creation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Captivate your audience with compelling and valuable content. We produce high-quality, engaging content that informs, entertains, and converts, establishing your brand as an industry leader.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our Content Process</h2>
        <p>
          Our content creation process starts with understanding your brand voice, audience, and marketing objectives. We then craft a content strategy and produce diverse content formats that resonate and drive engagement.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Blog Post & Article Writing</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Website Copywriting</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Video Scripting & Production</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Infographics & Visual Content</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />E-books & Whitepapers</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Social Media Content</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-brand-success" />Content Strategy & Planning</li>
        </ul>
        <p>
          From thought leadership articles to engaging video scripts, we ensure your content not only attracts but also retains your audience.
        </p>
      </div>
    </div>
  );
}