import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import { format } from 'npm:date-fns@2.30.0';
import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Parse request body
    let requestData;
    try {
      requestData = await req.json();
    } catch (e) {
      console.error('Failed to parse request body:', e);
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Validate request data
    if (!requestData?.formData?.email || !requestData?.selectedPackage) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Store booking in database
    const { data, error } = await supabaseClient
      .from('bookings')
      .insert([
        {
          name: requestData.formData.name,
          email: requestData.formData.email,
          phone: requestData.formData.phone,
          message: requestData.formData.message,
          package: requestData.selectedPackage,
          requested_date: requestData.selectedDate,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to save booking',
          details: error.message 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Send email notification
    const client = new SMTPClient({
      user: 'rhileyboutron@gmail.com',
      password: 'dvce gtjv rnoo mwpo',
      host: 'smtp.gmail.com',
      ssl: true,
    });

    const formattedDate = requestData.selectedDate 
      ? format(new Date(requestData.selectedDate), 'MMMM d, yyyy')
      : 'Not specified';

    const emailText = `
New Booking Request

Name: ${requestData.formData.name}
Email: ${requestData.formData.email}
Phone: ${requestData.formData.phone}
Package: ${requestData.selectedPackage}
Requested Date: ${formattedDate}
Message: ${requestData.formData.message || 'No message provided'}
    `;

    try {
      await client.send({
        text: emailText,
        from: 'rhileyboutron@gmail.com',
        to: 'rhileyboutron@gmail.com',
        subject: 'New Photography Booking Request',
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue execution even if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        data: {
          id: data.id,
          status: data.status
        }
      }),
      { 
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An unexpected error occurred',
        details: error.message
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
});