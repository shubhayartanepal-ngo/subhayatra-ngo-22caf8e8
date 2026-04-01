import React from "react";
import "./DashboardTable.css";

const DashboardPrograms = () => {
  const [programs] = React.useState([
    {
      id: 1,
      name: "Biodiversity Program",
      description: "Conservation and biodiversity awareness",
      status: "active",
      members: 85,
    },
    {
      id: 2,
      name: "Humanitarian Aid",
      description: "Support and relief programs",
      status: "active",
      members: 62,
    },
    {
      id: 3,
      name: "Cow Sanctuaries",
      description: "Animal welfare and protection",
      status: "active",
      members: 45,
    },
    {
      id: 4,
      name: "Cleaner Nepal",
      description: "Environmental cleanup initiatives",
      status: "active",
      members: 108,
    },
  ]);

  return (
    <div className="dashboard-programs">
      <div className="page-header">
        <h3>Programs</h3>
        <button className="btn btn-primary">Add Program</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>All Programs</h5>
          <div className="search-filter">
            <input type="text" placeholder="Search programs..." />
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Program Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Members</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => (
                  <tr key={program.id}>
                    <td>{program.name}</td>
                    <td>{program.description}</td>
                    <td>
                      <span className={`status-badge ${program.status}`}>
                        {program.status.charAt(0).toUpperCase() +
                          program.status.slice(1)}
                      </span>
                    </td>
                    <td>{program.members}</td>
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

export default DashboardPrograms;
