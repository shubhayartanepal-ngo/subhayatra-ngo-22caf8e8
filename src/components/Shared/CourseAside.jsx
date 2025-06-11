import React from "react";
import { Contact } from "..";
import { Link } from "react-router-dom";

const CourseAside = ({ currentMenuItem }) => {
  return (
    <>
      <aside
        id="sidebar"
        className="widget-area service-sidebar col-lg-4 col-md-4 col-sm-12 col-xs-12"
      >
        <section id="nav_menu-1" className="widget widget_nav_menu">
          <h4 className="widget-title">Coruses</h4>
          <div className="menu-service-menu-container">
            <ul id="menu-service-menu" className="menu">
              <li
                className={currentMenuItem === "mba" ? "current-menu-item" : ""}
              >
                <Link to="/mba">MBA</Link>
              </li>
              <li
                className={currentMenuItem === "bba" ? "current-menu-item" : ""}
              >
                <Link to="/bba">BBA</Link>
              </li>
              <li
                className={currentMenuItem === "bit" ? "current-menu-item" : ""}
              >
                <Link to="/bit">BIT (Proposed)</Link>
              </li>
            </ul>
          </div>
        </section>
        <Contact />
      </aside>
    </>
  );
};

export default CourseAside;
