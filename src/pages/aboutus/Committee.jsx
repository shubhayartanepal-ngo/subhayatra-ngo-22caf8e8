import React from "react";

const Committee = () => {
  //   const committeeMembers = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       position: "Chairman",
  //       description: "Leading the organization with vision and dedication."
  //     },
  //     {
  //       id: 2,
  //       name: "Jane Smith",
  //       position: "Vice Chairman",
  //       description: "Supporting strategic initiatives and community outreach."
  //     },
  //     {
  //       id: 3,
  //       name: "Michael Johnson",
  //       position: "Secretary",
  //       description: "Managing organizational operations and communications."
  //     },
  //     {
  //       id: 4,
  //       name: "Sarah Williams",
  //       position: "Treasurer",
  //       description: "Overseeing financial management and resource allocation."
  //     }
  //   ];

  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-5">
          <h2>Our Committee</h2>
          <h6 className="section-title">
            Meet the dedicated leaders driving our mission forward
          </h6>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center">
            <img
              src="/images/logo.png"
              alt="Subhayatra Committee"
              className="img-fluid mb-4"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>

        {/* <div className="row">
          {committeeMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-3 mb-4">
              <div className="committee-card text-center p-4 border rounded shadow-sm bg-white h-100">
                <div className="member-image mb-3">
                  <img 
                    src="/images/logo.png" 
                    alt={member.name}
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <h4 className="member-name">{member.name}</h4>
                <h6 className="member-position text-primary">{member.position}</h6>
                <p className="member-description text-muted">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="committee-info text-center">
              <h3>Committee Responsibilities</h3>
              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="responsibility-item">
                    <h5>Strategic Planning</h5>
                    <p>Developing long-term organizational strategies and goals.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="responsibility-item">
                    <h5>Project Oversight</h5>
                    <p>Managing and monitoring ongoing projects and initiatives.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="responsibility-item">
                    <h5>Community Engagement</h5>
                    <p>Building relationships with stakeholders and communities.</p>
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

export default Committee;
