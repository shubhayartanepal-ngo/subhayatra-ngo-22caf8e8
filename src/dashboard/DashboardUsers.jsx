import React, { useState } from "react";
import "./DashboardTable.css";

const DashboardUsers = () => {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2025-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "active",
      joinDate: "2025-02-20",
    },
    {
      id: 3,
      name: "Robert Wilson",
      email: "robert@example.com",
      role: "Member",
      status: "inactive",
      joinDate: "2025-03-10",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Member",
      status: "active",
      joinDate: "2025-03-15",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Moderator",
      status: "active",
      joinDate: "2025-03-20",
    },
  ]);

  return (
    <div className="dashboard-users">
      <div className="page-header">
        <h3>Users Management</h3>
        <button className="btn btn-primary">Add New User</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>All Users</h5>
          <div className="search-filter">
            <input type="text" placeholder="Search users..." />
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={`role-badge role-${user.role.toLowerCase()}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${user.status}`}>
                        {user.status.charAt(0).toUpperCase() +
                          user.status.slice(1)}
                      </span>
                    </td>
                    <td>{user.joinDate}</td>
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

export default DashboardUsers;
