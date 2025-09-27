import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle background pattern/animation inspired by tech UIs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/30 to-blue-500/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 z-10 animate-in fade-in zoom-in-90 duration-700">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Transforming Visions into Digital Realities
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          DreamPixel Technology: Innovating the future, one pixel at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}