const CowSanctuariesInitiative = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Image Section */}
          <div className="col-md-6">
            <div className="d-flex flex-column gap-3 flex-wrap justify-content-center align-content-center">
              <img
                src="/images/about/cow.jpg"
                alt="Cow 1"
                className="img-fluid rounded shadow-sm"
                style={{ width: "75%", objectFit: "cover", height: "250px" }}
              />
              <img
                src="/images/about/cow1.jpg"
                alt="Cow 2"
                className="img-fluid rounded shadow-sm"
                style={{ width: "75%", objectFit: "cover", height: "250px" }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <h2 className="mb-3 text-primary-red fw-bold">
                Construction of Cow Parks Across Seven Provinces
              </h2>
              <p className="text-justify">
                There are two challenges when cows and bulls roam loose: (1) the
                unmanaged state of national animals and deteriorating conditions
                in many gaushalas, and (2) increased agricultural costs in the
                Terai region due to crop damage. To address these, we propose
                the creation of cow parks, backed by multi-sector support. These
                parks also help prevent ethnic and religious conflicts arising
                from cow-related issues.
              </p>
              <p className="text-justify">
                Cow parks aim to reduce caste conflict, protect agriculture,
                manage livestock, and boost income sources. They will also serve
                as eco-tourism attractions, featuring natural rivers, grazing
                lands, artificial ponds, and separate zones for different breeds
                and ages of cows.
              </p>
              <p className="text-justify">
                Cows will graze freely, drink, and move to sheds made of wood
                and stone. Facilitated cottages, footpaths, and eco-friendly
                structures will be built. Products like milk, wheat, dung,
                incense, medicines, and fertilizers will be commercialized.
              </p>
              <p className="text-justify mb-0">
                We're in discussion with the government to use forest areas in
                Kapilvastu and Arghakhanchi (Lumbini Province). A detailed
                proposal was submitted by then Minister Surendraraj Acharya to
                the Council of Ministers. The initiative offers a sustainable
                way of earning while serving and protecting cows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowSanctuariesInitiative;
