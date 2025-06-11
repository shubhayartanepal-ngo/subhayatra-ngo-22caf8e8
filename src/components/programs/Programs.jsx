import { Link } from "react-router-dom";
const Programs = () => {
  const programs = [
    {
      icon: "fas fa-cow",
      title: "Cow Sanctuaries Initiative",
      description:
        "There are two challenges between us when cows and bulls are loose. One: It seems that the state of national animals is not managed and the condition of cows in many gaushalas is  critical.",
      link: "/programs/cowsanctuariesinitiative",
    },
    {
      icon: "fas fa-map",
      title: "Tourist Route Development",
      description:
        "When we explain as a tourist route, it seems that if we connect the huge population of India, which is close to us, to the places that match the religious, cultural and geographical aspects of Nepal.",
      link: "/programs/touristroutedevelopment",
    },
    {
      icon: "fas fa-leaf",
      title: "Cleaner greener Nepal Movement",
      description:
        "Shubhayatra Nepal is basically focused on the development of tourism. Nepal itself is a beautiful garden, a religious area. It is very diverse both naturally and culturally. There is diversity in the environment",
      link: "/programs/cleanergreenernepalmovement",
    },
  ];

  return (
    <section className="wpb_row row-fluid section-padd ">
      <div className="container">
        <div className="row ">
          <div className="wpb_column column_container col-sm-12 col-md-12 ">
            <div className="column-inner ">
              <div className="wpb_wrapper ">
                <div className="section-head ">
                  <h2>OUR PR0GRAMS</h2>
                  <h6 className="section-title">
                    Initiatives that drive positive change across Nepal
                  </h6>
                </div>
                <div className="empty_space_30 md-hidden sm-hidden">
                  <span className="empty_space_inner"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Programsprograms List */}
          {programs.map((course, index) => (
            <div
              className="wpb_column column_container col-sm-6 col-md-4"
              key={index}
            >
              <div className="column-inner h-full">
                <div className="wpb_wrapper h-full">
                  <div className="service-box service-box-padd icon-box ionic hover-box min-h-[320px] max-h-[480px] flex flex-col justify-between">
                    <i className={course.icon} aria-hidden="true"></i>
                    <div className="content-box flex-grow">
                      <h4>{course.title}</h4>
                      <p>{course.description}</p>
                    </div>
                    <Link
                      className="link-box pagelink white mt-4"
                      to={course.link}
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </Link>
                  </div>
                  <div class="empty_space_30">
                    <span class="empty_space_inner"></span>
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

export default Programs;
