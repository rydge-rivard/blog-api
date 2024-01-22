export default function NewBlog() {
  return (
    <main>
      <div className="blog-detail-wrapper">
        <h1>New Blog</h1>
        <form action={`http://localhost:8080/blog/new`} method="post">
          <fieldset>
            <ul>
              <li>
                <label htmlFor="title">*Title:</label>
                <input type="text" name="title" id="title" required />
              </li>
              <li>
                <label htmlFor="content">*Content:</label>
                <textarea
                  name="content"
                  id="content"
                  cols="70"
                  rows="10"
                ></textarea>
              </li>
              <li>
                <label htmlFor="published">*Published:</label>
                <input type="checkbox" name="published" id="published" />
              </li>
            </ul>
          </fieldset>
          <button>Save</button>
        </form>
      </div>
    </main>
  );
}
