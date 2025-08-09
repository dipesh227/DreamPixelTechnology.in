import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content, platform } = await request.json();

  // Placeholder for preview generation logic
  // This would typically involve fetching metadata from a URL in the content
  // or formatting text for a specific platform.
  const previewData = {
    title: `Preview for ${platform}`,
    description: content.substring(0, 100) + '...',
    imageUrl: 'https://via.placeholder.com/150',
  };

  return NextResponse.json(previewData);
}