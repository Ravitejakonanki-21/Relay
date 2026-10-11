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

    // Optional Email notification dispatch via Resend / Webhook if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.NOTIFICATION_EMAIL || "hello@relaydigital.co";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Relay Notifications <notifications@relaydigital.co>",
            to: [targetEmail],
            subject: `New ${type.toUpperCase()} Submission: ${payload.businessName || payload.name || "Inquiry"}`,
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
