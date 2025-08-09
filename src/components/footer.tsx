import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/navigation";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Logo and About Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="DreamPixel Technology Logo" width={180} height={40} className="brightness-0 invert" />
            </Link>
            <p className="text-sm mb-4">
              DreamPixel Technology is your go-to resource for unbiased reviews and guides on digital tools. We help you build and grow your online business with the right technology.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerNav.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-sm hover:text-white transition-colors">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}