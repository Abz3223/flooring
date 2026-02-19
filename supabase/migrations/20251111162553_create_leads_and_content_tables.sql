/*
  # Toronto Flooring Installers - Database Schema

  ## Overview
  Creates core tables for lead generation website including lead capture,
  testimonials, FAQs, blog posts, and service areas.

  ## New Tables

  ### `leads`
  - `id` (uuid, primary key) - Unique identifier for each lead
  - `name` (text) - Lead's full name
  - `phone` (text) - Contact phone number
  - `email` (text) - Contact email address
  - `address` (text) - Project address in GTA
  - `flooring_type` (text) - Type of flooring (hardwood, laminate, vinyl, tile, carpet)
  - `budget_range` (text) - Budget category (under-5k, 5k-10k, 10k-20k, 20k-plus)
  - `message` (text) - Additional details from lead
  - `source_page` (text) - URL or page name where lead originated
  - `status` (text) - Lead status (new, contacted, qualified, converted, closed)
  - `created_at` (timestamptz) - Timestamp of lead submission

  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `location` (text) - City/neighborhood in GTA
  - `rating` (integer) - Star rating (1-5)
  - `review` (text) - Testimonial content
  - `flooring_type` (text) - Type of flooring installed
  - `featured` (boolean) - Whether to feature on homepage
  - `created_at` (timestamptz) - Date added

  ### `faqs`
  - `id` (uuid, primary key) - Unique identifier
  - `question` (text) - FAQ question
  - `answer` (text) - FAQ answer
  - `category` (text) - Category (pricing, process, materials, warranty)
  - `sort_order` (integer) - Display order
  - `created_at` (timestamptz) - Date added

  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly slug
  - `title` (text) - Post title
  - `meta_description` (text) - SEO meta description
  - `content` (text) - Post content (markdown or HTML)
  - `featured_image` (text) - Image URL
  - `author` (text) - Author name
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz) - Date created
  - `updated_at` (timestamptz) - Date last updated

  ### `service_areas`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - City/area name (Toronto, Scarborough, etc.)
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text) - Location page description
  - `latitude` (decimal) - Geographic coordinate
  - `longitude` (decimal) - Geographic coordinate
  - `postal_codes` (text) - Comma-separated postal code prefixes served
  - `featured` (boolean) - Display on homepage
  - `created_at` (timestamptz) - Date added

  ## Security
  - Enable RLS on all tables
  - Public read access for testimonials, FAQs, blog posts, and service areas
  - Authenticated insert for leads (with public insert policy for form submissions)
  - Admin-only access for managing content tables
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  address text,
  flooring_type text,
  budget_range text,
  message text,
  source_page text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public to insert leads (form submissions)
CREATE POLICY "Anyone can submit leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all leads
CREATE POLICY "Authenticated users can read leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  review text NOT NULL,
  flooring_type text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public to read testimonials
CREATE POLICY "Anyone can read testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Allow public to read FAQs
CREATE POLICY "Anyone can read FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  meta_description text,
  content text NOT NULL,
  featured_image text,
  author text DEFAULT 'Toronto Flooring Installers',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public to read published blog posts
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create service_areas table
CREATE TABLE IF NOT EXISTS service_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  postal_codes text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_areas ENABLE ROW LEVEL SECURITY;

-- Allow public to read service areas
CREATE POLICY "Anyone can read service areas"
  ON service_areas FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert initial service areas for GTA
INSERT INTO service_areas (name, slug, description, latitude, longitude, postal_codes, featured) VALUES
('Toronto', 'toronto', 'Professional flooring installers serving downtown Toronto and surrounding neighborhoods', 43.6532, -79.3832, 'M4,M5,M6', true),
('Scarborough', 'scarborough', 'Expert flooring contractors in Scarborough offering residential and commercial installation services', 43.7731, -79.2578, 'M1', true),
('North York', 'north-york', 'Trusted flooring installers in North York specializing in hardwood, laminate, and vinyl installation', 43.7615, -79.4111, 'M2,M3', true),
('Vaughan', 'vaughan', 'Quality flooring installation services in Vaughan with licensed and insured contractors', 43.8361, -79.4983, 'L4,L6', true),
('Markham', 'markham', 'Professional flooring contractors serving Markham with premium installation and warranties', 43.8561, -79.3370, 'L3,L6', true),
('Mississauga', 'mississauga', 'Experienced flooring installers in Mississauga providing fast and reliable service', 43.5890, -79.6441, 'L4,L5', true),
('Pickering', 'pickering', 'Local flooring installation experts in Pickering specializing in all flooring types', 43.8384, -79.0868, 'L1', true)
ON CONFLICT (slug) DO NOTHING;

-- Insert initial FAQs
INSERT INTO faqs (question, answer, category, sort_order) VALUES
('How much does flooring installation cost in Toronto?', 'Flooring installation costs in Toronto typically range from $3-$12 per square foot depending on the material. Hardwood installation averages $8-$12/sq ft, laminate $3-$6/sq ft, vinyl $4-$8/sq ft, and tile $5-$10/sq ft. These prices include both materials and professional installation. Contact us for a free, accurate quote based on your specific project.', 'pricing', 1),
('Do you provide both supply and installation?', 'Yes! We offer complete flooring solutions including material supply and professional installation. We work with premium suppliers to provide you with a wide selection of hardwood, laminate, vinyl, tile, and carpet options. You can also choose to supply your own materials if you prefer, and we will handle the expert installation.', 'process', 2),
('What is the best flooring for basements in the GTA?', 'For Toronto basements, we recommend luxury vinyl plank (LVP) or engineered hardwood. LVP is 100% waterproof, perfect for areas prone to moisture. Engineered hardwood offers the beauty of real wood with better moisture resistance than solid hardwood. Both options are durable, easy to maintain, and handle temperature fluctuations common in GTA basements.', 'materials', 3),
('Are your installers licensed and insured?', 'Absolutely. All our flooring installers are fully licensed, insured, and WSIB compliant. We carry $2 million in liability insurance to protect your home during installation. Our team has years of experience and follows industry best practices. We also provide a comprehensive warranty on all our installation work.', 'warranty', 4),
('How long does a typical flooring project take?', 'Most residential flooring installations take 2-5 days depending on the size and complexity. A standard 1,000 sq ft area typically takes 2-3 days for hardwood or laminate, 1-2 days for vinyl, and 3-4 days for tile (including grouting time). We will provide an accurate timeline during your free consultation and work efficiently to minimize disruption to your home.', 'process', 5)
ON CONFLICT DO NOTHING;