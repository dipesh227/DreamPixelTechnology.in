import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Cloud, ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const featureCards = [
    { icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />, text: "Best Web Hosting" },
    { icon: <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />, text: "Best VPN" },
    { icon: <Cloud className="h-6 w-6 text-purple-600 dark:text-purple-400" />, text: "Best Cloud Storage" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-left-16 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            We Purchase, Test & Review Digital Tools For Small Business.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl lg:mx-0 mx-auto">
            Led by <span className="font-semibold text-blue-600 dark:text-blue-400">DreamPixel Technology</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {featureCards.map((card, index) => (
              <Card key={index} className="p-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                {card.icon}
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{card.text}</span>
              </Card>
            ))}
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all">
            Get 80+ AI Tools List <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-in fade-in zoom-in-90 duration-700 delay-200">
          {/* Placeholder for the image of the person */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
            <Image
              src="https://api.dicebear.com/7.x/lorelei/svg?seed=DreamPixel"
              alt="DreamPixel Technology Expert"
              width={320}
              height={320}
              className="object-cover w-full h-full scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}