import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <section className="wpb_row row-fluid section-padd bg-light">
        <div className="container">
          <div className="row ">
            <div className="wpb_column column_container col-sm-12 col-md-12 ">
              <div className="column-inner ">
                <div className="wpb_wrapper ">
                  <div className="section-head ">
                    <h2>Latest News & Updates</h2>
                    <h6 className="section-title">
                      Stay informed with the latest developments, initiatives,
                      and success stories shaping Nepal&apos;s progress and
                      sustainability.
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
                        <div className="blog-card text-left">
                          <div className="blog-card-img">
                            <a href="blog-details.html">
                              <img src="/images/blog/b1.jpg" alt="blog1" />
                            </a>
                          </div>
                          <div className="blog-card-text-area">
                            <h4>
                              <a href="blog-details.html">
                                New Cancer Treatment Center Opens in Pokhara
                              </a>
                            </h4>
                            <p>
                              State-of-the-art facility brings hope to thousands
                              of patients in western Nepal.
                            </p>
                            <Link
                              className="pagelink gray  mt-4"
                              target="_self"
                              rel="noopener noreferrer"
                            >
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column column_container col-sm-6 col-md-4">
                        <div className="blog-card text-left">
                          <div className="blog-card-img">
                            <a href="blog-details.html">
                              <img src="/images/blog/b2.jpg" alt="blog2" />
                            </a>
                          </div>
                          <div className="blog-card-text-area">
                            <h4>
                              <a href="blog-details.html">
                                Kaligandaki Pilgrimage Center Nepal
                              </a>
                            </h4>
                            <p>
                              Major milestone achieved in spiritual tourism
                              development project.
                            </p>
                            <Link
                              className="pagelink gray  mt-4"
                              target="_self"
                              rel="noopener noreferrer"
                            >
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column column_container col-sm-6 col-md-4">
                        <div className="blog-card text-left">
                          <div className="blog-card-img">
                            <a href="blog-details.html">
                              <img src="/images/blog/b3.jpg" alt="blog3" />
                            </a>
                          </div>
                          <div className="blog-card-text-area">
                            <h4>
                              <a href="blog-details.html">
                                Clean Nepal Campaign Reaches 100 Villages
                              </a>
                            </h4>
                            <p>
                              Environmental initiative successfully implements
                              waste management systems.
                            </p>
                            <Link
                              className="pagelink gray  mt-4"
                              target="_self"
                              rel="noopener noreferrer"
                            >
                              Read more
                            </Link>
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

export default News;
