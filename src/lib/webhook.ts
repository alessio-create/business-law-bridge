const WEBHOOK_URL = "https://hook.eu2.make.com/evcknrhnr23oq1b4t41nr6tlxd65e0xe";

export interface WebhookPayload {
  event: "optin_submitted" | "booking_confirmed";
  timestamp: string;
  lead: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
  quiz: Array<{ question: number; answer: string }>;
  booked: boolean;
  booking?: {
    slot?: string;
  };
  page_url: string;
  referrer: string;
}

export async function fireWebhook(payload: WebhookPayload): Promise<void> {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.error("Webhook error:", err);
  }
}
