import Image from "next/image";
import { Star } from "lucide-react"; // Using Star icon as a placeholder for the "Work" badge

export function RecentWorksSection() {
  const projects = [
    { src: "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Project+1", alt: "Project 1" },
    { src: "https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+2", alt: "Project 2" },
    { src: "https://via.placeholder.com/400x300/00CED1/FFFFFF?text=Project+3", alt: "Project 3" },
    { src: "https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Project+4", alt: "Project 4" },
    { src: "https://via.placeholder.com/400x300/4682B4/FFFFFF?text=Project+5", alt: "Project 5" },
    { src: "https://via.placeholder.com/400x300/DA70D6/FFFFFF?text=Project+6", alt: "Project 6" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          <Star className="h-4 w-4 text-gray-500" /> Work
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Recent Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.src}
                alt={project.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}