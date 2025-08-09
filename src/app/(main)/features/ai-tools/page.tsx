import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bot, PenTool, Image as ImageIcon } from "lucide-react";

const aiFeatures = [
  {
    icon: <Bot className="h-6 w-6 text-brand-cyan" />,
    title: "AI Caption Writer",
    description: "Generate platform-aware captions in seconds. Choose from multiple tones and styles to match your brand voice perfectly.",
  },
  {
    icon: <PenTool className="h-6 w-6 text-brand-purple" />,
    title: "Hashtag Suggestions",
    description: "Our AI analyzes your content and suggests relevant, trending hashtags to maximize your reach and engagement.",
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-brand-pink" />,
    title: "Image & Idea Generation",
    description: "Stuck for ideas? Describe your concept and let our AI generate stunning visuals and creative post ideas for you.",
  },
];

export default function AiToolsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Sparkles className="h-12 w-12 mx-auto text-brand-purple" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          AI Creative Suite
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Supercharge your content creation with our powerful AI tools. Save time, overcome creative blocks, and generate high-quality content that resonates with your audience.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {aiFeatures.map((feature) => (
          <Card key={feature.title} className="bg-secondary/50 border-border/80">
            <CardHeader className="flex flex-row items-center gap-4">
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}