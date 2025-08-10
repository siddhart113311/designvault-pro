-- Location: supabase/migrations/20250110181104_portfolio_system.sql
-- Schema Analysis: Fresh project - no existing schema
-- Integration Type: Complete new schema creation
-- Dependencies: None (fresh installation)

-- 1. Extensions & Types
CREATE TYPE public.user_role AS ENUM ('admin', 'client', 'viewer');
CREATE TYPE public.project_type AS ENUM ('residential', 'commercial', 'landscape');
CREATE TYPE public.project_status AS ENUM ('planning', 'in_progress', 'completed', 'on_hold');
CREATE TYPE public.inquiry_status AS ENUM ('new', 'in_review', 'responded', 'closed');
CREATE TYPE public.layout_style AS ENUM ('modern', 'classic', 'minimal', 'elegant', 'rustic', 'contemporary');

-- 2. Core Tables
-- User profiles (intermediary table for auth relationships)
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role public.user_role DEFAULT 'client'::public.user_role,
    bio TEXT,
    company TEXT,
    phone TEXT,
    website TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Project categories
CREATE TABLE public.project_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    color_code TEXT DEFAULT '#3B82F6',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Main projects table
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    detailed_notes TEXT,
    category_id UUID REFERENCES public.project_categories(id) ON DELETE SET NULL,
    owner_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    project_type public.project_type DEFAULT 'residential'::public.project_type,
    status public.project_status DEFAULT 'completed'::public.project_status,
    location TEXT,
    client_name TEXT,
    completion_date DATE,
    start_date DATE,
    budget_range TEXT,
    custom_colors JSONB DEFAULT '{"primary": "#3B82F6", "secondary": "#10B981", "background": "#F9FAFB"}'::jsonb,
    layout_style public.layout_style DEFAULT 'modern'::public.layout_style,
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    seo_title TEXT,
    seo_description TEXT,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Project images
CREATE TABLE public.project_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    is_primary BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    file_size INTEGER,
    file_type TEXT,
    width INTEGER,
    height INTEGER,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Project materials/resources
CREATE TABLE public.project_materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT,
    brand TEXT,
    model TEXT,
    color TEXT,
    finish TEXT,
    image_url TEXT,
    reference_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Project tags (many-to-many relationship)
CREATE TABLE public.project_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    tag_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, tag_name)
);

-- Contact inquiries
CREATE TABLE public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    project_type TEXT,
    budget_range TEXT,
    preferred_contact_method TEXT DEFAULT 'email',
    status public.inquiry_status DEFAULT 'new'::public.inquiry_status,
    admin_notes TEXT,
    responded_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Essential Indexes
CREATE INDEX idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX idx_user_profiles_role ON public.user_profiles(role);
CREATE INDEX idx_projects_owner_id ON public.projects(owner_id);
CREATE INDEX idx_projects_category_id ON public.projects(category_id);
CREATE INDEX idx_projects_type ON public.projects(project_type);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_featured ON public.projects(is_featured);
CREATE INDEX idx_projects_published ON public.projects(is_published);
CREATE INDEX idx_projects_display_order ON public.projects(display_order);
CREATE INDEX idx_project_images_project_id ON public.project_images(project_id);
CREATE INDEX idx_project_images_primary ON public.project_images(is_primary);
CREATE INDEX idx_project_materials_project_id ON public.project_materials(project_id);
CREATE INDEX idx_project_tags_project_id ON public.project_tags(project_id);
CREATE INDEX idx_project_tags_name ON public.project_tags(tag_name);
CREATE INDEX idx_contact_inquiries_status ON public.contact_inquiries(status);
CREATE INDEX idx_contact_inquiries_created ON public.contact_inquiries(created_at);

-- 4. Storage buckets setup
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'project-images',
    'project-images', 
    true,
    10485760, -- 10MB limit
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/gif']
);

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'material-images',
    'material-images',
    true, 
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
);

-- 5. RLS Setup
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- 6. Helper Functions (BEFORE RLS policies)
CREATE OR REPLACE FUNCTION public.is_admin_from_auth()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM auth.users au
    WHERE au.id = auth.uid() 
    AND (au.raw_user_meta_data->>'role' = 'admin')
)
$$;

-- 7. RLS Policies
-- Pattern 1: Core user table (user_profiles) - Simple only, no functions
CREATE POLICY "users_manage_own_user_profiles"
ON public.user_profiles
FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Pattern 4: Public read, admin write for categories
CREATE POLICY "public_can_read_categories"
ON public.project_categories
FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "admins_manage_categories"
ON public.project_categories
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- Pattern 4: Public read, admin write for projects
CREATE POLICY "public_can_read_published_projects"
ON public.projects
FOR SELECT
TO public
USING (is_published = true);

CREATE POLICY "admins_manage_projects"
ON public.projects
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- Pattern 4: Public read for project images (linked to published projects)
CREATE POLICY "public_can_read_project_images"
ON public.project_images
FOR SELECT
TO public
USING (
    EXISTS (
        SELECT 1 FROM public.projects p
        WHERE p.id = project_id AND p.is_published = true
    )
);

