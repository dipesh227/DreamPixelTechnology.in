import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { prompt } = await request.json();

  // Placeholder for AI generation logic from ai.ts
  const generatedText = `This is an AI-generated caption based on the prompt: "${prompt}"`;

  // Log the suggestion
  const { data, error } = await supabase.from('ai_suggestions').insert({
    user_id: user.id,
    prompt,
    result: generatedText,
    tokens_used: generatedText.length, // Example token calculation
  }).select().single();

  if (error) {
    // Still return the text, but log the error
    console.error("Could not save AI suggestion:", error.message);
  }

  return NextResponse.json({ suggestion: generatedText, suggestionId: data?.id });
}