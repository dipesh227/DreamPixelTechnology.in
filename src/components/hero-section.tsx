import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Empower Your Mind, Delight Your Senses
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your hub for professional growth and a cozy spot for exceptional coffee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explore Training
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Visit Our Cafe
          </Button>
        </div>
      </div>
    </section>
  );
}