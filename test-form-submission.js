// Test script for form submission
// Run this in the browser console on your East Hampton Tile website

async function testFormSubmission() {
  const testData = {
    name: "Test Customer",
    email: "test@example.com",
    phone: "(631) 555-0123",
    address: "123 Test Street",
    city: "East Hampton",
    zip: "11937",
    project_details: "Test submission - please ignore. Testing bathroom renovation quote request."
  };

  try {
    // Import the Supabase client
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');

    // Initialize Supabase client
    const supabase = createClient(
      'https://supa.swolfai.com',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzY2OTUyODUzLCJleHAiOjIwODIzMTI4NTN9.9mH5hkerprZYPtJwzbA-kGNFoBWjXNnhRveBfk2Bt-0'
    );

    console.log('Testing form submission...');

    // Test database insertion
    const { data, error } = await supabase
      .from('easthampton.quotes')
      .insert([testData]);

    if (error) {
      console.error('❌ Form submission failed:', error);
      return false;
    }

    console.log('✅ Form submission successful!');
    console.log('Test data submitted:', testData);

    return true;
  } catch (err) {
    console.error('❌ Test failed:', err);
    return false;
  }
}

// Run the test
testFormSubmission();