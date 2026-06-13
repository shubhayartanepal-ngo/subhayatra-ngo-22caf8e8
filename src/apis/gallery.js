export async function getGallery() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$/,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/albums`);
    if (!res.ok) return [];

    const albums = await res.json();

    let allMedia = [];
    if (Array.isArray(albums)) {
      albums.forEach((album) => {
        if (Array.isArray(album.mediaList)) {
          album.mediaList.forEach((media) => {
            allMedia.push({
              ...media,
              albumId: album.id,
              title: album.programName || media.fileName || "",
              description: album.description,
            });
          });
        }
      });
    }
    return allMedia;
  } catch (err) {
    console.error("gallery api error", err);
    return [];
  }
}

export function buildMediaUrl(filePath) {
  if (!filePath) return "";
  const normalizedPath = String(filePath).replace(/^\/+/, "");
  const baseImageUrl = String(import.meta.env.VITE_API_IMAGE_URL || "").replace(
    /\/+$/,
    ""
  );
  return `${baseImageUrl}/uploads/${encodeURI(normalizedPath)}`;
}
