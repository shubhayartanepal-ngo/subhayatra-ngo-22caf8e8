import { useParams } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "New Cancer Treatment Center Opens in Pokhara",
    image: "/images/blog/b1.jpg",
    content: `A state-of-the-art cancer treatment facility has opened in Pokhara, providing cutting-edge medical care...`,
  },
  {
    id: 2,
    title: "Kaligandaki Pilgrimage Center Nepal",
    image: "/images/blog/b2.jpg",
    content: `The Kaligandaki Pilgrimage Center is set to transform spiritual tourism across Nepal...`,
  },
  {
    id: 3,
    title: "Clean Nepal Campaign Reaches 100 Villages",
    image: "/images/blog/b3.jpg",
    content: `The Clean Nepal Campaign has successfully reached 100 rural villages, implementing waste systems and...`,
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <p className="text-center">News article not found.</p>;
  }

  return (
    <section className="container py-5">
      <h1 className="mb-3">{newsItem.title}</h1>
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="img-fluid mb-4"
      />
      <p className="text-justify text-muted">{newsItem.content}</p>
    </section>
  );
};

export default NewsDetail;
