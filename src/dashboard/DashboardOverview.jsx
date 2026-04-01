import React from "react";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Events",
      count: 24,
      icon: "fa-calendar",
      color: "primary",
      trend: "+12%",
    },
    {
      title: "Active Programs",
      count: 8,
      icon: "fa-tasks",
      color: "success",
      trend: "+5%",
    },
    {
      title: "Total Members",
      count: 1245,
      icon: "fa-users",
      color: "info",
      trend: "+48%",
    },
    {
      title: "News Articles",
      count: 156,
      icon: "fa-newspaper-o",
      color: "warning",
      trend: "+23%",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "event",
      title: "Community Cleanup Drive",
      date: "2 hours ago",
      icon: "fa-calendar",
    },
    {
      id: 2,
      type: "news",
      title: "New Article Published",
      date: "5 hours ago",
      icon: "fa-newspaper-o",
    },
    {
      id: 3,
      type: "user",
      title: "New Member Joined",
      date: "1 day ago",
      icon: "fa-user-plus",
    },
    {
      id: 4,
      type: "program",
      title: "Program Updated",
      date: "2 days ago",
      icon: "fa-tasks",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Biodiversity Drive",
      date: "April 15, 2026",
      location: "Kathmandu",
    },
    {
      id: 2,
      name: "Cleanup Campaign",
      date: "April 20, 2026",
      location: "Tilottama",
    },
    {
      id: 3,
      name: "Team Meeting",
      date: "April 22, 2026",
      location: "Office",
    },
  ];

  return (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h3>Welcome back, Admin!</h3>
        <p>Here's what's happening with your organization today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">
              <i className={`fa ${stat.icon}`}></i>
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.title}</p>
              <h4 className="stat-number">{stat.count}</h4>
              <span className="stat-trend">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="overview-grid">
        {/* Recent Activity */}
        <div className="overview-card">
          <div className="card-header">
            <h5>Recent Activity</h5>
            <a href="#" className="card-link">
              View All
            </a>
          </div>
          <div className="card-body">
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <i className={`fa ${activity.icon}`}></i>
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">{activity.title}</p>
                    <span className="activity-date">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="overview-card">
          <div className="card-header">
            <h5>Upcoming Events</h5>
            <a href="#" className="card-link">
              View All
            </a>
          </div>
          <div className="card-body">
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <h6 className="event-name">{event.name}</h6>
                    <p className="event-date">
                      <i className="fa fa-calendar"></i> {event.date}
                    </p>
                    <p className="event-location">
                      <i className="fa fa-map-marker"></i> {event.location}
                    </p>
                  </div>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="overview-grid mt-4">
        <div className="overview-card">
          <div className="card-header">
            <h5>Activity Chart</h5>
          </div>
          <div className="card-body">
            <div className="chart-placeholder">
              <p>Coming Soon: Activity Chart</p>
              <div className="chart-bars">
                <div className="chart-bar" style={{ height: "60%" }}></div>
                <div className="chart-bar" style={{ height: "75%" }}></div>
                <div className="chart-bar" style={{ height: "45%" }}></div>
                <div className="chart-bar" style={{ height: "80%" }}></div>
                <div className="chart-bar" style={{ height: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-header">
            <h5>Quick Stats</h5>
          </div>
          <div className="card-body">
            <div className="quick-stats">
              <div className="stat-row">
                <span>Events This Month</span>
                <strong>12</strong>
              </div>
              <div className="stat-row">
                <span>Active Members</span>
                <strong>856</strong>
              </div>
              <div className="stat-row">
                <span>Published Articles</span>
                <strong>34</strong>
              </div>
              <div className="stat-row">
                <span>Gallery Images</span>
                <strong>285</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
