import React, { useEffect, useState } from "react";
import { Navbar } from "../index";
import { getHeroSection } from "../../apis/hero";
import "./Hero.css";

const FALLBACK_HERO = {
  title: "Empowering Communities Across Nepal",
  subtitle:
    "Promoting cultural heritage and sustainable development across Nepal",
  imageUrl: "/images/banner/image.png",
};

const Hero = () => {
  const [hero, setHero] = useState(FALLBACK_HERO);

  useEffect(() => {
    let mounted = true;

    const loadHero = async () => {
      const apiHero = await getHeroSection();
      if (!mounted || !apiHero) return;
      setHero((currentHero) => ({ ...currentHero, ...apiHero }));
    };

    loadHero();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      className="home-banner home-banner--hero ptb-100"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(15, 23, 42, 0.4)), url('${hero.imageUrl}')`,
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
              <h1>{hero.title}</h1>
              <p>{hero.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
