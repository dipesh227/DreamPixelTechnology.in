import { ShoppingCart, CheckCircle } from "lucide-react";

export default function EcommerceSolutionsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <ShoppingCart className="h-12 w-12 mx-auto text-destructive" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          E-commerce Solutions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Launch and scale your online store with our robust e-commerce solutions. We build secure, user-friendly, and high-converting platforms designed to maximize your sales and streamline operations.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our E-commerce Expertise</h2>
        <p>
          From initial strategy to post-launch support, we provide end-to-end e-commerce services. We focus on creating seamless shopping experiences, integrating essential features, and optimizing for performance and conversions.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Custom E-commerce Website Development</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Platform Migration (e.g., Shopify, WooCommerce, Magento)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Payment Gateway Integration</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Inventory Management Solutions</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Product Catalog Management</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Security & SSL Implementation</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Performance Optimization</li>
        </ul>
        <p>
          Empower your business with a powerful online storefront that drives sales and provides an excellent customer experience.
        </p>
      </div>
    </div>
  );
}