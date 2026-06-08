import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";
import { getGallery, buildMediaUrl } from "../../apis/gallery";

const getImageSize = (src) =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ width: 4, height: 3 });
    img.src = src;
  });

// items: array of strings (src) or objects { src, id, alt }
const PhotoGrid = ({
  items = null,
  fetchFromApi = false,
  apiFilter = {},
  targetRowHeight = 200,
}) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const mediaType = apiFilter.mediaType || "";

  useEffect(() => {
    lightbox.option({ resizeDuration: 200, wrapAround: true });
  }, []);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      let sources = [];
      if (fetchFromApi) {
        const data = await getGallery();
        const filtered = (data || []).filter((it) => {
          if (!mediaType) return true;
          return it.mediaType === mediaType;
        });
        sources = filtered.map((it) => ({
          src: encodeURI(buildMediaUrl(it.filePath)),
          id: `api-${it.id}`,
          alt: it.title || it.fileName || "",
        }));
      } else if (items) {
        sources = items.map((it, idx) => {
          if (typeof it === "string")
            return { src: encodeURI(it), id: `item-${idx}`, alt: "" };
          return {
            src: encodeURI(it.src || it),
            id: it.id || `item-${idx}`,
            alt: it.alt || it.title || "",
          };
        });
      }

      const sized = await Promise.all(
        sources.map(async (s) => {
          const { width, height } = await getImageSize(s.src);
          return {
            src: s.src,
            width: width || 4,
            height: height || 3,
            alt: s.alt || "",
            id: s.id,
          };
        })
      );

      if (mounted) setPhotos(sized);
      setLoading(false);
    };

    load();
    return () => (mounted = false);
  }, [items, fetchFromApi, mediaType]);

  if (loading) return <div className="text-center">Loading images...</div>;

  return (
    <PhotoAlbum
      layout="masonry"
      photos={photos}
      targetRowHeight={targetRowHeight}
      renderPhoto={({ photo, imageProps, wrapperStyle, wrapperProps }) => (
        <div style={wrapperStyle} {...wrapperProps}>
          <a href={photo.src} data-lightbox="gallery" data-title={photo.alt}>
            <img
              {...imageProps}
              alt={photo.alt}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </a>
        </div>
      )}
    />
  );
};

export default PhotoGrid;
