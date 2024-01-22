import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const blog = blogData.map((data) => (
    <>
      <section className="blog-detail-wrapper" key={data.blog._id}>
        <form action="" method="post">
          <fieldset>
            <ul>
              <li>
                <label htmlFor="title">*Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={data.blog.title}
                />
              </li>
              <li>
                <label htmlFor="title">*Title:</label>
                <textarea
                  name="title"
                  id="title"
                  cols="70"
                  rows="10"
                  required
                  value={data.blog.content}
                ></textarea>
              </li>
            </ul>
          </fieldset>
          <button>Submit Changes</button>
        </form>
      </section>
    </>
  ));

  return (
    <>
      <main>{blog}</main>
    </>
  );
}
