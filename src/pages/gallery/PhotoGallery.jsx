import "lightbox2/dist/css/lightbox.min.css"; // For Lightbox styling
import lightbox from "lightbox2";
const images = [
  { id: 1, src: "/images/gallery/g1.jpeg", title: "Z.P School, Antrod Need" },
  { id: 2, src: "/images/gallery/g2.jpeg", title: "Z.P School, Aswalamba" },
  { id: 3, src: "/images/gallery/g3.jpeg", title: "Z.P School, Kalyachi Wadi" },
  { id: 4, src: "/images/gallery/g4.jpeg", title: "Z.P School, Kalegaon" },
  { id: 5, src: "/images/gallery/g5.jpeg", title: "Z.P School, Chikatgaon" },
  { id: 6, src: "/images/gallery/g6.jpeg", title: "Z.P School, Pashtapada" },
  { id: 7, src: "/images/gallery/g7.jpeg", title: "Z.P School, Runmha" },
  { id: 8, src: "/images/gallery/g8.jpeg", title: "Z.P School, Gajanan Nagar" },
  { id: 9, src: "/images/gallery/g9.jpeg", title: "Z.P School, Poshir" },
  {
    id: 10,
    src: "/images/gallery/g10.jpeg",
    title: "Solar Shala, Z.P School Poshir",
  },
  {
    id: 11,
    src: "/images/gallery/g11.jpeg",
    title: "Computer Mitra, Z.P School Jambergaon",
  },
  {
    id: 12,
    src: "/images/gallery/g12.jpeg",
    title: "Library at Z.P. Girls School, Satpai",
  },
  {
    id: 13,
    src: "/images/gallery/g13.jpeg",
    title: "Colorful classroom at Kai Shakuntalabai School",
  },
  {
    id: 14,
    src: "/images/gallery/g14.jpeg",
    title: "Project Home School during COVID-19",
  },
  {
    id: 15,
    src: "/images/gallery/g15.jpeg",
    title: "Tablet Distribution at Z.P School",
  },
];

const PhotoGallery = () => {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">GALLERY</h2>
        <div className="row g-4">
          {images.map((img) => (
            <div key={img.id} className="col-6 col-md-4 col-lg-3  ">
              <div className="position-relative ">
                <a
                  href={img.src}
                  data-lightbox="gallery"
                  data-title={img.title}
                  className="d-block"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="img-fluid rounded shadow-sm border border-1"
                    style={{
                      height: "190px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </a>
                <div className="text-center small mt-2">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
