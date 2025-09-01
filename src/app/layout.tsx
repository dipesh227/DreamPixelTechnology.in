import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Pixel Social Hub",
  description: "AI-Powered Social Media Management to create viral content with DeepSeek AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="font-sans antialiased"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {children}
      </body>
    </html>
  );
}