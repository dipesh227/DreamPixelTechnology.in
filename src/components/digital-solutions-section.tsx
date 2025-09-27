"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Layout, Megaphone, ArrowRight } from "lucide-react";
import Image from "next/image";

export function DigitalSolutionsSection() {
  const mobileAppContent = {
    title: "Mobile App",
    description: "Custom mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    image: "https://via.placeholder.com/600x400/A020F0/FFFFFF?text=Mobile+App+Showcase",
    features: ["Native Development", "Cross-Platform Apps", "UI/UX Design", "App Maintenance"],
    showcaseImages: [
      "https://via.placeholder.com/200x400/A020F0/FFFFFF?text=Screen+1",
      "https://via.placeholder.com/200x400/A020F0/FFFFFF?text=Screen+2",
      "https://via.placeholder.com/200x400/A020F0/FFFFFF?text=Screen+3",
    ]
  };

  const webDevelopmentContent = {
    title: "Web Development",
    description: "Building responsive, scalable, and secure web applications using modern frameworks.",
    image: "https://via.placeholder.com/600x400/4169E1/FFFFFF?text=Web+Dev+Showcase",
    features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "CMS Integration"],
  };

  const graphicDesignContent = {
    title: "Graphic Design",
    description: "Creating stunning visual identities, branding, and marketing materials that captivate your audience.",
    image: "https://via.placeholder.com/600x400/3CB371/FFFFFF?text=Graphic+Design+Showcase",
    features: ["Logo Design", "Branding", "UI/UX Graphics", "Marketing Collaterals"],
  };

  const digitalMarketingContent = {
    title: "Digital Marketing",
    description: "Driving online growth through effective SEO, social media, and content marketing strategies.",
    image: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Digital+Marketing+Showcase",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Our Exceptional <br /> Digital Solutions for Your Business
        </h2>

        <Tabs defaultValue="mobile-app" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-gray-200 dark:bg-gray-800 rounded-full mb-12">
            <TabsTrigger value="mobile-app" className="py-3 px-6 rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all">
              <Smartphone className="h-5 w-5 mr-2" /> Mobile App
            </TabsTrigger>
            <TabsTrigger value="web-development" className="py-3 px-6 rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all">
              <Code className="h-5 w-5 mr-2" /> Web Development
            </TabsTrigger>
            <TabsTrigger value="graphic-design" className="py-3 px-6 rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all">
              <Layout className="h-5 w-5 mr-2" /> Graphic Design
            </TabsTrigger>
            <TabsTrigger value="digital-marketing" className="py-3 px-6 rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white transition-all">
              <Megaphone className="h-5 w-5 mr-2" /> Digital Marketing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile-app">
            <Card className="p-8 text-left shadow-lg bg-white dark:bg-gray-800">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {mobileAppContent.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {mobileAppContent.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {mobileAppContent.features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center gap-4 relative">
                  {/* Placeholder for mobile app screenshots */}
                  {mobileAppContent.showcaseImages.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Mobile App Screen ${index + 1}`}
                      width={200}
                      height={400}
                      className={`rounded-lg shadow-xl object-cover ${index === 1 ? 'z-10 scale-110' : 'opacity-80'} transition-all duration-300`}
                      style={{ transform: index === 0 ? 'translateX(-20%)' : index === 2 ? 'translateX(20%)' : 'none' }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="web-development">
            <Card className="p-8 text-left shadow-lg bg-white dark:bg-gray-800">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {webDevelopmentContent.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {webDevelopmentContent.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {webDevelopmentContent.features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={webDevelopmentContent.image}
                    alt={webDevelopmentContent.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="graphic-design">
            <Card className="p-8 text-left shadow-lg bg-white dark:bg-gray-800">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {graphicDesignContent.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {graphicDesignContent.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {graphicDesignContent.features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={graphicDesignContent.image}
                    alt={graphicDesignContent.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="digital-marketing">
            <Card className="p-8 text-left shadow-lg bg-white dark:bg-gray-800">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <CardTitle className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {digitalMarketingContent.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {digitalMarketingContent.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {digitalMarketingContent.features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={digitalMarketingContent.image}
                    alt={digitalMarketingContent.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}