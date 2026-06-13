export async function getEvents() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$/,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/events`);

    if (!res.ok) return [];

    const payload = await res.json();
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    return [];
  } catch (err) {
    console.error("events api error", err);
    return [];
  }
}

export function buildEventImageUrl(filePath) {
  if (!filePath) return "";
  // bannerPath comes as "images/2026/06/..." — the server serves it under /uploads/
  const normalizedPath = String(filePath).replace(/^\/+/, "");
  const baseImageUrl = String(import.meta.env.VITE_API_IMAGE_URL || "").replace(
    /\/+$/,
    ""
  );
  return `${baseImageUrl}/uploads/${encodeURI(normalizedPath)}`;
}

export function normalizeApiEventItem(item) {
  return {
    id: item.id,
    title: String(item.title || "").trim(),
    date: item.eventDate || item.createdAt || undefined,
    location: String(item.location || "").trim(),
    description: String(item.description || "").trim(),
    image: buildEventImageUrl(item.bannerPath),
  };
}

/**
 * Format an ISO date string (e.g. "2026-06-14") into a human-readable label
 * like "Jun 14, 2026".
 */
export function formatEventDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
