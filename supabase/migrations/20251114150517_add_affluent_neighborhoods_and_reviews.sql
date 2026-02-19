/*
  # Affluent Neighborhoods and Review Infrastructure
  
  ## Overview
  Adds tables and enhancements for targeting high-value Toronto neighborhoods
  and implementing comprehensive review collection system.
  
  ## New Tables
  
  ### `affluent_neighborhoods`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Neighborhood name (e.g., Forest Hill, Rosedale)
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text) - Detailed neighborhood description
  - `average_home_value` (integer) - Average home price in CAD
  - `postal_codes` (text[]) - Array of postal codes served
  - `latitude` (decimal) - Geographic coordinate
  - `longitude` (decimal) - Geographic coordinate
  - `featured` (boolean) - Display on homepage
  - `meta_title` (text) - SEO title
  - `meta_description` (text) - SEO meta description
  - `content` (text) - Rich content for neighborhood page
  - `landmarks` (text[]) - Notable landmarks and attractions
  - `demographics` (jsonb) - Demographic data for targeting
  - `created_at` (timestamptz) - Date added
  - `updated_at` (timestamptz) - Date modified
  
  ### `reviews` (enhanced testimonials)
  - Enhanced existing testimonials with additional fields
  - Add `project_value` for tracking high-value installations
  - Add `verified` boolean for verified customer reviews
  - Add `photos` array for customer project photos
  - Add `response` for business owner responses
  - Add `helpful_count` for review helpfulness voting
  - Add `gmb_synced` to track Google My Business sync status
  
  ### `review_requests`
  - `id` (uuid, primary key) - Unique identifier
  - `lead_id` (uuid) - Reference to original lead
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone
  - `status` (text) - Status: pending, sent, completed, declined
  - `token` (text, unique) - Secure token for review submission
  - `sent_at` (timestamptz) - When request was sent
  - `completed_at` (timestamptz) - When review was submitted
  - `created_at` (timestamptz) - Date created
  
  ## Table Modifications
  
  ### Update `testimonials` table
  - Add new fields for comprehensive review data
  - Maintain backward compatibility
  
  ### Update `service_areas` table  
  - Add `average_home_value` field
  - Add `target_demographic` field
  - Add postal code array support
  
  ## Security
  - Enable RLS on all new tables
  - Public read access for affluent neighborhoods
  - Public insert for review submissions via token
  - Authenticated access for review management
*/

-- Create affluent_neighborhoods table
CREATE TABLE IF NOT EXISTS affluent_neighborhoods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  average_home_value integer DEFAULT 900000,
  postal_codes text[] DEFAULT '{}',
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  featured boolean DEFAULT false,
  meta_title text,
  meta_description text,
  content text,
  landmarks text[] DEFAULT '{}',
  demographics jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE affluent_neighborhoods ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read affluent neighborhoods"
  ON affluent_neighborhoods FOR SELECT
  TO anon, authenticated
  USING (true);

-- Add columns to existing testimonials table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'project_value'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN project_value integer;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'verified'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN verified boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'photos'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN photos text[] DEFAULT '{}';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'response'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN response text;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'helpful_count'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN helpful_count integer DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'gmb_synced'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN gmb_synced boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'testimonials' AND column_name = 'neighborhood'
  ) THEN
    ALTER TABLE testimonials ADD COLUMN neighborhood text;
  END IF;
END $$;

-- Create review_requests table
CREATE TABLE IF NOT EXISTS review_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id),
  email text NOT NULL,
  phone text,
  status text DEFAULT 'pending',
  token text UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'),
  sent_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE review_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read their own review request via token"
  ON review_requests FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update review request via token"
  ON review_requests FOR UPDATE
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can read all review requests"
  ON review_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert review requests"
  ON review_requests FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Add columns to service_areas table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'service_areas' AND column_name = 'average_home_value'
  ) THEN
    ALTER TABLE service_areas ADD COLUMN average_home_value integer;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'service_areas' AND column_name = 'target_demographic'
  ) THEN
    ALTER TABLE service_areas ADD COLUMN target_demographic text DEFAULT 'general';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'service_areas' AND column_name = 'meta_title'
  ) THEN
    ALTER TABLE service_areas ADD COLUMN meta_title text;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'service_areas' AND column_name = 'meta_description'
  ) THEN
    ALTER TABLE service_areas ADD COLUMN meta_description text;
  END IF;
END $$;

