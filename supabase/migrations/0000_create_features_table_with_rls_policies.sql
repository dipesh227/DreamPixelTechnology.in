-- Create 'features' table
CREATE TABLE public.features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on 'features' table (REQUIRED)
ALTER TABLE public.features ENABLE ROW LEVEL SECURITY;

-- Policies for 'features' table
CREATE POLICY "Public read access for features" ON public.features
FOR SELECT USING (true);

CREATE POLICY "Admins can manage features" ON public.features
FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());