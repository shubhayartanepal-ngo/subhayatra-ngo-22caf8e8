const AboutUs = () => {
  return (
    <>
      <section className="wpb_row row-fluid section-padd row-has-fill row-o-equal-height row-o-content-middle row-flex bg-light">
        <div className="container">
          <div className="row">
            <div className="wpb_column column_container col-sm-12">
              <div className="column-inner">
                <div className="wpb_wrapper">
                  <div className="row wpb_row inner row-fluid row-o-equal-height row-o-content-middle row-flex">
                    <div className="wpb_column column_container col-sm-12 col-md-6 col-has-fill ">
                      <div className="column-inner">
                        <div className="wpb_wrapper">
                          <div class="composition">
                            <img
                              srcset="/images/about/heritage.jpg 300w, /images/about/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 1"
                              class="composition__photo composition__photo--p1"
                              src="/images/about/heritage.jpg"
                            />

                            <img
                              srcset="/images/about/heritage.jpg 300w, /images/about/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 2"
                              class="composition__photo composition__photo--p2"
                              src="/images/about/heritage.jpg"
                            />

                            <img
                              srcset="/images/about/heritage.jpg 300w, /images/about/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 3"
                              class="composition__photo composition__photo--p3"
                              src="/images/about/heritage.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" wpb_column column_container col-sm-12 col-md-6">
                      <div className="column-inner">
                        <div className="wpb_wrapper">
                          {/* <div className="empty_space_60 lg-hidden ">
                            <span className="empty_space_inner"></span>
                          </div> */}

                          <div className="section-head padding-box-2 ">
                            <h2>
                              <span className="">WHO WE ARE</span>
                            </h2>
                            <h6 className="section-title">
                              Empowering Communities, Preserving Heritage
                            </h6>
                          </div>

                          <div className="wpb_text_column wpb_content_element padding-box-2 text-dark">
                            <div className="wpb_wrapper">
                              <p>
                                Shubhayatra Nepal is a dedicated organization
                                working to protect Nepal&apos;s cultural and
                                natural heritage while uplifting communities
                                through innovative programs.
                              </p>
                            </div>
                            <div className="why-we-text-list">
                              <i className="flaticon-earth-globe"></i>
                              <h4>Our Mission:</h4>
                              <p>
                                To inspire change by fostering cultural
                                preservation, environmental conservation, and
                                sustainable development across Nepal.
                              </p>
                              <ul>
                                <li>
                                  Preserving Nepal’s cultural and spiritual
                                  landmarks.
                                </li>
                                <li>
                                  Advancing environmental sustainability through
                                  clean-up drives and waste management.
                                </li>
                                <li>
                                  Empowering communities with education and
                                  resources for a better future.
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* <div className="wpb_text_column wpb_content_element paddtop-75 padding-box-2 info-box text-dark">
                            <div className="wpb_wrapper">
                              <div className="sign">
                                <p>
                                  <img
                                    className="alignnone size-full wp-image-1087"
                                    src="/images/principal-sign.png"
                                    alt=""
                                    width="79"
                                    height="49"
                                  />
                                </p>
                                <h5>Sanjeev Bhandari</h5>
                                <p>President</p>
                              </div>
                            </div>
                          </div> */}
                          <div className="empty_space_60 lg-hidden">
                            <span className="empty_space_inner"></span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default AboutUs;
