import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: 'trial_request' | 'enrollment' | 'contact_message';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();
    
    console.log("Notification request:", { type, data });

    let subject = "";
    let htmlContent = "";

    switch (type) {
      case 'trial_request':
        subject = "🎯 New Free Trial Request - KodBuds Tech Hub";
        htmlContent = `
          <h2>New Free Trial Request</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Child's Age/Class:</strong> ${data.childAgeClass}</p>
            <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
          </div>
          <p>Please contact the parent to confirm the trial class booking.</p>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated notification from KodBuds Tech Hub website.
          </p>
        `;
        break;

      case 'enrollment':
        subject = "🚀 New Course Enrollment - KodBuds Tech Hub";
        htmlContent = `
          <h2>New Course Enrollment</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Student Information:</h3>
            <p><strong>Parent/Guardian:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Child's Age/Class:</strong> ${data.childAgeClass}</p>
            <p><strong>Course of Interest:</strong> ${data.courseOfInterest}</p>
          </div>
          <p>Please follow up with the enrollment process and course details.</p>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated notification from KodBuds Tech Hub website.
          </p>
        `;
        break;

      case 'contact_message':
        subject = "💬 New Contact Message - KodBuds Tech Hub";
        htmlContent = `
          <h2>New Contact Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Child's Age:</strong> ${data.childAge || 'Not specified'}</p>
            <p><strong>Interested Course:</strong> ${data.course || 'Not specified'}</p>
          </div>
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p>Please respond to the customer inquiry within 24 hours.</p>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated notification from KodBuds Tech Hub website.
          </p>
        `;
        break;

      default:
        throw new Error(`Unknown notification type: ${type}`);
    }

    const emailResponse = await resend.emails.send({
      from: "KodBuds Tech Hub <notifications@kodbudstechub.com>",
      to: ["hello@kodbudstechub.com"], // Replace with your admin email
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);