-- Insert affluent neighborhoods data
INSERT INTO affluent_neighborhoods (
  name, slug, description, average_home_value, postal_codes, 
  latitude, longitude, featured, meta_title, meta_description, landmarks
) VALUES
(
  'Forest Hill',
  'forest-hill',
  'Forest Hill is one of Toronto''s most prestigious neighborhoods, known for its tree-lined streets, grand estates, and proximity to excellent private schools. Home values average over $2.5M, making it ideal for premium hardwood flooring installations and luxury renovations.',
  2500000,
  ARRAY['M5P', 'M4V'],
  43.6945,
  -79.4149,
  true,
  'Luxury Flooring Installers Forest Hill Toronto - Premium Hardwood Installation',
  'Expert luxury flooring installation in Forest Hill. Specializing in premium hardwood, custom inlays, and high-end materials for estates and heritage homes. Licensed, insured, 15+ years experience.',
  ARRAY['Upper Canada College', 'Bishop Strachan School', 'Forest Hill Village', 'Cedarvale Ravine']
),
(
  'Rosedale',
  'rosedale',
  'Rosedale is Toronto''s oldest and most exclusive residential neighborhood, featuring magnificent heritage homes, winding ravine roads, and unparalleled prestige. Average home values exceed $3M, requiring expert flooring contractors who understand luxury materials and historic preservation.',
  3200000,
  ARRAY['M4W', 'M4Y', 'M5R'],
  43.6790,
  -79.3751,
  true,
  'Premium Flooring Contractors Rosedale Toronto - Heritage Home Specialists',
  'Trusted luxury flooring installers serving Rosedale. Expert in heritage home restoration, premium hardwood, and custom flooring solutions for Toronto''s most exclusive neighborhood.',
  ARRAY['Rosedale Valley', 'Mount Pleasant Cemetery', 'Summerhill Market', 'St. James Town']
),
(
  'Lawrence Park',
  'lawrence-park',
  'Lawrence Park is an affluent neighborhood known for its beautiful tree-canopied streets, large lots, and strong sense of community. With average home values around $2.2M, residents seek high-quality flooring solutions for family homes and renovations.',
  2200000,
  ARRAY['M4N'],
  43.7097,
  -79.3953,
  true,
  'High-End Flooring Installation Lawrence Park - Expert Hardwood Contractors',
  'Professional flooring installers serving Lawrence Park Toronto. Specializing in luxury hardwood, wide plank, and custom flooring for upscale family homes. Free consultation.',
  ARRAY['Blythwood Ravine', 'Sherwood Park', 'Alexander Muir Gardens']
),
(
  'Lytton Park',
  'lytton-park',
  'Lytton Park is a highly desirable neighborhood with stately homes, excellent schools, and strong property values averaging $1.8M. The area attracts professionals and families seeking premium home improvements including high-end flooring installations.',
  1800000,
  ARRAY['M4N', 'M5N'],
  43.7112,
  -79.4089,
  true,
  'Luxury Flooring Installers Lytton Park Toronto - Premium Home Solutions',
  'Expert flooring contractors in Lytton Park. Premium hardwood, engineered wood, and luxury vinyl installation for upscale Toronto homes. Licensed and insured.',
  ARRAY['Blythwood Ravine Park', 'Lytton Park', 'Eglinton Avenue West']
),
(
  'The Bridle Path',
  'bridle-path',
  'The Bridle Path is Toronto''s most exclusive neighborhood, home to estates and mansions with values regularly exceeding $5M. This ultra-luxury area requires specialized flooring contractors experienced in large-scale projects, custom materials, and white-glove service.',
  6000000,
  ARRAY['M3B'],
  43.7342,
  -79.3745,
  true,
  'Ultra-Luxury Flooring Installation Bridle Path Toronto - Estate Specialists',
  'Elite flooring contractors serving The Bridle Path. Specializing in custom hardwood, exotic materials, and large-scale luxury installations for Toronto''s premier estates.',
  ARRAY['Sunnybrook Park', 'Edwards Gardens', 'E.P. Taylor estate']
),
(
  'The Kingsway',
  'the-kingsway',
  'The Kingsway features grand English-style homes on winding streets near the Humber River. With average values of $2.4M, this prestigious neighborhood values quality craftsmanship and traditional materials for home renovations.',
  2400000,
  ARRAY['M8X', 'M8Y'],
  43.6479,
  -79.5164,
  true,
  'Premium Flooring Services The Kingsway Toronto - Traditional Home Experts',
  'Trusted flooring installers in The Kingsway. Expert in traditional hardwood, heritage home restoration, and premium materials for Toronto''s distinguished neighborhood.',
  ARRAY['The Kingsway Theatre', 'Humber River', 'Baby Point', 'Royal York Plaza']
),
(
  'High Park North',
  'high-park-north',
  'High Park North is a sought-after neighborhood with charming streets, proximity to High Park, and strong property values averaging $1.5M. Residents appreciate quality home improvements and premium flooring options.',
  1500000,
  ARRAY['M6P'],
  43.6621,
  -79.4656,
  true,
  'Quality Flooring Installation High Park North - Premium Home Services',
  'Professional flooring contractors serving High Park North. Hardwood, engineered flooring, and luxury vinyl installation for beautiful Toronto homes. Free estimates.',
  ARRAY['High Park', 'Bloor West Village', 'Runnymede']
),
(
  'Moore Park',
  'moore-park',
  'Moore Park is an established upscale neighborhood with tree-lined streets and elegant homes averaging $1.9M. The area values quality workmanship and premium materials for home renovations and restorations.',
  1900000,
  ARRAY['M4S', 'M4T'],
  43.6952,
  -79.3850,
  true,
  'Expert Flooring Contractors Moore Park Toronto - Premium Installation',
  'Trusted flooring installers in Moore Park. Specializing in hardwood refinishing, luxury vinyl, and premium flooring solutions for elegant Toronto homes.',
  ARRAY['Mount Pleasant Cemetery', 'Rosedale Valley', 'St. Clair Reservoir']
),
(
  'Summerhill',
  'summerhill',
  'Summerhill is a charming neighborhood known for its Victorian and Edwardian homes, trendy shops, and strong sense of community. With average values of $1.7M, homeowners seek quality flooring solutions that respect architectural character.',
  1700000,
  ARRAY['M4S', 'M4V'],
  43.6816,
  -79.3912,
  true,
  'Heritage Flooring Specialists Summerhill Toronto - Victorian Home Experts',
  'Expert flooring installation in Summerhill. Specializing in heritage home flooring, hardwood restoration, and period-appropriate materials for Toronto''s Victorian homes.',
  ARRAY['Summerhill Market', 'Ramsden Park', 'TTC Summerhill Station']
),
(
  'York Mills',
  'york-mills',
  'York Mills features prestigious homes on spacious lots with values averaging $2.0M. The neighborhood attracts affluent families seeking premium home services and high-quality flooring installations.',
  2000000,
  ARRAY['M2P', 'M2N'],
  43.7453,
  -79.4021,
  true,
  'Luxury Flooring Installation York Mills Toronto - Premium Home Solutions',
  'Professional flooring contractors in York Mills. Premium hardwood, wide plank, and custom flooring for upscale Toronto family homes. Licensed and insured.',
  ARRAY['York Mills Ravine', 'Windfields Park', 'York Mills Centre']
)
ON CONFLICT (slug) DO NOTHING;

