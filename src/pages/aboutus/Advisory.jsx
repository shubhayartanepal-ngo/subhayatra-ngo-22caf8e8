import React from "react";

const Advisory = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-5">
          <h2>Advisory Board</h2>
          <h6 className="section-title">
            Expert advisors providing strategic guidance and expertise
          </h6>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center">
            <img
              src="/images/logo.png"
              alt="Shubhayatra Advisory"
              className="img-fluid mb-4"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>

        {/* <div className="row">
          {advisoryBoard.map((advisor) => (
            <div key={advisor.id} className="col-md-6 col-lg-6 mb-4">
              <div className="advisory-card p-4 border rounded shadow-sm bg-white h-100">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <img 
                      src="/images/logo.png" 
                      alt={advisor.name}
                      className="rounded-circle mb-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <h4 className="advisor-name">{advisor.name}</h4>
                    <h6 className="advisor-expertise text-primary">{advisor.expertise}</h6>
                    <p className="advisor-description text-muted">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="advisory-info">
              <h3 className="text-center mb-4">Advisory Board Role</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="role-section">
                    <h5>Strategic Guidance</h5>
                    <ul>
                      <li>Provide expert advice on organizational strategy</li>
                      <li>Review and guide major policy decisions</li>
                      <li>Support long-term planning initiatives</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="role-section">
                    <h5>Technical Expertise</h5>
                    <ul>
                      <li>Offer specialized knowledge in their fields</li>
                      <li>Review project proposals and implementations</li>
                      <li>Ensure best practices and quality standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Advisory;
