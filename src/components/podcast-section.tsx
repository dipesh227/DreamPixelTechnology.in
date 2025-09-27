import { Button } from "@/components/ui/button";
import { Headphones, Mic } from "lucide-react";

export function PodcastSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Listen To "The DreamPixel Show"
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Exclusive podcast with successful tech entrepreneurs & leaders. Discover their insights and strategies for making money through blogging, affiliate marketing, SEO, online business, SAAS, product building, content marketing, and AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
            <Headphones className="mr-2 h-5 w-5" /> Listen English Podcast
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transition-all">
            <Mic className="mr-2 h-5 w-5" /> Listen Hindi Podcast
          </Button>
        </div>
      </div>
    </section>
  );
}