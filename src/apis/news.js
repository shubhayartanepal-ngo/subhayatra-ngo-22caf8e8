export async function getNews() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$/,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/news`);

    if (!res.ok) return [];

    const payload = await res.json();
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    return [];
  } catch (err) {
    console.error("news api error", err);
    return [];
  }
}

export function buildNewsImageUrl(filePath) {
  if (!filePath) return "";
  // imageUrls come as "images/2026/06/..." — server serves them under /uploads/
  const normalizedPath = String(filePath).replace(/^\/+/, "");
  const baseImageUrl = String(import.meta.env.VITE_API_IMAGE_URL || "").replace(
    /\/+$/,
    ""
  );
  return `${baseImageUrl}/uploads/${encodeURI(normalizedPath)}`;
}

export function normalizeApiNewsItem(item) {
  return {
    id: item.id,
    title: String(item.header || item.title || "").trim(),
    content: String(item.description || item.content || "").trim(),
    // API returns imageUrls: ["images/2026/06/..."]
    image: Array.isArray(item.imageUrls)
      ? item.imageUrls.map((path) => buildNewsImageUrl(path)).filter(Boolean)
      : Array.isArray(item.images)
        ? item.images
            .map((media) =>
              typeof media === "string"
                ? buildNewsImageUrl(media)
                : buildNewsImageUrl(media?.filePath)
            )
            .filter(Boolean)
        : [],
    date: item.createdAt || item.date || undefined,
  };
}
