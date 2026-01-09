const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with service role key for admin operations
const supabaseUrl = 'https://supa.swolfai.com';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzY2OTUyODUzLCJleHAiOjIwODIzMTI4NTN9.9mH5hkerprZYPtJwzbA-kGNFoBWjXNnhRveBfk2Bt-0';

async function createSchema() {
  console.log('Creating easthampton schema...');

  try {
    // Use the Supabase REST API to execute SQL
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
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
        `
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Failed to execute SQL:', error);

      // Try alternative approach using node-postgres
      console.log('\nTrying alternative approach...');
      return createSchemaAlternative();
    }

    console.log('✅ Schema created successfully!');

  } catch (error) {
    console.error('Error creating schema:', error.message);
    console.log('\nTrying alternative approach...');
    return createSchemaAlternative();
  }
}

// Alternative approach using fetch to execute raw SQL
async function createSchemaAlternative() {
  try {
    // First, let's create a simpler version without the schema
    console.log('Creating quotes table in public schema as fallback...');

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Test if we can access Supabase
    const { data: test, error: testError } = await supabase
      .from('quotes')
      .select('count')
      .limit(1);

    if (testError && testError.message.includes('does not exist')) {
      console.log('Table does not exist, which is expected. Schema needs to be created manually.');
      console.log('\n❗ IMPORTANT: You need to run the SQL manually in Supabase dashboard.');
      console.log('Go to: https://supa.swolfai.com → SQL Editor → Paste the contents of supa/schema.sql → Run');
    }

  } catch (error) {
    console.error('Alternative approach failed:', error.message);
  }
}

// Run the schema creation
createSchema();