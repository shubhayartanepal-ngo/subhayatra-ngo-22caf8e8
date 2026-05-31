import React, { useEffect, useState } from "react";
import { getGallery, buildMediaUrl } from "../../apis/gallery";

const videos = [
  {
    id: 1,
    title: "Introduction to Our Work",
    src: "/images/gallery/video.mp4",
  },
  {
    id: 2,
    title: "Community Impact Story",
    src: "/images/gallery/video1.mp4",
  },
];

const VideoGallery = () => {
  const [apiVideos, setApiVideos] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await getGallery();
        const videosFromApi = (data || [])
          .filter((it) => it.mediaType === "VIDEO")
          .map((it) => ({
            id: `api-${it.id}`,
            title: it.title || it.fileName || "",
            src: buildMediaUrl(it.filePath),
            contentType: it.contentType || "video/mp4",
            uploadedAt: it.uploadedAt || null,
          }))
          .sort((a, b) => {
            const ta = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
            const tb = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
            return tb - ta; // newest first
          });

        setApiVideos(videosFromApi);
      } catch (err) {
        console.error("Failed to load gallery media:", err);
      }
    };

    fetchMedia();
  }, []);

  // Show API videos sorted by timestamp first, then keep hardcoded videos as-is
  const combined = [...apiVideos, ...videos];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Video Gallery</h2>
      <div className="row">
        {combined.map((video) => (
          <div key={video.id} className="col-md-6 col-lg-4 mb-4">
            <div className="video-card shadow rounded overflow-hidden">
              <div className="video-container">
                <video
                  className="w-100 h-100"
                  controls
                  preload="metadata"
                  poster={video.poster || "/images/video-thumbnail.jpg"}
                >
                  <source
                    src={video.src}
                    type={video.contentType || "video/mp4"}
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-2 bg-light text-center">
                <p className="mb-0 small fw-semibold">{video.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
