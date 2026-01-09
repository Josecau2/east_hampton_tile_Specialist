# Testing the Quote Form Submission

## Manual Testing Steps

1. **Open the website** in your browser

2. **Click any "Get Quote" button**:
   - In the navigation bar
   - In the hero section
   - In the pricing cards
   - In the footer
   - Any other location

3. **Fill out the form** with test data:
   - **Full Name**: Test Customer
   - **Email**: test@easthampton.com
   - **Phone**: (631) 555-0123
   - **Street Address**: 123 Test Street
   - **City**: East Hampton
   - **Zip Code**: 11937
   - **Project Details**: Test submission - bathroom renovation, approximately 50 sq ft
   - **Photos**: (Optional) Upload 1-2 test images

4. **Submit the form** by clicking "Submit Request"

5. **Expected Results**:
   - Loading state shows "Submitting..."
   - Success message appears: "Your quote request has been submitted successfully. We'll get back to you within 24 hours."
   - Form is replaced with thank you message

6. **Verify in Supabase Dashboard**:
   - Go to your Supabase dashboard at https://supa.swolfai.com
   - Navigate to Table Editor
   - Select `easthampton` schema from dropdown
   - Click on `quotes` table
   - You should see your test submission

## Browser Console Test

For quick testing, you can also run this in the browser console:

```javascript
// Quick test - paste this in browser console
async function quickTest() {
  const response = await fetch('https://supa.swolfai.com/rest/v1/easthampton.quotes', {
    method: 'POST',
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzY2OTUyODUzLCJleHAiOjIwODIzMTI4NTN9.9mH5hkerprZYPtJwzbA-kGNFoBWjXNnhRveBfk2Bt-0',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzY2OTUyODUzLCJleHAiOjIwODIzMTI4NTN9.9mH5hkerprZYPtJwzbA-kGNFoBWjXNnhRveBfk2Bt-0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Console Test',
      email: 'console@test.com',
      phone: '(631) 555-9999',
      address: '456 Console Ave',
      city: 'East Hampton',
      zip: '11937',
      project_details: 'Testing from browser console'
    })
  });

  if (response.ok) {
    console.log('✅ Test submission successful!');
  } else {
    const error = await response.text();
    console.error('❌ Test failed:', error);
  }
}

quickTest();
```

## Common Issues & Solutions

### Form not submitting?
- Check browser console for errors (F12 > Console tab)
- Verify environment variables are set correctly
- Ensure Supabase is accessible at https://supa.swolfai.com

### "Failed to submit quote request"?
- Database schema might not be created
- Check if `easthampton` schema exists in Supabase
- Verify the `quotes` table was created

### Photos not uploading?
- Check if `quote-photos` storage bucket exists
- Verify bucket is set to public
- Check file size (keep under 5MB per file)

### No data in Supabase?
1. Ensure you're looking in the correct schema (`easthampton`)
2. Refresh the table view
3. Check RLS policies are correctly set

## Testing Photo Upload

1. Prepare test images (JPG/PNG, under 5MB each)
2. Click "Upload photos" button
3. Select up to 5 images
4. Submit form
5. Check Supabase Storage bucket for uploaded files