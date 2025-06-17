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
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Video Gallery</h2>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-md-6 col-lg-4 mb-4">
            <div className="video-card shadow rounded overflow-hidden">
              <div className="video-container">
                <video
                  className="w-100 h-100"
                  controls
                  preload="metadata"
                  poster="/images/video-thumbnail.jpg"
                >
                  <source src={video.src} type="video/mp4" />
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
