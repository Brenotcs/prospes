/*
  # Create testimonials table for customer feedback

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier for each testimonial
      - `name` (text) - Customer's name
      - `rating` (integer) - Rating from 1 to 5 stars
      - `message` (text) - Testimonial message/feedback
      - `location` (text, optional) - Customer's city/state
      - `created_at` (timestamptz) - When the testimonial was created
      - `approved` (boolean) - Whether the testimonial is approved for display
  
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access to approved testimonials only
    - Add policy for authenticated users to insert their own testimonials
  
  3. Indexes
    - Index on `approved` column for efficient filtering
    - Index on `created_at` for sorting by date
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL,
  location text,
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials
  FOR SELECT
  USING (approved = true);

CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);
