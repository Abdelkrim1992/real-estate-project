-- ==========================================
-- Luxora Real Estate - Supabase Database Schema
-- ==========================================
-- Run this SQL in your Supabase SQL editor (Dashboard > SQL Editor)

-- 1. Properties table
CREATE TABLE IF NOT EXISTS properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL, -- Apartment, Villa, Office, etc.
  price DECIMAL(15, 2) NOT NULL,
  location VARCHAR(255),
  image_url TEXT,
  description TEXT,
  status text DEFAULT 'Available',
  available BOOLEAN DEFAULT true,
  property_status VARCHAR(50) DEFAULT 'Sale', -- Sale, Rent
  condition VARCHAR(50) DEFAULT 'Excellent',
  year INT DEFAULT 2024,
  bedrooms INT DEFAULT 1,
  bathrooms INT DEFAULT 1,
  sqft DECIMAL(10, 2) DEFAULT 0,
  features TEXT[],
  specifications JSONB,
  images TEXT[],
  host_name VARCHAR(255),
  host_avatar TEXT,
  host_location VARCHAR(255),
  availability_days TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(50) DEFAULT 'Morning',
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  -- Guest fields
  guest_name VARCHAR(255) DEFAULT '',
  guest_email VARCHAR(255) DEFAULT '',
  guest_phone VARCHAR(100) DEFAULT '',
  guest_message TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 6. Messages table
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Agency Settings Table
CREATE TABLE IF NOT EXISTS agency_settings (
  id VARCHAR(50) DEFAULT 'default' PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  tagline VARCHAR(255),
  hero_title TEXT,
  hero_subtitle TEXT,
  phone VARCHAR(100),
  email VARCHAR(255),
  address TEXT,
  working_hours VARCHAR(255),
  stats_properties INT DEFAULT 150,
  stats_sold INT DEFAULT 1200,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default row:
INSERT INTO agency_settings (id, business_name, tagline, hero_title, hero_subtitle, phone, email, address, working_hours, stats_properties, stats_sold) 
VALUES ('default', 'Luxora', 'Discover Your Dream Home.', 'Find Your Perfect Sanctuary.', 'Experience the pinnacle of luxury living with our exclusive collection of premium properties and estates.', '+1 (555) 789-0123', 'contact@luxora.com', 'Beverly Hills, CA', 'Mon — Sat, 9am — 7pm', 150, 1200)
ON CONFLICT (id) DO NOTHING;

-- 8. Notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('booking', 'message', 'alert')),
    resource_id UUID,
    payload JSONB,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Properties are viewable by everyone" ON properties FOR SELECT USING (true);
CREATE POLICY "Admins can update properties" ON properties FOR UPDATE USING (true);
CREATE POLICY "Admins can delete properties" ON properties FOR DELETE USING (true);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Inquiries viewable by everyone" ON inquiries FOR SELECT USING (true);
CREATE POLICY "Anyone can create inquiries" ON inquiries FOR INSERT WITH CHECK (true);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles viewable by user" ON profiles FOR SELECT USING (auth.uid() = id);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert messages" ON messages FOR INSERT WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_properties_type ON properties(type);
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_inquiries_property_id ON inquiries(property_id);

