import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { scheduled_for, ...postDetails } = await request.json();

  if (!scheduled_for) {
    return NextResponse.json({ error: 'scheduled_for is required' }, { status: 400 });
  }

  // 1. Create the social post with 'scheduled' status
  const { data: post, error: postError } = await supabase.from('social_posts').insert({
    ...postDetails,
    user_id: user.id,
    status: 'scheduled',
    scheduled_for,
  }).select().single();

  if (postError) {
    return NextResponse.json({ error: postError.message }, { status: 500 });
  }

  // 2. Create the entry in the scheduled_posts queue
  const { error: scheduleError } = await supabase.from('scheduled_posts').insert({
    post_id: post.id,
    next_run_at: scheduled_for,
  });

  if (scheduleError) {
    // Attempt to roll back the social_post creation
    await supabase.from('social_posts').delete().eq('id', post.id);
    return NextResponse.json({ error: scheduleError.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Post scheduled successfully', post }, { status: 201 });
}