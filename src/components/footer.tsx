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
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col items-center md:items-start">
                <Image src="/whatsapp-qr.png" alt="WhatsApp QR Code" width={80} height={80} />
                <p className="text-xs text-muted-foreground mt-2">Scan for WhatsApp</p>
            </div>
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