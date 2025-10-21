import React from "react";

const Award = () => {
  //   const awards = [
  //     {
  //       id: 1,
  //       title: "National Community Service Excellence Award",
  //       year: "2023",
  //       awardedBy: "Ministry of Social Welfare",
  //       description: "Highest recognition for outstanding contribution to community development and social welfare across Nepal.",
  //       significance: "National Level"
  //     },
  //     {
  //       id: 2,
  //       title: "Environmental Conservation Champion",
  //       year: "2023",
  //       awardedBy: "Environmental Protection Agency",
  //       description: "Recognized for exceptional efforts in biodiversity conservation and environmental protection initiatives.",
  //       significance: "Regional Level"
  //     },
  //     {
  //       id: 3,
  //       title: "Humanitarian Excellence Award",
  //       year: "2022",
  //       awardedBy: "International Humanitarian Council",
  //       description: "Honored for innovative approaches in humanitarian programs and disaster relief efforts.",
  //       significance: "International Level"
  //     },
  //     {
  //       id: 4,
  //       title: "Best NGO Leadership Award",
  //       year: "2022",
  //       awardedBy: "NGO Federation of Nepal",
  //       description: "Acknowledged for exemplary leadership in the NGO sector and effective organizational management.",
  //       significance: "National Level"
  //     },
  //     {
  //       id: 5,
  //       title: "Community Partnership Excellence",
  //       year: "2021",
  //       awardedBy: "Local Government Association",
  //       description: "Celebrated for building strong partnerships with local communities and government bodies.",
  //       significance: "Regional Level"
  //     },
  //     {
  //       id: 6,
  //       title: "Youth Development Recognition",
  //       year: "2021",
  //       awardedBy: "Youth Development Board",
  //       description: "Recognized for significant contribution to youth empowerment and skill development programs.",
  //       significance: "National Level"
  //     }
  //   ];

  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-5">
          <h2>Awards & Recognition</h2>
          <h6 className="section-title">
            Celebrating our formal recognition and prestigious awards
          </h6>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center">
            <img
              src="/images/logo.png"
              alt="Subhayatra Awards"
              className="img-fluid mb-4"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
