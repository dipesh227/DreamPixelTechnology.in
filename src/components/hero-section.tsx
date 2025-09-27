import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users } from "lucide-react"; // Using different icons to match the image's vibe
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-gray-950 overflow-hidden text-center">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top right cards */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <Card className="p-4 mb-4 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Blog Traffic</span>
              <span className="text-green-500 text-sm">+16.9%</span>
            </div>
            <p className="text-2xl font-bold mt-2">12,334</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Since last week</p>
          </Card>
          <Card className="p-4 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Meeting with client</span>
              <span className="text-blue-500 text-sm">40%</span>
            </div>
            <div className="flex -space-x-2 overflow-hidden mt-2">
              <Image src="https://api.dicebear.com/7.x/lorelei/svg?seed=Client1" alt="Client 1" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-950" />
              <Image src="https://api.dicebear.com/7.x/lorelei/svg?seed=Client2" alt="Client 2" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-950" />
            </div>
          </Card>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-16 duration-700">
          <div className="flex justify-center mb-8">
            <Image
              src="/window.svg" // Using an existing public image as a placeholder for the robot
              alt="Robot"
              width={150}
              height={150}
              className="h-32 w-32 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            Transforming Ideas <br /> Into Digital Realities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're a full-service software development and design agency dedicated to turning your vision into an engaging online presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all">
              Book a call
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CheckCircle2 className="mr-2 h-5 w-5" /> Available for new project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}