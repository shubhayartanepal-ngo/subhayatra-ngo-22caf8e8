import { useSlickSlider } from "../../hooks/useSlickSlider";
import { Link } from "react-router-dom";

const Team = (member) => {
  useSlickSlider(".testi-slider");
  let TopMembers = [
    {
      name: "Madhu Sudan Gaire",
      roles: ["ेन्द्रिय अध्यक्ष"],
      img: "images/MADHU-SUDAN-GAIRE.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
    {
      name: "Dipak Lamsal",
      roles: ["सचिव"],
      img: "images/Dipak-Lamsal.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
    {
      name: "Badri Pokharel",
      roles: ["सह सचीव"],
      img: "images/Badri-Pokharel.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
    {
      name: "Ratna Kandel",
      roles: ["कोषाध्यक्ष"],
      img: "images/Ratna-Kandel.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
    {
      name: "-",
      roles: ["मुक्तिनाथ गैह्रे(रुपन्देही जिल्ला अध्यक्ष )"],
      img: "images/PHOTO-2025-06-11-12-16-02.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
    {
      name: "-",
      roles: ["सह सचीव"],
      img: "images/PHOTO-2025-06-11-12-16-03.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "",
        },
      ],
    },
  ];
  return (
    <>
      <section className="wpb_row row-fluid section-padd">
        <div className="container">
          <div className="row">
            <div className="wpb_column column_container col-sm-12">
              <div className="column-inner">
                <div className="wpb_wrapper">
                  <div className="section-head ">
                    <h2>
                      <>OUR TEAM</>
                    </h2>
                    <h6 className="section-title">meet our family</h6>
                  </div>

                  <div className="empty_space_30">
                    <span className="empty_space_inner"></span>
                  </div>

                  <div className="testi-slider" data-show="4" data-arrow="true">
                    {TopMembers.map((member, index) => (
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="member-item radius">
                            <div className="avatar">
                              <img
                                src={member.img ? member.img : avatar}
                                alt={member.name}
                              />
                              <span className="overlay"></span>
                              <div className="social-mem">
                                {member.socials.map((social, index) => (
                                  <Link
                                    key={index}
                                    to={social.link}
                                    target="_blank"
                                  >
                                    <i
                                      className={`fa fa-${social.platform}`}
                                    ></i>
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
