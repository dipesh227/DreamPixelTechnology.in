import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/navigation";

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
          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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