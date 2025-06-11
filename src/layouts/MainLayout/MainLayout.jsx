import React, { useEffect } from "react";
import { Navbar, Footer } from "../../components";

import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <div id="page" className="site">
        <header
          id="site-header"
          className="site-header mobile-header-blue header-style-1"
        >
          <Navbar />
        </header>
        <div id="content" className="site-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
