"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Story {
  id: string;
  title: string;
  slides: { type: string; url: string; caption: string }[];
  seo_title?: string;
  seo_description?: string;
  status: 'draft' | 'published';
}

export default function SingleStoryPage() {
  const params = useParams();
  const router = useRouter();
  const storyId = params.id as string;

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('id', storyId)
        .eq('status', 'published') // Only fetch published stories for public view
        .single();

      if (error || !data) {
        console.error("Error fetching story:", error);
        setError("Story not found or not published.");
        toast.error("Failed to load story.");
      } else {
        setStory(data);
      }
      setLoading(false);
    };

    if (storyId) {
      fetchStory();
    }
  }, [storyId]);

  const handleNextSlide = () => {
    if (story && currentSlideIndex < story.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] text-center px-4">
        <h1 className="text-3xl font-bold text-destructive">Error</h1>
        <p className="mt-2 text-lg text-muted-foreground">{error}</p>
        <Button onClick={() => router.back()} className="mt-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
        </Button>
      </div>
    );
  }

  const currentSlide = story.slides[currentSlideIndex];

  return (
    <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-96 bg-black flex items-center justify-center">
          {currentSlide?.type === 'image' && currentSlide.url && (
            <Image
              src={currentSlide.url}
              alt={currentSlide.caption || story.title}
              layout="fill"
              objectFit="contain"
              className="object-center"
            />
          )}
          {currentSlide?.type === 'video' && currentSlide.url && (
            <video
              src={currentSlide.url}
              controls
              className="w-full h-full object-contain"
            />
          )}
          {story.slides.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 text-foreground"
                onClick={handlePrevSlide}
                disabled={currentSlideIndex === 0}
              >
                &lt;
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 text-foreground"
                onClick={handleNextSlide}
                disabled={currentSlideIndex === story.slides.length - 1}
              >
                &gt;
              </Button>
            </>
          )}
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
          {currentSlide?.caption && (
            <p className="text-muted-foreground text-lg mb-4">{currentSlide.caption}</p>
          )}
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Slide {currentSlideIndex + 1} of {story.slides.length}</span>
            <Button variant="outline" onClick={() => router.push('/stories')}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}