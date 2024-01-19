import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../utils/Nav";
import "./BlogDetail.css";
import BlogCommentList from "./BlogCommentList";

export default function BlogDetail() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState([]);

  async function getBlogDetail() {
    try {
      const response = await fetch(`http://localhost:8080/blog/${blogId}`);
      const data = await response.json();
      setBlogData([data]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBlogDetail();
  }, []);

  console.log(blogData);

  const blog = blogData.map((data) => (
    <>
      <section className="blog-detail-wrapper" key={data.blog._id}>
        <h1>{data.blog.title}</h1>
        <h2>{data.blog.date}</h2>
        <p>By: Rydge Rivard</p>
        <div>{data.blog.content}</div>
      </section>
      <section className="blog-detail-wrapper" key={data.blog._id}>
        <h1>Comments</h1>
        <BlogCommentList comments={data.comments} />
      </section>
    </>
  ));

  return (
    <>
      <NavBar />
      <main>{blog}</main>
    </>
  );
}