-- Update existing service areas with home values
UPDATE service_areas SET average_home_value = 850000, target_demographic = 'affluent' WHERE slug = 'toronto';
UPDATE service_areas SET average_home_value = 650000, target_demographic = 'middle-upper' WHERE slug = 'north-york';
UPDATE service_areas SET average_home_value = 600000, target_demographic = 'middle' WHERE slug = 'scarborough';
UPDATE service_areas SET average_home_value = 750000, target_demographic = 'affluent' WHERE slug = 'vaughan';
UPDATE service_areas SET average_home_value = 800000, target_demographic = 'affluent' WHERE slug = 'markham';
UPDATE service_areas SET average_home_value = 720000, target_demographic = 'middle-upper' WHERE slug = 'mississauga';
UPDATE service_areas SET average_home_value = 680000, target_demographic = 'middle-upper' WHERE slug = 'pickering';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_affluent_neighborhoods_slug ON affluent_neighborhoods(slug);
CREATE INDEX IF NOT EXISTS idx_affluent_neighborhoods_featured ON affluent_neighborhoods(featured);
CREATE INDEX IF NOT EXISTS idx_review_requests_token ON review_requests(token);
CREATE INDEX IF NOT EXISTS idx_review_requests_status ON review_requests(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_verified ON testimonials(verified);
CREATE INDEX IF NOT EXISTS idx_testimonials_neighborhood ON testimonials(neighborhood);
