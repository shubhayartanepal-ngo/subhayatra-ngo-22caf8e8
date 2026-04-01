import React from "react";
import "./DashboardTable.css";

const DashboardEvents = () => {
  const [events] = React.useState([
    {
      id: 1,
      name: "Biodiversity Awareness",
      date: "2025-04-15",
      location: "Kathmandu",
      status: "upcoming",
      attendees: 45,
    },
    {
      id: 2,
      name: "Cleanup Campaign",
      date: "2025-04-20",
      location: "Tilottama",
      status: "upcoming",
      attendees: 32,
    },
    {
      id: 3,
      name: "Community Meeting",
      date: "2025-03-25",
      location: "Office",
      status: "completed",
      attendees: 28,
    },
    {
      id: 4,
      name: "Training Workshop",
      date: "2025-04-10",
      location: "Pokhara",
      status: "upcoming",
      attendees: 55,
    },
  ]);

  return (
    <div className="dashboard-events">
      <div className="page-header">
        <h3>Events</h3>
        <button className="btn btn-primary">Create Event</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>All Events</h5>
          <div className="search-filter">
            <input type="text" placeholder="Search events..." />
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Attendees</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>
                      <span className={`status-badge ${event.status}`}>
                        {event.status.charAt(0).toUpperCase() +
                          event.status.slice(1)}
                      </span>
                    </td>
                    <td>{event.attendees}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn btn-sm btn-edit" title="Edit">
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-delete"
                          title="Delete"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEvents;
