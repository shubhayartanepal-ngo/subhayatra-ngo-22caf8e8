import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <p className="text-center">News article not found.</p>;
  }

  return (
    <section className="container py-5">
      <h3 className="mb-3">{newsItem.title}</h3>
      <div className="row">
        {newsItem.image ? (
          <div className="col-12">
            <PhotoGrid items={newsItem.image} />
          </div>
        ) : (
          <div className="text-center">
            <img src="/images/logo.png" alt="" className="mb-4 news-img" />
          </div>
        )}
      </div>
      <div>
        <p className="text-justify text-dark">{newsItem.content}</p>
      </div>
    </section>
  );
};

export default NewsDetail;
