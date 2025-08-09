-- 1. Create Clients Table
CREATE TABLE public.clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact_email TEXT,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add client_id to profiles table to link users to clients
ALTER TABLE public.profiles ADD COLUMN client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL;

-- Enable RLS and define policies for Clients table
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage clients" ON public.clients FOR ALL USING (is_admin());
CREATE POLICY "Users can view their own client" ON public.clients FOR SELECT USING ((EXISTS (SELECT 1 FROM profiles WHERE profiles.client_id = clients.id AND profiles.id = auth.uid())));

-- 2. Create Projects Table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage projects" ON public.projects FOR ALL USING (is_admin());
CREATE POLICY "Client members can view their projects" ON public.projects FOR SELECT USING ((EXISTS (SELECT 1 FROM profiles WHERE profiles.client_id = projects.client_id AND profiles.id = auth.uid())));

-- 3. Create Project Team Members Join Table
CREATE TABLE public.project_team_members (
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role TEXT,
  PRIMARY KEY (project_id, user_id)
);
ALTER TABLE public.project_team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage project members" ON public.project_team_members FOR ALL USING (is_admin());
CREATE POLICY "Project members can view their assignments" ON public.project_team_members FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Client members can view their project teams" ON public.project_team_members FOR SELECT USING ((EXISTS (SELECT 1 FROM projects p JOIN profiles pr ON p.client_id = pr.client_id WHERE p.id = project_team_members.project_id AND pr.id = auth.uid())));

-- 4. Create Tasks Table
CREATE TABLE public.tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo',
  due_date DATE,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage tasks" ON public.tasks FOR ALL USING (is_admin());
CREATE POLICY "Assigned users can manage their tasks" ON public.tasks FOR ALL USING (assigned_to = auth.uid());
CREATE POLICY "Project members can view project tasks" ON public.tasks FOR SELECT USING ((EXISTS (SELECT 1 FROM project_team_members ptm WHERE ptm.project_id = tasks.project_id AND ptm.user_id = auth.uid())));

-- 5. Create Invoices Table
CREATE TABLE public.invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  invoice_number TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'draft',
  issue_date DATE NOT NULL,
  due_date DATE NOT NULL,
  total_amount INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage invoices" ON public.invoices FOR ALL USING (is_admin());
CREATE POLICY "Client members can view their invoices" ON public.invoices FOR SELECT USING ((EXISTS (SELECT 1 FROM profiles WHERE profiles.client_id = invoices.client_id AND profiles.id = auth.uid())));

-- 6. Create Invoice Line Items Table
CREATE TABLE public.invoice_line_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id UUID NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  quantity INT NOT NULL,
  unit_price INT NOT NULL,
  total_amount INT NOT NULL
);
ALTER TABLE public.invoice_line_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage line items" ON public.invoice_line_items FOR ALL USING (is_admin());
CREATE POLICY "Client members can view their invoice line items" ON public.invoice_line_items FOR SELECT USING ((EXISTS (SELECT 1 FROM invoices i JOIN profiles p ON i.client_id = p.client_id WHERE i.id = invoice_line_items.invoice_id AND p.id = auth.uid())));

-- 7. Create Contracts Table
CREATE TABLE public.contracts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage contracts" ON public.contracts FOR ALL USING (is_admin());
CREATE POLICY "Client members can view their contracts" ON public.contracts FOR SELECT USING ((EXISTS (SELECT 1 FROM profiles WHERE profiles.client_id = contracts.client_id AND profiles.id = auth.uid())));

-- 8. Create Support Tickets Table
CREATE TABLE public.support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  submitted_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'open',
  priority TEXT DEFAULT 'medium',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage all tickets" ON public.support_tickets FOR ALL USING (is_admin());
CREATE POLICY "Users can manage their own tickets" ON public.support_tickets FOR ALL USING (submitted_by = auth.uid());
CREATE POLICY "Client members can view all their client's tickets" ON public.support_tickets FOR SELECT USING ((EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.client_id = support_tickets.client_id)));

-- 9. Create Ticket Replies Table
CREATE TABLE public.ticket_replies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ticket_id UUID NOT NULL REFERENCES public.support_tickets(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.ticket_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage all replies" ON public.ticket_replies FOR ALL USING (is_admin());
CREATE POLICY "Users can manage their own replies" ON public.ticket_replies FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Ticket participants can view replies" ON public.ticket_replies FOR SELECT USING ((EXISTS (SELECT 1 FROM support_tickets WHERE id = ticket_id AND (submitted_by = auth.uid() OR (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.client_id = support_tickets.client_id))))));

-- 10. Create Notifications Table
CREATE TABLE public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT,
  link TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can only manage their own notifications" ON public.notifications FOR ALL USING (user_id = auth.uid());