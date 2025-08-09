import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

// Helper to check for admin role
async function isAdmin(): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin');
  if (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
  return data;
}

// GET all blog posts (admin/author view)
export async function GET(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let query = supabase.from('blog').select('*');
  
  // If not admin, only show user's own posts
  if (!(await isAdmin())) {
    query = query.eq('author_id', user.id);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST a new blog post
export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const postData = await request.json();
  const { data, error } = await supabase.from('blog').insert({ ...postData, author_id: user.id }).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}

// PUT to update a blog post
export async function PUT(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, ...updateData } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    let query = supabase.from('blog').update(updateData).eq('id', id);
    if (!(await isAdmin())) {
        query = query.eq('author_id', user.id);
    }
    
    const { data, error } = await query.select().single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}

// DELETE a blog post
export async function DELETE(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }
    
    let query = supabase.from('blog').delete().eq('id', id);
    if (!(await isAdmin())) {
        query = query.eq('author_id', user.id);
    }

    const { error } = await query;

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Blog post deleted successfully' }, { status: 200 });
}