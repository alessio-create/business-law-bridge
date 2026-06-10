// Meta Pixel helper
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type StandardEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "CompleteRegistration"
  | "Schedule";

export function fbqTrack(event: StandardEvent, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) window.fbq("track", event, params);
    else window.fbq("track", event);
  }
}
