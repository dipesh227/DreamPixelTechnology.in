import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jbehjwfwcxfxlmeolmtu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWhqd2Z3Y3hmeGxtZW9sbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MzUzMzAsImV4cCI6MjA3MDIxMTMzMH0.Gwjz-opjdHRP7Sfnkkx_hgGPpk4qXNG4-kSoH0lLE6Y";

// Import the supabase client like this:
// import { supabase } from "@/lib/supabaseClient";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);