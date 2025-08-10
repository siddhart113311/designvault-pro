import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  // ✅ CORS preflight
  if (req?.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  }
  
  try {
    const { name, email, subject, message, project_type, budget_range, phone } = await req?.json();
    
    // Email to admin
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${globalThis.Deno?.env?.get('RESEND_API_KEY')}`
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["admin@designstudio.com"],
        subject: `New Contact Inquiry: ${subject}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Project Type:</strong> ${project_type || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget_range || 'Not specified'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div>
            <strong>Message:</strong>
            <p>${message?.replace(/\n/g, '<br>')}</p>
          </div>
          <hr>
          <p><em>Sent from your portfolio website contact form</em></p>
        `
      })
    });
    
    // Auto-reply to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${globalThis.Deno?.env?.get('RESEND_API_KEY')}`
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: [email],
        subject: "Thank you for your design inquiry",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your inquiry about ${project_type ? project_type?.replace('_', ' ') : 'your project'} and appreciate your interest in our design services.</p>
          <p>Our team will review your message and get back to you within 24 hours to discuss your project in detail.</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #3B82F6; margin: 20px 0;">
            <h3>Your Inquiry Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            ${project_type ? `<p><strong>Project Type:</strong> ${project_type?.replace('_', ' ')}</p>` : ''}
            ${budget_range ? `<p><strong>Budget Range:</strong> ${budget_range?.replace('_', ' - $')}</p>` : ''}
          </div>
          <p>In the meantime, feel free to browse our portfolio to see examples of our recent work.</p>
          <p>Best regards,<br>The Design Studio Team</p>
        `
      })
    });
    
    if (!adminEmailResponse?.ok || !customerEmailResponse?.ok) {
      throw new Error('Failed to send emails');
    }
    
    return new Response(JSON.stringify({
      success: true,
      message: "Contact inquiry submitted and emails sent successfully"
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
});