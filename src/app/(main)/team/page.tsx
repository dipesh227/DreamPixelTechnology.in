import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Lead Strategist",
    avatarUrl: "https://picsum.photos/seed/woman-ceo/150/150",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "John Smith",
    role: "Head of Design",
    avatarUrl: "https://picsum.photos/seed/man-designer/150/150",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily White",
    role: "Senior Developer",
    avatarUrl: "https://picsum.photos/seed/woman-developer/150/150",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Green",
    role: "Marketing Manager",
    avatarUrl: "https://picsum.photos/seed/man-marketing/150/150",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto py-20 md:py-24 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Meet Our Talented Team
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are a passionate group of digital experts dedicated to bringing your vision to life and achieving your business goals.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-secondary/50 border-border/80 flex flex-col items-center text-center p-6">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={member.avatarUrl} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{member.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-muted-foreground">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                )}
                {member.twitter && (
                  <Link href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}