import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Redesign",
    description: "A modern and intuitive e-commerce platform for a fashion brand, boosting sales by 30%.",
    imageUrl: "/placeholder-project-1.jpg",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Developed a sleek, user-friendly dashboard for a B2B SaaS application, improving user engagement.",
    imageUrl: "/placeholder-project-2.jpg",
    link: "#",
  },
  {
    title: "Non-Profit Website",
    description: "Created an impactful website for a non-profit organization, increasing donations and volunteer sign-ups.",
    imageUrl: "/placeholder-project-3.jpg",
    link: "#",
  },
  {
    title: "Mobile App UI/UX",
    description: "Designed the complete UI/UX for a new fitness tracking mobile application.",
    imageUrl: "/placeholder-project-4.jpg",
    link: "#",
  },
  {
    title: "Brand Identity for Tech Startup",
    description: "Developed a comprehensive brand identity, including logo, guidelines, and marketing collateral, for a new tech startup.",
    imageUrl: "/placeholder-project-5.jpg",
    link: "#",
  },
  {
    title: "SEO & Content Strategy for Healthcare",
    description: "Implemented an SEO and content marketing strategy that significantly increased organic traffic and patient inquiries for a healthcare provider.",
    imageUrl: "/placeholder-project-6.jpg",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Our Recent Work / Case Studies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore a selection of our successful projects that showcase our expertise in design, development, and digital strategy. Each case study highlights the challenges, our solutions, and the measurable results achieved for our clients.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-secondary/50 border-border/80 overflow-hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href={project.link} className="inline-flex items-center text-primary hover:underline">
                View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}