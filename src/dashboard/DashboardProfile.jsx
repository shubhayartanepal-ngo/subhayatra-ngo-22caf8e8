import React from "react";
import "./DashboardTable.css";

const DashboardProfile = () => {
  return (
    <div className="dashboard-profile">
      <div className="page-header">
        <h3>Profile</h3>
      </div>

      <div className="content-card">
        <div className="card-body">
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-avatar">
                <i className="fa fa-user"></i>
              </div>
              <div className="profile-info">
                <h4>John Doe</h4>
                <p>Administrator</p>
              </div>
              <button className="btn btn-primary">Edit Profile</button>
            </div>

            <div className="profile-form">
              <h5 className="mb-4">Personal Information</h5>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="John Doe"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  defaultValue="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  defaultValue="+977-123-456-7890"
                />
              </div>

              <div className="form-group">
                <label>Bio</label>
                <textarea
                  className="form-control"
                  rows="4"
                  defaultValue="Administrator at Shubhayatra NGO"
                ></textarea>
              </div>

              <h5 className="mb-3 mt-4">Change Password</h5>

              <div className="form-group">
                <label>Current Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" />
              </div>

              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
