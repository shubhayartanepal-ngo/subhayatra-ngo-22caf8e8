import { Link } from "react-router-dom";
import newsData from "../../data/newsData";

const News = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head  mb-4">
          <div className="section-head text-center mb-4 d-flex justify-content-between align-items-center">
            <h2 className="mb-0 ">Latest News & Updates</h2>
            <span>
              <Link
                to={`/newsevents`}
                className="mt-3 text-decoration-underline"
              >
                View All News & Events
              </Link>
            </span>
          </div>
          <h6 className="section-title">
            Stay informed with the latest developments, initiatives, and success
            stories shaping Nepal progress and sustainability.
          </h6>
        </div>

        <div className="row">
          {newsData
            .slice(-3)
            .reverse()
            .map((newsItem) => (
              <div key={newsItem.id} className="col-sm-6 col-md-4 mb-4">
                <div className="blog-card text-left border rounded shadow-sm">
                  <div
                    className="blog-card-img overflow-hidden"
                    style={{ height: "220px" }}
                  >
                    <img
                      src={
                        newsItem.image ? newsItem.image[0] : "/images/logo.png"
                      }
                      alt={newsItem.title}
                      className="w-100 h-auto object-cover"
                    />
                  </div>
                  <div className="blog-card-text-area p-3">
                    <h4>{newsItem.title}</h4>
                    <Link
                      to={`/news/${newsItem.id}`}
                      className="mt-3 text-decoration-underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default News;
