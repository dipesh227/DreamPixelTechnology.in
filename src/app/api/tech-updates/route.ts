import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

// Helper to check for admin role
async function isAdmin(): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin');
  if (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
  return data;
}

// GET all tech updates (admin only)
export async function GET(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !(await isAdmin())) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { data, error } = await supabase.from('tech_updates').select('*');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST a new tech update (admin only)
export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !(await isAdmin())) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const updateData = await request.json();
  const { data, error } = await supabase.from('tech_updates').insert(updateData).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}

// PUT to update a tech update (admin only)
export async function PUT(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !(await isAdmin())) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id, ...updateData } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Tech Update ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase.from('tech_updates').update(updateData).eq('id', id).select().single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}

// DELETE a tech update (admin only)
export async function DELETE(request: Request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !(await isAdmin())) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await request.json();
    if (!id) {
        return NextResponse.json({ error: 'Tech Update ID is required' }, { status: 400 });
    }

    const { error } = await supabase.from('tech_updates').delete().eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Tech Update deleted successfully' }, { status: 200 });
}