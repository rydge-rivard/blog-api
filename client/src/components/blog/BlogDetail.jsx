import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../utils/Nav";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);

  async function getBlogDetail() {
    try {
      const response = await fetch(`http://localhost:8080/blog/${blogId}`);
      const blog = await response.json();
      setBlogDetails(blog);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBlogDetail();
  }, []);

  const blog = blogDetails.map((blog) => (
    <content className="blog-detail-wrapper" key={blog.id}>
      <h1>{blog.title}</h1>
      <h2>{blog.date}</h2>
      <p>By: Rydge Rivard</p>
      <div>{blog.content}</div>
    </content>
  ));

  return (
    <>
      <NavBar />
      <main>{blog}</main>
    </>
  );
}
