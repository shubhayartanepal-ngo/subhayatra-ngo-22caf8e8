import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";
import newsData from "../data/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id, 10));
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    lightbox.option({ resizeDuration: 200, wrapAround: true });
  }, []);

  useEffect(() => {
    if (!newsItem?.image) {
      setPhotos([]);
      return;
    }

    setPhotos(
      newsItem.image.map((src, idx) => ({
        src: encodeURI(src),
        width: 4,
        height: 3,
        alt: `${newsItem.title} image ${idx + 1}`,
        id: `news-${newsItem.id}-${idx}`,
      }))
    );
  }, [newsItem]);

  if (!newsItem) {
    return <p className="text-center">News article not found.</p>;
  }

  const relatedNews = newsData
    .filter((item) => item.id !== newsItem.id)
    .slice(0, 5);

  const contentParagraphs = (
    newsItem.content || "No content is available for this article."
  )
    .split(/\n+/)
    .filter(Boolean);

  return (
    <section className="news-detail-container py-5">
      <div className="news-paper-shell mx-auto">
        <div className="news-detail-back mb-4 text-center text-lg-start">
          <Link to="/newsevents" className="news-back-link">
            &larr; Back to News & Events
          </Link>
        </div>

        <div className="row g-5">
          <main className="col-lg-8">
            <article className="news-article bg-white border rounded shadow-sm p-4">
              <div className="article-header mb-4">
                <h1 className="article-title mt-3">{newsItem.title}</h1>
                {newsItem.date && (
                  <p className="article-meta">Published on {newsItem.date}</p>
                )}
              </div>

              {photos.length > 0 ? (
                <div className="news-detail-gallery mb-4">
                  <PhotoAlbum
                    layout="rows"
                    photos={photos}
                    targetRowHeight={240}
                    spacing={14}
                    renderPhoto={({
                      photo,
                      imageProps,
                      wrapperStyle,
                      wrapperProps,
                    }) => (
                      <div style={wrapperStyle} {...wrapperProps}>
                        <a
                          href={photo.src}
                          data-lightbox="gallery"
                          data-title={photo.alt}
                        >
                          <img
                            {...imageProps}
                            alt={photo.alt}
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                    )}
                  />
                </div>
              ) : (
                <div className="news-detail-image-fallback mb-4 text-center">
                  <img
                    src="/images/logo.png"
                    alt="News"
                    className="img-fluid"
                  />
                </div>
              )}

              <div className="article-body newspaper-columns">
                {contentParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>
          </main>

          <aside className="col-lg-4">
            <div className="news-sidebar bg-white border rounded shadow-sm p-4">
              <h5 className="sidebar-title mb-4">More articles</h5>
              <ul className="related-news-list list-unstyled mb-0">
                {relatedNews.map((item) => (
                  <li key={item.id} className="related-news-item mb-3">
                    <Link to={`/news/${item.id}`} className="related-news-link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
