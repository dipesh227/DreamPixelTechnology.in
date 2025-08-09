import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jbehjwfwcxfxlmeolmtu.supabase.co'), // Replace with your actual domain
  title: {
    default: "DreamPixel Technology | Web Design, Digital Marketing & AI Automation",
    template: "%s | DreamPixel Technology",
  },
  description: "DreamPixel Technology is an all-in-one platform for content management and AI-driven social media automation. We offer web design, SEO, and digital marketing services to amplify your reach.",
  openGraph: {
    title: "DreamPixel Technology",
    description: "Unify Your Content. Amplify Your Reach.",
    url: "https://jbehjwfwcxfxlmeolmtu.supabase.co", // Replace with your actual domain
    siteName: "DreamPixel Technology",
    images: [
      {
        url: '/hero-graphic.png', // Replace with a proper OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}