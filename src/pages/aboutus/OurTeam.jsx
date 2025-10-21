import React from "react";
import teamData from "../../data/teamData";

const OurTeam = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-5">
          <h2>Our Team</h2>
          <h6 className="section-title">
            Meet the dedicated professionals working to make a difference
          </h6>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center">
            <img 
              src="/images/logo.png" 
              alt="Subhayatra Team" 
              className="img-fluid mb-4"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>

        {/* <div className="row">
          {teamData.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 mb-4">
              <div className="team-card text-center p-4 border rounded shadow-sm bg-white h-100">
                <div className="member-image mb-3">
                  <img 
                    src={member.img || "/images/logo.png"}
                    alt={member.name}
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>
                <h4 className="member-name">{member.name}</h4>
                <h6 className="member-position text-primary">{member.position}</h6>
                <div className="member-roles mb-2">
                  {member.roles.map((role, index) => (
                    <span key={index} className="badge bg-info me-1 mb-1">
                      {role}
                    </span>
                  ))}
                </div>
                <span className="badge bg-secondary mb-2">{member.department}</span>
                <p className="member-description text-muted">
                  {member.description}
                </p>
                {member.socials && member.socials.length > 0 && (
                  <div className="member-socials">
                    {member.socials.map((social, index) => (
                      social.link && (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="me-2">
                          <i className={`fa fa-${social.platform} text-primary`}></i>
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default OurTeam;