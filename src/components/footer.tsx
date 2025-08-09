import Link from "next/link";
import Image from "next/image";

const usefulLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Privacy Policy", href: "/privacy-policy" },
];

const recentPosts = [
    { title: "9 Best FREE AI Image Upscalers (2025)", href: "/blog/ai-image-upscalers" },
    { title: "Dadan Review (2025) – Best Loom Alternative?", href: "/blog/dadan-review" },
    { title: "11 Best Free AI Prompting Courses for 2025", href: "/blog/ai-prompting-courses" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Useful Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Earning Disclaimer */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Earning Disclaimer</h4>
            <p className="text-sm">
              DreamPixel Technology participates in various affiliate marketing programs, which means we may get paid commissions on purchases made through our links to retailer sites.{" "}
              <Link href="/privacy-policy" className="underline hover:text-white">Read full disclaimer</Link>.
            </p>
          </div>

          {/* Recent Posts */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Recent Posts</h4>
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <Link href={post.href} className="text-sm hover:text-white transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Logo section */}
          <div className="flex flex-col items-center md:items-end">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="DreamPixel Technology Logo" width={180} height={40} className="brightness-0 invert" />
            </Link>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}