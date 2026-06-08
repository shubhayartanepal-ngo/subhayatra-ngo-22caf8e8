import React from "react";
import { Navbar } from "../index";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="home-banner home-banner--hero ptb-100"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(15, 23, 42, 0.4)), url('/images/banner/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="home-banner__navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="banner-text-area">
              <h1>Empowering Communities Across Nepal</h1>
              <p>
                Promoting cultural heritage and sustainable development across
                Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
