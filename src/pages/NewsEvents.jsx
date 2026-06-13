import React, { useEffect, useState } from "react";
import newsData from "../data/newsData";
import { Link } from "react-router-dom";
import { getNews, normalizeApiNewsItem } from "../apis/news";

const NewsEvents = () => {
  const [news, setNews] = useState(newsData);

  useEffect(() => {
    let mounted = true;

    const loadNews = async () => {
      const apiNews = await getNews();
      if (!mounted || !Array.isArray(apiNews) || apiNews.length === 0) return;
      setNews(apiNews.map(normalizeApiNewsItem));
    };

    loadNews();

    return () => {
      mounted = false;
    };
  }, []);

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="wpb_row row-fluid section-padd bg-light">
      <div className="container">
        <div className="section-head text-center mb-4">
          <h2>All News & Events</h2>
          <h6 className="section-title">
            Explore all updates, news, and events in one place.
          </h6>
        </div>
        <div className="row">
          {sortedNews.map((newsItem) => (
            <div key={newsItem.id} className="col-sm-6 col-md-4 mb-4">
              <div className="blog-card text-left border rounded shadow-sm">
                <div
                  className="blog-card-img overflow-hidden"
                  style={{ height: "220px" }}
                >
                  <img
                    src={
                      newsItem.image && newsItem.image.length > 0
                        ? newsItem.image[0]
                        : "/images/logo.png"
                    }
                    alt={newsItem.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="blog-card-text-area p-3">
                  <h4>{newsItem.title}</h4>
                  <p className="text-muted mb-2">{newsItem.date}</p>
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

export default NewsEvents;
