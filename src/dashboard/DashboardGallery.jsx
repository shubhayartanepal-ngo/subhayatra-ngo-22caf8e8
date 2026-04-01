import React from "react";
import "./DashboardTable.css";

const DashboardGallery = () => {
  const [images] = React.useState([
    {
      id: 1,
      title: "Community Event",
      category: "events",
      uploadDate: "2025-03-20",
      images: 24,
    },
    {
      id: 2,
      title: "Program Activities",
      category: "programs",
      uploadDate: "2025-03-18",
      images: 18,
    },
    {
      id: 3,
      title: "Award Ceremony",
      category: "awards",
      uploadDate: "2025-03-15",
      images: 32,
    },
  ]);

  return (
    <div className="dashboard-gallery">
      <div className="page-header">
        <h3>Gallery</h3>
        <button className="btn btn-primary">Upload Images</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>Gallery Albums</h5>
        </div>
        <div className="card-body">
          <div className="gallery-grid">
            {images.map((album) => (
              <div key={album.id} className="gallery-album">
                <div className="album-cover">
                  <i className="fa fa-image"></i>
                </div>
                <div className="album-info">
                  <h6>{album.title}</h6>
                  <p>{album.images} images</p>
                  <span className="album-date">{album.uploadDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGallery;
