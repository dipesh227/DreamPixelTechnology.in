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

export async function POST(request: Request) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !(await isAdmin())) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { taskId } = await request.json();

  // Placeholder for PDF generation logic
  console.log(`Generating PDF for task ${taskId}`);
  const pdfContent = `PDF for task ${taskId}`;
  
  return new Response(pdfContent, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="task-${taskId}.pdf"`,
    },
  });
}