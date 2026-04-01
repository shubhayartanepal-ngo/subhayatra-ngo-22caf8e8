import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("rememberEmail");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <img
              src="/images/logo.png"
              alt="Shubhayatra Logo"
              className="h-100"
            />
          </Link>
          <button
            className="sidebar-close-btn d-lg-none"
            onClick={toggleSidebar}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h6 className="nav-section-title">Main</h6>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-home"></i>
              <span className="nav-title">Overview</span>
            </NavLink>
            <NavLink
              to="/dashboard/events"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-calendar"></i>
              <span className="nav-title">Events</span>
            </NavLink>
            <NavLink
              to="/dashboard/programs"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-tasks"></i>
              <span className="nav-title">Programs</span>
            </NavLink>
          </div>

          <div className="nav-section">
            <h6 className="nav-section-title">Content</h6>
            <NavLink
              to="/dashboard/news"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-newspaper-o"></i>
              <span className="nav-title">News</span>
            </NavLink>
            <NavLink
              to="/dashboard/gallery"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-image"></i>
              <span className="nav-title">Gallery</span>
            </NavLink>
            {/* <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-users"></i>
              <span className="nav-title">Users</span>
            </NavLink> */}
          </div>

          <div className="nav-section">
            <h6 className="nav-section-title">Management</h6>
            {/* <NavLink
              to="/dashboard/reports"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-bar-chart"></i>
              <span className="nav-title">Reports</span>
            </NavLink> */}
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa fa-cog"></i>
              <span className="nav-title">Settings</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              <i className="fa fa-bars"></i>
            </button>
            <div className="header-title">
              <h2>Shubhayatra Dashboard</h2>
            </div>
          </div>

          <div className="header-right">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>

            <div className="header-icons">
              <button className="icon-btn notification-btn">
                <i className="fa fa-bell"></i>
                <span className="badge">3</span>
              </button>

              <div className="user-menu">
                <button
                  className="icon-btn user-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <div className="user-avatar">
                    <img src="/images/logo.png" alt="Shubhayatra Logo" />
                  </div>
                </button>

                {userMenuOpen && (
                  <div className="user-dropdown">
                    <Link to="/dashboard/profile" className="dropdown-item">
                      <i className="fa fa-user"></i> Profile
                    </Link>
                    <Link to="/dashboard/settings" className="dropdown-item">
                      <i className="fa fa-cog"></i> Settings
                    </Link>
                    <hr className="dropdown-divider" />
                    <button
                      className="dropdown-item logout-btn"
                      onClick={handleLogout}
                    >
                      <i className="fa fa-sign-out"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
