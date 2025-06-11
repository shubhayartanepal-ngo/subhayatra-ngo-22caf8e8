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
                              srcset="/images/heritage.jpg 300w, /images/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 1"
                              class="composition__photo composition__photo--p1"
                              src="/images/heritage.jpg"
                            />

                            <img
                              srcset="/images/heritage.jpg 300w, /images/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 2"
                              class="composition__photo composition__photo--p2"
                              src="/images/heritage.jpg"
                            />

                            <img
                              srcset="/images/heritage.jpg 300w, /images/heritage.jpg 1000w"
                              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                              alt="Photo 3"
                              class="composition__photo composition__photo--p3"
                              src="/images/heritage.jpg"
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
                            <h6>
                              <span className="">WHO WE ARE</span>
                            </h6>
                            <h2 className="section-title">
                              Empowering Communities, Preserving Heritage
                            </h2>
                          </div>

                          <div className="wpb_text_column wpb_content_element padding-box-2 text-dark">
                            <div className="wpb_wrapper">
                              <p>
                                We are the first institute in our province and
                                outside the Kathmandu Valley to run an MBA
                                program. We offered the MBA program of Sikkim
                                Manipal University from 2011 to 2016, and from
                                2016 to 2023, we ran the program in affiliation
                                with Asia Pacific University, Malaysia. Now,
                                with our experience running MBA programs from
                                foreign countries, we have taken a leap to apply
                                our expertise in affiliation with the Central
                                University of Nepal.
                              </p>
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
