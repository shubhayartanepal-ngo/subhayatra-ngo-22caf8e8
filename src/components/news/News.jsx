import { Link } from "react-router-dom";
import newsData from "../../data/newsData";

const News = () => {
  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-4">
          <h2>Latest News & Updates</h2>
          <h6 className="section-title">
            Stay informed with the latest developments, initiatives, and success
            stories shaping Nepal's progress and sustainability.
          </h6>
        </div>

        <div className="row">
          {newsData.map((newsItem) => (
            <div key={newsItem.id} className="col-sm-6 col-md-4 mb-4">
              <div className="blog-card text-left border rounded shadow-sm">
                <div className="blog-card-img">
                  <img
                    src={newsItem.image[0]}
                    alt={newsItem.title}
                    className="w-100 h-auto"
                  />
                </div>
                <div className="blog-card-text-area p-3">
                  <h4>{newsItem.title}</h4>
                  <Link to={`/news/${newsItem.id}`} className="mt-3">
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
