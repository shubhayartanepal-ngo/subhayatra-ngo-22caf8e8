import React, { useEffect } from "react";
import clgLogo from "/images/logo.png";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const collegeInfo = {
    address: "Manigram,Tilottama-15,Rupandehi,Nepal",
    phoneNumber: "+977- 9856077385",
    email: "info@shubhayatra.ngo",
    facebookLink: "",
    instagramLink: "",
  };
  return (
    <>
      <div id="site-footer" className="site-footer bg-second">
        <div className="main-footer ">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div id="media_image-1" className="widget widget_media_image">
                  <Link to="#">
                    <img id="footer-logo" src={clgLogo} alt="" />
                  </Link>
                </div>
                <div
                  id="custom_html-1"
                  className="widget_text widget widget_custom_html"
                >
                  <div className="textwidget custom-html-widget">
                    <p>
                      <i className="fa fa-map-marker"></i>
                      <span> Manigram,Tilottama-15,Rupandehi,Nepal</span>
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>
                      <span>
                        <Link
                          id="email-link"
                          className="text-light"
                          to="mailto:skycollegehelpdesk@gmail.com"
                          target="_blank"
                        >
                          {" "}
                          {collegeInfo.email}
                        </Link>
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-phone"></i>
                      <span> {collegeInfo.phoneNumber}</span>
                    </p>

                    <div className="ot-socials ">
                      <Link
                        target="_blank"
                        to={collegeInfo.facebookLink}
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link target="_blank" to="#" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link
                        target="_blank"
                        to={collegeInfo.instagramLink}
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link target="_blank" to="#" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <section
                  id="custom_html-3"
                  className="widget_text widget widget_custom_html padding-left"
                >
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="textwidget custom-html-widget">
                    <ul className="padd-left">
                      <li
                        className={
                          location.pathname === "/" ? "current-menu-item" : ""
                        }
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/about"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/about">About Us</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/about"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/about">Gallery</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/about"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/about"> Achievements</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/#" ? "current-menu-item" : ""
                        }
                      >
                        <Link to="/about">Programs</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/contact"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="col-md-4 col-sm-6">
                <section
                  id="mc4wp_form_widget-1 px-10"
                  className="widget widget_mc4wp_form_widget"
                >
                  <h4 className="widget-title">Subscribe</h4>
                  <p>Subscribe To Our Newsletter To Get Our Update News!</p>
                  <form className="newsletter-form" data-toggle="validator">
                    <div className="row al-content-center">
                      <div className="col-7">
                        <input
                          type="email"
                          className="input-newsletter form-control"
                          placeholder="Your Email"
                          name="EMAIL"
                          required
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-5">
                        <button className="default-button news-btn">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                    <div
                      id="validator-newsletter"
                      className="form-result"
                    ></div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-center m-0">
            © <strong>SUNHAYATRA NEPAL</strong> All Rights Reserved By{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="www.shubhayatra.ngo"
            ></a>
          </p>
        </div>
        <Link
          id="back-to-top"
          to="#"
          className="show"
          onClick={scrollToTop}
        ></Link>
      </div>
    </>
  );
};

export default Footer;
