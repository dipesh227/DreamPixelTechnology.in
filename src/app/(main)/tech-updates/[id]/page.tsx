"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Loader2, ArrowLeft, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TechUpdate {
  id: string;
  title: string;
  source_url?: string;
  image_url?: string;
  content?: string;
  status: 'draft' | 'published' | 'rejected';
  published_at?: string;
}

export default function SingleTechUpdatePage() {
  const params = useParams();
  const router = useRouter();
  const updateId = params.id as string;

  const [techUpdate, setTechUpdate] = useState<TechUpdate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechUpdate = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('tech_updates')
        .select('*')
        .eq('id', updateId)
        .eq('status', 'published') // Only fetch published updates for public view
        .single();

      if (error || !data) {
        console.error("Error fetching tech update:", error);
        setError("Tech update not found or not published.");
        toast.error("Failed to load tech update.");
      } else {
        setTechUpdate(data);
      }
      setLoading(false);
    };

    if (updateId) {
      fetchTechUpdate();
    }
  }, [updateId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !techUpdate) {
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

  return (
    <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-112px)]">
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-8">
        {techUpdate.image_url && (
          <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden">
            <Image
              src={techUpdate.image_url}
              alt={techUpdate.title}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{techUpdate.title}</h1>
        {techUpdate.published_at && (
          <p className="text-sm text-muted-foreground mb-4">
            Published on {new Date(techUpdate.published_at).toLocaleDateString()}
          </p>
        )}
        <div className="prose dark:prose-invert max-w-none text-foreground">
          <p>{techUpdate.content || 'No content available for this update.'}</p>
        </div>
        {techUpdate.source_url && (
          <div className="mt-6">
            <Link href={techUpdate.source_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
        <div className="mt-8">
          <Button onClick={() => router.push('/tech-updates')}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tech Updates
          </Button>
        </div>
      </div>
    </div>
  );
}