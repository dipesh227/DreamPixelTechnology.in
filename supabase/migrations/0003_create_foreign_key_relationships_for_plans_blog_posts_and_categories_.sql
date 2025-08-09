-- Link user profiles to their subscription plan
ALTER TABLE public.profiles
ADD CONSTRAINT fk_profile_plan FOREIGN KEY (plan_id) 
REFERENCES public.plans(id) ON DELETE SET NULL;

-- Link blog posts to their category
ALTER TABLE public.blog
ADD CONSTRAINT fk_blog_category FOREIGN KEY (category_id) 
REFERENCES public.blog_categories(id) ON DELETE SET NULL;

-- Link blog posts to their author (user)
ALTER TABLE public.blog
ADD CONSTRAINT fk_blog_author FOREIGN KEY (author_id) 
REFERENCES auth.users(id) ON DELETE CASCADE;