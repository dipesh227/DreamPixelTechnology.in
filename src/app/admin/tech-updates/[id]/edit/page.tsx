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

interface TechUpdate {
  id?: string;
  title: string;
  source_url?: string;
  image_url?: string;
  content?: string;
  status: 'draft' | 'published' | 'rejected';
  published_at?: string | null; // Changed to allow null
}

export default function AdminEditTechUpdatePage() {
  const params = useParams();
  const router = useRouter();
  const updateId = params.id as string;
  const isNew = updateId === 'new';

  const [techUpdate, setTechUpdate] = useState<TechUpdate>({
    title: '',
    status: 'draft',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isNew) {
      const fetchTechUpdate = async () => {
        setLoading(true);
        // In a real app, you'd fetch this from your API
        // For now, we'll simulate it.
        // const res = await fetch(`/api/tech-updates?id=${updateId}`);
        // if (res.ok) {
        //   const data = await res.json();
        //   setTechUpdate(data);
        // } else {
        //   toast.error("Failed to load tech update.");
        //   router.push('/admin/tech-updates');
        // }
        setLoading(false);
      };
      fetchTechUpdate();
    } else {
      setLoading(false);
    }
  }, [updateId, isNew, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTechUpdate(prev => ({ ...prev, [id]: value }));
  };

  const handleStatusChange = (value: string) => {
    setTechUpdate(prev => ({ ...prev, status: value as 'draft' | 'published' | 'rejected' }));
  };

  const handleImageUpload = (url: string) => {
    setTechUpdate(prev => ({ ...prev, image_url: url }));
  };

  const handleImageRemove = () => {
    setTechUpdate(prev => ({ ...prev, image_url: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const method = isNew ? 'POST' : 'PUT';
    const url = '/api/tech-updates';

    const payload = isNew ? techUpdate : { id: updateId, ...techUpdate };

    if (payload.status === 'published' && !payload.published_at) {
      payload.published_at = new Date().toISOString();
    } else if (payload.status !== 'published') {
      payload.published_at = null;
    }

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success(`Tech update ${isNew ? 'created' : 'updated'} successfully!`);
      router.push('/admin/tech-updates');
      router.refresh();
    } else {
      const errorData = await res.json();
      toast.error(`Failed to ${isNew ? 'create' : 'update'} tech update: ${errorData.error || 'Unknown error'}`);
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
        <CardTitle>{isNew ? "Create New Tech Update" : `Edit Tech Update`}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={techUpdate.title} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="source_url">Source URL</Label>
            <Input id="source_url" value={techUpdate.source_url || ''} onChange={handleChange} placeholder="e.g., https://example.com/news" />
          </div>
          
          <ImageUpload
            bucketName="public_assets"
            initialUrl={techUpdate.image_url}
            onUpload={handleImageUpload}
            onRemove={handleImageRemove}
          />

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" value={techUpdate.content || ''} onChange={handleChange} placeholder="Full content of the tech update" className="min-h-[150px]" />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={techUpdate.status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            {isNew ? "Create Tech Update" : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}