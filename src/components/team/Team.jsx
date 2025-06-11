import { useSlickSlider } from "../../hooks/useSlickSlider";
import { Link } from "react-router-dom";

const Team = (member) => {
  useSlickSlider(".testi-slider");
  let TopMembers = [
    {
      name: "Er. Sanjeev Bhandari",
      roles: [" ", "Principal - Nepathya College"],
      img: "images/sanjeev.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "https://www.facebook.com/sanjeev.bhandari",
        },
      ],
    },
    {
      name: "Er. Sanjeev Bhandari",
      roles: [" ", "Principal - Nepathya College"],
      img: "images/sanjeev.jpg",
      socials: [
        { platform: "twitter", link: "" },
        { platform: "linkedin", link: "" },
        {
          platform: "facebook",
          link: "https://www.facebook.com/sanjeev.bhandari",
        },
      ],
    },
    {
      name: "Mr. Shiva Bhattrai",
      roles: ["Member", "Co-Founder: Basiyo, CTO (Bootwal R&D)"],
      img: "images/ShivaBhattarai.jpg",
      socials: [
        { platform: "twitter", link: "#" },
        { platform: "linkedin", link: "#" },
        { platform: "facebook", link: "https://www.facebook.com/civaz" },
      ],
    },
    {
      name: "Mr. Shiva Bhattrai",
      roles: ["Member", "Co-Founder: Basiyo, CTO (Bootwal R&D)"],
      img: "images/ShivaBhattarai.jpg",
      socials: [
        { platform: "twitter", link: "#" },
        { platform: "linkedin", link: "#" },
        { platform: "facebook", link: "https://www.facebook.com/civaz" },
      ],
    },
    {
      name: "Mr. Shiva Bhattrai",
      roles: ["Member", "Co-Founder: Basiyo, CTO (Bootwal R&D)"],
      img: "images/ShivaBhattarai.jpg",
      socials: [
        { platform: "twitter", link: "#" },
        { platform: "linkedin", link: "#" },
        { platform: "facebook", link: "https://www.facebook.com/civaz" },
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

                  {/* <div className="empty_space_80">
                    <span className="empty_space_inner"></span>
                  </div> */}

                  {/* <div className="partner-slider image-carousel text-center" data-show="5" data-arrow="false">

                                    <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo1.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo2.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo3.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo4.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo5.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo1.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo2.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo3.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo4.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

							        <div>
							            <div className="partner-item text-center clearfix">
							                <div className="inner">
						                        <div className="thumb">
						                            <img src="images/logo5.png" alt="">
						                        </div>
							                </div>
							            </div>
							        </div>

                                </div> */}
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
