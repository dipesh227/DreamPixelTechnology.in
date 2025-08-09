export default function BlogPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">Blog / Insights</h1>
      <p className="mt-4 text-muted-foreground">
        Welcome to our blog, where we share insights, trends, and best practices in web design, digital marketing, and AI. Stay updated with the latest industry news and learn how to amplify your digital reach.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for blog posts */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">The Future of AI in Content Creation</h3>
          <p className="text-muted-foreground text-sm">Discover how artificial intelligence is revolutionizing content generation and what it means for your brand.</p>
          <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">SEO Strategies for Small Businesses</h3>
          <p className="text-muted-foreground text-sm">Learn essential SEO tips to boost your small business's online visibility and attract more customers.</p>
          <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Maximizing Social Media Engagement</h3>
          <p className="text-muted-foreground text-sm">Explore effective tactics to increase engagement on your social media platforms and build a loyal community.</p>
          <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
        </div>
      </div>
    </div>
  );
}