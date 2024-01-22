import { useEffect, useState } from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);

  async function getBlogs() {
    try {
      const response = await fetch(`http://localhost:8080/blog`);
      const blogs = await response.json();
      setBlogList(blogs);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  const published = blogList.filter((blog) => blog.published !== false);
  const blogs = published.map((blog) => (
    <Link to={"/blog/" + blog._id} key={blog._id}>
      <li>
        <p>{blog.title}</p>
        <p>{blog.content}</p>
      </li>
    </Link>
  ));

  return <ul className="blog-grid">{blogs}</ul>;
}
