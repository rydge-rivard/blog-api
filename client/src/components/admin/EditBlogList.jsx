import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);

  async function getBlogs() {
    try {
      const response = await fetch(`http://localhost:8080/blog`);
      const blogs = await response.json();
      setBlogList(blogs);
      console.log(blogs);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  const blogs = blogList.map((blog) => (
    <Link to={"/admin/" + blog._id} key={blog._id}>
      <li>
        <p>{blog.title}</p>
        <p>{blog.content}</p>
        <div>{blog.published ? "PUBLISHED" : "DRAFT"}</div>
      </li>
    </Link>
  ));

  return <ul className="blog-grid">{blogs}</ul>;
}
