export async function getGallery() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/gallery`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("gallery api error", err);
    return [];
  }
}

export function buildMediaUrl(filePath) {
  return `${import.meta.env.VITE_API_IMAGE_URL}uploads/${filePath}`;
}
