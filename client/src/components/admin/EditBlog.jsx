import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PublishForm from "./PubishForm";
import CommentList from "./CommentList";

export default function BlogDetail() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  async function getBlogDetail() {
    try {
      const response = await fetch(`http://localhost:8080/blog/${blogId}`);
      const data = await response.json();
      setBlogData([data]);
      setContent(data.blog.content);
      setTitle(data.blog.title);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBlogDetail();
  }, []);

  const blog = blogData.map((data) => (
    <>
      <section className="blog-detail-wrapper">
        <form
          action={`http://localhost:8080/blog/${blogId}/update`}
          method="post"
        >
          <fieldset>
            <ul>
              <li key={data.blog._id + "title"}>
                <label htmlFor="title">*Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </li>
              <li key={data.blog._id + "content"}>
                <label htmlFor="content">*Content:</label>
                <textarea
                  name="content"
                  id="content"
                  cols="70"
                  rows="10"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </li>
            </ul>
          </fieldset>
          <button>Submit Changes</button>
        </form>
        <PublishForm data={data} />
        <CommentList comments={data.comments} />
      </section>
    </>
  ));

  return (
    <>
      <main>{blog}</main>
    </>
  );
}
