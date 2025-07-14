import { Link } from "react-router-dom";

const BlogCard = ({ title, description, image, alt, link }) => (
  <div className="wpb_column column_container col-sm-6 col-md-4">
    <div className="blog-card text-left">
      <div className="blog-card-img">
        <Link to={link}>
          <img src={image} alt={alt} />
        </Link>
      </div>
      <div className="blog-card-text-area">
        <h4>
          <Link to={link}>{title}</Link>
        </h4>
        <p>{description}</p>
        <Link className="pagelink gray mt-4" to={link}>
          Read more
        </Link>
      </div>
    </div>
  </div>
);
export default BlogCard;
