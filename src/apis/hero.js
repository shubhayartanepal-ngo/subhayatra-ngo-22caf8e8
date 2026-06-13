export async function getHeroSection() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$|^\s+|\s+$/g,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/hero-section`);

    if (!res.ok) return null;

    const payload = await res.json();
    const hero = Array.isArray(payload?.data) ? payload.data[0] : null;
    return hero || null;
  } catch (err) {
    console.error("hero api error", err);
    return null;
  }
}
