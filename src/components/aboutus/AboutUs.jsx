import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="container">
        <div className="aboutus-inner">
          <div className="aboutus-left">
            <div className="artboard" aria-hidden="true"></div>
            <div
              className="composition"
              role="img"
              aria-label="Heritage photos"
            >
              <img
                srcSet=" /images/gallery/g28.jpeg 300w,  /images/gallery/g28.jpeg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Stupa and heritage"
                className="composition__photo composition__photo--p1"
                src=" /images/gallery/g28.jpeg"
              />

              <img
                srcSet="/images/programs/cleaner-greener.jpg 300w, /images/programs/cleaner-greener.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Cleaner Greener"
                className="composition__photo composition__photo--p2"
                src="/images/programs/cleaner-greener.jpg"
              />
              <img
                srcSet="/images/about/community.jpg 300w, /images/about/community.jpg 1000w"
                sizes="(max-width: 60em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Cow sanctuary"
                className="composition__photo composition__photo--p4"
                src="/images/about/community.jpg"
              />
              <img
                srcSet="/images/about/heritage.jpg 300w, /images/about/heritage.jpg 1000w"
                sizes="(max-width: 60em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Biodiversity program"
                className="composition__photo composition__photo--p3"
                src="/images/about/heritage.jpg"
              />
            </div>
          </div>

          <div className="aboutus-right">
            <div className="aboutus-title">
              <h2>WHO WE ARE</h2>
              <h6 className="aboutus-subtitle">
                Empowering Communities, Preserving Heritage
              </h6>
            </div>

            <div className="aboutus-description">
              <p className="aboutus-intro">
                Shubhayatra Nepal is a dedicated organization working to protect
                Nepal's cultural and natural heritage while uplifting
                communities through innovative programs.
              </p>
            </div>

            <div className="mission">
              <div className="mission-title">
                <h4>Our Mission:</h4>
              </div>
              <p className="mission-copy">
                To inspire change by fostering cultural preservation,
                environmental conservation, and sustainable development across
                Nepal.
              </p>

              <div className="feature-list">
                <div className="feature-row">
                  <div className="feature-icon">
                    <svg
                      className="aboutus-inline-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 10h18" />
                      <path d="M5 10v6" />
                      <path d="M9 10v6" />
                      <path d="M15 10v6" />
                      <path d="M19 10v6" />
                      <path d="M2.5 19h19" />
                      <path d="M12 4l9 4H3l9-4z" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Cultural Heritage Preservation</strong>
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-icon">
                    <svg
                      className="aboutus-inline-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.6 14.8c4.1.4 6.8-2.2 7.4-6.9-3.7-.2-6.5 1.6-7.4 6.9z" />
                      <path d="M9.4 14.2c1.5-.8 2.8-2 3.9-3.6" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Environmental Conservation</strong>
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-icon">
                    <svg
                      className="aboutus-inline-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="2.2" />
                      <circle cx="15.4" cy="9" r="2.2" />
                      <path d="M4.8 17c.7-2.2 2.5-3.4 4.2-3.4s3.5 1.2 4.2 3.4" />
                      <path d="M11.2 17c.6-2.2 2.4-3.4 4.2-3.4 1.7 0 3.4 1.1 4.1 3.4" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Community Empowerment</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
