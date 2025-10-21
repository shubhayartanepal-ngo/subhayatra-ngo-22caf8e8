import React, { useState } from "react";
import logo from "/images/logo.png";

import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  let menuDetailsWithCurrentActive =
    "menu-item-type-custom  menu-item-object-custom menu-item menu-item-1731 current-menu-item";
  let menuDetails =
    "menu-item-type-custom  menu-item-object-custom menu-item menu-item-1731";
  const location = useLocation(); // Get the current location

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the active state
  };
  return (
    <>
      <div className="main-header md-hidden sm-hidden">
        <div className="main-header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-wrap-table">
                  <div
                    id="site-logo"
                    className="site-logo col-media-left col-media-middle"
                  >
                    <NavLink to="/">
                      <img
                        id="navbar-logo"
                        className="logo-static"
                        src={logo}
                        alt=""
                      />
                      <img className="logo-scroll" src={logo} alt="" />
                    </NavLink>
                  </div>
                  <div className="col-media-body col-media-middle">
                    <div id="site-navigation" className="main-navigation fleft">
                      <ul id="primary-menu" className="menu">
                        <li className="menu-item">
                          <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/">About Us</NavLink>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/committee">
                                Committee
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/advisory">Advisory</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/ourteam">Our Team</NavLink>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/">Achievements</NavLink>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/award">Award</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/otherachievement">
                                Other Achievement
                              </NavLink>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/">Programs</NavLink>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/biodiversityprogram">
                                Biodiversity Program
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/humanitarianprogram">
                                Humanitarian Program
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/cowsanctuariesinitiative">
                                Cow Sanctuaries Initiative
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/touristroutedevelopment">
                                Tourist Route Development
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/cleanergreenernepalmovement">
                                Cleaner Greener Nepal Movement
                              </NavLink>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <NavLink to="/">Gallery</NavLink>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/gallery/photo">
                                PhotoGallery
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/gallery/video">
                                VideoGallery
                              </NavLink>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item">
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="site-logo"
                    className="site-logo col-media-left col-media-middle"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="header_mobile">
        <div className="mlogo_wrapper clearfix">
          <div className="row">
            <div className="col-md-12">
              <div className="col-wrap-table">
                <div
                  id="site-logo"
                  className="site-logo col-media-left col-media-middle"
                >
                  <NavLink to="#">
                    <img className="navbar-logo" src={logo} alt="" />
                  </NavLink>
                </div>
                <div
                  id="site-logo"
                  className="site-logo col-media-right col-media-middle"
                >
                  <div id="mmenu_toggle" className={isActive ? "active" : ""}>
                    <button onClick={toggleMenu}></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mmenu_wrapper">
          <div
            className="mobile_nav collapse"
            style={{ display: isActive ? "block" : "none" }}
          >
            <ul id="menu-main-menu" className="mobile_mainmenu">
              <li className="menu-item">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="menu-item menu-item-has-children">
                <NavLink to="/">About Us</NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/committee">Committee</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/advisory">Advisory</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/ourteam">Our Team</NavLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <NavLink to="/">Achievements</NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/award">Award</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/otherachievement">
                      Other Achievement
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <NavLink to="/">Programs</NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/biodiversityprogram">
                      Biodiversity Program
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/humanitarianprogram">
                      Humanitarian Program
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/cowsanctuariesinitiative">
                      Cow Sanctuaries Initiative
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/touristroutedevelopment">
                      Tourist Route Development
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/cleanergreenernepalmovement">
                      Cleaner Greener Nepal Movement
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <NavLink to="/gallery">Gallery</NavLink>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink to="/gallery/photo">PhotoGallery</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/gallery/video">VideoGallery</NavLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
