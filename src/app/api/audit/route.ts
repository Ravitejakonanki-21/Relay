import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/submissions";

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
    // Disallow local / internal IP addresses to prevent SSRF
    const hostname = parsed.hostname.toLowerCase();
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.") ||
      hostname.endsWith(".local")
    ) {
      return { valid: false, formatted: "" };
    }
    // Simple top-level domain check
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

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many audit requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { businessName, websiteUrl, email, focus, honeypot } = body;

    // Honeypot spam protection
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, id: "bot_ignored" }, { status: 200 });
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
        { error: "Please enter a valid, accessible public website domain." },
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

    const sanitizedData = {
      businessName: businessName.trim().substring(0, 100),
      websiteUrl: urlCheck.formatted.substring(0, 200),
      email: email.trim().toLowerCase().substring(0, 150),
      focus: focus ? String(focus).trim().substring(0, 1000) : "",
    };

    const result = await saveSubmission("audit", sanitizedData);

    if (!result.success) {
      return NextResponse.json(
        { error: "Unable to schedule audit. Please try again or reach out directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: result.id,
      message: "Audit request received! Our team will manually review your site and email you.",
    });
  } catch (error) {
    console.error("[API Audit Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your audit request." },
      { status: 500 }
    );
  }
}
