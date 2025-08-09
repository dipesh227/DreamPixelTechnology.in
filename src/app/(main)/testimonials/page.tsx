"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Quote } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar_url?: string;
  display_order: number;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials. Please try again later.");
        toast.error("Failed to load testimonials.");
      } else {
        setTestimonials(data || []);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, [supabase]);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-muted-foreground">Loading testimonials...</p>
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
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          What Our Clients Say
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hear directly from businesses and individuals who have experienced the DreamPixel difference. Their success stories are our greatest motivation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-secondary/50 border-border/80 p-6 flex flex-col justify-between">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-lg italic text-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar_url} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    {/* You can add title/company here if available in data */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No testimonials available at the moment.</p>
        )}
      </div>
    </div>
  );
}