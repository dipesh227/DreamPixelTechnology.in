import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, GraduationCap, Laptop, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CoursesSection() {
  const courses = [
    {
      icon: <Laptop className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Advanced Web Development",
      description: "Master modern web technologies like React, Next.js, and Node.js.",
      duration: "8 Weeks",
      level: "Intermediate"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Mobile App Design (UI/UX)",
      description: "Learn to design intuitive and engaging mobile user interfaces.",
      duration: "6 Weeks",
      level: "Beginner"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Cloud Computing Fundamentals",
      description: "Understand the basics of cloud platforms like AWS and Azure.",
      duration: "4 Weeks",
      level: "Beginner"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Data Science with Python",
      description: "Explore data analysis, machine learning, and visualization.",
      duration: "10 Weeks",
      level: "Intermediate"
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Training Programs
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Elevate your skills with our expert-led courses designed for the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`flex flex-col p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300 
                          animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100 + 200}`}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">{course.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Duration: <span className="font-medium text-gray-700 dark:text-gray-300">{course.duration}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Level: <span className="font-medium text-gray-700 dark:text-gray-300">{course.level}</span>
                </p>
                <Button variant="outline" className="mt-4 w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}