CREATE POLICY "admins_manage_project_images"
ON public.project_images
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- Pattern 4: Public read for project materials
CREATE POLICY "public_can_read_project_materials"
ON public.project_materials
FOR SELECT
TO public
USING (
    EXISTS (
        SELECT 1 FROM public.projects p
        WHERE p.id = project_id AND p.is_published = true
    )
);

CREATE POLICY "admins_manage_project_materials"
ON public.project_materials
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- Pattern 4: Public read for project tags
CREATE POLICY "public_can_read_project_tags"
ON public.project_tags
FOR SELECT
TO public
USING (
    EXISTS (
        SELECT 1 FROM public.projects p
        WHERE p.id = project_id AND p.is_published = true
    )
);

CREATE POLICY "admins_manage_project_tags"
ON public.project_tags
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- Pattern 4: Public can create inquiries, admins can manage all
CREATE POLICY "anyone_can_create_inquiries"
ON public.contact_inquiries
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "admins_manage_all_inquiries"
ON public.contact_inquiries
FOR ALL
TO authenticated
USING (public.is_admin_from_auth())
WITH CHECK (public.is_admin_from_auth());

-- 8. Storage RLS Policies
-- Pattern 2: Public storage for project images
CREATE POLICY "public_can_view_project_images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'project-images');

CREATE POLICY "admins_upload_project_images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'project-images'
    AND public.is_admin_from_auth()
);

CREATE POLICY "admins_manage_project_images_storage"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'project-images' AND public.is_admin_from_auth())
WITH CHECK (bucket_id = 'project-images' AND public.is_admin_from_auth());

CREATE POLICY "admins_delete_project_images_storage"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'project-images' AND public.is_admin_from_auth());

-- Pattern 2: Public storage for material images
CREATE POLICY "public_can_view_material_images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'material-images');

CREATE POLICY "admins_upload_material_images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'material-images'
    AND public.is_admin_from_auth()
);

CREATE POLICY "admins_manage_material_images_storage"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'material-images' AND public.is_admin_from_auth())
WITH CHECK (bucket_id = 'material-images' AND public.is_admin_from_auth());

-- 9. Functions for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'client')::public.user_role
  );
  RETURN NEW;
END;
$$;

-- 10. Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 11. Functions for updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_user_profiles_updated_at 
    BEFORE UPDATE ON public.user_profiles 
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON public.projects 
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at 
    BEFORE UPDATE ON public.contact_inquiries 
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 12. Mock Data
DO $$
DECLARE
    admin_uuid UUID := gen_random_uuid();
    client_uuid UUID := gen_random_uuid();
    interior_cat_id UUID := gen_random_uuid();
    exterior_cat_id UUID := gen_random_uuid();
    landscape_cat_id UUID := gen_random_uuid();
    project1_id UUID := gen_random_uuid();
    project2_id UUID := gen_random_uuid();
    project3_id UUID := gen_random_uuid();
