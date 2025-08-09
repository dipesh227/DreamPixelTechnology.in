import { Users, CheckCircle } from "lucide-react";

export default function SocialMediaMarketingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Users className="h-12 w-12 mx-auto text-brand-green" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Social Media Marketing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Engage your audience, build brand loyalty, and drive conversions across all major social media platforms. Our social media marketing services are designed to amplify your online voice.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our Social Strategy</h2>
        <p>
          We develop tailored social media strategies that resonate with your target audience. From content creation and scheduling to community management and paid social campaigns, we handle every aspect to ensure your brand stands out.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Social Media Strategy Development</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Content Planning & Creation</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Community Management & Engagement</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Paid Social Advertising (Facebook, Instagram, LinkedIn, Twitter)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Influencer Marketing</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Social Media Analytics</li>
        </ul>
        <p>
          Connect with your customers, foster a vibrant community, and achieve your business goals through effective social media presence.
        </p>
      </div>
    </div>
  );
}