import { Code, CheckCircle } from "lucide-react";

export default function WebDesignDevelopmentPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Code className="h-12 w-12 mx-auto text-brand-blue" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Web Design & Development
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We create stunning, responsive, and high-performing websites that not only look great but also drive results. From custom designs to robust e-commerce platforms, our web solutions are built to elevate your online presence.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our Approach</h2>
        <p>
          Our process begins with a deep understanding of your business goals and target audience. We then move into wireframing and design, ensuring a user-centric experience. Development follows, utilizing modern frameworks and best practices for speed, security, and scalability.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Custom Website Design</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Responsive Development (Mobile-first)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />E-commerce Website Development</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Content Management Systems (CMS) Integration</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Website Maintenance & Support</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Performance Optimization</li>
        </ul>
        <p>
          Whether you need a brand new website or a redesign of an existing one, we deliver solutions that are visually appealing, highly functional, and optimized for search engines.
        </p>
      </div>
    </div>
  );
}