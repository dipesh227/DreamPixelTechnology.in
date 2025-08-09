import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { generateCaption } from '@/lib/posts';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { platform, keywords, tone, cta, audience } = body;

  if (!platform || !keywords) {
    return NextResponse.json({ error: 'platform and keywords are required' }, { status: 400 });
  }

  // TODO: Add logic to check user's plan and AI usage limits before proceeding.

  // 1. Generate the caption using the AI helper
  const { result: suggestion, tokens, prompt } = await generateCaption({
    platform,
    keywords,
    tone,
    cta,
    audience,
  });

  // 2. Log the suggestion in the database
  const { data: suggestionRecord, error: suggestionError } = await supabase
    .from('ai_suggestions')
    .insert({
      user_id: user.id,
      prompt,
      result: JSON.stringify(suggestion), // Store structured data as JSON string
      tokens_used: tokens,
      provider: 'mock-ai', // In a real app, this would be 'openai', etc.
    })
    .select()
    .single();

  if (suggestionError) {
    // Still return the text to the user, but log the error for debugging
    console.error("Could not save AI suggestion:", suggestionError.message);
  }

  // 3. Update daily usage stats
  const today = new Date().toISOString().split('T')[0];
  const { error: usageError } = await supabase.rpc('increment_ai_request_count', {
      p_user_id: user.id,
      p_day: today
  });

  if (usageError) {
      console.error('Failed to update user usage stats:', usageError.message);
  }

  // 4. Return the structured suggestion to the client
  return NextResponse.json({
    suggestion,
    suggestionId: suggestionRecord?.id,
  });
}