const TouristRouteDevelopment = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src="/images/blog/b2.jpg"
              alt="Tourist Route"
              className="img-fluid rounded shadow-sm"
              style={{
                height: "100%",
                objectFit: "cover",
                maxHeight: "400px",
                width: "100%",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow p-4  d-flex flex-column justify-content-center">
              <h2 className="mb-3 text-primary-red">The Tourist Route</h2>
              <p className="text-justify">
                When we explain the tourist route, it seems that if we connect
                the huge population of India, which is close to us, to the
                places that match the religious, cultural and geographical
                aspects of Nepal, it will help in the tourism development of
                Nepal. Like: Kushinagar to Lumbini...
              </p>
              <p className="text-justify">
                Ayodhya to Janaki Temple, Camel to Tansen, Kanyakumari to
                Everest, Goa to Pokhara, Muktinath to Pashupati Kshetra, Barah
                Kshetra, Rurukshetra to Taj Mahal, Rani Mahal to Rani Mahal.
              </p>
              <p className="text-justify">
                In this way, Shubhayatra Nepal is taking the initiative to
                coordinate with local governments in operating these tourist
                routes in a well-informed and friendly way, and we hope the
                Nepalese government will support this effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristRouteDevelopment;
