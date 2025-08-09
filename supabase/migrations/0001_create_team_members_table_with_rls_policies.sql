-- Create 'team_members' table
CREATE TABLE public.team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  avatar_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on 'team_members' table (REQUIRED)
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Policies for 'team_members' table
CREATE POLICY "Public read access for team members" ON public.team_members
FOR SELECT USING (true);

CREATE POLICY "Admins can manage team members" ON public.team_members
FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());