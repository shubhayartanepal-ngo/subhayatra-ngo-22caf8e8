import { useEffect, useState } from "react";
import teamData from "../../data/teamData";
import { Link } from "react-router-dom";
import { getTeam, normalizeApiTeamMember } from "../../apis/team";
import $ from "jquery";
import "slick-carousel";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadTeam = async () => {
      const data = await getTeam();
      if (!mounted) return;

      const mappedApi = data.map(normalizeApiTeamMember);
      const mergedMembers = [
        ...mappedApi.map((member) => ({ ...member, source: "api" })),
        ...teamData.map((member) => ({ ...member, source: "static" })),
      ];

      setMembers(mergedMembers);
      setIsLoading(false);
    };

    loadTeam();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

    const $slider = $(".testi-slider");

    if (!$slider.length) return undefined;

    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      prevArrow:
        '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });

    return () => {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    };
  }, [isLoading]);

  if (isLoading) return null;

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
                    {members.map((member, index) => (
                      <div key={`${member.source}-${member.id || index}`}>
                        <div className="testi-item box-shadow-hover">
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
