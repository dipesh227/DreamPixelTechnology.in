"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { ImageUpload } from "@/components/admin/image-upload";

interface StorySlide {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

interface Story {
  id?: string;
  title: string;
  slides: StorySlide[];
  seo_title?: string;
  seo_description?: string;
  status: 'draft' | 'published';
}

export default function AdminEditStoryPage() {
  const params = useParams();
  const router = useRouter();
  const storyId = params.id as string;
  const isNew = storyId === 'new';

  const [story, setStory] = useState<Story>({
    title: '',
    slides: [],
    status: 'draft',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isNew) {
      const fetchStory = async () => {
        setLoading(true);
        // In a real app, you'd fetch this from your API
        // const res = await fetch(`/api/stories?id=${storyId}`);
        // if (res.ok) {
        //   const data = await res.json();
        //   setStory(data);
        // } else {
        //   toast.error("Failed to load story.");
        //   router.push('/admin/stories');
        // }
        setLoading(false);
      };
      fetchStory();
    } else {
      setLoading(false);
    }
  }, [storyId, isNew, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setStory(prev => ({ ...prev, [id]: value }));
  };

  const handleStatusChange = (value: string) => {
    setStory(prev => ({ ...prev, status: value as 'draft' | 'published' }));
  };

  const handleSlideChange = (index: number, field: keyof StorySlide, value: string) => {
    const newSlides = [...story.slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setStory(prev => ({ ...prev, slides: newSlides }));
  };
  
  const handleSlideImageUpload = (index: number, url: string) => {
    handleSlideChange(index, 'url', url);
  };
  
  const handleSlideImageRemove = (index: number) => {
    handleSlideChange(index, 'url', '');
  };

  const addSlide = () => {
    setStory(prev => ({ ...prev, slides: [...prev.slides, { type: 'image', url: '', caption: '' }] }));
  };

  const removeSlide = (index: number) => {
    setStory(prev => ({ ...prev, slides: prev.slides.filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const method = isNew ? 'POST' : 'PUT';
    const url = '/api/stories';

    const payload = isNew ? story : { id: storyId, ...story };

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success(`Story ${isNew ? 'created' : 'updated'} successfully!`);
      router.push('/admin/stories');
      router.refresh();
    } else {
      const errorData = await res.json();
      toast.error(`Failed to ${isNew ? 'create' : 'update'} story: ${errorData.error || 'Unknown error'}`);
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isNew ? "Create New Story" : `Edit Story`}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={story.title} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={story.status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h3 className="text-lg font-semibold mt-6">Story Slides</h3>
          {story.slides.map((slide, index) => (
            <Card key={index} className="p-4 space-y-4 bg-muted/50">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Slide {index + 1}</h4>
                <Button type="button" variant="destructive" size="sm" onClick={() => removeSlide(index)}>
                  Remove
                </Button>
              </div>
              <div>
                <Label htmlFor={`slide-type-${index}`}>Type</Label>
                <Select value={slide.type} onValueChange={(value) => handleSlideChange(index, 'type', value as 'image' | 'video')}>
                  <SelectTrigger id={`slide-type-${index}`}>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <ImageUpload
                bucketName="public_assets"
                initialUrl={slide.url}
                onUpload={(url) => handleSlideImageUpload(index, url)}
                onRemove={() => handleSlideImageRemove(index)}
                label="Slide Media"
              />

              <div>
                <Label htmlFor={`slide-caption-${index}`}>Caption</Label>
                <Textarea id={`slide-caption-${index}`} value={slide.caption} onChange={(e) => handleSlideChange(index, 'caption', e.target.value)} placeholder="Caption for this slide" />
              </div>
            </Card>
          ))}
          <Button type="button" variant="outline" onClick={addSlide}>
            Add Slide
          </Button>

          <h3 className="text-lg font-semibold mt-6">SEO Information (Optional)</h3>
          <div>
            <Label htmlFor="seo_title">SEO Title</Label>
            <Input id="seo_title" value={story.seo_title || ''} onChange={handleChange} placeholder="Title for search engines" />
          </div>
          <div>
            <Label htmlFor="seo_description">SEO Description</Label>
            <Textarea id="seo_description" value={story.seo_description || ''} onChange={handleChange} placeholder="Meta description for search engines" />
          </div>

          <Button type="submit" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            {isNew ? "Create Story" : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}