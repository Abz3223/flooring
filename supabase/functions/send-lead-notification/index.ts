import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  flooring_type?: string;
  message?: string;
  source_page: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #1a2332;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: white;
              border-radius: 6px;
              border-left: 4px solid #c9985f;
            }
            .label {
              font-weight: bold;
              color: #1a2332;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
            }
            .value {
              color: #4b5563;
              font-size: 16px;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .cta {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 24px;
              background-color: #c9985f;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🏠 New Lead Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Flooring Installers Toronto</p>
          </div>

          <div class="content">
            <p style="font-size: 18px; margin-top: 0;">You have a new lead from your website!</p>

            <div class="field">
              <div class="label">Name</div>
              <div class="value">${leadData.name}</div>
            </div>

            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${leadData.phone}" style="color: #c9985f; text-decoration: none;">${leadData.phone}</a></div>
            </div>

            ${leadData.email ? `
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${leadData.email}" style="color: #c9985f; text-decoration: none;">${leadData.email}</a></div>
            </div>
            ` : ''}

            ${leadData.address ? `
            <div class="field">
              <div class="label">Project Address</div>
              <div class="value">${leadData.address}</div>
            </div>
            ` : ''}

            ${leadData.flooring_type ? `
            <div class="field">
              <div class="label">Flooring Type</div>
              <div class="value">${leadData.flooring_type}</div>
            </div>
            ` : ''}

            ${leadData.message ? `
            <div class="field">
              <div class="label">Message</div>
              <div class="value">${leadData.message}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Source Page</div>
              <div class="value">${leadData.source_page}</div>
            </div>

            <div class="field">
              <div class="label">Submitted At</div>
              <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', dateStyle: 'full', timeStyle: 'long' })}</div>
            </div>

            <div class="footer">
              <p><strong>Next Steps:</strong></p>
              <ul style="margin: 10px 0;">
                <li>Call the customer back as soon as possible</li>
                <li>Prepare a quote based on their requirements</li>
                <li>Schedule a consultation if needed</li>
              </ul>
              <p style="margin-top: 20px;">This is an automated notification from your Flooring Installers Toronto website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Lead Submission - Flooring Installers Toronto

Name: ${leadData.name}
Phone: ${leadData.phone}
${leadData.email ? `Email: ${leadData.email}` : ''}
${leadData.address ? `Address: ${leadData.address}` : ''}
${leadData.flooring_type ? `Flooring Type: ${leadData.flooring_type}` : ''}
${leadData.message ? `Message: ${leadData.message}` : ''}
Source Page: ${leadData.source_page}
Submitted At: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })}

Please contact this customer as soon as possible.
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Flooring Installers Toronto <onboarding@resend.dev>",
        to: ["abduljaafar10@gmail.com"],
        subject: `New Lead: ${leadData.name} - ${leadData.flooring_type || 'General Inquiry'}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});