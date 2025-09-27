import { MadeWithDyad } from "@/components/made-with-dyad";
import Link from "next/link";

export function PageFooter() {
  const usefulLinks = [
    { name: "Blog", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "YouTube Channel", href: "#" },
    { name: "Free Tools", href: "#" },
    { name: "Podcast", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Condition", href: "#" },
    { name: "Earning Disclaimer", href: "#" },
  ];

  const recentPosts = [
    { name: "9 Best FREE AI Image Upscalers (2025)", href: "#" },
    { name: "Dadan Review (2025) – Best Loom Alternative?", href: "#" },
  ];

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-16 text-left">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-white">Earning Disclaimer</h3>
          <p className="text-gray-400 text-sm">
            DreamPixel Technology participates in various affiliate marketing programs, which means dreampixel.com gets paid commissions on purchases made through our links to retailer sites. <Link href="#" className="text-blue-400 hover:underline">Read full disclaimer.</Link>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Recent Posts</h3>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index}>
                <Link href={post.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {post.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Placeholder for a fourth column if needed, e.g., contact info or social media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">Email: info@dreampixel.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <p className="text-sm text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
}