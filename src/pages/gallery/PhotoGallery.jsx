import React, { useEffect, useState } from "react";
import "lightbox2/dist/css/lightbox.min.css"; // For Lightbox styling
import lightbox from "lightbox2";
import { getGallery, buildMediaUrl } from "../../apis/gallery";
import PhotoAlbum from "react-photo-album";
import { images } from "../../data/images";

function getImageSize(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ width: 4, height: 3 });
    img.src = src;
  });
}

const PhotoGallery = () => {
  const [apiImages, setApiImages] = useState([]);

  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });

    const fetchMedia = async () => {
      try {
        const data = await getGallery();
        const imagesFromApi = (data || [])
          .filter((it) => it.mediaType === "IMAGE")
          .map((it) => ({
            id: `api-${it.id}`,
            src: buildMediaUrl(it.filePath),
            title: it.title || it.fileName || "",
            uploadedAt: it.uploadedAt || null,
          }))
          .sort((a, b) => {
            const ta = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
            const tb = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
            return tb - ta; // newest first
          });

        setApiImages(imagesFromApi);
      } catch (err) {
        console.error("Failed to load gallery media:", err);
      }
    };

    fetchMedia();
  }, []);

  // Show API images sorted by timestamp first, then keep hardcoded images as-is
  const combined = [...apiImages, ...images];

  const [photos, setPhotos] = useState([]);
  const [loadingSizes, setLoadingSizes] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoadingSizes(true);
      const sized = await Promise.all(
        combined.map(async (img) => {
          const { width, height } = await getImageSize(img.src);
          return {
            src: img.src,
            width: width || 4,
            height: height || 3,
            alt: img.title || "",
            id: img.id,
          };
        })
      );
      if (mounted) setPhotos(sized);
      setLoadingSizes(false);
    };
    load();
    return () => (mounted = false);
  }, [apiImages]);

  if (loadingSizes) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="text-center fw-bold mb-4">GALLERY</h2>
          <div>Loading images...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">GALLERY</h2>
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          targetRowHeight={200}
          renderPhoto={({ photo, imageProps, wrapperStyle, wrapperProps }) => (
            <div style={wrapperStyle} {...wrapperProps}>
              <a
                href={photo.src}
                data-lightbox="gallery"
                data-title={photo.alt}
              >
                <img
                  {...imageProps}
                  alt={photo.alt}
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </a>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
