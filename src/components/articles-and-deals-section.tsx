import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ArticlesAndDealsSection() {
  const articles = [
    {
      image: "https://via.placeholder.com/300x200/FFD700/FFFFFF?text=AI+Upscalers",
      date: "August 7, 2025",
      title: "9 Best FREE AI Image Upscalers (2025) – Fix Low-Resolution Photos Easily",
      description: "Open your phone's gallery and look—how many photos have you rejected from posting on social media? Blurry pictures, unclear visuals, or images that didn't meet...",
      link: "#"
    },
    {
      image: "https://via.placeholder.com/300x200/8A2BE2/FFFFFF?text=Dadan+Review",
      date: "July 31, 2025",
      title: "Dadan Review (2025) – Best Loom Alternative?",
      description: "Explore this comprehensive review of Dadan, a powerful tool for video messaging and collaboration.",
      link: "#",
      tags: ["AI Tools", "YouTube"]
    },
    {
      image: "https://via.placeholder.com/300x200/00CED1/FFFFFF?text=AI+Prompting",
      date: "July 31, 2025",
      title: "11 Best Free AI Prompting Courses for 2025 (Beginner to Advanced)",
      description: "Unlock the full potential of AI with these top-rated free courses on AI prompting techniques.",
      link: "#",
      tags: ["Reviews"]
    },
    {
      image: "https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Hosting+Review",
      date: "July 24, 2025",
      title: "Elementor Hosting Review (2025) – Really The Best Hosting For Elementor?",
      description: "A deep dive into Elementor hosting to see if it lives up to the hype for WordPress users.",
      link: "#",
      tags: ["Hosting"]
    },
  ];

  const deals = [
    {
      image: "https://via.placeholder.com/300x200/4682B4/FFFFFF?text=Web+Hosting+Deals",
      title: "7 Best Web Hosting Deals (2024)",
      link: "#",
      buttonText: "Read More"
    },
    {
      image: "https://via.placeholder.com/300x200/DA70D6/FFFFFF?text=Hostinger+Coupon",
      title: "Hostinger Coupon Code: 10% Extra Discount + Free Domain",
      link: "#",
      buttonText: "Get Deal"
    },
    {
      image: "https://via.placeholder.com/300x200/32CD32/FFFFFF?text=AppSumo+Deals",
      title: "Best Lifetime Deals On AppSumo (Updated Deals)",
      link: "#",
      buttonText: "Read More"
    },
    {
      image: "https://via.placeholder.com/300x200/FF4500/FFFFFF?text=Cloudways+Coupon",
      title: "Cloudways Coupon Code: 20% Extra Discount + Free Domain",
      link: "#",
      buttonText: "Get Deal"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <Button variant="outline" className="group">
            View All Articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {articles.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {item.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Best Deals Of The Day!
          </h2>
          <Button variant="outline" className="group">
            View All Deals <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
              <CardContent className="p-4 flex flex-col items-center text-center">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </CardTitle>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}