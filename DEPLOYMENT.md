# Deployment Guide for East Hampton Tile Website

## Vercel Deployment

### 1. Push your code to GitHub

```bash
git add .
git commit -m "Add Supabase integration for quote form"
git push origin main
```

### 2. Import project in Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables (see below)

### 3. Set Environment Variables in Vercel

In your Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-production-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
```

### 4. Deploy

Vercel will automatically deploy your main branch.

## Netlify Deployment

### 1. Build Settings

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_SUPABASE_URL = "your-production-url"
  NEXT_PUBLIC_SUPABASE_ANON_KEY = "your-production-key"
```

### 2. Environment Variables

Add the same environment variables in Netlify's dashboard under:
Site Settings > Environment Variables

## Local Production Build Testing

Test your production build locally:

```bash
# Build the production version
npm run build

# Start the production server
npm run start
```

## Post-Deployment Steps

1. **Test the form**: Submit a test quote to ensure everything works
2. **Check Supabase**: Verify the submission appears in your database
3. **Test file uploads**: Upload test images to verify storage works
4. **Monitor errors**: Check browser console and Vercel logs for any issues

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your production site URL | Optional |

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure Supabase schema is created in production

### Images not uploading?
- Verify storage bucket exists and is public
- Check file size (keep under 5MB per file)
- Ensure storage policies are configured

### Getting CORS errors?
- Add your production domain to Supabase allowed URLs
- Check Supabase project settings > API > Settings