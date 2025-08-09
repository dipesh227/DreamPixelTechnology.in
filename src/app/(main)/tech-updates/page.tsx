"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { Loader2, Zap } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

interface TechUpdate {
  id: string;
  title: string;
  source_url?: string;
  image_url?: string;
  content?: string;
  status: 'draft' | 'published' | 'rejected';
  published_at?: string;
}

export default function TechUpdatesPage() {
  const [updates, setUpdates] = useState<TechUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('tech_updates')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) {
        console.error("Error fetching tech updates:", error);
        setError("Failed to load tech updates. Please try again later.");
        toast.error("Failed to load tech updates.");
      } else {
        setUpdates(data || []);
      }
      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-muted-foreground">Loading tech updates...</p>
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
        <Zap className="h-12 w-12 mx-auto text-brand-cyan" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Latest Tech Updates
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stay informed with the newest developments in technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.length > 0 ? (
          updates.map((update) => (
            <Card key={update.id} className="bg-secondary/50 border-border/80 overflow-hidden flex flex-col">
              {update.image_url && (
                <div className="relative w-full h-48">
                  <Image
                    src={update.image_url}
                    alt={update.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{update.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3">{update.content || 'No content available.'}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`/tech-updates/${update.id}`} className="inline-flex items-center text-primary hover:underline">
                  Read More <Zap className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No tech updates available at the moment.</p>
        )}
      </div>
    </div>
  );
}