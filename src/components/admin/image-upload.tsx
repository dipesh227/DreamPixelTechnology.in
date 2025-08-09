"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface ImageUploadProps {
  bucketName: string;
  initialUrl?: string | null;
  onUpload: (url: string) => void;
  onRemove: () => void;
  label?: string;
}

export function ImageUpload({ bucketName, initialUrl, onUpload, onRemove, label = "Featured Image" }: ImageUploadProps) {
  const supabase = createClient();
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(initialUrl || null);

  useEffect(() => {
    setImageUrl(initialUrl || null);
  }, [initialUrl]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    setUploading(true);

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      toast.error('Failed to upload image.');
      console.error(uploadError);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    setImageUrl(publicUrl);
    onUpload(publicUrl);
    setUploading(false);
    toast.success('Image uploaded successfully.');
  };

  const handleRemoveImage = () => {
    // This only removes the reference in the form, not the file from storage.
    setImageUrl(null);
    onRemove();
    toast.info('Image removed from post.');
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative w-full h-48 border-2 border-dashed rounded-md flex flex-col items-center justify-center">
        {imageUrl ? (
          <>
            <Image src={imageUrl} alt="Uploaded image" layout="fill" objectFit="cover" className="rounded-md" />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleRemoveImage}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove Image</span>
              </Button>
            </div>
          </>
        ) : (
          <>
            {uploading ? (
              <>
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                <p className="text-muted-foreground mt-2">Uploading...</p>
              </>
            ) : (
              <>
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-muted-foreground mt-2">Upload an image</p>
                <Input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/gif, image/webp"
                  disabled={uploading}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}