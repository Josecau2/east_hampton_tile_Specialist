-- Create a dedicated schema for the East Hampton Tile website
CREATE SCHEMA IF NOT EXISTS easthampton;

-- Grant usage on the schema to authenticated and anon users
GRANT USAGE ON SCHEMA easthampton TO anon, authenticated;

-- Create the quotes table in the easthampton schema
CREATE TABLE easthampton.quotes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  zip TEXT NOT NULL,
  project_details TEXT NOT NULL,
  photo_urls TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled'))
);

-- Create index on email for faster lookups
CREATE INDEX idx_quotes_email ON easthampton.quotes(email);

-- Create index on created_at for sorting
CREATE INDEX idx_quotes_created_at ON easthampton.quotes(created_at);

-- Enable Row Level Security
ALTER TABLE easthampton.quotes ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert
CREATE POLICY "Anyone can insert quotes" ON easthampton.quotes
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy that only authenticated users can view quotes
CREATE POLICY "Only authenticated users can view quotes" ON easthampton.quotes
  FOR SELECT TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON easthampton.quotes TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON easthampton.quotes TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE easthampton.quotes_id_seq TO anon, authenticated;

-- Create the storage bucket for quote photos if it doesn't exist
-- Note: Storage buckets remain in the public schema - this is normal
INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-photos', 'quote-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload to the quote-photos bucket
CREATE POLICY "Anyone can upload quote photos" ON storage.objects
  FOR INSERT TO anon
  WITH CHECK (bucket_id = 'quote-photos');

-- Allow public access to view quote photos
CREATE POLICY "Quote photos are publicly accessible" ON storage.objects
  FOR SELECT TO anon
  USING (bucket_id = 'quote-photos');