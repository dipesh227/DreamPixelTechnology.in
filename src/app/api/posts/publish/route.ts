import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';
import { getProvider } from '@/lib/posts';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { accountId, content, media } = await request.json();

  if (!accountId || !content) {
    return NextResponse.json({ error: 'accountId and content are required' }, { status: 400 });
  }

  // 1. Fetch the social account details from the database
  const { data: socialAccount, error: accountError } = await supabase
    .from('social_accounts')
    .select('*')
    .eq('id', accountId)
    .eq('user_id', user.id)
    .single();

  if (accountError || !socialAccount) {
    return NextResponse.json({ error: 'Social account not found or access denied.' }, { status: 404 });
  }

  // 2. Get the correct provider adapter
  const provider = getProvider(socialAccount.platform);
  if (!provider) {
    return NextResponse.json({ error: `Publishing to ${socialAccount.platform} is not supported.` }, { status: 501 });
  }

  // 3. Use the provider to publish the post
  const publishResult = await provider.publish(socialAccount, { content, media });

  // 4. Create the social_post record in our database
  const { data: post, error: postError } = await supabase.from('social_posts').insert({
    user_id: user.id,
    content,
    media,
    status: publishResult.success ? 'published' : 'failed',
    published_at: publishResult.success ? new Date().toISOString() : null,
    publish_response: publishResult.response,
  }).select().single();

  if (postError) {
    console.error('CRITICAL: Failed to save post record after successful publish.', postError);
    return NextResponse.json({ message: 'Post published, but failed to record locally.', post: publishResult.response }, { status: 207 });
  }
  
  if (!publishResult.success) {
      return NextResponse.json({ error: 'Failed to publish post', details: publishResult.error }, { status: 500 });
  }

  return NextResponse.json({ message: 'Post published successfully', post }, { status: 200 });
}