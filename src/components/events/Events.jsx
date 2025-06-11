import React from "react";

const Events = () => {
  return (
    <>
      <section className="wpb_row row-fluid section-padd bg-light">
        <div className="container">
          <div className="row ">
            <div className="wpb_column column_container col-sm-12 col-md-12 ">
              <div className="column-inner ">
                <div className="wpb_wrapper ">
                  <div className="section-head ">
                    <h2>Upcoming City Events</h2>
                    <h6 className="section-title">
                      Lorem ipsum dolor sit amet
                    </h6>
                  </div>
                  <div className="empty_space_30 md-hidden sm-hidden">
                    <span className="empty_space_inner"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column column_container col-sm-12 col-md-12 text-center">
              <div className="column-inner ">
                <div className="wpb_wrapper ">
                  <div className="section-content">
                    <div className="row justify-content-center">
                      <div className="wpb_column column_container col-sm-6 col-md-4">
                        <div className="events-card ">
                          <img src="images/events/e1.jpg" alt="event" />
                          <div className="events-card-text text-left">
                            <ul>
                              <li>Conference</li>
                              <li>April 11, 2024</li>
                            </ul>
                            <h4>
                              <a href="event-details.html">
                                Annual Conference 2024
                              </a>
                            </h4>
                            <p>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              <a href="https://goo.gl/maps/QTg39qSWoB5fdndT7">
                                <span>
                                  City Center, Manigram, Tilottama-15,
                                  Rupandehi, Nepal
                                </span>
                              </a>
                            </p>
                            <a
                              className="read-more-btn"
                              href="event-details.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column column_container col-sm-6 col-md-4">
                        <div className="events-card">
                          <img src="images/events/e2.jpg" alt="event2" />
                          <div className="events-card-text">
                            <ul>
                              <li>Conference</li>
                              <li>Apr 13, 2024</li>
                            </ul>
                            <h4>
                              <a href="event-details.html">
                                Negotiation In Government
                              </a>
                            </h4>
                            <p>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              <a href="https://goo.gl/maps/QTg39qSWoB5fdndT7">
                                City Center, Manigram, Tilottama-15, Rupandehi,
                                Nepal
                              </a>
                            </p>
                            <a
                              className="read-more-btn"
                              href="event-details.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column column_container col-sm-6 col-md-4">
                        <div className="events-card">
                          <img src="images/events/e3.jpg" alt="event3" />
                          <div className="events-card-text">
                            <ul>
                              <li>Conference</li>
                              <li>Apr 14, 2024</li>
                            </ul>
                            <h4>
                              <a href="event-details.html">
                                Annual Health Conference
                              </a>
                            </h4>
                            <p>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              <a href="https://goo.gl/maps/QTg39qSWoB5fdndT7">
                                City Center, Manigram, Tilottama-15, Rupandehi,
                                Nepal
                              </a>
                            </p>
                            <a
                              className="read-more-btn"
                              href="event-details.html"
                            >
                              Read More
                            </a>
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

        <section className="fun-facts pt-70 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="fun-facts-card fun-facts-card-2">
                  <i className="flaticon-smart-city"></i>
                  <h2>
                    <span className="odometer" data-count="46712">
                      +100
                    </span>
                  </h2>
                  <p>People In The City</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="fun-facts-card fun-facts-card-2">
                  <i className="flaticon-location-1"></i>
                  <h2>
                    <span className="odometer" data-count="22">
                      200
                    </span>
                    <span className="sign-icon">K</span>
                  </h2>
                  <p>Square Of City</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="fun-facts-card fun-facts-card-2">
                  <i className="flaticon-park-1"></i>
                  <h2>
                    <span className="odometer" data-count="300">
                      400
                    </span>
                    <span className="sign-icon">+</span>
                  </h2>
                  <p>Year Of Foundation</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="fun-facts-card last-card fun-facts-card-2">
                  <i className="flaticon-award"></i>
                  <h2>
                    <span className="odometer" data-count="1000">
                      1000
                    </span>
                    <span className="sign-icon">+</span>
                  </h2>
                  <p>Successful Programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Events;
