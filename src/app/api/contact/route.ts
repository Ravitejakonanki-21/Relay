import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/submissions";

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

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, service, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently accept bots to prevent reverse-engineering
      return NextResponse.json({ success: true, id: "bot_ignored" }, { status: 200 });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { error: "Please select a service." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief message describing your project." },
        { status: 400 }
      );
    }

    // Sanitize data
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 150),
      company: company ? String(company).trim().substring(0, 100) : "",
      service: service.trim().substring(0, 50),
      message: message.trim().substring(0, 2000),
    };

    const result = await saveSubmission("contact", sanitizedData);

    if (!result.success) {
      return NextResponse.json(
        { error: "Unable to process inquiry at this moment. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: result.id,
      message: "Thank you. Your message has been received.",
    });
  } catch (error) {
    console.error("[API Contact Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
