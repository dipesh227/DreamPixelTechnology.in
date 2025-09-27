import { Code, Lightbulb, Youtube, Twitter, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 flex justify-center animate-in fade-in zoom-in-90 duration-700">
          {/* Placeholder for the "About Me" image */}
          <div className="relative w-full max-w-md h-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://api.dicebear.com/7.x/lorelei/svg?seed=DreamPixelTeam"
              alt="DreamPixel Technology Team"
              width={500}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-right-16 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About DreamPixel Technology
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            At DreamPixel Technology, we are passionate about crafting innovative digital solutions that empower businesses and individuals. Our mission is to blend cutting-edge technology with creative design to deliver exceptional results. We specialize in full-stack web development, mobile application creation, UI/UX design, and cloud solutions. Our team of skilled professionals is dedicated to building robust, scalable, and user-friendly applications tailored to your needs.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Our vision is to be a leading innovator in the digital landscape, recognized for our commitment to quality, creativity, and client success. We aim to transform complex ideas into elegant, functional, and impactful digital experiences.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all mb-8">
            Read More About Us
          </Button>
          <div className="flex justify-center lg:justify-start gap-6">
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Youtube className="h-7 w-7" />
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Twitter className="h-7 w-7" />
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Instagram className="h-7 w-7" />
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Facebook className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}