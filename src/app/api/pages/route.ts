import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

// Helper to check for admin role
async function isAdmin(userId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin');
  if (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
  return data;
}

// GET all pages (admin only)
export async function GET(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !(await isAdmin(user.id))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { data, error } = await supabase.from('pages').select('*');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST a new page (admin only)
export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !(await isAdmin(user.id))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const pageData = await request.json();
  const { data, error } = await supabase.from('pages').insert(pageData).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}

// PUT to update a page (admin only)
export async function PUT(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !(await isAdmin(user.id))) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id, ...updateData } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase.from('pages').update(updateData).eq('id', id).select().single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}

// DELETE a page (admin only)
export async function DELETE(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !(await isAdmin(user.id))) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
    }

    const { error } = await supabase.from('pages').delete().eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Page deleted successfully' }, { status: 200 });
}