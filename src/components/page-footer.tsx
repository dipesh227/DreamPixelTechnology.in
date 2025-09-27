import { MadeWithDyad } from "@/components/made-with-dyad";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function PageFooter() {
  const agencyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 text-left">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="https://api.dicebear.com/7.x/lorelei/svg?seed=DreamPixelTeam" // Reverting to original image
              alt="DreamPixel Technology Logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-black dark:text-white">DreamPixel Technology</span>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Agency</h3>
          <ul className="space-y-2">
            {agencyLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-black dark:hover:text-white text-sm transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-black dark:hover:text-white text-sm transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-black dark:hover:text-white text-sm transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
}