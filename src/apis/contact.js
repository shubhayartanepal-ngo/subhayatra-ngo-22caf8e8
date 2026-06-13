export async function getContactInfo() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$/,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/contact/info`);

    if (!res.ok) return null;

    const payload = await res.json();
    return normalizeApiContactInfo(payload);
  } catch (err) {
    console.error("contact api error", err);
    return null;
  }
}

export function normalizeApiContactInfo(item) {
  if (!item) return null;
  return {
    id: item.id,
    location: String(item.location || "").trim(),
    email: String(item.email || "").trim(),
    phoneNumber: String(item.phoneNumber || "").trim(),
    mapUrl: String(item.mapUrl || "").trim(),
    version: item.version,
  };
}
