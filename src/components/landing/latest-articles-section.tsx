"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const mainArticle = {
  title: "9 Best FREE AI Image Upscalers (2025) – Fix Low-Resolution Photos Easily",
  date: "August 7, 2025",
  excerpt: "Open your phone's gallery and look—how many photos have you rejected from posting on social media? Blurry pictures, unclear visuals, or images that didn't meet ...",
  imageUrl: "https://picsum.photos/seed/ai-upscaler/800/450",
  href: "/blog/ai-image-upscalers",
};

const sideArticles = [
  {
    title: "Dadan Review (2025) – Best Loom Alternative?",
    date: "July 31, 2025",
    imageUrl: "https://picsum.photos/seed/dadan-review/200/120",
    href: "/blog/dadan-review",
    tags: ["AI Tools", "YouTube"],
  },
  {
    title: "11 Best Free AI Prompting Courses for 2025 (Beginner to Advanced)",
    date: "July 31, 2025",
    imageUrl: "https://picsum.photos/seed/ai-courses/200/120",
    href: "/blog/ai-prompting-courses",
    tags: ["Reviews"],
  },
  {
    title: "Elementor Hosting Review (2025) – Really The Best Hosting For Elementor?",
    date: "July 24, 2025",
    imageUrl: "https://picsum.photos/seed/elementor-hosting/200/120",
    href: "/blog/elementor-hosting-review",
    tags: ["Hosting"],
  },
];

export function LatestArticlesSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View All Articles <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Article */}
          <Link href={mainArticle.href}>
            <Card className="overflow-hidden h-full group shadow-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Image src={mainArticle.imageUrl} alt={mainArticle.title} width={800} height={450} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{mainArticle.date}</p>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{mainArticle.title}</h3>
                  <p className="text-muted-foreground">{mainArticle.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map(article => (
              <Link href={article.href} key={article.title}>
                <div className="flex gap-4 group items-center p-2 rounded-lg hover:bg-background transition-colors">
                  <Image src={article.imageUrl} alt={article.title} width={160} height={90} className="rounded-lg object-cover aspect-video" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{article.title}</h4>
                    <div className="flex gap-2 mt-2">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}