import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* <section className="creative-hero--section">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: "url('/images/banner/banner-2.jpg')",
          }}
        ></div>
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="content-box">
            <span className="hero-subtitle">
              Where Business Meets Excellence
            </span>
            <h1 className="hero-title">
              Where Tradition Meets Innovation in Pursuit of Excellence.
            </h1>
            <p className="hero-desc">
              Campus on a tour designed for prospective graduate and
              professional students. You will see how our university looks like,
              facilities, students, and life in this university. Meet our
              graduate admissions representative to learn more about our
              graduate programs and decide what is best for you.
            </p>
          </div>
        </div>
      </section> */}
      <section className="home-banner ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text-area">
                <h1>Empowering Communities Across Nepal</h1>
                <p>
                  Promoting cultural heritage and sustainable development across
                  Nepal
                </p>
                <a className="default-button" href="about.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-banner-area">
                <img
                  src="/images/banner/banner-2.jpg"
                  alt="Modern architecture with glass panels"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
