import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="DreamPixel Logo" width={180} height={40} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Unify Your Content. Amplify Your Reach.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/request-quote" className="text-sm text-muted-foreground hover:text-foreground">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">All Services</Link></li>
              <li><Link href="/services/web-design-development" className="text-sm text-muted-foreground hover:text-foreground">Web Design & Development</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm text-muted-foreground hover:text-foreground">Digital Marketing</Link></li>
              <li><Link href="/services/seo-services" className="text-sm text-muted-foreground hover:text-foreground">SEO Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog / Insights</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground">Portfolio / Case Studies</Link></li>
              <li><Link href="/testimonials" className="text-sm text-muted-foreground hover:text-foreground">Client Testimonials</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
          </p>
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              DreamPixel
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}