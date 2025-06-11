import React from "react";

const Contact = () => {
  const collegeInfo = {
    address: "Manigram, Tilottama-05",
    phoneNumber: "071-590150",
    email: "skycollegehelpdesk@gmail.com",
    facebookLink: "https://facebook.com/skycollege2024",
    instagramLink: "https://instagram.com/skyinternationalcollege",
  };
  return (
    <>
      <section className="wpb_row row-fluid section-padd">
        <div className="container">
          <div className="row">
            <div className="wpb_column column_container col-sm-12">
              <div className="column-inner">
                <div className="wpb_wrapper">
                  <div className="section-head ">
                    <h6>
                      <span>Support</span>
                    </h6>
                    <h2 className="section-title">How can we help</h2>
                  </div>

                  <div className="empty_space_12"></div>
                </div>
              </div>
            </div>
            <div className="wpb_column column_container col-sm-6 col-md-7">
              <div className="column-inner">
                <div className="wpb_wrapper">
                  <div className="wpcf7">
                    <div className="screen-reader-response"></div>
                    <form action="#" method="post" className="wpcf7-form">
                      <div className="row">
                        <div className="col-md-6">
                          <span className="wpcf7-form-control-wrap your-name">
                            <input
                              type="text"
                              name="your-name"
                              size="40"
                              className="wpcf7-form-control"
                              required=""
                              placeholder="Your Name"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap your-name">
                            <input
                              type="text"
                              name="your-name"
                              size="40"
                              className="wpcf7-form-control"
                              required=""
                              placeholder="Phone Number"
                            />
                          </span>
                        </div>
                        <div className="col-md-6">
                          <span className="wpcf7-form-control-wrap ">
                            <input
                              type="email"
                              name="your-email"
                              size="40"
                              className="wpcf7-form-control"
                              required=""
                              placeholder="Email Address"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap">
                            <select
                              className="wpcf7-form-control"
                              defaultValue=""
                            >
                              <option
                                disabled
                                value=""
                                style={{ color: "#999" }}
                              >
                                Select Course
                              </option>
                              <option value="MBA">MBA</option>
                              <option value="BBA">BBA</option>
                              <option value="BIT">BIT</option>
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="contact-mess">
                        <span className="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            className="wpcf7-form-control"
                            required=""
                            placeholder="Type your message"
                          ></textarea>
                        </span>
                      </div>
                      <p>
                        <input
                          type="submit"
                          value="SUBMIT"
                          className="wpcf7-form-control wpcf7-submit btn"
                        />
                      </p>
                    </form>
                  </div>
                  <div className="empty_space_30 lg-hidden md-hidden"></div>
                </div>
              </div>
            </div>
            <div className="wpb_column column_container col-sm-6 col-md-5">
              <div className="column-inner">
                <div className="wpb_wrapper ">
                  <div className="wpb_text_column wpb_content_element text-light contact-box  ">
                    <div className="wpb_wrapper text-end">
                      <h6 className="font12">Hotline</h6>
                      <h4>{collegeInfo.phoneNumber}</h4>
                      <h6 className="font12">Location</h6>
                      <h4>{collegeInfo.address}</h4>
                      <div className="empty_space_50  "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="wpb_column column_container col-sm-12 col-md-12">
              <div className="column-inner">
                <div className="wpb_wrapper ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.678132199509!2d83.47002957632073!3d27.634483576224603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968500738c11e9%3A0x19cb37768b8c396e!2sSky%20International%20College%20BBA%20%26%20MBA!5e0!3m2!1sen!2snp!4v1738063546725!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
