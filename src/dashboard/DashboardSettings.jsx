import React from "react";
import "./DashboardTable.css";

const DashboardSettings = () => {
  return (
    <div className="dashboard-settings">
      <div className="page-header">
        <h3>Settings</h3>
      </div>

      <div className="content-card">
        <div className="card-body">
          <div className="settings-form">
            <h5 className="mb-4">Organization Settings</h5>

            <div className="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Shubhayatra"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue="info@Shubhayatra.org"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                defaultValue="+977-1-234-5678"
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                className="form-control"
                defaultValue="Tilottama, Nepal"
              ></textarea>
            </div>

            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
