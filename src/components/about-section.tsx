import { Code, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About DreamPixel Technology
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          At DreamPixel Technology, we are passionate about crafting innovative digital solutions that empower businesses and individuals. Our mission is to blend cutting-edge technology with creative design to deliver exceptional results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Code className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Our Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We specialize in full-stack web development, mobile application creation, UI/UX design, and cloud solutions. Our team of skilled professionals is dedicated to building robust, scalable, and user-friendly applications tailored to your needs.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be a leading innovator in the digital landscape, recognized for our commitment to quality, creativity, and client success. We aim to transform complex ideas into elegant, functional, and impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}