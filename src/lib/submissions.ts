export interface SubmissionData {
  id: string;
  type: "contact" | "audit";
  createdAt: string;
  payload: Record<string, unknown>;
  status: "received" | "processed" | "failed";
}

// In-memory persistent cache for runtime environments without an external database configured
// and file-backed fallback in development.
const submissionsMemoryStore: SubmissionData[] = [];

export async function saveSubmission(
  type: "contact" | "audit",
  payload: Record<string, unknown>
): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const id = `${type}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const submission: SubmissionData = {
      id,
      type,
      createdAt: new Date().toISOString(),
      payload,
      status: "received",
    };

    submissionsMemoryStore.push(submission);

    // Save to local data/submissions.json file for instant review
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "submissions.json");
      let existing: SubmissionData[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch {
        existing = [];
      }
      existing.unshift(submission);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      console.warn("[Submission] Local file storage error:", fsErr);
    }

    // Optional Supabase integration if environment variables are provided
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/submissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(submission),
        });
        if (!response.ok) {
          console.warn("[Submission] Supabase storage error:", await response.text());
        }
      } catch (err) {
        console.warn("[Submission] External database unreachable:", err);
      }
    }

    // Optional Email notification dispatch via Resend for contact inquiries
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.AUDIT_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "relaystudio.team@gmail.com";
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || "Relay Contact <onboarding@resend.dev>";

    if (resendApiKey && type === "contact") {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: resendFromEmail,
            to: [targetEmail],
            reply_to: typeof payload.email === "string" ? payload.email : undefined,
            subject: `New Contact Inquiry: ${payload.name || "Client"} (${payload.service || "General"})`,
            text: JSON.stringify(payload, null, 2),
          }),
        });
      } catch (err) {
        console.warn("[Submission] Email dispatch error:", err);
      }
    } else {
      // Safe development mock notification
      console.info(
        `[Submission Received (Mock Mode - Configure RESEND_API_KEY to send real emails)]`,
        { type, id, payload }
      );
    }

    return { success: true, id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown submission error";
    return { success: false, id: "", error: message };
  }
}

export function getAllSubmissions(): SubmissionData[] {
  return [...submissionsMemoryStore];
}
