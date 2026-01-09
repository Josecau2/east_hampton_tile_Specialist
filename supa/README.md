# Supabase Setup for Quote Form

## Prerequisites

Make sure you have a Supabase project set up. If not, create one at https://supabase.com

## Environment Variables

### Development Setup

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

   You can find these in your Supabase project settings under API.

### Production Setup

1. Copy `.env.production.example` to `.env.production.local`:
   ```bash
   cp .env.production.example .env.production.local
   ```

2. Update `.env.production.local` with your **production** Supabase credentials
3. For deployment platforms (Vercel, Netlify, etc.), add these environment variables in your project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Database Setup

1. Go to the SQL Editor in your Supabase dashboard
2. Copy and paste the contents of `schema.sql`
3. Click "Run" to create:
   - A dedicated `easthampton` schema
   - The `quotes` table within that schema
   - Necessary permissions and policies

## Storage Setup

The SQL schema automatically creates a `quote-photos` bucket for storing uploaded images. This bucket is set to public so uploaded images can be accessed directly.

## Testing the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the page with the signup form
3. Fill out the form and submit
4. Check your Supabase dashboard:
   - Navigate to the Table Editor
   - Select the `easthampton` schema from the schema dropdown
   - View the `quotes` table to see submissions

## Security Notes

- The form allows anonymous submissions (no authentication required)
- Only authenticated users can view the quotes in the database
- Photos are stored in a public bucket
- Consider adding rate limiting or CAPTCHA for production use

## Production Deployment Checklist

1. **Environment Variables**:
   - Use different Supabase projects for development and production
   - Never commit `.env` files to version control
   - Set all environment variables in your hosting platform's dashboard

2. **Database**:
   - Run the schema SQL in your production Supabase project
   - Consider backing up quotes regularly

3. **Security Enhancements**:
   - Add rate limiting to prevent spam submissions
   - Consider implementing CAPTCHA (reCAPTCHA, hCaptcha)
   - Monitor for unusual submission patterns

4. **Storage**:
   - Set up storage policies properly
   - Consider implementing file size limits
   - Monitor storage usage

5. **Monitoring**:
   - Set up error tracking (Sentry, LogRocket)
   - Monitor form submission success rates
   - Track storage usage and database size