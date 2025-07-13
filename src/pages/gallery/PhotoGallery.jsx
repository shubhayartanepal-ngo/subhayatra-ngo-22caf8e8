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
  { id: 16, src: "/images/gallery/g16.jpeg", title: "Z.P School, Poshir" },
  { id: 17, src: "/images/gallery/g17.jpeg", title: "Z.P School, Poshir" },
  { id: 18, src: "/images/gallery/g18.jpeg", title: "Z.P School, Poshir" },
  { id: 19, src: "/images/gallery/g19.jpeg", title: "Z.P School, Poshir" },
  { id: 20, src: "/images/gallery/g20.jpeg", title: "Z.P School, Poshir" },
  { id: 21, src: "/images/gallery/g21.jpeg", title: "Z.P School, Poshir" },
  { id: 22, src: "/images/gallery/g22.jpeg", title: "Z.P School, Poshir" },
  { id: 23, src: "/images/gallery/g23.jpeg", title: "Z.P School, Poshir" },
  { id: 24, src: "/images/gallery/g24.jpeg", title: "Z.P School, Poshir" },
  { id: 25, src: "/images/gallery/g25.jpeg", title: "Z.P School, Poshir" },
  { id: 26, src: "/images/gallery/g26.jpeg", title: "Z.P School, Poshir" },
  { id: 27, src: "/images/gallery/g27.jpeg", title: "Z.P School, Poshir" },
  { id: 28, src: "/images/gallery/g28.jpeg", title: "Z.P School, Poshir" },
  { id: 29, src: "/images/gallery/g29.jpeg", title: "Z.P School, Poshir" },
  { id: 30, src: "/images/gallery/g30.jpeg", title: "Z.P School, Poshir" },
  { id: 31, src: "/images/gallery/g31.jpeg", title: "Z.P School, Poshir" },
  { id: 32, src: "/images/gallery/g32.jpeg", title: "Z.P School, Poshir" },
  { id: 33, src: "/images/gallery/g33.jpeg", title: "Z.P School, Poshir" },
  { id: 34, src: "/images/gallery/g34.jpeg", title: "Z.P School, Poshir" },
  { id: 35, src: "/images/gallery/g35.jpeg", title: "Z.P School, Poshir" },
  { id: 36, src: "/images/gallery/g36.jpeg", title: "Z.P School, Poshir" },
  { id: 37, src: "/images/gallery/g37.jpeg", title: "Z.P School, Poshir" },
  { id: 38, src: "/images/gallery/g38.jpeg", title: "Z.P School, Poshir" },
  { id: 39, src: "/images/gallery/g39.jpeg", title: "Z.P School, Poshir" },
  { id: 40, src: "/images/gallery/g40.jpeg", title: "Z.P School, Poshir" },
  { id: 41, src: "/images/gallery/g41.jpeg", title: "Z.P School, Poshir" },
  { id: 42, src: "/images/gallery/g42.jpeg", title: "Z.P School, Poshir" },
  { id: 43, src: "/images/gallery/g43.jpeg", title: "Z.P School, Poshir" },
  { id: 44, src: "/images/gallery/g44.jpeg", title: "Z.P School, Poshir" },
  { id: 45, src: "/images/gallery/g45.jpeg", title: "Z.P School, Poshir" },
  { id: 46, src: "/images/gallery/g46.jpeg", title: "Z.P School, Poshir" },
  { id: 47, src: "/images/gallery/g47.jpeg", title: "Z.P School, Poshir" },
  { id: 48, src: "/images/gallery/g48.jpeg", title: "Z.P School, Poshir" },
  { id: 49, src: "/images/gallery/g49.jpeg", title: "Z.P School, Poshir" },
  { id: 50, src: "/images/gallery/g50.jpeg", title: "Z.P School, Poshir" },
  { id: 51, src: "/images/gallery/g51.jpeg", title: "Z.P School, Poshir" },
  { id: 52, src: "/images/gallery/g52.jpeg", title: "Z.P School, Poshir" },

  { id: 53, src: "/images/gallery/g53.jpeg", title: "Z.P School, Poshir" },
  { id: 54, src: "/images/gallery/g54.jpeg", title: "Z.P School, Poshir" },
  { id: 55, src: "/images/gallery/g55.jpeg", title: "Z.P School, Poshir" },
  { id: 56, src: "/images/gallery/g56.jpeg", title: "Z.P School, Poshir" },
  { id: 57, src: "/images/gallery/g57.jpeg", title: "Z.P School, Poshir" },
  { id: 58, src: "/images/gallery/g58.jpeg", title: "Z.P School, Poshir" },
  { id: 59, src: "/images/gallery/g59.jpeg", title: "Z.P School, Poshir" },
  { id: 60, src: "/images/gallery/g60.jpeg", title: "Z.P School, Poshir" },
  { id: 61, src: "/images/gallery/g61.jpeg", title: "Z.P School, Poshir" },
  { id: 62, src: "/images/gallery/g62.jpeg", title: "Z.P School, Poshir" },
  { id: 63, src: "/images/gallery/g63.jpeg", title: "Z.P School, Poshir" },
  { id: 64, src: "/images/gallery/g64.jpeg", title: "Z.P School, Poshir" },
  { id: 65, src: "/images/gallery/g65.jpeg", title: "Z.P School, Poshir" },
  { id: 66, src: "/images/gallery/g66.jpeg", title: "Z.P School, Poshir" },
  { id: 67, src: "/images/gallery/g67.jpeg", title: "Z.P School, Poshir" },
  { id: 68, src: "/images/gallery/g68.jpeg", title: "Z.P School, Poshir" },
  { id: 69, src: "/images/gallery/g69.jpeg", title: "Z.P School, Poshir" },
  { id: 70, src: "/images/gallery/g70.jpeg", title: "Z.P School, Poshir" },
  { id: 71, src: "/images/gallery/g71.jpeg", title: "Z.P School, Poshir" },
  { id: 72, src: "/images/gallery/g72.jpeg", title: "Z.P School, Poshir" },
  { id: 73, src: "/images/gallery/g73.jpeg", title: "Z.P School, Poshir" },
  { id: 74, src: "/images/gallery/g74.jpeg", title: "Z.P School, Poshir" },
  { id: 75, src: "/images/gallery/g75.jpeg", title: "Z.P School, Poshir" },
  { id: 76, src: "/images/gallery/g76.jpeg", title: "Z.P School, Poshir" },
  { id: 77, src: "/images/gallery/g77.jpeg", title: "Z.P School, Poshir" },
  { id: 78, src: "/images/gallery/g78.jpeg", title: "Z.P School, Poshir" },
  { id: 79, src: "/images/gallery/g79.jpeg", title: "Z.P School, Poshir" },
  { id: 80, src: "/images/gallery/g80.jpeg", title: "Z.P School, Poshir" },
  { id: 81, src: "/images/gallery/g81.jpeg", title: "Z.P School, Poshir" },
  { id: 82, src: "/images/gallery/g82.jpeg", title: "Z.P School, Poshir" },
  { id: 83, src: "/images/gallery/g83.jpeg", title: "Z.P School, Poshir" },
  { id: 84, src: "/images/gallery/g84.jpeg", title: "Z.P School, Poshir" },
  { id: 85, src: "/images/gallery/g85.jpeg", title: "Z.P School, Poshir" },
  { id: 86, src: "/images/gallery/g86.jpeg", title: "Z.P School, Poshir" },
  { id: 87, src: "/images/gallery/g87.jpeg", title: "Z.P School, Poshir" },
  { id: 88, src: "/images/gallery/g88.jpeg", title: "Z.P School, Poshir" },
  { id: 89, src: "/images/gallery/g89.jpeg", title: "Z.P School, Poshir" },
  { id: 90, src: "/images/gallery/g90.jpeg", title: "Z.P School, Poshir" },
  { id: 91, src: "/images/gallery/g91.jpeg", title: "Z.P School, Poshir" },
  { id: 92, src: "/images/gallery/g92.jpeg", title: "Z.P School, Poshir" },
  { id: 93, src: "/images/gallery/g93.jpeg", title: "Z.P School, Poshir" },
  { id: 94, src: "/images/gallery/g94.jpeg", title: "Z.P School, Poshir" },
  { id: 95, src: "/images/gallery/g95.jpeg", title: "Z.P School, Poshir" },
  { id: 96, src: "/images/gallery/g96.jpeg", title: "Z.P School, Poshir" },
  { id: 97, src: "/images/gallery/g97.jpeg", title: "Z.P School, Poshir" },
  { id: 98, src: "/images/gallery/g98.jpeg", title: "Z.P School, Poshir" },
  { id: 99, src: "/images/gallery/g99.jpeg", title: "Z.P School, Poshir" },
  { id: 100, src: "/images/gallery/g100.jpeg", title: "Z.P School, Poshir" },
  { id: 101, src: "/images/gallery/g101.jpeg", title: "Z.P School, Poshir" },
  { id: 102, src: "/images/gallery/g102.jpeg", title: "Z.P School, Poshir" },
  { id: 103, src: "/images/gallery/g103.jpeg", title: "Z.P School, Poshir" },
  { id: 104, src: "/images/gallery/g104.jpeg", title: "Z.P School, Poshir" },
  { id: 105, src: "/images/gallery/g105.jpeg", title: "Z.P School, Poshir" },
  { id: 106, src: "/images/gallery/g106.jpeg", title: "Z.P School, Poshir" },
  { id: 107, src: "/images/gallery/g107.jpeg", title: "Z.P School, Poshir" },
  { id: 108, src: "/images/gallery/g108.jpeg", title: "Z.P School, Poshir" },
  { id: 109, src: "/images/gallery/g109.jpeg", title: "Z.P School, Poshir" },
  { id: 110, src: "/images/gallery/g110.jpeg", title: "Z.P School, Poshir" },
  { id: 111, src: "/images/gallery/g111.jpeg", title: "Z.P School, Poshir" },
  { id: 112, src: "/images/gallery/g112.jpeg", title: "Z.P School, Poshir" },
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
