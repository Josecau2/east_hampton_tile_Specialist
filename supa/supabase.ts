import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
// You'll need to add these environment variables to your .env.local file:
// NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'easthampton'
  }
})

// Type for the quote submission
// This matches the structure of the easthampton.quotes table
export interface QuoteSubmission {
  name: string
  email: string
  phone: string
  address: string
  city: string
  zip: string
  project_details: string
  photo_urls?: string[]
  created_at?: string
}