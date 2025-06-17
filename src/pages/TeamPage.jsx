const TeamPage = () => {
  return (
    <>
      <div className="royal_preloader">
        <div id="page" className="site">
          <div id="content" className="site-content">
            <div className="page-header">
              <div className="container"></div>
            </div>
            <div className="entry-content">
              <div className="container">
                <div className="boxed-content">
                  <section className="wpb_row row-fluid section-padd no-bot">
                    <div className="container">
                      <div className="row">
                        <div className="wpb_column column_container col-sm-12">
                          <div className="column-inner">
                            <div className="wpb_wrapper">
                              <div className="section-head ">
                                <h6>
                                  <span>Board Members</span>
                                </h6>
                                <h2 className="section-title">
                                  Meet Our Board Members
                                </h2>
                              </div>

                              <div className="wpb_text_column wpb_content_element">
                                <div className="wpb_wrapper">
                                  <div className="empty_space_30"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <TopMemberCardf />
                      </div>
                    </div>
                    <hr />
                  </section>
                  <section className="wpb_row row-fluid section-padd no-top">
                    <div className="container">
                      <div className="row">
                        <div className="wpb_column column_container col-sm-12">
                          <div className="column-inner">
                            <div className="wpb_wrapper">
                              <div className="empty_space_30"></div>
                            </div>
                          </div>
                        </div>
                        <TeamMembers />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
