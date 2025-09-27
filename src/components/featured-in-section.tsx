import Image from "next/image";

export function FeaturedInSection() {
  const logos = [
    { src: "/next.svg", alt: "The Economic Times" }, // Using existing public images as placeholders
    { src: "/vercel.svg", alt: "Hostinger" },
    { src: "/globe.svg", alt: "Cloudways" },
    { src: "/file.svg", alt: "The Free Press Journal" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 text-center">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Featured In
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="h-12 w-auto relative opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}