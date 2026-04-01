import React from "react";
import "./DashboardTable.css";

const DashboardNews = () => {
  const [news] = React.useState([
    {
      id: 1,
      title: "New Initiative Launched",
      author: "Admin",
      date: "2025-03-20",
      status: "published",
      views: 245,
    },
    {
      id: 2,
      title: "Biodiversity Report 2025",
      author: "John Doe",
      date: "2025-03-18",
      status: "published",
      views: 180,
    },
    {
      id: 3,
      title: "Community Feedback",
      author: "Jane Smith",
      date: "2025-03-22",
      status: "draft",
      views: 0,
    },
  ]);

  return (
    <div className="dashboard-news">
      <div className="page-header">
        <h3>News & Articles</h3>
        <button className="btn btn-primary">Write Article</button>
      </div>

      <div className="content-card">
        <div className="card-header">
          <h5>All News</h5>
          <div className="search-filter">
            <input type="text" placeholder="Search articles..." />
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {news.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.author}</td>
                    <td>{article.date}</td>
                    <td>
                      <span className={`status-badge ${article.status}`}>
                        {article.status.charAt(0).toUpperCase() +
                          article.status.slice(1)}
                      </span>
                    </td>
                    <td>{article.views}</td>
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

export default DashboardNews;
