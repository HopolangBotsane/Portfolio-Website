import { blogPostData } from "./BlogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {blogPostData.map((blogpost) => (
        <div key={blogpost.id} className="blogpost">
          <Link to={blogpost.link}> {/* Uncomment and add the link */}
            <img src={blogpost.img} alt={blogpost.imgAlt} />
            <div className="blogInfo">
              <h3>{blogpost.title}</h3>
              <p>{blogpost.description}</p>
              <ul>
                {blogpost.tasksPerformed.map((task, index) => (
                  <li key={index}>{task}</li> // Display each task
                ))}
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
