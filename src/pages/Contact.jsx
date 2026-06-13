import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getContactInfo } from "../apis/contact";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    location: "walling - 8 syangja/Tilottama- 5 Manigram",
    email: "shubhayatran@gmail.com",
    phoneNumber: "+977- 9856077385",
  });

  useEffect(() => {
    getContactInfo().then((info) => {
      if (info) {
        setContactInfo({
          location:
            info.location || "walling - 8 syangja/Tilottama- 5 Manigram",
          email: info.email || "shubhayatran@gmail.com",
          phoneNumber: info.phoneNumber || "+977- 9856077385",
        });
      }
    });
  }, []);
  return (
    <div>
      <section className="uni-banner">
        <div className="container">
          <div className="uni-banner-text-area">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <Link to="/" href="index.html">
                  Home
                </Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contcat-card-area pt-70 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contact-card">
                <i className="fas fa-map-marker-alt"></i>
                <h5>Our Location</h5>
                <p>
                  <a
                    href="https://goo.gl/maps/zZEtThmwqkPz2GTE7"
                    target="_blank"
                  >
                    {contactInfo.location}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contact-card">
                <i className="fas fa-envelope"></i>
                <h5>Our Email</h5>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contact-card">
                <i className="fas fa-phone-alt"></i>
                <h5>PHONE NUMBER</h5>
                <p>
                  <a href={`tel:${contactInfo.phoneNumber}`}>
                    {" "}
                    {contactInfo.phoneNumber}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-area pb-100">
        <div className="container">
          <div className="default-section-title default-section-title-middle">
            <h3>Get In Touch</h3>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-lg-4">
                <div className="google-map pr-20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.9656364733391!2d83.47395096824819!3d27.630309959518986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685001f84b05f%3A0x52344bf8fac75f0c!2sShubhayatra%20Nepal!5e0!3m2!1sen!2snp!4v1779099796188!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form-text-area">
                  <form id="contactForm">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            placeholder="Phone Number"
                            id="phone_number"
                            required
                            data-error="Please enter your phone number"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            className="form-control"
                            placeholder="Subject"
                            id="msg_subject"
                            required
                            data-error="Please enter your subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Your Messages.."
                            cols="30"
                            rows="5"
                            required
                            data-error="Please enter your message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              name="gridCheck"
                              value="I agree to the terms and privacy policy."
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              required
                            />

                            <label
                              className="form-check-label"
                              htmlFor="gridCheck"
                            >
                              I agree to the <a href="#">terms</a> and{" "}
                              <a href="#">privacy policy</a>
                            </label>
                            <div className="help-block with-errors gridCheck-error"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12">
                        <button className="default-button" type="submit">
                          <span>Send Message</span>
                        </button>
                        <div
                          id="msgSubmit"
                          className="h6 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
