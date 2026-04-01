import React from "react";
import "./DashboardTable.css";

const DashboardReports = () => {
  const [reports] = React.useState([
    {
      id: 1,
      title: "Monthly Activity Report",
      date: "2025-03-20",
      type: "activity",
      format: "PDF",
    },
    {
      id: 2,
      title: "Quarterly Financial Report",
      date: "2025-03-15",
      type: "financial",
      format: "Excel",
    },
    {
      id: 3,
      title: "Event Summary Report",
      date: "2025-03-10",
      type: "events",
      format: "PDF",
    },
  ]);

  return (
    <div className="dashboard-reports">
      <div className="page-header">
        <h3>Reports</h3>
        <button className="btn btn-primary">Generate Report</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>Recent Reports</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Report Title</th>
                  <th>Type</th>
                  <th>Format</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.title}</td>
                    <td>
                      <span className="role-badge role-editor">
                        {report.type}
                      </span>
                    </td>
                    <td>{report.format}</td>
                    <td>{report.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="btn btn-sm btn-edit"
                          title="Download"
                        >
                          <i className="fa fa-download"></i>
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

export default DashboardReports;
