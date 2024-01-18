import { useEffect, useState } from "react";
import "./BlogList.css";

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

  console.log(blogList);

  const blogs = blogList.map((blog) => (
    <li key={blog.id}>
      <p>{blog.title}</p>
      <p>{blog.content}</p>
    </li>
  ));

  return <ul className="blog-grid">{blogs}</ul>;
}
