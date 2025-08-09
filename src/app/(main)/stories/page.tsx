"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { Loader2, BookOpen } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

interface Story {
  id: string;
  title: string;
  slides: { type: string; url: string; caption: string }[];
  seo_title?: string;
  seo_description?: string;
  status: 'draft' | 'published';
}

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching stories:", error);
        setError("Failed to load stories. Please try again later.");
        toast.error("Failed to load stories.");
      } else {
        setStories(data || []);
      }
      setLoading(false);
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-muted-foreground">Loading stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16 px-4 text-center text-destructive">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <BookOpen className="h-12 w-12 mx-auto text-brand-purple" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Our Latest Stories
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our visual stories and quick updates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.length > 0 ? (
          stories.map((story) => (
            <Card key={story.id} className="bg-secondary/50 border-border/80 overflow-hidden flex flex-col">
              {story.slides && story.slides.length > 0 && story.slides[0].url && (
                <div className="relative w-full h-48">
                  <Image
                    src={story.slides[0].url}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3">{story.seo_description || story.slides[0]?.caption || 'No description available.'}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`/stories/${story.id}`} className="inline-flex items-center text-primary hover:underline">
                  Read Story <BookOpen className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No stories available at the moment.</p>
        )}
      </div>
    </div>
  );
}