BEGIN
    -- Create auth users with required fields
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES
        (admin_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'admin@designstudio.com', crypt('admin123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Design Studio Admin", "role": "admin"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null),
        (client_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'client@example.com', crypt('client123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Sample Client", "role": "client"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null);

    -- Create categories
    INSERT INTO public.project_categories (id, name, slug, description, color_code) VALUES
        (interior_cat_id, 'Interior Design', 'interior-design', 'Residential and commercial interior spaces', '#3B82F6'),
        (exterior_cat_id, 'Exterior Design', 'exterior-design', 'Building facades and outdoor structures', '#10B981'),
        (landscape_cat_id, 'Landscape Design', 'landscape-design', 'Garden and outdoor environment design', '#F59E0B');

    -- Create sample projects
    INSERT INTO public.projects (
        id, title, slug, description, detailed_notes, category_id, owner_id, 
        project_type, location, client_name, completion_date, is_featured, display_order
    ) VALUES
        (project1_id, 'Modern Downtown Loft', 'modern-downtown-loft', 
         'Complete renovation of a 2000sq ft downtown loft featuring clean lines, natural materials, and smart home integration.',
         'This project transformed a dated industrial space into a sophisticated modern home. We focused on maximizing natural light while creating distinct zones for living, working, and entertaining. The design incorporates sustainable materials throughout, including reclaimed wood flooring and energy-efficient lighting systems. Custom built-ins maximize storage while maintaining the open feel of the loft.',
         interior_cat_id, admin_uuid, 'residential', 'Downtown District', 'Sarah Johnson', '2024-03-15', true, 1),
        
        (project2_id, 'Sustainable Office Building', 'sustainable-office-building',
         'LEED-certified office complex with green roof, solar panels, and rainwater harvesting system.',
         'A 50000 square foot office complex designed with sustainability at its core. Features include a living green roof that reduces heat island effect, comprehensive solar panel system providing 60% of building energy needs, and advanced rainwater collection system. Interior spaces maximize natural light and include biophilic design elements throughout.',
         exterior_cat_id, admin_uuid, 'commercial', 'Business Park East', 'GreenTech Corp', '2024-01-20', false, 2),
        
        (project3_id, 'Zen Garden Retreat', 'zen-garden-retreat',
         'Peaceful landscape design featuring water elements, meditation spaces, and native plant selections.',
         'A transformative landscape project creating multiple outdoor rooms for relaxation and contemplation. The design includes a custom water feature with natural stone, dedicated meditation pavilion, and carefully curated plant selection focusing on native species. Walking paths connect different garden zones while maintaining privacy and tranquility.',
         landscape_cat_id, admin_uuid, 'residential', 'Suburban Heights', 'Michael Chen', '2024-02-28', false, 3);

    -- Add project images
    INSERT INTO public.project_images (project_id, url, alt_text, caption, is_primary, display_order) VALUES
        (project1_id, '/images/loft-living-room.jpg', 'Modern loft living room', 'Open living area with floor-to-ceiling windows', true, 1),
        (project1_id, '/images/loft-kitchen.jpg', 'Modern loft kitchen', 'Minimalist kitchen with concrete countertops', false, 2),
        (project1_id, '/images/loft-bedroom.jpg', 'Modern loft bedroom', 'Master bedroom with built-in storage', false, 3),
        
        (project2_id, '/images/office-exterior.jpg', 'Sustainable office building exterior', 'LEED-certified building with green roof', true, 1),
        (project2_id, '/images/office-interior.jpg', 'Office building interior', 'Open office space with natural lighting', false, 2),
        
        (project3_id, '/images/zen-garden-overview.jpg', 'Zen garden landscape overview', 'Complete garden design with water feature', true, 1),
        (project3_id, '/images/zen-meditation-space.jpg', 'Zen garden meditation pavilion', 'Peaceful meditation area surrounded by bamboo', false, 2);

    -- Add project materials
    INSERT INTO public.project_materials (project_id, name, description, category, brand, color, image_url) VALUES
        (project1_id, 'Reclaimed Oak Flooring', 'Wide plank reclaimed oak with natural finish', 'Flooring', 'Heritage Wood Co.', 'Natural', '/images/materials/oak-flooring.jpg'),
        (project1_id, 'Concrete Countertops', 'Polished concrete with integrated sink', 'Surfaces', 'Urban Stone', 'Charcoal Gray', '/images/materials/concrete-counter.jpg'),
        (project1_id, 'Steel Frame Windows', 'Black steel frame floor-to-ceiling windows', 'Windows', 'Modern Frames Inc.', 'Matte Black', '/images/materials/steel-windows.jpg'),
        
        (project2_id, 'Green Roof System', 'Extensive green roof with native plants', 'Roofing', 'EcoRoof Solutions', 'Mixed Vegetation', '/images/materials/green-roof.jpg'),
        (project2_id, 'Solar Panel Array', 'High-efficiency photovoltaic panels', 'Energy', 'SolarTech Pro', 'Black', '/images/materials/solar-panels.jpg'),
        
        (project3_id, 'Natural Stone Water Feature', 'Local granite with integrated lighting', 'Water Features', 'Stone Craft', 'Gray Granite', '/images/materials/stone-water.jpg'),
        (project3_id, 'Bamboo Screening', 'Privacy screening with clumping bamboo', 'Plants', 'Garden Elements', 'Green', '/images/materials/bamboo.jpg');

    -- Add project tags
    INSERT INTO public.project_tags (project_id, tag_name) VALUES
        (project1_id, 'modern'),
        (project1_id, 'minimalist'),
        (project1_id, 'smart-home'),
        (project1_id, 'sustainable'),
        (project1_id, 'loft'),
        
        (project2_id, 'sustainable'),
        (project2_id, 'leed-certified'),
        (project2_id, 'commercial'),
        (project2_id, 'green-building'),
        (project2_id, 'solar'),
        
        (project3_id, 'zen'),
        (project3_id, 'meditation'),
        (project3_id, 'water-feature'),
        (project3_id, 'native-plants'),
        (project3_id, 'landscape');

    -- Add sample contact inquiries
    INSERT INTO public.contact_inquiries (name, email, phone, subject, message, project_type, budget_range) VALUES
        ('Emma Wilson', 'emma@example.com', '(555) 123-4567', 'Kitchen Renovation Inquiry', 'Hi, I am interested in renovating my kitchen. The space is about 200 sq ft and I am looking for a modern design with sustainable materials. Could we schedule a consultation?', 'residential_interior', '25k_50k'),
        ('David Park', 'david@techcompany.com', '(555) 987-6543', 'Office Space Design', 'We are relocating our startup to a new 5000 sq ft office space and need help with the interior design. Looking for a collaborative, modern workspace that reflects our company culture.', 'commercial_interior', '50k_100k'),
        ('Lisa Rodriguez', 'lisa.r@email.com', null, 'Landscape Design Consultation', 'I have a large backyard that needs a complete redesign. Interested in creating outdoor entertaining spaces and a vegetable garden. What is your process and timeline?', 'landscape', '10k_25k');

EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key error: %', SQLERRM;
    WHEN unique_violation THEN
        RAISE NOTICE 'Unique constraint error: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Unexpected error: %', SQLERRM;
END $$;