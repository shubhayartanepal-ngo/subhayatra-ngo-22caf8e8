import { useParams } from "react-router-dom";
import newsData from "../data/newsData";

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
        {newsItem.image.map((img) => (
          <div className="col- col-md-6 col-lg-4" key={img}>
            <img src={img} alt="" className="img-fluid mb-4" />
          </div>
        ))}
      </div>
      <div>
        <p className="text-justify text-muted">{newsItem.content}</p>
      </div>
    </section>
  );
};

export default NewsDetail;
