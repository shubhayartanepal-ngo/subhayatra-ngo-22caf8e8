import React, { useEffect, useState } from "react";
import teamData from "../../data/teamData";
import { Link } from "react-router-dom";
import { getTeam, normalizeApiTeamMember } from "../../apis/team";

const OurTeam = () => {
  const [apiTeam, setApiTeam] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadTeam = async () => {
      const data = await getTeam();
      if (!mounted) return;
      setApiTeam(data.map(normalizeApiTeamMember));
    };

    loadTeam();

    return () => {
      mounted = false;
    };
  }, []);

  const members = [
    ...apiTeam.map((member) => ({ ...member, source: "api" })),
    ...teamData.map((member) => ({ ...member, source: "static" })),
  ];

  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-5">
          <h2>Our Team</h2>
          <h6 className="section-title">
            Meet the dedicated professionals working to make a difference
          </h6>
        </div>

        <div className="row">
          {members.map((member, index) => (
            <div
              key={`${member.source}-${member.id || index}`}
              className="col-md-6 col-lg-4 mb-4"
            >
              {/* <div className="team-card text-center p-4 border rounded shadow-sm bg-white h-100">
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
        
              </div> */}
              <div>
                <div className="box-shadow-hover team-card text-center border rounded shadow-sm bg-white h-100">
                  <div className="member-item radius">
                    <div className="avatar">
                      <img
                        src={member.img || "/images/logo.png"}
                        alt={member.name}
                      />
                      <span className="overlay"></span>
                      <div className="social-mem">
                        {member.socials.map((social, index) => (
                          <Link
                            key={index}
                            to={social.link || "#"}
                            target="_blank"
                          >
                            <i className={`fa fa-${social.platform}`}></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mem-info">
                      <h5>
                        {member.name}
                        {member.roles.map((role, index) => (
                          <span key={index} className="font12 normal">
                            {role}
                          </span>
                        ))}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
