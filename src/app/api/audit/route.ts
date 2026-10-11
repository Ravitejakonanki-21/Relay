import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting map (IP -> timestamp[])
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= limit) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

function cleanAndValidateUrl(inputUrl: string): { valid: boolean; formatted: string } {
  let urlStr = inputUrl.trim();
  if (!urlStr.startsWith("http://") && !urlStr.startsWith("https://")) {
    urlStr = "https://" + urlStr;
  }

  try {
    const parsed = new URL(urlStr);
    // Disallow non HTTP/HTTPS protocols
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return { valid: false, formatted: "" };
    }

    const hostname = parsed.hostname.toLowerCase();
    // Disallow local, private, and internal addresses (SSRF prevention)
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.") ||
      hostname.startsWith("172.16.") ||
      hostname.endsWith(".local") ||
      hostname.endsWith(".internal")
    ) {
      return { valid: false, formatted: "" };
    }

    if (!hostname.includes(".")) {
      return { valid: false, formatted: "" };
    }

    return { valid: true, formatted: urlStr };
  } catch {
    return { valid: false, formatted: "" };
  }
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

    // 1. Basic spam / rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before requesting another audit." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, businessName, websiteUrl, email, focus, honeypot } = body;

    // 2. Honeypot check
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently accept bots to avoid leaking honeypot presence
      return NextResponse.json({ success: true, id: "bot_ignored" }, { status: 200 });
    }

    // 3. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!businessName || typeof businessName !== "string" || businessName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your business name." },
        { status: 400 }
      );
    }

    if (!websiteUrl || typeof websiteUrl !== "string") {
      return NextResponse.json(
        { error: "Please enter your website address (e.g. yourbusiness.com)." },
        { status: 400 }
      );
    }

    const urlCheck = cleanAndValidateUrl(websiteUrl);
    if (!urlCheck.valid) {
      return NextResponse.json(
        { error: "Please enter a valid HTTP/HTTPS website address (e.g. yourbusiness.com)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid business email." },
        { status: 400 }
      );
    }

    // 4. Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedBusinessName = businessName.trim().substring(0, 100);
    const sanitizedUrl = urlCheck.formatted.substring(0, 200);
    const sanitizedEmail = email.trim().toLowerCase().substring(0, 150);
    const sanitizedFocus = focus ? String(focus).trim().substring(0, 1000) : "Not specified";
    const submissionTime = new Date().toUTCString();

    // 5. Environment configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const auditNotificationEmail = process.env.AUDIT_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "relaystudio.team@gmail.com";
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || "Relay Audits <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.error("[Audit API Error]: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email delivery service is currently not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    if (!auditNotificationEmail) {
      console.error("[Audit API Error]: AUDIT_NOTIFICATION_EMAIL is not configured.");
      return NextResponse.json(
        { error: "Business notification inbox is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // 6. Step 1: Send notification email to the configured business inbox
    const notificationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a1128;">
        <h2 style="color: #0a1128; border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
          🚀 New Free Website Audit Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: bold;">Visitor Name:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a1128;">${sanitizedName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Business Name:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a1128;">${sanitizedBusinessName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Website URL:</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="${sanitizedUrl}" target="_blank" style="color: #2563eb;">${sanitizedUrl}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${sanitizedEmail}" style="color: #2563eb;">${sanitizedEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: bold;">Submission Time:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a1128;">${submissionTime}</td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <h3 style="margin-top: 0; font-size: 14px; color: #334155;">Audit Focus / Client Notes:</h3>
          <p style="margin-bottom: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${sanitizedFocus}</p>
        </div>
        <p style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
          Received directly through the Relay Free Website Audit form. No database was used.
        </p>
      </div>
    `;

    const adminEmailResult = await resend.emails.send({
      from: resendFromEmail,
      to: auditNotificationEmail,
      subject: `New Website Audit Request: ${sanitizedBusinessName} (${sanitizedName})`,
      html: notificationHtml,
    });

    if (adminEmailResult.error) {
      console.error("[Resend Admin Email Failed]:", adminEmailResult.error);
      return NextResponse.json(
        { error: "Could not deliver your audit request to our engineering team. Please try again or email us directly." },
        { status: 502 }
      );
    }

    // 7. Step 2: Send personalized confirmation email to the visitor ONLY AFTER notification was accepted
    const confirmationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a1128; line-height: 1.6;">
        <div style="margin-bottom: 24px;">
          <h2 style="color: #0a1128; margin-bottom: 8px;">We've received your audit request, ${sanitizedName}!</h2>
          <p style="color: #475569; font-size: 16px; margin-top: 0;">
            Thank you for reaching out about <strong>${sanitizedBusinessName}</strong>.
          </p>
        </div>
        
        <p style="font-size: 15px; color: #334155;">
          A human engineer on our team has received your request and will manually review your website (<strong><a href="${sanitizedUrl}" style="color: #2563eb;">${sanitizedUrl}</a></strong>).
        </p>

        <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h3 style="margin-top: 0; font-size: 14px; color: #166534; font-weight: bold;">What happens next?</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #15803d;">
            <li>We do not generate fake automated scores. A real engineer conducts a manual heuristic review.</li>
            <li>We inspect your Core Web Vitals, mobile usability, and conversion bottlenecks.</li>
            <li>You will receive a prioritized action report sent directly to this inbox within 2 business days.</li>
          </ul>
        </div>

        <p style="font-size: 14px; color: #64748b;">
          If you have additional questions or want to update your requirements in the meantime, simply reply to this email.
        </p>

        <p style="font-size: 14px; color: #0a1128; margin-top: 32px;">
          Best regards,<br/>
          <strong>The Relay Engineering Team</strong><br/>
          <span style="font-size: 12px; color: #64748b;">Relay Digital Services</span>
        </p>
      </div>
    `;

    try {
      await resend.emails.send({
        from: resendFromEmail,
        to: sanitizedEmail,
        subject: `Your Free Website Audit Request — ${sanitizedBusinessName}`,
        html: confirmationHtml,
      });
    } catch (confErr) {
      // Log visitor confirmation warning without failing the main transaction
      console.warn("[Resend Visitor Confirmation Warning]:", confErr);
    }

    return NextResponse.json({
      success: true,
      message: "Audit request received! Our team will manually review your site and email you.",
    });
  } catch (error) {
    console.error("[API Audit Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your audit request." },
      { status: 500 }
    );
  }
}
